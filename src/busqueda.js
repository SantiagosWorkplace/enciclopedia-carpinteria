// Búsqueda por texto completo. La primera vez carga todos los artículos (cada uno
// es un fragmento aparte) y arma un índice en memoria; después responde al instante.
import { capitulos } from './contenido/indice.js'
import { cargarArticulo, disponible } from './articulos.js'

export const normalizar = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

// Quita el formato en línea: **negrita**, [[texto|id]], [texto](#/ruta).
const plano = (s) => String(s)
  .replace(/\[\[([^\]|]+)(\|[^\]]+)?\]\]/g, '$1')
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/\*+/g, '')

// Palabras que no ayudan a encontrar nada: «cómo hago un cajón» busca «cajón».
const VACIAS = new Set(('a al algo como con cual cuales cuando de del donde el en es esta este esto hacer hace hago ' +
  'la las le lo los me mejor mi mas muy necesito o para pero por puedo que quiero se si sin sirve sobre su sus tengo tipo ' +
  'un una uno unos unas usar uso y ya').split(' '))

// Raíz simple: «cajones» encuentra «cajón», «barnizar» encuentra «barniz» y
// «afilar» encuentra «afilado». Si la raíz queda muy corta, se usa la palabra entera.
const raiz = (t) => {
  const r = t.replace(/(ando|iendo|ados|adas|ado|ada|ar|er|ir|es|s)$/, '')
  return r.length >= 4 ? r : t
}

// Palabras de todos los días que en el oficio se dicen de otra forma.
const SINONIMOS = {
  pegar: ['peg', 'encol', 'adhesiv'], pegamento: ['adhesiv', 'encol'], cola: ['cola', 'encol', 'adhesiv'],
  pintar: ['pint'], pintura: ['pint'], lijar: ['lij'], lija: ['lij'], lijado: ['lij'],
  cortar: ['cort', 'serr', 'sierra'], serrar: ['serr', 'sierra'], unir: ['union', 'ensambl'], juntar: ['union', 'ensambl'],
}

// Cada palabra de la consulta da un grupo de alternativas; basta con encontrar una.
export function terminos(consulta) {
  return normalizar(consulta)
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1 && !VACIAS.has(t))
    .map((t) => [...new Set([raiz(t), ...(SINONIMOS[t] || [])])])
}

function textoBloques(bloques) {
  const titulos = []
  const cuerpo = []
  for (const b of bloques) {
    if (b.tipo === 'h2' || b.tipo === 'h3') titulos.push(b.texto)
    else if (b.texto) cuerpo.push(b.texto)
    for (const i of b.items || []) cuerpo.push(...[i].flat())
    for (const f of b.filas || []) cuerpo.push(...f)
    for (const x of [b.titulo, b.nota, b.pie, b.alt, ...(b.columnas || [])]) if (x) cuerpo.push(x)
    for (const f of b.fotos || []) cuerpo.push(f.pie, f.alt)
  }
  return { titulos: titulos.map(plano), cuerpo: cuerpo.filter(Boolean).map(plano) }
}

let indice = null
export async function cargarIndice() {
  if (indice) return indice
  const lista = capitulos.flatMap((c) => c.articulos.map((a) => ({ c, a })))
  indice = await Promise.all(lista.map(async ({ c, a }) => {
    const { titulos, cuerpo } = disponible(c.id, a.id) ? textoBloques((await cargarArticulo(c.id, a.id)).bloques) : { titulos: [], cuerpo: [] }
    return {
      c, a, cuerpo,
      nTitulo: normalizar(a.titulo),
      nResumen: normalizar(`${a.resumen} ${c.titulo}`),
      nSecciones: normalizar(titulos.join(' ')),
      nCuerpo: cuerpo.map(normalizar),
      nTodo: normalizar([a.titulo, a.resumen, ...titulos, ...cuerpo].join(' ')),
    }
  }))
  return indice
}

const veces = (texto, t) => texto.split(t).length - 1

// Ordena por relevancia: el título pesa más que las secciones, y estas más que el texto.
// Las palabras que aparecen en casi todos los artículos, como «madera», pesan menos.
// Primero exige todas las palabras; si nada las tiene todas, acepta cualquiera.
export function buscar(idx, consulta) {
  const ts = terminos(consulta)
  if (!ts.length) return []
  const peso = ts.map((g) => {
    const df = idx.filter((e) => g.some((t) => e.nTodo.includes(t))).length
    return Math.log(1 + idx.length / Math.max(1, df))
  })
  const puntos = (e, t) => {
    const enCuerpo = e.nCuerpo.reduce((n, p) => n + veces(p, t), 0)
    return 12 * veces(e.nTitulo, t) + 5 * veces(e.nResumen, t) + 4 * veces(e.nSecciones, t) + Math.min(enCuerpo, 8)
  }
  const puntuar = (e, todas) => {
    let total = 0
    let encontradas = 0
    ts.forEach((g, i) => {
      const p = Math.max(...g.map((t) => puntos(e, t)))
      if (p > 0) encontradas++
      total += peso[i] * p
    })
    if (todas) return encontradas === ts.length ? total : 0
    // Sin coincidencia completa, primero los que tienen más palabras de la consulta.
    return encontradas > 0 ? encontradas * 1000 + total : 0
  }
  for (const todas of [true, false]) {
    const res = idx.map((e) => ({ e, p: puntuar(e, todas) })).filter((r) => r.p > 0)
    if (res.length) {
      return res.sort((x, y) => y.p - x.p).map(({ e }) => ({ ...e, fragmento: fragmento(e, ts.flat()) }))
    }
  }
  return []
}

// La primera frase del texto que contiene alguna de las palabras buscadas.
function fragmento(e, ts) {
  for (let i = 0; i < e.nCuerpo.length; i++) {
    const n = e.nCuerpo[i]
    const t = ts.find((x) => n.includes(x))
    if (!t) continue
    const original = e.cuerpo[i]
    const pos = n.indexOf(t)
    const corte = n.lastIndexOf('. ', pos)
    const ini = corte < 0 ? 0 : corte + 2
    const fin = n.indexOf('. ', pos)
    const frase = original.slice(ini, fin < 0 ? undefined : fin + 1)
    return frase.length > 220 ? frase.slice(0, 217) + '…' : frase
  }
  return ''
}

// Divide un texto en partes marcando las palabras buscadas, para resaltarlas.
export function resaltar(texto, consulta) {
  const ts = terminos(consulta).flat()
  const n = normalizar(texto)
  const marcas = []
  for (const t of ts) {
    let i = n.indexOf(t)
    while (i >= 0) { marcas.push([i, i + t.length]); i = n.indexOf(t, i + t.length) }
  }
  marcas.sort((a, b) => a[0] - b[0])
  const partes = []
  let pos = 0
  for (const [a, b] of marcas) {
    if (a < pos) continue
    partes.push([texto.slice(pos, a), false], [texto.slice(a, b), true])
    pos = b
  }
  partes.push([texto.slice(pos), false])
  return partes.filter(([t]) => t)
}

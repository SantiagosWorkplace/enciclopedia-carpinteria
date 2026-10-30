// Comprueba la coherencia del contenido: cada artículo tiene su entrada en el
// índice, los enlaces [[glosario]] existen y los "ver también" apuntan a rutas reales.
// Uso: npm run validar
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { glosario, glosarioPorId } from '../src/contenido/glosario.js'
import { capitulos } from '../src/contenido/indice.js'

const BASE = 'src/contenido/articulos'
const rutas = new Set(capitulos.flatMap((c) => c.articulos.map((a) => `${c.id}/${a.id}`)))
const errores = []
// Licencias que permiten publicar la foto con crédito.
const LICENCIAS = /^(CC0|Dominio público|CC BY(-SA)? [1-4]\.[05])$/

for (const cap of readdirSync(BASE)) {
  for (const archivo of readdirSync(`${BASE}/${cap}`)) {
    const ruta = `${cap}/${archivo.replace(/\.js$/, '')}`
    if (!rutas.has(ruta)) errores.push(`${ruta}: el archivo no tiene entrada en el índice`)

    const fuente = readFileSync(`${BASE}/${cap}/${archivo}`, 'utf8')
    // [[id]] o [[texto|id]], sin confundir con arrays ([['…']]).
    for (const m of fuente.matchAll(/\[\[([^\]'"]+)\]\]/g)) {
      const [visible, id = visible] = m[1].split('|')
      if (!glosarioPorId[id]) errores.push(`${ruta}: término de glosario inexistente «${id}»`)
    }

    const { default: art } = await import(pathToFileURL(`${BASE}/${cap}/${archivo}`).href)
    if (!Array.isArray(art.bloques) || art.bloques.length === 0) errores.push(`${ruta}: sin bloques`)
    for (const r of art.relacionados || []) if (!rutas.has(r)) errores.push(`${ruta}: «ver también» a ruta inexistente ${r}`)
    for (const b of art.bloques) {
      const fotos = b.tipo === 'foto' ? [b] : b.tipo === 'galeria' ? b.fotos : []
      for (const f of fotos) {
        if (!existsSync(`public/${f.src}`)) errores.push(`${ruta}: falta el archivo de la foto ${f.src}`)
        if (!f.alt || !f.pie) errores.push(`${ruta}: la foto ${f.src} no tiene texto alternativo o pie`)
        const c = f.credito || {}
        if (!c.autor || !c.fuente || !c.licenciaUrl) errores.push(`${ruta}: la foto ${f.src} no tiene crédito completo`)
        if (!LICENCIAS.test(c.licencia || '')) errores.push(`${ruta}: la foto ${f.src} no tiene una licencia libre reconocida («${c.licencia}»)`)
      }
    }
  }
}
for (const g of glosario) if (g.ver && !rutas.has(g.ver)) errores.push(`glosario ${g.id}: enlaza a ruta inexistente ${g.ver}`)

const escritos = readdirSync(BASE).reduce((n, c) => n + readdirSync(`${BASE}/${c}`).length, 0)
console.log(`${escritos} de ${rutas.size} artículos escritos · ${glosario.length} términos en el glosario`)
if (errores.length) {
  console.error(errores.join('\n'))
  process.exit(1)
}
console.log('Contenido válido')

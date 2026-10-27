// Comprueba la coherencia del contenido: cada artículo tiene su entrada en el
// índice, los enlaces [[glosario]] existen y los "ver también" apuntan a rutas reales.
// Uso: npm run validar
import { readFileSync, readdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { glosario, glosarioPorId } from '../src/contenido/glosario.js'
import { capitulos } from '../src/contenido/indice.js'

const BASE = 'src/contenido/articulos'
const rutas = new Set(capitulos.flatMap((c) => c.articulos.map((a) => `${c.id}/${a.id}`)))
const errores = []

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

import Migas from '../components/Migas.jsx'
import { capitulos } from '../contenido/indice.js'
import { glosario } from '../contenido/glosario.js'
import { disponible } from '../articulos.js'
import { enlace } from '../router.js'

const normalizar = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

export default function Buscar({ query }) {
  const q = (query.q || '').trim()
  const n = normalizar(q)
  const coincide = (...textos) => n && textos.some((t) => normalizar(t).includes(n))

  const articulos = capitulos.flatMap((c) =>
    c.articulos.filter((a) => coincide(a.titulo, a.resumen, c.titulo)).map((a) => ({ c, a }))
  )
  const terminos = glosario.filter((g) => coincide(g.termino, g.definicion))

  return (
    <div className="pagina">
      <Migas items={[['Búsqueda']]} />
      <header className="art-head">
        <span className="eyebrow">Búsqueda</span>
        <h1>{q ? `Resultados para «${q}»` : 'Buscar en la enciclopedia'}</h1>
        {q && (
          <p className="lead">
            {articulos.length} {articulos.length === 1 ? 'artículo' : 'artículos'} y {terminos.length} {terminos.length === 1 ? 'término' : 'términos'} del glosario.
          </p>
        )}
      </header>

      {articulos.length > 0 && (
        <ol className="cap-lista">
          {articulos.map(({ c, a }) => (
            <li key={c.id + a.id}>
              <a href={enlace(c.id, a.id)} className={disponible(c.id, a.id) ? 'listo' : 'pendiente'}>
                <span className="indice-ref">{c.numero}.{c.articulos.indexOf(a) + 1}</span>
                <span><strong>{a.titulo}</strong><span>{c.titulo} · {a.resumen}</span></span>
                <span className="badge">{disponible(c.id, a.id) ? 'Disponible' : 'En preparación'}</span>
              </a>
            </li>
          ))}
        </ol>
      )}

      {terminos.length > 0 && (
        <>
          <h2 className="buscar-sub">Glosario</h2>
          <ul className="buscar-glos">
            {terminos.map((g) => (
              <li key={g.id}><a href={`#/glosario?t=${g.id}`}><strong>{g.termino}</strong></a> — {g.definicion}</li>
            ))}
          </ul>
        </>
      )}

      {q && articulos.length === 0 && terminos.length === 0 && (
        <p className="empty">No hay resultados. Prueba con otra palabra o revisa el <a href="#/?ir=indice">índice</a>.</p>
      )}
    </div>
  )
}

import { Fragment, useEffect, useState } from 'react'
import Migas from '../components/Migas.jsx'
import { glosario } from '../contenido/glosario.js'
import { enlace } from '../router.js'
import { buscar, cargarIndice, normalizar, resaltar, terminos } from '../busqueda.js'
import { sugerir } from '../components/Buscador.jsx'

function Resaltado({ texto, q }) {
  return resaltar(texto, q).map(([t, marca], i) => (marca ? <mark key={i}>{t}</mark> : <Fragment key={i}>{t}</Fragment>))
}

export default function Buscar({ query }) {
  const q = (query.q || '').trim()
  const [indice, setIndice] = useState(null)

  useEffect(() => {
    let vivo = true
    cargarIndice().then((i) => vivo && setIndice(i))
    return () => { vivo = false }
  }, [])

  const ts = terminos(q)
  const articulos = indice ? buscar(indice, q) : []
  const terminosGlos = ts.length
    ? glosario.filter((g) => {
        const n = normalizar(`${g.termino} ${g.definicion}`)
        return ts.every((alternativas) => alternativas.some((t) => n.includes(t)))
      })
    : []

  const parecidos = q && indice && !articulos.length && !terminosGlos.length ? sugerir(q, 5) : []

  return (
    <div className="pagina">
      <Migas items={[['Búsqueda']]} />
      <header className="art-head">
        <span className="eyebrow">Búsqueda</span>
        <h1>{q ? `Resultados para «${q}»` : 'Buscar en la enciclopedia'}</h1>
        {q && indice && (
          <p className="lead">
            {articulos.length} {articulos.length === 1 ? 'artículo' : 'artículos'} y {terminosGlos.length} {terminosGlos.length === 1 ? 'término' : 'términos'} del glosario.
          </p>
        )}
        {q && !indice && <p className="lead">Buscando en todos los artículos…</p>}
      </header>

      {articulos.length > 0 && (
        <ol className="cap-lista resultados">
          {articulos.map(({ c, a, fragmento }) => (
            <li key={c.id + a.id}>
              <a href={enlace(c.id, a.id)} className="listo">
                <span className="indice-ref">{c.numero}.{c.articulos.indexOf(a) + 1}</span>
                <span>
                  <strong><Resaltado texto={a.titulo} q={q} /></strong>
                  <span>{c.titulo} · {a.resumen}</span>
                  {fragmento && <span className="fragmento">«<Resaltado texto={fragmento} q={q} />»</span>}
                </span>
              </a>
            </li>
          ))}
        </ol>
      )}

      {terminosGlos.length > 0 && (
        <>
          <h2 className="buscar-sub">Glosario</h2>
          <ul className="buscar-glos">
            {terminosGlos.map((g) => (
              <li key={g.id}><a href={`#/glosario?t=${g.id}`}><strong>{g.termino}</strong></a> — {g.definicion}</li>
            ))}
          </ul>
        </>
      )}

      {q && indice && articulos.length === 0 && terminosGlos.length === 0 && (
        <>
          <p className="empty">No hay resultados exactos para «{q}».</p>
          {parecidos.length > 0 ? (
            <>
              <h2 className="buscar-sub">Quizás buscabas</h2>
              <ul className="buscar-glos">
                {parecidos.map((e) => (
                  <li key={e.href}><a href={e.href}><strong>{e.titulo}</strong></a> — {e.tipo.toLowerCase()}{e.tipo === 'Artículo' ? ` de ${e.detalle}` : ''}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>Prueba con otra palabra o revisa el <a href="#/?ir=indice">índice</a>.</p>
          )}
        </>
      )}
    </div>
  )
}

import { useEffect, useState } from 'react'
import Bloques, { slug } from '../components/Bloques.jsx'
import Migas from '../components/Migas.jsx'
import { buscarArticulo, ordenLectura } from '../contenido/indice.js'
import { cargarArticulo, disponible, minutosLectura } from '../articulos.js'
import { enlace } from '../router.js'

// 'AAAA-MM-DD' como fecha local (new Date('AAAA-MM-DD') la toma en UTC y puede correr un día).
const fechaLocal = (iso) => {
  const [a, m, d] = iso.split('-').map(Number)
  return new Date(a, m - 1, d).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
}

// Plantilla de artículo: cabecera, índice lateral, cuerpo, "ver también" y navegación.
export default function Articulo({ capitulo, articulo, query }) {
  const [contenido, setContenido] = useState(null)
  const listo = disponible(capitulo.id, articulo.id)

  useEffect(() => {
    let vivo = true
    setContenido(null)
    if (listo) cargarArticulo(capitulo.id, articulo.id).then((c) => vivo && setContenido(c))
    return () => { vivo = false }
  }, [capitulo.id, articulo.id, listo])

  const pos = ordenLectura.findIndex((x) => x.cap.id === capitulo.id && x.art.id === articulo.id)
  const anterior = ordenLectura[pos - 1]
  const siguiente = ordenLectura[pos + 1]
  const numero = `${capitulo.numero}.${capitulo.articulos.indexOf(articulo) + 1}`
  const secciones = contenido?.bloques.filter((b) => b.tipo === 'h2') || []

  return (
    <div className="pagina">
      <Migas items={[[`${capitulo.numero}. ${capitulo.titulo}`, enlace(capitulo.id)], [articulo.titulo]]} />

      <header className="art-head">
        <span className="eyebrow">Capítulo {capitulo.numero} · {capitulo.titulo} · {numero}</span>
        <h1>{articulo.titulo}</h1>
        <p className="lead">{articulo.resumen}</p>
        {contenido && (
          <p className="art-meta">
            {minutosLectura(contenido.bloques)} min de lectura
            {contenido.actualizado && <> · Actualizado {fechaLocal(contenido.actualizado)}</>}
          </p>
        )}
      </header>

      {!listo && (
        <div className="pendiente-box">
          <strong>Este artículo está en preparación.</strong>
          <p>Mientras tanto, estos son los artículos ya disponibles del capítulo:</p>
          <ul>
            {capitulo.articulos.filter((a) => disponible(capitulo.id, a.id)).map((a) => (
              <li key={a.id}><a href={enlace(capitulo.id, a.id)}>{a.titulo}</a></li>
            ))}
          </ul>
        </div>
      )}

      {listo && !contenido && <p className="cargando">Cargando…</p>}

      {contenido && (
        <div className={`art-layout ${secciones.length > 1 ? 'con-toc' : ''}`}>
          {secciones.length > 1 && (
            <nav className="art-toc" aria-label="En este artículo">
              <strong>En este artículo</strong>
              <ol>
                {secciones.map((s) => (
                  <li key={s.texto}>
                    <button onClick={() => document.getElementById(slug(s.texto))?.scrollIntoView({ behavior: 'smooth' })}>
                      {s.texto}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <article className="art-cuerpo">
            <Bloques bloques={contenido.bloques} query={query} />

            {contenido.relacionados?.length > 0 && (
              <aside className="ver-tambien">
                <strong>Ver también</strong>
                <ul>
                  {contenido.relacionados.map((ruta) => {
                    const [c, a] = ruta.split('/')
                    const r = buscarArticulo(c, a)
                    return r.articulo && (
                      <li key={ruta}>
                        <a href={enlace(c, a)}>{r.articulo.titulo}</a>
                        <span> · {r.capitulo.titulo}</span>
                      </li>
                    )
                  })}
                </ul>
              </aside>
            )}
          </article>
        </div>
      )}

      <nav className="art-nav" aria-label="Artículos">
        {anterior ? (
          <a href={enlace(anterior.cap.id, anterior.art.id)}>
            <span>← Anterior</span>
            <strong>{anterior.art.titulo}</strong>
          </a>
        ) : <span />}
        {siguiente && (
          <a href={enlace(siguiente.cap.id, siguiente.art.id)} className="siguiente">
            <span>Siguiente →</span>
            <strong>{siguiente.art.titulo}</strong>
          </a>
        )}
      </nav>
    </div>
  )
}

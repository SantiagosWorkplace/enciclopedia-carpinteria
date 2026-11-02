import { useEffect } from 'react'
import GrainCanvas from '../components/GrainCanvas.jsx'
import Reveal from '../components/Reveal.jsx'
import { capitulos } from '../contenido/indice.js'
import { disponible } from '../articulos.js'
import { glosario } from '../contenido/glosario.js'
import { enlace } from '../router.js'

const totalArticulos = capitulos.reduce((n, c) => n + c.articulos.length, 0)

export default function Portada({ query }) {
  const irAlIndice = () => document.getElementById('indice').scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    if (query.ir === 'indice') document.getElementById('indice').scrollIntoView()
  }, [query.ir])

  return (
    <>
      <header className="hero" id="top">
        <GrainCanvas />
        <div className="hero-content">
          <span className="eyebrow">Enciclopedia interactiva</span>
          <h1>El oficio de la <span className="accent">madera</span></h1>
          <p>Materiales, diseño, herramientas, uniones, acabados y construcción, explicados como en un manual de taller y con todas las medidas en sistema métrico.</p>
          <button className="btn" onClick={irAlIndice}>Ver el índice ↓</button>
          <div className="hero-stats">
            <span><strong>{capitulos.length}</strong> capítulos</span>
            <span><strong>{totalArticulos}</strong> artículos</span>
            <span><strong>{glosario.length}</strong> términos en el glosario</span>
          </div>
        </div>
      </header>

      <section id="indice" className="indice">
        <Reveal>
          <span className="eyebrow">Índice</span>
          <h2>Contenido</h2>
          <p className="lead">Cada título lleva a su artículo. Los marcados con ● ya están escritos; el resto está en preparación.</p>
        </Reveal>
        <div className="indice-grid">
          {capitulos.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 80}>
              <article className="indice-cap">
                <a className="indice-cap-head" href={enlace(c.id)}>
                  <span className="indice-num">{c.numero}</span>
                  <span>
                    <span className="indice-icono" aria-hidden="true">{c.icono}</span>
                    <strong>{c.titulo}</strong>
                    <em>{c.subtitulo}</em>
                  </span>
                </a>
                <ol>
                  {c.articulos.map((a, j) => {
                    const listo = disponible(c.id, a.id)
                    return (
                      <li key={a.id} className={listo ? 'listo' : ''}>
                        <a href={enlace(c.id, a.id)}>
                          <span className="indice-ref">{c.numero}.{j + 1}</span>
                          <span>{a.titulo}</span>
                        </a>
                      </li>
                    )
                  })}
                </ol>
              </article>
            </Reveal>
          ))}
          <Reveal>
            <article className="indice-cap indice-ref-cap">
              <a className="indice-cap-head" href="#/glosario">
                <span className="indice-num">A–Z</span>
                <span>
                  <span className="indice-icono" aria-hidden="true">📖</span>
                  <strong>Glosario</strong>
                  <em>Términos del oficio</em>
                </span>
              </a>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  )
}

import { useEffect } from 'react'
import Migas from '../components/Migas.jsx'
import { Texto } from '../components/Bloques.jsx'
import { glosario } from '../contenido/glosario.js'
import { buscarArticulo } from '../contenido/indice.js'
import { enlace } from '../router.js'

const ordenado = [...glosario].sort((a, b) => a.termino.localeCompare(b.termino, 'es'))
const letras = [...new Set(ordenado.map((x) => x.termino[0].toUpperCase()))]

export default function Glosario({ query }) {
  useEffect(() => {
    if (query.t) document.getElementById(`g-${query.t}`)?.scrollIntoView({ block: 'center' })
  }, [query.t])

  return (
    <div className="pagina">
      <Migas items={[['Glosario']]} />
      <header className="art-head">
        <span className="eyebrow">Referencia</span>
        <h1>Glosario</h1>
        <p className="lead">Términos del oficio. En los artículos, las palabras subrayadas con puntos muestran su definición al pasar el ratón y enlazan aquí.</p>
      </header>
      <nav className="letras" aria-label="Letras">
        {letras.map((l) => (
          <button key={l} onClick={() => document.getElementById(`l-${l}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{l}</button>
        ))}
      </nav>
      <dl className="glosario">
        {letras.map((l) => (
          <div key={l} id={`l-${l}`} className="glosario-letra">
            <h2>{l}</h2>
            {ordenado.filter((x) => x.termino[0].toUpperCase() === l).map((x) => {
              const ver = x.ver && buscarArticulo(...x.ver.split('/'))
              return (
                <div key={x.id} id={`g-${x.id}`} className={`glosario-item ${query.t === x.id ? 'activo' : ''}`}>
                  <dt>{x.termino}</dt>
                  <dd>
                    <Texto>{x.definicion}</Texto>
                    {ver?.articulo && <a className="glosario-ver" href={enlace(...x.ver.split('/'))}>→ {ver.articulo.titulo}</a>}
                  </dd>
                </div>
              )
            })}
          </div>
        ))}
      </dl>
    </div>
  )
}

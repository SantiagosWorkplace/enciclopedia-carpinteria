import { disponible } from '../articulos.js'
import { enlace } from '../router.js'
import Migas from '../components/Migas.jsx'

export default function Capitulo({ capitulo }) {
  return (
    <div className="pagina">
      <Migas items={[[capitulo.titulo]]} />
      <header className="cap-head">
        <span className="cap-num">{capitulo.numero}</span>
        <div>
          <span className="eyebrow">Capítulo {capitulo.numero} · {capitulo.subtitulo}</span>
          <h1>{capitulo.icono} {capitulo.titulo}</h1>
          <p className="lead">{capitulo.intro}</p>
        </div>
      </header>
      <ol className="cap-lista">
        {capitulo.articulos.map((a, i) => {
          const listo = disponible(capitulo.id, a.id)
          return (
            <li key={a.id}>
              <a href={enlace(capitulo.id, a.id)} className={listo ? 'listo' : 'pendiente'}>
                <span className="indice-ref">{capitulo.numero}.{i + 1}</span>
                <span>
                  <strong>{a.titulo}</strong>
                  <span>{a.resumen}</span>
                </span>
                <span className="badge">{listo ? 'Disponible' : 'En preparación'}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

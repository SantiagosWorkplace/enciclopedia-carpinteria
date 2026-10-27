import { useState } from 'react'
import { construcciones, persona, barraEscala, ANCHO, ALTO, SUELO } from '../construcciones.js'

const escala = barraEscala(2)

// Sistemas constructivos del mundo dibujados como planos, todos a la misma escala.
export default function WorldBuilds() {
  const [activa, setActiva] = useState(construcciones[0])
  const [foco, setFoco] = useState(null)
  const [verPersona, setVerPersona] = useState(true)

  const elegir = (c) => {
    setActiva(c)
    setFoco(null)
  }
  const nombreFoco = activa.partes.find((p) => p.id === foco)?.nombre

  return (
    <div className="builds">
      <div className="build-picker">
        {construcciones.map((c) => (
          <button key={c.id} className={c.id === activa.id ? 'active' : ''} onClick={() => elegir(c)}>
            <strong>{c.nombre}</strong>
            <span>{c.region}</span>
          </button>
        ))}
      </div>

      <div className="build-body" key={activa.id}>
        <figure className="blueprint">
          <svg viewBox={`0 0 ${ANCHO} ${ALTO}`} role="img" aria-label={`Esquema de ${activa.nombre}`}>
            <defs>
              <pattern id="cuadricula" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0 H0 V20" fill="none" stroke="rgba(160, 200, 240, .12)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width={ANCHO} height={ALTO} fill="url(#cuadricula)" />
            <line x1="0" x2={ANCHO} y1={SUELO} y2={SUELO} className="suelo" />

            {activa.partes.map((p, i) => (
              <path
                key={p.id}
                d={p.d}
                pathLength="1"
                className={`trazo ${foco === p.id ? 'foco' : ''} ${foco && foco !== p.id ? 'tenue' : ''}`}
                style={{ animationDelay: `${i * 0.22}s` }}
                onMouseEnter={() => setFoco(p.id)}
                onMouseLeave={() => setFoco(null)}
              >
                <title>{p.nombre}</title>
              </path>
            ))}

            {verPersona && (
              <g className="persona">
                <path d={persona(activa.persona)} />
              </g>
            )}

            <path d={escala.linea} className="escala" />
            {escala.marcas.map((m) => (
              <text key={m.texto} x={m.x} y={m.y + 10} className="escala-texto">{m.texto}</text>
            ))}
          </svg>
          <figcaption>
            <span>{nombreFoco || 'Pasa el ratón por una pieza o una medida'}</span>
            <label>
              <input type="checkbox" checked={verPersona} onChange={(e) => setVerPersona(e.target.checked)} />
              Persona de 1,70 m
            </label>
          </figcaption>
        </figure>

        <div className="build-text">
          <span className="eyebrow">{activa.region} · {activa.epoca}</span>
          <h3>{activa.nombre}</h3>
          <p className="local">{activa.local}</p>
          <p>{activa.resumen}</p>

          <table className="medidas">
            <tbody>
              {activa.medidas.map((m) => (
                <tr
                  key={m.nombre}
                  className={`${m.parte ? 'enlazada' : ''} ${m.parte && m.parte === foco ? 'foco' : ''}`}
                  onMouseEnter={() => m.parte && setFoco(m.parte)}
                  onMouseLeave={() => setFoco(null)}
                >
                  <th>{m.nombre}</th>
                  <td>{m.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="notas-build">
            <p><strong>Clima:</strong> {activa.clima}</p>
            <p><strong>Dato:</strong> {activa.curiosidad}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { construcciones, gruposConstruccion, persona, barraEscala, ANCHO, ALTO, SUELO } from '../construcciones.js'
import { herramientas, energias } from '../herramientas.js'
import { ir, conQuery } from '../router.js'

const escala = barraEscala(2)
const PLURAL = {
  Manual: ['manual', 'manuales'],
  Eléctrica: ['eléctrica', 'eléctricas'],
  Neumática: ['neumática', 'neumáticas'],
  Combustión: ['a combustión', 'a combustión'],
}

const verHerramientas = (id) => ir(conQuery('#/herramientas-manuales/catalogo', { obra: id }))

// Sistemas constructivos del mundo dibujados como planos, todos a la misma escala.
export default function WorldBuilds({ grupoInicial = 'todas', onVerHerramientas = verHerramientas }) {
  const [grupo, setGrupo] = useState(grupoInicial)
  const [activa, setActiva] = useState(
    () => construcciones.find((c) => grupoInicial === 'todas' || c.grupos.includes(grupoInicial))
  )
  const [foco, setFoco] = useState(null)
  const [verPersona, setVerPersona] = useState(true)

  const visibles = construcciones.filter((c) => grupo === 'todas' || c.grupos.includes(grupo))
  const elegir = (c) => {
    setActiva(c)
    setFoco(null)
  }
  const elegirGrupo = (g) => {
    setGrupo(g)
    const lista = construcciones.filter((c) => g === 'todas' || c.grupos.includes(g))
    if (!lista.includes(activa)) elegir(lista[0])
  }
  const nombreFoco = activa.partes.find((p) => p.id === foco)?.nombre
  const suyas = herramientas.filter((h) => h.usos.includes(activa.id))
  const porEnergia = energias
    .map((e) => [e, suyas.filter((h) => h.energia === e).length])
    .filter(([, n]) => n > 0)

  return (
    <div className="builds">
      <div className="joint-tabs build-groups">
        {gruposConstruccion.map((g) => (
          <button key={g.id} className={g.id === grupo ? 'active' : ''} onClick={() => elegirGrupo(g.id)}>{g.nombre}</button>
        ))}
      </div>
      <div className="build-picker">
        {visibles.map((c) => (
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
              <text key={m.texto} x={m.x + 3} y={m.y + 10} className="escala-texto">{m.texto}</text>
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

          <div className="build-tools">
            <div>
              <strong>{suyas.length} herramientas</strong> para este sistema
              <span>{porEnergia.map(([e, n]) => `${n} ${PLURAL[e][n > 1 ? 1 : 0]}`).join(' · ')}</span>
            </div>
            <button className="btn" onClick={() => onVerHerramientas(activa.id)}>Ver en el catálogo →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useRef, useState } from 'react'

const MAX_JANKA = 3600
const LBF_A_KN = 4.448 / 1000

const formatJanka = (lbf, unidad) =>
  unidad === 'metrico'
    ? `${(lbf * LBF_A_KN).toLocaleString('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} kN`
    : `${lbf.toLocaleString('es-AR')} lbf`

// Tarjeta con inclinación 3D; al hacer clic gira y muestra la ficha técnica.
export default function WoodCard({ madera, unidad, onCambiarUnidad }) {
  const ref = useRef(null)
  const [flipped, setFlipped] = useState(false)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.setProperty('--rx', `${-y * 12}deg`)
    ref.current.style.setProperty('--ry', `${x * 12}deg`)
    ref.current.style.setProperty('--gx', `${(x + 0.5) * 100}%`)
    ref.current.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
  }
  const onLeave = () => {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setFlipped(!flipped)
    }
  }

  const [c1, c2] = madera.color

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      className={`wood-card ${flipped ? 'flipped' : ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => setFlipped(!flipped)}
      onKeyDown={onKeyDown}
      aria-pressed={flipped}
    >
      <div className="wood-card-inner">
        <div className="face front" style={{ '--c1': c1, '--c2': c2 }}>
          <div className="grain-texture" />
          <div className="shine" />
          <span className="tag">{madera.tipo}</span>
          <h3>{madera.nombre}</h3>
          <em>{madera.cientifico}</em>
          <span className="hint">Ver ficha ↻</span>
        </div>
        <div className="face back">
          <h4>{madera.nombre}</h4>
          <Stat
            label="Dureza Janka"
            value={
              <button
                className="unit-toggle"
                tabIndex={flipped ? 0 : -1}
                title={unidad === 'metrico' ? 'Cambiar a imperial (lbf)' : 'Cambiar a métrico (kN)'}
                onClick={(e) => { e.stopPropagation(); onCambiarUnidad() }}
                onKeyDown={(e) => e.stopPropagation()}
              >
                {formatJanka(madera.janka, unidad)} <span aria-hidden="true">⇄</span>
              </button>
            }
            pct={madera.janka / MAX_JANKA}
            show={flipped}
          />
          <Stat label="Densidad" value={`${madera.densidad} kg/m³`} pct={madera.densidad / 1100} show={flipped} />
          <Stat
            label="Trabajabilidad"
            value={'●'.repeat(madera.trabajabilidad) + '○'.repeat(5 - madera.trabajabilidad)}
            pct={madera.trabajabilidad / 5}
            show={flipped}
          />
          <p className="usos">{madera.usos.join(' · ')}</p>
          <p className="notas">{madera.notas}</p>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, pct, show }) {
  return (
    <div className="stat">
      <div className="stat-row"><span>{label}</span><strong>{value}</strong></div>
      <div className="bar"><div className="fill" style={{ width: show ? `${pct * 100}%` : 0 }} /></div>
    </div>
  )
}

import { useRef, useState } from 'react'

const MAX_JANKA = 3600

// Tarjeta con inclinación 3D; al hacer clic gira y muestra la ficha técnica.
export default function WoodCard({ madera }) {
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

  const [c1, c2] = madera.color

  return (
    <button
      ref={ref}
      className={`wood-card ${flipped ? 'flipped' : ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => setFlipped(!flipped)}
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
          <Stat label="Dureza Janka" value={`${madera.janka} lbf`} pct={madera.janka / MAX_JANKA} show={flipped} />
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
    </button>
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

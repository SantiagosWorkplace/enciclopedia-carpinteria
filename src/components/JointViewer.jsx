import { useEffect, useState } from 'react'
import { uniones } from '../data.js'

// Visor de uniones: diagrama que se ensambla y pasos tipo manual.
export default function JointViewer() {
  const [activa, setActiva] = useState(uniones[0])
  const [unida, setUnida] = useState(false)
  const [hechos, setHechos] = useState([])

  // Cada vez que cambia la unión, las piezas arrancan separadas y se ensamblan solas.
  useEffect(() => {
    const t = setTimeout(() => setUnida(true), 500)
    return () => clearTimeout(t)
  }, [activa])

  const elegir = (u) => {
    if (u.id === activa.id) return
    setUnida(false)
    setHechos([])
    setActiva(u)
  }

  const { svg } = activa
  const separada = svg.frente
    ? `translate(${svg.dx}px, ${svg.dy}px) scale(1.18)`
    : `translate(${svg.dx}px, ${svg.dy}px)`
  const toggle = (i) => setHechos((h) => (h.includes(i) ? h.filter((x) => x !== i) : [...h, i]))
  const progreso = Math.round((hechos.length / activa.pasos.length) * 100)

  return (
    <div className="joints">
      <div className="joint-tabs" role="tablist">
        {uniones.map((u) => (
          <button
            key={u.id}
            role="tab"
            aria-selected={u.id === activa.id}
            className={u.id === activa.id ? 'active' : ''}
            onClick={() => elegir(u)}
          >
            {u.nombre}
          </button>
        ))}
      </div>

      <div className="joint-body" key={activa.id}>
        <div className="joint-visual">
          <svg viewBox="0 0 270 160" className={unida ? 'unida' : ''}>
            <defs>
              <pattern id="vetaA" width="40" height="12" patternUnits="userSpaceOnUse">
                <rect width="40" height="12" fill="#d7a96f" />
                <path d="M0 6 Q10 2 20 6 T40 6" stroke="#b07c45" strokeWidth="1" fill="none" />
              </pattern>
              <pattern id="vetaB" width="12" height="40" patternUnits="userSpaceOnUse">
                <rect width="12" height="40" fill="#a8693c" />
                <path d="M6 0 Q2 10 6 20 T6 40" stroke="#7e4b27" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <path d={svg.a} className="pieza pieza-a" fill="url(#vetaA)" stroke="#5a3a1e" strokeWidth="1.5" />
            {svg.agujeros && <path d={svg.agujeros} className="agujero" />}
            <path d={svg.b} className="fantasma" />
            <path
              d={svg.b}
              className="pieza pieza-b"
              fill="url(#vetaB)"
              stroke="#3d2412"
              strokeWidth="1.5"
              style={{ transform: unida ? 'none' : separada, opacity: unida ? 1 : svg.frente ? 0.55 : 1 }}
            />
          </svg>
          <button className="btn" onClick={() => setUnida(!unida)}>
            {unida ? 'Desarmar' : 'Ensamblar'}
          </button>
          <div className="meta">
            <Rating label="Dificultad" n={activa.dificultad} />
            <Rating label="Resistencia" n={activa.resistencia} />
          </div>
        </div>

        <div className="joint-text">
          <span className="eyebrow">{activa.ingles}</span>
          <h3>{activa.nombre}</h3>
          <p>{activa.descripcion}</p>
          <div className="chips">
            {activa.herramientas.map((h) => <span key={h} className="chip">{h}</span>)}
          </div>
          <div className="progress" title={`${progreso}% completado`}><div style={{ width: `${progreso}%` }} /></div>
          <ol className="steps">
            {activa.pasos.map((p, i) => (
              <li
                key={i}
                className={hechos.includes(i) ? 'done' : ''}
                onClick={() => toggle(i)}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="num">{i + 1}</span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

function Rating({ label, n }) {
  return (
    <div className="rating">
      <span>{label}</span>
      <span className="dots">{[1, 2, 3, 4, 5].map((i) => <i key={i} className={i <= n ? 'on' : ''} />)}</span>
    </div>
  )
}

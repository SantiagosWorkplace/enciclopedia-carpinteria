import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { uniones } from '../uniones.js'

const DURACION = 1900
const CAPAS = 9

// Pose de la pieza B: k = 1 separada, k = 0 en su sitio.
const pose = (e, k) => ({
  x: `${e.dx * k}px 0px`,
  y: `0px ${e.dy * k}px`,
  rot: `${e.rot * k}deg`,
  escala: `${1 + ((e.escala || 1) - 1) * k}`,
  opacidad: e.escala ? 1 - 0.45 * k : 1,
})

const congelar = (el) => el.getAnimations().forEach((a) => { a.commitStyles(); a.cancel() })
const alTerminar = (a) => { a.onfinish = () => { try { a.commitStyles(); a.cancel() } catch { /* elemento desmontado */ } } }

// Mueve un par de grupos (exterior = eje X, interior = eje Y + giro). Cada eje
// tiene su propia curva, así la pieza viaja en arco y gira antes de asentar.
function mover(exterior, interior, e, armar) {
  if (!exterior || !interior) return
  const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const d = reducido ? 0.35 : 1
  const p = pose(e, armar ? 0 : 1)
  congelar(exterior)
  congelar(interior)
  const op = (ms, easing) => ({ duration: ms * d, easing, fill: 'forwards' })
  alTerminar(exterior.animate({ translate: p.x }, op(DURACION, armar ? 'cubic-bezier(.22,.08,.18,1)' : 'cubic-bezier(.55,0,.7,.2)')))
  alTerminar(interior.animate({ translate: p.y }, op(DURACION, armar ? 'cubic-bezier(.5,0,.2,1)' : 'cubic-bezier(.4,0,.6,.4)')))
  alTerminar(interior.animate(
    { rotate: p.rot, scale: p.escala, opacity: p.opacidad },
    op(DURACION * 0.8, armar ? 'cubic-bezier(.3,0,.15,1)' : 'cubic-bezier(.45,0,.55,1)')
  ))
}

function fijarPose(exterior, interior, e, k) {
  if (!exterior || !interior) return
  congelar(exterior)
  congelar(interior)
  const p = pose(e, k)
  exterior.style.translate = p.x
  interior.style.translate = p.y
  interior.style.rotate = p.rot
  interior.style.scale = p.escala
  interior.style.opacity = p.opacidad
}

// Visor de uniones: diagrama con volumen que se ensambla y pasos tipo manual.
export default function JointViewer() {
  const [activa, setActiva] = useState(uniones[0])
  const [unida, setUnida] = useState(false)
  const [hechos, setHechos] = useState([])
  const [vista, setVista] = useState(35)

  const caraB = useRef(null)
  const lados = { ext: useRef(null), int: useRef(null) }
  const cara = { ext: useRef(null), int: useRef(null) }
  const pares = () => [[lados.ext.current, lados.int.current], [cara.ext.current, cara.int.current]]
  const { svg } = activa

  const moverTodo = (armar) => pares().forEach(([ex, int]) => mover(ex, int, svg.entrada, armar))

  // Al cambiar de unión: piezas separadas, origen de giro en el centro de B y ensamblado automático.
  useLayoutEffect(() => {
    const b = caraB.current.getBBox()
    const origen = `${b.x + b.width / 2}px ${b.y + b.height / 2}px`
    pares().forEach(([ex, int]) => {
      int.style.transformOrigin = origen
      fijarPose(ex, int, svg.entrada, 1)
    })
  }, [activa])

  useEffect(() => {
    const t = setTimeout(() => { setUnida(true); moverTodo(true) }, 450)
    return () => clearTimeout(t)
  }, [activa])

  const elegir = (u) => {
    if (u.id === activa.id) return
    setUnida(false)
    setHechos([])
    setActiva(u)
  }
  const alternar = () => {
    setUnida(!unida)
    moverTodo(!unida)
  }

  const rad = (vista * Math.PI) / 180
  const profundidad = { x: Math.sin(rad) * 12, y: -6 - Math.abs(Math.cos(rad)) * 3 }
  const capas = (d, color) =>
    Array.from({ length: CAPAS }, (_, i) => {
      const n = CAPAS - i
      return (
        <path
          key={n}
          d={d}
          fill={color}
          opacity={0.55 + (0.45 * i) / CAPAS}
          transform={`translate(${(profundidad.x * n) / CAPAS} ${(profundidad.y * n) / CAPAS})`}
        />
      )
    })

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
          <svg viewBox="-20 -22 310 200" className={unida ? 'unida' : ''}>
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

            <g className="lados">{capas(svg.a, '#9a6d3c')}</g>
            <g ref={lados.ext}><g ref={lados.int}>{capas(svg.b, '#6b3f22')}</g></g>

            <path d={svg.a} className="pieza" fill="url(#vetaA)" stroke="#5a3a1e" strokeWidth="1.2" />
            {svg.agujeros && <path d={svg.agujeros} className="agujero" />}
            <path d={svg.b} className="fantasma" />

            <g ref={cara.ext}>
              <g ref={cara.int}>
                <path ref={caraB} d={svg.b} className="pieza pieza-b" fill="url(#vetaB)" stroke="#3d2412" strokeWidth="1.2" />
              </g>
            </g>
          </svg>

          <label className="view-angle">
            <span>Ángulo de vista</span>
            <input type="range" min="-60" max="60" value={vista} onChange={(e) => setVista(+e.target.value)} />
            <output>{vista}°</output>
          </label>

          <button className="btn" onClick={alternar}>
            {unida ? 'Desarmar' : 'Ensamblar'}
          </button>
          <div className="meta">
            <Rating label="Dificultad" n={activa.dificultad} />
            <Rating label="Resistencia" n={activa.resistencia} />
            <div className="rating"><span>Ángulo de corte</span><strong>{activa.angulo}</strong></div>
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

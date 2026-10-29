// Curvado por cortes. A la izquierda, la pieza antes y después de curvarla: los
// cortes de la cara interior se cierran. A la derecha, cómo medir la separación
// con un solo corte. Dibujo original.
import { banda, pt } from './arcos.js'

const madera = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const rojo = '#dc2626'

// Pieza curvada: arco de 90° con un tramo recto en cada extremo.
const K = { cx: 150, cy: 168, r1: 60, r2: 78 }
const tramo = 46
function tramoRecto(a, sentido) {
  // Dirección de avance en el extremo a; sentido -1 retrocede.
  const dx = Math.sin((a * Math.PI) / 180) * sentido * tramo
  const dy = Math.cos((a * Math.PI) / 180) * sentido * tramo
  const [ax, ay] = pt(K.cx, K.cy, K.r2, a)
  const [bx, by] = pt(K.cx, K.cy, K.r1, a)
  return `M${ax} ${ay} L${ax + dx} ${ay + dy} L${bx + dx} ${by + dy} L${bx} ${by} Z`
}
const cortesCerrados = Array.from({ length: 9 }, (_, i) => 135 - 5 - i * 10)

export default function CortesKerf() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 250" role="img" aria-label="Pieza con cortes de sierra antes y después de curvarla, y cómo medir la separación entre cortes">
      {/* Antes */}
      <rect x="30" y="24" width="240" height="18" {...madera} />
      {Array.from({ length: 9 }, (_, i) => 70 + i * 20).map((x) => (
        <rect key={x} x={x - 1.5} y="27" width="3" height="15" fill="#fffaf2" stroke="#7a4a22" strokeWidth="0.6" />
      ))}
      <text x="150" y="58" textAnchor="middle" className="fig-nota">Antes: cortes en la cara que quedará por dentro</text>

      {/* Después */}
      <path d={tramoRecto(135, -1)} {...madera} />
      <path d={tramoRecto(45, 1)} {...madera} />
      <path d={banda(K.cx, K.cy, K.r1, K.r2, 135, 45)} {...madera} />
      {cortesCerrados.map((a) => {
        const [x0, y0] = pt(K.cx, K.cy, K.r1, a)
        const [x1, y1] = pt(K.cx, K.cy, K.r2 - 3, a)
        return <path key={a} d={`M${x0} ${y0} L${x1} ${y1}`} stroke="#7a4a22" strokeWidth="1" />
      })}
      <text x="150" y="196" textAnchor="middle" className="fig-titulo">Después</text>
      <text x="150" y="211" textAnchor="middle" className="fig-nota">Los cortes se cierran y la cara exterior</text>
      <text x="150" y="224" textAnchor="middle" className="fig-nota">queda continua</text>

      {/* Medir la separación */}
      <g>
        <path d="M312 160 H474" stroke="#7a4a22" strokeWidth="1.5" />
        <rect x="318" y="142" width="60" height="18" {...madera} />
        <rect x="326" y="132" width="16" height="10" fill="#64748b" stroke="#334155" />
        <g transform="rotate(-12 380 160)">
          <rect x="380" y="142" width="88" height="18" {...madera} />
        </g>
        <path d="M380 142.5 L380 160" stroke="#7a4a22" strokeWidth="1" />
        <path d="M456 160 V143.8" stroke={rojo} strokeWidth="1.6" />
        <path d="M452 160 H460 M452 143.8 H460" stroke={rojo} strokeWidth="1.2" />
        <text x="462" y="155" className="fig-titulo" style={{ fill: rojo }}>s</text>
        <path d="M380 170 H456 M380 166 V174 M456 166 V174" stroke={rojo} strokeWidth="1.2" />
        <text x="418" y="184" textAnchor="middle" className="fig-titulo" style={{ fill: rojo }}>R</text>
        <text x="393" y="202" textAnchor="middle" className="fig-titulo">Medir con un corte</text>
        <text x="393" y="217" textAnchor="middle" className="fig-nota">Levanta el extremo hasta cerrar</text>
        <text x="393" y="230" textAnchor="middle" className="fig-nota">el corte. A la distancia del radio,</text>
        <text x="393" y="243" textAnchor="middle" className="fig-nota">la altura s es la separación.</text>
      </g>
    </svg>
  )
}

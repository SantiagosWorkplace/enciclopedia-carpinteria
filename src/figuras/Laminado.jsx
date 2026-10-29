// Curvado por laminado: láminas encoladas sobre un molde, la recuperación al
// sacarlas y el orden de las láminas. Dibujo original y esquemático.
import { arco, banda, pt } from './arcos.js'

const molde = { fill: '#cbd5e1', stroke: '#475569', strokeWidth: 1.2 }
const tonos = ['#e9c88f', '#e2b77d', '#d6a265', '#e2b77d', '#e9c88f']
const rojo = '#dc2626'
const M = { cx: 80, cy: 150, r: 64 }

function Molde() {
  const [x0, y0] = pt(M.cx, M.cy, M.r, 150)
  const [x1, y1] = pt(M.cx, M.cy, M.r, 30)
  return <path d={`${arco(M.cx, M.cy, M.r, 150, 30)} L${x1} 130 L${x0} 130 L${x0} ${y0} Z`} {...molde} />
}

const paneles = [
  {
    titulo: 'Sobre el molde', notas: ['Cola en cada lámina;', 'prensas desde el centro'],
    d: (
      <>
        <Molde />
        {tonos.map((c, i) => (
          <path key={i} d={banda(M.cx, M.cy, M.r + i * 3, M.r + i * 3 + 3, 145, 35)} fill={c} stroke="#7a4a22" strokeWidth="0.5" />
        ))}
        {[135, 112, 90, 68, 45].map((a) => {
          const [x0, y0] = pt(M.cx, M.cy, M.r + 32, a)
          const [x1, y1] = pt(M.cx, M.cy, M.r + 18, a)
          return <path key={a} d={`M${x0} ${y0} L${x1} ${y1}`} stroke={rojo} strokeWidth="1.8" markerEnd="url(#lam-punta)" />
        })}
      </>
    ),
  },
  {
    titulo: 'Recuperación', notas: ['Al soltarla, se abre un poco:', 'el molde va más cerrado'],
    d: (
      <>
        <path d={banda(M.cx, M.cy + 45, M.r + 45, M.r + 60, 123.75, 56.25)} fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.2" />
        <path d={arco(M.cx, M.cy, M.r + 7.5, 145, 35)} fill="none" stroke="#475569" strokeWidth="1.4" strokeDasharray="4 3" />
      </>
    ),
  },
  {
    titulo: 'Láminas en orden', notas: ['De una misma tabla,', 'apiladas en orden'],
    d: (
      <>
        <rect x="20" y="40" width="120" height="30" fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.2" />
        {[46, 52, 58, 64].map((y) => <path key={y} d={`M20 ${y} H140`} stroke="#7a4a22" strokeWidth="0.8" strokeDasharray="4 2" />)}
        <path d="M80 76 V92" stroke={rojo} strokeWidth="1.6" markerEnd="url(#lam-punta)" />
        {tonos.map((c, i) => (
          <path key={i} d={banda(80, 190, 80 + i * 3, 83 + i * 3, 130, 50)} fill={c} stroke="#7a4a22" strokeWidth="0.5" />
        ))}
      </>
    ),
  },
]

export default function Laminado() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 196" role="img" aria-label="Láminas encoladas sobre un molde, recuperación de la curva al soltarlas y láminas cortadas en orden">
      <defs>
        <marker id="lam-punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill={rojo} />
        </marker>
      </defs>
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${i * 160} 0)`}>
          {p.d}
          <text x="80" y="156" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          {p.notas.map((n, k) => (
            <text key={n} x="80" y={171 + k * 13} textAnchor="middle" className="fig-nota">{n}</text>
          ))}
        </g>
      ))}
    </svg>
  )
}

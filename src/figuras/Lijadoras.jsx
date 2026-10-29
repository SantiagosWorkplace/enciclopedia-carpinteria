// Lijadoras portátiles vistas desde abajo, con el movimiento de la lija.
// Dibujo original y esquemático.
const base = { fill: '#e7e5e4', stroke: '#44403c', strokeWidth: 1.4 }
const lija = { fill: '#d6b98c', stroke: '#8a6a3a', strokeWidth: 1 }
const mov = { fill: 'none', stroke: '#dc2626', strokeWidth: 2, markerEnd: 'url(#lij-punta)' }

const lijadoras = [
  {
    titulo: 'Orbital', nota: 'Vibra en pequeños círculos',
    d: <><rect x="-34" y="-24" width="68" height="48" rx="4" {...base} /><rect x="-30" y="-20" width="60" height="40" rx="2" {...lija} /><path d="M8 0 A8 8 0 1 1 7.9 -1.3" {...mov} /></>,
  },
  {
    titulo: 'Excéntrica', nota: 'Gira y oscila a la vez',
    d: <><circle r="34" {...base} /><circle r="30" {...lija} />{[0, 60, 120, 180, 240, 300].map((g) => <circle key={g} cx={18 * Math.cos((g * Math.PI) / 180)} cy={18 * Math.sin((g * Math.PI) / 180)} r="3" fill="#8a6a3a" />)}<path d="M12 -20 A23 23 0 0 1 12 20" {...mov} /><path d="M3 0 A3 3 0 1 1 2.9 -.8" {...mov} /></>,
  },
  {
    titulo: 'De banda', nota: 'Desbasta rápido en línea',
    d: <><rect x="-44" y="-20" width="88" height="40" rx="18" {...base} /><rect x="-40" y="-16" width="80" height="32" rx="14" {...lija} /><path d="M-24 0 H24" {...mov} /></>,
  },
  {
    titulo: 'Delta', nota: 'Rincones y detalles',
    d: <><path d="M0 -34 L32 22 L-32 22 Z" {...base} strokeLinejoin="round" /><path d="M0 -28 L27 19 L-27 19 Z" {...lija} /><path d="M6 2 A6 6 0 1 1 5.9 1" {...mov} /></>,
  },
]

export default function Lijadoras() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 150" role="img" aria-label="Lijadoras orbital, excéntrica, de banda y delta vistas desde abajo">
      <defs>
        <marker id="lij-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      {lijadoras.map((l, i) => (
        <g key={l.titulo}>
          <g transform={`translate(${60 + i * 120} 54)`}>{l.d}</g>
          <text x={60 + i * 120} y="114" textAnchor="middle" className="fig-titulo">{l.titulo}</text>
          <text x={60 + i * 120} y="130" textAnchor="middle" className="fig-nota">{l.nota}</text>
        </g>
      ))}
    </svg>
  )
}

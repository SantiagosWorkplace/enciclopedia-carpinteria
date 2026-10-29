// La muñeca para goma laca en sección y los recorridos sobre la pieza.
// Dibujo original.
const f = (n) => n.toFixed(1)

function recorrido(fx, fin = 6 * Math.PI) {
  const pts = []
  for (let t = 0; t <= fin + 0.01; t += 0.15) pts.push(fx(t).map(f).join(' '))
  return `M${pts.join(' L')}`
}

const filas = [
  { y: 38, nota: 'Círculos', d: recorrido((t) => [228 + 9 * t - 12 * Math.sin(t), 50 + 10 * Math.cos(t)]) },
  { y: 78, nota: 'Ochos', d: [262, 330, 398].map((c) => recorrido((t) => [c + 26 * Math.sin(t), 90 + 9 * Math.sin(2 * t)], 2 * Math.PI)).join(' ') },
  { y: 118, nota: 'Rectas, a lo largo de la veta', d: 'M222 128 H452' },
]

export default function Muneca() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 190" role="img" aria-label="Muñeca para goma laca en sección, y recorridos en círculos, en ochos y en rectas">
      <defs>
        <marker id="mu-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#fde68a" />
        </marker>
      </defs>

      <path d="M32 140 H148 Q152 98 104 66 L100 44 H80 L76 66 Q28 98 32 140 Z" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M80 48 L100 54 M80 56 L100 62 M80 52 L100 46" stroke="#64748b" strokeWidth="1.2" />
      <ellipse cx="90" cy="110" rx="46" ry="24" fill="#fef3c7" stroke="#d6b985" strokeWidth="1.2" strokeDasharray="3 2" />
      <path d="M36 140 H144" stroke="#334155" strokeWidth="2.5" />
      <text x="90" y="164" textAnchor="middle" className="fig-titulo">La muñeca</text>
      <text x="90" y="179" textAnchor="middle" className="fig-nota">Alma de lana, funda de tela lisa</text>

      <rect x="206" y="14" width="262" height="130" rx="2" fill="#c98a4e" stroke="#7a4a22" strokeWidth="1.2" />
      {filas.map((r) => (
        <g key={r.nota}>
          <text x="216" y={r.y - 8} className="fig-nota" style={{ fill: '#fff7ed' }}>{r.nota}</text>
          <path d={r.d} fill="none" stroke="#fde68a" strokeWidth="1.8" markerEnd="url(#mu-f)" />
        </g>
      ))}
      <text x="337" y="164" textAnchor="middle" className="fig-titulo">Recorridos</text>
      <text x="337" y="179" textAnchor="middle" className="fig-nota">Entrar y salir de la pieza en movimiento</text>
    </svg>
  )
}

// Galletas de los tamaños más comunes y una unión de canto con galleta,
// en sección. Dibujo original, a escala: 2,6 px por mm en las galletas.
const K = 2.6
const galletas = [
  { n: '0', largo: 47, ancho: 15 },
  { n: '10', largo: 53, ancho: 19 },
  { n: '20', largo: 56, ancho: 23 },
]

export default function Galletas() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 220" role="img" aria-label="Galletas n.º 0, 10 y 20, y unión de dos tablas por el canto con una galleta">
      {galletas.map((g, i) => {
        const cx = 70 + i * 0
        const cy = 40 + i * 70
        const rx = (g.largo * K) / 2
        const ry = (g.ancho * K) / 2
        return (
          <g key={g.n}>
            <ellipse cx={cx + 20} cy={cy} rx={rx} ry={ry} fill="#e9c88f" stroke="#8a5a2b" strokeWidth="1.3" />
            {Array.from({ length: 7 }, (_, k) => (
              <line key={k} x1={cx + 20 - rx * 0.7 + k * rx * 0.23} y1={cy - ry * 0.55} x2={cx + 20 - rx * 0.7 + k * rx * 0.23 + 8} y2={cy + ry * 0.55} stroke="#c9a06a" strokeWidth="1" />
            ))}
            <text x={cx + 20} y={cy + 4} textAnchor="middle" className="fig-titulo">n.º {g.n}</text>
            <text x={cx + 20 + rx + 10} y={cy + 4} className="fig-nota">≈ {g.largo} × {g.ancho} mm</text>
          </g>
        )
      })}

      {/* Unión de canto en sección: dos tablas y la galleta en sus ranuras */}
      <g transform="translate(270 40)">
        <rect x="0" y="0" width="90" height="56" fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.3" />
        <rect x="90" y="0" width="90" height="56" fill="#d6a265" stroke="#7a4a22" strokeWidth="1.3" />
        <path d="M60 23 Q90 21 120 23 L120 33 Q90 35 60 33 Z" fill="#fffaf2" stroke="#7a4a22" strokeWidth="1" />
        <path d="M64 24.5 Q90 23 116 24.5 L116 31.5 Q90 33 64 31.5 Z" fill="#e9c88f" stroke="#8a5a2b" strokeWidth="1" />
        <text x="90" y="80" textAnchor="middle" className="fig-titulo">Unión de canto</text>
        <text x="90" y="96" textAnchor="middle" className="fig-nota">Ranuras un poco más largas:</text>
        <text x="90" y="109" textAnchor="middle" className="fig-nota">permiten ajustar a lo largo</text>
      </g>
      <text x="360" y="200" textAnchor="middle" className="fig-nota">Las galletas tienen ≈ 4 mm de espesor y se hinchan con la cola</text>
    </svg>
  )
}

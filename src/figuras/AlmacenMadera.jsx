// Almacenar tablas y tableros sin que se deformen. Dibujo original y esquemático.
const madera = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1 }
const metal = { fill: '#64748b', stroke: '#334155', strokeWidth: 1.2 }
const PISO = 230

export default function AlmacenMadera() {
  const brazos = [60, 110, 160]
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 270" role="img" aria-label="Estante de brazos para tablas, tableros de pie apoyados en toda su superficie y el error de apoyarlos inclinados">
      <rect x="0" y={PISO} width="480" height="10" fill="#e7d8c2" />

      {/* Estante de brazos visto de frente: tablas largas */}
      <rect x="20" y="30" width="10" height={PISO - 30} fill="#94a3b8" />
      {[50, 110, 170].map((x) => <rect key={x} x={x} y="30" width="8" height={PISO - 30} {...metal} />)}
      {brazos.map((y) => (
        <g key={y}>
          <rect x="20" y={y} width="170" height="5" fill="#475569" />
          {[0, 1, 2].map((k) => <rect key={k} x="24" y={y - 8 - k * 8} width="164" height="8" {...madera} />)}
        </g>
      ))}
      <text x="105" y="252" textAnchor="middle" className="fig-titulo">Tablas en horizontal</text>
      <text x="105" y="266" textAnchor="middle" className="fig-nota">Brazos cada 60 – 80 cm</text>

      {/* Tableros de pie, apoyados en toda su cara */}
      <rect x="230" y="40" width="8" height={PISO - 40} fill="#94a3b8" />
      {[0, 1, 2, 3].map((k) => <rect key={k} x={240 + k * 7} y="50" width="7" height={PISO - 56} fill={k % 2 ? '#d6a265' : '#e2b77d'} stroke="#7a4a22" />)}
      <rect x="236" y={PISO - 6} width="40" height="6" fill="#475569" />
      <circle cx="300" cy="70" r="12" fill="#16a34a" />
      <path d="M294 70 l4 5 l8 -10" stroke="#fff" strokeWidth="3" fill="none" />
      <text x="262" y="252" textAnchor="middle" className="fig-titulo">Tableros de pie</text>
      <text x="262" y="266" textAnchor="middle" className="fig-nota">Casi verticales, sobre un taco</text>

      {/* Error: tablero inclinado que se curva */}
      <rect x="440" y="40" width="8" height={PISO - 40} fill="#94a3b8" />
      <path d={`M360 ${PISO} Q392 140 438 60 L442 66 Q398 146 368 ${PISO} Z`} fill="#e2b77d" stroke="#7a4a22" />
      <line x1="364" y1={PISO} x2="440" y2="62" stroke="#2b1d12" strokeDasharray="3 3" />
      <circle cx="372" cy="70" r="12" fill="#dc2626" />
      <path d="M366 64 l12 12 M378 64 l-12 12" stroke="#fff" strokeWidth="2.5" />
      <text x="404" y="252" textAnchor="middle" className="fig-titulo">Inclinado</text>
      <text x="404" y="266" textAnchor="middle" className="fig-nota">Con el tiempo se curva</text>
    </svg>
  )
}

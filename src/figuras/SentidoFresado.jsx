// Sentido de avance de la fresadora, visto desde arriba. La fresa gira en
// sentido horario; se avanza contra el giro. Dibujo original.
const flecha = { stroke: '#15803d', strokeWidth: 3, fill: 'none', markerEnd: 'url(#fre-verde)' }

function Fresa({ x, y }) {
  return (
    <g>
      <circle cx={x} cy={y} r="9" fill="#cbd5e1" stroke="#334155" strokeWidth="1.4" />
      <path d={`M${x + 13} ${y - 6} A14 14 0 0 1 ${x + 5} ${y + 13}`} fill="none" stroke="#dc2626" strokeWidth="1.6" markerEnd="url(#fre-rojo)" />
    </g>
  )
}

export default function SentidoFresado() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 250" role="img" aria-label="Vista superior: se fresa el borde exterior en sentido antihorario y el interior en sentido horario">
      <defs>
        {[['verde', '#15803d'], ['rojo', '#dc2626']].map(([n, c]) => (
          <marker key={n} id={`fre-${n}`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill={c} />
          </marker>
        ))}
      </defs>

      {/* Borde exterior de una pieza: antihorario */}
      <rect x="40" y="50" width="160" height="120" rx="4" fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.4" />
      <path d="M190 36 H50" {...flecha} />
      <path d="M26 60 V160" {...flecha} />
      <path d="M50 184 H190" {...flecha} />
      <path d="M214 160 V60" {...flecha} />
      <Fresa x={120} y={50} />
      <text x="120" y="210" textAnchor="middle" className="fig-titulo">Borde exterior</text>
      <text x="120" y="226" textAnchor="middle" className="fig-nota">Antihorario, vista desde arriba</text>

      {/* Abertura interior: horario */}
      <rect x="270" y="40" width="180" height="140" rx="4" fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.4" />
      <rect x="310" y="76" width="100" height="68" fill="#fffaf2" stroke="#7a4a22" strokeWidth="1.4" />
      <path d="M326 88 H394" {...flecha} />
      <path d="M398 92 V128" {...flecha} />
      <path d="M394 132 H326" {...flecha} />
      <path d="M322 128 V92" {...flecha} />
      <Fresa x={360} y={76} />
      <text x="360" y="210" textAnchor="middle" className="fig-titulo">Abertura interior</text>
      <text x="360" y="226" textAnchor="middle" className="fig-nota">Horario, vista desde arriba</text>

      <text x="240" y="20" textAnchor="middle" className="fig-nota">Verde: sentido de avance · Rojo: giro de la fresa</text>
    </svg>
  )
}

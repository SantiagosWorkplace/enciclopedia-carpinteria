// Cómo apoyar un tablero para cortarlo con una sierra circular sin que el
// corte se cierre sobre el disco. Dibujo original, visto de frente.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2, strokeLinejoin: 'round' }
const caballete = { fill: 'none', stroke: '#57534e', strokeWidth: 4, strokeLinecap: 'round' }

function Caballete({ x, y }) {
  return (
    <>
      <path d={`M${x - 14} ${y} H${x + 14} M${x - 8} ${y} L${x - 16} 160 M${x + 8} ${y} L${x + 16} 160`} {...caballete} />
    </>
  )
}

function Sierra({ x, y, inclinada = 0 }) {
  return (
    <g transform={`rotate(${inclinada} ${x} ${y})`}>
      <circle cx={x} cy={y + 8} r="15" fill="#cbd5e1" stroke="#334155" strokeWidth="1" opacity="0.9" />
      <rect x={x - 30} y={y - 4} width="60" height="5" fill="#475569" />
      <path d={`M${x - 24} ${y - 4} V${y - 24} Q${x - 24} ${y - 30} ${x - 16} ${y - 30} H${x + 14} Q${x + 24} ${y - 30} ${x + 24} ${y - 20} V${y - 4} Z`} fill="#0e7490" stroke="#164e63" strokeWidth="1.2" />
    </g>
  )
}

function Mal() {
  return (
    <>
      <Caballete x={34} y={111} />
      <Caballete x={206} y={111} />
      <path d="M14 96 L120 112 L117 124 L14 108 Z" {...madera} />
      <path d="M120 112 L226 96 L226 108 L123 124 Z" {...madera} />
      <Sierra x={120} y={111} />
      <path d="M108 112 L116 116 M132 112 L124 116" stroke="#dc2626" strokeWidth="2" />
      <path d="M96 70 Q70 40 40 50" fill="none" stroke="#dc2626" strokeWidth="2.2" markerEnd="url(#ra-f)" />
    </>
  )
}

function Bien() {
  return (
    <>
      <Caballete x={84} y={110} />
      <Caballete x={156} y={110} />
      <rect x="14" y="98" width="103" height="12" {...madera} />
      <rect x="123" y="98" width="103" height="12" {...madera} />
      <Sierra x={120} y={97} />
    </>
  )
}

const paneles = [
  { titulo: 'Apoyado en los extremos', nota: 'El centro cede y el corte se cierra', C: Mal },
  { titulo: 'Apoyado junto al corte', nota: 'El corte queda abierto', C: Bien },
]

export default function RechazoApoyo() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 196" role="img" aria-label="Un tablero cortado con sierra circular: apoyado solo en los extremos, el centro cede, el corte se cierra sobre el disco y la sierra salta hacia atrás; apoyado cerca del corte a los dos lados, el corte queda abierto">
      <defs>
        <marker id="ra-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${i * 240} 0)`}>
          <C />
          <text x="120" y="178" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="120" y="193" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

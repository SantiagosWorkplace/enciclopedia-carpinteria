// Qué hacer con los trapos usados con aceite: el montón peligroso y dos
// formas seguras de dejarlos. Dibujo original.
const trapo = { fill: '#d6a35c', stroke: '#8a5a2e', strokeWidth: 1.2, strokeLinejoin: 'round' }

function Monton() {
  return (
    <>
      <path d="M14 110 Q10 84 34 80 Q40 60 62 66 Q78 50 96 64 Q122 62 124 86 Q134 98 126 110 Z" {...trapo} />
      <path d="M34 80 Q50 90 62 66 M96 64 Q90 84 112 92 M50 100 Q70 86 86 102" fill="none" stroke="#8a5a2e" strokeWidth="1.2" />
      <ellipse cx="72" cy="88" rx="30" ry="14" fill="#ef4444" opacity="0.3" />
      {[50, 72, 94].map((x) => <path key={x} d={`M${x} 52 q-5 -7 0 -14 q5 -7 0 -14`} fill="none" stroke="#dc2626" strokeWidth="1.6" />)}
    </>
  )
}

function Tendidos() {
  return (
    <>
      <path d="M8 30 H132" stroke="#475569" strokeWidth="1.4" />
      <path d="M24 30 H62 V86 Q52 82 43 88 Q33 92 24 86 Z" {...trapo} />
      <path d="M78 30 H116 V80 Q106 76 97 82 Q87 86 78 80 Z" {...trapo} />
      {[34, 52, 88, 106].map((x) => <rect key={x} x={x - 2} y="25" width="4" height="10" fill="#334155" />)}
    </>
  )
}

function Lata() {
  return (
    <>
      <rect x="40" y="46" width="60" height="64" rx="3" fill="#cbd5e1" stroke="#334155" strokeWidth="1.4" />
      <rect x="43" y="58" width="54" height="49" fill="#60a5fa" opacity="0.75" />
      <path d="M50 102 Q48 86 62 84 Q70 74 84 82 Q94 86 90 102 Z" {...trapo} opacity="0.85" />
      <path d="M34 40 L106 30 L107 36 L35 46 Z" fill="#94a3b8" stroke="#334155" strokeWidth="1.2" />
    </>
  )
}

const paneles = [
  { titulo: 'Montón arrugado', nota: 'Acumula calor y puede arder', C: Monton },
  { titulo: 'Extendidos', nota: 'De a uno, al aire libre', C: Tendidos },
  { titulo: 'Lata con agua', nota: 'Metálica y con tapa', C: Lata },
]

export default function TraposAceite() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Trapos con aceite: un montón arrugado que acumula calor, trapos tendidos de a uno y trapos sumergidos en una lata con agua">
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${10 + i * 160} 0)`}>
          <C />
          <text x="70" y="134" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="70" y="149" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

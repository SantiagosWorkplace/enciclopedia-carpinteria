// Cómo apoyar y fijar una tapa de piedra sobre un mueble. Dibujo original,
// visto de frente; los espesores están exagerados.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const piedra = { fill: '#e5e7eb', stroke: '#475569', strokeWidth: 1.2 }
const metal = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1.2 }

function Losa({ x0, x1, y }) {
  return (
    <>
      <rect x={x0} y={y} width={x1 - x0} height="12" {...piedra} />
      <path d={`M${x0 + 14} ${y + 3} q14 6 30 2 t34 4 M${x0 + 60} ${y + 9} q16 -5 36 -1`} fill="none" stroke="#9ca3af" strokeWidth="0.9" />
    </>
  )
}

function Continuo() {
  return (
    <>
      <Losa x0={6} x1={134} y={40} />
      <rect x="14" y="52" width="112" height="6" {...madera} />
      {[14, 65, 116].map((x) => <rect key={x} x={x} y="58" width="10" height="52" {...madera} />)}
    </>
  )
}

function Mensula() {
  return (
    <>
      <Losa x0={6} x1={134} y={40} />
      <rect x="10" y="52" width="72" height="6" {...madera} />
      {[10, 72].map((x) => <rect key={x} x={x} y="58" width="10" height="52" {...madera} />)}
      <path d="M82 52 H120 V56 L86 90 H82 Z" {...metal} />
    </>
  )
}

function Elastica() {
  return (
    <>
      <Losa x0={6} x1={134} y={40} />
      <rect x="6" y="60" width="128" height="16" {...madera} />
      {[30, 70, 110].map((x) => <ellipse key={x} cx={x} cy="56" rx="7" ry="4" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />)}
      <path d="M30 92 H110" stroke="#3b82f6" strokeWidth="1.8" markerStart="url(#ap-f)" markerEnd="url(#ap-f)" />
    </>
  )
}

const paneles = [
  { titulo: 'Apoyo continuo', nota: 'Bastidor plano y rígido', C: Continuo },
  { titulo: 'Vuelo con ménsula', nota: 'Más vuelo, más apoyo', C: Mensula },
  { titulo: 'Fijación elástica', nota: 'Puntos de silicona neutra', C: Elastica },
]

export default function ApoyoPiedra() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Apoyo de una tapa de piedra: sobre un tablero y laterales que la sostienen en toda su superficie, con una ménsula metálica bajo el vuelo y pegada con puntos de silicona que dejan moverse a la madera">
      <defs>
        <marker id="ap-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#3b82f6" />
        </marker>
      </defs>
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

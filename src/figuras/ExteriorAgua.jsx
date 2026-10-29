// Cómo envejecen los acabados al exterior y cómo se aleja el agua de la testa.
// Dibujo original; los espesores están exagerados.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const gota = (x, y) => `M${x} ${y} Q${x + 5} ${y + 9} ${x} ${y + 12} Q${x - 5} ${y + 9} ${x} ${y} Z`

function Pelicula() {
  return (
    <>
      <rect x="0" y="60" width="140" height="50" {...madera} />
      <ellipse cx="64" cy="66" rx="16" ry="6" fill="#3b82f6" opacity="0.25" />
      <path d="M62 60 H90 Q110 48 138 44 V60 Z" fill="#93c5fd" opacity="0.8" />
      <rect x="0" y="56" width="60" height="4" fill="#d97706" />
      <rect x="66" y="56" width="24" height="4" fill="#d97706" />
      <path d="M90 56 Q110 44 138 40 L138 44 Q110 48 90 60 Z" fill="#d97706" />
      <path d={gota(63, 22)} fill="#3b82f6" />
      <path d={gota(63, 38)} fill="#3b82f6" />
    </>
  )
}

function Penetrante() {
  return (
    <>
      <rect x="0" y="60" width="140" height="50" {...madera} />
      <rect x="0.6" y="60.6" width="138.8" height="8" fill="#d97706" opacity="0.35" />
      {[[28, 9], [70, 7], [108, 10]].map(([x, r]) => (
        <path key={x} d={`M${x - r} 60 A${r} ${r * 0.7} 0 0 1 ${x + r} 60 Z`} fill="#93c5fd" stroke="#3b82f6" strokeWidth="1" />
      ))}
    </>
  )
}

function Testa() {
  return (
    <>
      <path d="M50 110 V50 L90 38 V110 Z" {...madera} />
      {[60, 70, 80].map((x) => <path key={x} d={`M${x} ${50 - (x - 50) * 0.3 + 4} V108`} stroke="#c9a06a" strokeWidth="0.9" />)}
      <path d="M50 50 L90 38" stroke="#d97706" strokeWidth="3" />
      <path d="M86 32 L56 41" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#ea-f)" />
      <path d={gota(46, 58)} fill="#3b82f6" />
    </>
  )
}

const paneles = [
  { titulo: 'Película', nota: 'Si se raja, el agua la levanta', C: Pelicula },
  { titulo: 'Aceite penetrante', nota: 'Se gasta, no se pela', C: Penetrante },
  { titulo: 'Testa inclinada', nota: 'El agua escurre; testa sellada', C: Testa },
]

export default function ExteriorAgua() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Acabados al exterior: una película rajada que el agua levanta, un aceite penetrante que hace resbalar el agua y una testa cortada en pendiente">
      <defs>
        <marker id="ea-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
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

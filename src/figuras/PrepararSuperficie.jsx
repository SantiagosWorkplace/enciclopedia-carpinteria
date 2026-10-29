// Superficie de la madera en sección antes del acabado: poro abierto, poro
// tapado y repelo levantado. Dibujo original; los tamaños están exagerados.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const poros = [14, 34, 54, 74, 94, 114]

const conPoros = 'M0 110 V50 ' + poros.map((x) => `H${x - 3} V60 H${x + 3} V50`).join(' ') + ' H140 V110 Z'

function Abierto() {
  const pelicula = 'M0 48 ' + poros.map((x) => `H${x - 5} Q${x} 60 ${x + 5} 48`).join(' ') + ' H140'
  return (
    <>
      <path d={conPoros} {...madera} />
      <path d={pelicula} fill="none" stroke="#d97706" strokeWidth="3" opacity="0.85" />
    </>
  )
}

function Tapado() {
  return (
    <>
      <path d={conPoros} {...madera} />
      {poros.map((x) => <rect key={x} x={x - 3} y="50" width="6" height="10" fill="#8a5a2e" />)}
      <path d="M0 48 H140" stroke="#d97706" strokeWidth="3" opacity="0.85" />
    </>
  )
}

function Fibra() {
  const fibras = Array.from({ length: 22 }, (_, i) => 5 + i * 6)
  return (
    <>
      <rect x="0" y="50" width="140" height="60" {...madera} />
      {fibras.map((x, i) => <path key={x} d={`M${x} 50 L${x + 3} ${i % 2 ? 44 : 41}`} stroke="#7a4a22" strokeWidth="1.2" strokeLinecap="round" />)}
      {[30, 70, 110].map((x) => <path key={x} d={`M${x} 14 Q${x + 6} 24 ${x} 28 Q${x - 6} 24 ${x} 14 Z`} fill="#60a5fa" />)}
    </>
  )
}

const paneles = [
  { titulo: 'Poro abierto', nota: 'El acabado se hunde', C: Abierto },
  { titulo: 'Tapaporos', nota: 'Pasta en los poros', C: Tapado },
  { titulo: 'Fibra levantada', nota: 'Mojar, secar y lijar', C: Fibra },
]

export default function PrepararSuperficie() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 158" role="img" aria-label="Sección de la superficie: poro abierto bajo el acabado, poros rellenos con tapaporos y fibra levantada al mojar">
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

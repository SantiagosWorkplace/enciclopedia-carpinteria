// Tres herrajes para unir un estante a un lateral de forma desmontable.
// Dibujo original, en sección y esquemático.
const tablero = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const metal = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1.1, strokeLinejoin: 'round' }
const oscuro = { fill: '#64748b', stroke: '#1e293b', strokeWidth: 1 }

function Tableros() {
  return (
    <>
      <rect x="10" y="20" width="16" height="92" {...tablero} />
      <rect x="26" y="60" width="104" height="16" {...tablero} />
    </>
  )
}

function Excentrica() {
  return (
    <>
      <Tableros />
      <rect x="16" y="66" width="44" height="4" {...oscuro} />
      <rect x="54" y="60" width="22" height="14" {...metal} />
      <path d="M63 60 V64 M67 60 V64" stroke="#334155" strokeWidth="1.2" />
      <circle cx="60" cy="68" r="4" {...oscuro} />
    </>
  )
}

function Confirmat() {
  let d = 'M16 65.5'
  for (let x = 16; x < 76; x += 6) d += ` L${x + 3} 63 L${x + 6} 65.5`
  d += ' L84 68 L76 70.5'
  for (let x = 76; x > 16; x -= 6) d += ` L${x - 3} 73 L${x - 6} 70.5`
  return (
    <>
      <Tableros />
      <path d="M10 62 L16 65.5 V70.5 L10 74 Z" {...metal} />
      <path d={`${d} Z`} {...metal} />
    </>
  )
}

function Barril() {
  return (
    <>
      <Tableros />
      <rect x="75" y="68" width="14" height="8" fill="#fffbeb" stroke="#7a4a22" strokeWidth="1" />
      <rect x="4" y="60" width="6" height="16" {...oscuro} />
      <rect x="10" y="66" width="74" height="4" {...oscuro} />
      <circle cx="82" cy="68" r="7" {...metal} />
      <path d="M79 64 L85 72" stroke="#334155" strokeWidth="1.2" />
    </>
  )
}

const paneles = [
  { titulo: 'Excéntrica', nota: 'Media vuelta y aprieta', C: Excentrica },
  { titulo: 'Confirmat', nota: 'Tornillo para tablero', C: Confirmat },
  { titulo: 'Tuerca de barril', nota: 'Perno y tuerca cruzada', C: Barril },
]

export default function HerrajesDesmontables() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Tres uniones desmontables de un estante con un lateral, en sección: una excéntrica que atrapa la cabeza de un perno, un tornillo confirmat y un perno con tuerca de barril">
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

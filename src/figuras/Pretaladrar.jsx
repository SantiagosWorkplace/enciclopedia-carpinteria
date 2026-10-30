// Los tres agujeros de un tornillo y el tornillo ya puesto, en sección.
// Dibujo original; los diámetros están exagerados.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const madera2 = { fill: '#d9b277', stroke: '#7a4a22', strokeWidth: 1.2 }
const hueco = { fill: '#fffbeb', stroke: '#7a4a22', strokeWidth: 1 }
const metal = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1.1, strokeLinejoin: 'round' }

function Tablas({ x }) {
  return (
    <>
      <rect x={x} y="40" width="90" height="30" {...madera} />
      <rect x={x} y="70" width="90" height="55" {...madera2} />
    </>
  )
}

function rosca(cx, y0, y1) {
  let d = `M${cx - 2} ${y0}`
  for (let y = y0; y < y1; y += 6) d += ` L${cx - 5} ${y + 3} L${cx - 2} ${y + 6}`
  d += ` L${cx} ${y1 + 8} L${cx + 2} ${y1}`
  for (let y = y1; y > y0; y -= 6) d += ` L${cx + 5} ${y - 3} L${cx + 2} ${y - 6}`
  return d + ' Z'
}

const etiquetas = [
  { y: 34, titulo: 'Avellanado', nota: 'Aloja la cabeza', desde: [73, 43] },
  { y: 66, titulo: 'Agujero de paso', nota: '≈ diámetro de la caña', desde: [70, 58] },
  { y: 100, titulo: 'Agujero piloto', nota: '≈ diámetro del núcleo', desde: [68, 96] },
]

export default function Pretaladrar() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 165" role="img" aria-label="Sección de dos tablas con los tres agujeros de un tornillo: avellanado, agujero de paso en la pieza de arriba y agujero piloto en la de abajo; a la derecha, el tornillo puesto, con la rosca agarrando solo en la pieza de abajo">
      <Tablas x={20} />
      <path d="M57 40 H73 L69 46 H61 Z" {...hueco} />
      <rect x="61" y="46" width="8" height="24" {...hueco} />
      <rect x="62.5" y="70" width="5" height="40" {...hueco} />
      {etiquetas.map(({ y, titulo, nota, desde }) => (
        <g key={titulo}>
          <path d={`M${desde[0]} ${desde[1]} L116 ${y + 4}`} stroke="#64748b" strokeWidth="1" />
          <text x="120" y={y + 8} className="fig-titulo">{titulo}</text>
          <text x="120" y={y + 23} className="fig-nota">{nota}</text>
        </g>
      ))}
      <text x="65" y="150" textAnchor="middle" className="fig-titulo">Taladrado</text>

      <Tablas x={270} />
      <path d="M307 40 H323 L319 46 H311 Z" {...metal} />
      <rect x="311" y="46" width="8" height="24" {...metal} />
      <path d={rosca(315, 70, 110)} {...metal} />
      <path d="M326 70 L360 70" stroke="#64748b" strokeWidth="1" />
      <text x="364" y="66" className="fig-titulo">Junta cerrada</text>
      <text x="364" y="81" className="fig-nota">La rosca agarra abajo</text>
      <text x="315" y="150" textAnchor="middle" className="fig-titulo">Tornillo puesto</text>
    </svg>
  )
}

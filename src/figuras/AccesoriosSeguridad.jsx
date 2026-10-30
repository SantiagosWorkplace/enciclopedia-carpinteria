// Tres accesorios que alejan las manos de la herramienta. Dibujo original;
// los dos primeros de costado y el peine visto desde arriba.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const plastico = { fill: '#f97316', stroke: '#9a3412', strokeWidth: 1.2, strokeLinejoin: 'round' }
const flecha = { stroke: '#15803d', strokeWidth: 2.5, fill: 'none', markerEnd: 'url(#as-f)' }

function Empujador() {
  return (
    <>
      <rect x="30" y="96" width="100" height="14" {...madera} />
      <path d="M86 18 L98 26 L36 92 L36 110 L20 110 L20 92 L26 84 Z" {...plastico} />
      <path d="M80 26 L90 32" stroke="#9a3412" strokeWidth="1" />
      <path d="M40 70 H76" {...flecha} />
    </>
  )
}

function Bloque() {
  return (
    <>
      <rect x="36" y="96" width="94" height="14" {...madera} />
      <path d="M30 96 H112 V74 H30 Z M30 96 V112 H36 V96" {...plastico} />
      <path d="M48 74 V56 Q48 48 56 48 H86 Q94 48 94 56 V74 H84 V60 Q84 58 82 58 H60 Q58 58 58 60 V74 Z" {...plastico} />
      <path d="M40 34 H76" {...flecha} />
    </>
  )
}

function Peine() {
  const dedos = Array.from({ length: 7 }, (_, k) => 46 + k * 7)
  return (
    <>
      <rect x="6" y="88" width="128" height="22" {...madera} />
      <path d="M20 30 H82 L118 84 H56 Z" {...plastico} />
      {dedos.map((x) => <path key={x} d={`M${x} 44 L${x + 24} 84`} stroke="#9a3412" strokeWidth="1" />)}
      <path d="M40 100 H100" {...flecha} />
    </>
  )
}

const paneles = [
  { titulo: 'Empujador', nota: 'El talón engancha la pieza', C: Empujador },
  { titulo: 'Bloque de empuje', nota: 'Aprieta y empuja a la vez', C: Bloque },
  { titulo: 'Peine de presión', nota: 'Aprieta contra la guía', C: Peine },
]

export default function AccesoriosSeguridad() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Accesorios de seguridad: un empujador cuyo talón engancha el extremo de la pieza, un bloque de empuje con asa y talón, y un peine de presión con dedos inclinados que aprieta la pieza contra la guía">
      <defs>
        <marker id="as-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
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

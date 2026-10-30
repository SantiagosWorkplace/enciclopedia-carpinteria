// Orden de grapado de un asiento suelto y cómo se pliega una esquina.
// Dibujo original, visto desde abajo.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const tela = { fill: '#99f6e4', stroke: '#0f766e', strokeWidth: 1.2, strokeLinejoin: 'round' }
const tela2 = { fill: '#5eead4', stroke: '#0f766e', strokeWidth: 1.2, strokeLinejoin: 'round' }

const grapa = (x, y, vertical) =>
  vertical ? `M${x - 1.5} ${y - 4} H${x + 1.5} M${x} ${y - 4} V${y + 4} M${x - 1.5} ${y + 4} H${x + 1.5}` : `M${x - 4} ${y - 1.5} V${y + 1.5} M${x - 4} ${y} H${x + 4} M${x + 4} ${y - 1.5} V${y + 1.5}`

function Orden() {
  const numeros = [[140, 40, 1], [140, 140, 2], [50, 90, 3], [230, 90, 4]]
  const flechas = ['M126 40 H76', 'M154 40 H204', 'M126 140 H76', 'M154 140 H204', 'M50 76 V56', 'M50 104 V124', 'M230 76 V56', 'M230 104 V124']
  return (
    <>
      <rect x="20" y="12" width="240" height="156" rx="4" {...tela} />
      <rect x="40" y="30" width="200" height="120" {...madera} />
      {flechas.map((d) => <path key={d} d={d} stroke="#0f766e" strokeWidth="1.6" markerEnd="url(#gt-f)" />)}
      {numeros.map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x} cy={y} r="8" fill="#0f766e" />
          <text x={x} y={y + 4} textAnchor="middle" className="fig-letra">{n}</text>
        </g>
      ))}
    </>
  )
}

function Punta() {
  return (
    <>
      <path d="M298 52 H370 V150 H272 V78 Z" {...tela} />
      <rect x="290" y="70" width="80" height="80" {...madera} />
      <path d="M298 52 L272 78 L298 78 Z" {...tela2} />
      <path d={grapa(291, 72, false)} transform="rotate(-45 291 72)" stroke="#1e293b" strokeWidth="1.2" fill="none" />
    </>
  )
}

function Lados() {
  return (
    <>
      <rect x="400" y="70" width="80" height="80" {...madera} transform="translate(-8 0)" />
      <path d="M392 70 H472 V86 H408 Z" {...tela2} />
      <path d="M392 70 L408 86 V150 H392 Z" {...tela2} />
      {[[430, 78, false], [456, 78, false], [400, 112, true], [400, 136, true]].map(([x, y, v]) => <path key={`${x}-${y}`} d={grapa(x, y, v)} stroke="#1e293b" strokeWidth="1.2" fill="none" />)}
    </>
  )
}

export default function GraparTela() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 200" role="img" aria-label="Asiento visto desde abajo: se grapa primero el centro de cada lado, en el orden uno a cuatro, y después hacia las esquinas. En cada esquina se tira la punta en diagonal y se grapa, y luego se pliegan los dos lados">
      <defs>
        <marker id="gt-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#0f766e" />
        </marker>
      </defs>
      <Orden />
      <Punta />
      <Lados />
      <text x="140" y="186" textAnchor="middle" className="fig-titulo">Orden de grapado</text>
      <text x="321" y="172" textAnchor="middle" className="fig-titulo">1. Punta</text>
      <text x="432" y="172" textAnchor="middle" className="fig-titulo">2. Lados</text>
      <text x="376" y="188" textAnchor="middle" className="fig-nota">Esquina vista de abajo</text>
    </svg>
  )
}

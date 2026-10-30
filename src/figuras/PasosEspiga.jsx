// Cuatro pasos para cortar una espiga a mano. Los tres primeros, el travesaño
// visto de canto; el último, en corte dentro de la pata. Dibujo original.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2, strokeLinejoin: 'round' }
const oscura = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2, strokeLinejoin: 'round' }
const lapiz = { stroke: '#334155', strokeWidth: 1.1 }
const gramil = { stroke: '#1d4ed8', strokeWidth: 1.2, strokeDasharray: '4 3' }
const corte = { stroke: '#5b3416', strokeWidth: 1.6 }
const mango = { fill: '#a16207', stroke: '#713f12', strokeWidth: 1 }

function Sierra({ x, y0, y1 }) {
  return (
    <>
      <path d={`M${x} ${y1} V${y0}`} stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
      <path d={`M${x - 5} ${y0 - 2} H${x + 5} L${x + 6} ${y0 + 10} H${x - 4} Z`} {...mango} />
    </>
  )
}

function Equis({ x, y }) {
  return <path d={`M${x - 3} ${y - 3} L${x + 3} ${y + 3} M${x + 3} ${y - 3} L${x - 3} ${y + 3}`} stroke="#b91c1c" strokeWidth="1.4" />
}

function Marcar() {
  return (
    <>
      <rect x="4" y="44" width="104" height="30" {...madera} />
      <path d="M74 44 V74" {...lapiz} />
      <path d="M74 54 H108 M74 64 H108" {...gramil} />
      <Equis x={92} y={49} />
      <Equis x={92} y={69} />
    </>
  )
}

// De cara: la pieza inclinada en el tornillo y la hoja de la sierra, que corta
// en diagonal hasta llegar al hombro por un canto.
function SerrarMejillas() {
  return (
    <>
      <polygon points="5.9,41.8 42.1,24.8 73.4,91.9 37.2,108.8" {...madera} />
      <path d="M19.4 70.8 L55.6 53.8" {...lapiz} />
      <rect x="20" y="90" width="76" height="20" rx="2" fill="#64748b" stroke="#334155" strokeWidth="1" />
      <rect x="2" y="28" width="82" height="25.8" fill="#cbd5e1" fillOpacity="0.75" stroke="#475569" strokeWidth="1" />
      <rect x="2" y="24" width="82" height="6" fill="#475569" />
      <path d="M84 22 L98 18 Q106 30 102 48 L86 50 Z M90 28 Q96 27 97 34 Q96 41 90 41 Z" fillRule="evenodd" {...mango} />
    </>
  )
}

function SerrarHombros() {
  return (
    <>
      <rect x="0" y="100" width="114" height="10" fill="#a8a29e" stroke="#57534e" strokeWidth="1" />
      <rect x="6" y="86" width="92" height="8" {...oscura} />
      <rect x="86" y="94" width="12" height="16" {...oscura} />
      <rect x="6" y="62" width="104" height="24" {...madera} />
      <path d="M80 62 V86" {...lapiz} />
      <path d="M80 70 H110 M80 78 H110" {...corte} />
      <path d="M81 62 V69" {...corte} />
      <Sierra x={81} y0={14} y1={66} />
    </>
  )
}

function Probar() {
  return (
    <>
      <rect x="62" y="8" width="40" height="104" {...madera} />
      <rect x="62" y="48" width="32" height="24" fill="#fffaf2" stroke="#7a4a22" strokeWidth="1" />
      <path d="M4 36 H48 V48 H78 V72 H48 V84 H4 Z" {...oscura} />
      <path d="M12 24 H40" stroke="#15803d" strokeWidth="2.5" markerEnd="url(#pe-f)" />
    </>
  )
}

const paneles = [
  { titulo: 'Marcar', nota: 'Gramil de dos puntas', C: Marcar },
  { titulo: 'Serrar mejillas', nota: 'Pieza inclinada', C: SerrarMejillas },
  { titulo: 'Serrar hombros', nota: 'Con gancho de banco', C: SerrarHombros },
  { titulo: 'Probar', nota: 'Entra con la mano', C: Probar },
]

export default function PasosEspiga() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Cuatro pasos para cortar una espiga: marcar con un gramil de dos puntas, serrar las mejillas con la pieza inclinada en el tornillo, serrar los hombros sobre un gancho de banco y probar el ajuste en la caja">
      <defs>
        <marker id="pe-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
        </marker>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${4 + i * 118} 6)`}>
          <C />
          <circle cx="6" cy="4" r="8" fill="#b45309" />
          <text x="6" y="8" textAnchor="middle" className="fig-letra" style={{ fontSize: 10 }}>{i + 1}</text>
          <text x="57" y="128" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="57" y="143" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

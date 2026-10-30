// Tres situaciones que deciden la unión: una pieza que apoya, una que recibe
// un tirón y una unión ancha a contraveta. Dibujo original, esquemático.
const clara = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2, strokeLinejoin: 'round' }
const oscura = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2, strokeLinejoin: 'round' }
const carga = { stroke: '#b91c1c', strokeWidth: 2.5, markerEnd: 'url(#eu-r)' }

// Estante en una ranura, visto de frente.
function Apoyo() {
  return (
    <>
      <rect x="20" y="8" width="16" height="108" {...clara} />
      <rect x="30" y="58" width="104" height="14" {...oscura} />
      {[70, 110].map((x) => <path key={x} d={`M${x} 26 V52`} {...carga} />)}
    </>
  )
}

// Lateral de cajón visto de costado: las colas traban el frente.
function Tiron() {
  const espigas = [
    [[30, 40], [30, 43], [44, 46], [44, 40]],
    [[30, 67], [30, 73], [44, 76], [44, 64]],
    [[30, 100], [30, 97], [44, 94], [44, 100]],
  ]
  return (
    <>
      <rect x="30" y="30" width="14" height="80" {...oscura} />
      <rect x="30" y="40" width="104" height="60" {...clara} />
      {espigas.map((e, k) => <polygon key={k} points={e.map((q) => q.join(',')).join(' ')} fill="#b98a52" stroke="#7a4a22" strokeWidth="1" />)}
      <path d="M44 40 V100" stroke="#7a4a22" strokeWidth="0.8" strokeDasharray="3 2" />
      <rect x="22" y="64" width="8" height="12" rx="2" fill="#475569" />
      <path d="M20 70 H4" {...carga} />
    </>
  )
}

// Tablero ancho encolado a un travesaño con la veta cruzada.
function Movimiento() {
  return (
    <>
      <rect x="14" y="22" width="120" height="84" {...clara} />
      {[34, 48, 62, 76, 90].map((y) => <path key={y} d={`M18 ${y} Q74 ${y - 3} 130 ${y}`} fill="none" stroke="#c99a5c" strokeWidth="0.8" />)}
      <rect x="100" y="22" width="16" height="84" {...oscura} />
      {[106, 110].map((x) => <path key={x} d={`M${x} 26 V102`} stroke="#a8743c" strokeWidth="0.8" />)}
      <path d="M60 40 L65 50 L58 60 L66 70 L60 82" fill="none" stroke="#b91c1c" strokeWidth="1.6" />
      {['M40 18 V4', 'M40 110 V124'].map((d) => <path key={d} d={d} stroke="#15803d" strokeWidth="2.2" markerEnd="url(#eu-v)" />)}
    </>
  )
}

const paneles = [
  { titulo: 'Apoyo', nota: 'Compresión y cizalla', C: Apoyo },
  { titulo: 'Tirón', nota: 'Necesita traba', C: Tiron },
  { titulo: 'Movimiento', nota: 'A contraveta, se raja', C: Movimiento },
]

export default function EsfuerzosUnion() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 172" role="img" aria-label="Tres situaciones: un estante que apoya en una ranura y trabaja a compresión y cizalla; el lateral de un cajón cuyas colas de milano traban el frente cuando se tira de él; y un tablero ancho encolado a un travesaño con la veta cruzada, que al cambiar de ancho se raja">
      <defs>
        <marker id="eu-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#b91c1c" />
        </marker>
        <marker id="eu-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
        </marker>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${10 + i * 160} 6)`}>
          <C />
          <text x="70" y="146" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="70" y="161" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

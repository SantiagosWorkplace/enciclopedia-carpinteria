// Dos ayudas al apretar: un calzo curvo que lleva la presión al centro, y la
// prensa inclinada hacia la diagonal larga para escuadrar. Curvatura y
// descuadre exagerados. Dibujo original.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2, strokeLinejoin: 'round' }
const oscura = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2, strokeLinejoin: 'round' }
const flecha = { stroke: '#15803d', strokeWidth: 2.2, markerEnd: 'url(#cd-f)' }

function Prensa({ x }) {
  return (
    <>
      <path d={`M${x} 44 V118`} stroke="#475569" strokeWidth="4" />
      <rect x={x - 12} y="57" width="24" height="7" rx="1" fill="#334155" />
      <rect x={x - 12} y="110" width="24" height="7" rx="1" fill="#334155" />
    </>
  )
}

function Calzo() {
  return (
    <>
      <rect x="14" y="86" width="212" height="16" {...madera} />
      <path d="M22 78 Q120 94 218 78 V64 H22 Z" {...oscura} />
      <path d="M22 102 H218 V110 H22 Z" {...oscura} />
      <Prensa x={30} />
      <Prensa x={210} />
      {[100, 120, 140].map((x) => <path key={x} d={`M${x} 87 V99`} {...flecha} />)}
    </>
  )
}

function Diagonal() {
  return (
    <>
      <polygon points="56,24 204,24 192,128 44,128" fill="none" stroke="#7a4a22" strokeWidth="12" strokeLinejoin="miter" />
      <polygon points="56,24 204,24 192,128 44,128" fill="none" stroke="#e9c88f" strokeWidth="9.6" strokeLinejoin="miter" />
      <path d="M56 24 L192 128" stroke="#1d4ed8" strokeWidth="1.2" strokeDasharray="5 3" />
      <path d="M204 24 L44 128" stroke="#b91c1c" strokeWidth="1.6" strokeDasharray="5 3" />
      <path d="M22 88 L226 62" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
      <rect x="28" y="78" width="8" height="16" fill="#334155" transform="rotate(-7.3 32 86)" />
      <rect x="210" y="56" width="8" height="16" fill="#334155" transform="rotate(-7.3 214 64)" />
      <text x="138" y="12" className="fig-nota" style={{ fill: '#b91c1c' }}>Diagonal larga</text>
    </>
  )
}

const paneles = [
  { titulo: 'Calzo curvo', nota: 'Las puntas aprietan primero el centro', C: Calzo },
  { titulo: 'Prensa inclinada', nota: 'Hacia la diagonal larga', C: Diagonal },
]

export default function CalzoDiagonal() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 172" role="img" aria-label="A la izquierda, un tablero de canto con un calzo curvo encima y otro recto debajo, prensados en las puntas: la curva lleva la presión al centro. A la derecha, un marco descuadrado visto desde arriba con la prensa inclinada hacia la diagonal larga">
      <defs>
        <marker id="cd-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
        </marker>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${i * 240} 0)`}>
          <C />
          <text x="120" y="148" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="120" y="163" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

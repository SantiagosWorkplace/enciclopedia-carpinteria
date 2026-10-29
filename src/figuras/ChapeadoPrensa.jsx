// Dos formas de prensar la chapa: travesaños curvos con prensas y bolsa de vacío.
// Secciones esquemáticas con los espesores exagerados. Dibujo original.
const metal = { fill: '#64748b', stroke: '#334155', strokeWidth: 1 }
const trav = { fill: '#c98f55', stroke: '#7a4a22', strokeWidth: 1.2 }
const plato = { fill: '#e5e7eb', stroke: '#6b7280', strokeWidth: 1 }
const nucleo = { fill: '#cdb48a', stroke: '#7a5a32', strokeWidth: 1 }
const chapa = { fill: '#9a5b2c', stroke: '#5b3416', strokeWidth: 0.6 }
const rojo = '#dc2626'

// Pila de trabajo: tablero de presión, chapa, soporte, chapa, tablero de presión.
function Pila({ x, y, w }) {
  return (
    <>
      <rect x={x} y={y} width={w} height="8" {...plato} />
      <rect x={x + 4} y={y + 8} width={w - 8} height="3" {...chapa} />
      <rect x={x + 4} y={y + 11} width={w - 8} height="14" {...nucleo} />
      <rect x={x + 4} y={y + 25} width={w - 8} height="3" {...chapa} />
      <rect x={x} y={y + 28} width={w} height="8" {...plato} />
    </>
  )
}

export default function ChapeadoPrensa() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 200" role="img" aria-label="Chapeado con travesaños curvos y prensas, y chapeado en bolsa de vacío">
      <defs>
        <marker id="cp-punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill={rojo} />
        </marker>
      </defs>

      {/* Travesaños curvos */}
      <g>
        <path d="M14 34 H226 V44 Q120 58 14 44 Z" {...trav} />
        <Pila x={26} y={52} w={188} />
        <path d="M14 106 H226 V96 Q120 82 14 96 Z" {...trav} />
        <rect x="6" y="28" width="8" height="84" {...metal} />
        <rect x="226" y="28" width="8" height="84" {...metal} />
        <path d="M120 18 V44" stroke={rojo} strokeWidth="1.6" markerEnd="url(#cp-punta)" />
        <path d="M120 124 V98" stroke={rojo} strokeWidth="1.6" markerEnd="url(#cp-punta)" />
        <text x="120" y="166" textAnchor="middle" className="fig-titulo">Travesaños curvos</text>
        <text x="120" y="181" textAnchor="middle" className="fig-nota">Aprietan primero en el centro y empujan</text>
        <text x="120" y="194" textAnchor="middle" className="fig-nota">la cola sobrante hacia los bordes</text>
      </g>

      {/* Bolsa de vacío */}
      <g transform="translate(244 0)">
        <rect x="16" y="104" width="200" height="10" fill="#d1d5db" stroke="#6b7280" />
        {[30, 60, 90, 120, 150, 180].map((x) => <path key={x} d={`M${x} 104 V114`} stroke="#9ca3af" strokeWidth="2" />)}
        <Pila x={36} y={68} w={160} />
        <path d="M10 118 V100 Q10 60 40 60 H192 Q222 60 222 100 V118 Z" fill="none" stroke="#2563eb" strokeWidth="1.6" />
        <path d="M222 110 H232 V140" fill="none" stroke="#1f2937" strokeWidth="3" />
        {[60, 100, 140, 180].map((x) => <path key={x} d={`M${x} 46 V62`} stroke={rojo} strokeWidth="1.4" markerEnd="url(#cp-punta)" />)}
        <path d="M24 82 H36 M208 82 H196" stroke={rojo} strokeWidth="1.4" markerEnd="url(#cp-punta)" />
        <text x="116" y="166" textAnchor="middle" className="fig-titulo">Bolsa de vacío</text>
        <text x="116" y="181" textAnchor="middle" className="fig-nota">El aire de afuera aprieta por igual</text>
        <text x="116" y="194" textAnchor="middle" className="fig-nota">en toda la superficie</text>
      </g>
    </svg>
  )
}

// Cepilladora y regruesadora vistas de costado, en sección. Dibujo original.
// La pieza avanza de izquierda a derecha.
const metal = { fill: '#cbd5e1', stroke: '#475569', strokeWidth: 1.4 }
const madera = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const flecha = { stroke: '#15803d', strokeWidth: 2.5, fill: 'none', markerEnd: 'url(#cep2-punta)' }

function Rodillo({ cx, cy, r = 13, cuchillas = true }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#475569" stroke="#1f2937" />
      {cuchillas && [0, 180].map((g) => (
        <rect key={g} x={cx - 1.5} y={cy - r - 3} width="3" height="6" fill="#e2e8f0" transform={`rotate(${g + 30} ${cx} ${cy})`} />
      ))}
    </g>
  )
}

export default function CepilladoraRegruesadora() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 236" role="img" aria-label="Cepilladora con mesa de entrada más baja que la de salida, y regruesadora con rodillos de arrastre">
      <defs>
        <marker id="cep2-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
        </marker>
      </defs>

      {/* Cepilladora: aplana la cara de abajo */}
      <rect x="10" y="104" width="100" height="22" {...metal} />
      <rect x="122" y="100" width="100" height="22" {...metal} />
      <Rodillo cx={116} cy={113} />
      <path d="M14 104 H116 L118 100 H218 V84 Q120 82 14 90 Z" {...madera} />
      <path d="M40 70 H100" {...flecha} />
      <text x="60" y="146" textAnchor="middle" className="fig-nota">Mesa de entrada</text>
      <text x="60" y="159" textAnchor="middle" className="fig-nota">más baja</text>
      <text x="172" y="146" textAnchor="middle" className="fig-nota">Mesa de salida</text>
      <text x="172" y="159" textAnchor="middle" className="fig-nota">a la altura del filo</text>
      <text x="116" y="196" textAnchor="middle" className="fig-titulo">Cepilladora</text>
      <text x="116" y="212" textAnchor="middle" className="fig-nota">Deja plana la cara de abajo</text>

      {/* Regruesadora: deja la cara de arriba paralela a la de abajo */}
      <rect x="260" y="118" width="210" height="16" {...metal} />
      <rect x="276" y="96" width="160" height="22" {...madera} />
      <Rodillo cx={316} cy={84} r={9} cuchillas={false} />
      <Rodillo cx={356} cy={82} />
      <Rodillo cx={396} cy={84} r={9} cuchillas={false} />
      <path d="M250 70 H300" {...flecha} />
      <line x1="446" y1="96" x2="446" y2="118" stroke="#1d4ed8" strokeWidth="1.4" />
      <text x="452" y="111" style={{ fill: '#1d4ed8' }} className="fig-nota">espesor</text>
      <text x="316" y="62" textAnchor="middle" className="fig-nota">arrastre</text>
      <text x="356" y="58" textAnchor="middle" className="fig-nota">cuchillas</text>
      <text x="396" y="62" textAnchor="middle" className="fig-nota">arrastre</text>
      <text x="364" y="196" textAnchor="middle" className="fig-titulo">Regruesadora</text>
      <text x="364" y="212" textAnchor="middle" className="fig-nota">Iguala el espesor; copia la cara de abajo</text>
    </svg>
  )
}

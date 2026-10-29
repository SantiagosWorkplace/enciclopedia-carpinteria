// Cuatro formas de sujetar la pieza en el banco. Dibujo original y esquemático.
const banco = { fill: '#c98f55', stroke: '#7a4a22', strokeWidth: 1.2 }
const pieza = { fill: '#f1d4a4', stroke: '#7a4a22', strokeWidth: 1.2 }
const metal = { fill: '#64748b', stroke: '#334155', strokeWidth: 1 }

const paneles = [
  {
    titulo: 'Perros y tornillo de cola', nota: 'Para cepillar caras',
    d: (
      <>
        <rect x="0" y="60" width="200" height="16" {...banco} />
        <rect x="30" y="46" width="140" height="14" {...pieza} />
        <rect x="24" y="44" width="6" height="18" {...metal} />
        <rect x="170" y="44" width="6" height="18" {...metal} />
        <rect x="176" y="60" width="30" height="16" fill="#e2b77d" stroke="#7a4a22" />
        <path d="M206 38 H184" stroke="#dc2626" strokeWidth="2" markerEnd="url(#suj-punta)" />
      </>
    ),
  },
  {
    titulo: 'Gato', nota: 'Un golpe lo fija, otro lo suelta',
    d: (
      <>
        <rect x="0" y="60" width="200" height="16" {...banco} />
        <rect x="40" y="46" width="120" height="14" {...pieza} />
        <path d="M100 76 V30 Q100 18 116 22 L138 44" fill="none" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
      </>
    ),
  },
  {
    titulo: 'Gancho de banco', nota: 'Para serrar al través',
    d: (
      <>
        <rect x="40" y="60" width="160" height="16" {...banco} />
        <rect x="30" y="50" width="120" height="10" fill="#e2b77d" stroke="#7a4a22" />
        <rect x="30" y="60" width="10" height="14" fill="#e2b77d" stroke="#7a4a22" />
        <rect x="130" y="40" width="20" height="10" fill="#e2b77d" stroke="#7a4a22" />
        <rect x="70" y="40" width="60" height="10" {...pieza} />
      </>
    ),
  },
  {
    titulo: 'Tope de cepillar', nota: 'La pieza empuja contra él',
    d: (
      <>
        <rect x="0" y="60" width="200" height="16" {...banco} />
        <rect x="10" y="50" width="12" height="10" fill="#e2b77d" stroke="#7a4a22" />
        <rect x="22" y="50" width="150" height="10" {...pieza} />
        <path d="M176 44 H140" stroke="#dc2626" strokeWidth="2" markerEnd="url(#suj-punta)" />
      </>
    ),
  },
]

export default function SujecionBanco() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 260" role="img" aria-label="Pieza sujeta con perros y tornillo de cola, con gato, con gancho de banco y contra un tope de cepillar">
      <defs>
        <marker id="suj-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${20 + (i % 2) * 240} ${6 + Math.floor(i / 2) * 128})`}>
          {p.d}
          <text x="100" y="98" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <text x="100" y="113" textAnchor="middle" className="fig-nota">{p.nota}</text>
        </g>
      ))}
    </svg>
  )
}

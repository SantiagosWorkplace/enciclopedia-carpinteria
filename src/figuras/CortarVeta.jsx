// Dirección de corte según la veta en una forma convexa y en una cóncava.
// Dibujo original; la pieza se ve de costado y la veta corre a lo largo.
const convexo = 'M0 120 V80 C50 80 60 20 105 20 C150 20 160 80 210 80 V120 Z'
const concavo = 'M0 120 V20 C50 20 60 80 105 80 C150 80 160 20 210 20 V120 Z'

const paneles = [
  {
    id: 'cv-convexo', d: convexo, titulo: 'Forma convexa', nota: 'Desde la cresta hacia los lados',
    flechas: ['M96 11 C70 11 58 56 18 69', 'M114 11 C140 11 152 56 192 69'],
  },
  {
    id: 'cv-concavo', d: concavo, titulo: 'Forma cóncava', nota: 'Desde los bordes hacia el fondo',
    flechas: ['M18 12 C50 13 62 72 96 72', 'M192 12 C160 13 148 72 114 72'],
  },
]

export default function CortarVeta() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 186" role="img" aria-label="Dirección de corte a favor de la veta en formas convexas y cóncavas">
      <defs>
        <marker id="cv-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
        </marker>
        {paneles.map((p) => <clipPath key={p.id} id={p.id}><path d={p.d} /></clipPath>)}
      </defs>
      {paneles.map((p, i) => (
        <g key={p.id} transform={`translate(${20 + i * 230} 20)`}>
          <path d={p.d} fill="#e9c88f" />
          <g clipPath={`url(#${p.id})`}>
            {Array.from({ length: 14 }, (_, k) => 26 + k * 7).map((y) => (
              <path key={y} d={`M0 ${y} H210`} stroke="#c9a06a" strokeWidth="0.9" />
            ))}
          </g>
          <path d={p.d} fill="none" stroke="#7a4a22" strokeWidth="1.4" />
          {p.flechas.map((f) => <path key={f} d={f} fill="none" stroke="#15803d" strokeWidth="2.2" markerEnd="url(#cv-f)" />)}
          <text x="105" y="142" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <text x="105" y="157" textAnchor="middle" className="fig-nota">{p.nota}</text>
        </g>
      ))}
    </svg>
  )
}

// Corte de un taller con luz general pareja y luz de trabajo en el banco.
// Dibujo original y esquemático.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const luz = { fill: '#fde68a', fillOpacity: 0.35 }

export default function IluminacionTaller() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 230" role="img" aria-label="Corte de un taller: tres luminarias en el techo dan luz general pareja, y una lámpara de trabajo ilumina el banco desde un costado">
      <path d="M10 18 H470" stroke="#57534e" strokeWidth="3" />
      <path d="M10 180 H470" stroke="#57534e" strokeWidth="3" />
      {[80, 240, 400].map((x) => (
        <g key={x}>
          <polygon points={`${x - 24},24 ${x + 24},24 ${x + 76},180 ${x - 76},180`} {...luz} />
          <rect x={x - 24} y="18" width="48" height="7" rx="2" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
        </g>
      ))}
      <rect x="250" y="122" width="170" height="10" {...madera} />
      <path d="M262 132 V180 M408 132 V180" stroke="#7a4a22" strokeWidth="6" />
      <path d="M262 160 H408" stroke="#7a4a22" strokeWidth="4" />
      <path d="M232 180 V80 L262 66" fill="none" stroke="#334155" strokeWidth="3" strokeLinejoin="round" />
      <path d="M256 60 L274 58 L276 74 L262 76 Z" fill="#334155" />
      <polygon points="270,74 278,70 340,122 286,122" fill="#fde047" fillOpacity="0.55" />
      <rect x="300" y="110" width="44" height="12" {...madera} />
      <text x="90" y="200" textAnchor="middle" className="fig-titulo">Luz general</text>
      <text x="90" y="215" textAnchor="middle" className="fig-nota">≈ 300 – 500 lux, pareja</text>
      <text x="335" y="200" textAnchor="middle" className="fig-titulo">Luz de trabajo en el banco</text>
      <text x="335" y="215" textAnchor="middle" className="fig-nota">≈ 750 – 1000 lux, desde un costado</text>
    </svg>
  )
}

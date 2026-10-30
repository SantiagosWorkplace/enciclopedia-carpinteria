// Taladro atornillador a batería visto de costado, con sus controles.
// Dibujo original.
const etiquetas = [
  { titulo: 'Portabrocas', nota: 'Sin llave, de 10 o 13 mm', x: 10, y: 20, desde: [112, 62], hasta: [84, 40] },
  { titulo: 'Anillo del embrague', nota: 'Evita pasar el tornillo', x: 10, y: 120, desde: [139, 94], hasta: [110, 108] },
  { titulo: 'Selector de velocidad', nota: '1.ª lenta y con fuerza · 2.ª rápida', x: 290, y: 24, desde: [214, 46], hasta: [286, 26] },
  { titulo: 'Sentido de giro', nota: 'Atornillar o desatornillar', x: 290, y: 92, desde: [216, 106], hasta: [286, 94] },
  { titulo: 'Gatillo', nota: 'Más presión, más velocidad', x: 10, y: 184, desde: [199, 118], hasta: [150, 172] },
  { titulo: 'Batería', nota: 'Voltaje y capacidad', x: 304, y: 180, desde: [294, 186], hasta: [300, 184] },
]

export default function TaladroAtornillador() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 214" role="img" aria-label="Taladro atornillador a batería de costado, con portabrocas, anillo del embrague, selector de velocidad, botón de sentido de giro, gatillo y batería">
      <rect x="44" y="73" width="50" height="6" fill="#e2e8f0" stroke="#475569" strokeWidth="1" />
      <path d="M44 73 L38 76 L44 79 Z" fill="#e2e8f0" stroke="#475569" strokeWidth="1" />
      <path d="M90 66 L98 60 H132 V92 H98 L90 86 Z" fill="#475569" stroke="#1e293b" strokeWidth="1.2" />
      {[104, 112, 120].map((x) => <path key={x} d={`M${x} 61 V91`} stroke="#94a3b8" strokeWidth="1" />)}
      <rect x="132" y="56" width="14" height="40" rx="2" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.2" />
      {[62, 70, 78, 86].map((y) => <path key={y} d={`M134 ${y} H144`} stroke="#334155" strokeWidth="0.8" />)}
      <path d="M146 50 H246 Q270 50 270 75 Q270 100 246 102 H146 Z" fill="#0e7490" stroke="#164e63" strokeWidth="1.4" />
      <path d="M160 58 H240" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <rect x="202" y="44" width="24" height="7" rx="2" fill="#1e293b" />
      <rect x="208" y="45" width="8" height="5" rx="1" fill="#e2e8f0" />
      <path d="M204 102 H240 L254 172 H214 Z" fill="#334155" stroke="#0f172a" strokeWidth="1.2" />
      <path d="M220 112 L230 166" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
      <path d="M204 106 Q194 116 200 128 L207 126 L205 106 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
      <rect x="210" y="103" width="10" height="7" rx="1.5" fill="#e2e8f0" stroke="#0f172a" strokeWidth="0.8" />
      <rect x="190" y="172" width="104" height="30" rx="5" fill="#1f2937" stroke="#0f172a" strokeWidth="1.2" />
      <rect x="198" y="178" width="46" height="12" rx="2" fill="#e2e8f0" />
      {[262, 270, 278].map((x) => <rect key={x} x={x} y="182" width="6" height="4" rx="1" fill="#22c55e" />)}
      {etiquetas.map(({ titulo, nota, x, y, desde, hasta }) => (
        <g key={titulo}>
          <path d={`M${desde[0]} ${desde[1]} L${hasta[0]} ${hasta[1]}`} stroke="#64748b" strokeWidth="1" />
          <circle cx={desde[0]} cy={desde[1]} r="2" fill="#64748b" />
          <text x={x} y={y} className="fig-titulo">{titulo}</text>
          <text x={x} y={y + 15} className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

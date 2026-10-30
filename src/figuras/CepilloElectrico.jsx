// Cepillo eléctrico en sección, cepillando una tabla. Dibujo original;
// la profundidad de pasada está muy exagerada.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const base = { fill: '#94a3b8', stroke: '#1e293b', strokeWidth: 1.2 }

const etiquetas = [
  { titulo: 'Base delantera regulable', nota: 'Su altura fija la pasada', x: 10, y: 20, desde: [120, 112], hasta: [80, 38] },
  { titulo: 'Salida de viruta', nota: 'A bolsa o aspirador', x: 330, y: 14, desde: [262, 66], hasta: [326, 24] },
  { titulo: 'Tambor con cuchillas', nota: 'Gira a alta velocidad', x: 90, y: 166, desde: [210, 128], hasta: [190, 154] },
  { titulo: 'Base trasera fija', nota: 'A la altura del filo', x: 300, y: 166, desde: [300, 128], hasta: [316, 154] },
]

export default function CepilloElectrico() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 190" role="img" aria-label="Cepillo eléctrico en sección: la base delantera apoya sobre la madera sin cepillar, el tambor con dos cuchillas corta, y la base trasera apoya sobre la superficie ya cepillada, más baja">
      <defs>
        <marker id="ce-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
        </marker>
      </defs>
      <path d="M10 118 H210 V124 H470 V146 H10 Z" {...madera} />
      <path d="M210 118 H470 V124 H210 Z" fill="none" stroke="#7a4a22" strokeWidth="0.8" strokeDasharray="3 3" />
      <path d="M90 118 H196 V108 H90 Z" {...base} />
      <path d="M224 124 H350 V112 H224 Z" {...base} />
      <path d="M90 108 V70 Q90 56 106 56 H330 Q350 56 350 72 V112 H224 L214 100 H202 L196 108 Z" fill="#0e7490" stroke="#164e63" strokeWidth="1.4" />
      <path d="M296 56 Q300 42 322 42 H362 Q376 42 376 54 V72 L350 72" fill="none" stroke="#334155" strokeWidth="9" strokeLinejoin="round" />
      <rect x="100" y="44" width="30" height="12" rx="3" fill="#334155" />
      <circle cx="210" cy="114" r="11" fill="#475569" stroke="#0f172a" strokeWidth="1" />
      <path d="M210 114 L210 125 M210 114 L210 103" stroke="#e2e8f0" strokeWidth="2.5" />
      <path d="M222 106 Q240 90 262 66" fill="none" stroke="#c9a06a" strokeWidth="3" strokeDasharray="4 3" />
      <path d="M70 100 H24" stroke="#15803d" strokeWidth="2.5" markerEnd="url(#ce-f)" />
      <text x="26" y="92" className="fig-nota">Avance</text>
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

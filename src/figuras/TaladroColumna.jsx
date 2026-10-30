// Taladro de columna visto de costado, con sus partes. Dibujo original.
const metal = { fill: '#94a3b8', stroke: '#1e293b', strokeWidth: 1.2, strokeLinejoin: 'round' }
const cuerpo = { fill: '#0e7490', stroke: '#164e63', strokeWidth: 1.4, strokeLinejoin: 'round' }
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }

const etiquetas = [
  { titulo: 'Cabezal', nota: 'Motor y husillo', x: 10, y: 50, desde: [182, 64], hasta: [104, 50] },
  { titulo: 'Tope de profundidad', nota: 'Agujeros ciegos iguales', x: 10, y: 98, desde: [224, 82], hasta: [152, 96] },
  { titulo: 'Portabrocas', nota: 'Baja con el husillo', x: 10, y: 142, desde: [194, 127], hasta: [100, 138] },
  { titulo: 'Mesa auxiliar', nota: 'De madera, con guía', x: 10, y: 188, desde: [184, 172], hasta: [108, 184] },
  { titulo: 'Poleas o variador', nota: 'Fijan la velocidad', x: 342, y: 22, desde: [306, 30], hasta: [338, 20] },
  { titulo: 'Palanca de avance', nota: 'Tres brazos', x: 342, y: 92, desde: [294, 112], hasta: [338, 90] },
  { titulo: 'Columna', nota: 'Sostiene cabezal y mesa', x: 342, y: 146, desde: [300, 146], hasta: [338, 144] },
  { titulo: 'Mesa', nota: 'Sube, gira y se inclina', x: 342, y: 196, desde: [292, 180], hasta: [338, 194] },
  { titulo: 'Base', nota: 'Atornillada', x: 342, y: 240, desde: [318, 236], hasta: [338, 238] },
]

export default function TaladroColumna() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 262" role="img" aria-label="Taladro de columna de costado: cabezal con motor y poleas, palanca de avance de tres brazos, tope de profundidad, portabrocas, columna, mesa regulable con una mesa auxiliar de madera y base">
      <rect x="160" y="228" width="160" height="16" rx="2" {...metal} />
      <rect x="288" y="36" width="12" height="192" {...metal} />
      <rect x="298" y="44" width="34" height="42" rx="6" fill="#475569" stroke="#1e293b" strokeWidth="1.2" />
      <path d="M212 22 H312 V40 H212 Z" {...metal} />
      <path d="M186 40 H310 V96 H200 Q180 96 178 80 V56 Q180 40 186 40 Z" {...cuerpo} />
      <path d="M190 50 H296" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <rect x="196" y="96" width="12" height="22" {...metal} />
      <path d="M190 118 H214 L210 136 H194 Z" fill="#475569" stroke="#1e293b" strokeWidth="1.2" />
      <rect x="200" y="136" width="4" height="30" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
      <path d="M224 66 V100" stroke="#1e293b" strokeWidth="2" />
      <rect x="219" y="78" width="10" height="5" fill="#475569" />
      {[[294, 112], [234, 116], [266, 46]].map(([x, y]) => (
        <g key={x}>
          <path d={`M264 84 L${x} ${y}`} stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <circle cx={x} cy={y} r="4.5" fill="#1e293b" />
        </g>
      ))}
      <circle cx="264" cy="84" r="6" fill="#475569" stroke="#1e293b" strokeWidth="1" />
      <rect x="172" y="176" width="118" height="8" {...metal} />
      <rect x="270" y="184" width="30" height="16" {...metal} />
      <path d="M300 192 L322 206" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      <rect x="176" y="168" width="94" height="8" {...madera} />
      <rect x="250" y="156" width="8" height="12" {...madera} />
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

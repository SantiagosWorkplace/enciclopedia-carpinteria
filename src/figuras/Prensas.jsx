// Tipos de prensa y sargento. Dibujo original y esquemático.
const metal = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1.2 }
const rojo = { fill: '#dc2626', stroke: '#7f1d1d', strokeWidth: 1.2 }
const madera = { fill: '#d9a86b', stroke: '#7a4a22', strokeWidth: 1.2 }

const prensas = [
  {
    titulo: 'Sargento', nota: 'Barra y tornillo',
    d: (
      <>
        <rect x="-4" y="10" width="8" height="110" {...metal} />
        <rect x="-4" y="10" width="44" height="12" {...metal} />
        <rect x="-4" y="80" width="44" height="12" {...metal} />
        <rect x="26" y="66" width="8" height="14" {...metal} />
        <rect x="26" y="92" width="6" height="26" {...metal} />
        <rect x="22" y="118" width="14" height="18" rx="4" {...rojo} />
      </>
    ),
  },
  {
    titulo: 'Apriete rápido', nota: 'Con una mano',
    d: (
      <>
        <rect x="-3" y="10" width="6" height="104" {...metal} />
        <rect x="-3" y="10" width="40" height="12" rx="3" {...rojo} />
        <path d="M-3 74 H37 V88 H18 L10 124 H-3 Z" {...rojo} />
        <path d="M14 92 L28 116" stroke="#1f2937" strokeWidth="5" strokeLinecap="round" />
      </>
    ),
  },
  {
    titulo: 'De barra', nota: 'O de tubo; anchos grandes',
    d: (
      <>
        <rect x="-50" y="60" width="104" height="8" {...metal} />
        <rect x="-46" y="46" width="12" height="30" {...metal} />
        <rect x="34" y="46" width="12" height="30" {...metal} />
        <rect x="46" y="58" width="16" height="12" rx="3" {...rojo} />
      </>
    ),
  },
  {
    titulo: 'De mano', nota: 'Mordazas de madera',
    d: (
      <>
        <rect x="-36" y="40" width="80" height="14" rx="3" {...madera} />
        <rect x="-36" y="80" width="80" height="14" rx="3" {...madera} />
        <rect x="-18" y="30" width="5" height="76" {...metal} />
        <rect x="16" y="30" width="5" height="76" {...metal} />
        <rect x="-22" y="104" width="13" height="16" rx="3" fill="#7a4a22" />
        <rect x="12" y="20" width="13" height="12" rx="3" fill="#7a4a22" />
      </>
    ),
  },
  {
    titulo: 'De cinta', nota: 'Marcos y cajas',
    d: (
      <>
        <rect x="-34" y="34" width="68" height="68" fill="none" stroke="#d9a86b" strokeWidth="10" />
        <rect x="-41" y="27" width="82" height="82" rx="4" fill="none" stroke="#f59e0b" strokeWidth="3" />
        <rect x="-12" y="100" width="24" height="14" rx="3" {...metal} />
      </>
    ),
  },
]

export default function Prensas() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 182" role="img" aria-label="Sargento, prensa de apriete rápido, de barra, de mano y de cinta">
      {prensas.map((p, i) => (
        <g key={p.titulo}>
          <g transform={`translate(${36 + i * 98} 4)`}>{p.d}</g>
          <text x={52 + i * 98} y="158" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <text x={52 + i * 98} y="174" textAnchor="middle" className="fig-nota">{p.nota}</text>
        </g>
      ))}
    </svg>
  )
}

// Herramientas básicas para chapear a mano. Dibujo original y esquemático.
const madera = { fill: '#c98f55', stroke: '#7a4a22', strokeWidth: 1.2 }
const acero = { fill: '#cbd5e1', stroke: '#475569', strokeWidth: 1.2 }

const dientes = Array.from({ length: 16 }, (_, i) => {
  const a = Math.PI * (0.84 - i * 0.045)
  const r1 = 46
  const r2 = 49.5
  const x1 = 80 + r1 * Math.cos(a)
  const y1 = 24 + r1 * Math.sin(a)
  const x2 = 80 + r2 * Math.cos(a - 0.02)
  const y2 = 24 + r2 * Math.sin(a - 0.02)
  return `L${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`
}).join(' ')

const paneles = [
  {
    titulo: 'Sierra de chapa', nota: 'Hoja curva de dientes finos',
    d: (
      <>
        <path d={`M36 44 ${dientes} L124 44 Z`} {...acero} />
        <rect x="64" y="10" width="32" height="22" rx="4" {...madera} />
        <path d="M80 32 V44" stroke="#475569" strokeWidth="3" />
      </>
    ),
  },
  {
    titulo: 'Cúter y bisturí', nota: 'Cortes rectos y curvos',
    d: (
      <>
        <path d="M20 46 H92 L104 52 L92 58 H20 Z" fill="#fbbf24" stroke="#92400e" strokeWidth="1.2" />
        <path d="M92 48 L120 52 L92 56 Z" {...acero} />
        <path d="M30 76 H100 L110 80 L100 84 H30 Z" fill="#64748b" stroke="#334155" strokeWidth="1" />
        <path d="M100 79 L136 78 Q128 84 100 82 Z" {...acero} />
      </>
    ),
  },
  {
    titulo: 'Martillo de chapear', nota: 'No golpea: aprieta y arrastra',
    d: (
      <>
        <rect x="50" y="30" width="60" height="22" rx="3" {...madera} />
        <rect x="48" y="52" width="64" height="5" fill="#d4a017" stroke="#92400e" strokeWidth="1" />
        <rect x="74" y="4" width="12" height="26" rx="3" {...madera} />
      </>
    ),
  },
  {
    titulo: 'Regla metálica', nota: 'Guía para la cuchilla',
    d: (
      <>
        <rect x="14" y="44" width="132" height="16" {...acero} />
        {Array.from({ length: 25 }, (_, i) => (
          <path key={i} d={`M${20 + i * 5} 44 V${i % 5 === 0 ? 52 : 48}`} stroke="#475569" strokeWidth="0.8" />
        ))}
      </>
    ),
  },
  {
    titulo: 'Cinta engomada', nota: 'Une las hojas; se humedece',
    d: (
      <>
        <circle cx="62" cy="48" r="26" fill="#d6b98a" stroke="#7a4a22" strokeWidth="1.2" />
        <circle cx="62" cy="48" r="10" fill="#fffaf2" stroke="#7a4a22" strokeWidth="1" />
        <path d="M62 74 H134 V64 H80" fill="#d6b98a" stroke="#7a4a22" strokeWidth="1" />
      </>
    ),
  },
  {
    titulo: 'Plancha', nota: 'Reactiva la cola y aplana',
    d: (
      <>
        <path d="M30 66 Q34 40 70 38 H124 V66 Z" fill="#94a3b8" stroke="#334155" strokeWidth="1.2" />
        <path d="M60 38 Q64 18 90 18 H116 V38" fill="none" stroke="#334155" strokeWidth="5" />
        <path d="M28 66 H126" stroke="#334155" strokeWidth="3" />
      </>
    ),
  },
]

export default function HerramientasChapeado() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 236" role="img" aria-label="Sierra de chapa, cúter y bisturí, martillo de chapear, regla metálica, cinta engomada y plancha">
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${(i % 3) * 160} ${Math.floor(i / 3) * 118})`}>
          {p.d}
          <text x="80" y="92" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <text x="80" y="106" textAnchor="middle" className="fig-nota">{p.nota}</text>
        </g>
      ))}
    </svg>
  )
}

// Tres formas de obtener chapa y la veta que da cada una. Dibujo original.
const MADERA = '#ecc994'
const ANILLO = '#b27b45'
const CUCHILLA = '#475569'
const corte = { stroke: '#1f2937', strokeWidth: 1.2 }

function Desenrollo() {
  return (
    <g>
      <circle cx="60" cy="68" r="40" fill={MADERA} stroke="#7a4a22" strokeWidth="1.4" />
      {[8, 16, 24, 32].map((r) => <circle key={r} cx="60" cy="68" r={r} fill="none" stroke={ANILLO} />)}
      <circle cx="60" cy="68" r="3" fill="#5b3a1e" />
      <path d="M90.9 31.2 A48 48 0 0 0 29.1 31.2" fill="none" stroke="#2563eb" strokeWidth="2" markerEnd="url(#chapa-punta)" />
      <path d="M100 64 Q108 34 154 24 L155 30 Q115 40 104 68 Z" fill="#f3d9aa" stroke="#7a4a22" strokeWidth="1" />
      <path d="M103 72 L152 96 L152 104 L99 78 Z" fill={CUCHILLA} />
    </g>
  )
}

function CortePlano() {
  return (
    <g>
      <clipPath id="chapa-plano"><path d="M10 100 A50 50 0 0 1 110 100 Z" /></clipPath>
      <path d="M10 100 A50 50 0 0 1 110 100 Z" fill={MADERA} stroke="#7a4a22" strokeWidth="1.4" />
      <g clipPath="url(#chapa-plano)">
        {[10, 20, 30, 40].map((r) => <circle key={r} cx="60" cy="100" r={r} fill="none" stroke={ANILLO} />)}
        {[1, 2, 3, 4, 5].map((k) => <line key={k} x1="0" y1={100 - k * 8} x2="120" y2={100 - k * 8} {...corte} />)}
      </g>
      <rect x="4" y="100" width="112" height="7" fill="#9ca3af" />
      <path d="M114 50 L154 50 L154 56 L120 56 Z" fill={CUCHILLA} />
      <path d="M134 64 V96" stroke="#2563eb" strokeWidth="2" markerStart="url(#chapa-punta)" markerEnd="url(#chapa-punta)" />
    </g>
  )
}

function CorteCuarto() {
  return (
    <g>
      <clipPath id="chapa-cuarto"><path d="M20 112 L20 22 A90 90 0 0 1 110 112 Z" /></clipPath>
      <path d="M20 112 L20 22 A90 90 0 0 1 110 112 Z" fill={MADERA} stroke="#7a4a22" strokeWidth="1.4" />
      <g clipPath="url(#chapa-cuarto)">
        {[15, 30, 45, 60, 75].map((r) => <circle key={r} cx="20" cy="112" r={r} fill="none" stroke={ANILLO} />)}
        {[1, 2, 3, 4, 5, 6].map((k) => <line key={k} x1={20 + k * 12} y1="0" x2={20 + k * 12} y2="120" {...corte} />)}
      </g>
      <path d="M124 40 L130 40 L130 92 L124 98 Z" fill={CUCHILLA} />
    </g>
  )
}

// Aspecto de la cara de cada chapa.
const caras = [
  Array.from({ length: 6 }, (_, k) => {
    const y = 4 + k * 7
    const a = 5 + (k % 3) * 3
    return `M0 ${y} Q20 ${y - a} 40 ${y + 2} T80 ${y} T120 ${y + 3}`
  }),
  Array.from({ length: 7 }, (_, i) => {
    const a = 12 + i * 16
    const w = 4 + i * 4.5
    return `M0 ${20 - w} Q${2 * a} 20 0 ${20 + w}`
  }),
  Array.from({ length: 12 }, (_, k) => `M0 ${2 + k * 3.3} L120 ${2.6 + k * 3.3}`),
]

const paneles = [
  { C: Desenrollo, titulo: 'a. Desenrollo', nota: 'Lámina continua · veta ancha' },
  { C: CortePlano, titulo: 'b. Corte plano', nota: 'Veta en catedral' },
  { C: CorteCuarto, titulo: 'c. Corte al cuarto', nota: 'Veta recta, rayada' },
]

export default function CortesChapa() {
  return (
    <svg viewBox="0 0 480 222" role="img" aria-label="Chapa por desenrollo, corte plano y corte al cuarto, con la veta que resulta">
      <defs>
        <marker id="chapa-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#2563eb" />
        </marker>
        <clipPath id="chapa-cara"><rect width="120" height="40" rx="3" /></clipPath>
      </defs>
      {paneles.map(({ C, titulo, nota }, i) => (
        <g key={titulo} transform={`translate(${i * 160} 0)`}>
          <C />
          <g transform="translate(20 134)">
            <g clipPath="url(#chapa-cara)">
              <rect width="120" height="40" fill="#f3d9aa" />
              {caras[i].map((d) => <path key={d} d={d} fill="none" stroke="#b07a45" strokeWidth="1.2" />)}
            </g>
            <rect width="120" height="40" rx="3" fill="none" stroke="#7a4a22" />
          </g>
          <g className="fig-leyenda">
            <text x="80" y="196" textAnchor="middle" className="fig-titulo">{titulo}</text>
            <text x="80" y="212" textAnchor="middle" className="fig-nota">{nota}</text>
          </g>
        </g>
      ))}
    </svg>
  )
}

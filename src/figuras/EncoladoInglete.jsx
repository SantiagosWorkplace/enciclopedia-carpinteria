// Encolado de un marco a inglete, visto desde arriba: la prensa de cinta con
// sus esquineros y la comprobación de las diagonales. Dibujo original.
const tonos = ['#e9c88f', '#d6a265']
const W = 14

function Marco({ x0, y0, x1, y1 }) {
  const e = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]
  const i = [[x0 + W, y0 + W], [x1 - W, y0 + W], [x1 - W, y1 - W], [x0 + W, y1 - W]]
  return [0, 1, 2, 3].map((k) => {
    const n = (k + 1) % 4
    return <polygon key={k} points={[e[k], e[n], i[n], i[k]].map((q) => q.join(',')).join(' ')} fill={tonos[k % 2]} stroke="#7a4a22" strokeWidth="1.1" strokeLinejoin="round" />
  })
}

function Cinta() {
  const esq = [[44, 16, 1, 1], [196, 16, -1, 1], [196, 128, -1, -1], [44, 128, 1, -1]]
  return (
    <>
      <Marco x0={50} y0={22} x1={190} y1={122} />
      <rect x="38" y="10" width="164" height="124" rx="4" fill="none" stroke="#1e3a8a" strokeWidth="3" />
      {esq.map(([x, y, sx, sy]) => (
        <path key={`${x}-${y}`} d={`M${x - 6 * sx} ${y + 22 * sy} V${y - 6 * sy} H${x + 22 * sx}`} fill="none" stroke="#f97316" strokeWidth="6" strokeLinejoin="round" />
      ))}
      <rect x="104" y="126" width="32" height="16" rx="3" fill="#334155" />
      <path d="M112 134 H128" stroke="#94a3b8" strokeWidth="2" />
    </>
  )
}

function Diagonales() {
  return (
    <>
      <Marco x0={50} y0={22} x1={190} y1={122} />
      <path d="M50 22 L190 122 M190 22 L50 122" stroke="#1d4ed8" strokeWidth="1.4" strokeDasharray="5 3" />
      <text x="96" y="58" textAnchor="middle" className="fig-titulo" style={{ fill: '#1d4ed8' }}>A</text>
      <text x="144" y="58" textAnchor="middle" className="fig-titulo" style={{ fill: '#1d4ed8' }}>B</text>
    </>
  )
}

const paneles = [
  { titulo: 'Prensa de cinta', nota: 'Esquineros reparten la presión', C: Cinta },
  { titulo: 'Diagonales: A = B', nota: 'Si difieren, el marco está descuadrado', C: Diagonales },
]

export default function EncoladoInglete() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 186" role="img" aria-label="Marco a inglete visto desde arriba. A la izquierda, apretado con una prensa de cinta que rodea el marco, con un esquinero en cada esquina y la hebilla de tensar. A la derecha, las dos diagonales A y B, que deben medir lo mismo">
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${i * 240} 0)`}>
          <C />
          <text x="120" y="162" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="120" y="177" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

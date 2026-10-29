// Cómo colorean la madera un tinte y un pigmento, en sección, y las manchas
// de un pino teñido, de planta. Dibujo original; los tamaños están exagerados.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const poros = [20, 50, 80, 110]
const conPoros = 'M0 110 V50 ' + poros.map((x) => `H${x - 4} V62 H${x + 4} V50`).join(' ') + ' H140 V110 Z'

function Tinte() {
  return (
    <>
      <path d={conPoros} {...madera} />
      <path d={conPoros} fill="url(#pt-tinte)" />
    </>
  )
}

function Pigmento() {
  const puntos = []
  for (let x = 2; x < 140; x += 4) puntos.push([x, 48.5])
  poros.forEach((p) => {
    for (let y = 53; y < 62; y += 3) puntos.push([p - 2, y], [p + 2, y])
  })
  return (
    <>
      <path d={conPoros} {...madera} />
      {puntos.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill="#7c2d12" />)}
    </>
  )
}

function Manchas() {
  return (
    <>
      <rect x="0" y="20" width="140" height="90" fill="#c98a4e" stroke="#7a4a22" strokeWidth="1.2" />
      {[30, 46, 70, 88].map((y) => <path key={y} d={`M0 ${y} C40 ${y - 6} 90 ${y + 6} 140 ${y}`} stroke="#9a5a26" strokeWidth="4" fill="none" />)}
      <ellipse cx="38" cy="58" rx="22" ry="12" fill="#5a2e12" opacity="0.55" />
      <ellipse cx="104" cy="88" rx="18" ry="9" fill="#5a2e12" opacity="0.5" />
      <ellipse cx="96" cy="40" rx="10" ry="6" fill="#5a2e12" opacity="0.4" />
    </>
  )
}

const paneles = [
  { titulo: 'Tinte', nota: 'El color entra en la fibra', C: Tinte },
  { titulo: 'Pigmento', nota: 'Partículas en la superficie', C: Pigmento },
  { titulo: 'Manchas en pino', nota: 'Absorbe desparejo', C: Manchas },
]

export default function PenetracionTinte() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 158" role="img" aria-label="Tinte que penetra en la madera, pigmento que queda en la superficie y manchas de un pino teñido">
      <defs>
        <linearGradient id="pt-tinte" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.05" stopColor="#7c2d12" stopOpacity="0.75" />
          <stop offset="0.3" stopColor="#7c2d12" stopOpacity="0" />
        </linearGradient>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${10 + i * 160} 0)`}>
          <C />
          <text x="70" y="134" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="70" y="149" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

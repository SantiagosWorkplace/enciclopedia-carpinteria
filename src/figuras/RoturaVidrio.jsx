// Cómo se rompe cada tipo de vidrio. Dibujo original y esquemático.
const panel = { x: 10, y: 16, width: 120, height: 96, rx: 2 }
const grieta = { fill: 'none', stroke: '#1e3a8a', strokeWidth: 1.1, strokeLinejoin: 'round' }

// Variación fija, para que el dibujo sea siempre el mismo.
const ruido = (i, j) => {
  const s = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453
  return s - Math.floor(s) - 0.5
}

function Comun() {
  const centro = [62, 62]
  const bordes = [[10, 30], [40, 16], [95, 16], [130, 45], [130, 95], [85, 112], [30, 112], [10, 80]]
  return (
    <>
      <path d="M62 62 L95 16 L130 16 L130 45 Z" fill="#fff" stroke="none" />
      {bordes.map(([x, y]) => <path key={`${x}-${y}`} d={`M${centro[0]} ${centro[1]} L${x} ${y}`} {...grieta} />)}
      <path d="M36 44 L50 30 M96 70 L104 96 M44 84 L58 98" {...grieta} />
    </>
  )
}

function Templado() {
  const lineas = []
  for (let j = 1; j < 12; j++) {
    let d = `M10 ${16 + j * 8}`
    for (let i = 1; i <= 15; i++) d += ` L${10 + i * 8} ${16 + j * 8 + ruido(i, j) * 3}`
    lineas.push(d)
  }
  for (let i = 1; i < 15; i++) {
    let d = `M${10 + i * 8} 16`
    for (let j = 1; j <= 12; j++) d += ` L${10 + i * 8 + ruido(j, i + 40) * 3} ${16 + j * 8}`
    lineas.push(d)
  }
  return lineas.map((d, k) => <path key={k} d={d} {...grieta} strokeWidth="0.7" />)
}

function Laminado() {
  const [cx, cy] = [70, 64]
  const rayos = Array.from({ length: 10 }, (_, k) => (k * Math.PI) / 5 + 0.2)
  const poligono = (r) => rayos.map((a, k) => `${k ? 'L' : 'M'}${(cx + Math.cos(a) * r * (1 + ruido(k, r) * 0.3)).toFixed(1)} ${(cy + Math.sin(a) * r * (1 + ruido(r, k) * 0.3)).toFixed(1)}`).join(' ') + ' Z'
  return (
    <>
      {rayos.map((a) => <path key={a} d={`M${cx} ${cy} L${(cx + Math.cos(a) * 90).toFixed(1)} ${(cy + Math.sin(a) * 90).toFixed(1)}`} {...grieta} />)}
      {[12, 26, 42].map((r) => <path key={r} d={poligono(r)} {...grieta} />)}
    </>
  )
}

const paneles = [
  { titulo: 'Común', nota: 'Rompe en cuchillas', C: Comun },
  { titulo: 'Templado', nota: 'Se deshace en granitos', C: Templado },
  { titulo: 'Laminado', nota: 'Queda unido a la lámina', C: Laminado },
]

export default function RoturaVidrio() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Cómo se rompe el vidrio: el común en trozos largos y cortantes, el templado en granitos pequeños y el laminado en una telaraña que queda pegada a la lámina interior">
      <defs>
        <clipPath id="rv-clip">
          <rect {...panel} />
        </clipPath>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${10 + i * 160} 0)`}>
          <rect {...panel} fill="#dbeafe" />
          <g clipPath="url(#rv-clip)">
            <C />
          </g>
          <rect {...panel} fill="none" stroke="#3b82f6" strokeWidth="1.6" />
          <text x="70" y="134" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="70" y="149" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

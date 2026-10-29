// Tres composiciones de parquetería: damero, cubos y punta de Hungría.
// Dibujo original; cada tono representa una especie o una dirección de veta.
const tonos = ['#e9c88f', '#b9763c', '#7a4a22']
const borde = { stroke: '#4a2a12', strokeWidth: 0.6 }
const L = 120

function Damero() {
  const n = 6
  const c = L / n
  const piezas = []
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      const x = i * c
      const y = j * c
      const par = (i + j) % 2 === 0
      piezas.push(
        <g key={`${i}-${j}`}>
          <rect x={x} y={y} width={c} height={c} fill={par ? tonos[0] : tonos[1]} {...borde} />
          {[0.25, 0.5, 0.75].map((f) => (
            <path key={f} d={par ? `M${x + 1} ${y + c * f} H${x + c - 1}` : `M${x + c * f} ${y + 1} V${y + c - 1}`} stroke={par ? '#c9a06a' : '#8a5025'} strokeWidth="0.6" />
          ))}
        </g>,
      )
    }
  return piezas
}

function Cubos() {
  const s = 16
  const w = s * Math.sqrt(3)
  const v = (cx, cy, a) => [cx + s * Math.cos((a * Math.PI) / 180), cy - s * Math.sin((a * Math.PI) / 180)]
  const poly = (pts) => pts.map((p) => p.map((n) => n.toFixed(2)).join(' ')).join(' L')
  const piezas = []
  for (let fila = -1; fila < 7; fila++)
    for (let col = -1; col < 6; col++) {
      const cx = col * w + (fila % 2 ? w / 2 : 0)
      const cy = fila * s * 1.5
      const c = [cx, cy]
      const caras = [
        [c, v(cx, cy, 150), v(cx, cy, 90), v(cx, cy, 30)],
        [c, v(cx, cy, 150), v(cx, cy, 210), v(cx, cy, 270)],
        [c, v(cx, cy, 270), v(cx, cy, 330), v(cx, cy, 30)],
      ]
      caras.forEach((pts, k) => piezas.push(<path key={`${fila}-${col}-${k}`} d={`M${poly(pts)} Z`} fill={tonos[k]} {...borde} />))
    }
  return piezas
}

function Hungria() {
  const a = 20
  const h = 14
  const piezas = []
  for (let col = 0; col < 6; col++)
    for (let fila = -2; fila < 10; fila++) {
      const x = col * a
      const y = fila * h
      const sube = col % 2 === 0
      const d = sube
        ? `M${x} ${y + 10} L${x + a} ${y} V${y + h} L${x} ${y + 10 + h} Z`
        : `M${x} ${y} L${x + a} ${y + 10} V${y + 10 + h} L${x} ${y + h} Z`
      piezas.push(<path key={`${col}-${fila}`} d={d} fill={fila % 2 ? tonos[0] : tonos[1]} {...borde} />)
    }
  return piezas
}

const paneles = [
  { titulo: 'Damero', nota: 'Veta alternada a 90°', C: Damero },
  { titulo: 'Cubos', nota: 'Rombos de tres tonos', C: Cubos },
  { titulo: 'Punta de Hungría', nota: 'Extremos en ángulo', C: Hungria },
]

export default function Parqueteria() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 176" role="img" aria-label="Composiciones de parquetería: damero, cubos y punta de Hungría">
      <defs>
        <clipPath id="pq-cuadro"><rect width={L} height={L} /></clipPath>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${20 + i * 160} 6)`}>
          <g clipPath="url(#pq-cuadro)"><C /></g>
          <rect width={L} height={L} fill="none" stroke="#4a2a12" strokeWidth="1.2" />
          <text x={L / 2} y={L + 22} textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x={L / 2} y={L + 37} textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

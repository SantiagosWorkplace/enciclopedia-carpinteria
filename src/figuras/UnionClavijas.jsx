// Unión de canto con clavijas, en perspectiva y separada. Tablas de 20 mm,
// clavijas de 8 × 40 mm cada 12 cm y a 4 cm de los extremos: dos ya encoladas
// en la tabla de atrás y la tercera fuera de su agujero. Dibujo original a escala.
import { proyeccion, caja, Solido, MADERA_OSCURA, puntos } from './iso.jsx'

const p = proyeccion(190, 40, 0.7)
const G = 70

const tablaB = caja([0, 0, 0], [320, 20, 70], 'x')
const tablaA = caja([0, 0, 70 + G], [320, 20, 70], 'x')

const circulo = (cx, cy, z, r) => Array.from({ length: 24 }, (_, k) => {
  const a = (k / 24) * 2 * Math.PI
  return [cx + r * Math.cos(a), cy + r * Math.sin(a), z]
})

// Silueta de la clavija: envolvente convexa de sus dos extremos proyectados.
function envolvente(pts) {
  const q = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const giro = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
  const mitad = (lista) => lista.reduce((h, v) => {
    while (h.length >= 2 && giro(h[h.length - 2], h[h.length - 1], v) <= 0) h.pop()
    h.push(v)
    return h
  }, [])
  const abajo = mitad(q)
  const arriba = mitad([...q].reverse())
  return [...abajo.slice(0, -1), ...arriba.slice(0, -1)]
}

function Clavija({ x, z0, z1 }) {
  const pts = [...circulo(x, 10, z0, 4), ...circulo(x, 10, z1, 4)].map(p)
  return (
    <>
      <polygon points={envolvente(pts).map((v) => v.join(',')).join(' ')} fill="#f1dcb4" stroke="#7a4a22" strokeWidth="1" />
      <polyline points={puntos(p, [[x - 1.5, 13.7, z0], [x - 1.5, 13.7, z1]])} fill="none" stroke="#b98a52" strokeWidth="0.8" />
      <polyline points={puntos(p, [[x + 2, 13.4, z0], [x + 2, 13.4, z1]])} fill="none" stroke="#b98a52" strokeWidth="0.8" />
      <polygon points={puntos(p, circulo(x, 10, z1, 4))} fill="#d9b98a" stroke="#7a4a22" strokeWidth="0.8" />
    </>
  )
}

function Cota({ a, b, texto }) {
  const z = -14
  const [x1, y1] = p([a, 20, z])
  const [x2, y2] = p([b, 20, z])
  const [tx, ty] = p([(a + b) / 2, 20, z])
  return (
    <g>
      <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke="#1d4ed8" strokeWidth="1" />
      {[a, b].map((v) => <polyline key={v} points={puntos(p, [[v, 20, z - 5], [v, 20, -2]])} fill="none" stroke="#1d4ed8" strokeWidth="1" />)}
      <text x={tx + 6} y={ty - 6} className="fig-nota" style={{ fill: '#1d4ed8' }}>{texto}</text>
    </g>
  )
}

const etiquetas = [
  { titulo: 'Agujero', nota: '1 – 2 mm más hondo', x: 352, y: 190, en: [280, 10, 70] },
  { titulo: 'Clavija', nota: '8 × 40 mm, estriada', x: 352, y: 232, en: [280, 8, 104] },
]

export default function UnionClavijas() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 254" role="img" aria-label="Unión de canto con clavijas en perspectiva: dos tablas separadas; en el canto de una, dos clavijas encoladas y un agujero con la tercera clavija delante. La primera clavija va a 4 cm del extremo y la separación entre clavijas es de 12 cm">
      <Solido p={p} caras={tablaB} />
      <polygon points={puntos(p, circulo(280, 10, 70, 4))} fill="#5b3416" />
      <Cota a={0} b={40} texto="3 – 5 cm" />
      <Cota a={40} b={160} texto="10 – 15 cm" />
      <Clavija x={40} z0={70} z1={90} />
      <Clavija x={160} z0={70} z1={90} />
      <Clavija x={280} z0={84} z1={124} />
      <Solido p={p} caras={tablaA} tonos={MADERA_OSCURA} />
      {etiquetas.map(({ titulo, nota, x, y, en }) => {
        const [ax, ay] = p(en)
        return (
          <g key={titulo}>
            <path d={`M${ax} ${ay} L${x - 4} ${y - 4}`} stroke="#64748b" strokeWidth="1" />
            <circle cx={ax} cy={ay} r="2" fill="#64748b" />
            <text x={x} y={y} className="fig-titulo">{titulo}</text>
            <text x={x} y={y + 15} className="fig-nota">{nota}</text>
          </g>
        )
      })}
    </svg>
  )
}

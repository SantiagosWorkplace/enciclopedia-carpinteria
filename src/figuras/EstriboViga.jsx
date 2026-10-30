// Estribo metálico: una vigueta llega de costado a una viga y apoya en un
// estribo clavado a la cara de la viga, sin cajear. Dibujo original, en perspectiva.
import { proyeccion, caja, Solido, MADERA_OSCURA, puntos } from './iso.jsx'

const p = proyeccion(150, 132, 0.6)
const ACERO = { y: '#e2e8f0', z: '#cbd5e1', x: '#94a3b8', testa: '#94a3b8' }

// Viga de 70 × 200 mm y vigueta de 45 × 170 mm, a ras por arriba.
const viga = caja([0, 0, 0], [260, 200, 70], 'x')
const vigueta = caja([100, 30, 72], [45, 170, 160], 'z')
const alas = [caja([70, 40, 70], [30, 130, 2]), caja([147, 40, 70], [30, 130, 2])]
const izquierda = caja([98, 28, 72], [2, 132, 70])
const derecha = caja([145, 28, 72], [2, 132, 70])
const fondo = caja([98, 28, 72], [49, 2, 70])

const clavosAla = [[80, 60], [90, 90], [80, 120], [90, 150], [155, 60], [165, 90], [155, 120], [165, 150]]
const clavosLado = [[60, 100], [100, 120], [140, 100]]

const etiquetas = [
  { titulo: 'Viga', nota: 'Recibe la carga', x: 305, y: 40, en: [260, 160, 35] },
  { titulo: 'Estribo', nota: 'Acero galvanizado', x: 305, y: 100, en: [168, 132, 72] },
  { titulo: 'Clavos', nota: 'Los que indica el fabricante', x: 305, y: 160, en: [147, 100, 120] },
  { titulo: 'Vigueta', nota: 'Sin cajear', x: 8, y: 150, en: [122, 120, 232] },
]

export default function EstriboViga() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 242" role="img" aria-label="Estribo metálico en perspectiva: la vigueta llega de costado a la viga y apoya en un estribo de acero en forma de U, clavado a la cara de la viga por sus alas y a los costados de la vigueta">
      <Solido p={p} caras={viga} />
      <Solido p={p} caras={[...alas[0], ...alas[1]]} tonos={ACERO} />
      {clavosAla.map(([x, y]) => {
        const [cx, cy] = p([x, y, 72])
        return <circle key={`${x}-${y}`} cx={cx} cy={cy} r="1.8" fill="#475569" />
      })}
      <Solido p={p} caras={izquierda} tonos={ACERO} />
      <Solido p={p} caras={fondo} tonos={ACERO} />
      <Solido p={p} caras={vigueta} tonos={MADERA_OSCURA} />
      <Solido p={p} caras={derecha} tonos={ACERO} />
      {clavosLado.map(([y, z]) => {
        const [cx, cy] = p([147, y, z])
        return <circle key={`${y}-${z}`} cx={cx} cy={cy} r="1.8" fill="#475569" />
      })}
      <polyline points={puntos(p, [[145, 160, 72], [145, 160, 142]])} fill="none" stroke="#64748b" strokeWidth="1" />
      {etiquetas.map(({ titulo, nota, x, y, en }) => {
        const [ax, ay] = p(en)
        const bx = x < 240 ? x + Math.max(titulo.length * 7.2, nota.length * 5.4) + 4 : x - 4
        return (
          <g key={titulo}>
            <path d={`M${ax} ${ay} L${bx} ${y - 4}`} stroke="#64748b" strokeWidth="1" />
            <circle cx={ax} cy={ay} r="2" fill="#64748b" />
            <text x={x} y={y} className="fig-titulo">{titulo}</text>
            <text x={x} y={y + 15} className="fig-nota">{nota}</text>
          </g>
        )
      })}
    </svg>
  )
}

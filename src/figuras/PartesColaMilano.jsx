// Cola de milano pasante en perspectiva, con la pieza de colas levantada para
// mostrar las espigas. Tablas de 120 × 18 mm, pendiente 1:6. Dibujo original.
import { proyeccion, caja, prisma, Solido, MADERA_OSCURA, puntos } from './iso.jsx'

const p = proyeccion(152, 171, 1.05)
const T = 18
const E = 50
const H = 60

// Espigas vistas en la testa: angostas afuera (z = T) y anchas adentro (z = 0).
const espigas = [
  [[0, T], [4, T], [7, 0], [0, 0]],
  [[36, T], [44, T], [47, 0], [33, 0]],
  [[76, T], [84, T], [87, 0], [73, 0]],
  [[116, T], [120, T], [120, 0], [113, 0]],
]
const piezaEspigas = [
  ...caja([0, 0, 0], [120, H - T, T], 'y'),
  ...espigas.flatMap((c) => prisma(c, 'y', H - T, H, 'y')),
]

// Pieza de colas, hacia atrás: las colas llenan los huecos entre espigas.
const contornoColas = [
  [0, 0], [7, 0], [4, T], [36, T], [33, 0], [47, 0], [44, T], [76, T], [73, 0],
  [87, 0], [84, T], [116, T], [113, 0], [120, 0], [120, -82], [0, -82],
]
const piezaColas = prisma(contornoColas, 'y', H - T + E, H + E, 'z')

const etiquetas = [
  { titulo: 'Colas', nota: 'Más anchas en el extremo', x: 20, y: 44, en: [60, H + E, 12] },
  { titulo: 'Línea base', nota: 'Al espesor de la otra pieza', x: 334, y: 40, en: [100, H + E, 0] },
  { titulo: 'Espigas', nota: 'Se ven en la testa', x: 20, y: 150, en: [40, H, 9] },
  { titulo: 'Media espiga', nota: 'Cierra el borde', x: 334, y: 190, en: [118, H, 9] },
]

export default function PartesColaMilano() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 256" role="img" aria-label="Cola de milano pasante en perspectiva: la pieza de colas levantada sobre la de espigas, con las colas, las espigas, las medias espigas de los bordes y la línea base">
      <Solido p={p} caras={piezaEspigas} tonos={MADERA_OSCURA} />
      <path d={`M${p([0, H - T, T]).join(' ')} L${p([120, H - T, T]).join(' ')}`} stroke="#1d4ed8" strokeWidth="1.2" strokeDasharray="4 3" />
      <Solido p={p} caras={piezaColas} />
      <polyline points={puntos(p, [[0, H + E, 0], [120, H + E, 0]])} fill="none" stroke="#1d4ed8" strokeWidth="1.2" strokeDasharray="4 3" />
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

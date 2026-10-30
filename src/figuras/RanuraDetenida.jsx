// Ranura detenida en perspectiva: un lateral de 18 mm con la ranura y el
// estante separado, con su recorte en la esquina delantera. Dibujo original.
import { proyeccion, caja, prisma, Solido, MADERA_OSCURA, puntos } from './iso.jsx'

const p = proyeccion(226, 150, 1.05)

// Lateral: 18 mm de espesor, ranura de 18 × 6 mm que se detiene a 15 mm del canto.
const lateral = caja([0, 0, 0], [18, 150, 100], 'y')
const boca = [[18, 70, 0], [18, 70, 85], [18, 88, 85], [18, 88, 0]]
const fondo = [[12, 70, 0], [12, 70, 85], [12, 88, 85], [12, 88, 0]]
const piso = [[12, 70, 0], [18, 70, 0], [18, 70, 85], [12, 70, 85]]

// Estante separado 40 mm, con el recorte de 6 × 15 mm en la esquina delantera.
const D = 40
const estante = prisma(
  [[12 + D, 0], [132 + D, 0], [132 + D, 100], [18 + D, 100], [18 + D, 85], [12 + D, 85]],
  'y', 70, 88, 'x',
)

const etiquetas = [
  { titulo: 'Ranura', nota: '≈ 1/3 del espesor de fondo', x: 320, y: 24, en: [15, 79, 30] },
  { titulo: 'Se detiene', nota: 'Antes del canto', x: 10, y: 40, en: [18, 79, 92] },
  { titulo: 'Recorte', nota: 'Tapa el final de la ranura', x: 10, y: 226, en: [15 + D, 79, 92] },
]

export default function RanuraDetenida() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 250" role="img" aria-label="Ranura detenida en perspectiva: el lateral con una ranura que no llega al canto delantero y el estante separado, con un recorte en la esquina delantera que tapa el final de la ranura">
      <defs>
        <clipPath id="rd-boca"><polygon points={puntos(p, boca)} /></clipPath>
      </defs>
      <Solido p={p} caras={lateral} />
      <g clipPath="url(#rd-boca)">
        <polygon points={puntos(p, fondo)} fill="#b98a52" />
        <polygon points={puntos(p, piso)} fill="#9c6a35" />
      </g>
      <polygon points={puntos(p, boca)} fill="none" stroke="#7a4a22" strokeWidth="1" />
      <Solido p={p} caras={estante} tonos={MADERA_OSCURA} />
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

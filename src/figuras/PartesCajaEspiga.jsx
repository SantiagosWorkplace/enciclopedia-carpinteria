// Caja y espiga en perspectiva, con el travesaño separado de la pata para
// mostrar las partes. Dibujo original.
import { proyeccion, caja, Solido, MADERA_OSCURA, puntos } from './iso.jsx'

const p = proyeccion(236, 168)

// Pata de 40 × 40 mm con la caja en la cara delantera.
const pata = caja([0, 0, 0], [40, 150, 40], 'y')
const boca = [[16, 60, 40], [24, 60, 40], [24, 110, 40], [16, 110, 40]]
const fondo = [[16, 60, 10], [24, 60, 10], [24, 110, 10], [16, 110, 10]]
const pared = [[16, 60, 40], [16, 110, 40], [16, 110, 10], [16, 60, 10]]
const piso = [[16, 60, 40], [24, 60, 40], [24, 60, 10], [16, 60, 10]]

// Travesaño de 24 × 70 mm, separado hacia adelante, con la espiga de 8 × 50 × 28 mm.
const G = 52
const travesano = caja([8, 50, 40 + G + 28], [24, 70, 82], 'z')
const espiga = caja([16, 60, 40 + G], [8, 50, 28], 'z')

const etiquetas = [
  { titulo: 'Cuerno', nota: 'Se corta después de encolar', x: 300, y: 30, en: [40, 140, 20] },
  { titulo: 'Caja', nota: 'Paredes largas a la veta', x: 300, y: 98, en: [20, 96, 40] },
  { titulo: 'Mejilla', nota: 'Encola contra la pared', x: 20, y: 96, en: [24, 92, 102] },
  { titulo: 'Espiga', nota: '≈ 1/3 del espesor', x: 20, y: 40, en: [20, 110, 98] },
  { titulo: 'Hombro', nota: 'Apoya contra la pata', x: 20, y: 236, en: [32, 66, 120] },
]

export default function PartesCajaEspiga() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 260" role="img" aria-label="Caja y espiga en perspectiva: la pata con la caja abierta en su cara y el cuerno arriba, y el travesaño separado con la espiga, sus mejillas y los hombros">
      <defs>
        <clipPath id="pce-boca"><polygon points={puntos(p, boca)} /></clipPath>
      </defs>
      <Solido p={p} caras={pata} />
      <g clipPath="url(#pce-boca)">
        <polygon points={puntos(p, fondo)} fill="#7c4f24" />
        <polygon points={puntos(p, pared)} fill="#9c6a35" />
        <polygon points={puntos(p, piso)} fill="#b98a52" />
      </g>
      <polygon points={puntos(p, boca)} fill="none" stroke="#7a4a22" strokeWidth="1" />
      <path d={`M${p([20, 110, 40 + G]).join(' ')} L${p([20, 110, 44]).join(' ')}`} stroke="#15803d" strokeWidth="1.4" strokeDasharray="4 3" />
      <Solido p={p} caras={[...travesano, ...espiga]} tonos={MADERA_OSCURA} />
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


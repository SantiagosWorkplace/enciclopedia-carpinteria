// Tres testas de madera según cómo se comportan al tallar. Dibujo original.
import { pt } from './arcos.js'

const L = 120
const cx = -40
const cy = 170
const radios = (paso) => Array.from({ length: Math.ceil(260 / paso) }, (_, i) => 30 + i * paso)

function Fino() {
  return (
    <>
      <rect width={L} height={L} fill="#efd9b0" />
      {radios(7).map((r) => <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#d6b985" strokeWidth="0.7" />)}
    </>
  )
}

function Anillos() {
  return (
    <>
      <rect width={L} height={L} fill="#f3dcab" />
      {radios(14).map((r) => <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#b9763c" strokeWidth="4.5" />)}
    </>
  )
}

function Poro() {
  const poros = []
  radios(16).forEach((r) => {
    const paso = (5 / r) * (180 / Math.PI)
    for (let a = 0; a <= 90; a += paso) {
      const [x, y] = pt(cx, cy, r - 4, a)
      if (x > -2 && x < L + 2 && y > -2 && y < L + 2) poros.push(<circle key={`${r}-${a}`} cx={x} cy={y} r="1.3" fill="#5a3418" />)
    }
  })
  return (
    <>
      <rect width={L} height={L} fill="#d9b27a" />
      {radios(16).map((r) => <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#8a5a2e" strokeWidth="1.6" />)}
      {poros}
    </>
  )
}

const paneles = [
  { titulo: 'Grano fino', nota: 'Tilo, nogal, cerezo', nota2: 'Corte limpio y parejo', C: Fino },
  { titulo: 'Anillos marcados', nota: 'Pinos resinosos', nota2: 'Duro y blando alternados', C: Anillos },
  { titulo: 'Poro abierto', nota: 'Roble, fresno', nota2: 'Pide detalles grandes', C: Poro },
]

export default function GranoTalla() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 184" role="img" aria-label="Testas de madera de grano fino, de anillos marcados y de poro abierto">
      <defs>
        <clipPath id="gt-cuadro"><rect width={L} height={L} /></clipPath>
      </defs>
      {paneles.map(({ titulo, nota, nota2, C }, i) => (
        <g key={titulo} transform={`translate(${20 + i * 160} 6)`}>
          <g clipPath="url(#gt-cuadro)"><C /></g>
          <rect width={L} height={L} fill="none" stroke="#4a2a12" strokeWidth="1.2" />
          <text x={L / 2} y={L + 22} textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x={L / 2} y={L + 37} textAnchor="middle" className="fig-nota">{nota}</text>
          <text x={L / 2} y={L + 51} textAnchor="middle" className="fig-nota">{nota2}</text>
        </g>
      ))}
    </svg>
  )
}

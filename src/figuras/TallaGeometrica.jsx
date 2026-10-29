// Talla geométrica: una muesca triangular de planta y en sección, y una roseta
// de seis pétalos. Dibujo original; cada faceta se ve de otro tono según la luz.
import { pt } from './arcos.js'

const borde = { stroke: '#5a3418', strokeWidth: 0.8, strokeLinejoin: 'round' }

function Muesca() {
  const g = [80, 76]
  const a = [80, 12.5]
  const b = [25, 108.3]
  const c = [135, 108.3]
  const tri = (p, q, color) => <path d={`M${g} L${p} L${q} Z`} fill={color} {...borde} />
  return (
    <>
      <rect x="10" y="4" width="140" height="114" fill="#f0d9ad" stroke="#7a4a22" strokeWidth="1" />
      {tri(a, b, '#c9955a')}
      {tri(a, c, '#e3b97c')}
      {tri(b, c, '#8a5a2e')}
    </>
  )
}

function Seccion() {
  return (
    <>
      <path d="M10 40 H20 L60 58 L140 40 H150 V100 H10 Z" fill="#e9c88f" stroke="#7a4a22" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M20 40 L60 58 L140 40" fill="none" stroke="#5a3418" strokeWidth="1.6" strokeLinejoin="round" />
      <text x="20" y="32" textAnchor="middle" className="fig-nota">lado</text>
      <text x="140" y="32" textAnchor="middle" className="fig-nota">vértice</text>
      <text x="60" y="76" textAnchor="middle" className="fig-nota">centro</text>
    </>
  )
}

// Arco corto de radio r con centro en o, entre p y q.
function arcoEntre(o, p, q, r) {
  const cruz = (p[0] - o[0]) * (q[1] - o[1]) - (p[1] - o[1]) * (q[0] - o[0])
  return `A${r} ${r} 0 0 ${cruz > 0 ? 1 : 0} ${q[0]} ${q[1]}`
}

function Roseta() {
  const o = [80, 62]
  const R = 50
  const c = Array.from({ length: 6 }, (_, i) => pt(o[0], o[1], R, 90 + i * 60))
  const mitades = []
  c.forEach((ck, i) => {
    const sig = c[(i + 1) % 6]
    const ant = c[(i + 5) % 6]
    mitades.push(<path key={`a${i}`} d={`M${o} L${ck} ${arcoEntre(sig, ck, o, R)} Z`} fill="#b9763c" {...borde} />)
    mitades.push(<path key={`b${i}`} d={`M${o} L${ck} ${arcoEntre(ant, ck, o, R)} Z`} fill="#7a4a22" {...borde} />)
  })
  return (
    <>
      <circle cx={o[0]} cy={o[1]} r={R + 6} fill="#f0d9ad" stroke="#7a4a22" strokeWidth="1" />
      <circle cx={o[0]} cy={o[1]} r={R} fill="none" stroke="#9a6234" strokeWidth="0.8" />
      {mitades}
    </>
  )
}

const paneles = [
  { titulo: 'Muesca triangular', nota: 'Tres facetas hacia el centro', C: Muesca },
  { titulo: 'Sección', nota: 'Lo más hondo, en el centro', C: Seccion },
  { titulo: 'Roseta', nota: 'Pétalos trazados con compás', C: Roseta },
]

export default function TallaGeometrica() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 164" role="img" aria-label="Talla geométrica: muesca triangular de planta y en sección, y roseta de seis pétalos">
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${i * 160} 0)`}>
          <C />
          <text x="80" y="140" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="80" y="155" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

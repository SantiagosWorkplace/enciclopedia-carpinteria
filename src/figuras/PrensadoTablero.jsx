// Tablero de cuatro tablas encolado por los cantos, en perspectiva, con las
// prensas alternadas arriba y abajo y el orden de apriete. Dibujo original.
import { proyeccion, caja, Solido, puntos } from './iso.jsx'

const p = proyeccion(150, 40, 0.8)
const L = 300
const T = 20
const A = 180
const BARRA = { y: '#cbd5e1', z: '#94a3b8', x: '#64748b', testa: '#64748b' }
const MORDAZA = { y: '#64748b', z: '#475569', x: '#334155', testa: '#334155' }

// Cada prensa: barra de 6 × 8 mm y dos mordazas que abrazan los cantos.
function prensa(x, arriba) {
  const yb = arriba ? T + 6 : -14
  const y0 = arriba ? 4 : -14
  const y1 = arriba ? T + 14 : T - 4
  return {
    barra: caja([x - 3, yb, -14], [6, 8, A + 28], 'z'),
    atras: caja([x - 6, y0, -14], [12, y1 - y0, 12], 'z'),
    adelante: caja([x - 6, y0, A + 2], [12, y1 - y0, 12], 'z'),
  }
}
const centro = prensa(150, true)
const izq = prensa(36, false)
const der = prensa(264, false)

const tablero = caja([0, 0, 0], [L, T, A], 'x')
const juntas = [45, 90, 135]

export default function PrensadoTablero() {
  const orden = [[150, T + 14, A + 8, 1], [36, -14, A + 8, 2], [264, -14, A + 8, 3]]
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 262" role="img" aria-label="Tablero de cuatro tablas encolado por los cantos, en perspectiva. Tres prensas de barra: la del centro, arriba, se aprieta primero; las de los extremos van abajo. En la testa, los anillos de las tablas alternan su orientación, y a lo largo de cada junta sale un cordón de gotas de cola">
      <Solido p={p} caras={[...izq.barra, ...der.barra]} tonos={BARRA} />
      <Solido p={p} caras={[...izq.atras, ...der.atras, ...centro.atras]} tonos={MORDAZA} />
      <Solido p={p} caras={tablero} />
      {juntas.map((z) => (
        <g key={z}>
          <polyline points={puntos(p, [[0, T, z], [L, T, z], [L, 0, z]])} fill="none" stroke="#7a4a22" strokeWidth="1" />
          {Array.from({ length: 14 }, (_, k) => {
            const [cx, cy] = p([12 + k * 21, T, z])
            return <circle key={k} cx={cx} cy={cy} r="1.6" fill="#fef3c7" stroke="#a16207" strokeWidth="0.6" />
          })}
        </g>
      ))}
      {[0, 45, 90, 135].map((z, k) => {
        const [x1, y1] = p([L, k % 2 ? T - 3 : 3, z + 8])
        const [x2, y2] = p([L, k % 2 ? T - 3 : 3, z + 37])
        return <path key={z} d={`M${x1} ${y1} Q${(x1 + x2) / 2} ${(y1 + y2) / 2 + (k % 2 ? 12 : -12)} ${x2} ${y2}`} fill="none" stroke="#7a4a22" strokeWidth="0.9" />
      })}
      <Solido p={p} caras={[...izq.adelante, ...der.adelante]} tonos={MORDAZA} />
      <Solido p={p} caras={centro.barra} tonos={BARRA} />
      <Solido p={p} caras={centro.adelante} tonos={MORDAZA} />
      {orden.map(([x, y, z, n]) => {
        const [cx, cy] = p([x, y, z])
        return (
          <g key={n}>
            <circle cx={cx - 14} cy={cy + 14} r="9" fill="#b45309" />
            <text x={cx - 14} y={cy + 18} textAnchor="middle" className="fig-letra">{n}</text>
          </g>
        )
      })}
      <text x="300" y="40" className="fig-titulo">Prensa 1, arriba</text>
      <text x="300" y="55" className="fig-nota">Se aprieta primero</text>
      <text x="300" y="80" className="fig-titulo">Prensas 2 y 3, abajo</text>
      <text x="300" y="95" className="fig-nota">Para que no se curve</text>
    </svg>
  )
}

// Cuatro tipos de molde para curvar. Dibujo original y esquemático.
import { arco, banda, pt } from './arcos.js'

const molde = { fill: '#cbd5e1', stroke: '#475569', strokeWidth: 1.2 }
const pieza = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const rojo = '#dc2626'
const M = { cx: 60, cy: 140, r: 50, e: 9 }
const [ax, ay] = pt(M.cx, M.cy, M.r, 150)
const [bx, by] = pt(M.cx, M.cy, M.r, 30)
const macho = `${arco(M.cx, M.cy, M.r, 150, 30)} L${bx} 120 L${ax} 120 L${ax} ${ay} Z`
const bolsaI = pt(M.cx, M.cy, M.r + M.e + 4, 154)
const bolsaD = pt(M.cx, M.cy, M.r + M.e + 4, 26)
const laminas = banda(M.cx, M.cy, M.r, M.r + M.e, 150, 30)

function Flechas({ r0, r1, angulos }) {
  return angulos.map((a) => {
    const [x0, y0] = pt(M.cx, M.cy, r0, a)
    const [x1, y1] = pt(M.cx, M.cy, r1, a)
    return <path key={a} d={`M${x0} ${y0} L${x1} ${y1}`} stroke={rojo} strokeWidth="1.6" markerEnd="url(#tm-punta)" />
  })
}

// Hembra: bloque cuya cara inferior sigue el radio exterior de las láminas.
const R2 = M.r + M.e
const [hx0, hy0] = pt(M.cx, M.cy, R2, 150)
const [hx1, hy1] = pt(M.cx, M.cy, R2, 30)
const hembra = `M${hx0} ${hy0} L${hx0} 52 L${hx1} 52 L${hx1} ${hy1} ${arco(M.cx, M.cy, R2, 30, 150).replace(/^M[^A]+/, '')} Z`

const paneles = [
  {
    titulo: 'Macho y hembra', notas: ['Hembra: curva', 'paralela, no copia'],
    d: (
      <>
        <path d={macho} {...molde} />
        <path d={laminas} {...pieza} />
        <path d={hembra} transform="translate(0 -8)" {...molde} />
        <path d="M60 30 V40" stroke={rojo} strokeWidth="1.6" markerEnd="url(#tm-punta)" />
      </>
    ),
  },
  {
    titulo: 'De un lado', notas: ['Prensas sobre', 'un fleje fino'],
    d: (
      <>
        <path d={macho} {...molde} />
        <path d={laminas} {...pieza} />
        <path d={banda(M.cx, M.cy, M.r + M.e, M.r + M.e + 3, 152, 28)} fill="#f4e4c1" stroke="#7a4a22" strokeWidth="0.8" />
        <Flechas r0={M.r + 30} r1={M.r + 15} angulos={[135, 90, 45]} />
      </>
    ),
  },
  {
    titulo: 'Bolsa de vacío', notas: ['El aire aprieta', 'toda la pieza'],
    d: (
      <>
        <path d={macho} {...molde} />
        <path d={laminas} {...pieza} />
        <path d={`M${bolsaI[0]} 124 L${bolsaI[0]} ${bolsaI[1]} ${arco(M.cx, M.cy, M.r + M.e + 4, 154, 26).replace(/^M[^A]+/, '')} L${bolsaD[0]} 124 Z`} fill="none" stroke="#2563eb" strokeWidth="1.4" />
        <path d="M100 124 V130 H118" fill="none" stroke="#1f2937" strokeWidth="3" />
        <Flechas r0={M.r + 24} r1={M.r + 15} angulos={[140, 115, 90, 65, 40]} />
      </>
    ),
  },
  {
    titulo: 'Para vapor', notas: ['Fleje con topes', 'en los extremos'],
    d: (
      <>
        <path d={macho} {...molde} />
        <path d={laminas} {...pieza} />
        <path d={arco(M.cx, M.cy, M.r + M.e + 2.5, 152, 28)} fill="none" stroke="#475569" strokeWidth="3" />
        {[152, 28].map((a) => {
          const [x0, y0] = pt(M.cx, M.cy, M.r + 1, a)
          const [x1, y1] = pt(M.cx, M.cy, M.r + M.e + 5, a)
          return <path key={a} d={`M${x0} ${y0} L${x1} ${y1}`} stroke="#334155" strokeWidth="4" />
        })}
        <Flechas r0={M.r + 30} r1={M.r + 17} angulos={[90]} />
      </>
    ),
  },
]

export default function TiposMolde() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 176" role="img" aria-label="Moldes para curvar: macho y hembra, de un lado con prensas, bolsa de vacío y molde para vapor con fleje">
      <defs>
        <marker id="tm-punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill={rojo} />
        </marker>
      </defs>
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${i * 120} 0)`}>
          {p.d}
          <text x="60" y="140" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          {p.notas.map((n, k) => (
            <text key={n} x="60" y={155 + k * 13} textAnchor="middle" className="fig-nota">{n}</text>
          ))}
        </g>
      ))}
    </svg>
  )
}

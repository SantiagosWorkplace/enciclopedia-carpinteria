// Tres formas de obtener una pieza curva y qué les pasa a las fibras.
// Dibujo original y esquemático.
import { arco, banda, pt } from './arcos.js'

const C = { cx: 75, cy: 122, r1: 50, r2: 64, a0: 160, a1: 20 }
const madera = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const fibra = { fill: 'none', stroke: '#b07a42', strokeWidth: 0.8 }
const rojo = '#dc2626'

const forma = banda(C.cx, C.cy, C.r1, C.r2, C.a0, C.a1)
const fibrasCurvas = [54, 57, 60].map((r) => <path key={r} d={arco(C.cx, C.cy, r, C.a0 - 2, C.a1 + 2)} {...fibra} />)

const paneles = [
  {
    titulo: 'Recortada de una tabla', notas: ['La veta corta de los extremos', 'se quiebra con facilidad'],
    d: (
      <>
        <rect x="6" y="52" width="138" height="56" fill="#f6e6c8" stroke="#b07a42" strokeWidth="0.8" strokeDasharray="3 2" />
        <path d={forma} {...madera} />
        <g clipPath="url(#cf-forma)">
          {[60, 67, 74, 81, 88, 95, 102].map((y) => <path key={y} d={`M6 ${y} H144`} {...fibra} />)}
        </g>
        {[C.a0 - 6, C.a1 + 6].map((a) => {
          const [x, y] = pt(C.cx, C.cy, (C.r1 + C.r2) / 2, a)
          return <circle key={a} cx={x} cy={y} r="10" fill="none" stroke={rojo} strokeWidth="1.6" />
        })}
      </>
    ),
  },
  {
    titulo: 'Curvada sin fleje', notas: ['La cara exterior se estira', 'y se agrieta'],
    d: (
      <>
        <path d={forma} {...madera} />
        {fibrasCurvas}
        <path d={arco(C.cx, C.cy, 57, C.a0, C.a1)} fill="none" stroke="#1e40af" strokeWidth="1.2" strokeDasharray="4 3" />
        {[70, 85, 100, 115].map((a) => {
          const [x0, y0] = pt(C.cx, C.cy, C.r2 - 5, a)
          const [x1, y1] = pt(C.cx, C.cy, C.r2 + 1, a + 2)
          return <path key={a} d={`M${x0} ${y0} L${x1} ${y1}`} stroke={rojo} strokeWidth="1.6" />
        })}
      </>
    ),
  },
  {
    titulo: 'Curvada con fleje', notas: ['Casi toda se comprime', 'y la cara no se rompe'],
    d: (
      <>
        <path d={forma} {...madera} />
        {fibrasCurvas}
        <path d={arco(C.cx, C.cy, C.r2 - 2, C.a0, C.a1)} fill="none" stroke="#1e40af" strokeWidth="1.2" strokeDasharray="4 3" />
        <path d={arco(C.cx, C.cy, C.r2 + 2.5, C.a0 + 3, C.a1 - 3)} fill="none" stroke="#475569" strokeWidth="3" />
        {[C.a0 + 3, C.a1 - 3].map((a) => {
          const [x0, y0] = pt(C.cx, C.cy, C.r1 + 4, a)
          const [x1, y1] = pt(C.cx, C.cy, C.r2 + 4, a)
          return <path key={a} d={`M${x0} ${y0} L${x1} ${y1}`} stroke="#334155" strokeWidth="4" />
        })}
      </>
    ),
  },
]

export default function CurvadoFibras() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 214" role="img" aria-label="Pieza curva recortada de una tabla, curvada sin fleje y curvada con fleje">
      <defs>
        <clipPath id="cf-forma"><path d={forma} /></clipPath>
      </defs>
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${i * 160 + 5} 0)`}>
          {p.d}
          <text x="75" y="150" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          {p.notas.map((n, k) => (
            <text key={n} x="75" y={165 + k * 13} textAnchor="middle" className="fig-nota">{n}</text>
          ))}
        </g>
      ))}
      <path d="M150 204 H172" stroke="#1e40af" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="178" y="208" className="fig-nota">Fibra neutra: ni se estira ni se comprime</text>
    </svg>
  )
}

// Uniones de estructura vistas de costado: dos empalmes para alargar vigas,
// la boca de pájaro de un cabio sobre la solera y una caja y espiga de entramado.
// Dibujo original y esquemático.
const A = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const B = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2 }
const perno = { stroke: '#334155', strokeWidth: 2.4 }

// Cabio con pendiente de 20°: borde inferior y_l(x) = 90 + (88 - x) · tan 20°,
// canto vertical 31,9 (30 medidos en perpendicular).
const t20 = Math.tan((20 * Math.PI) / 180)
const yl = (x) => 90 + (88 - x) * t20
const H = 30 / Math.cos((20 * Math.PI) / 180)
const f = (n) => +n.toFixed(1)
const cabio = `M20 ${f(yl(20) - H)} L220 ${f(yl(220) - H)} L220 ${f(yl(220))} L88 90 L60 90 L60 ${f(yl(60))} L20 ${f(yl(20))} Z`

const paneles = [
  {
    titulo: 'Empalme a media madera', nota: 'Con pernos o clavijas a través',
    d: (
      <>
        <path d="M10 50 H150 V65 H70 V80 H10 Z" {...A} />
        <path d="M70 65 H150 V50 H230 V80 H70 Z" {...B} />
        <path d="M90 44 V86 M130 44 V86" {...perno} />
      </>
    ),
  },
  {
    titulo: 'Empalme en bisel', nota: 'Cuanto más largo el bisel, más resiste',
    d: (
      <>
        <path d="M10 50 H170 L26 74 H10 Z" {...A} />
        <path d="M170 50 H230 V74 H26 Z" {...B} />
        <path d="M70 44 V80 M126 44 V80" {...perno} />
      </>
    ),
  },
  {
    titulo: 'Boca de pájaro', nota: 'El cabio se asienta sobre la solera',
    d: (
      <>
        <rect x="60" y="90" width="30" height="30" {...A} />
        <path d="M66 96 L84 114 M84 96 L66 114" stroke="#b07a42" strokeWidth="0.8" />
        <path d={cabio} {...B} />
      </>
    ),
  },
  {
    titulo: 'Caja y espiga de entramado', nota: 'Un pie derecho sobre la solera, con clavija',
    d: (
      <>
        <rect x="20" y="80" width="200" height="34" {...A} />
        <rect x="108" y="80" width="16" height="26" fill="#fffaf2" stroke="#7a4a22" strokeWidth="0.8" />
        <path d="M100 10 H132 V80 H123 V104 H109 V80 H100 Z" {...B} />
        <circle cx="116" cy="92" r="3.5" fill="#a86b35" stroke="#5b3416" strokeWidth="1" />
      </>
    ),
  },
]

export default function EmpalmesEstructura() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 320" role="img" aria-label="Empalme a media madera, empalme en bisel, boca de pájaro y caja y espiga de entramado">
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${(i % 2) * 240} ${Math.floor(i / 2) * 160})`}>
          {p.d}
          <text x="120" y="140" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <text x="120" y="154" textAnchor="middle" className="fig-nota">{p.nota}</text>
        </g>
      ))}
    </svg>
  )
}

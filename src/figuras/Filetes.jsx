// Tablero chapado con filete y cenefa a contraveta, visto desde arriba, y dos
// secciones: filete en el canto e incrustación en la cara. Dibujo original.
const campo = '#c9884f'
const cenefa = '#e2b77d'
const veta = { stroke: '#8a5025', strokeWidth: 0.7 }
const vetaClara = { stroke: '#b07a42', strokeWidth: 0.7 }

// Marco exterior x 10..250, y 10..150; cenefa de 18; filete de 4.
const E = { x0: 10, y0: 10, x1: 250, y1: 150, c: 18, f: 4 }
const ci = { x0: E.x0 + E.c, y0: E.y0 + E.c, x1: E.x1 - E.c, y1: E.y1 - E.c }

function Cenefa() {
  const lados = [
    // arriba, abajo: veta vertical; izquierda, derecha: veta horizontal
    { d: `M${E.x0} ${E.y0} H${E.x1} L${ci.x1} ${ci.y0} H${ci.x0} Z`, vertical: true },
    { d: `M${E.x0} ${E.y1} H${E.x1} L${ci.x1} ${ci.y1} H${ci.x0} Z`, vertical: true },
    { d: `M${E.x0} ${E.y0} V${E.y1} L${ci.x0} ${ci.y1} V${ci.y0} Z`, vertical: false },
    { d: `M${E.x1} ${E.y0} V${E.y1} L${ci.x1} ${ci.y1} V${ci.y0} Z`, vertical: false },
  ]
  return lados.map((l, i) => (
    <g key={i}>
      <clipPath id={`fi-lado-${i}`}><path d={l.d} /></clipPath>
      <path d={l.d} fill={cenefa} stroke="#7a4a22" strokeWidth="1" />
      <g clipPath={`url(#fi-lado-${i})`}>
        {l.vertical
          ? Array.from({ length: 48 }, (_, k) => <path key={k} d={`M${E.x0 + 3 + k * 5} ${E.y0} V${E.y1}`} {...vetaClara} />)
          : Array.from({ length: 28 }, (_, k) => <path key={k} d={`M${E.x0} ${E.y0 + 3 + k * 5} H${E.x1}`} {...vetaClara} />)}
      </g>
    </g>
  ))
}

export default function Filetes() {
  const f = E.f
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 210" role="img" aria-label="Tablero con campo de chapa, filete y cenefa a contraveta, y secciones de un filete en el canto y de una incrustación">
      <Cenefa />
      {/* Filete: claro, oscuro, claro */}
      <rect x={ci.x0} y={ci.y0} width={ci.x1 - ci.x0} height={ci.y1 - ci.y0} fill="#f8ead0" stroke="#7a4a22" strokeWidth="0.8" />
      <rect x={ci.x0 + f / 3} y={ci.y0 + f / 3} width={ci.x1 - ci.x0 - (2 * f) / 3} height={ci.y1 - ci.y0 - (2 * f) / 3} fill="#3f2a1a" />
      <rect x={ci.x0 + (2 * f) / 3} y={ci.y0 + (2 * f) / 3} width={ci.x1 - ci.x0 - (4 * f) / 3} height={ci.y1 - ci.y0 - (4 * f) / 3} fill="#f8ead0" />
      <rect x={ci.x0 + f} y={ci.y0 + f} width={ci.x1 - ci.x0 - 2 * f} height={ci.y1 - ci.y0 - 2 * f} fill={campo} stroke="#5b3416" strokeWidth="0.8" />
      {Array.from({ length: 16 }, (_, k) => (
        <path key={k} d={`M${ci.x0 + f + 2} ${ci.y0 + f + 4 + k * 6} Q130 ${ci.y0 + f + 6 + k * 6} ${ci.x1 - f - 2} ${ci.y0 + f + 4 + k * 6}`} fill="none" {...veta} />
      ))}
      <text x="130" y="172" textAnchor="middle" className="fig-titulo">Campo, filete y cenefa</text>
      <text x="130" y="187" textAnchor="middle" className="fig-nota">La cenefa lleva la veta cruzada y</text>
      <text x="130" y="200" textAnchor="middle" className="fig-nota">esquinas a inglete</text>

      {/* Secciones */}
      <g transform="translate(290 20)">
        <rect x="0" y="10" width="160" height="22" fill="#cdb48a" stroke="#7a5a32" />
        <rect x="0" y="7" width="152" height="3" fill={campo} stroke="#5b3416" strokeWidth="0.6" />
        <path d="M152 7 H160 V18 H152 Z" fill="#fffaf2" stroke="#7a4a22" strokeWidth="0.6" />
        <rect x="152" y="7" width="8" height="11" fill="#3f2a1a" />
        <rect x="154.5" y="7" width="3" height="11" fill="#f8ead0" />
        <text x="80" y="50" textAnchor="middle" className="fig-titulo">Filete en el canto</text>
        <text x="80" y="64" textAnchor="middle" className="fig-nota">En un rebajo, a ras de la chapa</text>

        <rect x="0" y="96" width="160" height="22" fill="#cdb48a" stroke="#7a5a32" />
        <rect x="0" y="93" width="160" height="3" fill={campo} stroke="#5b3416" strokeWidth="0.6" />
        <rect x="70" y="93" width="20" height="5" fill="#f1e0b8" stroke="#5b3416" strokeWidth="0.6" />
        <text x="80" y="136" textAnchor="middle" className="fig-titulo">Incrustación</text>
        <text x="80" y="150" textAnchor="middle" className="fig-nota">En una caja poco profunda,</text>
        <text x="80" y="163" textAnchor="middle" className="fig-nota">con la pieza un poco más alta</text>
      </g>
    </svg>
  )
}

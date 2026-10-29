// Tablero de cinco tablas encoladas por el canto, visto de testa, con los anillos
// alternados y las prensas arriba y abajo. A la derecha, la junta con resorte vista
// desde arriba, con el hueco exagerado. Dibujo original.
const tablas = [0, 1, 2, 3, 4]
const metal = { fill: '#64748b', stroke: '#334155', strokeWidth: 1 }

// Anillos de una tabla vista de testa; el centro del árbol queda arriba o abajo.
function Anillos({ x, arriba }) {
  const cy = arriba ? 38 : 122
  return (
    <g clipPath={`url(#ec-tabla-${x})`}>
      {[34, 40, 46, 52, 58].map((r) => (
        <circle key={r} cx={x + 25} cy={cy} r={r} fill="none" stroke="#a86b35" strokeWidth="0.9" />
      ))}
    </g>
  )
}

// Sargento visto de testa: barra y dos mordazas que tocan los cantos exteriores.
function Prensa({ y, abajo }) {
  const yM = abajo ? 80 : y + 6
  return (
    <g>
      <rect x="6" y={y} width="274" height="6" {...metal} />
      <rect x="10" y={yM} width="8" height="26" {...metal} />
      <rect x="268" y={yM} width="8" height="26" {...metal} />
    </g>
  )
}

export default function EncolarCantos() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 210" role="img" aria-label="Tablero encolado por el canto con los anillos alternados y prensas arriba y abajo, y una junta con resorte">
      <defs>
        {tablas.map((i) => (
          <clipPath key={i} id={`ec-tabla-${18 + i * 50}`}>
            <rect x={18 + i * 50} y="70" width="50" height="20" />
          </clipPath>
        ))}
        <marker id="ec-punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>

      <Prensa y={48} />
      <Prensa y={106} abajo />
      {tablas.map((i) => {
        const x = 18 + i * 50
        return (
          <g key={i}>
            <rect x={x} y="70" width="50" height="20" fill={i % 2 ? '#d6a265' : '#e2b77d'} stroke="#7a4a22" strokeWidth="1.2" />
            <Anillos x={x} arriba={i % 2 === 1} />
          </g>
        )
      })}
      <text x="143" y="140" textAnchor="middle" className="fig-titulo">Anillos alternados</text>
      <text x="143" y="155" textAnchor="middle" className="fig-nota">Cada tabla se deforma hacia un lado distinto</text>
      <text x="143" y="168" textAnchor="middle" className="fig-nota">y el tablero queda más plano.</text>
      <text x="143" y="181" textAnchor="middle" className="fig-nota">Prensas alternadas arriba y abajo: no lo curvan.</text>

      {/* Junta con resorte, vista desde arriba */}
      <g transform="translate(320 10)">
        <path d="M0 10 H140 V40 Q70 38.5 0 40 Z" fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.2" />
        <path d="M0 40 Q70 45.5 140 40 V70 H0 Z" fill="#d6a265" stroke="#7a4a22" strokeWidth="1.2" />
        <path d="M70 0 V36" stroke="#dc2626" strokeWidth="1.6" markerEnd="url(#ec-punta)" />
        <text x="70" y="96" textAnchor="middle" className="fig-titulo">Junta con resorte</text>
        <text x="70" y="111" textAnchor="middle" className="fig-nota">Un hueco mínimo en el centro:</text>
        <text x="70" y="124" textAnchor="middle" className="fig-nota">la prensa del medio lo cierra</text>
        <text x="70" y="137" textAnchor="middle" className="fig-nota">y los extremos quedan apretados.</text>
        <text x="70" y="160" textAnchor="middle" className="fig-nota">Hueco exagerado en el dibujo</text>
      </g>
    </svg>
  )
}

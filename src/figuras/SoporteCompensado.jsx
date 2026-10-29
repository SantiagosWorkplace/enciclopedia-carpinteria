// El soporte de la chapa: tablero compensado, tablero chapado de un solo lado y
// dirección de la chapa sobre contrachapado. Secciones con espesores exagerados.
const nucleo = { fill: '#cdb48a', stroke: '#7a5a32', strokeWidth: 1 }
const chapa = { fill: '#9a5b2c', stroke: '#5b3416', strokeWidth: 0.8 }
const veta = { stroke: '#a86b35', strokeWidth: 0.8 }

const paneles = [
  {
    titulo: 'Compensado', notas: ['Chapa en las dos caras:', 'el tablero queda plano'],
    d: (
      <>
        <rect x="10" y="44" width="140" height="4" {...chapa} />
        <rect x="10" y="48" width="140" height="20" {...nucleo} />
        <rect x="10" y="68" width="140" height="4" {...chapa} />
      </>
    ),
  },
  {
    titulo: 'Chapa de un solo lado', notas: ['La chapa tira al secar:', 'esa cara queda cóncava'],
    d: (
      <>
        <path d="M10 30 Q80 66 150 30 L150 34 Q80 70 10 34 Z" {...chapa} />
        <path d="M10 34 Q80 70 150 34 L150 54 Q80 90 10 54 Z" {...nucleo} />
      </>
    ),
  },
  {
    titulo: 'Sobre contrachapado', notas: ['La veta de la chapa, cruzada', 'con la de la cara del tablero'],
    d: (
      <>
        <rect x="12" y="20" width="136" height="60" fill="#e9d3a8" stroke="#7a5a32" strokeWidth="1" />
        {[28, 36, 44, 52, 60, 68, 76].map((y) => <path key={y} d={`M14 ${y} H146`} {...veta} />)}
        <rect x="70" y="20" width="78" height="60" fill="#c9884f" stroke="#5b3416" strokeWidth="1" />
        {[78, 88, 98, 108, 118, 128, 138].map((x) => <path key={x} d={`M${x} 22 V78`} stroke="#8a5025" strokeWidth="0.8" />)}
      </>
    ),
  },
]

export default function SoporteCompensado() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 150" role="img" aria-label="Tablero compensado con chapa en las dos caras, tablero curvado por chapa de un solo lado y chapa cruzada sobre contrachapado">
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${i * 160} 0)`}>
          {p.d}
          <text x="80" y="108" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          {p.notas.map((n, k) => (
            <text key={n} x="80" y={123 + k * 13} textAnchor="middle" className="fig-nota">{n}</text>
          ))}
        </g>
      ))}
    </svg>
  )
}

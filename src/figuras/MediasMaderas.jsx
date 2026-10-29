// Cuatro uniones a media madera. Arriba, vistas desde arriba ya armadas; debajo,
// las dos piezas de perfil con el rebaje de cada una. Dibujo original.
const A = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const B = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2 }

// Perfiles: y0 es el borde superior de la pieza, de 20 de alto.
const muescaArriba = (y) => `M10 ${y} H48 V${y + 10} H72 V${y} H110 V${y + 20} H10 Z`
const muescaAbajo = (y) => `M10 ${y} H110 V${y + 20} H72 V${y + 10} H48 V${y + 20} H10 Z`
const puntaAbajo = (y) => `M48 ${y} H110 V${y + 20} H72 V${y + 10} H48 Z`
const esquinaArriba = (y) => `M34 ${y} H90 V${y + 20} H10 V${y + 10} H34 Z`
const esquinaAbajo = (y) => `M10 ${y} H90 V${y + 20} H34 V${y + 10} H10 Z`

const columnas = [
  {
    titulo: 'En cruz', nota: 'Cruces de bastidores',
    planta: (
      <>
        <rect x="10" y="34" width="100" height="24" {...B} />
        <rect x="48" y="6" width="24" height="80" {...A} />
      </>
    ),
    arriba: muescaAbajo, abajo: muescaArriba,
  },
  {
    titulo: 'En T', nota: 'Travesaños',
    planta: (
      <>
        <rect x="10" y="16" width="100" height="24" {...B} />
        <rect x="48" y="16" width="24" height="70" {...A} />
      </>
    ),
    arriba: puntaAbajo, abajo: muescaArriba,
  },
  {
    titulo: 'En esquina', nota: 'Marcos y bastidores',
    planta: (
      <>
        <rect x="10" y="16" width="80" height="24" {...B} />
        <rect x="10" y="16" width="24" height="70" {...A} />
      </>
    ),
    arriba: esquinaAbajo, abajo: esquinaArriba,
  },
  {
    titulo: 'Con cola de milano', nota: 'Resiste tirones',
    planta: (
      <>
        <rect x="10" y="16" width="100" height="24" {...B} />
        <path d="M48 86 V40 H52 L45 16 H75 L68 40 H72 V86 Z" {...A} />
      </>
    ),
    arriba: puntaAbajo, abajo: muescaArriba,
  },
]

export default function MediasMaderas() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 236" role="img" aria-label="Uniones a media madera en cruz, en T, en esquina y con cola de milano, en planta y de perfil">
      <defs>
        <marker id="mm-punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      {columnas.map((c, i) => (
        <g key={c.titulo} transform={`translate(${i * 120} 4)`}>
          {c.planta}
          <path d={c.arriba(110)} {...A} />
          <path d="M60 134 V150" stroke="#dc2626" strokeWidth="1.6" markerEnd="url(#mm-punta)" />
          <path d={c.abajo(156)} {...B} />
          <text x="60" y="200" textAnchor="middle" className="fig-titulo">{c.titulo}</text>
          <text x="60" y="214" textAnchor="middle" className="fig-nota">{c.nota}</text>
        </g>
      ))}
      <text x="240" y="232" textAnchor="middle" className="fig-nota">Cada pieza pierde la mitad de su espesor donde se cruzan y las caras quedan a ras.</text>
    </svg>
  )
}

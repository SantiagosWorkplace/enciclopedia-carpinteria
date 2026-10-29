// Ingletes: de marco, con galleta, de caja con lengüeta y por qué se abre un
// inglete de madera maciza. Dibujo original; las líneas finas indican la veta.
const A = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const B = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2 }
const veta = { stroke: '#b07a42', strokeWidth: 0.8 }

// Esquina con dos piezas de ancho a (horizontal) y b (vertical); el corte de
// la pieza horizontal avanza `largo` a lo largo de su eje.
function Esquina({ a, b, largo = a }) {
  return (
    <>
      <path d={`M10 20 H110 V${20 + a} H${10 + largo} Z`} {...A} />
      <path d={`M10 20 L${10 + b} ${20 + largo} V120 H10 Z`} {...B} />
      {[0.3, 0.6].map((f) => (
        <g key={f}>
          <path d={`M${10 + largo * f + 4} ${20 + a * f} H106`} {...veta} />
          <path d={`M${10 + b * f} ${20 + largo * f + 4} V116`} {...veta} />
        </g>
      ))}
    </>
  )
}

const paneles = [
  { titulo: 'De marco', notas: ['Esconde las testas;', 'solo con cola, débil'], d: <Esquina a={24} b={24} /> },
  {
    titulo: 'Con galleta', notas: ['Alinea y suma', 'superficie de cola'],
    d: (
      <>
        <Esquina a={24} b={24} />
        <ellipse cx="22" cy="32" rx="10" ry="3.4" transform="rotate(45 22 32)" fill="none" stroke="#5b3416" strokeWidth="1" strokeDasharray="3 2" />
      </>
    ),
  },
  {
    titulo: 'Caja con lengüeta', notas: ['Lengüeta cerca', 'del vértice interior'],
    d: (
      <>
        <Esquina a={18} b={18} />
        <rect x="13.8" y="29.3" width="14" height="3" transform="rotate(-45 20.8 30.8)" fill="#f4e4c1" stroke="#5b3416" strokeWidth="0.9" />
      </>
    ),
  },
  {
    titulo: 'Por qué se abre', notas: ['Al encoger,', 'se abre por dentro'],
    d: (
      <>
        <Esquina a={20} b={20} largo={24} />
        <circle cx="32" cy="42" r="9" fill="none" stroke="#dc2626" strokeWidth="1.6" />
      </>
    ),
  },
]

export default function Ingletes() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 180" role="img" aria-label="Inglete de marco, con galleta, de caja con lengüeta y un inglete abierto por la contracción">
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

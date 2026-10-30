// Los cuatro cortes de la ingletadora sobre un listón, en perspectiva.
// El disco corta por el plano rojo. Dibujo original.
const L = 120
const A = 34 // ancho del listón (profundidad del dibujo)
const E = 18 // espesor
const p = (x, z, y) => [x + z * 0.6, -y - z * 0.45] // x a lo largo, z a lo ancho, y alto

const pts = (lista, ox, oy) => lista.map(([x, z, y]) => { const [a, b] = p(x, z, y); return `${ox + a},${oy + b}` }).join(' ')

// Cada corte define el extremo derecho del listón: x del corte según z (ancho) e y (alto).
const cortes = [
  { titulo: 'Recto', nota: '90° y 90°', fx: () => L },
  { titulo: 'Inglete', nota: 'Disco girado: ángulo en la cara', fx: (z) => L - z },
  { titulo: 'Bisel', nota: 'Disco inclinado: ángulo en el canto', fx: (z, y) => L - y },
  { titulo: 'Compuesto', nota: 'Girado e inclinado a la vez', fx: (z, y) => L - z * 0.7 - y * 0.7 },
]

function Liston({ fx, ox, oy }) {
  const a = [0, 0, E], b = [fx(0, E), 0, E], c = [fx(A, E), A, E], d = [0, A, E]
  const b0 = [fx(0, 0), 0, 0], c0 = [fx(A, 0), A, 0]
  return (
    <g strokeLinejoin="round">
      <polygon points={pts([a, b, c, d], ox, oy)} fill="#f1d4a4" stroke="#7a4a22" strokeWidth="1.2" />
      <polygon points={pts([[0, 0, 0], b0, b, a], ox, oy)} fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.2" />
      <polygon points={pts([b0, c0, c, b], ox, oy)} fill="#dc2626" fillOpacity=".55" stroke="#7f1d1d" strokeWidth="1.2" />
    </g>
  )
}

export default function CortesIngletadora() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 236" role="img" aria-label="Cortes recto, a inglete, en bisel y compuesto sobre un listón">
      {cortes.map((c, i) => {
        const x = 50 + (i % 2) * 240
        const y = 52 + Math.floor(i / 2) * 116
        return (
          <g key={c.titulo}>
            <Liston fx={c.fx} ox={x} oy={y} />
            <text x={x + 70} y={y + 22} textAnchor="middle" className="fig-titulo">{c.titulo}</text>
            {c.nota.split(': ').map((linea, k) => (
              <text key={linea} x={x + 70} y={y + 37 + k * 14} textAnchor="middle" className="fig-nota">{linea}</text>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

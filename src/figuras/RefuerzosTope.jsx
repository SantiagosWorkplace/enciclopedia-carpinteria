// Cuatro formas de reforzar una unión a tope en esquina, vista de testa.
// La pieza vertical recibe la testa de la horizontal. Dibujo original y esquemático.
const lado = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const base = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2 }
const metal = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1 }

// Tornillo visto de costado: cabeza avellanada en x0 y punta en x1.
function Tornillo({ x0, x1, y }) {
  const dientes = []
  for (let x = x0 + 12; x < x1 - 4; x += 4) dientes.push(`L${x + 2} ${y - 2.6} L${x + 4} ${y + 2.6}`)
  return (
    <g>
      <path d={`M${x0} ${y - 5} L${x0 + 6} ${y - 1.6} L${x0 + 6} ${y + 1.6} L${x0} ${y + 5} Z`} {...metal} />
      <path d={`M${x0 + 6} ${y} H${x0 + 12} ${dientes.join(' ')} L${x1} ${y}`} fill="none" stroke="#334155" strokeWidth="1.4" />
    </g>
  )
}

const esquina = (
  <>
    <rect x="40" y="10" width="20" height="100" {...lado} />
    <rect x="60" y="90" width="130" height="20" {...base} />
  </>
)

const paneles = [
  {
    titulo: 'Taco encolado', nota: 'Duplica la superficie de cola',
    d: (
      <>
        {esquina}
        <rect x="60" y="70" width="20" height="20" fill="#f1d4a4" stroke="#7a4a22" strokeWidth="1.2" />
      </>
    ),
  },
  {
    titulo: 'Tornillos', nota: 'En la testa agarran poco: largos',
    d: (
      <>
        {esquina}
        <Tornillo x0={40} x1={112} y={100} />
      </>
    ),
  },
  {
    titulo: 'Clavijas', nota: 'Alinean y refuerzan; van ocultas',
    d: (
      <>
        {esquina}
        <rect x="46" y="96" width="52" height="8" rx="2" fill="#f1d4a4" stroke="#7a4a22" strokeDasharray="3 2" />
      </>
    ),
  },
  {
    titulo: 'Escuadra metálica', nota: 'Rápida; se ve desde dentro',
    d: (
      <>
        {esquina}
        <path d="M60 50 H64 V86 H100 V90 H60 Z" {...metal} />
        <rect x="56" y="58" width="12" height="3" fill="#334155" />
        <rect x="56" y="74" width="12" height="3" fill="#334155" />
        <rect x="76" y="84" width="3" height="12" fill="#334155" />
        <rect x="90" y="84" width="3" height="12" fill="#334155" />
      </>
    ),
  },
]

export default function RefuerzosTope() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 300" role="img" aria-label="Unión a tope reforzada con taco, tornillos, clavijas y escuadra metálica">
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${(i % 2) * 240 + 5} ${Math.floor(i / 2) * 150})`}>
          {p.d}
          <text x="115" y="128" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <text x="115" y="142" textAnchor="middle" className="fig-nota">{p.nota}</text>
        </g>
      ))}
    </svg>
  )
}

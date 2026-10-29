// Seis uniones con ranura o rebajo, vistas en sección. Dibujo original y esquemático.
const A = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const B = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2 }
const oculto = { fill: 'none', stroke: '#7a4a22', strokeWidth: 1, strokeDasharray: '3 2' }

const paneles = [
  {
    titulo: 'Ranura', nota: 'Estantes fijos en un lateral',
    d: (
      <>
        <rect x="20" y="8" width="20" height="96" {...A} />
        <path d="M33 46 H150 V64 H33 Z" {...B} />
        <path d="M40 46 V64" stroke="#7a4a22" strokeWidth="0.8" />
      </>
    ),
  },
  {
    titulo: 'Ranura detenida', nota: 'Vista de frente: no se ve',
    d: (
      <>
        <rect x="20" y="8" width="20" height="96" {...A} />
        <rect x="40" y="46" width="110" height="18" {...B} />
        <rect x="33" y="46" width="7" height="18" {...oculto} />
      </>
    ),
  },
  {
    titulo: 'Rebajo', nota: 'Esquinas de cajas y traseras',
    d: (
      <>
        <path d="M20 20 H150 V40 H34 V30 H20 Z" {...A} />
        <rect x="20" y="30" width="14" height="74" {...B} />
      </>
    ),
  },
  {
    titulo: 'Machihembrado', nota: 'Tablas por el canto',
    d: (
      <>
        <path d="M84 44 H150 V68 H84 V60 H92 V52 H84 Z" {...B} />
        <path d="M10 44 H84 V52 H92 V60 H84 V68 H10 Z" {...A} />
      </>
    ),
  },
  {
    titulo: 'Lengüeta postiza', nota: 'Las dos piezas con ranura',
    d: (
      <>
        <rect x="10" y="44" width="70" height="24" {...A} />
        <rect x="80" y="44" width="70" height="24" {...B} />
        <rect x="70" y="52.5" width="20" height="7" fill="#f4e4c1" stroke="#7a4a22" strokeWidth="1" />
        <path d="M70 54.8 H90 M70 57.2 H90" stroke="#b07a42" strokeWidth="0.6" />
      </>
    ),
  },
  {
    titulo: 'Fondo en ranura', nota: 'El fondo queda libre, sin cola',
    d: (
      <>
        <rect x="20" y="8" width="16" height="96" {...A} />
        <path d="M29 80 H150 V86 H29 Z" fill="#f4e4c1" stroke="#7a4a22" strokeWidth="1" />
        <path d="M36 80 V86" stroke="#7a4a22" strokeWidth="0.8" />
      </>
    ),
  },
]

export default function RanurasRebajos() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 290" role="img" aria-label="Ranura, ranura detenida, rebajo, machihembrado, lengüeta postiza y fondo en ranura, en sección">
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${(i % 3) * 160} ${Math.floor(i / 3) * 145})`}>
          {p.d}
          <text x="80" y="122" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <text x="80" y="136" textAnchor="middle" className="fig-nota">{p.nota}</text>
        </g>
      ))}
    </svg>
  )
}

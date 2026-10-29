// Cuatro variantes de caja y espiga, vistas de frente con la pata cortada para
// mostrar la espiga dentro de la caja. Dibujo original.
const pata = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const trav = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2 }
const hueco = { fill: '#fffaf2', stroke: '#7a4a22', strokeWidth: 0.8 }

const paneles = [
  {
    titulo: 'Ciega', nota: 'La más común: la espiga no se ve',
    d: (
      <>
        <rect x="120" y="10" width="50" height="120" {...pata} />
        <rect x="120" y="48" width="34" height="44" {...hueco} />
        <path d="M20 40 H120 V50 H152 V90 H120 V100 H20 Z" {...trav} />
      </>
    ),
  },
  {
    titulo: 'Pasante acuñada', nota: 'Dos cuñas abren la espiga y la traban',
    d: (
      <>
        <rect x="120" y="10" width="50" height="120" {...pata} />
        <path d="M120 50 H150 L170 46 V94 L150 90 H120 Z" {...hueco} />
        <path d="M20 40 H120 V50 H150 L170 46.5 V93.5 L150 90 H120 V100 H20 Z" {...trav} />
        <path d="M170 56 L148 60 L170 63 Z" fill="#7a4a22" />
        <path d="M170 77 L148 80 L170 84 Z" fill="#7a4a22" />
      </>
    ),
  },
  {
    titulo: 'Con clavija', nota: 'La clavija la sujeta sin depender de la cola',
    d: (
      <>
        <rect x="120" y="10" width="50" height="120" {...pata} />
        <rect x="120" y="48" width="34" height="44" {...hueco} />
        <path d="M20 40 H120 V50 H152 V90 H120 V100 H20 Z" {...trav} />
        <circle cx="137" cy="70" r="5" fill="#a86b35" stroke="#5b3416" strokeWidth="1" />
        <circle cx="137" cy="70" r="2.4" fill="none" stroke="#5b3416" strokeWidth="0.6" />
      </>
    ),
  },
  {
    titulo: 'Con resalte', nota: 'En el extremo de la pata, sin romperla',
    d: (
      <>
        <rect x="120" y="40" width="50" height="90" {...pata} />
        <path d="M120 40 H134 V56 H154 V92 H120 Z" {...hueco} />
        <path d="M20 40 H132 V56 H152 V92 H120 V100 H20 Z" {...trav} />
      </>
    ),
  },
]

export default function VariantesEspiga() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 330" role="img" aria-label="Caja y espiga ciega, pasante acuñada, con clavija y con resalte">
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${(i % 2) * 240 + 10} ${Math.floor(i / 2) * 165})`}>
          {p.d}
          <text x="100" y="148" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <text x="100" y="162" textAnchor="middle" className="fig-nota">{p.nota}</text>
        </g>
      ))}
    </svg>
  )
}

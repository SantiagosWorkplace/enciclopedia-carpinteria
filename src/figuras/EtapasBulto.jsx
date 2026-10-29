// Primeras etapas de una talla de bulto: trazar los perfiles en el bloque, serrar
// el perfil lateral y redondear la sección. Dibujo original en perspectiva caballera.
const k = 0.354
const lapiz = { fill: 'none', stroke: '#374151', strokeWidth: 1.2, strokeDasharray: '3 2' }

// Perfil lateral de un pájaro posado, sobre la cara delantera del bloque.
const lateral = 'M44 140 C30 130 28 108 38 94 C40 88 42 84 40 80 L28 70 L41 68 C42 58 52 54 60 58 C68 62 68 72 64 80 C80 82 100 86 120 92 L120 102 C106 104 100 112 96 124 C94 132 90 138 84 140 Z'

// Perfil frontal (ancho u, alto v) dibujado sobre la cara lateral del bloque.
const frontal = [[14, 0], [8, 30], [10, 50], [20, 60], [20, 66], [24, 78], [30, 86], [36, 78], [40, 66], [40, 60], [50, 50], [52, 30], [46, 0]]
  .map(([u, v]) => `${(120 + k * u).toFixed(1)} ${(140 - v - k * u).toFixed(1)}`)

const bloque = {
  frente: 'M20 50 H120 V140 H20 Z',
  tapa: 'M20 50 L41.2 28.8 H141.2 L120 50 Z',
  costado: 'M120 50 L141.2 28.8 V118.8 L120 140 Z',
}

function Bloque() {
  return (
    <>
      <path d={bloque.tapa} fill="#f3dcab" stroke="#7a4a22" strokeWidth="1.2" strokeLinejoin="round" />
      <path d={bloque.costado} fill="#c99a5c" stroke="#7a4a22" strokeWidth="1.2" strokeLinejoin="round" />
      <path d={bloque.frente} fill="#e9c88f" stroke="#7a4a22" strokeWidth="1.2" />
      <path d={lateral} {...lapiz} />
      <path d={`M${frontal.join(' L')} Z`} {...lapiz} />
    </>
  )
}

function Serrado() {
  const capas = Array.from({ length: 30 }, (_, i) => 30 - i)
  return (
    <>
      <path d={`${bloque.frente} ${bloque.tapa} ${bloque.costado}`} fill="none" stroke="#7a4a22" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
      {capas.map((c) => <path key={c} d={lateral} transform={`translate(${(c * 0.707).toFixed(2)} ${(-c * 0.707).toFixed(2)})`} fill="#c99a5c" />)}
      <path d={lateral} transform="translate(21.2 -21.2)" fill="none" stroke="#7a4a22" strokeWidth="0.8" />
      <path d={lateral} fill="#e9c88f" stroke="#7a4a22" strokeWidth="1.2" />
    </>
  )
}

function Redondear() {
  const oct = [[15, 6.2], [6.2, 15], [-6.2, 15], [-15, 6.2], [-15, -6.2], [-6.2, -15], [6.2, -15], [15, -6.2]]
  return (
    <>
      <rect x="15" y="80" width="30" height="30" fill="#e9c88f" stroke="#7a4a22" strokeWidth="1.2" />
      <path d={`M${oct.map(([x, y]) => `${80 + x} ${95 + y}`).join(' L')} Z`} fill="#e9c88f" stroke="#7a4a22" strokeWidth="1.2" />
      <path d="M15 80 H45 V110 H15 Z" transform="translate(50 0)" fill="none" stroke="#7a4a22" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
      <circle cx="135" cy="95" r="15" fill="#e9c88f" stroke="#7a4a22" strokeWidth="1.2" />
      <path d="M50 95 H60 M100 95 H110" stroke="#b45309" strokeWidth="2" markerEnd="url(#eb-f)" />
    </>
  )
}

const paneles = [
  { titulo: '1 Trazar', nota: 'Perfil lateral y frontal', C: Bloque },
  { titulo: '2 Serrar', nota: 'Primero el perfil lateral', C: Serrado },
  { titulo: '3 Redondear', nota: 'Cuadrado, octógono, curva', C: Redondear },
]

export default function EtapasBulto() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 192" role="img" aria-label="Talla de bulto: perfiles trazados en el bloque, perfil lateral serrado y sección redondeada por etapas">
      <defs>
        <marker id="eb-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#b45309" />
        </marker>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${i * 160} 0)`}>
          <C />
          <text x="80" y="168" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="80" y="183" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

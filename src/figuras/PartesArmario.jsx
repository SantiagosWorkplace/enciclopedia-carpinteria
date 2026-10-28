// Partes de un mueble de caja, de frente, y su planta con la trasera en rebajo.
// Dibujo original y esquemático: los espesores están exagerados.
const caja = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const frente = { fill: '#cf9a5e', stroke: '#7a4a22', strokeWidth: 1.2 }
const interior = '#f6e3c3'

const etiquetas = [
  { x: 130, y: 44, ty: 30, titulo: 'Techo' },
  { x: 216, y: 92, ty: 62, titulo: 'Costado' },
  { x: 90, y: 110, ty: 94, titulo: 'Puerta' },
  { x: 180, y: 121, ty: 132, titulo: 'Estante', nota: 'Fijo o sobre soportes' },
  { x: 170, y: 200, ty: 164, titulo: 'Frente de cajón' },
  { x: 150, y: 226, ty: 196, titulo: 'Base' },
  { x: 120, y: 240, ty: 228, titulo: 'Zócalo', nota: 'Retranqueado para los pies' },
]

export default function PartesArmario() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 324" role="img" aria-label="Mueble de caja de frente con techo, costados, estante, puerta, cajón, base y zócalo; planta con la trasera en rebajo">
      <rect x="0" y="250" width="270" height="10" fill="#e7d8c2" />
      {/* Caja */}
      <rect x="48" y="48" width="164" height="174" fill={interior} />
      <rect x="40" y="40" width="180" height="8" {...caja} />
      <rect x="40" y="48" width="8" height="182" {...caja} />
      <rect x="212" y="48" width="8" height="182" {...caja} />
      <rect x="48" y="222" width="164" height="8" {...caja} />
      <rect x="54" y="230" width="152" height="20" fill="#a8723f" stroke="#7a4a22" strokeWidth="1.2" />
      <rect x="48" y="118" width="164" height="6" {...caja} />
      {[60, 200].map((x) => <circle key={x} cx={x} cy="128" r="1.6" fill="#7a4a22" />)}
      {/* Frentes */}
      <rect x="50" y="50" width="80" height="122" rx="1" {...frente} />
      <rect x="120" y="102" width="4" height="22" rx="2" fill="#334155" />
      <rect x="50" y="176" width="160" height="44" rx="1" {...frente} />
      <rect x="112" y="194" width="36" height="5" rx="2.5" fill="#334155" />

      {etiquetas.map((e) => (
        <g key={e.titulo}>
          <polyline points={`${e.x},${e.y} 262,${e.ty - 4} 270,${e.ty - 4}`} fill="none" stroke="#2b1d12" strokeWidth=".9" />
          <circle cx={e.x} cy={e.y} r="2.6" fill="#2b1d12" stroke="#fff" />
          <text x="276" y={e.ty} className="fig-titulo">{e.titulo}</text>
          {e.nota && <text x="276" y={e.ty + 13} className="fig-nota">{e.nota}</text>}
        </g>
      ))}

      {/* Planta: la trasera entra en un rebajo de los costados */}
      <g transform="translate(286 270)">
        <text x="0" y="-6" className="fig-nota">Planta, vista desde arriba</text>
        <path d="M0 0 H5 V4 H9 V44 H0 Z" {...caja} />
        <path d="M180 0 H175 V4 H171 V44 H180 Z" {...caja} />
        <rect x="5" y="0" width="170" height="4" fill="#9a6a3a" stroke="#7a4a22" />
        <rect x="9" y="44" width="162" height="5" {...frente} />
        <text x="90" y="24" textAnchor="middle" className="fig-titulo">Trasera en rebajo</text>
      </g>
    </svg>
  )
}

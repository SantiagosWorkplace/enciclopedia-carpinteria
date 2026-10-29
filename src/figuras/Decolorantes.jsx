// Tres decolorantes y lo que quita cada uno: muestras antes y después.
// Dibujo original.
function Muestra({ x, color, children }) {
  return (
    <g transform={`translate(${x} 14)`}>
      <rect width="56" height="86" fill={color} />
      {[16, 34, 52, 70].map((y) => <path key={y} d={`M0 ${y} C18 ${y - 4} 38 ${y + 4} 56 ${y}`} fill="none" stroke="#000" strokeOpacity="0.12" strokeWidth="2" />)}
      {children}
      <rect width="56" height="86" fill="none" stroke="#7a4a22" strokeWidth="1.2" />
    </g>
  )
}

const paneles = [
  {
    titulo: 'Ácido oxálico', nota: 'Manchas negras de agua',
    antes: '#c99a5c', despues: '#d4a96c',
    manchas: (
      <>
        <ellipse cx="22" cy="30" rx="12" ry="9" fill="none" stroke="#27272a" strokeOpacity="0.55" strokeWidth="5" />
        <ellipse cx="36" cy="64" rx="10" ry="8" fill="#27272a" opacity="0.35" />
      </>
    ),
  },
  { titulo: 'Dos componentes', nota: 'Aclara el color natural', antes: '#8a5530', despues: '#e3c393' },
  {
    titulo: 'Lejía de cloro', nota: 'Quita el color de un tinte',
    antes: '#d4a96c', despues: '#d4a96c',
    manchas: <rect width="56" height="86" fill="#991b1b" opacity="0.55" />,
  },
]

export default function Decolorantes() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 152" role="img" aria-label="Decolorantes: ácido oxálico para manchas negras, decolorante de dos componentes para aclarar la madera y lejía para quitar tintes">
      <defs>
        <marker id="dc-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#b45309" />
        </marker>
      </defs>
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${10 + i * 160} 0)`}>
          <Muestra x={0} color={p.antes}>{p.manchas}</Muestra>
          <path d="M60 57 H78" stroke="#b45309" strokeWidth="2" markerEnd="url(#dc-f)" />
          <Muestra x={84} color={p.despues} />
          <text x="70" y="126" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <text x="70" y="141" textAnchor="middle" className="fig-nota">{p.nota}</text>
        </g>
      ))}
    </svg>
  )
}

// Cuatro niveles de brillo de un acabado, con el reflejo de una ventana.
// Dibujo original.
const niveles = [
  { titulo: 'Mate', nota: 'Disimula defectos', rx: 46, op: 0.12, nitido: false },
  { titulo: 'Satinado', nota: 'Uso general', rx: 36, op: 0.28, nitido: false },
  { titulo: 'Semibrillante', nota: 'Fácil de limpiar', rx: 26, op: 0.45, nitido: true },
  { titulo: 'Brillante', nota: 'Muestra todo', rx: 18, op: 0.85, nitido: true },
]

export default function NivelesBrillo() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 140" role="img" aria-label="Niveles de brillo: mate, satinado, semibrillante y brillante">
      <defs>
        <radialGradient id="nb-g">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <clipPath id="nb-c"><rect width="100" height="84" rx="3" /></clipPath>
      </defs>
      {niveles.map((n, i) => (
        <g key={n.titulo} transform={`translate(${10 + i * 118} 10)`}>
          <g clipPath="url(#nb-c)">
            <rect width="100" height="84" fill="#7a4a22" />
            {[18, 38, 58, 76].map((y) => <path key={y} d={`M0 ${y} C30 ${y - 4} 70 ${y + 4} 100 ${y}`} fill="none" stroke="#5a3418" strokeWidth="2" />)}
            <ellipse cx="50" cy="40" rx={n.rx} ry={n.rx * 0.7} fill="url(#nb-g)" opacity={n.op} />
            {n.nitido && (
              <g opacity={n.op}>
                <rect x="40" y="30" width="8" height="12" fill="#fff" />
                <rect x="52" y="30" width="8" height="12" fill="#fff" />
              </g>
            )}
          </g>
          <text x="50" y="104" textAnchor="middle" className="fig-titulo">{n.titulo}</text>
          <text x="50" y="119" textAnchor="middle" className="fig-nota">{n.nota}</text>
        </g>
      ))}
    </svg>
  )
}

// Capas de un asiento tapizado suelto, separadas como en un despiece.
// Dibujo original, en sección.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }

const capas = [
  { titulo: 'Tela o cuero', nota: 'Se grapa por debajo', y: 36 },
  { titulo: 'Guata', nota: 'Suaviza las aristas', y: 70 },
  { titulo: 'Espuma', nota: 'Alta densidad', y: 104 },
  { titulo: 'Tablero', nota: 'Con agujeros para el aire', y: 138 },
]

export default function CapasTapizado() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 170" role="img" aria-label="Despiece en sección de un asiento tapizado: de arriba abajo, la tela o el cuero, la guata, la espuma y el tablero con agujeros">
      <path d="M40 54 V50 Q40 30 64 30 H266 Q290 30 290 50 V54" fill="none" stroke="#0f766e" strokeWidth="3" />
      <path d="M46 80 Q46 66 66 65 H264 Q284 66 284 80" fill="none" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
      <path d="M50 120 V108 Q50 94 70 94 H260 Q280 94 280 108 V120 Z" fill="#fde68a" stroke="#ca8a04" strokeWidth="1.2" />
      {[[80, 104], [120, 112], [170, 102], [215, 110], [255, 104]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="2" fill="none" stroke="#ca8a04" strokeWidth="0.8" />)}
      {[[50, 100], [106, 160], [166, 220], [226, 280]].map(([x0, x1]) => <rect key={x0} x={x0} y="132" width={x1 - x0} height="12" {...madera} />)}
      {capas.map(({ titulo, nota, y }) => (
        <g key={titulo}>
          <path d={`M294 ${y + 2} H304`} stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
          <text x="310" y={y} className="fig-titulo">{titulo}</text>
          <text x="310" y={y + 15} className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

// Dos baterías de la misma plataforma: igual voltaje, distinta capacidad.
// Dibujo original, en perspectiva.
function Bateria({ x, y, h, texto }) {
  const w = 100, dx = 30, dy = -20
  return (
    <g strokeLinejoin="round">
      <polygon points={`${x},${y} ${x + dx},${y + dy} ${x + w + dx},${y + dy} ${x + w},${y}`} fill="#4b5563" stroke="#111827" strokeWidth="1.2" />
      <polygon points={`${x + w},${y} ${x + w + dx},${y + dy} ${x + w + dx},${y + h + dy} ${x + w},${y + h}`} fill="#111827" stroke="#111827" strokeWidth="1.2" />
      <rect x={x} y={y} width={w} height={h} fill="#1f2937" stroke="#111827" strokeWidth="1.2" />
      <path d={`M${x + 22} ${y - 4} L${x + 40} ${y - 16} M${x + 62} ${y - 4} L${x + 80} ${y - 16}`} stroke="#9ca3af" strokeWidth="2" />
      {[0, 1, 2, 3].map((k) => <rect key={k} x={x + 8 + k * 9} y={y + h - 9} width="6" height="4" rx="1" fill={k < 3 ? '#22c55e' : '#374151'} />)}
      <text x={x + w / 2} y={y + h / 2 + 2} textAnchor="middle" className="fig-letra">{texto}</text>
    </g>
  )
}

export default function LeerBateria() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 170" role="img" aria-label="Dos baterías de 18 voltios: una compacta de 2,5 amperios-hora que guarda 45 vatios-hora y otra más alta de 5 amperios-hora que guarda 90 vatios-hora">
      <text x="240" y="16" textAnchor="middle" className="fig-nota">Energía (Wh) = voltaje (V) × capacidad (Ah)</text>
      <Bateria x={60} y={92} h={30} texto="18 V · 2,5 Ah" />
      <Bateria x={290} y={70} h={52} texto="18 V · 5 Ah" />
      <text x="125" y="146" textAnchor="middle" className="fig-titulo">45 Wh</text>
      <text x="125" y="161" textAnchor="middle" className="fig-nota">Compacta y liviana</text>
      <text x="355" y="146" textAnchor="middle" className="fig-titulo">90 Wh</text>
      <text x="355" y="161" textAnchor="middle" className="fig-nota">Dura el doble, pesa más</text>
    </svg>
  )
}

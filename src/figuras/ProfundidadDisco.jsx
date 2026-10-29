// Sierra circular portátil vista de costado: profundidad correcta del disco
// y causa del rechazo. Dibujo original y esquemático.
const TABLA = { y: 140, alto: 36 }

function Escena({ x, profundidad, titulo, nota, mal }) {
  const cy = TABLA.y - 30 // centro del disco, por encima de la base
  const r = 30 + TABLA.alto + profundidad
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x="0" y={TABLA.y} width="200" height={TABLA.alto} fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.2" />
      <rect x="-10" y={TABLA.y - 6} width="220" height="6" fill="#64748b" />
      <circle cx="100" cy={cy} r={r} fill="#cbd5e1" fillOpacity=".8" stroke="#334155" strokeWidth="1.4" />
      {Array.from({ length: 24 }, (_, i) => {
        const a = (i * 15 * Math.PI) / 180
        return <circle key={i} cx={100 + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r="2.2" fill="#334155" />
      })}
      <circle cx="100" cy={cy} r="6" fill="#334155" />
      <rect x="40" y={TABLA.y - 78} width="120" height="44" rx="8" fill="#f59e0b" fillOpacity=".85" stroke="#92400e" />
      <line x1="100" y1={TABLA.y + TABLA.alto} x2="100" y2={cy + r} stroke="#1d4ed8" strokeWidth="2" />
      <text x="100" y={cy + r + 16} textAnchor="middle" style={{ fill: '#1d4ed8' }} className="fig-titulo">{mal ? '≈ 25 mm' : '≈ 3 – 6 mm'}</text>
      <text x="100" y="246" textAnchor="middle" className="fig-titulo" style={{ fill: mal ? '#b91c1c' : '#15803d' }}>{titulo}</text>
      <text x="100" y="262" textAnchor="middle" className="fig-nota">{nota}</text>
    </g>
  )
}

export default function ProfundidadDisco() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 270" role="img" aria-label="Disco de sierra circular con la profundidad correcta y con demasiada profundidad">
      <defs>
        <marker id="disco-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      <Escena x={14} profundidad={8} titulo="✓ Un diente por debajo" nota="Menos dientes en el corte y menos riesgo" />
      <Escena x={250} profundidad={30} titulo="✗ Demasiado profundo" nota="Más dientes atrapados: más rechazo" mal />
    </svg>
  )
}

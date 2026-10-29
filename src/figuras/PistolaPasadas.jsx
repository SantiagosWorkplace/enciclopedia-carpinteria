// Técnica de pistola: recorrido paralelo a la pieza y pasadas solapadas.
// Dibujo original; a la izquierda de costado, a la derecha de frente.
function Pistola({ x }) {
  return (
    <g>
      <path d={`M${x} 76 L${x - 24} 146 H${x + 24} Z`} fill="#60a5fa" opacity="0.3" />
      <rect x={x - 8} y="34" width="16" height="16" rx="2" fill="#cbd5e1" stroke="#334155" strokeWidth="1.2" />
      <rect x={x - 12} y="50" width="24" height="14" rx="3" fill="#64748b" stroke="#334155" strokeWidth="1.2" />
      <rect x={x - 3} y="64" width="6" height="12" fill="#334155" />
    </g>
  )
}

const bandas = Array.from({ length: 6 }, (_, k) => 22 + k * 15)

export default function PistolaPasadas() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 200" role="img" aria-label="Pistola de pintar: recorrido paralelo a la pieza a distancia fija, y pasadas que se solapan a la mitad y empiezan fuera de la pieza">
      <defs>
        <marker id="pp-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#b45309" />
        </marker>
      </defs>

      <rect x="20" y="146" width="200" height="10" fill="#e9c88f" stroke="#7a4a22" strokeWidth="1.2" />
      {[50, 120, 190].map((x) => <Pistola key={x} x={x} />)}
      <path d="M30 24 H210" stroke="#b45309" strokeWidth="1.8" strokeDasharray="5 3" markerEnd="url(#pp-f)" />
      <text x="120" y="176" textAnchor="middle" className="fig-titulo">Paralela a la pieza</text>
      <text x="120" y="191" textAnchor="middle" className="fig-nota">Siempre a la misma distancia</text>

      {bandas.map((y) => <rect key={y} x="258" y={y} width="204" height="30" fill="#3b82f6" fillOpacity="0.16" stroke="#3b82f6" strokeOpacity="0.45" strokeWidth="0.8" />)}
      <rect x="280" y="38" width="160" height="78" fill="none" stroke="#7a4a22" strokeWidth="1.4" strokeDasharray="4 3" />
      {bandas.map((y, k) => (
        <path key={y} d={k % 2 ? `M454 ${y + 15} H266` : `M266 ${y + 15} H454`} stroke="#b45309" strokeWidth="1.4" markerEnd="url(#pp-f)" />
      ))}
      <text x="360" y="176" textAnchor="middle" className="fig-titulo">Solapar la mitad</text>
      <text x="360" y="191" textAnchor="middle" className="fig-nota">Empezar y terminar fuera de la pieza</text>
    </svg>
  )
}

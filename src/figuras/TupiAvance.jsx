// Tupí o mesa de fresar vista desde arriba: guía partida, giro de la
// herramienta y avance de la pieza contra el giro. Dibujo original.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const guia = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1.2 }

export default function TupiAvance() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 220" role="img" aria-label="Tupí vista desde arriba: la herramienta gira en sentido antihorario entre las dos mitades de la guía, y la pieza avanza de derecha a izquierda, contra el giro, apretada por un prensor de peine y empujada con un empujador">
      <defs>
        <marker id="ta-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
        </marker>
        <marker id="ta-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      <rect x="20" y="22" width="440" height="152" rx="4" fill="none" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="6 4" />
      <rect x="40" y="42" width="180" height="14" {...guia} />
      <rect x="260" y="42" width="180" height="14" {...guia} />
      <rect x="140" y="56" width="256" height="34" {...madera} />
      {[70, 78, 86].map((y) => <path key={y} d={`M146 ${y} H390`} stroke="#c9a06a" strokeWidth="0.9" />)}
      <circle cx="240" cy="56" r="17" fill="#cbd5e1" stroke="#334155" strokeWidth="1.2" />
      {[0, 120, 240].map((g) => <path key={g} d="M240 56 L240 39" transform={`rotate(${g} 240 56)`} stroke="#334155" strokeWidth="3" />)}
      <path d="M266 50 A26 26 0 0 0 214 50" fill="none" stroke="#dc2626" strokeWidth="2" markerEnd="url(#ta-g)" />
      <rect x="208" y="28" width="64" height="62" rx="4" fill="none" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" />
      <rect x="396" y="58" width="34" height="34" rx="3" fill="#0e7490" stroke="#164e63" strokeWidth="1.2" />
      <path d="M280 128 L296 92 H344 L328 128 Z" fill="#d9b277" stroke="#7a4a22" strokeWidth="1.2" />
      {[302, 310, 318, 326, 334].map((x) => <path key={x} d={`M${x} 92 L${x - 6} 106`} stroke="#7a4a22" strokeWidth="1" />)}
      <path d="M400 150 H190" stroke="#15803d" strokeWidth="2.5" markerEnd="url(#ta-f)" />
      <text x="130" y="36" textAnchor="middle" className="fig-titulo">Guía de salida</text>
      <text x="350" y="36" textAnchor="middle" className="fig-titulo">Guía de entrada</text>
      <text x="240" y="16" textAnchor="middle" className="fig-nota">Herramienta bajo su protector</text>
      <text x="304" y="142" textAnchor="middle" className="fig-nota">Prensor de peine</text>
      <text x="413" y="110" textAnchor="middle" className="fig-nota">Empujador</text>
      <text x="240" y="196" textAnchor="middle" className="fig-titulo">Avance contra el giro</text>
      <text x="240" y="211" textAnchor="middle" className="fig-nota">La herramienta gira en sentido antihorario; la pieza va de derecha a izquierda</text>
    </svg>
  )
}

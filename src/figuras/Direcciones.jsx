// Bloque de madera con las tres direcciones de contracción. Dibujo original.
const MEDULA = { x: 40, y: 250 }
const anillos = Array.from({ length: 12 }, (_, i) => 60 + i * 17)

export default function Direcciones() {
  return (
    <svg viewBox="0 0 440 250" role="img" aria-label="Bloque de madera con las direcciones tangencial, radial y longitudinal">
      <defs>
        <clipPath id="dir-testa"><rect x="60" y="90" width="140" height="120" /></clipPath>
        <marker id="dir-punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="context-stroke" />
        </marker>
      </defs>

      {/* Cara superior y lateral: veta longitudinal */}
      <path d="M60 90 L200 90 L300 40 L160 40 Z" fill="#dcae6e" stroke="#8a5a2b" strokeWidth="1.5" />
      {Array.from({ length: 9 }, (_, k) => {
        const x = 70 + k * 15
        return <path key={k} d={`M${x} 90 Q${x + 50} ${62 + (k % 3) * 3} ${x + 100} 40`} stroke="#b4824a" strokeWidth="1" fill="none" />
      })}
      <path d="M200 90 L300 40 L300 160 L200 210 Z" fill="#c8945a" stroke="#8a5a2b" strokeWidth="1.5" />
      {Array.from({ length: 9 }, (_, k) => (
        <path key={k} d={`M200 ${100 + k * 12} L300 ${50 + k * 12}`} stroke="#a87741" strokeWidth="1" />
      ))}

      {/* Testa con anillos de crecimiento */}
      <rect x="60" y="90" width="140" height="120" fill="#e8c18a" />
      <g clipPath="url(#dir-testa)">
        {anillos.map((r, i) => (
          <circle key={r} cx={MEDULA.x} cy={MEDULA.y} r={r} fill="none" stroke="#9a6a35" strokeWidth={i % 3 === 0 ? 2 : 1} />
        ))}
      </g>
      <rect x="60" y="90" width="140" height="120" fill="none" stroke="#8a5a2b" strokeWidth="1.5" />

      {/* Flechas: tangencial y radial en la testa, longitudinal en el lateral */}
      <path d="M108 112 L180 184" stroke="#c2410c" strokeWidth="3" fill="none" markerStart="url(#dir-punta)" markerEnd="url(#dir-punta)" />
      <path d="M112 178 L176 114" stroke="#1d4ed8" strokeWidth="3" fill="none" markerStart="url(#dir-punta)" markerEnd="url(#dir-punta)" />
      <path d="M214 172 L286 136" stroke="#15803d" strokeWidth="3" fill="none" markerStart="url(#dir-punta)" markerEnd="url(#dir-punta)" />

      <g className="fig-leyenda">
        <circle cx="322" cy="62" r="6" fill="#c2410c" />
        <text x="334" y="66" className="fig-titulo">Tangencial</text>
        <text x="334" y="83">≈ 5 – 10 %</text>
        <circle cx="322" cy="112" r="6" fill="#1d4ed8" />
        <text x="334" y="116" className="fig-titulo">Radial</text>
        <text x="334" y="133">≈ 2 – 6 %</text>
        <circle cx="322" cy="162" r="6" fill="#15803d" />
        <text x="334" y="166" className="fig-titulo">Longitudinal</text>
        <text x="334" y="183">≈ 0,1 – 0,3 %</text>
      </g>
      <text x="62" y="232" className="fig-nota">Médula hacia abajo a la izquierda</text>
    </svg>
  )
}

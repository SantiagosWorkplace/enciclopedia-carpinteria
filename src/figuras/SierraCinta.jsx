// Sierra de cinta vista de frente, con sus partes. Dibujo original y esquemático.
const metal = { fill: '#cbd5e1', stroke: '#475569', strokeWidth: 1.4 }

const etiquetas = [
  { p: [150, 52], tx: 300, ty: 40, titulo: 'Volante superior', nota: 'Tensa y centra la hoja' },
  { p: [194, 120], tx: 300, ty: 88, titulo: 'Hoja', nota: 'Baja hacia la mesa' },
  { p: [190, 150], tx: 300, ty: 136, titulo: 'Guía superior', nota: 'A 5 – 10 mm de la pieza' },
  { p: [140, 186], tx: 300, ty: 184, titulo: 'Mesa', nota: 'Se inclina para biseles' },
  { p: [150, 246], tx: 300, ty: 232, titulo: 'Volante inferior', nota: 'Motriz' },
]

export default function SierraCinta() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 300" role="img" aria-label="Sierra de cinta de frente con volantes, hoja, guía superior y mesa">
      {/* Bastidor en C */}
      <path d="M60 20 H200 V60 H90 V230 H200 V286 H60 Z" fill="#94a3b8" stroke="#334155" strokeWidth="1.4" />
      <circle cx="150" cy="52" r="46" {...metal} />
      <circle cx="150" cy="246" r="46" {...metal} />
      <circle cx="150" cy="52" r="6" fill="#475569" />
      <circle cx="150" cy="246" r="6" fill="#475569" />
      {/* Hoja: tramo de corte a la derecha */}
      <line x1="196" y1="52" x2="196" y2="246" stroke="#1f2937" strokeWidth="2" />
      <line x1="104" y1="52" x2="104" y2="246" stroke="#1f2937" strokeWidth="2" opacity=".35" />
      <path d="M194 72 v8 M194 96 v8 M194 120 v8" stroke="#dc2626" strokeWidth="2" markerEnd="url(#cinta-punta)" />
      {/* Guía superior y mesa */}
      <rect x="186" y="134" width="22" height="22" rx="2" fill="#475569" />
      <rect x="196" y="100" width="6" height="34" fill="#64748b" />
      <rect x="110" y="180" width="170" height="10" fill="#64748b" stroke="#334155" />
      <rect x="196" y="164" width="60" height="16" fill="#e2b77d" stroke="#7a4a22" />
      <defs>
        <marker id="cinta-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      {etiquetas.map((e) => (
        <g key={e.titulo}>
          <polyline points={`${e.p[0]},${e.p[1]} 288,${e.ty - 4} 296,${e.ty - 4}`} fill="none" stroke="#2b1d12" strokeWidth=".8" />
          <circle cx={e.p[0]} cy={e.p[1]} r="2.5" fill="#2b1d12" stroke="#fff" />
          <text x={e.tx} y={e.ty} className="fig-titulo">{e.titulo}</text>
          <text x={e.tx} y={e.ty + 13} className="fig-nota">{e.nota}</text>
        </g>
      ))}
    </svg>
  )
}

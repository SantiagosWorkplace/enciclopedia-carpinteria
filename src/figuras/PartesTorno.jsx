// Torno para madera de frente, con una pieza entre puntas. Dibujo original.
const metal = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1.4 }
const EJE = 96

const etiquetas = [
  { p: [70, 70], tx: 20, ty: 210, titulo: 'Cabezal', nota: 'Motor y husillo' },
  { p: [112, EJE], tx: 100, ty: 210, titulo: 'Punta de arrastre' },
  { p: [250, 134], tx: 236, ty: 210, titulo: 'Apoyo', nota: 'A 3 – 6 mm de la pieza' },
  { p: [352, EJE], tx: 330, ty: 24, titulo: 'Punta giratoria' },
  { p: [410, 90], tx: 360, ty: 210, titulo: 'Contrapunto' },
]

export default function PartesTorno() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 250" role="img" aria-label="Torno para madera con cabezal, punta de arrastre, pieza, apoyo, punta giratoria, contrapunto y bancada">
      <rect x="20" y="160" width="440" height="22" {...metal} />
      <rect x="30" y="40" width="80" height="120" rx="6" {...metal} />
      <path d="M110 88 L120 96 L110 104 Z" fill="#334155" />
      <rect x="370" y="70" width="70" height="90" rx="6" {...metal} />
      <path d="M370 90 H352 L344 96 L352 102 H370 Z" fill="#334155" />
      {/* Pieza torneándose: cilindro con un perfil */}
      <path d={`M120 76 H180 Q200 66 220 76 H300 Q320 86 344 80 V112 Q320 106 300 116 H220 Q200 126 180 116 H120 Z`} fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.3" />
      {[150, 250, 290].map((x) => <line key={x} x1={x} y1="78" x2={x} y2="114" stroke="#c9975c" strokeWidth=".8" />)}
      <line x1="112" y1={EJE} x2="360" y2={EJE} stroke="#dc2626" strokeDasharray="8 3 2 3" />
      {/* Apoyo de herramienta y gubia */}
      <rect x="236" y="134" width="12" height="26" fill="#64748b" />
      <rect x="200" y="124" width="90" height="10" rx="2" fill="#475569" />
      <path d="M262 124 L232 104 L236 100 L270 120 Z" fill="#e2e8f0" stroke="#334155" />
      <text x="300" y="176" className="fig-titulo" style={{ fill: '#1f2937' }}>Bancada</text>
      {etiquetas.map((e) => (
        <g key={e.titulo}>
          <line x1={e.p[0]} y1={e.p[1]} x2={e.tx + 20} y2={e.ty < 100 ? e.ty + 6 : e.ty - 14} stroke="#2b1d12" strokeWidth=".8" />
          <circle cx={e.p[0]} cy={e.p[1]} r="2.5" fill="#2b1d12" stroke="#fff" />
          <text x={e.tx} y={e.ty} className="fig-titulo">{e.titulo}</text>
          {e.nota && <text x={e.tx} y={e.ty + 13} className="fig-nota">{e.nota}</text>}
        </g>
      ))}
    </svg>
  )
}

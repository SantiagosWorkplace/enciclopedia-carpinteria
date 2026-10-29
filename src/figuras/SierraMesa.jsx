// Sierra de mesa vista desde arriba durante un corte al hilo. Dibujo original.
const MESA = { x: 60, y: 30, w: 300, h: 220 }
const HOJA = { x: 240, y: 120, largo: 70 }

const etiquetas = [
  { p: [HOJA.x, HOJA.y - HOJA.largo / 2 - 20], tx: 380, ty: 60, titulo: 'Cuchillo divisor', nota: 'Detrás de la hoja' },
  { p: [HOJA.x, HOJA.y + 8], tx: 380, ty: 104, titulo: 'Hoja' },
  { p: [288, 180], tx: 380, ty: 136, titulo: 'Guía paralela' },
  { p: [262, 214], tx: 380, ty: 172, titulo: 'Empujador' },
]

export default function SierraMesa() {
  return (
    <svg className="fig-leyenda" viewBox="0 -4 480 294" role="img" aria-label="Sierra de mesa vista desde arriba con hoja, cuchillo divisor, guía paralela, empujador y zona de rechazo">
      <defs>
        <marker id="smesa-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
        </marker>
      </defs>
      <rect x={MESA.x} y={MESA.y} width={MESA.w} height={MESA.h} rx="6" fill="#cbd5e1" stroke="#475569" strokeWidth="1.4" />
      {/* Zona de rechazo: delante de la hoja, del lado del operario, en línea con ella */}
      <rect x={HOJA.x - 14} y={HOJA.y + HOJA.largo / 2} width="28" height={MESA.y + MESA.h - HOJA.y - HOJA.largo / 2 + 30} fill="#dc2626" opacity=".14" />
      {/* Ranuras de la guía de ingletes */}
      {[100, 330].map((x) => <rect key={x} x={x - 4} y={MESA.y} width="8" height={MESA.h} fill="#94a3b8" />)}
      <rect x="84" y="50" width="52" height="16" rx="3" fill="#f59e0b" stroke="#92400e" />

      {/* Pieza entre la hoja y la guía */}
      <rect x="196" y="40" width="84" height="196" fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.2" opacity=".92" />
      <line x1={HOJA.x} y1="40" x2={HOJA.x} y2={HOJA.y - HOJA.largo / 2} stroke="#7a4a22" strokeWidth="3" />
      <rect x="282" y={MESA.y + 4} width="12" height={MESA.h - 8} fill="#475569" />

      {/* Hoja y cuchillo divisor */}
      <rect x={HOJA.x - 1.5} y={HOJA.y - HOJA.largo / 2} width="3" height={HOJA.largo} fill="#1f2937" />
      <rect x={HOJA.x - 1.5} y={HOJA.y - HOJA.largo / 2 - 38} width="3" height="34" rx="1.5" fill="#64748b" />

      {/* Empujador sobre la pieza */}
      <path d="M248 236 L248 196 L274 196 L276 236 Z" fill="#16a34a" stroke="#14532d" />
      <path d="M262 270 V246" stroke="#15803d" strokeWidth="3" fill="none" markerEnd="url(#smesa-punta)" />
      <text x="270" y="266" className="fig-nota">avance</text>

      <text x={HOJA.x - 18} y={MESA.y + MESA.h + 16} textAnchor="end" className="fig-nota" style={{ fill: '#b91c1c' }}>Zona de rechazo:</text>
      <text x={HOJA.x - 18} y={MESA.y + MESA.h + 29} textAnchor="end" className="fig-nota" style={{ fill: '#b91c1c' }}>no te pares aquí</text>
      <circle cx="40" cy="272" r="10" fill="#94a3b8" stroke="#334155" />
      <text x="56" y="276" className="fig-nota">Operario</text>

      <line x1="110" y1="58" x2="96" y2="26" stroke="#2b1d12" strokeWidth=".8" />
      <circle cx="110" cy="58" r="2.5" fill="#2b1d12" stroke="#fff" />
      <text x="60" y="20" className="fig-titulo">Guía de ingletes</text>
      {etiquetas.map((e) => (
        <g key={e.titulo}>
          <polyline points={`${e.p[0]},${e.p[1]} 368,${e.ty - 4} 376,${e.ty - 4}`} fill="none" stroke="#2b1d12" strokeWidth=".8" />
          <circle cx={e.p[0]} cy={e.p[1]} r="2.5" fill="#2b1d12" stroke="#fff" />
          <text x={e.tx} y={e.ty} className="fig-titulo">{e.titulo}</text>
          {e.nota && <text x={e.tx} y={e.ty + 13} className="fig-nota">{e.nota}</text>}
        </g>
      ))}
    </svg>
  )
}

// Cepillo de banco metálico en sección, con sus partes. Dibujo original.
// El cepillo avanza hacia la izquierda; la cuchilla apoya a 45° con el bisel hacia abajo.
const SUELA = 200
const E = { x: 232, y: SUELA + 1 } // filo de la cuchilla, apenas por debajo de la suela
const L = 150 // largo de la cuchilla
const d = Math.SQRT1_2
const sobre = (t, n) => [E.x + t * d + n * d, E.y - t * d + n * d] // t: a lo largo; n: hacia la rana (+) o hacia arriba (−)
const pts = (lista) => lista.map((p) => p.join(',')).join(' ')

const etiquetas = [
  { p: [92, 168], tx: 30, ty: 30, titulo: 'Pomo' },
  { p: sobre(32, 1.5), tx: 90, ty: 30, titulo: 'Cuchilla', nota: 'Bisel hacia abajo' },
  { p: sobre(58, -5), tx: 160, ty: 70, titulo: 'Contrahierro', nota: 'Rompe la viruta' },
  { p: sobre(120, -9), tx: 250, ty: 24, titulo: 'Palanca de cierre' },
  { p: [392, 110], tx: 390, ty: 40, titulo: 'Empuñadura' },
  { p: [140, 196], tx: 30, ty: 236, titulo: 'Suela' },
  { p: [232, 196], tx: 130, ty: 236, titulo: 'Boca' },
  { p: [292, 168], tx: 250, ty: 236, titulo: 'Rana', nota: 'Asiento a 45°' },
  { p: [334, 158], tx: 370, ty: 236, titulo: 'Rueda de ajuste' },
]

export default function PartesCepillo() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 262" role="img" aria-label="Cepillo de banco en sección con pomo, palanca, contrahierro, cuchilla, boca, suela, rana, rueda de ajuste y empuñadura">
      {/* Cuerpo: suela y laterales */}
      <path d={`M30 ${SUELA} L430 ${SUELA} L430 ${SUELA - 26} L60 ${SUELA - 26} Q34 ${SUELA - 26} 30 ${SUELA - 10} Z`} fill="#94a3b8" stroke="#334155" strokeWidth="1.4" />
      <rect x="226" y={SUELA - 26} width="8" height="26" fill="#fff" />
      {/* Rana */}
      <polygon points={pts([sobre(10, 4), sobre(95, 4), [318, SUELA - 26], [246, SUELA - 26]])} fill="#64748b" stroke="#1f2937" strokeWidth="1.2" />
      {/* Cuchilla, contrahierro y palanca */}
      <polygon points={pts([sobre(0, 0), sobre(L, 0), sobre(L, 4), sobre(0, 4)])} fill="#e2e8f0" stroke="#1f2937" strokeWidth="1.2" />
      <polygon points={pts([sobre(2, 0), sobre(6, -5), sobre(L - 10, -5), sobre(L - 10, 0)])} fill="#cbd5e1" stroke="#1f2937" strokeWidth="1.2" />
      <polygon points={pts([sobre(40, -5), sobre(46, -12), sobre(128, -12), sobre(134, -5)])} fill="#9ca3af" stroke="#1f2937" strokeWidth="1.2" />
      <polygon points={pts([sobre(112, -12), sobre(130, -12), sobre(126, -22)])} fill="#475569" stroke="#1f2937" />
      <circle cx="334" cy="158" r="9" fill="#d4a24c" stroke="#7c5a1c" strokeWidth="1.4" />
      {/* Pomo y empuñadura de madera */}
      <path d={`M70 ${SUELA - 26} Q66 140 92 134 Q118 140 114 ${SUELA - 26} Z`} fill="#b45309" stroke="#7a3a08" strokeWidth="1.4" />
      <path d={`M352 ${SUELA - 26} L372 96 Q380 70 404 74 Q418 80 410 96 L404 104 Q396 96 392 108 L404 ${SUELA - 26} Z`} fill="#b45309" stroke="#7a3a08" strokeWidth="1.4" />

      {etiquetas.map((e) => (
        <g key={e.titulo}>
          <line x1={e.p[0]} y1={e.p[1]} x2={e.tx + 20} y2={e.ty < 150 ? e.ty + (e.nota ? 18 : 5) : e.ty - 14} stroke="#2b1d12" strokeWidth=".8" />
          <circle cx={e.p[0]} cy={e.p[1]} r="2.5" fill="#2b1d12" stroke="#fff" />
          <text x={e.tx} y={e.ty} className="fig-titulo">{e.titulo}</text>
          {e.nota && <text x={e.tx} y={e.ty + 13} className="fig-nota">{e.nota}</text>}
        </g>
      ))}
    </svg>
  )
}

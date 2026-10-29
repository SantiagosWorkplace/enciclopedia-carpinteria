// Banco de carpintero de frente, con tornillo de pecho, tornillo de cola,
// agujeros para perros y un gato. Dibujo original y esquemático.
const madera = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.4 }
const oscura = { fill: '#c98f55', stroke: '#7a4a22', strokeWidth: 1.4 }
const metal = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1.2 }
const PISO = 256
const TAPA = 92

const etiquetas = [
  { p: [86, 104], tx: 20, ty: 30, titulo: 'Tornillo de pecho' },
  { p: [210, TAPA - 2], tx: 170, ty: 30, titulo: 'Agujeros para perros', nota: 'Ø 19 – 20 mm' },
  { p: [416, 104], tx: 360, ty: 30, titulo: 'Tornillo de cola' },
  { p: [300, 74], tx: 360, ty: 66, titulo: 'Gato' },
  { p: [240, 220], tx: 300, ty: 230, titulo: 'Travesaños y estante', nota: 'Dan peso y rigidez' },
]

export default function BancoTrabajo() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 270" role="img" aria-label="Banco de carpintero de frente con tornillo de pecho, tornillo de cola, agujeros para perros, gato y estante">
      <rect x="0" y={PISO} width="480" height="10" fill="#e7d8c2" />
      {/* Patas, travesaños y estante */}
      {[70, 380].map((x) => <rect key={x} x={x} y={TAPA + 22} width="34" height={PISO - TAPA - 22} {...oscura} />)}
      <rect x="104" y="150" width="276" height="16" {...oscura} />
      <rect x="104" y="214" width="276" height="10" {...oscura} />
      {/* Tapa gruesa */}
      <rect x="40" y={TAPA} width="400" height="22" {...madera} />
      {[150, 180, 210, 240, 270, 300, 330].map((x) => <rect key={x} x={x - 3} y={TAPA} width="6" height="22" fill="#7a4a22" opacity=".55" />)}
      {/* Tornillo de pecho a la izquierda */}
      <rect x="40" y="114" width="70" height="38" {...madera} />
      <rect x="20" y="126" width="22" height="6" {...metal} />
      <rect x="4" y="118" width="16" height="22" rx="3" {...metal} />
      {/* Tornillo de cola a la derecha, con su perro */}
      <rect x="400" y={TAPA} width="56" height="34" {...madera} />
      <rect x="452" y="104" width="14" height="6" {...metal} />
      <rect x="466" y="96" width="10" height="22" rx="3" {...metal} />
      <rect x="418" y={TAPA - 10} width="6" height="12" fill="#475569" />
      <rect x="147" y={TAPA - 10} width="6" height="12" fill="#475569" />
      {/* Gato sujetando una pieza */}
      <rect x="250" y={TAPA - 14} width="90" height="14" fill="#f1d4a4" stroke="#7a4a22" />
      <path d={`M300 ${TAPA + 22} V${TAPA - 22} Q300 ${TAPA - 34} 316 ${TAPA - 30} L334 ${TAPA - 16}`} fill="none" stroke="#334155" strokeWidth="5" strokeLinecap="round" />

      {etiquetas.map((e) => (
        <g key={e.titulo}>
          <line x1={e.p[0]} y1={e.p[1]} x2={e.tx + 20} y2={e.ty < 150 ? e.ty + (e.nota ? 18 : 5) : e.ty - 14} stroke="#2b1d12" strokeWidth=".8" />
          <circle cx={e.p[0]} cy={e.p[1]} r="2.5" fill="#2b1d12" stroke="#fff" />
          <text x={e.tx} y={e.ty} className="fig-titulo">{e.titulo}</text>
          {e.nota && <text x={e.tx} y={e.ty + 13} className="fig-nota">{e.nota}</text>}
        </g>
      ))}
      <text x="20" y="246" className="fig-nota">Alto ≈ a la muñeca con el brazo colgando</text>
    </svg>
  )
}

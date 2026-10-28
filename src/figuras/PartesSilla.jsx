// Partes y ángulos de una silla de comedor, vista de costado.
// Dibujo original, a escala: 2 px por centímetro.
const PISO = 240
const y = (cm) => PISO - cm * 2

// Línea central de la pata trasera, que sigue hacia arriba como montante del respaldo.
const TRASERA = [[106, PISO], [120, y(41)], [98, y(85)]]
const pieza = (puntos, ancho) => (
  <g strokeLinejoin="round" strokeLinecap="round" fill="none">
    <polyline points={puntos.join(' ')} stroke="#7a4a22" strokeWidth={ancho + 2.5} />
    <polyline points={puntos.join(' ')} stroke="#e2b77d" strokeWidth={ancho} />
  </g>
)

const etiquetas = [
  { x: 104, y: y(78), ty: 36, titulo: 'Respaldo', nota: '≈ 100° con el asiento' },
  { x: 170, y: y(44), ty: 78, titulo: 'Asiento', nota: 'Cae 3 – 5° hacia atrás' },
  { x: 165, y: y(38), ty: 120, titulo: 'Faldón', nota: 'Une las patas bajo el asiento' },
  { x: 196, y: y(25), ty: 162, titulo: 'Pata delantera', nota: '' },
  { x: 112, y: y(20), ty: 204, titulo: 'Pata trasera', nota: 'Sigue como montante' },
  { x: 150, y: y(15), ty: 246, titulo: 'Chambrana', nota: 'Travesaño de refuerzo' },
]

export default function PartesSilla() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 268" role="img" aria-label="Silla de costado con respaldo, patas, asiento, faldón y chambrana">
      <defs>
        <marker id="silla-tope" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0 5 H10" stroke="#1d4ed8" strokeWidth="1.5" />
        </marker>
      </defs>
      <rect x="0" y={PISO} width="262" height="12" fill="#e7d8c2" />

      {pieza([[110, y(15)], [196, y(15)]], 5)}
      {pieza([[196, PISO], [196, y(41)]], 8)}
      {pieza(TRASERA, 8)}
      {pieza([[100, y(80)], [96, y(70)]], 13)}
      <path d={`M118 ${y(40)} L196 ${y(42)} L196 ${y(37)} L120 ${y(35)} Z`} fill="#d29b5e" stroke="#7a4a22" strokeWidth="1.2" />
      <path d={`M112 ${y(42)} L204 ${y(45)} L204 ${y(42.5)} L112 ${y(39.5)} Z`} fill="#c98a4e" stroke="#7a4a22" strokeWidth="1.2" />

      {/* Inclinación del asiento y ángulo del respaldo */}
      <line x1="112" y1={y(42)} x2="214" y2={y(42)} stroke="#2b1d12" strokeDasharray="3 3" />
      <path d={`M138 ${y(42.6)} A26 26 0 0 0 113 ${y(54)}`} fill="none" stroke="#dc2626" strokeWidth="1.5" />

      <line x1="226" y1={PISO} x2="226" y2={y(45)} stroke="#1d4ed8" strokeWidth="1.2" markerStart="url(#silla-tope)" markerEnd="url(#silla-tope)" />
      <text x="232" y={y(22)} className="fig-titulo" style={{ fill: '#1d4ed8' }}>43 – 46</text>
      <line x1="112" y1={y(50) - 4} x2="204" y2={y(50) - 4} stroke="#1d4ed8" strokeWidth="1.2" markerStart="url(#silla-tope)" markerEnd="url(#silla-tope)" />
      <text x="158" y={y(50) - 9} textAnchor="middle" className="fig-titulo" style={{ fill: '#1d4ed8' }}>40 – 45</text>

      {etiquetas.map((e) => (
        <g key={e.titulo}>
          <polyline points={`${e.x},${e.y} 300,${e.ty - 4} 308,${e.ty - 4}`} fill="none" stroke="#2b1d12" strokeWidth=".9" />
          <circle cx={e.x} cy={e.y} r="2.6" fill="#2b1d12" stroke="#fff" />
          <text x="314" y={e.ty} className="fig-titulo">{e.titulo}</text>
          {e.nota && <text x="314" y={e.ty + 14} className="fig-nota">{e.nota}</text>}
        </g>
      ))}
      <text x="12" y="20" className="fig-nota">Medidas en centímetros</text>
    </svg>
  )
}

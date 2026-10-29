// Chapeado a mano: recorrido del martillo de chapear y corte doble para unir dos
// hojas. Dibujo original y esquemático.
const soporte = { fill: '#e9d3a8', stroke: '#7a5a32', strokeWidth: 1 }
const hojaA = { fill: '#c9884f', stroke: '#5b3416', strokeWidth: 1 }
const hojaB = { fill: '#a86b35', stroke: '#5b3416', strokeWidth: 1, fillOpacity: 0.9 }
const rojo = '#dc2626'

const zigzag = (x0, dir) => {
  const p = [`M${x0} 30`]
  for (let i = 1; i <= 6; i++) p.push(`L${x0 + dir * i * 15} ${i % 2 ? 110 : 30}`)
  return p.join(' ')
}

export default function ChapeadoMano() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 196" role="img" aria-label="Recorrido en zigzag del martillo de chapear desde el centro y los tres pasos del corte doble">
      <defs>
        <marker id="cm-punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill={rojo} />
        </marker>
      </defs>

      {/* Recorrido del martillo */}
      <rect x="20" y="20" width="200" height="100" {...soporte} />
      <rect x="24" y="24" width="192" height="92" fill="#c9884f" fillOpacity="0.55" stroke="#5b3416" />
      <path d="M120 22 V118" stroke="#5b3416" strokeWidth="0.8" strokeDasharray="3 2" />
      <path d={zigzag(120, 1)} fill="none" stroke={rojo} strokeWidth="1.6" markerEnd="url(#cm-punta)" />
      <path d={zigzag(120, -1)} fill="none" stroke={rojo} strokeWidth="1.6" markerEnd="url(#cm-punta)" />
      <text x="120" y="142" textAnchor="middle" className="fig-titulo">Desde el centro hacia afuera</text>
      <text x="120" y="157" textAnchor="middle" className="fig-nota">En zigzag, con la veta: el aire y la cola</text>
      <text x="120" y="170" textAnchor="middle" className="fig-nota">sobrante salen por los bordes</text>

      {/* Corte doble */}
      <g transform="translate(250 0)">
        {[
          { y: 24, t: '1. Superponer las hojas' },
          { y: 66, t: '2. Cortar las dos juntas' },
          { y: 108, t: '3. Retirar las dos tiras' },
        ].map(({ y, t }, i) => (
          <g key={t}>
            <text x="0" y={y - 4} className="fig-nota">{t}</text>
            {i < 2 && <rect x="0" y={y} width="120" height="22" {...hojaA} />}
            {i < 2 && <rect x="100" y={y} width="120" height="22" {...hojaB} />}
            {i === 1 && <rect x="104" y={y - 1} width="8" height="26" fill="#cbd5e1" stroke="#475569" />}
            {i === 1 && <path d={`M112 ${y} V${y + 24}`} stroke={rojo} strokeWidth="1.6" strokeDasharray="4 2" />}
            {i === 2 && (
              <>
                <rect x="0" y={y} width="112" height="22" {...hojaA} />
                <rect x="112" y={y} width="108" height="22" {...hojaB} />
                <rect x="96" y={y + 32} width="12" height="6" {...hojaB} />
                <rect x="116" y={y + 32} width="8" height="6" {...hojaA} />
              </>
            )}
          </g>
        ))}
        <text x="110" y="170" textAnchor="middle" className="fig-nota">El mismo corte forma los dos bordes:</text>
        <text x="110" y="183" textAnchor="middle" className="fig-nota">encajan sin luz aunque no sea recto</text>
      </g>
    </svg>
  )
}

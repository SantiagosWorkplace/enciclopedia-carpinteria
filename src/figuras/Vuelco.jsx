// Por qué vuelca un mueble alto y cómo se evita. Dibujo original.
// Estantería de 30 cm de fondo y 180 cm de alto, vista de costado (1,1 px por cm).
const PISO = 262
const F = 33 // fondo
const A = 198 // alto

const madera = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.4 }
const flecha = (color) => ({ stroke: color, strokeWidth: 3, fill: 'none', markerEnd: `url(#vue-${color.slice(1)})` })

function Estanteria({ x }) {
  return (
    <g>
      <rect x={x} y={PISO - A} width={F} height={A} {...madera} />
      {[1, 2, 3, 4].map((k) => <line key={k} x1={x} y1={PISO - (A * k) / 5} x2={x + F} y2={PISO - (A * k) / 5} stroke="#7a4a22" />)}
    </g>
  )
}

export default function Vuelco() {
  const xa = 90
  const xb = 330
  const cg = { x: xa + F / 2, y: PISO - A / 2 }
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 300" role="img" aria-label="Estantería alta que vuelca al tirar de arriba, y la misma estantería anclada a la pared">
      <defs>
        {['#dc2626', '#1d4ed8'].map((c) => (
          <marker key={c} id={`vue-${c.slice(1)}`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill={c} />
          </marker>
        ))}
      </defs>
      <rect x="0" y={PISO} width="480" height="10" fill="#d6c3a5" />

      {/* a. Sin anclar: el giro se produce sobre la arista delantera */}
      <g transform={`rotate(14 ${xa + F} ${PISO})`} opacity=".35">
        <Estanteria x={xa} />
      </g>
      <Estanteria x={xa} />
      <circle cx={cg.x} cy={cg.y} r="6" fill="#fff" stroke="#2b1d12" strokeWidth="2" />
      <path d={`M${cg.x} ${cg.y - 6} A6 6 0 0 1 ${cg.x + 6} ${cg.y} L${cg.x} ${cg.y} Z M${cg.x} ${cg.y + 6} A6 6 0 0 1 ${cg.x - 6} ${cg.y} L${cg.x} ${cg.y} Z`} fill="#2b1d12" />
      <line x1={cg.x} y1={cg.y + 8} x2={cg.x} y2={cg.y + 60} {...flecha('#1d4ed8')} />
      <line x1={xa + F + 4} y1={PISO - A + 12} x2={xa + F + 52} y2={PISO - A + 12} {...flecha('#dc2626')} />
      <circle cx={xa + F} cy={PISO} r="5" fill="#dc2626" />
      <text x={cg.x - 10} y={cg.y - 4} textAnchor="end" className="fig-nota">Centro de</text>
      <text x={cg.x - 10} y={cg.y + 9} textAnchor="end" className="fig-nota">gravedad</text>
      <text x={xa + F + 8} y={PISO - A + 4} className="fig-nota">Tirón o niño trepando</text>
      <text x={xa + F + 8} y={PISO - 8} className="fig-nota">Gira sobre esta arista</text>
      <text x="120" y="290" textAnchor="middle" className="fig-titulo">a. Sin anclar: vuelca</text>

      {/* b. Anclada a la pared */}
      <rect x={xb - 14} y="40" width="10" height={PISO - 40} fill="#cbd5e1" stroke="#64748b" />
      <Estanteria x={xb} />
      <path d={`M${xb - 4} ${PISO - A + 6} H${xb + 14} V${PISO - A + 12}`} fill="none" stroke="#1f2937" strokeWidth="4" />
      <circle cx={xb + 50} cy={PISO - A + 10} r="13" fill="#16a34a" />
      <path d={`M${xb + 44} ${PISO - A + 10} l4 5 l9 -10`} stroke="#fff" strokeWidth="3" fill="none" />
      <text x={xb + 40} y={PISO - A + 44} className="fig-nota">Escuadra o cinta</text>
      <text x={xb + 40} y={PISO - A + 57} className="fig-nota">atornillada a la pared</text>
      <text x={xb + 40} y={PISO - 60} className="fig-nota">Lo pesado, abajo</text>
      <text x="360" y="290" textAnchor="middle" className="fig-titulo">b. Anclada: no vuelca</text>
    </svg>
  )
}

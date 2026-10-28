// Una pieza escalonada con un agujero, en perspectiva y en tres vistas
// según el sistema europeo (primer diedro). Dibujo original.
// Pieza de 600 × 400 × 400 mm; escala 1,8 px por cada 10 mm.
const S = 1.8
const visible = { stroke: '#1f2937', strokeWidth: 2, fill: 'none', strokeLinejoin: 'round' }
const oculta = { stroke: '#1f2937', strokeWidth: 1.2, strokeDasharray: '5 3' }
const eje = { stroke: '#dc2626', strokeWidth: 1, strokeDasharray: '10 3 2 3' }
const cota = { stroke: '#1d4ed8', strokeWidth: 1, markerStart: 'url(#vis-punta)', markerEnd: 'url(#vis-punta)' }

// Alzado y perfil comparten la línea de base; planta y alzado comparten las x.
const X = (x) => 50 + x * S
const Y = (h) => 120 - h * S
const U = (u) => 200 + u * S // perfil: 0 = atrás, 40 = adelante
const V = (v) => 150 + v * S // planta: 0 = atrás, 40 = adelante

const OX = 282
const OY = 292
const P = (x, y, z) => `${OX + S * x + 0.5 * S * y},${OY - S * z - 0.5 * S * y}`
const cara = (pts, fill) => <polygon points={pts.map((p) => P(...p)).join(' ')} fill={fill} {...{ stroke: '#1f2937', strokeWidth: 1.4, strokeLinejoin: 'round' }} />

function Cota({ x1, y1, x2, y2, texto, tx, ty }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} {...cota} />
      <text x={tx} y={ty} textAnchor="middle" style={{ fill: '#1d4ed8' }}>{texto}</text>
    </g>
  )
}

export default function Vistas() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 304" role="img" aria-label="Pieza escalonada en perspectiva y en alzado, planta y perfil izquierdo">
      <defs>
        <marker id="vis-punta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 1 L10 5 L0 9 Z" fill="#1d4ed8" />
        </marker>
      </defs>

      {/* Alzado */}
      <rect x={X(0)} y={Y(40)} width={60 * S} height={40 * S} {...visible} />
      <line x1={X(0)} y1={Y(20)} x2={X(60)} y2={Y(20)} {...visible} />
      {[25, 35].map((x) => <line key={x} x1={X(x)} y1={Y(0)} x2={X(x)} y2={Y(20)} {...oculta} />)}
      <line x1={X(30)} y1={Y(-3)} x2={X(30)} y2={Y(23)} {...eje} />
      <text x={X(30)} y="138" textAnchor="middle" className="fig-titulo">Alzado</text>

      {/* Perfil izquierdo, a la derecha del alzado */}
      <polygon points={[[0, 0], [40, 0], [40, 20], [20, 20], [20, 40], [0, 40]].map(([u, h]) => `${U(u)},${Y(h)}`).join(' ')} {...visible} />
      {[25, 35].map((u) => <line key={u} x1={U(u)} y1={Y(0)} x2={U(u)} y2={Y(20)} {...oculta} />)}
      <line x1={U(30)} y1={Y(-3)} x2={U(30)} y2={Y(23)} {...eje} />
      <text x={U(20)} y="138" textAnchor="middle" className="fig-titulo">Perfil izquierdo</text>

      {/* Planta, debajo del alzado */}
      <rect x={X(0)} y={V(0)} width={60 * S} height={40 * S} {...visible} />
      <line x1={X(0)} y1={V(20)} x2={X(60)} y2={V(20)} {...visible} />
      <circle cx={X(30)} cy={V(30)} r={5 * S} {...visible} />
      <line x1={X(30)} y1={V(23)} x2={X(30)} y2={V(37)} {...eje} />
      <line x1={X(23)} y1={V(30)} x2={X(37)} y2={V(30)} {...eje} />
      <text x={X(30)} y="240" textAnchor="middle" className="fig-titulo">Planta</text>

      <Cota x1={X(0)} y1="38" x2={X(60)} y2="38" texto="600" tx={X(30)} ty="32" />
      <Cota x1={U(0)} y1="38" x2={U(40)} y2="38" texto="400" tx={U(20)} ty="32" />
      <Cota x1="36" y1={Y(0)} x2="36" y2={Y(40)} texto="400" tx="22" ty={Y(20) + 4} />
      <line x1={X(30) + 7} y1={V(30) + 7} x2={X(48)} y2={V(48)} stroke="#1d4ed8" />
      <text x={X(48) + 2} y={V(48) + 10} style={{ fill: '#1d4ed8' }}>Ø 100</text>

      {/* Perspectiva */}
      {cara([[60, 0, 0], [60, 40, 0], [60, 40, 40], [60, 20, 40], [60, 20, 20], [60, 0, 20]], '#c98f55')}
      {cara([[0, 0, 0], [60, 0, 0], [60, 0, 20], [0, 0, 20]], '#e2b77d')}
      {cara([[0, 0, 20], [60, 0, 20], [60, 20, 20], [0, 20, 20]], '#f1d4a4')}
      {cara([[0, 20, 20], [60, 20, 20], [60, 20, 40], [0, 20, 40]], '#e2b77d')}
      {cara([[0, 20, 40], [60, 20, 40], [60, 40, 40], [0, 40, 40]], '#f1d4a4')}
      <ellipse cx="0" cy="0" rx="5" ry="5" fill="#5b3a1e" transform={`matrix(${S} 0 ${0.5 * S} ${-0.5 * S} ${OX + S * 30 + 0.5 * S * 10} ${OY - S * 20 - 0.5 * S * 10})`} />
      <text x="372" y="168" textAnchor="middle" className="fig-titulo">Perspectiva</text>
      <text x="306" y={OY + 10} className="fig-nota">frente</text>

      {/* Tipos de línea */}
      <g transform="translate(24 262)">
        <line x1="0" y1="0" x2="34" y2="0" {...visible} /><text x="40" y="4" className="fig-nota">Arista visible</text>
        <line x1="120" y1="0" x2="154" y2="0" {...oculta} /><text x="160" y="4" className="fig-nota">Arista oculta</text>
        <line x1="0" y1="20" x2="34" y2="20" {...eje} /><text x="40" y="24" className="fig-nota">Eje de simetría</text>
        <line x1="120" y1="20" x2="154" y2="20" {...cota} /><text x="160" y="24" className="fig-nota">Cota (mm)</text>
      </g>
    </svg>
  )
}

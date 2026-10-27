// Tres formas de aserrar un tronco, vistas desde la testa. Dibujo original.
const R = 66
const CY = 92
const anillos = Array.from({ length: 8 }, (_, i) => 8 + i * 8)
const TANG = '#f3b47c'
const RAD = '#a9c6ee'
const MEDULA = '#b8b0a6'
const corte = { stroke: '#1f2937', strokeWidth: 1.3 }

function Tronco({ id, cx, relleno, children }) {
  return (
    <g>
      <circle cx={cx} cy={CY} r={R + 6} fill="#5a3a24" />
      <clipPath id={id}><circle cx={cx} cy={CY} r={R} /></clipPath>
      <g clipPath={`url(#${id})`}>{relleno}</g>
      {anillos.map((r) => <circle key={r} cx={cx} cy={CY} r={r} fill="none" stroke="#8a5a2b" strokeWidth="1" opacity=".55" />)}
      <circle cx={cx} cy={CY} r="2.5" fill="#4a2c17" />
      <g clipPath={`url(#${id})`}>{children}</g>
    </g>
  )
}

// a. En paralelo: cortes paralelos que atraviesan todo el tronco.
function EnParalelo({ cx }) {
  const bordes = [-70, -49, -35, -21, -7, 7, 21, 35, 49, 70]
  return (
    <Tronco id="ase-a" cx={cx} relleno={bordes.slice(0, -1).map((x, i) => (
        <rect key={x} x={cx + x} y={CY - R} width={bordes[i + 1] - x} height={2 * R}
          fill={Math.abs(x + (bordes[i + 1] - x) / 2) < 15 ? RAD : TANG} />
      ))}>
      {bordes.slice(1, -1).map((x) => <line key={x} x1={cx + x} y1={CY - R} x2={cx + x} y2={CY + R} {...corte} />)}
    </Tronco>
  )
}

// b. En vuelta: se sacan tablas de cada cara girando el tronco; queda una viga con la médula.
function EnVuelta({ cx }) {
  const capas = [30, 42, 54]
  return (
    <Tronco id="ase-b" cx={cx} relleno={<>
      <rect x={cx - R} y={CY - R} width={2 * R} height={2 * R} fill={TANG} />
      <rect x={cx - 30} y={CY - 30} width="60" height="60" fill={MEDULA} />
    </>}>
      {capas.map((d) => (
        <g key={d}>
          <line x1={cx - R} y1={CY - d} x2={cx + R} y2={CY - d} {...corte} />
          <line x1={cx - R} y1={CY + d} x2={cx + R} y2={CY + d} {...corte} />
          <line x1={cx - d} y1={CY - 30} x2={cx - d} y2={CY + 30} {...corte} />
          <line x1={cx + d} y1={CY - 30} x2={cx + d} y2={CY + 30} {...corte} />
        </g>
      ))}
    </Tronco>
  )
}

// c. Radial: el tronco se divide en cuartos y cada cuarto se sierra alternando las dos caras planas.
function Radial({ cx }) {
  const escalon = [1, 2, 3, 4].map((k) => k * 12)
  return (
    <Tronco id="ase-c" cx={cx} relleno={<rect x={cx - R} y={CY - R} width={2 * R} height={2 * R} fill={RAD} />}>
      <line x1={cx - R} y1={CY} x2={cx + R} y2={CY} {...corte} strokeWidth="2" />
      <line x1={cx} y1={CY - R} x2={cx} y2={CY + R} {...corte} strokeWidth="2" />
      {[0, 90, 180, 270].map((giro) => (
        <g key={giro} transform={`rotate(${giro} ${cx} ${CY})`}>
          {escalon.map((s) => (
            <g key={s}>
              <line x1={cx + s} y1={CY - s + 12} x2={cx + s} y2={CY - R} {...corte} />
              <line x1={cx + s} y1={CY - s} x2={cx + R} y2={CY - s} {...corte} />
            </g>
          ))}
        </g>
      ))}
    </Tronco>
  )
}

const leyenda = [
  [TANG, 'Tablas tangenciales'],
  [RAD, 'Tablas radiales'],
  [MEDULA, 'Pieza con médula'],
]

export default function CortesAserrado() {
  return (
    <svg viewBox="0 0 480 222" role="img" aria-label="Aserrado en paralelo, en vuelta y radial vistos desde la testa">
      <EnParalelo cx={85} />
      <EnVuelta cx={240} />
      <Radial cx={395} />
      <g className="fig-leyenda">
        <text x="85" y="184" textAnchor="middle" className="fig-titulo">a. En paralelo</text>
        <text x="240" y="184" textAnchor="middle" className="fig-titulo">b. En vuelta</text>
        <text x="395" y="184" textAnchor="middle" className="fig-titulo">c. Radial (al cuarto)</text>
        {leyenda.map(([color, texto], i) => (
          <g key={texto} transform={`translate(${[30, 200, 340][i]} 204)`}>
            <rect width="14" height="14" rx="3" fill={color} stroke="#1f2937" strokeWidth=".8" />
            <text x="20" y="11.5">{texto}</text>
          </g>
        ))}
      </g>
    </svg>
  )
}

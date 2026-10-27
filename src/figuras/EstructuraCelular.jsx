// Corte transversal ampliado: conífera, frondosa de porosidad en anillo y
// frondosa de porosidad difusa. Dibujo original y esquemático; la dirección
// radial es vertical (la corteza queda hacia abajo).
const W = 140
const H = 136
const X = [10, 165, 320]

// Generador pseudoaleatorio con semilla: el dibujo sale siempre igual.
const azar = (semilla) => () => (semilla = (semilla * 16807) % 2147483647) / 2147483647

// Alto de las células a lo largo de un anillo: grandes en la madera temprana, aplastadas en la tardía.
const ALTOS = [9, 9, 9, 8, 8, 7, 6, 5, 4, 3]
const ANILLO = ALTOS.reduce((a, b) => a + b, 0)

function Conifera() {
  const celdas = []
  for (let anillo = 0; anillo < 2; anillo++) {
    let y = anillo * ANILLO
    ALTOS.forEach((h, f) => {
      for (let c = 0; c < 14; c++) {
        celdas.push(
          <rect key={`${anillo}-${f}-${c}`} x={c * 10} y={y} width="10" height={h} fill={h <= 5 ? '#dcb57c' : '#f4e2bd'} stroke="#9b6a3b" strokeWidth={0.7 + (9 - h) * 0.2} />
        )
      }
      y += h
    })
  }
  return (
    <>
      <rect width={W} height={H} fill="#f4e2bd" />
      {celdas}
      {[40, 100].map((x) => <rect key={x} x={x - 1.5} y="0" width="3" height={H} fill="#b5763f" />)}
      <circle cx="75" cy="58" r="6" fill="#f7cf5e" stroke="#9b6a3b" strokeWidth="1.2" />
      <circle cx="75" cy="58" r="8.5" fill="none" stroke="#c99a5e" strokeWidth="2" strokeDasharray="2 1.5" />
    </>
  )
}

function PorosidadAnillo() {
  const r = azar(7)
  const poros = []
  for (let anillo = 0; anillo < 2; anillo++) {
    const y0 = anillo * ANILLO
    for (let x = 6; x < W; x += 13) poros.push({ x: x + r() * 4, y: y0 + 8 + r() * 2, rx: 5 + r() * 1.5, ry: 6 + r() * 1.5 })
    for (let x = 12; x < W; x += 17) poros.push({ x: x + r() * 5, y: y0 + 20 + r() * 3, rx: 3 + r(), ry: 3.5 + r() })
    for (let i = 0; i < 22; i++) poros.push({ x: r() * W, y: y0 + 30 + r() * 34, rx: 1.3, ry: 1.5 })
  }
  return (
    <>
      <rect width={W} height={H} fill="#e8c897" />
      {[20, 70, 125].map((x) => <line key={x} x1={x} y1="0" x2={x} y2={H} stroke="#b78450" strokeWidth=".8" />)}
      {[44, 98].map((x) => <rect key={x} x={x - 2.5} y="0" width="5" height={H} fill="#c89a62" />)}
      <line x1="0" y1={ANILLO} x2={W} y2={ANILLO} stroke="#7c4a24" strokeWidth="2.4" />
      {poros.map((p, i) => <ellipse key={i} cx={p.x} cy={p.y} rx={p.rx} ry={p.ry} fill="#fdf3df" stroke="#6b4426" strokeWidth="1.1" />)}
    </>
  )
}

function PorosidadDifusa() {
  const r = azar(23)
  const poros = Array.from({ length: 80 }, () => ({ x: 4 + r() * (W - 8), y: 3 + r() * (H - 6), d: 1.8 + r() * 0.9 }))
  return (
    <>
      <rect width={W} height={H} fill="#efd6aa" />
      {[12, 30, 52, 77, 96, 118, 133].map((x) => <line key={x} x1={x} y1="0" x2={x} y2={H} stroke="#bd8f5c" strokeWidth=".8" />)}
      <line x1="0" y1={ANILLO} x2={W} y2={ANILLO} stroke="#a8743f" strokeWidth="1.6" />
      {poros.map((p, i) => <ellipse key={i} cx={p.x} cy={p.y} rx={p.d} ry={p.d * 1.15} fill="#fdf3df" stroke="#7a4f2c" strokeWidth=".9" />)}
    </>
  )
}

const paneles = [
  { C: Conifera, titulo: 'Conífera', nota: 'Traqueidas en filas · pino' },
  { C: PorosidadAnillo, titulo: 'Porosidad en anillo', nota: 'Frondosa · roble, fresno' },
  { C: PorosidadDifusa, titulo: 'Porosidad difusa', nota: 'Frondosa · haya, arce' },
]

export default function EstructuraCelular() {
  return (
    <svg viewBox="0 0 470 192" role="img" aria-label="Estructura celular ampliada de una conífera y de dos frondosas">
      <defs>
        <clipPath id="cel-panel"><rect width={W} height={H} rx="8" /></clipPath>
      </defs>
      {paneles.map(({ C, titulo, nota }, i) => (
        <g key={titulo} transform={`translate(${X[i]} 4)`}>
          <g clipPath="url(#cel-panel)"><C /></g>
          <rect width={W} height={H} rx="8" fill="none" stroke="#7a4f2c" strokeWidth="1.2" />
          <g className="fig-leyenda">
            <text x={W / 2} y={H + 22} textAnchor="middle" className="fig-titulo">{titulo}</text>
            <text x={W / 2} y={H + 38} textAnchor="middle" className="fig-nota">{nota}</text>
          </g>
        </g>
      ))}
    </svg>
  )
}

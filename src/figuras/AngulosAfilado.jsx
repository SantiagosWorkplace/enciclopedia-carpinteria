// Filo de un formón o cuchilla de cepillo, muy ampliado: espalda, bisel
// primario a 25°, microbisel a 30° y rebaba. Dibujo original.
const ESPALDA = 70
const CARA = 120
const PUNTA = { x: 380, y: ESPALDA }
const tan = (g) => Math.tan((g * Math.PI) / 180)

// Microbisel de 8 px de alto; el bisel primario sigue desde ahí hasta la cara inferior.
const micro = { x: PUNTA.x - 8 / tan(30), y: ESPALDA + 8 }
const pie = { x: micro.x - (CARA - micro.y) / tan(25), y: CARA }

export default function AngulosAfilado() {
  const arco = (cx, cy, r, g) => `M${cx + r} ${cy} A${r} ${r} 0 0 0 ${cx + r * Math.cos((g * Math.PI) / 180)} ${cy - r * Math.sin((g * Math.PI) / 180)}`
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 200" role="img" aria-label="Filo ampliado con espalda plana, bisel de 25 grados, microbisel de 30 grados y rebaba">
      <polygon points={`40,${ESPALDA} ${PUNTA.x},${PUNTA.y} ${micro.x},${micro.y} ${pie.x},${pie.y} 40,${CARA}`} fill="#cbd5e1" stroke="#1f2937" strokeWidth="1.6" strokeLinejoin="round" />
      <line x1="40" y1={ESPALDA + 2} x2={PUNTA.x - 4} y2={ESPALDA + 2} stroke="#f8fafc" strokeWidth="2" />
      <path d={`M${PUNTA.x} ${PUNTA.y} q5 -2 6 -9`} fill="none" stroke="#dc2626" strokeWidth="2" />

      <line x1={pie.x} y1={CARA} x2={pie.x + 80} y2={CARA} stroke="#64748b" strokeDasharray="4 3" />
      <path d={arco(pie.x, CARA, 46, 25)} fill="none" stroke="#c2410c" strokeWidth="1.6" />
      <text x={pie.x + 52} y={CARA - 8} className="fig-titulo" style={{ fill: '#c2410c' }}>25°</text>

      <line x1={PUNTA.x + 8} y1={ESPALDA + 30} x2={micro.x + 4} y2={micro.y - 2} stroke="#2b1d12" strokeWidth=".8" />
      <text x={PUNTA.x + 10} y={ESPALDA + 36} className="fig-titulo">Microbisel 30°</text>
      <text x={PUNTA.x + 10} y={ESPALDA + 50} className="fig-nota">Unas pasadas</text>
      <text x={PUNTA.x + 10} y={ESPALDA + 62} className="fig-nota">en la piedra fina</text>

      <line x1={PUNTA.x + 4} y1={ESPALDA - 8} x2={PUNTA.x + 30} y2="30" stroke="#2b1d12" strokeWidth=".8" />
      <text x={PUNTA.x + 22} y="24" className="fig-titulo" style={{ fill: '#dc2626' }}>Rebaba</text>

      <text x="60" y={ESPALDA - 12} className="fig-titulo">Espalda: plana y pulida</text>
      <text x="60" y={CARA + 22} className="fig-titulo">Bisel primario</text>
      <text x="60" y={CARA + 36} className="fig-nota">Se hace en la piedra gruesa o media</text>
      <text x="60" y="186" className="fig-nota">Ángulos exagerados; el filo real mide pocas décimas de milímetro.</text>
    </svg>
  )
}

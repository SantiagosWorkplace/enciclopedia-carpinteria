// Cómo comprobar una escuadra: se traza una línea, se da vuelta la escuadra
// y se traza otra desde el mismo punto. Dibujo original; el error está exagerado.
const CANTO = 200
const X0 = 220
const ERROR = 7 // desvío exagerado en el extremo de la hoja

function Escuadra({ espejo }) {
  // Hoja de 140 px desviada ERROR px; cabo de madera apoyado en el canto.
  const s = espejo ? -1 : 1
  return (
    <g>
      <polygon points={`${X0},${CANTO} ${X0 + s * 26},${CANTO} ${X0 + s * 26 + s * ERROR},${CANTO - 150} ${X0 + s * ERROR},${CANTO - 150}`} fill="#cbd5e1" stroke="#334155" strokeWidth="1.2" opacity=".85" />
      <rect x={espejo ? X0 - 86 : X0 - 4} y={CANTO} width="90" height="20" fill="#b45309" stroke="#7a3a08" />
    </g>
  )
}

export default function ComprobarEscuadra() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 268" role="img" aria-label="Comprobación de una escuadra trazando dos líneas, una con la escuadra dada vuelta">
      <rect x="40" y="40" width="400" height={CANTO - 40} fill="#f1d9b0" stroke="#7a4a22" strokeWidth="1.4" />
      <text x="48" y="58" className="fig-nota">Tabla con un canto bien recto</text>
      <g opacity=".55"><Escuadra /></g>
      <g opacity=".55"><Escuadra espejo /></g>
      <line x1={X0} y1={CANTO} x2={X0 + ERROR} y2={CANTO - 150} stroke="#1d4ed8" strokeWidth="2" />
      <line x1={X0} y1={CANTO} x2={X0 - ERROR} y2={CANTO - 150} stroke="#dc2626" strokeWidth="2" />
      <line x1={X0} y1={CANTO} x2={X0} y2={CANTO - 150} stroke="#2b1d12" strokeDasharray="3 3" />
      <line x1={X0 - ERROR} y1={CANTO - 158} x2={X0 + ERROR} y2={CANTO - 158} stroke="#2b1d12" />
      <text x={X0 + 14} y={CANTO - 154} className="fig-titulo">Separación = 2 × error</text>

      <text x={X0 + 40} y={CANTO - 100} className="fig-titulo" style={{ fill: '#1d4ed8' }}>1. Primera línea</text>
      <text x={X0 - 40} y={CANTO - 100} textAnchor="end" className="fig-titulo" style={{ fill: '#dc2626' }}>2. Escuadra dada vuelta</text>
      <text x="240" y="244" textAnchor="middle" className="fig-nota">Si las dos líneas coinciden, la escuadra está bien.</text>
      <text x="240" y="258" textAnchor="middle" className="fig-nota">Si se abren, la escuadra tiene la mitad de esa separación de error.</text>
    </svg>
  )
}

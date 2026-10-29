// Caja de vapor casera en sección longitudinal. Dibujo original y esquemático.
const caja = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2 }
const etiqueta = (x, y, x2, y2, texto, ancla = 'start') => (
  <g key={texto}>
    <path d={`M${x} ${y} L${x2} ${y2}`} stroke="#6e5a48" strokeWidth="0.8" />
    <text x={x2 + (ancla === 'end' ? -3 : 3)} y={y2 + 4} textAnchor={ancla} className="fig-nota">{texto}</text>
  </g>
)

export default function CajaVapor() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 250" role="img" aria-label="Caja de vapor en sección con generador, varillas de apoyo, piezas, termómetro, salida de vapor, desagüe y tapa">
      {/* Caja: paredes de tablero exterior y hueco interior */}
      <rect x="70" y="70" width="340" height="70" {...caja} />
      <rect x="80" y="80" width="320" height="50" fill="#fff7ed" stroke="#7a4a22" strokeWidth="0.8" />
      {/* Tapa con bisagra en el extremo derecho */}
      <rect x="410" y="70" width="8" height="70" fill="#c98f55" stroke="#7a4a22" strokeWidth="1.2" />
      <circle cx="414" cy="74" r="2.5" fill="#334155" />
      {/* Varillas y piezas */}
      {[110, 180, 250, 320, 380].map((x) => (
        <circle key={x} cx={x} cy="114" r="4" fill="#a86b35" stroke="#5b3416" />
      ))}
      <rect x="92" y="102" width="300" height="8" fill="#f1d4a4" stroke="#7a4a22" />
      {/* Patas */}
      <path d="M100 140 L94 200 M380 140 L386 200" stroke="#7a4a22" strokeWidth="5" />
      {/* Generador y manguera */}
      <rect x="18" y="170" width="44" height="34" rx="6" fill="#94a3b8" stroke="#334155" />
      <rect x="28" y="162" width="24" height="8" fill="#64748b" stroke="#334155" />
      <path d="M40 162 C40 140 60 150 90 150 V130" fill="none" stroke="#1f2937" strokeWidth="4" />
      {/* Vapor que sale arriba */}
      <rect x="388" y="66" width="8" height="5" fill="#fff7ed" stroke="#7a4a22" strokeWidth="0.6" />
      <path d="M392 62 C386 54 398 48 392 40 M398 60 C394 54 402 50 398 44" fill="none" stroke="#94a3b8" strokeWidth="1.4" />
      {/* Desagüe */}
      <rect x="128" y="138" width="5" height="4" fill="#fff7ed" stroke="#7a4a22" strokeWidth="0.6" />
      <path d="M130.5 146 q-2 4 0 6 q2 -2 0 -6" fill="#60a5fa" />
      {/* Termómetro */}
      <path d="M240 58 V92" stroke="#334155" strokeWidth="3" />
      <circle cx="240" cy="94" r="4" fill={'#dc2626'} />

      {etiqueta(40, 186, 26, 226, 'Generador de vapor')}
      {etiqueta(90, 146, 150, 160, 'Entrada de vapor abajo')}
      {etiqueta(130, 150, 186, 192, 'Desagüe en el lado más bajo')}
      {etiqueta(320, 117, 330, 176, 'Varillas de madera dura')}
      {etiqueta(300, 105, 290, 46, 'Pieza sobre las varillas')}
      {etiqueta(240, 58, 216, 30, 'Termómetro', 'end')}
      {etiqueta(392, 40, 384, 20, 'Salida de vapor', 'end')}
      {etiqueta(418, 110, 440, 130, 'Tapa')}
      <text x="240" y="244" textAnchor="middle" className="fig-nota">Pendiente leve hacia el desagüe. Dentro, el vapor a presión atmosférica llega a ≈ 100 °C.</text>
    </svg>
  )
}

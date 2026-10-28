// Partes de una mesa y tres formas de fijar el tablero dejando que se mueva.
// Dibujo original. A la izquierda, alzado a 2,4 px por cm; a la derecha, detalles en sección.
const PISO = 252
const madera = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const tablero = { fill: '#d29b5e', stroke: '#7a4a22', strokeWidth: 1.2 }
const metal = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1 }
const tornillo = { stroke: '#334155', strokeWidth: 2.4, strokeLinecap: 'round' }
const flechaDoble = { stroke: '#dc2626', strokeWidth: 1.8, markerStart: 'url(#mesa-punta)', markerEnd: 'url(#mesa-punta)' }

// Cada detalle: faldón en sección (vertical) y tablero encima.
function Detalle({ x, titulo, children }) {
  return (
    <g transform={`translate(${x} 92)`}>
      <rect x="0" y="16" width="70" height="12" {...tablero} />
      <rect x="18" y="28" width="12" height="56" {...madera} />
      {children}
      <line x1="44" y1="98" x2="66" y2="98" {...flechaDoble} />
      {titulo.split(' / ').map((linea, i) => (
        <text key={linea} x="35" y={120 + i * 15} textAnchor="middle" className="fig-titulo">{linea}</text>
      ))}
    </g>
  )
}

export default function PartesMesa() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 274" role="img" aria-label="Mesa con tablero, faldón y patas, y tres fijaciones del tablero: botón, herraje en ocho y agujero ovalado">
      <defs>
        <marker id="mesa-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      <rect x="0" y={PISO} width="232" height="10" fill="#e7d8c2" />

      {/* Alzado */}
      <rect x="18" y="72" width="200" height="6" {...tablero} />
      <rect x="38" y="78" width="12" height={PISO - 78} {...madera} />
      <rect x="186" y="78" width="12" height={PISO - 78} {...madera} />
      <rect x="50" y="78" width="136" height="24" {...madera} />
      <rect x="43" y="82" width="7" height="16" fill="none" stroke="#7a4a22" strokeDasharray="3 2" />
      <rect x="186" y="82" width="7" height="16" fill="none" stroke="#7a4a22" strokeDasharray="3 2" />
      <line x1="60" y1="62" x2="176" y2="62" {...flechaDoble} />
      <text x="118" y="56" textAnchor="middle" className="fig-nota">El tablero se mueve a lo ancho</text>
      <text x="118" y="94" textAnchor="middle" className="fig-nota">Faldón</text>
      <text x="56" y="180" className="fig-nota">Pata</text>
      <text x="56" y="120" className="fig-nota">Espiga en caja</text>
      <line x1="56" y1="116" x2="47" y2="98" stroke="#2b1d12" strokeWidth=".8" />
      <text x="118" y="30" textAnchor="middle" className="fig-titulo">Estructura de una mesa</text>

      {/* Detalles */}
      <text x="365" y="30" textAnchor="middle" className="fig-titulo">Fijar el tablero</text>
      <text x="365" y="46" textAnchor="middle" className="fig-nota">Sección por el faldón</text>

      <Detalle x={248} titulo="Botón">
        <rect x="27" y="35" width="3" height="6" fill="#fff" stroke="#7a4a22" strokeWidth=".8" />
        <path d="M27 36 H38 V28 H60 V44 H38 V40 H27 Z" fill="#c98a4e" stroke="#7a4a22" strokeWidth="1" />
        <line x1="50" y1="46" x2="50" y2="20" {...tornillo} />
      </Detalle>
      <Detalle x={328} titulo="Herraje / en ocho">
        <rect x="20" y="28" width="26" height="3" rx="1.5" {...metal} />
        <line x1="25" y1="28" x2="25" y2="46" {...tornillo} />
        <line x1="40" y1="31" x2="40" y2="20" {...tornillo} />
      </Detalle>
      <Detalle x={408} titulo="Agujero / ovalado">
        <rect x="30" y="28" width="22" height="14" fill="#c98a4e" stroke="#7a4a22" strokeWidth="1" />
        <rect x="37" y="28" width="9" height="14" fill="#fff" stroke="#7a4a22" strokeWidth=".8" />
        <rect x="35" y="42" width="13" height="2.5" {...metal} />
        <line x1="41.5" y1="46" x2="41.5" y2="20" {...tornillo} />
      </Detalle>
      <text x="365" y="262" textAnchor="middle" className="fig-nota">Flechas rojas: sentido del movimiento</text>
    </svg>
  )
}

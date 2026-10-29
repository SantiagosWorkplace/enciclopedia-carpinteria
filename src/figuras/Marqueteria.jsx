// Marquetería: método de ventana, corte en paquete inclinado y sombreado con
// arena caliente. Dibujo original y esquemático.
const fondo = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1 }
const pieza = { fill: '#8a5025', stroke: '#4a2a12', strokeWidth: 1 }
const rojo = '#dc2626'
const hoja = 'M40 70 C40 40 70 26 96 26 C96 52 72 70 40 70 Z'

export default function Marqueteria() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 190" role="img" aria-label="Método de ventana, corte en paquete inclinado y sombreado con arena caliente">
      <defs>
        <marker id="mq-punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill={rojo} />
        </marker>
        <linearGradient id="mq-sombra" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3f2410" />
          <stop offset="0.45" stopColor="#8a5025" />
          <stop offset="1" stopColor="#c9884f" />
        </linearGradient>
      </defs>

      {/* Ventana */}
      <g>
        <rect x="14" y="14" width="110" height="86" {...fondo} />
        <path d={hoja} fill="#fffaf2" stroke="#7a4a22" strokeWidth="1" />
        <path d={hoja} transform="translate(68 48) scale(1.14) translate(-68 -48)" fill="none" stroke="#4a2a12" strokeWidth="1" strokeDasharray="3 2" />
        <text x="72" y="122" textAnchor="middle" className="fig-titulo">Método de ventana</text>
        <text x="72" y="137" textAnchor="middle" className="fig-nota">Se corta el hueco,</text>
        <text x="72" y="150" textAnchor="middle" className="fig-nota">se calca en la pieza</text>
        <text x="72" y="163" textAnchor="middle" className="fig-nota">y se corta por la línea</text>
      </g>

      {/* Corte en paquete inclinado */}
      <g transform="translate(160 0)">
        <rect x="10" y="40" width="140" height="8" {...pieza} />
        <rect x="10" y="48" width="140" height="8" {...fondo} />
        <path d="M82 34 L74 62" stroke={rojo} strokeWidth="1.6" strokeDasharray="4 2" />
        <path d="M80 66 V76" stroke={rojo} strokeWidth="1.4" markerEnd="url(#mq-punta)" />
        <path d="M10 82 H78.3 L76 90 H10 Z" {...pieza} />
        <path d="M78.3 82 H150 V90 H76 Z" {...fondo} />
        <text x="80" y="122" textAnchor="middle" className="fig-titulo">Corte en paquete</text>
        <text x="80" y="137" textAnchor="middle" className="fig-nota">Dos chapas juntas, sierra</text>
        <text x="80" y="150" textAnchor="middle" className="fig-nota">inclinada: la de arriba</text>
        <text x="80" y="163" textAnchor="middle" className="fig-nota">tapa el ancho del corte</text>
      </g>

      {/* Sombreado */}
      <g transform="translate(320 0)">
        <path d="M24 70 H136 L128 100 H32 Z" fill="#94a3b8" stroke="#334155" strokeWidth="1.2" />
        <path d="M28 72 H132 L130 80 H30 Z" fill="#e7c98f" />
        <path d="M70 30 L66 74 L84 74 Z" fill="url(#mq-sombra)" stroke="#4a2a12" strokeWidth="0.8" transform="rotate(-8 75 52)" />
        <path d="M82 18 L74 40 M90 20 L80 42" stroke="#475569" strokeWidth="2.2" />
        <text x="80" y="122" textAnchor="middle" className="fig-titulo">Sombreado con arena</text>
        <text x="80" y="137" textAnchor="middle" className="fig-nota">El borde se hunde unos</text>
        <text x="80" y="150" textAnchor="middle" className="fig-nota">segundos en arena caliente</text>
        <text x="80" y="163" textAnchor="middle" className="fig-nota">y se tuesta: da volumen</text>
      </g>
    </svg>
  )
}

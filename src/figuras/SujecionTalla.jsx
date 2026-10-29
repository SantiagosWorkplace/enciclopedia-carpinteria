// Tres formas de sujetar una talla: tornillo de tallista, rótula y tablero con
// topes y cuñas. Dibujo original; las dos primeras de costado, la tercera de planta.
const banco = { fill: '#c08a4f', stroke: '#7a4a22', strokeWidth: 1 }
const pieza = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const tope = { fill: '#9a6234', stroke: '#5a3418', strokeWidth: 1 }
const acero = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1.2 }

function Rosca() {
  const d = ['M80 62']
  for (let y = 64; y <= 94; y += 4) d.push(`L${y % 8 ? 85 : 75} ${y}`)
  return <path d={d.join(' ')} fill="none" stroke="#334155" strokeWidth="1.4" />
}

export default function SujecionTalla() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 190" role="img" aria-label="Tornillo de tallista, rótula de tallista y tablero con topes y cuñas">
      <g>
        <path d="M44 96 V62 Q80 30 116 62 V96 Z" {...pieza} />
        <Rosca />
        <rect x="10" y="96" width="64" height="24" {...banco} />
        <rect x="86" y="96" width="64" height="24" {...banco} />
        <rect x="77" y="96" width="6" height="52" {...acero} />
        <rect x="66" y="120" width="28" height="4" {...acero} />
        <rect x="73" y="124" width="14" height="9" {...acero} />
        <ellipse cx="65" cy="128" rx="8" ry="4" {...acero} />
        <ellipse cx="95" cy="128" rx="8" ry="4" {...acero} />
        <text x="80" y="168" textAnchor="middle" className="fig-titulo">Tornillo de tallista</text>
        <text x="80" y="182" textAnchor="middle" className="fig-nota">Aprieta desde abajo</text>
      </g>

      <g transform="translate(160 0)">
        <rect x="10" y="120" width="140" height="20" {...banco} />
        <rect x="50" y="108" width="60" height="12" fill="#64748b" stroke="#334155" strokeWidth="1" />
        <rect x="74" y="80" width="12" height="28" {...acero} />
        <path d="M86 84 L116 98" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
        <circle cx="118" cy="99" r="4" fill="#334155" />
        <g transform="rotate(-20 80 74)">
          <rect x="76" y="58" width="8" height="10" {...acero} />
          <rect x="48" y="52" width="64" height="6" fill="#64748b" stroke="#334155" strokeWidth="1" />
          <rect x="56" y="22" width="48" height="30" {...pieza} />
        </g>
        <circle cx="80" cy="74" r="11" {...acero} />
        <text x="80" y="168" textAnchor="middle" className="fig-titulo">Rótula de tallista</text>
        <text x="80" y="182" textAnchor="middle" className="fig-nota">Gira e inclina la pieza</text>
      </g>

      <g transform="translate(320 0)">
        <rect x="6" y="6" width="148" height="130" rx="2" fill="#ead7b2" stroke="#7a4a22" strokeWidth="1" />
        <rect x="14" y="14" width="10" height="104" {...tope} />
        <rect x="24" y="14" width="110" height="10" {...tope} />
        <rect x="134" y="14" width="10" height="114" {...tope} />
        <rect x="14" y="118" width="120" height="10" {...tope} />
        <rect x="24" y="24" width="86" height="78" {...pieza} />
        <path d="M38 64 Q66 32 96 62 Q66 92 38 64 Z M42 64 H92" fill="none" stroke="#7a4a22" strokeWidth="1.2" />
        <path d="M111 34 H133 L111 92 Z" {...tope} fill="#c08a4f" />
        <path d="M133 34 V92 H111 Z" {...tope} fill="#b07a40" />
        <path d="M34 103 H100 L34 117 Z" {...tope} fill="#c08a4f" />
        <path d="M100 103 V117 H34 Z" {...tope} fill="#b07a40" />
        <text x="80" y="168" textAnchor="middle" className="fig-titulo">Tablero con topes</text>
        <text x="80" y="182" textAnchor="middle" className="fig-nota">Topes y cuñas, de planta</text>
      </g>
    </svg>
  )
}

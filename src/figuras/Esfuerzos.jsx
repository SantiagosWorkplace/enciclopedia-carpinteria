// Los esfuerzos básicos sobre una pieza de madera. La veta va a lo largo
// (líneas horizontales). Dibujo original.
const BX = 35
const BY = 38
const BW = 90
const BH = 34

const F = { stroke: '#dc2626', strokeWidth: 3, fill: 'none', markerEnd: 'url(#esf-punta)' }

function Bloque() {
  return (
    <g>
      <rect x={BX} y={BY} width={BW} height={BH} rx="2" fill="#ecc994" stroke="#7a4a22" strokeWidth="1.2" />
      {[7, 14, 21, 28].map((d) => <line key={d} x1={BX + 3} y1={BY + d} x2={BX + BW - 3} y2={BY + d + (d % 14 ? 1 : -1)} stroke="#b27b45" strokeWidth=".9" />)}
    </g>
  )
}

const flechaH = (x1, x2) => [BY + 11, BY + 23].map((y) => <line key={y} x1={x1} y1={y} x2={x2} y2={y} {...F} />)
const flechaV = (y1, y2) => [BX + 25, BX + 65].map((x) => <line key={x} x1={x} y1={y1} x2={x} y2={y2} {...F} />)

const paneles = [
  { titulo: 'Compresión', nota: 'A lo largo · muy alta', dibujo: <><Bloque />{flechaH(4, BX - 3)}{flechaH(BX + BW + 31, BX + BW + 3)}</> },
  { titulo: 'Compresión', nota: 'A lo ancho · baja, se aplasta', dibujo: <><Bloque />{flechaV(6, BY - 3)}{flechaV(BY + BH + 30, BY + BH + 3)}</> },
  { titulo: 'Tracción', nota: 'A lo largo · muy alta', dibujo: <><Bloque />{flechaH(BX - 3, 4)}{flechaH(BX + BW + 3, BX + BW + 31)}</> },
  { titulo: 'Tracción', nota: 'A lo ancho · muy baja, se raja', dibujo: <><Bloque />{flechaV(BY - 3, 6)}{flechaV(BY + BH + 3, BY + BH + 30)}</> },
  {
    titulo: 'Flexión', nota: 'Arriba comprime, abajo tracciona',
    dibujo: (
      <>
        <path d="M22 44 Q80 60 138 44 L138 62 Q80 78 22 62 Z" fill="#ecc994" stroke="#7a4a22" strokeWidth="1.2" />
        <path d="M26 50 Q80 66 134 50 M26 56 Q80 72 134 56" stroke="#b27b45" strokeWidth=".9" fill="none" />
        <path d="M24 62 L17 76 L31 76 Z M136 62 L129 76 L143 76 Z" fill="#4b5563" />
        <line x1="80" y1="8" x2="80" y2="47" {...F} />
      </>
    ),
  },
  {
    titulo: 'Cortante', nota: 'A lo largo · las fibras se deslizan',
    dibujo: (
      <>
        <Bloque />
        <line x1={BX} y1={BY + BH / 2} x2={BX + BW} y2={BY + BH / 2} stroke="#2b1d12" strokeDasharray="4 3" />
        <line x1={BX + 10} y1={BY - 8} x2={BX + BW - 4} y2={BY - 8} {...F} />
        <line x1={BX + BW - 10} y1={BY + BH + 8} x2={BX + 4} y2={BY + BH + 8} {...F} />
      </>
    ),
  },
]

export default function Esfuerzos() {
  return (
    <svg viewBox="0 0 480 272" role="img" aria-label="Compresión, tracción, flexión y cortante sobre una pieza de madera">
      <defs>
        <marker id="esf-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      {paneles.map((p, i) => (
        <g key={p.titulo + p.nota} transform={`translate(${(i % 3) * 160} ${Math.floor(i / 3) * 136})`}>
          {p.dibujo}
          <g className="fig-leyenda">
            <text x="80" y="114" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
            <text x="80" y="128" textAnchor="middle" className="fig-nota">{p.nota}</text>
          </g>
        </g>
      ))}
    </svg>
  )
}

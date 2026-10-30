// Cuatro bisagras frecuentes en muebles, abiertas y vistas de frente.
// Dibujo original.
const laton = { fill: '#e6c97a', stroke: '#8a6d1f', strokeWidth: 1.2, strokeLinejoin: 'round' }
const acero = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1.2, strokeLinejoin: 'round' }
const agujero = { fill: '#fff', stroke: '#334155', strokeWidth: 0.9 }

function Nudillos({ x, y0, y1, n, estilo }) {
  const paso = (y1 - y0) / n
  return Array.from({ length: n }, (_, k) => <rect key={k} x={x} y={y0 + k * paso} width="8" height={paso} {...estilo} />)
}

function Libro() {
  return (
    <>
      <rect x="22" y="30" width="36" height="72" {...laton} />
      <rect x="62" y="30" width="36" height="72" {...laton} />
      <Nudillos x={56} y0={28} y1={104} n={5} estilo={laton} />
      {[42, 66, 90].map((y) => <g key={y}><circle cx="40" cy={y} r="3" {...agujero} /><circle cx="80" cy={y} r="3" {...agujero} /></g>)}
    </>
  )
}

function Cazoleta() {
  return (
    <>
      <circle cx="34" cy="66" r="18" {...acero} />
      <circle cx="34" cy="66" r="12" fill="#94a3b8" stroke="#334155" strokeWidth="1" />
      <rect x="44" y="58" width="56" height="16" rx="3" {...acero} />
      <rect x="80" y="46" width="22" height="40" rx="3" {...acero} />
      <circle cx="91" cy="54" r="3" {...agujero} />
      <circle cx="91" cy="78" r="3" {...agujero} />
      <circle cx="64" cy="66" r="2.5" {...agujero} />
    </>
  )
}

function Piano() {
  return (
    <>
      <rect x="6" y="46" width="108" height="16" {...acero} />
      <rect x="6" y="70" width="108" height="16" {...acero} />
      <rect x="6" y="62" width="108" height="8" {...acero} />
      {Array.from({ length: 9 }, (_, k) => 6 + k * 12).map((x) => <path key={x} d={`M${x} 62 V70`} stroke="#334155" strokeWidth="0.9" />)}
      {[20, 46, 72, 98].map((x) => <g key={x}><circle cx={x} cy="54" r="2.5" {...agujero} /><circle cx={x + 6} cy="78" r="2.5" {...agujero} /></g>)}
    </>
  )
}

function Mariposa() {
  return (
    <>
      <path d="M57 38 L24 26 Q16 66 24 104 L57 92 Z" {...laton} />
      <path d="M63 38 L96 26 Q104 66 96 104 L63 92 Z" {...laton} />
      <Nudillos x={56} y0={36} y1={96} n={4} estilo={laton} />
      {[[34, 46], [32, 86], [86, 46], [88, 86]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3" {...agujero} />)}
    </>
  )
}

const paneles = [
  { titulo: 'De libro', nota: 'Embutida en rebaje', C: Libro },
  { titulo: 'De cazoleta', nota: 'Oculta y regulable', C: Cazoleta },
  { titulo: 'De piano', nota: 'Tapas largas', C: Piano },
  { titulo: 'De mariposa', nota: 'Decorativa, por fuera', C: Mariposa },
]

export default function TiposBisagra() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Cuatro bisagras abiertas: de libro con nudillos, de cazoleta con su brazo y placa, de piano larga y estrecha, y de mariposa decorativa">
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${i * 120} 0)`}>
          <C />
          <text x="60" y="134" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="60" y="149" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

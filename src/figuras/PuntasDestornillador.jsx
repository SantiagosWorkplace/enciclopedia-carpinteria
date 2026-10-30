// Cabezas de tornillo vistas desde arriba, con el hueco de cada tipo de punta.
// Dibujo original.
const hueco = { fill: '#334155', stroke: '#0f172a', strokeWidth: 0.8, strokeLinejoin: 'round' }

const estrella = (n, rExt, rInt) =>
  Array.from({ length: n * 2 }, (_, k) => {
    const r = k % 2 ? rInt : rExt
    const a = (Math.PI * k) / n - Math.PI / 2
    return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`
  }).join(' ')

const cruz = 'M-3.5 -17 H3.5 V-3.5 H17 V3.5 H3.5 V17 H-3.5 V3.5 H-17 V-3.5 H-3.5 Z'

const puntas = [
  { titulo: 'Plana', nota: 'Ranura', C: () => <rect x="-21" y="-3" width="42" height="6" {...hueco} /> },
  { titulo: 'Phillips', nota: 'Cruz · PH', C: () => <><path d={cruz} {...hueco} /><polygon points="0,-7 7,0 0,7 -7,0" {...hueco} /></> },
  {
    titulo: 'Pozidriv', nota: 'Rayas · PZ',
    C: () => (
      <>
        <path d={cruz} {...hueco} />
        {[45, 135, 225, 315].map((g) => <path key={g} d="M9 0 H16" transform={`rotate(${g})`} stroke="#334155" strokeWidth="1.2" />)}
      </>
    ),
  },
  { titulo: 'Torx', nota: 'Estrella · TX', C: () => <polygon points={estrella(6, 13, 8)} {...hueco} /> },
  { titulo: 'Cuadrada', nota: 'Cuadrado', C: () => <rect x="-7" y="-7" width="14" height="14" {...hueco} /> },
  { titulo: 'Allen', nota: 'Hexágono', C: () => <polygon points={estrella(3, 11, 11)} {...hueco} transform="rotate(30)" /> },
]

export default function PuntasDestornillador() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 130" role="img" aria-label="Seis cabezas de tornillo vistas desde arriba: ranura plana, cruz Phillips, cruz Pozidriv con rayas, estrella Torx, hueco cuadrado y hueco hexagonal">
      <defs>
        <radialGradient id="pd-cabeza" cx="0.38" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#f1f5f9" />
          <stop offset="0.7" stopColor="#cbd5e1" />
          <stop offset="1" stopColor="#94a3b8" />
        </radialGradient>
      </defs>
      {puntas.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${40 + i * 80} 0)`}>
          <g transform="translate(0 46)">
            <circle r="28" fill="url(#pd-cabeza)" stroke="#475569" strokeWidth="1.2" />
            <C />
          </g>
          <text y="98" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text y="114" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

// Cuatro pasos de una cola de milano pasante a mano. Los tres primeros, la
// pieza de colas vista de cara; el último, desde arriba sobre la de espigas.
// Dibujo original, esquemático.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2, strokeLinejoin: 'round' }
const lapiz = { stroke: '#334155', strokeWidth: 1.1 }
const gramil = { stroke: '#1d4ed8', strokeWidth: 1.2, strokeDasharray: '4 3' }
const acero = { fill: '#cbd5e1', stroke: '#475569', strokeWidth: 1 }
const mango = { fill: '#a16207', stroke: '#713f12', strokeWidth: 1 }

// Desperdicio entre colas: angosto en el extremo (y = 24), ancho en la línea base (y = 48).
const desperdicio = [
  [[12, 24], [16, 24], [20, 48], [12, 48]],
  [[53, 24], [61, 24], [65, 48], [49, 48]],
  [[98, 24], [102, 24], [102, 48], [94, 48]],
]
const pts = (l) => l.map((q) => q.join(',')).join(' ')
const lineasColas = [[16, 24, 20, 48], [53, 24, 49, 48], [61, 24, 65, 48], [98, 24, 94, 48]]

function Trazar() {
  return (
    <>
      <rect x="12" y="24" width="90" height="80" {...madera} />
      <path d="M12 48 H102" {...gramil} />
      {lineasColas.map(([a, b, c, d]) => <path key={a} d={`M${a} ${b} L${c} ${d}`} {...lapiz} />)}
      {[[15, 41], [57, 41], [99, 41]].map(([x, y]) => (
        <path key={x} d={`M${x - 3} ${y - 3} L${x + 3} ${y + 3} M${x + 3} ${y - 3} L${x - 3} ${y + 3}`} stroke="#b91c1c" strokeWidth="1.4" />
      ))}
      <rect x="61" y="14" width="40" height="10" rx="2" fill="#78350f" stroke="#451a03" strokeWidth="1" />
      <polygon points="59.5,17 63,17 66.5,66 63,66" {...acero} />
      <circle cx="61.5" cy="19" r="2" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
    </>
  )
}

function Serrar() {
  return (
    <>
      <rect x="12" y="24" width="90" height="80" {...madera} />
      <path d="M12 48 H102" {...gramil} />
      {lineasColas.map(([a, b, c, d]) => <path key={a} d={`M${a} ${b} L${c} ${d}`} {...lapiz} />)}
      {[[17.5, 24, 21.5, 48], [51.5, 24, 47.5, 48], [62.5, 24, 66.5, 48], [96.5, 24, 92.5, 48]].map(([a, b, c, d]) => (
        <path key={a} d={`M${a} ${b} L${c} ${d}`} stroke="#5b3416" strokeWidth="1.6" />
      ))}
      <path d="M66.5 47 L58 -4" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
      <path d="M57 6 L67 4 L69 16 L60 18 Z" {...mango} />
      <path d="M44 14 L44 30 M40 18 L44 13 L48 18 M40 26 L44 31 L48 26" fill="none" stroke="#15803d" strokeWidth="1.4" />
    </>
  )
}

function Vaciar() {
  const pieza = [[12, 104], [12, 48], [20, 48], [16, 24], [53, 24], [49, 48], [65, 48], [61, 24], [98, 24], [94, 48], [102, 48], [102, 104]]
  return (
    <>
      <polygon points={pts(pieza)} {...madera} />
      <path d="M12 48 H102" {...gramil} />
      <rect x="51" y="20" width="12" height="28" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
      <path d="M51 44 H63" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="52.5" y="0" width="9" height="20" rx="2" {...mango} />
    </>
  )
}

function MarcarEspigas() {
  const colas = [[12, 40], [102, 40], [102, 84], [94, 84], [98, 100], [61, 100], [65, 84], [49, 84], [53, 100], [16, 100], [20, 84], [12, 84]]
  return (
    <>
      <rect x="12" y="84" width="90" height="16" fill="#b98a52" stroke="#7a4a22" strokeWidth="1.2" />
      <polygon points={pts(colas)} {...madera} />
      {[[20, 84, 16, 100], [49, 84, 53, 100], [65, 84, 61, 100], [94, 84, 98, 100]].map(([a, b, c, d]) => (
        <path key={a} d={`M${a} ${b} L${c} ${d}`} stroke="#b91c1c" strokeWidth="1.2" />
      ))}
      <path d="M12 84 H102" {...gramil} />
      <polygon points="95,93 99,74 103,74" {...acero} />
      <polygon points="98,74 104,74 112,40 106,40" {...mango} />
    </>
  )
}

const paneles = [
  { titulo: 'Trazar', nota: 'Con falsa escuadra', C: Trazar },
  { titulo: 'Serrar', nota: 'Por el desperdicio', C: Serrar },
  { titulo: 'Vaciar', nota: 'Desde las dos caras', C: Vaciar },
  { titulo: 'Marcar espigas', nota: 'Cuchilla en las colas', C: MarcarEspigas },
]

export default function PasosColaMilano() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Cuatro pasos de una cola de milano a mano: trazar las colas con falsa escuadra y gramil, serrar por el lado del desperdicio, vaciar con el formón y marcar las espigas con una cuchilla apoyando la pieza de colas sobre la testa de la otra">
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${4 + i * 118} 6)`}>
          <C />
          <circle cx="6" cy="4" r="8" fill="#b45309" />
          <text x="6" y="8" textAnchor="middle" className="fig-letra" style={{ fontSize: 10 }}>{i + 1}</text>
          <text x="57" y="128" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="57" y="143" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

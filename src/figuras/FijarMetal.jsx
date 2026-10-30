// Tres formas de fijar una pieza de metal a la madera. Dibujo original;
// los dos primeros paneles son secciones y el tercero una vista desde abajo.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const chapa = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1.2 }
const perno = { fill: '#475569', stroke: '#1e293b', strokeWidth: 1 }
const pieza = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1 }

const dientes = (x, y0, y1, hacia) => {
  let d = `M${x} ${y0}`
  for (let y = y0; y < y1; y += 4) d += ` L${x + hacia} ${y + 2} L${x} ${y + 4}`
  return d
}

function Inserto() {
  return (
    <>
      <rect x="10" y="50" width="120" height="60" {...madera} />
      {[66, 82, 98].map((y) => <path key={y} d={`M14 ${y} H58 M82 ${y} H126`} stroke="#c9a06a" strokeWidth="0.9" />)}
      <rect x="61" y="50" width="18" height="40" {...pieza} />
      <path d={dientes(61, 52, 88, -3)} fill="none" stroke="#334155" strokeWidth="1" />
      <path d={dientes(79, 52, 88, 3)} fill="none" stroke="#334155" strokeWidth="1" />
      <rect x="30" y="44" width="80" height="6" {...chapa} />
      <rect x="66" y="50" width="8" height="36" {...perno} />
      <rect x="62" y="36" width="16" height="8" {...perno} />
    </>
  )
}

function Garras() {
  return (
    <>
      <rect x="10" y="50" width="120" height="30" {...madera} />
      {[60, 70].map((y) => <path key={y} d={`M14 ${y} H56 M84 ${y} H126`} stroke="#c9a06a" strokeWidth="0.9" />)}
      <rect x="63" y="58" width="14" height="22" {...pieza} />
      <path d="M56 80 L58 70 L60 80 Z M80 80 L82 70 L84 80 Z" {...pieza} />
      <rect x="54" y="80" width="32" height="4" {...pieza} />
      <rect x="30" y="44" width="80" height="6" {...chapa} />
      <rect x="66.5" y="50" width="7" height="34" {...perno} />
      <rect x="62" y="36" width="16" height="8" {...perno} />
    </>
  )
}

function Ovalado() {
  return (
    <>
      <rect x="10" y="20" width="110" height="90" {...madera} />
      {[32, 46, 60, 74, 88, 100].map((y) => <path key={y} d={`M14 ${y} H116`} stroke="#c9a06a" strokeWidth="0.9" />)}
      <rect x="55" y="14" width="20" height="102" {...chapa} />
      {[24, 57, 90].map((y) => (
        <g key={y}>
          <rect x="61" y={y} width="8" height="16" rx="4" fill="#e2e8f0" stroke="#334155" strokeWidth="1" />
          <circle cx="65" cy={y + 8} r="3.5" {...perno} />
        </g>
      ))}
      <path d="M130 34 V96" stroke="#3b82f6" strokeWidth="1.8" markerStart="url(#fm-f)" markerEnd="url(#fm-f)" />
    </>
  )
}

const paneles = [
  { titulo: 'Inserto roscado', nota: 'Rosca firme en la madera', C: Inserto },
  { titulo: 'Tuerca de garras', nota: 'Se clava por detrás', C: Garras },
  { titulo: 'Agujero ovalado', nota: 'Deja moverse a la madera', C: Ovalado },
]

export default function FijarMetal() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Fijar metal a madera: un inserto roscado en sección, una tuerca de garras en sección y una pletina con agujeros ovalados que dejan moverse a la madera a lo ancho">
      <defs>
        <marker id="fm-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#3b82f6" />
        </marker>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${10 + i * 160} 0)`}>
          <C />
          <text x="70" y="134" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="70" y="149" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

// Tres hábitos al clavar: escalonar, inclinar y hundir la cabeza.
// Dibujo original; el primer panel es una vista desde arriba y los otros, secciones.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const madera2 = { fill: '#d9b277', stroke: '#7a4a22', strokeWidth: 1.2 }
const clavo = { stroke: '#334155', strokeWidth: 3, strokeLinecap: 'round' }

function Escalonados() {
  return (
    <>
      <rect x="10" y="26" width="120" height="76" {...madera} />
      {[38, 52, 64, 78, 90].map((y) => <path key={y} d={`M14 ${y} H126`} stroke="#c9a06a" strokeWidth="0.9" />)}
      {[[36, 45], [70, 84], [104, 45]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" fill="#475569" stroke="#1e293b" strokeWidth="1" />)}
    </>
  )
}

function Inclinados() {
  return (
    <>
      <rect x="10" y="40" width="120" height="20" {...madera} />
      <rect x="10" y="60" width="120" height="50" {...madera2} />
      <path d="M44 38 L58 100" {...clavo} />
      <path d="M96 38 L82 100" {...clavo} />
      <path d="M38 38 H50 M90 38 H102" stroke="#334155" strokeWidth="2.5" />
    </>
  )
}

function Botador() {
  return (
    <>
      <rect x="10" y="60" width="120" height="50" {...madera} />
      <path d="M64 60 L67 66 H73 L76 60 Z" fill="#fffbeb" stroke="#7a4a22" strokeWidth="1" />
      <path d="M70 67 V104" {...clavo} />
      <path d="M66 66 H74" stroke="#334155" strokeWidth="2.5" />
      <path d="M68 58 H72 L76 18 H64 Z" fill="#64748b" stroke="#1e293b" strokeWidth="1" />
    </>
  )
}

const paneles = [
  { titulo: 'Escalonados', nota: 'No en la misma veta', C: Escalonados },
  { titulo: 'Inclinados', nota: 'Se traban entre sí', C: Inclinados },
  { titulo: 'Botador', nota: 'Hunde la cabeza', C: Botador },
]

export default function ClavarTecnica() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Técnica de clavado: clavos escalonados para no rajar la tabla en una misma veta, clavos inclinados en sentidos opuestos que se traban, y un botador hundiendo la cabeza bajo la superficie">
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

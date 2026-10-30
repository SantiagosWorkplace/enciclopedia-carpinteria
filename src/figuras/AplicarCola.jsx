// Cómo se aplican tres adhesivos distintos. Dibujo original y esquemático.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const capa = { fill: '#fde047', stroke: '#ca8a04', strokeWidth: 0.8 }

function Vinilica() {
  let cordon = 'M20 68'
  for (let x = 20; x < 120; x += 10) cordon += ` q2.5 -3 5 0 t5 0`
  return (
    <>
      <rect x="10" y="70" width="120" height="22" {...madera} />
      <path d={cordon} fill="none" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
      <rect x="52" y="12" width="20" height="32" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" />
      <path d="M58 44 H66 L62 56 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" />
    </>
  )
}

function Contacto() {
  return (
    <>
      <rect x="10" y="30" width="96" height="18" {...madera} />
      <rect x="10" y="48" width="96" height="3" {...capa} />
      <rect x="10" y="82" width="96" height="18" {...madera} />
      <rect x="10" y="79" width="96" height="3" {...capa} />
      <path d="M58 56 V72" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#ac-f)" />
      <circle cx="122" cy="64" r="10" fill="#fff" stroke="#334155" strokeWidth="1.2" />
      <path d="M122 64 V57 M122 64 H127" stroke="#334155" strokeWidth="1.4" />
    </>
  )
}

function Epoxi() {
  return (
    <>
      <rect x="12" y="36" width="116" height="66" rx="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
      <ellipse cx="44" cy="70" rx="18" ry="11" fill="#fde68a" stroke="#ca8a04" strokeWidth="1" />
      <ellipse cx="96" cy="70" rx="18" ry="11" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
      <text x="44" y="75" textAnchor="middle" className="fig-titulo">A</text>
      <text x="96" y="75" textAnchor="middle" className="fig-titulo">B</text>
      <path d="M62 30 L76 92" stroke="#a16207" strokeWidth="4" strokeLinecap="round" />
    </>
  )
}

const paneles = [
  { titulo: 'Vinílica', nota: 'Una cara, cordón fino', C: Vinilica },
  { titulo: 'De contacto', nota: 'Ambas caras; unir secas', C: Contacto },
  { titulo: 'Epoxi', nota: 'Mezclar A y B al usar', C: Epoxi },
]

export default function AplicarCola() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Aplicación de adhesivos: la cola vinílica en un cordón sobre una cara, la de contacto en las dos caras dejándola secar antes de unir, y el epoxi mezclando sus dos componentes">
      <defs>
        <marker id="ac-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
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

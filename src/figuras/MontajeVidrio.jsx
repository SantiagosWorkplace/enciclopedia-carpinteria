// Tres formas de montar un vidrio en un mueble, en sección. Dibujo original;
// el vidrio y las holguras están exagerados.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const vidrio = { fill: '#bfdbfe', stroke: '#3b82f6', strokeWidth: 1.2 }
const goma = { fill: '#475569', stroke: '#1e293b', strokeWidth: 0.8 }

function Junquillo() {
  return (
    <>
      <path d="M20 40 H70 V70 H56 V100 H20 Z" {...madera} />
      <rect x="57" y="70" width="73" height="4" {...vidrio} />
      <rect x="57" y="75" width="12" height="12" {...madera} />
      <path d="M65 82 L49 94" stroke="#1e293b" strokeWidth="1.4" />
    </>
  )
}

function Ranura() {
  return (
    <>
      <path d="M20 40 H70 V66 H60 V74 H70 V100 H20 Z" {...madera} />
      <rect x="62" y="67.5" width="68" height="5" {...vidrio} />
    </>
  )
}

function Estante() {
  return (
    <>
      <rect x="20" y="20" width="14" height="95" {...madera} />
      <rect x="34" y="64" width="14" height="4" fill="#94a3b8" stroke="#334155" strokeWidth="1" />
      <rect x="40" y="60" width="8" height="4" {...goma} />
      <rect x="36" y="54" width="94" height="6" {...vidrio} />
      <path d="M126 54 Q130 54 130 57 Q130 60 126 60" fill="none" stroke="#3b82f6" strokeWidth="1.2" />
    </>
  )
}

const paneles = [
  { titulo: 'Rebaje y junquillo', nota: 'Se cambia si se rompe', C: Junquillo },
  { titulo: 'En ranura', nota: 'Sin cola, con holgura', C: Ranura },
  { titulo: 'Estante de vidrio', nota: 'Apoya sobre goma', C: Estante },
]

export default function MontajeVidrio() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Montaje de vidrios en sección: en un rebaje sujeto con un junquillo clavado, dentro de una ranura del marco y como estante apoyado en un soporte con goma">
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

// Tres herrajes que mantienen cerrada una puerta, vistos desde arriba.
// Dibujo original y esquemático; la puerta queda arriba, cerrada.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const puerta = { fill: '#d9b277', stroke: '#7a4a22', strokeWidth: 1.2 }
const metal = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1.1 }
const oscuro = { fill: '#475569', stroke: '#1e293b', strokeWidth: 1 }
const laton = { fill: '#e6c97a', stroke: '#8a6d1f', strokeWidth: 1 }

function Mueble() {
  return (
    <>
      <rect x="90" y="30" width="16" height="82" {...madera} />
      <rect x="10" y="14" width="96" height="16" {...puerta} />
    </>
  )
}

function Iman() {
  return (
    <>
      <Mueble />
      <rect x="58" y="32" width="32" height="16" rx="2" fill="#f1f5f9" stroke="#334155" strokeWidth="1.1" />
      <rect x="62" y="32" width="8" height="4" {...oscuro} />
      <rect x="78" y="32" width="8" height="4" {...oscuro} />
      <rect x="62" y="30" width="24" height="2" {...metal} />
    </>
  )
}

function Pestillo() {
  return (
    <>
      <Mueble />
      <rect x="58" y="36" width="32" height="24" rx="2" {...metal} />
      <rect x="69" y="36" width="10" height="16" fill="#fff" stroke="#334155" strokeWidth="0.8" />
      <rect x="71" y="30" width="6" height="20" {...laton} />
      <circle cx="68.5" cy="46" r="3.5" {...oscuro} />
      <circle cx="79.5" cy="46" r="3.5" {...oscuro} />
    </>
  )
}

function Amortiguador() {
  return (
    <>
      <Mueble />
      <rect x="80" y="56" width="10" height="16" {...metal} />
      <rect x="66" y="46" width="14" height="36" rx="2" {...metal} />
      <rect x="71" y="34" width="4" height="12" {...oscuro} />
      <rect x="68" y="30" width="10" height="4" rx="1" {...oscuro} />
    </>
  )
}

const paneles = [
  { titulo: 'Imán', nota: 'Atrae una contraplaca', C: Iman },
  { titulo: 'Pestillo de bola', nota: 'Retiene sin llave', C: Pestillo },
  { titulo: 'Amortiguador', nota: 'Frena el cierre', C: Amortiguador },
]

export default function Cierres() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Tres cierres vistos desde arriba, con la puerta cerrada: un imán que atrae una placa metálica de la puerta, un pestillo de bolas que atrapa una lengüeta y un amortiguador que frena la puerta al cerrar">
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

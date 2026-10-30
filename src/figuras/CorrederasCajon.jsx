// Tres formas de guiar un cajón, en sección vista de frente.
// Dibujo original; las holguras están exageradas.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const cajon = { fill: '#d9b277', stroke: '#7a4a22', strokeWidth: 1.2 }
const metal = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1.1 }

function Costados() {
  return (
    <>
      <rect x="10" y="20" width="12" height="92" {...madera} />
      <rect x="118" y="20" width="12" height="92" {...madera} />
    </>
  )
}

function Bolas() {
  return (
    <>
      <Costados />
      <rect x="35" y="40" width="8" height="60" {...cajon} />
      <rect x="97" y="40" width="8" height="60" {...cajon} />
      <rect x="43" y="88" width="54" height="6" {...cajon} />
      {[22, 105].map((x) => (
        <g key={x}>
          <rect x={x} y="58" width="13" height="16" {...metal} />
          <path d={`M${x + 6.5} 60 V72`} stroke="#334155" strokeWidth="1" />
        </g>
      ))}
    </>
  )
}

function Oculta() {
  return (
    <>
      <Costados />
      <rect x="26" y="40" width="12" height="56" {...cajon} />
      <rect x="102" y="40" width="12" height="56" {...cajon} />
      <rect x="38" y="78" width="64" height="6" {...cajon} />
      {[24, 100].map((x) => <rect key={x} x={x} y="96" width="16" height="9" {...metal} />)}
    </>
  )
}

function Madera() {
  return (
    <>
      <Costados />
      <path d="M24 40 H34 V100 H24 V74 H30 V62 H24 Z" {...cajon} />
      <path d="M116 40 H106 V100 H116 V74 H110 V62 H116 Z" {...cajon} />
      <rect x="34" y="88" width="72" height="6" {...cajon} />
      <rect x="22" y="63" width="7" height="10" {...madera} />
      <rect x="111" y="63" width="7" height="10" {...madera} />
    </>
  )
}

const paneles = [
  { titulo: 'De bolas, lateral', nota: '≈ 12,7 mm por lado', C: Bolas },
  { titulo: 'Oculta', nota: 'Bajo el cajón', C: Oculta },
  { titulo: 'De madera', nota: 'Listón en una ranura', C: Madera },
]

export default function CorrederasCajon() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Tres guías de cajón en sección de frente: correderas metálicas de bolas en el hueco entre el cajón y los costados, correderas ocultas bajo los laterales del cajón y listones de madera que entran en una ranura de los laterales">
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

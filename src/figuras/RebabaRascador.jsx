// Preparar la rebaba de una cuchilla de rascar y usarla. Dibujo original;
// las secciones del canto están muy ampliadas.
const acero = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1.2, strokeLinejoin: 'round' }
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const flecha = { stroke: '#dc2626', strokeWidth: 2, fill: 'none', markerEnd: 'url(#rr-f)' }

function Limar() {
  return (
    <>
      <rect x="54" y="44" width="12" height="68" {...acero} />
      <rect x="14" y="30" width="92" height="12" rx="2" fill="#64748b" stroke="#1e293b" strokeWidth="1" />
      {Array.from({ length: 15 }, (_, k) => <path key={k} d={`M${20 + k * 6} 32 l4 8`} stroke="#cbd5e1" strokeWidth="0.8" />)}
      <path d="M30 22 H90" {...flecha} />
    </>
  )
}

function Cara() {
  return (
    <>
      <rect x="6" y="88" width="108" height="20" {...madera} />
      <path d="M14 80 H104 L106 79 V88 H14 Z" {...acero} />
      <rect x="30" y="68" width="76" height="9" rx="4.5" fill="#94a3b8" stroke="#1e293b" strokeWidth="1" />
      <path d="M40 58 H96" {...flecha} />
    </>
  )
}

function Canto() {
  return (
    <>
      <path d="M54 112 V52 Q54 47 50 46 Q52 44 60 44 Q68 44 70 46 Q66 47 66 52 V112 Z" {...acero} />
      <path d="M8 34 L112 46" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
      <circle cx="49" cy="47.5" r="6" fill="none" stroke="#dc2626" strokeWidth="1.2" />
      <circle cx="71" cy="47.5" r="6" fill="none" stroke="#dc2626" strokeWidth="1.2" />
    </>
  )
}

function Rascar() {
  return (
    <>
      <rect x="6" y="92" width="108" height="18" {...madera} />
      <path d="M50 30 L76 92 L72 92 L46 32 Z" {...acero} />
      <path d="M78 90 Q90 80 84 72 Q78 68 76 76" fill="none" stroke="#c9a06a" strokeWidth="2" />
      <path d="M30 70 L58 70" {...flecha} />
    </>
  )
}

const pasos = [
  { titulo: '1. Limar', nota: 'Canto a escuadra', C: Limar },
  { titulo: '2. Cara', nota: 'Bruñir y estirar', C: Cara },
  { titulo: '3. Canto', nota: 'Bruñir inclinado', C: Canto },
  { titulo: '4. Rascar', nota: 'Inclinada, empujando', C: Rascar },
]

export default function RebabaRascador() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Preparar una cuchilla de rascar en cuatro pasos: limar el canto a escuadra, bruñir la cara, bruñir el canto inclinando el bruñidor para volcar la rebaba, y rascar con la cuchilla inclinada empujándola">
      <defs>
        <marker id="rr-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      {pasos.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${i * 120} 0)`}>
          <C />
          <text x="60" y="134" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="60" y="149" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

// Las tres etapas de un encerado, sobre una tabla vista desde arriba.
// Dibujo original.
const f = (n) => n.toFixed(1)

function Tabla({ children }) {
  return (
    <>
      <rect x="0" y="14" width="140" height="86" rx="2" fill="#d9ad72" stroke="#7a4a22" strokeWidth="1.2" />
      {[30, 48, 66, 84].map((y) => <path key={y} d={`M2 ${y} C44 ${y - 5} 96 ${y + 5} 138 ${y}`} fill="none" stroke="#b07a40" strokeWidth="1.5" />)}
      {children}
    </>
  )
}

function Aplicar() {
  const pts = []
  for (let t = 0; t <= 6 * Math.PI; t += 0.2) pts.push(`${f(20 + 5 * t - 9 * Math.sin(t))} ${f(57 + 14 * Math.cos(t))}`)
  return (
    <Tabla>
      <path d={`M${pts.join(' L')}`} fill="none" stroke="#b45309" strokeWidth="1.8" markerEnd="url(#ec-f)" />
    </Tabla>
  )
}

function Opacar() {
  return (
    <Tabla>
      <rect x="0" y="14" width="140" height="86" rx="2" fill="#fff" opacity="0.45" />
    </Tabla>
  )
}

function Lustrar() {
  return (
    <Tabla>
      <path d="M40 14 L72 14 L42 100 L10 100 Z" fill="#fff" opacity="0.4" />
      <path d="M78 14 L88 14 L58 100 L48 100 Z" fill="#fff" opacity="0.3" />
      <path d="M22 40 H118" fill="none" stroke="#b45309" strokeWidth="1.8" markerEnd="url(#ec-f)" />
      <path d="M118 74 H22" fill="none" stroke="#b45309" strokeWidth="1.8" markerEnd="url(#ec-f)" />
    </Tabla>
  )
}

const paneles = [
  { titulo: '1 Aplicar', nota: 'Capa fina, en círculos', C: Aplicar },
  { titulo: '2 Dejar opacar', nota: 'Hasta que se empañe', C: Opacar },
  { titulo: '3 Lustrar', nota: 'A favor de la veta', C: Lustrar },
]

export default function Encerar() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 150" role="img" aria-label="Encerado: aplicar en círculos, dejar que la cera se opaque y lustrar a favor de la veta">
      <defs>
        <marker id="ec-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#b45309" />
        </marker>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${10 + i * 160} 0)`}>
          <C />
          <text x="70" y="124" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="70" y="139" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

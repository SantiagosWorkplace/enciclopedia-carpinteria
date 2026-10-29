// Cuánto resiste la cola según la dirección de la veta de las dos caras que se
// unen. Piezas vistas desde arriba; las líneas finas indican la veta. Dibujo original.
const pieza = { stroke: '#7a4a22', strokeWidth: 1.2 }
const cola = '#0f766e'

// Líneas de veta dentro de un rectángulo, horizontales o verticales.
function Veta({ x, y, w, h, vertical }) {
  const n = Math.floor((vertical ? w : h) / 7)
  return Array.from({ length: n }, (_, i) => {
    const k = (i + 0.7) * ((vertical ? w : h) / (n + 0.4))
    const d = vertical
      ? `M${x + k} ${y + 2} Q${x + k + 1.6} ${y + h / 2} ${x + k} ${y + h - 2}`
      : `M${x + 2} ${y + k} Q${x + w / 2} ${y + k + 1.6} ${x + w - 2} ${y + k}`
    return <path key={i} d={d} fill="none" stroke="#b07a42" strokeWidth="0.8" />
  })
}

const paneles = [
  {
    titulo: 'Canto con canto', notas: ['Veta larga con veta larga:', 'más fuerte que la madera'], valor: 1, color: '#16a34a',
    d: (
      <>
        <rect x="0" y="10" width="140" height="36" fill="#e2b77d" {...pieza} />
        <rect x="0" y="46" width="140" height="36" fill="#d6a265" {...pieza} />
        <Veta x={0} y={10} w={140} h={36} />
        <Veta x={0} y={46} w={140} h={36} />
        <line x1="0" y1="46" x2="140" y2="46" stroke={cola} strokeWidth="3" />
      </>
    ),
  },
  {
    titulo: 'Testa contra canto', notas: ['Débil: necesita espiga,', 'clavijas u otro refuerzo'], valor: 0.25, color: '#d97706',
    d: (
      <>
        <rect x="50" y="4" width="40" height="52" fill="#d6a265" {...pieza} />
        <rect x="0" y="56" width="140" height="30" fill="#e2b77d" {...pieza} />
        <Veta x={50} y={4} w={40} h={52} vertical />
        <Veta x={0} y={56} w={140} h={30} />
        <line x1="50" y1="56" x2="90" y2="56" stroke={cola} strokeWidth="3" />
      </>
    ),
  },
  {
    titulo: 'Testa con testa', notas: ['Casi no resiste:', 'siempre con refuerzo'], valor: 0.08, color: '#dc2626',
    d: (
      <>
        <rect x="0" y="28" width="70" height="36" fill="#e2b77d" {...pieza} />
        <rect x="70" y="28" width="70" height="36" fill="#d6a265" {...pieza} />
        <Veta x={0} y={28} w={70} h={36} />
        <Veta x={70} y={28} w={70} h={36} />
        <line x1="70" y1="28" x2="70" y2="64" stroke={cola} strokeWidth="3" />
      </>
    ),
  },
]

export default function SuperficiesEncolado() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 200" role="img" aria-label="Resistencia del encolado: canto con canto, testa contra canto y testa con testa">
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${10 + i * 160} 10)`}>
          {p.d}
          <text x="70" y="112" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <rect x="10" y="120" width="120" height="8" rx="4" fill="#e5e7eb" />
          <rect x="10" y="120" width={120 * p.valor} height="8" rx="4" fill={p.color} />
          {p.notas.map((n, k) => (
            <text key={n} x="70" y={144 + k * 13} textAnchor="middle" className="fig-nota">{n}</text>
          ))}
        </g>
      ))}
      <line x1="150" y1="192" x2="172" y2="192" stroke={cola} strokeWidth="3" />
      <text x="178" y="196" className="fig-nota">Línea de cola · las líneas finas muestran la veta</text>
    </svg>
  )
}

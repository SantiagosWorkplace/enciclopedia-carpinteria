// Brocas para madera vistas de costado, con la punta hacia abajo. Dibujo original.
const acero = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1.2 }
const espiral = { fill: 'none', stroke: '#64748b', strokeWidth: 1.4 }

const brocas = [
  {
    titulo: 'Helicoidal', nota: 'Uso general',
    d: <><rect x="-7" y="20" width="14" height="70" {...acero} /><path d="M-7 90 L0 104 L7 90 Z" {...acero} />{[30, 46, 62, 78].map((y) => <path key={y} d={`M-7 ${y} L7 ${y + 10}`} {...espiral} />)}</>,
  },
  {
    titulo: 'De punta', nota: 'Corte limpio',
    d: <><rect x="-7" y="20" width="14" height="72" {...acero} /><path d="M-7 92 L-7 100 L-4 94 L-1.5 94 L0 106 L1.5 94 L4 94 L7 100 L7 92 Z" {...acero} />{[30, 46, 62, 78].map((y) => <path key={y} d={`M-7 ${y} L7 ${y + 10}`} {...espiral} />)}</>,
  },
  {
    titulo: 'De pala', nota: 'Rápida, basta',
    d: <><rect x="-3" y="20" width="6" height="56" {...acero} /><path d="M-14 76 H14 V96 L4 96 L0 108 L-4 96 L-14 96 Z" {...acero} /></>,
  },
  {
    titulo: 'Forstner', nota: 'Fondo plano',
    d: <><rect x="-3" y="20" width="6" height="60" {...acero} /><path d="M-16 80 H16 V98 L12 98 L0 102 L-12 98 H-16 Z" {...acero} /><path d="M-12 86 H12" {...espiral} /></>,
  },
  {
    titulo: 'Barrena', nota: 'Para berbiquí',
    d: <><rect x="-3" y="10" width="6" height="30" {...acero} /><rect x="-8" y="40" width="16" height="54" {...acero} />{[46, 58, 70, 82].map((y) => <path key={y} d={`M-8 ${y} L8 ${y + 12}`} {...espiral} />)}<path d="M-8 94 L-2 100 L0 110 L2 100 L8 94 Z" {...acero} /></>,
  },
  {
    titulo: 'Avellanador', nota: 'Para la cabeza',
    d: <><rect x="-3" y="20" width="6" height="56" {...acero} /><path d="M-14 76 H14 L0 100 Z" {...acero} /><path d="M-6 80 L-2 92 M4 80 L1 92" {...espiral} /></>,
  },
]

export default function Brocas() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 172" role="img" aria-label="Brocas helicoidal, de punta, de pala, Forstner, barrena y avellanador">
      {brocas.map((b, i) => (
        <g key={b.titulo}>
          <g transform={`translate(${42 + i * 79} 0)`}>{b.d}</g>
          <text x={42 + i * 79} y="132" textAnchor="middle" className="fig-titulo">{b.titulo}</text>
          <text x={42 + i * 79} y="148" textAnchor="middle" className="fig-nota">{b.nota}</text>
        </g>
      ))}
    </svg>
  )
}

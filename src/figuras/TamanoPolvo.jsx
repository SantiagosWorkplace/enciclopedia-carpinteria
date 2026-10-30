// Tamaño de las partículas de polvo y hasta dónde llegan al respirarlas.
// Dibujo original y esquemático; la escala no es proporcional.
const bandas = [
  { x0: 20, x1: 120, color: '#b91c1c', titulo: 'Alvéolos', nota: 'Sobre todo lijado', r: [0.8, 1, 0.9] },
  { x0: 120, x1: 220, color: '#ea580c', titulo: 'Bronquios', nota: 'Lijado, fresado', r: [1.6, 2, 1.8] },
  { x0: 220, x1: 330, color: '#b45309', titulo: 'Nariz, garganta', nota: 'Casi todas las máquinas', r: [3, 3.6, 3.2] },
  { x0: 330, x1: 460, color: '#15803d', titulo: 'Cae al suelo', nota: 'Viruta y aserrín', r: [6, 8, 7] },
]

export default function TamanoPolvo() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 170" role="img" aria-label="Tamaño de las partículas de polvo: las menores de 4 micrómetros llegan a los alvéolos, las de 4 a 10 a los bronquios, las de 10 a 100 quedan en la nariz y la garganta, y las mayores de 100 caen al suelo">
      <defs>
        <marker id="tp-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#64748b" />
        </marker>
      </defs>
      <path d="M400 16 H60" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#tp-f)" />
      <text x="240" y="30" textAnchor="middle" className="fig-nota">Cuanto más fino, más adentro de los pulmones llega</text>
      {bandas.map(({ x0, x1, color, titulo, nota, r }) => {
        const cx = (x0 + x1) / 2
        return (
          <g key={titulo}>
            {r.map((radio, k) => <circle key={k} cx={cx - 22 + k * 22} cy={56 + (k % 2) * 6} r={radio} fill="#a8a29e" stroke="#57534e" strokeWidth="0.6" />)}
            <rect x={x0} y="74" width={x1 - x0} height="24" fill={color} />
            <text x={cx} y="90" textAnchor="middle" className="fig-letra">{titulo}</text>
            <text x={cx} y="134" textAnchor="middle" className="fig-nota">{nota}</text>
          </g>
        )
      })}
      {[[120, '4 µm'], [220, '10 µm'], [330, '100 µm']].map(([x, t]) => (
        <g key={t}>
          <path d={`M${x} 98 V108`} stroke="#334155" strokeWidth="1.2" />
          <text x={x} y="119" textAnchor="middle" className="fig-titulo">{t}</text>
        </g>
      ))}
      <path d="M290 150 H330" stroke="#64748b" strokeWidth="1" />
      <path d="M290 146 V154 M330 146 V154" stroke="#64748b" strokeWidth="1" />
      <text x="310" y="164" textAnchor="middle" className="fig-nota">Pelo humano: ≈ 50 – 100 µm</text>
    </svg>
  )
}

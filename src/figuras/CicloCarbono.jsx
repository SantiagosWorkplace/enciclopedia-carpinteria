// El carbono que guarda la madera a lo largo de su vida. Dibujo original.
const etapas = [
  { x: 240, y: 46, icono: '🌲', titulo: 'Bosque gestionado', nota: 'Absorbe CO₂ al crecer' },
  { x: 385, y: 140, icono: '🪵', titulo: 'Aserrado y secado', nota: 'El carbono queda guardado' },
  { x: 240, y: 234, icono: '🪑', titulo: 'Mueble o casa', nota: 'Lo guarda durante décadas' },
  { x: 95, y: 140, icono: '♻️', titulo: 'Reutilizar o reciclar', nota: 'Alarga el almacenamiento' },
]

export default function CicloCarbono() {
  return (
    <svg viewBox="0 0 480 280" role="img" aria-label="Ciclo del carbono de la madera: bosque, aserrado, uso y reutilización, con replantación">
      <defs>
        <marker id="ciclo-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
        </marker>
      </defs>
      <ellipse cx="240" cy="140" rx="150" ry="94" fill="none" stroke="#86efac" strokeWidth="10" opacity=".45" />
      {/* Flechas en sentido horario entre etapas */}
      {['M328 56 Q380 64 392 106', 'M392 174 Q380 216 328 224', 'M152 224 Q100 216 88 174', 'M88 106 Q100 64 152 56'].map((d) => (
        <path key={d} d={d} fill="none" stroke="#15803d" strokeWidth="2.5" markerEnd="url(#ciclo-punta)" />
      ))}
      <g className="fig-leyenda">
        {etapas.map((e) => (
          <g key={e.titulo}>
            <rect x={e.x - 85} y={e.y - 30} width="170" height="60" rx="12" fill="#f0fdf4" stroke="#15803d" />
            <text x={e.x} y={e.y - 8} textAnchor="middle" style={{ fontSize: 18 }}>{e.icono}</text>
            <text x={e.x} y={e.y + 10} textAnchor="middle" className="fig-titulo">{e.titulo}</text>
            <text x={e.x} y={e.y + 23} textAnchor="middle" className="fig-nota">{e.nota}</text>
          </g>
        ))}
        <text x="96" y="72" textAnchor="middle" className="fig-nota">Se replanta</text>
        <text x="384" y="214" textAnchor="middle" className="fig-nota">Se fabrica</text>
        <text x="240" y="134" textAnchor="middle" className="fig-titulo">≈ 0,9 t de CO₂</text>
        <text x="240" y="150" textAnchor="middle" className="fig-nota">por m³ de madera seca de 500 kg/m³</text>
      </g>
    </svg>
  )
}

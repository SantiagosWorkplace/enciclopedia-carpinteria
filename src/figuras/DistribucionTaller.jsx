// Planta de un taller pequeño de 6 × 4 m, con las zonas en el orden en que
// avanza la madera. Dibujo original, a escala: 70 px por metro.
const K = 70
const m = (v) => 20 + v * K

const zonas = [
  { x: 0, y: 0, w: 1.0, h: 4, color: '#fde68a', n: '1', titulo: 'Almacén', nota: 'Tablas y tableros' },
  { x: 1.2, y: 0.9, w: 0.7, h: 0.9, color: '#fca5a5', n: '2', titulo: 'Sierra', nota: '' },
  { x: 2.6, y: 0.2, w: 0.5, h: 1.4, color: '#fdba74', n: '3', titulo: 'Cepilladora', nota: '' },
  { x: 2.4, y: 2.6, w: 2.0, h: 0.8, color: '#93c5fd', n: '4', titulo: 'Banco', nota: '' },
  { x: 4.8, y: 0.2, w: 1.0, h: 1.4, color: '#c4b5fd', n: '5', titulo: 'Armado', nota: '' },
  { x: 4.8, y: 2.3, w: 1.0, h: 1.5, color: '#86efac', n: '6', titulo: 'Acabado', nota: 'Separado del polvo' },
]

export default function DistribucionTaller() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 330" role="img" aria-label="Planta de un taller de 6 por 4 metros con almacén, sierra, cepilladora, banco, armado y acabado">
      <defs>
        <marker id="taller-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#475569" />
        </marker>
      </defs>
      <rect x={m(0)} y={m(0)} width={6 * K} height={4 * K} fill="#f8fafc" stroke="#334155" strokeWidth="3" />
      {/* Puerta ancha para placas, en la pared de arriba */}
      <rect x={m(3.3)} y={m(0) - 3} width={1.3 * K} height="6" fill="#fff" />
      <path d={`M${m(3.3)} ${m(0)} A${1.3 * K} ${1.3 * K} 0 0 1 ${m(4.6)} ${m(0)}`} fill="none" stroke="#94a3b8" strokeDasharray="4 3" />
      <text x={m(3.95)} y={m(0) + 16} textAnchor="middle" className="fig-nota">puerta</text>

      {/* Espacio libre de entrada y salida de la sierra */}
      <rect x={m(1.2) + 0.35 * K - 10} y={m(0)} width="20" height={4 * K} fill="#dc2626" opacity=".08" />

      {zonas.map((z) => (
        <g key={z.n}>
          <rect x={m(z.x)} y={m(z.y)} width={z.w * K} height={z.h * K} rx="4" fill={z.color} stroke="#334155" strokeWidth="1.2" />
          <circle cx={m(z.x) + 12} cy={m(z.y) + 13} r="9" fill="#1f2937" />
          <text x={m(z.x) + 12} y={m(z.y) + 17} textAnchor="middle" className="fig-letra">{z.n}</text>
          <text x={m(z.x) + z.w * K / 2} y={m(z.y + z.h / 2) + 6} textAnchor="middle" className="fig-titulo">{z.titulo}</text>
        </g>
      ))}
      <text x={m(5.3)} y={m(3.05) + 20} textAnchor="middle" className="fig-nota">separado del polvo</text>

      {/* Recorrido de la madera */}
      <path d={`M${m(1)} ${m(1.2)} H${m(1.2)}`} stroke="#475569" strokeWidth="2.5" markerEnd="url(#taller-punta)" />
      <path d={`M${m(1.9)} ${m(1.2)} H${m(2.6)}`} stroke="#475569" strokeWidth="2.5" markerEnd="url(#taller-punta)" />
      <path d={`M${m(2.85)} ${m(1.6)} V${m(2.6)}`} stroke="#475569" strokeWidth="2.5" markerEnd="url(#taller-punta)" />
      <path d={`M${m(4.4)} ${m(2.9)} Q${m(4.6)} ${m(2.2)} ${m(4.8)} ${m(1.4)}`} stroke="#475569" strokeWidth="2.5" fill="none" markerEnd="url(#taller-punta)" />
      <path d={`M${m(5.3)} ${m(1.6)} V${m(2.3)}`} stroke="#475569" strokeWidth="2.5" markerEnd="url(#taller-punta)" />

      <text x={m(1.55)} y={m(3.75)} textAnchor="middle" className="fig-nota" style={{ fill: '#b91c1c' }}>Línea de corte libre</text>
      <text x={m(1.55)} y={m(3.75) + 12} textAnchor="middle" className="fig-nota" style={{ fill: '#b91c1c' }}>delante y detrás</text>
      <text x={m(0.1)} y={m(4) + 18} className="fig-nota">Puerta de ≥ 1,3 m para entrar placas · 6 × 4 m</text>
    </svg>
  )
}

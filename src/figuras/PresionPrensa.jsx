// Cómo se reparte la presión de las prensas en un encolado de canto, visto desde
// arriba. La presión se abre aproximadamente a 45° desde cada mordaza. Dibujo original.
const tabla = { stroke: '#7a4a22', strokeWidth: 1.2 }

function Encolado({ prensas, titulo, notas, ok }) {
  // Tablas de 200 × 30 cada una; la línea de cola está en y = 50.
  const cubre = prensas.map(({ x }) => [x - 30, x + 30])
  const huecos = []
  let desde = 10
  for (const [a, b] of [...cubre].sort((p, q) => p[0] - q[0])) {
    if (a > desde) huecos.push([desde, a])
    desde = Math.max(desde, b)
  }
  if (desde < 210) huecos.push([desde, 210])
  return (
    <>
      <rect x="10" y="20" width="200" height="30" fill="#e2b77d" {...tabla} />
      <rect x="10" y="50" width="200" height="30" fill="#d6a265" {...tabla} />
      {prensas.map(({ x, abajo }) => {
        const y = abajo ? 80 : 20
        const s = abajo ? -1 : 1
        return (
          <g key={x}>
            <path d={`M${x} ${y} L${x - 30} ${y + s * 30} H${x + 30} Z`} fill="#2563eb" fillOpacity="0.22" stroke="#2563eb" strokeWidth="0.8" />
            <rect x={x - 8} y={abajo ? 80 : 12} width="16" height="8" fill="#64748b" stroke="#334155" />
          </g>
        )
      })}
      <line x1="10" y1="50" x2="210" y2="50" stroke="#0f766e" strokeWidth="2" />
      {huecos.map(([a, b]) => (
        <line key={a} x1={a} y1="50" x2={b} y2="50" stroke="#dc2626" strokeWidth="4" />
      ))}
      <text x="110" y="110" textAnchor="middle" className="fig-titulo" style={{ fill: ok ? '#15803d' : '#dc2626' }}>{titulo}</text>
      {notas.map((n, k) => (
        <text key={n} x="110" y={125 + k * 13} textAnchor="middle" className="fig-nota">{n}</text>
      ))}
    </>
  )
}

export default function PresionPrensa() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 190" role="img" aria-label="Reparto de la presión de las prensas: muy separadas dejan zonas sin apretar, bien repartidas cubren toda la junta">
      <g transform="translate(10 10)">
        <Encolado
          prensas={[{ x: 50 }, { x: 170 }]}
          titulo="Prensas muy separadas"
          notas={['En rojo, la junta que queda sin apretar:', 'se abre o queda con cola gruesa.']}
        />
      </g>
      <g transform="translate(250 10)">
        <Encolado
          ok
          prensas={[{ x: 40 }, { x: 90, abajo: true }, { x: 140 }, { x: 180, abajo: true }]}
          titulo="Bien repartidas"
          notas={['Más prensas, alternadas, cubren', 'toda la junta sin curvar el tablero.']}
        />
      </g>
      <text x="240" y="182" textAnchor="middle" className="fig-nota">En azul, la zona donde llega la presión de cada mordaza, unos 45° hacia cada lado.</text>
    </svg>
  )
}

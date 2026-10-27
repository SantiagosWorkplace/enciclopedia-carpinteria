// Sección transversal de un tronco con sus capas. Dibujo original.
const C = { x: 150, y: 150 }
const pt = (r, ang) => [C.x + r * Math.cos((ang * Math.PI) / 180), C.y + r * Math.sin((ang * Math.PI) / 180)]

// Anillos: la línea gruesa y oscura es la madera tardía de cada año.
const anillos = Array.from({ length: 12 }, (_, i) => 12 + i * 9.4)
const radios = Array.from({ length: 24 }, (_, i) => i * 15)

const etiquetas = [
  { r: 127, ang: -62, y: 30, titulo: 'Corteza exterior', nota: 'Protege; está muerta' },
  { r: 121, ang: -42, y: 66, titulo: 'Floema', nota: 'Baja la savia elaborada' },
  { r: 118, ang: -22, y: 102, titulo: 'Cámbium', nota: 'Fabrica madera y floema' },
  { r: 100, ang: -4, y: 138, titulo: 'Albura', nota: 'Sube la savia; más clara' },
  { r: 56, ang: 16, y: 174, titulo: 'Duramen', nota: 'Inactivo; más durable' },
  { r: 92, ang: 45, y: 210, titulo: 'Radio medular', nota: 'Transporte hacia afuera' },
  { r: 77.8, ang: 70, y: 246, titulo: 'Anillo de un año', nota: 'Temprana clara + tardía oscura' },
  { r: 0, ang: 0, y: 282, titulo: 'Médula', nota: 'Centro blando del tronco' },
]

export default function SeccionTronco() {
  return (
    <svg viewBox="0 0 480 300" role="img" aria-label="Sección de un tronco: corteza, floema, cámbium, albura, duramen, radios, anillos y médula">
      <circle cx={C.x} cy={C.y} r="132" fill="#4e3322" />
      <circle cx={C.x} cy={C.y} r="122" fill="#a1703f" />
      <circle cx={C.x} cy={C.y} r="118.6" fill="#f3e1b8" stroke="#4f9a3c" strokeWidth="2.2" />
      <circle cx={C.x} cy={C.y} r="80" fill="#b9744a" />
      {/* Grietas de la corteza */}
      {Array.from({ length: 36 }, (_, i) => {
        const [x1, y1] = pt(123, i * 10)
        const [x2, y2] = pt(131, i * 10 + 3)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2e1e13" strokeWidth="1.2" />
      })}
      {radios.map((a) => {
        const [x1, y1] = pt(6, a)
        const [x2, y2] = pt(117, a)
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={a === 45 ? '#6b3f1e' : '#8a5a33'} strokeWidth={a === 45 ? 1.4 : 0.5} opacity={a === 45 ? 1 : 0.55} />
      })}
      {anillos.map((r) => (
        <circle key={r} cx={C.x} cy={C.y} r={r} fill="none" stroke={r < 80 ? '#7d4526' : '#c99a5e'} strokeWidth="2.6" />
      ))}
      <circle cx={C.x} cy={C.y} r="5" fill="#3b2414" />

      <g className="fig-leyenda">
        {etiquetas.map((e) => {
          const [x, y] = pt(e.r, e.ang)
          return (
            <g key={e.titulo}>
              <polyline points={`${x},${y} 296,${e.y - 4} 304,${e.y - 4}`} fill="none" stroke="#fff" strokeWidth="3.5" opacity=".8" />
              <polyline points={`${x},${y} 296,${e.y - 4} 304,${e.y - 4}`} fill="none" stroke="#2b1d12" strokeWidth="1" />
              <circle cx={x} cy={y} r="2.6" fill="#2b1d12" stroke="#fff" strokeWidth="1" />
              <text x="310" y={e.y} className="fig-titulo">{e.titulo}</text>
              <text x="310" y={e.y + 14} className="fig-nota">{e.nota}</text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}

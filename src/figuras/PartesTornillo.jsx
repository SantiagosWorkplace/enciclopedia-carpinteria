// Partes de un tornillo para madera y tres formas de cabeza. Dibujo original.
const metal = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1.2, strokeLinejoin: 'round' }

function rosca(x0, x1, yc, nucleo, cresta) {
  let d = `M${x0} ${yc - nucleo}`
  for (let x = x0; x < x1; x += 10) d += ` L${x + 5} ${yc - cresta} L${x + 10} ${yc - nucleo}`
  d += ` L${x1 + 20} ${yc} L${x1} ${yc + nucleo}`
  for (let x = x1; x > x0; x -= 10) d += ` L${x - 5} ${yc + cresta} L${x - 10} ${yc + nucleo}`
  return d + ' Z'
}

const partes = [
  { x: 41, texto: 'Cabeza' },
  { x: 96, texto: 'Caña' },
  { x: 210, texto: 'Rosca' },
  { x: 292, texto: 'Punta' },
]

const cabezas = [
  { y: 22, cana: 34, titulo: 'Avellanada', nota: 'Queda al ras', d: 'M340 22 H372 L362 34 H350 Z' },
  { y: 66, cana: 78, titulo: 'Gota de sebo', nota: 'Decorativa', d: 'M350 78 L340 70 Q356 58 372 70 L362 78 Z' },
  { y: 110, cana: 124, titulo: 'Alomada', nota: 'Sobre chapas', d: 'M340 124 Q340 108 356 108 Q372 108 372 124 Z' },
]

export default function PartesTornillo() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Partes de un tornillo para madera: cabeza, caña lisa, rosca y punta. A la derecha, tres cabezas de perfil: avellanada, gota de sebo y alomada">
      <path d="M30 40 V80 L52 66 V54 Z" {...metal} />
      <rect x="52" y="54" width="88" height="12" {...metal} />
      <path d={rosca(140, 280, 60, 3, 7)} {...metal} />
      {partes.map(({ x, texto }) => (
        <g key={texto}>
          <path d={`M${x} 86 V100`} stroke="#64748b" strokeWidth="1" />
          <text x={x} y="116" textAnchor="middle" className="fig-titulo">{texto}</text>
        </g>
      ))}
      <text x="165" y="140" textAnchor="middle" className="fig-nota">La caña lisa no rosca: deja que el tornillo apriete la pieza</text>
      {cabezas.map(({ y, cana, titulo, nota, d }) => (
        <g key={titulo}>
          <path d={d} {...metal} />
          <rect x="350" y={cana} width="12" height="10" {...metal} />
          <text x="384" y={y + 8} className="fig-titulo">{titulo}</text>
          <text x="384" y={y + 23} className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

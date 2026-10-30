// Tipos de formón con su sección, y los barridos de las gubias. Dibujo original.
const acero = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1.2 }
const mango = { fill: '#b45309', stroke: '#7a3a08', strokeWidth: 1.2 }

const formones = [
  { titulo: 'De banco', nota: 'Cantos biselados', hoja: 14, grueso: 5, seccion: 'M0 0 H24 L20 7 H4 Z' },
  { titulo: 'De mortajar', nota: 'Grueso: resiste palanca', hoja: 12, grueso: 11, seccion: 'M4 0 H16 V14 H4 Z' },
  { titulo: 'De ajustar', nota: 'Largo y fino, sin golpes', hoja: 14, grueso: 3, seccion: 'M0 0 H24 L22 4 H2 Z', largo: 1.25 },
]

// Barridos de gubia (escala usual): de casi plana a media caña y en U.
const barridos = [
  { n: 3, r: 80 }, { n: 5, r: 40 }, { n: 7, r: 27 }, { n: 9, r: 22 }, { n: 11, u: true },
]

export default function Formones() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 304" role="img" aria-label="Formones de banco, de mortajar y de ajustar con su sección, y barridos de gubias">
      {formones.map((f, i) => {
        const y = 30 + i * 56
        const largo = 130 * (f.largo || 1)
        return (
          <g key={f.titulo}>
            <rect x="20" y={y - 7} width="78" height="14" rx="6" {...mango} />
            <rect x="98" y={y - 4} width="10" height="8" fill="#64748b" />
            <path d={`M108 ${y - f.grueso / 2} H${108 + largo - 14} L${108 + largo} ${y + f.grueso / 2} H108 Z`} {...acero} />
            <g transform={`translate(${130 + largo} ${y - 7})`}><path d={f.seccion} {...acero} /></g>
            <text x="340" y={y - 2} className="fig-titulo">{f.titulo}</text>
            <text x="340" y={y + 12} className="fig-nota">{f.nota}</text>
          </g>
        )
      })}
      <text x="20" y="186" className="fig-nota">De costado, con el bisel en la punta; al lado, su sección transversal</text>

      <text x="20" y="216" className="fig-titulo">Gubias: barrido de la hoja</text>
      {barridos.map((b, i) => {
        const cx = 60 + i * 86
        const d = b.u ? `M${cx - 9} 238 V256 A9 9 0 0 0 ${cx + 9} 256 V238` : `M${cx - 22} 244 A${b.r} ${b.r} 0 0 0 ${cx + 22} 244`
        return (
          <g key={b.n}>
            <path d={d} fill="none" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
            <text x={cx} y="284" textAnchor="middle" className="fig-titulo">n.º {b.n}</text>
          </g>
        )
      })}
      <text x="240" y="298" textAnchor="middle" className="fig-nota">Cuanto mayor el número, más curva la hoja; el n.º 1 es plano</text>
    </svg>
  )
}

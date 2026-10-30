// Silla de comedor y mesa vistas de costado, con sus medidas habituales.
// Dibujo original a escala: 1,8 px por cm.
const madera = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const S = 1.8
const PISO = 200
const y = (cm) => PISO - cm * S

const cotas = [
  { letra: 'A', x1: 470, y1: y(75), x2: 470, y2: PISO, texto: 'Alto de mesa: 72 – 76 cm' },
  { letra: 'B', x1: 222, y1: y(45), x2: 222, y2: PISO, texto: 'Alto del asiento: 43 – 46 cm' },
  { letra: 'C', x1: 132, y1: y(45) - 12, x2: 208, y2: y(45) - 12, texto: 'Fondo del asiento: 40 – 45 cm' },
  { letra: 'D', x1: 112, y1: y(90), x2: 112, y2: PISO, texto: 'Respaldo, desde el suelo: 80 – 95 cm' },
]

export default function MedidasMesaSilla() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 256" role="img" aria-label="Silla de comedor y mesa de costado con cuatro medidas: alto de la mesa, alto del asiento, fondo del asiento y alto del respaldo">
      <path d="M10 200 H476" stroke="#57534e" strokeWidth="2" />
      <rect x="250" y={y(75)} width="210" height="6" {...madera} />
      <rect x="262" y={y(75) + 6} width="186" height="10" {...madera} />
      <rect x="262" y={y(75) + 6} width="8" height={75 * S - 6} {...madera} />
      <rect x="440" y={y(75) + 6} width="8" height={75 * S - 6} {...madera} />
      <path d={`M126 ${PISO} L130 ${y(90)} H137 L134 ${y(45)} V${PISO} Z`} {...madera} />
      <rect x="132" y={y(45)} width="78" height="6" {...madera} />
      <rect x="202" y={y(45) + 6} width="7" height={45 * S - 6} {...madera} />
      <rect x="134" y={y(45) + 18} width="70" height="5" {...madera} />
      {[y(85), y(72)].map((v) => <rect key={v} x="131" y={v} width="6" height="4" fill="#7a4a22" />)}
      {cotas.map(({ letra, x1, y1, x2, y2 }) => (
        <g key={letra}>
          <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke="#1d4ed8" strokeWidth="1.2" />
          <path d={x1 === x2 ? `M${x1 - 5} ${y1} H${x1 + 5} M${x2 - 5} ${y2} H${x2 + 5}` : `M${x1} ${y1 - 5} V${y1 + 5} M${x2} ${y2 - 5} V${y2 + 5}`} stroke="#1d4ed8" strokeWidth="1.2" />
          <circle cx={(x1 + x2) / 2} cy={(y1 + y2) / 2} r="8" fill="#1d4ed8" />
          <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 + 4} textAnchor="middle" className="fig-letra">{letra}</text>
        </g>
      ))}
      {cotas.map(({ letra, texto }, i) => (
        <g key={`t-${letra}`} transform={`translate(${20 + (i % 2) * 240} ${222 + Math.floor(i / 2) * 20})`}>
          <circle cx="7" cy="-4" r="7" fill="#1d4ed8" />
          <text x="7" y="0" textAnchor="middle" className="fig-letra" style={{ fontSize: 10 }}>{letra}</text>
          <text x="20" y="0" className="fig-nota">{texto}</text>
        </g>
      ))}
    </svg>
  )
}

// Formas de combinar hojas de chapa consecutivas. Cada rectángulo es una hoja;
// las líneas imitan el dibujo de catedral de una chapa de corte plano. Dibujo original.
const hoja = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1 }
const linea = { fill: 'none', stroke: '#a86b35', strokeWidth: 0.9 }

// Dibujo de catedral asimétrico dentro de una hoja de w × h, con la punta hacia arriba.
function Catedral({ w, h }) {
  const cx = w * 0.66
  return (
    <g clipPath={`url(#uc-hoja-${w}-${h})`}>
      <rect width={w} height={h} {...hoja} />
      {[0, 1, 2, 3, 4, 5].map((k) => {
        const ab = 4 + k * 5
        const pico = h * 0.18 + k * (h * 0.1)
        return <path key={k} d={`M${cx - ab} ${h + 2} C${cx - ab} ${pico + 10} ${cx - 2} ${pico} ${cx} ${pico} C${cx + 2} ${pico} ${cx + ab} ${pico + 10} ${cx + ab} ${h + 2}`} {...linea} />
      })}
      {[cx - 38, cx - 32, cx + 34].map((x) => <path key={x} d={`M${x} -2 V${h + 2}`} {...linea} />)}
      <rect width={w} height={h} fill="none" stroke="#7a4a22" strokeWidth="1" />
    </g>
  )
}

// Hoja con espejo horizontal (h) o vertical (v).
const Hoja = ({ x, y, w, h, espejoX, espejoY }) => (
  <g transform={`translate(${x + (espejoX ? w : 0)} ${y + (espejoY ? h : 0)}) scale(${espejoX ? -1 : 1} ${espejoY ? -1 : 1})`}>
    <Catedral w={w} h={h} />
  </g>
)

function Azar() {
  const anchos = [22, 30, 18, 30]
  let x = 0
  return anchos.map((w, i) => {
    const x0 = x
    x += w
    return (
      <g key={i}>
        <rect x={x0} y="0" width={w} height="100" fill={['#e2b77d', '#d6a265', '#e9c88f', '#dcae72'][i]} stroke="#7a4a22" strokeWidth="1" />
        {Array.from({ length: Math.floor(w / 5) }, (_, k) => (
          <path key={k} d={`M${x0 + 3 + k * 5 + (i % 2)} 2 Q${x0 + 4 + k * 5} 50 ${x0 + 3 + k * 5 + (i % 2)} 98`} {...linea} />
        ))}
      </g>
    )
  })
}

const paneles = [
  { titulo: 'Libro abierto', notas: ['Hojas en espejo', 'como un libro'], d: <><Hoja x={0} y={0} w={50} h={100} /><Hoja x={50} y={0} w={50} h={100} espejoX /></> },
  { titulo: 'Deslizado', notas: ['Hojas corridas', 'sin darlas vuelta'], d: <><Hoja x={0} y={0} w={50} h={100} /><Hoja x={50} y={0} w={50} h={100} /></> },
  {
    titulo: 'Cuarteado', notas: ['Cuatro hojas', 'en doble espejo'],
    d: (
      <>
        <Hoja x={0} y={0} w={50} h={50} />
        <Hoja x={50} y={0} w={50} h={50} espejoX />
        <Hoja x={0} y={50} w={50} h={50} espejoY />
        <Hoja x={50} y={50} w={50} h={50} espejoX espejoY />
      </>
    ),
  },
  { titulo: 'Al azar', notas: ['Anchos distintos,', 'como tablas'], d: <Azar /> },
]

export default function UnionesChapa() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 170" role="img" aria-label="Combinaciones de chapa: libro abierto, deslizado, cuarteado y al azar">
      <defs>
        <clipPath id="uc-hoja-50-100"><rect width="50" height="100" /></clipPath>
        <clipPath id="uc-hoja-50-50"><rect width="50" height="50" /></clipPath>
      </defs>
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${i * 120} 0)`}>
          <g transform="translate(10 8)">{p.d}</g>
          <text x="60" y="128" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          {p.notas.map((n, k) => (
            <text key={n} x="60" y={143 + k * 13} textAnchor="middle" className="fig-nota">{n}</text>
          ))}
        </g>
      ))}
    </svg>
  )
}

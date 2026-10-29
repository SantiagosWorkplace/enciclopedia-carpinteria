// Colas de milano. En las dos primeras, abajo la pieza de colas vista de cara y
// arriba la de espigas vista de testa: sus espigas llenan los huecos entre colas.
// Dibujo original; la pendiente de las colas es 1:6.
const caraColas = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.2 }
const testa = { fill: '#c98f55', stroke: '#7a4a22', strokeWidth: 1.2 }
const PEND = 6

// Contorno de la pieza de colas. x0, ancho w, extremo de las colas en yExt,
// largo de las colas L, n colas, media anchura de las espigas en el extremo h0.
function piezaColas({ x0, w, yExt, L, n, h0, yFin }) {
  const h1 = h0 + L / PEND
  const yBase = yExt + L
  const p = [[x0, yBase], [x0 + h1, yBase], [x0 + h0, yExt]]
  for (let k = 1; k < n; k++) {
    const c = x0 + (k * w) / n
    p.push([c - h0, yExt], [c - h1, yBase], [c + h1, yBase], [c + h0, yExt])
  }
  p.push([x0 + w - h0, yExt], [x0 + w - h1, yBase], [x0 + w, yBase], [x0 + w, yFin], [x0, yFin])
  return 'M' + p.map(([x, y]) => `${+x.toFixed(2)} ${+y.toFixed(2)}`).join(' L') + ' Z'
}

// Espigas vistas de testa, entre yE (lado de las colas) e yE + L, recortadas al ancho.
function espigas({ x0, w, yE, L, n, h0 }) {
  const h1 = h0 + L / PEND
  const lim = (x) => +Math.min(x0 + w, Math.max(x0, x)).toFixed(2)
  return Array.from({ length: n + 1 }, (_, k) => {
    const c = x0 + (k * w) / n
    return `M${lim(c - h0)} ${yE} L${lim(c + h0)} ${yE} L${lim(c + h1)} ${yE + L} L${lim(c - h1)} ${yE + L} Z`
  })
}

const vetaCara = (x0, w, y0, y1) =>
  Array.from({ length: 6 }, (_, i) => {
    const x = x0 + 8 + i * ((w - 16) / 5)
    return <path key={i} d={`M${x} ${y0} Q${x + 2} ${(y0 + y1) / 2} ${x} ${y1}`} fill="none" stroke="#b07a42" strokeWidth="0.8" />
  })

function Pareja({ oculta }) {
  const L = 16
  const T = oculta ? 24 : 16
  const yP = 36 - T
  const g = { x0: 5, w: 100, n: 3, h0: 4 }
  return (
    <>
      <rect x="5" y={yP} width="100" height={T} fill="#f6e6c8" stroke="#7a4a22" strokeWidth="0.8" strokeDasharray="3 2" />
      {oculta && <rect x="5" y={yP} width="100" height={T - L} {...testa} />}
      {espigas({ ...g, yE: 36 - L, L }).map((d) => <path key={d} d={d} {...testa} />)}
      <path d={piezaColas({ ...g, yExt: 52, L, yFin: 140 })} {...caraColas} />
      {vetaCara(5, 100, 72, 138)}
    </>
  )
}

const paneles = [
  { titulo: 'Pasante', notas: ['Colas y espigas se ven', 'en las dos caras'], d: <Pareja /> },
  { titulo: 'Oculta de un lado', notas: ['Un labio tapa las colas', 'del frente'], d: <Pareja oculta /> },
  {
    titulo: 'Deslizante', notas: ['Entra deslizando', 'por la ranura'],
    d: (
      <>
        <rect x="10" y="20" width="22" height="120" fill="#e2b77d" stroke="#7a4a22" strokeWidth="1.2" />
        <path d="M110 64 H32 V71 L23 69.5 V90.5 L32 89 V96 H110 Z" fill="#d6a265" stroke="#7a4a22" strokeWidth="1.2" />
      </>
    ),
  },
  {
    titulo: 'Pendiente', notas: ['1:6 en blandas,', '1:8 en duras'],
    d: (
      <>
        <path d="M30 40 H90 L80 120 H40 Z" {...caraColas} />
        <path d="M40 40 V120" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />
        <path d="M30 40 H40" stroke="#dc2626" strokeWidth="2" />
        <text x="35" y="33" textAnchor="middle" className="fig-titulo" style={{ fill: '#dc2626' }}>1</text>
        <text x="47" y="86" className="fig-titulo" style={{ fill: '#dc2626' }}>6</text>
      </>
    ),
  },
]

export default function TiposColaMilano() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 214" role="img" aria-label="Colas de milano pasante, oculta de un lado y deslizante, y su pendiente">
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${i * 120 + 5} 4)`}>
          {p.d}
          <text x="55" y="166" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          {p.notas.map((n, k) => (
            <text key={n} x="55" y={181 + k * 13} textAnchor="middle" className="fig-nota">{n}</text>
          ))}
        </g>
      ))}
    </svg>
  )
}

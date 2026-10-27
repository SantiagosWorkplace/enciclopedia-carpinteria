// Clasificación de una tabla según el ángulo de los anillos con la cara,
// y el aspecto de la veta que resulta en la cara. Dibujo original.
const L = 120
const CARA = 50
const TESTA = 36

const tipos = [
  {
    titulo: 'Tangencial', angulo: '0 – 30°',
    medula: [60, 120], radios: [86, 134, 7],
  },
  {
    titulo: 'Falso radial', angulo: '30 – 60°',
    medula: [10, 68], radios: [34, 132, 7],
  },
  {
    titulo: 'Radial', angulo: '60 – 90°',
    medula: [-60, 18], radios: [62, 184, 7],
  },
]

// Arcos anidados con el vértice hacia la derecha: la "catedral" de una cara tangencial.
const catedral = Array.from({ length: 7 }, (_, i) => {
  const a = 14 + i * 16
  const w = 5 + i * 5.5
  return `M0 ${CARA / 2 - w} Q${2 * a} ${CARA / 2} 0 ${CARA / 2 + w}`
})

function Cara({ i }) {
  if (i === 0) return catedral.map((d) => <path key={d} d={d} fill="none" stroke="#a46a35" strokeWidth="1.4" />)
  const lineas = Array.from({ length: i === 1 ? 9 : 13 }, (_, k) => (k + 0.7) * (CARA / (i === 1 ? 9 : 13)))
  return (
    <>
      {lineas.map((y) => <line key={y} x1="0" y1={y} x2={L} y2={y + (i === 1 ? 1.5 : 0.5)} stroke="#a46a35" strokeWidth="1.2" />)}
      {i === 2 && [[18, 12], [44, 30], [70, 9], [95, 36], [30, 42], [108, 19], [58, 22]].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="6" ry="1.6" fill="#f8e6c4" stroke="#c18a50" strokeWidth=".6" />
      ))}
    </>
  )
}

export default function OrientacionAnillos() {
  return (
    <svg viewBox="0 0 480 178" role="img" aria-label="Tablas tangencial, falso radial y radial: anillos en la testa y veta en la cara">
      <defs>
        <clipPath id="ori-cara"><rect width={L} height={CARA} rx="3" /></clipPath>
        <clipPath id="ori-testa"><rect width={L} height={TESTA} /></clipPath>
      </defs>
      {tipos.map((t, i) => {
        const [mx, my] = t.medula
        const [r0, r1, paso] = t.radios
        const radios = []
        for (let r = r0; r <= r1; r += paso) radios.push(r)
        return (
          <g key={t.titulo} transform={`translate(${20 + i * 155} 14)`}>
            {i === 0 && <text x="0" y="-3" className="fig-nota">Cara</text>}
            <g clipPath="url(#ori-cara)">
              <rect width={L} height={CARA} fill="#ecc994" />
              <Cara i={i} />
            </g>
            <rect width={L} height={CARA} rx="3" fill="none" stroke="#7a4a22" strokeWidth="1.2" />

            {i === 0 && <text x="0" y={CARA + 23} className="fig-nota">Testa</text>}
            <g transform={`translate(0 ${CARA + 27})`}>
              <g clipPath="url(#ori-testa)">
                <rect width={L} height={TESTA} fill="#e2b87e" />
                {radios.map((r) => <circle key={r} cx={mx} cy={my} r={r} fill="none" stroke="#8f5a2c" strokeWidth="1.3" />)}
              </g>
              <rect width={L} height={TESTA} fill="none" stroke="#7a4a22" strokeWidth="1.2" />
            </g>

            <g className="fig-leyenda">
              <text x={L / 2} y={CARA + 27 + TESTA + 18} textAnchor="middle" className="fig-titulo">{t.titulo}</text>
              <text x={L / 2} y={CARA + 27 + TESTA + 34} textAnchor="middle" className="fig-nota">Anillos a {t.angulo}</text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}

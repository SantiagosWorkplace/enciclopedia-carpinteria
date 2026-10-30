// Marcos de cuatro, seis y ocho lados: el corte se aparta de la escuadra
// 180° dividido por el número de lados. Dibujo original.
const tonos = ['#e9c88f', '#d6a265']
const ANCHO = 13

function Marco({ n }) {
  const R = 50
  const cx = 70
  const cy = 60
  const paso = (2 * Math.PI) / n
  const r = R - ANCHO / Math.cos(Math.PI / n)
  const ang = (k) => -Math.PI / 2 + (k + 0.5) * paso
  const ext = (k) => [cx + R * Math.cos(ang(k)), cy + R * Math.sin(ang(k))]
  const int = (k) => [cx + r * Math.cos(ang(k)), cy + r * Math.sin(ang(k))]
  const f = (q) => q.map((v) => v.toFixed(1)).join(',')
  // Esquina de arriba a la derecha (k = 0): el corte y la línea a escuadra.
  const O = ext(0)
  const I = int(0)
  const a0 = Math.PI / 2
  const a1 = Math.atan2(I[1] - O[1], I[0] - O[0])
  const rr = 20
  return (
    <>
      {Array.from({ length: n }, (_, k) => (
        <polygon key={k} points={[ext(k - 1), ext(k), int(k), int(k - 1)].map(f).join(' ')} fill={tonos[k % 2]} stroke="#7a4a22" strokeWidth="1.1" strokeLinejoin="round" />
      ))}
      <path d={`M${f(O)} V${(O[1] + ANCHO + 16).toFixed(1)}`} stroke="#1d4ed8" strokeWidth="1.4" strokeDasharray="3 2" />
      <path d={`M${f(O)} L${f([O[0] + (rr + 8) * Math.cos(a1), O[1] + (rr + 8) * Math.sin(a1)])}`} stroke="#1d4ed8" strokeWidth="1.4" />
      <path d={`M${(O[0] + rr * Math.cos(a0)).toFixed(1)} ${(O[1] + rr * Math.sin(a0)).toFixed(1)} A${rr} ${rr} 0 0 ${a1 > a0 ? 1 : 0} ${(O[0] + rr * Math.cos(a1)).toFixed(1)} ${(O[1] + rr * Math.sin(a1)).toFixed(1)}`} fill="none" stroke="#1d4ed8" strokeWidth="2" />
    </>
  )
}

const paneles = [
  { n: 4, titulo: '4 lados', nota: 'Corte a 45°' },
  { n: 6, titulo: '6 lados', nota: 'Corte a 30°' },
  { n: 8, titulo: '8 lados', nota: 'Corte a 22,5°' },
]

export default function AngulosInglete() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 158" role="img" aria-label="Marcos de cuatro, seis y ocho lados. En la esquina de arriba a la derecha de cada uno, un arco marca cuánto se aparta el corte de la escuadra: 45°, 30° y 22,5°">
      {paneles.map(({ n, titulo, nota }, i) => (
        <g key={n} transform={`translate(${10 + i * 160} 0)`}>
          <Marco n={n} />
          <text x="70" y="134" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="70" y="149" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

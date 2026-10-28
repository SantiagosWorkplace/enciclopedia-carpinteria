// Medidas de referencia para sentarse a una mesa y trabajar de pie.
// Dibujo original, a escala: 1,4 px por centímetro.
const K = 1.4
const PISO = 284
const y = (cm) => PISO - cm * K

const cota = { stroke: '#1d4ed8', strokeWidth: 1.2, markerStart: 'url(#med-tope)', markerEnd: 'url(#med-tope)' }
const madera = { fill: '#d9a86b', stroke: '#7a4a22', strokeWidth: 1.2 }
const persona = { fill: '#94a3b8', stroke: '#475569', strokeWidth: 1.2 }

function Cota({ x, desde, hasta, texto, lado = 1 }) {
  const medio = (y(desde) + y(hasta)) / 2
  return (
    <g>
      <line x1={x} y1={y(desde)} x2={x} y2={y(hasta)} {...cota} />
      <text x={x + 6 * lado} y={medio + 4} textAnchor={lado > 0 ? 'start' : 'end'} className="fig-titulo" style={{ fill: '#1d4ed8' }}>{texto}</text>
    </g>
  )
}

export default function MedidasCuerpo() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 300" role="img" aria-label="Persona sentada a una mesa y persona de pie ante una mesada, con las alturas recomendadas">
      <defs>
        <marker id="med-tope" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0 5 H10" stroke="#1d4ed8" strokeWidth="1.5" />
        </marker>
      </defs>
      <rect x="0" y={PISO} width="480" height="16" fill="#e7d8c2" />

      {/* Sentado: silla, mesa y persona */}
      <rect x="62" y={y(45)} width="60" height={4 * K} rx="2" {...madera} />
      <rect x="64" y={y(41)} width="5" height={41 * K} {...madera} />
      <rect x="114" y={y(41)} width="5" height={41 * K} {...madera} />
      <path d={`M64 ${y(45)} L58 ${y(88)} L63 ${y(88)} L69 ${y(45)} Z`} {...madera} />
      <rect x="112" y={y(75)} width="128" height={3 * K} {...madera} />
      <rect x="120" y={y(72)} width="114" height={8 * K} {...madera} />
      <rect x="226" y={y(72)} width="7" height={72 * K} {...madera} />

      <circle cx="83" cy={y(122)} r="12" {...persona} />
      <path d={`M72 ${y(108)} Q86 ${y(112)} 92 ${y(104)} L95 ${y(62)} L70 ${y(50)} Z`} {...persona} />
      <path d={`M72 ${y(52)} L140 ${y(55)} L142 ${y(47)} L72 ${y(46)} Z`} {...persona} />
      <path d={`M134 ${y(55)} L148 ${y(55)} L146 ${y(2)} L134 ${y(2)} Z`} {...persona} />
      <path d={`M80 ${y(102)} L96 ${y(70)} L150 ${y(79)} L150 ${y(84)} L94 ${y(78)} L76 ${y(98)} Z`} {...persona} />

      <Cota x={40} desde={0} hasta={45} texto="45" lado={-1} />
      <Cota x={250} desde={0} hasta={75} texto="75" />
      <line x1="160" y1={y(0)} x2="160" y2={y(64)} {...cota} />
      <text x="166" y={y(32)} className="fig-nota">libre ≈ 64</text>

      {/* De pie: mesada y alacena */}
      <rect x="376" y={y(90)} width="88" height={4 * K} {...madera} />
      <rect x="380" y={y(86)} width="80" height={86 * K} fill="#e9c896" stroke="#7a4a22" strokeWidth="1.2" />
      <rect x="410" y={y(196)} width="54" height={(196 - 145) * K} fill="#e9c896" stroke="#7a4a22" strokeWidth="1.2" />

      <circle cx="342" cy={y(160)} r="12" {...persona} />
      <path d={`M330 ${y(148)} L356 ${y(148)} L354 ${y(92)} L332 ${y(92)} Z`} {...persona} />
      <path d={`M334 ${y(94)} L352 ${y(94)} L352 ${y(0)} L340 ${y(0)} Z`} {...persona} />
      <path d={`M350 ${y(144)} L356 ${y(108)} L388 ${y(102)} L388 ${y(97)} L352 ${y(101)} L344 ${y(140)} Z`} {...persona} />

      <Cota x={472} desde={0} hasta={90} texto="90" lado={-1} />
      <Cota x={400} desde={90} hasta={145} texto="≈ 55" lado={-1} />
      <line x1="300" y1={y(105)} x2="368" y2={y(105)} stroke="#dc2626" strokeDasharray="4 3" />
      <text x="300" y={y(105) - 5} className="fig-nota">codo ≈ 105</text>

      <g className="fig-leyenda">
        <text x="140" y="24" textAnchor="middle" className="fig-titulo">Sentado</text>
        <text x="380" y="24" textAnchor="middle" className="fig-titulo">De pie</text>
        <text x="140" y="40" textAnchor="middle" className="fig-nota">Medidas en centímetros, desde el suelo</text>
      </g>
    </svg>
  )
}

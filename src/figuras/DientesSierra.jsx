// Dientes de sierra: al hilo, al través y japonesa. Perfil y vista desde
// arriba con el triscado. Dibujo original, muy ampliado.
const P = 22 // paso entre dientes
const N = 6
const BASE = 64
const PUNTA = 40

// Cada tipo define dónde queda la punta del diente respecto de su hueco.
const tipos = [
  { titulo: 'Al hilo', nota: 'Dientes como formones', punta: 0, sentido: -1, corte: 'Corta al empujar' },
  { titulo: 'Al través', nota: 'Dientes como cuchillas', punta: 5, sentido: -1, corte: 'Corta al empujar' },
  { titulo: 'Japonesa', nota: 'Dientes hacia el mango', punta: P - 3, sentido: 1, corte: 'Corta al tirar' },
]

const perfil = (punta) => {
  let d = `M0 ${BASE + 20} V${BASE}`
  for (let i = 0; i < N; i++) d += ` L${i * P + punta} ${PUNTA} L${(i + 1) * P} ${BASE}`
  return d + ` V${BASE + 20} Z`
}

export default function DientesSierra() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 236" role="img" aria-label="Perfil y triscado de los dientes de sierra al hilo, al través y japonesa">
      <defs>
        <marker id="sie-punta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#dc2626" />
        </marker>
      </defs>
      {tipos.map((t, k) => (
        <g key={t.titulo} transform={`translate(${14 + k * 158} 8)`}>
          <path d={perfil(t.punta)} fill="#cbd5e1" stroke="#334155" strokeWidth="1.4" strokeLinejoin="round" />
          {t.punta === 5 && Array.from({ length: N }, (_, i) => (
            <line key={i} x1={i * P + 5} y1={PUNTA} x2={i * P + 12} y2={BASE - 6} stroke="#64748b" strokeWidth="1" />
          ))}
          <line x1={t.sentido < 0 ? 110 : 20} y1="20" x2={t.sentido < 0 ? 20 : 110} y2="20" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#sie-punta)" />
          <text x="65" y="12" textAnchor="middle" className="fig-nota">{t.corte}</text>

          {/* Vista desde arriba: dientes doblados a uno y otro lado */}
          <rect x="0" y="118" width={N * P} height="4" fill="#94a3b8" />
          {Array.from({ length: N }, (_, i) => (
            <rect key={i} x={i * P + 4} y={i % 2 ? 122 : 114} width="10" height="4" fill="#334155" />
          ))}
          <line x1="0" y1="111" x2={N * P} y2="111" stroke="#c2410c" strokeDasharray="3 2" />
          <line x1="0" y1="129" x2={N * P} y2="129" stroke="#c2410c" strokeDasharray="3 2" />
          <text x="0" y="104" className="fig-nota">Vista desde arriba</text>
          <text x="0" y="144" className="fig-nota">Corte más ancho que la hoja</text>

          <text x="65" y="182" textAnchor="middle" className="fig-titulo">{t.titulo}</text>
          <text x="65" y="198" textAnchor="middle" className="fig-nota">{t.nota}</text>
        </g>
      ))}
      <text x="240" y="230" textAnchor="middle" className="fig-nota">Las líneas naranjas marcan el ancho del corte que abre el triscado</text>
    </svg>
  )
}

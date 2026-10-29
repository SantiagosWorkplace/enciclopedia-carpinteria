// Etapas de una talla en relieve y diferencia entre bajo y altorrelieve, en
// sección transversal. Dibujo original; las profundidades están exageradas.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.3, strokeLinejoin: 'round' }
const sombra = { fill: '#5a3418', opacity: 0.55 }
const original = { stroke: '#7a4a22', strokeWidth: 1, strokeDasharray: '3 3', opacity: 0.7 }

const etapas = [
  { titulo: '1 Contornear', nota: 'Gubia en V', d: 'M0 40 H21 L26 50 L31 40 H73 L78 50 L83 40 H104 V90 H0 Z' },
  { titulo: '2 Rebajar', nota: 'Fondo parejo', d: 'M0 52 H26 V40 H78 V52 H104 V90 H0 Z', linea: true },
  { titulo: '3 Modelar', nota: 'Dar volumen', d: 'M0 52 H26 C28 44 38 40 52 40 C66 40 76 44 78 52 H104 V90 H0 Z', linea: true },
  {
    titulo: '4 Terminar', nota: 'Socavar y detallar', linea: true,
    d: 'M0 52 H32 Q24 51 26 45 C30 42 42 41 52 41 C62 41 74 42 78 45 Q80 51 72 52 H104 V90 H0 Z',
    extra: (
      <>
        <path d="M32 52 Q24 51 26 45 L22 52 Z" {...sombra} />
        <path d="M72 52 Q80 51 78 45 L82 52 Z" {...sombra} />
        <path d="M38 47 Q44 44 49 47 M55 47 Q61 44 66 47" fill="none" stroke="#9a6234" strokeWidth="1" />
      </>
    ),
  },
]

export default function EtapasRelieve() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 270" role="img" aria-label="Etapas de la talla en relieve en sección, y comparación entre bajorrelieve y altorrelieve">
      {etapas.map((e, i) => (
        <g key={e.titulo} transform={`translate(${8 + i * 120} 0)`}>
          <path d={e.d} {...madera} />
          {e.extra}
          {e.linea && <path d="M0 40 H104" {...original} />}
          <text x="52" y="112" textAnchor="middle" className="fig-titulo">{e.titulo}</text>
          <text x="52" y="127" textAnchor="middle" className="fig-nota">{e.nota}</text>
        </g>
      ))}

      <g transform="translate(20 0)">
        <path d="M0 171 H60 C66 166 84 165 100 165 C116 165 134 166 140 171 H200 V205 H0 Z" {...madera} />
        <path d="M0 165 H200" {...original} />
        <text x="100" y="245" textAnchor="middle" className="fig-titulo">Bajorrelieve</text>
        <text x="100" y="260" textAnchor="middle" className="fig-nota">Poco fondo, casi sin socavar</text>
      </g>
      <g transform="translate(260 0)">
        <path d="M0 195 H72 Q56 192 60 180 C66 166 84 165 100 165 C116 165 134 166 140 180 Q144 192 128 195 H200 V225 H0 Z" {...madera} />
        <path d="M72 195 Q56 192 60 180 L52 195 Z" {...sombra} />
        <path d="M128 195 Q144 192 140 180 L148 195 Z" {...sombra} />
        <path d="M0 165 H200" {...original} />
        <text x="100" y="245" textAnchor="middle" className="fig-titulo">Altorrelieve</text>
        <text x="100" y="260" textAnchor="middle" className="fig-nota">Fondo hondo y bordes socavados</text>
      </g>
    </svg>
  )
}

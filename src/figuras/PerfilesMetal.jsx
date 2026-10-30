// Secciones de los perfiles metálicos más usados en muebles. Dibujo original;
// los espesores de pared están exagerados para que se lean.
const metal = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1.2, fillRule: 'evenodd' }

const anillo = (cx, cy, r) => `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0 Z`

const perfiles = [
  { titulo: 'Cuadrado', nota: 'Patas y bastidores', d: 'M40 20 H80 V60 H40 Z M44 24 V56 H76 V24 Z' },
  { titulo: 'Rectangular', nota: 'Travesaños y marcos', d: 'M30 25 H90 V55 H30 Z M34 29 V51 H86 V29 Z' },
  { titulo: 'Redondo', nota: 'Patas y barandas', d: `${anillo(60, 40, 22)} ${anillo(60, 40, 18)}` },
  { titulo: 'Ángulo', nota: 'Escuadras y apoyos', d: 'M38 18 V62 H82 V57 H43 V18 Z' },
  { titulo: 'Pletina', nota: 'Refuerzos y soportes', d: 'M30 37 H90 V43 H30 Z' },
  { titulo: 'Perfil T', nota: 'Rieles y apoyos', d: 'M35 20 H85 V25 H62.5 V62 H57.5 V25 H35 Z' },
  { titulo: 'Perfil U', nota: 'Cantos y guías', d: 'M38 20 V60 H82 V20 H77 V55 H43 V20 Z' },
  { titulo: 'Varilla', nota: 'Ejes y tiradores', d: anillo(60, 40, 12) },
]

export default function PerfilesMetal() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 230" role="img" aria-label="Secciones de ocho perfiles metálicos: tubo cuadrado, tubo rectangular, tubo redondo, ángulo, pletina, perfil T, perfil U y varilla">
      {perfiles.map(({ titulo, nota, d }, i) => (
        <g key={titulo} transform={`translate(${(i % 4) * 120} ${Math.floor(i / 4) * 115})`}>
          <path d={d} {...metal} />
          <text x="60" y="86" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="60" y="101" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

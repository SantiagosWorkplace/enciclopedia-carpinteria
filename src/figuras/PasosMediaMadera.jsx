// Cuatro pasos de una media madera en cruz. Pasos 1, 2 y 4: la pieza vista de
// canto; paso 3: vista desde arriba. Dibujo original, esquemático.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2, strokeLinejoin: 'round' }
const oscura = { fill: '#d6a265', stroke: '#7a4a22', strokeWidth: 1.2, strokeLinejoin: 'round' }
const lapiz = { stroke: '#334155', strokeWidth: 1.1 }
const gramil = { stroke: '#1d4ed8', strokeWidth: 1.2, strokeDasharray: '4 3' }
const corte = { stroke: '#5b3416', strokeWidth: 1.6 }
const mango = { fill: '#a16207', stroke: '#713f12', strokeWidth: 1 }

function Marcar() {
  return (
    <>
      <rect x="4" y="54" width="104" height="30" {...madera} />
      <rect x="40" y="22" width="32" height="30" fill="#b98a52" stroke="#7a4a22" strokeWidth="1.2" />
      <path d="M44 48 Q56 30 68 48 M50 48 Q56 38 62 48" fill="none" stroke="#7a4a22" strokeWidth="0.8" />
      <path d="M40 52 V84 M72 52 V84" {...lapiz} />
      <path d="M40 69 H72" {...gramil} />
      <path d="M53 58 L59 64 M59 58 L53 64" stroke="#b91c1c" strokeWidth="1.4" />
    </>
  )
}

function Serrar() {
  return (
    <>
      <rect x="4" y="54" width="104" height="30" {...madera} />
      <path d="M40 54 V84 M72 54 V84" {...lapiz} />
      <path d="M40 69 H72" {...gramil} />
      <path d="M41 54 V69 M71 54 V69" {...corte} />
      <path d="M48 54 V69 M56 54 V69 M64 54 V69" stroke="#5b3416" strokeWidth="1" />
      <path d="M64 66 V8" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
      <path d="M59 4 H69 L70 16 H60 Z" {...mango} />
    </>
  )
}

function Vaciar() {
  return (
    <>
      <rect x="4" y="30" width="104" height="60" {...madera} />
      <rect x="40" y="30" width="32" height="60" fill="#d9b07a" stroke="#7a4a22" strokeWidth="1" />
      <rect x="48" y="62" width="16" height="30" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
      <rect x="50" y="92" width="12" height="14" rx="2" {...mango} />
      <path d="M56 6 V24" stroke="#15803d" strokeWidth="2.5" markerEnd="url(#pmm-f)" />
    </>
  )
}

function Probar() {
  return (
    <>
      <rect x="4" y="54" width="104" height="30" {...madera} />
      <rect x="40" y="54" width="32" height="30" {...oscura} />
      <path d="M40 69 H72" stroke="#7a4a22" strokeWidth="0.8" strokeDasharray="2 2" />
      <path d="M2 51 H110" stroke="#475569" strokeWidth="3" />
      <path d="M2 87 H110" stroke="#475569" strokeWidth="3" />
    </>
  )
}

const paneles = [
  { titulo: 'Marcar', nota: 'Cuchilla y gramil', C: Marcar },
  { titulo: 'Serrar', nota: 'Cortes intermedios', C: Serrar },
  { titulo: 'Vaciar', nota: 'Desde los dos cantos', C: Vaciar },
  { titulo: 'Probar', nota: 'Debe quedar a ras', C: Probar },
]

export default function PasosMediaMadera() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Cuatro pasos de una media madera: marcar el ancho con la otra pieza y la mitad del espesor con el gramil, serrar los hombros y cortes intermedios, vaciar con el formón desde los dos cantos y comprobar que las piezas quedan a ras">
      <defs>
        <marker id="pmm-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#15803d" />
        </marker>
      </defs>
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${4 + i * 118} 6)`}>
          <C />
          <circle cx="6" cy="4" r="8" fill="#b45309" />
          <text x="6" y="8" textAnchor="middle" className="fig-letra" style={{ fontSize: 10 }}>{i + 1}</text>
          <text x="57" y="128" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="57" y="143" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

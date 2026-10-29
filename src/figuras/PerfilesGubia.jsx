// Formas de la caña de las gubias vistas de costado, y la cola de pez de frente.
// Dibujo original; el filo está abajo y el frente de corte hacia la derecha.
const mango = { fill: '#b45309', stroke: '#7a3a08', strokeWidth: 1.2 }

const formas = [
  { titulo: 'Recta', nota: 'Uso general', d: (x) => `M${x} 66 V150` },
  { titulo: 'Curva', nota: 'Huecos largos', d: (x) => `M${x} 66 Q${x + 18} 108 ${x} 150` },
  { titulo: 'Cuchara', nota: 'Fondos hondos', d: (x) => `M${x} 66 V122 C${x} 138 ${x + 4} 146 ${x + 15} 149` },
  { titulo: 'Cuchara inversa', nota: 'Socavados', d: (x) => `M${x} 66 V122 C${x} 138 ${x - 4} 146 ${x - 15} 149` },
  { titulo: 'Cola de pez', nota: 'Fondos y rincones', frente: true },
]

export default function PerfilesGubia() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 200" role="img" aria-label="Gubias recta, curva, de cuchara, de cuchara inversa y de cola de pez">
      {formas.map((f, i) => {
        const x = 48 + i * 96
        return (
          <g key={f.titulo}>
            <rect x={x - 8} y="8" width="16" height="50" rx="6" {...mango} />
            <rect x={x - 5} y="58" width="10" height="8" fill="#64748b" />
            {f.frente ? (
              <path d={`M${x - 2.5} 66 V118 L${x - 14} 150 H${x + 14} L${x + 2.5} 118 V66 Z`} fill="#cbd5e1" stroke="#334155" strokeWidth="1.2" strokeLinejoin="round" />
            ) : (
              <>
                <path d={f.d(x)} fill="none" stroke="#334155" strokeWidth="7" strokeLinecap="round" />
                <path d={f.d(x)} fill="none" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
              </>
            )}
            <text x={x} y="174" textAnchor="middle" className="fig-titulo">{f.titulo}</text>
            <text x={x} y="190" textAnchor="middle" className="fig-nota">{f.nota}</text>
          </g>
        )
      })}
    </svg>
  )
}

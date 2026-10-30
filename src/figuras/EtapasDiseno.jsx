// Las nueve etapas del diseño de un mueble, agrupadas en tres fases.
// Dibujo original.
const fases = [
  { nombre: 'Pensar', color: '#0e7490', pasos: ['Necesidad', 'Medir el lugar', 'Referencias'] },
  { nombre: 'Diseñar', color: '#b45309', pasos: ['Bocetos', 'Estructura', 'Maqueta', 'Plano'] },
  { nombre: 'Preparar', color: '#15803d', pasos: ['Lista de corte', 'Orden de trabajo'] },
]

const X0 = 30
const PASO = 50

export default function EtapasDiseno() {
  let n = 0
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Las nueve etapas del diseño de un mueble en tres fases: pensar (necesidad, medir el lugar, referencias), diseñar (bocetos, estructura, maqueta, plano) y preparar (lista de corte, orden de trabajo)">
      <path d={`M${X0} 70 H${X0 + 8 * PASO}`} stroke="#94a3b8" strokeWidth="2" />
      {fases.map(({ nombre, color, pasos }) => {
        const inicio = n
        const grupo = pasos.map((p) => {
          const i = n++
          const x = X0 + i * PASO
          return (
            <g key={p}>
              <circle cx={x} cy="70" r="13" fill={color} />
              <text x={x} y="74.5" textAnchor="middle" className="fig-letra">{i + 1}</text>
              <text x={x} y={i % 2 ? 44 : 104} textAnchor="middle" className="fig-nota">{p}</text>
            </g>
          )
        })
        const x0 = X0 + inicio * PASO - 16
        const x1 = X0 + (n - 1) * PASO + 16
        return (
          <g key={nombre}>
            {grupo}
            <path d={`M${x0} 122 V128 H${x1} V122`} fill="none" stroke={color} strokeWidth="2" />
            <text x={(x0 + x1) / 2} y="146" textAnchor="middle" className="fig-titulo" style={{ fill: color }}>{nombre}</text>
          </g>
        )
      })}
    </svg>
  )
}

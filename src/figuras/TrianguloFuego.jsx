// El triángulo del fuego aplicado al taller. Dibujo original.
const lados = [
  { x: 240, y: 30, titulo: 'Combustible', nota: 'Viruta, polvo, trapos, solventes' },
  { x: 86, y: 230, titulo: 'Oxígeno', nota: 'El aire del taller' },
  { x: 394, y: 230, titulo: 'Calor', nota: 'Chispas, estufas, aceites' },
]

export default function TrianguloFuego() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 280" role="img" aria-label="Triángulo del fuego: combustible, oxígeno y calor, con ejemplos del taller">
      <polygon points="240,58 120,212 360,212" fill="#fed7aa" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" />
      <path d="M240 186 C210 170 214 138 236 118 C232 140 252 142 250 124 C268 140 272 172 240 186 Z" fill="#f97316" stroke="#c2410c" strokeWidth="1.4" />
      <path d="M240 182 C226 172 228 156 240 146 C242 160 252 162 248 170 C252 176 248 180 240 182 Z" fill="#fde047" />
      {lados.map((l) => (
        <g key={l.titulo}>
          <text x={l.x} y={l.y} textAnchor="middle" className="fig-titulo">{l.titulo}</text>
          <text x={l.x} y={l.y + 15} textAnchor="middle" className="fig-nota">{l.nota}</text>
        </g>
      ))}
      <text x="240" y="258" textAnchor="middle" className="fig-nota">Si falta cualquiera de los tres, no hay fuego.</text>
      <text x="240" y="272" textAnchor="middle" className="fig-nota">En el taller se controlan sobre todo el combustible y el calor.</text>
    </svg>
  )
}

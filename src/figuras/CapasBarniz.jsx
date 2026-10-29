// Las capas de un barnizado en sección, con el lijado entre manos.
// Dibujo original; los espesores están muy exagerados.
const capas = [
  { y: 52, texto: 'Mano final, sin lijar', opacidad: 0.85 },
  { y: 66, texto: 'Segunda mano', opacidad: 0.7 },
  { y: 80, texto: 'Sellador: primera mano diluida', opacidad: 0.5 },
]

export default function CapasBarniz() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 164" role="img" aria-label="Capas de barniz en sección: sellador, segunda mano y mano final, con lijado fino entre manos">
      <text x="20" y="34" className="fig-titulo">Capas de un barnizado</text>
      <rect x="20" y="94" width="220" height="44" fill="#e9c88f" stroke="#7a4a22" strokeWidth="1.2" />
      {[106, 118, 130].map((y) => <path key={y} d={`M22 ${y} H238`} stroke="#c9a06a" strokeWidth="0.9" />)}
      {capas.map((c) => (
        <g key={c.y}>
          <rect x="20" y={c.y} width="220" height="14" fill="#d97706" opacity={c.opacidad} />
          <path d={`M240 ${c.y + 7} H262`} stroke="#94a3b8" strokeWidth="1" />
          <text x="268" y={c.y + 11} className="fig-nota">{c.texto}</text>
        </g>
      ))}
      {[66, 80].map((y) => <path key={y} d={`M20 ${y} H240`} stroke="#fff" strokeWidth="1.4" strokeDasharray="4 3" />)}
      <path d="M240 116 H262" stroke="#94a3b8" strokeWidth="1" />
      <text x="268" y="120" className="fig-nota">Madera lijada</text>
      <text x="20" y="156" className="fig-nota">Las líneas blancas marcan el lijado fino entre una mano y la siguiente</text>
    </svg>
  )
}

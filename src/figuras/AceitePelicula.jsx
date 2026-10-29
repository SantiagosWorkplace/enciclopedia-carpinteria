// Dónde queda cada acabado, en sección: el aceite dentro de la madera, el
// barniz como película encima y el aceite-barniz a mitad de camino. Dibujo original.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const acabado = '#d97706'

const paneles = [
  { titulo: 'Aceite', nota: 'Dentro de la madera', dentro: 10, pelicula: 0 },
  { titulo: 'Barniz', nota: 'Una película encima', dentro: 2, pelicula: 9 },
  { titulo: 'Aceite-barniz', nota: 'Película fina', dentro: 6, pelicula: 4 },
]

export default function AceitePelicula() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 150" role="img" aria-label="Sección de la madera con aceite, con barniz y con aceite-barniz">
      {paneles.map((p, i) => (
        <g key={p.titulo} transform={`translate(${10 + i * 160} 0)`}>
          <rect x="0" y="50" width="140" height="56" {...madera} />
          {[62, 74, 86, 98].map((y) => <path key={y} d={`M2 ${y} H138`} stroke="#c9a06a" strokeWidth="0.9" />)}
          <rect x="0.6" y="50.6" width="138.8" height={p.dentro} fill={acabado} opacity="0.35" />
          {p.pelicula > 0 && <rect x="0" y={50 - p.pelicula} width="140" height={p.pelicula} fill={acabado} opacity="0.7" stroke="#b45309" strokeWidth="0.8" />}
          <text x="70" y="128" textAnchor="middle" className="fig-titulo">{p.titulo}</text>
          <text x="70" y="143" textAnchor="middle" className="fig-nota">{p.nota}</text>
        </g>
      ))}
    </svg>
  )
}

// Comprobar que la testa está a escuadra en los dos sentidos: a la izquierda,
// la pieza vista desde arriba; a la derecha, vista de canto. Dibujo original.
const madera = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const hoja = { fill: '#cbd5e1', stroke: '#475569', strokeWidth: 1 }
const mango = { fill: '#92400e', stroke: '#451a03', strokeWidth: 1 }
const veta = (y0, y1, n) => Array.from({ length: n }, (_, k) => y0 + ((k + 1) * (y1 - y0)) / (n + 1))

function Ancho() {
  return (
    <>
      <rect x="20" y="30" width="180" height="80" {...madera} />
      {veta(30, 110, 5).map((y) => <path key={y} d={`M24 ${y} Q100 ${y - 3} 172 ${y}`} fill="none" stroke="#c99a5c" strokeWidth="0.8" />)}
      <rect x="186" y="24" width="14" height="86" {...hoja} />
      <rect x="170" y="110" width="30" height="14" rx="1" {...mango} />
      {[176, 194].map((x) => <circle key={x} cx={x} cy="117" r="1.6" fill="#fde68a" />)}
    </>
  )
}

function Grueso() {
  return (
    <>
      <rect x="20" y="60" width="180" height="20" {...madera} />
      <path d="M24 70 H172" stroke="#c99a5c" strokeWidth="0.8" />
      <rect x="170" y="46" width="30" height="14" rx="1" {...mango} />
      {[176, 194].map((x) => <circle key={x} cx={x} cy="53" r="1.6" fill="#fde68a" />)}
      <rect x="186" y="60" width="14" height="46" {...hoja} />
    </>
  )
}

const paneles = [
  { titulo: 'A lo ancho', nota: 'Escuadra contra el canto', C: Ancho },
  { titulo: 'A lo grueso', nota: 'Escuadra contra la cara', C: Grueso },
]

export default function TestaEscuadra() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 170" role="img" aria-label="Comprobar la testa con una escuadra en los dos sentidos: con la pieza vista desde arriba, el talón contra el canto y la hoja sobre la cara junto a la testa; con la pieza vista de canto, el talón sobre la cara y la hoja contra el canto. En los dos casos no debe verse luz bajo la hoja">
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${10 + i * 240} 0)`}>
          <C />
          <text x="110" y="146" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="110" y="161" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

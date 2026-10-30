// Cinco clavos frecuentes en carpintería, de perfil. Dibujo original.
const metal = { fill: '#cbd5e1', stroke: '#334155', strokeWidth: 1.1, strokeLinejoin: 'round' }

const cana = (y0, y1, r) => `M48 ${y0} H${48 + r} V${y1} L48 ${y1 + 6} L${48 - r} ${y1} V${y0} Z`

function anillos() {
  let d = 'M46.5 24'
  for (let y = 30; y <= 90; y += 6) d += ` L46.5 ${y - 3} L44.5 ${y} L46.5 ${y}`
  d += ' V96 L48 102 L49.5 96'
  for (let y = 90; y >= 30; y -= 6) d += ` V${y} L51.5 ${y} L49.5 ${y - 3}`
  return d + ' V24 Z'
}

const clavos = [
  { titulo: 'Cabeza plana', nota: 'Uso general', partes: [cana(23, 96, 1.5), 'M40 20 H56 V23 H40 Z'] },
  { titulo: 'Cabeza perdida', nota: 'Se hunde y tapa', partes: [cana(24, 96, 1.5), 'M45 20 H51 L49.5 24 H46.5 Z'] },
  { titulo: 'Puntilla', nota: 'Molduras finas', partes: [cana(26, 96, 0.9), 'M46.6 24 H49.4 V26 H46.6 Z'] },
  { titulo: 'Anillado', nota: 'No se sale', partes: [anillos(), 'M41 20 H55 V24 H41 Z'] },
  { titulo: 'Tachuela', nota: 'Tapicería', partes: ['M46 63 H50 L48 84 Z', 'M38 60 Q48 54 58 60 V63 H38 Z'] },
]

export default function TiposClavo() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 155" role="img" aria-label="Cinco clavos de perfil: de cabeza plana, de cabeza perdida, puntilla sin cabeza, clavo anillado y tachuela">
      {clavos.map(({ titulo, nota, partes }, i) => (
        <g key={titulo} transform={`translate(${i * 96} 0)`}>
          {partes.map((d) => <path key={d} d={d} {...metal} />)}
          <text x="48" y="128" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="48" y="143" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

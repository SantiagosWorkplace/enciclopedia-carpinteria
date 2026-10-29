// Perfiles que dejan las fresas más comunes en el canto de una tabla.
// Cada dibujo es la sección de la tabla después de fresar. Dibujo original.
const madera = { fill: '#e2b77d', stroke: '#7a4a22', strokeWidth: 1.4, strokeLinejoin: 'round' }
const W = 70
const H = 46

const perfiles = [
  { titulo: 'Recta', nota: 'Ranuras y rebajos', d: `M0 0 H${W} V${H} H0 Z`, ranura: true },
  { titulo: 'Rebajo', nota: 'Con rodamiento', d: `M0 0 H${W - 16} V18 H${W} V${H} H0 Z` },
  { titulo: 'Media caña', nota: 'Canal redondo', d: `M0 0 H22 A12 12 0 0 0 46 0 H${W} V${H} H0 Z` },
  { titulo: 'Cuarto bocel', nota: 'Canto redondeado', d: `M0 0 H${W - 18} A18 18 0 0 1 ${W} 18 V${H} H0 Z` },
  { titulo: 'Chaflán', nota: 'Bisel a 45°', d: `M0 0 H${W - 16} L${W} 16 V${H} H0 Z` },
  { titulo: 'Moldura', nota: 'Cuarto bocel con filete', d: `M0 0 H${W - 22} V4 A14 14 0 0 1 ${W - 4} 18 H${W} V${H} H0 Z` },
  { titulo: 'Cola de milano', nota: 'Ranura en trapecio', d: `M0 0 H${W} V${H} H0 Z`, cola: true },
  { titulo: 'En V', nota: 'Rotulado y decoración', d: `M0 0 H${W} V${H} H0 Z`, v: true },
]

export default function PerfilesFresa() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 236" role="img" aria-label="Perfiles de fresas: recta, rebajo, media caña, cuarto bocel, chaflán, moldura, cola de milano y en V">
      {perfiles.map((p, i) => {
        const x = 24 + (i % 4) * 116
        const y = 18 + Math.floor(i / 4) * 112
        return (
          <g key={p.titulo} transform={`translate(${x} ${y})`}>
            <path d={p.d} {...madera} fillRule="evenodd" />
            {p.ranura && <rect x="24" y="0" width="16" height="20" fill="#fffaf2" stroke="#7a4a22" strokeWidth="1.2" />}
            {p.cola && <path d="M27 0 L20 22 H50 L43 0 Z" fill="#fffaf2" stroke="#7a4a22" strokeWidth="1.2" />}
            {p.v && <path d="M23 0 L35 16 L47 0 Z" fill="#fffaf2" stroke="#7a4a22" strokeWidth="1.2" />}
            <text x={W / 2} y={H + 22} textAnchor="middle" className="fig-titulo">{p.titulo}</text>
            <text x={W / 2} y={H + 37} textAnchor="middle" className="fig-nota">{p.nota}</text>
          </g>
        )
      })}
    </svg>
  )
}

// Afilado de gubias visto desde la punta: bisel exterior, rebaba interior y gubia en V.
// Dibujo original.
import { arco } from './arcos.js'

const acero = { fill: 'none', stroke: '#334155', strokeWidth: 6, strokeLinecap: 'round' }
const piedra = { fill: '#94a3b8', stroke: '#475569', strokeWidth: 1 }

export default function AfilarGubia() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 180" role="img" aria-label="Afilado de una gubia: rodar el bisel sobre la piedra, quitar la rebaba con una piedra de perfil y afilar cada ala de la gubia en V">
      <defs>
        <marker id="ag-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#b45309" />
        </marker>
      </defs>

      <g>
        <rect x="20" y="110" width="120" height="20" rx="2" {...piedra} />
        <path d={arco(80, 88, 22, 340, 200)} {...acero} opacity="0.25" transform="rotate(-30 80 88)" />
        <path d={arco(80, 88, 22, 340, 200)} {...acero} opacity="0.25" transform="rotate(30 80 88)" />
        <path d={arco(80, 88, 22, 340, 200)} {...acero} />
        <path d={arco(80, 88, 40, 150, 30)} fill="none" stroke="#b45309" strokeWidth="2" markerStart="url(#ag-f)" markerEnd="url(#ag-f)" />
        <text x="80" y="156" textAnchor="middle" className="fig-titulo">Bisel exterior</text>
        <text x="80" y="171" textAnchor="middle" className="fig-nota">Rodar la gubia al afilar</text>
      </g>

      <g transform="translate(160 0)">
        <path d={arco(80, 80, 26, 350, 190)} {...acero} />
        <path d="M63 34 L64 86 A16 16 0 0 0 96 86 L97 34 Z" {...piedra} />
        <text x="80" y="156" textAnchor="middle" className="fig-titulo">Rebaba interior</text>
        <text x="80" y="171" textAnchor="middle" className="fig-nota">Piedra de perfil por dentro</text>
      </g>

      <g transform="translate(320 0)">
        <path d="M42.3 54.6 L72.3 104.6 M117.7 54.6 L87.7 104.6" stroke="#94a3b8" strokeWidth="7" />
        <path d="M50 50 L80 100 L110 50" {...acero} strokeLinejoin="round" />
        <text x="80" y="156" textAnchor="middle" className="fig-titulo">Gubia en V</text>
        <text x="80" y="171" textAnchor="middle" className="fig-nota">Cada ala, como un formón</text>
      </g>
    </svg>
  )
}

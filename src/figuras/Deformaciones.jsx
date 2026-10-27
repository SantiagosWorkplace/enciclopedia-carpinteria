// Cómo se deforma cada pieza según su posición en el tronco. Dibujo original;
// las deformaciones están exageradas para que se aprecien.
const C = { x: 150, y: 150 }

const Pieza = ({ original, deformada, letra, lx, ly }) => (
  <g>
    {original}
    {deformada}
    <circle cx={lx} cy={ly} r="10" fill="#1f2937" />
    <text x={lx} y={ly + 4} textAnchor="middle" className="fig-letra">{letra}</text>
  </g>
)

const orig = { fill: 'none', stroke: '#1f2937', strokeWidth: 1.2, strokeDasharray: '4 3' }
const def = { fill: 'rgba(181, 101, 43, .55)', stroke: '#7c3a12', strokeWidth: 1.6 }

export default function Deformaciones() {
  return (
    <svg viewBox="0 0 300 300" role="img" aria-label="Sección de tronco con piezas deformadas por la contracción">
      <circle cx={C.x} cy={C.y} r="138" fill="#7a5134" />
      <circle cx={C.x} cy={C.y} r="130" fill="#f0d3a4" />
      <circle cx={C.x} cy={C.y} r="130" fill="url(#def-albura)" />
      <defs>
        <radialGradient id="def-albura">
          <stop offset="70%" stopColor="#d8a56a" stopOpacity=".55" />
          <stop offset="100%" stopColor="#f6e3c2" stopOpacity=".2" />
        </radialGradient>
      </defs>
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={i} cx={C.x} cy={C.y} r={15 + i * 15} fill="none" stroke="#a67543" strokeWidth={i % 2 ? 0.8 : 1.4} />
      ))}
      <circle cx={C.x} cy={C.y} r="3" fill="#5b3a1e" />

      <Pieza
        letra="a" lx={222} ly={30}
        original={<rect x="95" y="40" width="110" height="30" {...orig} />}
        deformada={<path d="M98 41 Q150 60 202 41 L200 64 Q150 84 100 64 Z" {...def} />}
      />
      <Pieza
        letra="b" lx={282} ly={150}
        original={<rect x="165" y="138" width="105" height="24" {...orig} />}
        deformada={<rect x="167" y="140.5" width="100" height="19" {...def} />}
      />
      <Pieza
        letra="c" lx={50} ly={252}
        original={<rect x="65" y="195" width="40" height="40" {...orig} />}
        deformada={<path d="M70 200 L104 196 L100 230 L66 234 Z" {...def} />}
      />
      <Pieza
        letra="d" lx={22} ly={124}
        original={<circle cx="45" cy="150" r="14" {...orig} />}
        deformada={<ellipse cx="45" cy="150" rx="13.5" ry="11" {...def} />}
      />
      <Pieza
        letra="e" lx={190} ly={278}
        original={<rect x="130" y="222" width="40" height="38" {...orig} />}
        deformada={<rect x="134" y="223" width="32" height="36" {...def} />}
      />
    </svg>
  )
}

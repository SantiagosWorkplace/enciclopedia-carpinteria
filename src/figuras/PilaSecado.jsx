// Pila de secado al aire vista de costado, y el error de los separadores
// desalineados. Dibujo original y esquemático (no está a escala).
const SUELO = 235
const COLUMNAS = [60, 140, 220, 300]
const CAPAS = 6

const flecha = { stroke: '#2563eb', strokeWidth: 2, fill: 'none', markerEnd: 'url(#pila-punta)' }
const cota = { stroke: '#2b1d12', strokeWidth: 1, markerStart: 'url(#pila-tope)', markerEnd: 'url(#pila-tope)' }

export default function PilaSecado() {
  const capas = Array.from({ length: CAPAS }, (_, i) => 178 - i * 16)
  return (
    <svg viewBox="0 0 500 290" role="img" aria-label="Pila de madera con separadores alineados, base elevada y techo; al lado, una tabla deformada por separadores desalineados">
      <defs>
        <marker id="pila-punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#2563eb" />
        </marker>
        <marker id="pila-tope" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M5 0 V10" stroke="#2b1d12" strokeWidth="1.5" />
        </marker>
      </defs>

      <rect x="0" y={SUELO} width="500" height="8" fill="#8b9a6b" />
      {/* Apoyos y durmiente */}
      {COLUMNAS.map((x) => <rect key={x} x={x - 11} y="196" width="22" height={SUELO - 196} fill="#9ca3af" stroke="#4b5563" />)}
      <rect x="40" y="184" width="280" height="12" fill="#8a6a4a" stroke="#4a3322" />

      {/* Capas: separadores encima de cada apoyo y una tabla por capa */}
      {capas.map((y) => (
        <g key={y}>
          {COLUMNAS.map((x) => <rect key={x} x={x - 6} y={y} width="12" height="6" fill="#6b4a2e" />)}
          <rect x="44" y={y - 10} width="272" height="10" fill="#e8c18a" stroke="#8a5a2b" strokeWidth=".8" />
          <rect x="44" y={y - 10} width="4" height="10" fill="#dc2626" />
          <rect x="312" y={y - 10} width="4" height="10" fill="#dc2626" />
        </g>
      ))}
      {COLUMNAS.map((x) => <rect key={x} x={x - 6} y="82" width="12" height="6" fill="#6b4a2e" />)}

      {/* Techo con alero y pesos */}
      <rect x="22" y="76" width="316" height="6" fill="#475569" />
      <rect x="85" y="56" width="34" height="20" fill="#9ca3af" stroke="#4b5563" />
      <rect x="241" y="56" width="34" height="20" fill="#9ca3af" stroke="#4b5563" />

      {/* Aire entre capas */}
      {capas.map((y) => <line key={y} x1="6" y1={y + 3} x2="38" y2={y + 3} {...flecha} />)}

      <g className="fig-leyenda">
        <text x="180" y="50" textAnchor="middle" className="fig-titulo">Techo con alero y peso</text>
        <text x="4" y="78" className="fig-nota">Aire</text>
        <line x1="60" y1="252" x2="140" y2="252" {...cota} />
        <text x="100" y="268" textAnchor="middle">40 – 60 cm</text>
        <text x="100" y="280" textAnchor="middle" className="fig-nota">entre separadores</text>
        <line x1="336" y1="196" x2="336" y2={SUELO} {...cota} />
        <text x="342" y="212">≥ 30 cm</text>
        <text x="342" y="225" className="fig-nota">del suelo</text>
        <text x="232" y="268" className="fig-nota">Separadores alineados sobre los apoyos</text>
        <text x="232" y="280" className="fig-nota" style={{ fill: '#dc2626' }}>Rojo: testas selladas</text>
      </g>

      {/* Error: separador fuera de los apoyos */}
      <g>
        <rect x="381" y="205" width="14" height={SUELO - 205} fill="#9ca3af" stroke="#4b5563" />
        <rect x="471" y="205" width="14" height={SUELO - 205} fill="#9ca3af" stroke="#4b5563" />
        <rect x="374" y="195" width="118" height="10" fill="#e8c18a" stroke="#8a5a2b" strokeWidth=".8" />
        <rect x="427" y="189" width="12" height="6" fill="#6b4a2e" />
        <path d="M374 183 Q433 175 492 183 L492 193 Q433 185 374 193 Z" fill="#e8c18a" stroke="#8a5a2b" strokeWidth=".8" />
        <line x1="374" y1="179" x2="492" y2="179" stroke="#2b1d12" strokeDasharray="3 3" strokeWidth=".8" />
        <circle cx="433" cy="140" r="13" fill="#dc2626" />
        <path d="M427 134 L439 146 M439 134 L427 146" stroke="#fff" strokeWidth="2.5" />
      </g>
      <g className="fig-leyenda">
        <text x="433" y="112" textAnchor="middle" className="fig-titulo">Desalineado</text>
        <text x="433" y="258" textAnchor="middle" className="fig-nota">El separador no está</text>
        <text x="433" y="270" textAnchor="middle" className="fig-nota">sobre un apoyo:</text>
        <text x="433" y="282" textAnchor="middle" className="fig-nota">la tabla se curva</text>
      </g>
    </svg>
  )
}

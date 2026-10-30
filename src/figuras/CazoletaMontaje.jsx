// Las tres posiciones de una puerta con bisagra de cazoleta, vistas desde
// arriba. Dibujo original y esquemático; el frente del mueble queda arriba.
const lateral = { fill: '#e9c88f', stroke: '#7a4a22', strokeWidth: 1.2 }
const puerta = { fill: '#d9b277', stroke: '#7a4a22', strokeWidth: 1.2 }
const copa = { fill: '#94a3b8', stroke: '#334155', strokeWidth: 1 }
const brazo = { fill: 'none', stroke: '#334155', strokeWidth: 3, strokeLinejoin: 'round' }

function Base({ placaY }) {
  return (
    <>
      <rect x="56" y="30" width="16" height="82" {...lateral} />
      <rect x="72" y={placaY} width="4" height="22" {...copa} />
    </>
  )
}

function Superpuesta() {
  return (
    <>
      <Base placaY={40} />
      <rect x="56" y="14" width="74" height="16" {...puerta} />
      <rect x="82" y="18" width="14" height="12" {...copa} />
      <path d="M89 30 V36 L76 48" {...brazo} />
    </>
  )
}

function Semi() {
  return (
    <>
      <Base placaY={40} />
      <rect x="10" y="14" width="52" height="16" fill="none" stroke="#7a4a22" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="66" y="14" width="64" height="16" {...puerta} />
      <rect x="88" y="18" width="14" height="12" {...copa} />
      <path d="M95 30 V36 L84 40 L76 48" {...brazo} />
    </>
  )
}

function Embutida() {
  return (
    <>
      <Base placaY={52} />
      <rect x="74" y="30" width="56" height="16" {...puerta} />
      <rect x="90" y="34" width="14" height="12" {...copa} />
      <path d="M97 46 V52 L84 54 L76 62" {...brazo} />
    </>
  )
}

const paneles = [
  { titulo: 'Superpuesta', nota: 'Brazo recto', C: Superpuesta },
  { titulo: 'Semisuperpuesta', nota: 'Brazo con codo', C: Semi },
  { titulo: 'Embutida', nota: 'Brazo con codo grande', C: Embutida },
]

export default function CazoletaMontaje() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 160" role="img" aria-label="Puertas con bisagra de cazoleta vistas desde arriba: superpuesta, que tapa todo el canto del lateral; semisuperpuesta, que tapa la mitad y deja la otra mitad a la puerta vecina; y embutida, dentro del mueble, al ras del frente">
      {paneles.map(({ titulo, nota, C }, i) => (
        <g key={titulo} transform={`translate(${10 + i * 160} 0)`}>
          <C />
          <text x="70" y="134" textAnchor="middle" className="fig-titulo">{titulo}</text>
          <text x="70" y="149" textAnchor="middle" className="fig-nota">{nota}</text>
        </g>
      ))}
    </svg>
  )
}

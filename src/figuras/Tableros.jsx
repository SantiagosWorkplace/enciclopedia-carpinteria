// Tableros manufacturados: cara superior y sección de cada uno.
// Dibujo original y esquemático; los espesores no están a escala.
const L = 150
const D = 40 // profundidad de la cara superior antes de proyectar
const CARA = 'matrix(1 0 0.6 -0.4 0 0)'

const azar = (semilla) => () => (semilla = (semilla * 16807) % 2147483647) / 2147483647
const ns = { vectorEffect: 'non-scaling-stroke' }

function contrachapado() {
  const capa = 6
  return {
    h: 7 * capa,
    cara: <>{[6, 13, 19, 27, 34].map((v) => <line key={v} x1="0" y1={v} x2={L} y2={v + 1} stroke="#c9975c" {...ns} />)}</>,
    seccion: Array.from({ length: 7 }, (_, i) => (
      <g key={i}>
        <rect y={i * capa} width={L} height={capa} fill={i % 2 ? '#dba86b' : '#efcb92'} stroke="#8a5a2b" strokeWidth=".6" />
        {i % 2
          ? <line x1="0" y1={i * capa + 3} x2={L} y2={i * capa + 3} stroke="#b77d44" strokeWidth=".7" />
          : Array.from({ length: 30 }, (_, k) => <circle key={k} cx={2.5 + k * 5} cy={i * capa + 3} r=".9" fill="#b77d44" />)}
      </g>
    )),
  }
}

function alistonado() {
  return {
    h: 42,
    cara: <>{[5, 14, 22, 31].map((v) => <line key={v} x1="0" y1={v} x2={L} y2={v} stroke="#c9975c" {...ns} />)}</>,
    seccion: (
      <>
        {Array.from({ length: 8 }, (_, k) => (
          <g key={k}>
            <rect x={k * 18.75} y="4" width="18.75" height="34" fill={k % 2 ? '#e4b77a' : '#d6a265'} stroke="#8a5a2b" strokeWidth=".6" />
            <circle cx={k * 18.75 + (k % 2 ? 2 : 17)} cy="44" r="18" fill="none" stroke="#b07a42" strokeWidth=".7" />
            <circle cx={k * 18.75 + (k % 2 ? 2 : 17)} cy="44" r="26" fill="none" stroke="#b07a42" strokeWidth=".7" />
          </g>
        ))}
        <rect width={L} height="4" fill="#efcb92" stroke="#8a5a2b" strokeWidth=".6" />
        <rect y="38" width={L} height="4" fill="#efcb92" stroke="#8a5a2b" strokeWidth=".6" />
      </>
    ),
  }
}

function aglomerado() {
  const r = azar(11)
  const particulas = []
  for (let i = 0; i < 260; i++) {
    const x = r() * L
    const y = r() * 40
    const fina = y < 7 || y > 33
    const t = fina ? 0.6 + r() * 0.6 : 1.4 + r() * 2.4
    particulas.push(<rect key={i} x={x} y={y} width={t * 1.8} height={t} transform={`rotate(${r() * 180 - 90} ${x} ${y})`}
      fill={['#c99a61', '#e0bb83', '#b8864f', '#f0d3a2'][i % 4]} />)
  }
  return {
    h: 40,
    cara: <>{Array.from({ length: 120 }, (_, i) => <circle key={i} cx={r() * L} cy={r() * D} r=".8" fill={i % 2 ? '#c99a61' : '#b8864f'} />)}</>,
    seccion: <><rect width={L} height="40" fill="#d8b27a" />{particulas}</>,
    fondo: '#ead2a6',
  }
}

function mdf() {
  const r = azar(5)
  return {
    h: 40,
    cara: null,
    seccion: (
      <>
        <rect width={L} height="40" fill="#c8955e" />
        <rect width={L} height="3" fill="#b07c45" />
        <rect y="37" width={L} height="3" fill="#b07c45" />
        {Array.from({ length: 220 }, (_, i) => <circle key={i} cx={r() * L} cy={r() * 40} r=".45" fill="#a46f3c" />)}
      </>
    ),
    fondo: '#d4a46c',
  }
}

function osb() {
  const r = azar(29)
  const virutas = (n, y0, y1, largo) => Array.from({ length: n }, (_, i) => (
    <ellipse key={`${y0}-${i}`} cx={r() * L} cy={y0 + r() * (y1 - y0)} rx={largo * (0.5 + r() * 0.6)} ry={0.9 + r() * 0.6}
      fill={['#d9ad6a', '#c48f4e', '#e8c487', '#b67f42'][i % 4]} stroke="#8a5a2b" strokeWidth=".3" />
  ))
  return {
    h: 40,
    cara: <>{Array.from({ length: 34 }, (_, i) => {
      const x = r() * (L - 10)
      const y = r() * (D - 6)
      return <rect key={i} x={x} y={y} width={18 + r() * 14} height={4 + r() * 3} transform={`rotate(${r() * 24 - 12} ${x} ${y})`}
        fill={['#d9ad6a', '#c48f4e', '#e8c487', '#b67f42'][i % 4]} stroke="#8a5a2b" strokeWidth=".4" {...ns} />
    })}</>,
    seccion: <><rect width={L} height="40" fill="#c99a5a" />{virutas(60, 1, 11, 3)}{virutas(50, 12, 28, 12)}{virutas(60, 29, 39, 3)}</>,
    fondo: '#d6a96a',
  }
}

function duro() {
  return {
    h: 10,
    cara: null,
    seccion: <><rect width={L} height="10" fill="#6b4226" /><rect width={L} height="1.6" fill="#8a5734" /></>,
    fondo: '#86532f',
  }
}

const tableros = [
  { f: contrachapado, titulo: 'Contrachapado', nota: 'Chapas cruzadas · 450–700 kg/m³' },
  { f: alistonado, titulo: 'Alistonado', nota: 'Núcleo de listones · 450–550 kg/m³' },
  { f: aglomerado, titulo: 'Aglomerado', nota: 'Partículas · 600–700 kg/m³' },
  { f: mdf, titulo: 'MDF', nota: 'Fibras finas · 650–800 kg/m³' },
  { f: osb, titulo: 'OSB', nota: 'Virutas orientadas · 600–680 kg/m³' },
  { f: duro, titulo: 'Tablero duro', nota: 'Fibras muy prensadas · 900+ kg/m³' },
]

function Tablero({ f, x, y }) {
  const { h, cara, seccion, fondo = '#efcf9a' } = f()
  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform={CARA}>
        <clipPath id={`tab-${x}-${y}`}><rect width={L} height={D} /></clipPath>
        <rect width={L} height={D} fill={fondo} {...ns} />
        <g clipPath={`url(#tab-${x}-${y})`}>{cara}</g>
        <rect width={L} height={D} fill="none" stroke="#7a4a22" {...ns} />
      </g>
      <path d={`M${L} 0 L${L + 24} -16 L${L + 24} ${h - 16} L${L} ${h} Z`} fill="#a8723f" stroke="#7a4a22" />
      <clipPath id={`tab-s-${x}-${y}`}><rect width={L} height={h} /></clipPath>
      <g clipPath={`url(#tab-s-${x}-${y})`}>{seccion}</g>
      <rect width={L} height={h} fill="none" stroke="#7a4a22" />
    </g>
  )
}

export default function Tableros() {
  return (
    <svg viewBox="0 0 480 336" role="img" aria-label="Contrachapado, alistonado, aglomerado, MDF, OSB y tablero duro vistos en sección">
      {tableros.map((t, i) => {
        const x = (i % 2) * 245 + 18
        const y = Math.floor(i / 2) * 112 + 28
        return (
          <g key={t.titulo}>
            <Tablero f={t.f} x={x} y={y} />
            <g className="fig-leyenda">
              <text x={x} y={y + 62} className="fig-titulo">{t.titulo}</text>
              <text x={x} y={y + 77} className="fig-nota">{t.nota}</text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}

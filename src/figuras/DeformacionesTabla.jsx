// Las cuatro deformaciones de una tabla, en perspectiva caballera.
// Dibujo original; las deformaciones están exageradas.
const L = 150 // largo
const W = 40 // ancho (se dibuja en profundidad)
const T = 7 // espesor
const N = 24 // puntos por borde

// Proyección: el ancho retrocede hacia arriba a la derecha.
const proyectar = ([x, y, z]) => [x + z * 0.55, -y - z * 0.75]

// Cada deformación devuelve la posición 3D de un punto de la cara superior.
const deformaciones = [
  {
    titulo: 'Abarquillado', nota: 'Curva a lo ancho',
    f: (x, z) => [x, 11 * ((z - W / 2) / (W / 2)) ** 2, z],
    // Testa ampliada: la cara que miraba a la corteza queda cóncava.
    extra: (
      <g transform="translate(146 18)">
        <path d="M0 0 Q36 26 72 0 L72 9 Q36 35 0 9 Z" fill="#b5733f" stroke="#7a4a22" />
        {[0, 1, 2].map((k) => <path key={k} d={`M${6 + k * 4} ${4 + k * 1.6} Q36 ${22 + k * 1.2} ${66 - k * 4} ${4 + k * 1.6}`} fill="none" stroke="#e0b07a" strokeWidth=".9" />)}
        <text x="78" y="10" className="fig-nota">testa</text>
      </g>
    ),
  },
  {
    titulo: 'Arqueado', nota: 'Curva a lo largo, en la cara',
    f: (x, z) => [x, 15 * (1 - ((x - L / 2) / (L / 2)) ** 2), z],
  },
  {
    titulo: 'Combado', nota: 'Curva a lo largo, en el canto',
    f: (x, z) => [x, 0, z + 14 * (1 - ((x - L / 2) / (L / 2)) ** 2)],
  },
  {
    titulo: 'Alabeo', nota: 'Las esquinas no quedan en un plano',
    // Tres esquinas apoyadas en la mesa y la cuarta levantada.
    f: (x, z) => [x, 18 * (x / L) * (z / W), z],
    plano: true,
  },
]

const borde = (f, desde, hasta, fijo, porX) =>
  Array.from({ length: N + 1 }, (_, i) => {
    const t = desde + ((hasta - desde) * i) / N
    return porX ? f(t, fijo) : f(fijo, t)
  })

const abajo = (pts) => pts.map(([x, y, z]) => [x, y - T, z])
const camino = (pts, ox, oy) =>
  pts.map((p, i) => {
    const [sx, sy] = proyectar(p)
    return `${i ? 'L' : 'M'}${(ox + sx).toFixed(1)} ${(oy + sy).toFixed(1)}`
  }).join(' ') + ' Z'

function Tabla({ f, ox, oy, plano }) {
  const frente = borde(f, 0, L, 0, true)
  const fondo = borde(f, 0, L, W, true)
  const derecha = borde(f, 0, W, L, false)
  const izquierda = borde(f, 0, W, 0, false)
  const cara = [...frente, ...derecha, ...fondo.slice().reverse(), ...izquierda.slice().reverse()]
  const canto = [...frente, ...abajo(frente).reverse()]
  const testa = [...derecha, ...abajo(derecha).reverse()]
  return (
    <g strokeLinejoin="round">
      <path d={camino(cara, ox, oy)} fill="#efcb95" stroke="#7a4a22" strokeWidth="1.1" />
      {[0.3, 0.55, 0.8].map((k) => (
        <path key={k} d={camino(borde(f, 4, L - 4, W * k, true), ox, oy).replace(' Z', '')} fill="none" stroke="#c38d52" strokeWidth=".8" />
      ))}
      <path d={camino(canto, ox, oy)} fill="#cf9558" stroke="#7a4a22" strokeWidth="1.1" />
      <path d={camino(testa, ox, oy)} fill="#b5733f" stroke="#7a4a22" strokeWidth="1.1" />
      {plano && (
        <path d={camino([[L, 0, 0], [L, 0, W], [0, 0, W]], ox, oy).replace(' Z', '')} fill="none" stroke="#2b1d12" strokeDasharray="4 3" />
      )}
    </g>
  )
}

export default function DeformacionesTabla() {
  return (
    <svg viewBox="0 0 480 300" role="img" aria-label="Tablas con abarquillado, arqueado, combado y alabeo">
      {deformaciones.map((d, i) => {
        const cx = (i % 2) * 240
        const cy = Math.floor(i / 2) * 150
        return (
          <g key={d.titulo}>
            <Tabla f={d.f} ox={cx + 34} oy={cy + 100} plano={d.plano} />
            {d.extra && <g transform={`translate(${cx} ${cy})`}>{d.extra}</g>}
            <g className="fig-leyenda">
              <text x={cx + 120} y={cy + 131} textAnchor="middle" className="fig-titulo">{d.titulo}</text>
              <text x={cx + 120} y={cy + 145} textAnchor="middle" className="fig-nota">{d.nota}</text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}

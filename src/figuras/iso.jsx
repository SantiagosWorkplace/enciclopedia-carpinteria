// Ayudas para dibujos en perspectiva isométrica. Ejes: x hacia la derecha y
// abajo, z hacia la izquierda y abajo, y hacia arriba. Se ven las caras que
// miran a +x, +y y +z.
const K = Math.cos(Math.PI / 6)

export const MADERA_CLARA = { y: '#f3d9ab', z: '#e2b77d', x: '#cd9d60', testa: '#b98a52' }
export const MADERA_OSCURA = { y: '#e3b47a', z: '#cf9a5c', x: '#b57f44', testa: '#9c6a35' }
export const TRAZO = '#7a4a22'

export function proyeccion(ox, oy, s = 1) {
  return ([x, y, z]) => [ox + (x - z) * K * s, oy + ((x + z) / 2 - y) * s]
}

const a3d = {
  y: (u, v, w) => [u, w, v],
  x: (u, v, w) => [w, v, u],
  z: (u, v, w) => [u, v, w],
}

// Prisma: un contorno 2D extruido a lo largo de un eje, de a0 a a1.
// Contorno en (x, z) si el eje es y; en (z, y) si es x; en (x, y) si es z.
// veta: eje de la veta, para pintar las testas.
export function prisma(contorno, eje, a0, a1, veta) {
  const p3 = (u, v, w) => a3d[eje](u, v, w)
  let area = 0
  contorno.forEach(([u, v], i) => {
    const [u2, v2] = contorno[(i + 1) % contorno.length]
    area += u * v2 - u2 * v
  })
  const caras = []
  contorno.forEach(([u, v], i) => {
    const [u2, v2] = contorno[(i + 1) % contorno.length]
    const n2 = area > 0 ? [v2 - v, u - u2] : [v - v2, u2 - u]
    const n = a3d[eje](n2[0], n2[1], 0)
    caras.push({ pts: [p3(u, v, a0), p3(u2, v2, a0), p3(u2, v2, a1), p3(u, v, a1)], n })
  })
  caras.push({ pts: contorno.map(([u, v]) => p3(u, v, a1)), n: a3d[eje](0, 0, 1) })
  return caras
    .filter(({ n }) => n[0] + n[1] + n[2] > 1e-6)
    .map(({ pts, n }) => {
      const m = n.map(Math.abs)
      const dom = m[1] >= m[0] && m[1] >= m[2] ? 'y' : m[0] >= m[2] ? 'x' : 'z'
      return { pts, tono: dom === veta ? 'testa' : dom }
    })
}

export function caja([x, y, z], [w, h, d], veta) {
  return prisma([[x, z], [x + w, z], [x + w, z + d], [x, z + d]], 'y', y, y + h, veta)
}

const prof = ({ pts }) => pts.reduce((s, [x, y, z]) => s + x + y + z, 0) / pts.length

// Dibuja las caras de uno o más sólidos, de atrás hacia adelante.
export function Solido({ p, caras, tonos = MADERA_CLARA, orden = true }) {
  const lista = orden ? [...caras].sort((a, b) => prof(a) - prof(b)) : caras
  return lista.map((c, i) => (
    <polygon
      key={i}
      points={c.pts.map((q) => p(q).map((n) => n.toFixed(1)).join(',')).join(' ')}
      fill={c.fill ?? tonos[c.tono]}
      stroke={TRAZO}
      strokeWidth="1"
      strokeLinejoin="round"
    />
  ))
}

export const puntos = (p, lista) => lista.map((q) => p(q).map((n) => n.toFixed(1)).join(',')).join(' ')

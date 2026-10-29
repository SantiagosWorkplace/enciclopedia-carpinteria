// Ayudas para dibujar curvas. Los ángulos van en grados, medidos como en
// matemática (0° a la derecha, 90° arriba), y se recorren de a0 hacia a1 en
// sentido horario sobre la pantalla cuando a0 > a1.
const rad = (a) => (a * Math.PI) / 180
const f = (n) => +n.toFixed(2)

export const pt = (cx, cy, r, a) => [f(cx + r * Math.cos(rad(a))), f(cy - r * Math.sin(rad(a)))]

// Arco abierto de radio r entre a0 y a1.
export function arco(cx, cy, r, a0, a1) {
  const [x0, y0] = pt(cx, cy, r, a0)
  const [x1, y1] = pt(cx, cy, r, a1)
  const grande = Math.abs(a0 - a1) > 180 ? 1 : 0
  return `M${x0} ${y0} A${r} ${r} 0 ${grande} ${a0 > a1 ? 1 : 0} ${x1} ${y1}`
}

// Franja curva entre los radios r1 (interior) y r2 (exterior).
export function banda(cx, cy, r1, r2, a0, a1) {
  const [x0, y0] = pt(cx, cy, r2, a0)
  const [x1, y1] = pt(cx, cy, r2, a1)
  const [x2, y2] = pt(cx, cy, r1, a1)
  const [x3, y3] = pt(cx, cy, r1, a0)
  const grande = Math.abs(a0 - a1) > 180 ? 1 : 0
  const s = a0 > a1 ? 1 : 0
  return `M${x0} ${y0} A${r2} ${r2} 0 ${grande} ${s} ${x1} ${y1} L${x2} ${y2} A${r1} ${r1} 0 ${grande} ${1 - s} ${x3} ${y3} Z`
}

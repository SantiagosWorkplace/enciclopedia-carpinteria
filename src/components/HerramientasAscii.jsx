import { useEffect, useRef, useState } from 'react'

// Herramientas dibujadas con caracteres que se transforman una en otra. En la
// computadora, al pasar el ratón se abre un panel donde la herramienta se
// convierte en un código QR de la página actual, para abrirla en el celular.
// En pantallas táctiles es solo la animación. En los teléfonos no entra en la
// barra, así que se muestra más grande en la portada.

const RAMPA = ' .:-=+*#%@'
const LLENO = '█'
const PAUSA = 2600 // ms que cada herramienta queda quieta
const CAMBIO = 900 // ms que dura la transformación
const CUADRO = 33 // ms entre cuadros durante la transformación (unos 30 por segundo)

// Dientes del serrucho: zigzag desde la punta hasta el mango.
const dientes = (() => {
  let d = ''
  for (let x = 114, i = 0; x > 34; x -= 4, i++) {
    const y = 42 + ((114 - x) / 80) * 12
    d += ` L${x - 2} ${y + (i % 2 ? 0 : 3)}`
  }
  return d
})()

// Siluetas en una caja de 120 × 60. Los huecos se marcan con un segundo
// contorno (relleno par-impar).
const HERRAMIENTAS = [
  // Serrucho: hoja que se afina hacia la punta y mango con hueco para la mano.
  `M32 8 L116 22 L116 42${dientes} L32 54 Z
   M6 16 Q6 10 12 10 L30 10 Q36 10 36 16 L36 46 Q36 52 30 52 L12 52 Q6 52 6 46 Z
   M14 20 L28 20 L28 40 L14 40 Z`,
  // Martillo de carpintero: cabeza con boca y uña, y mango.
  `M10 6 L30 6 L30 18 L24 18 L24 40 L28 56 L22 56 L17 44 L12 56 L6 56 L10 40 L10 18 L6 18 L6 10 Z
   M24 24 L108 22 Q116 22 116 30 Q116 38 108 38 L24 36 Z`,
  // Formón: mango, virola y hoja con el bisel en la punta.
  `M8 24 Q8 18 16 18 L50 20 L50 40 L16 42 Q8 42 8 36 Z
   M50 22 L60 22 L60 38 L50 38 Z
   M60 26 L104 26 L114 34 L60 34 Z`,
  // Cepillo de banco: caja, suela, pomo delantero, hierro y empuñadura trasera.
  `M8 40 L112 40 L112 50 L8 50 Z
   M16 30 L104 30 L110 40 L10 40 Z
   M20 30 Q20 18 28 18 Q36 18 36 30 Z
   M50 30 L64 10 L72 12 L62 30 Z
   M80 30 Q80 8 94 8 L100 8 Q104 14 96 16 Q90 18 92 30 Z`,
  // Escuadra: hoja de acero y cabeza gruesa con remaches.
  `M10 6 L26 6 L26 56 L10 56 Z
   M14 14 L22 14 L22 20 L14 20 Z M14 42 L22 42 L22 48 L14 48 Z
   M26 8 L114 8 L114 16 L26 16 Z`,
  // Sargento: barra, mordaza fija, mordaza móvil, husillo y manija.
  `M6 8 L114 8 L114 14 L6 14 Z
   M102 14 L112 14 L112 44 L94 44 L94 38 L102 38 Z
   M22 14 L32 14 L32 30 L22 30 Z
   M16 33 L76 33 L76 37 L16 37 Z
   M76 28 L82 28 L82 42 L76 42 Z
   M2 26 L16 26 L16 44 L2 44 Z`,
]

// Convierte una silueta en caracteres: cada celda toma el carácter de la rampa
// según cuánto la cubre el dibujo. Las celdas miden el doble de alto que de ancho.
// El giro (en grados) inclina la herramienta para llenar mejor un área cuadrada.
function rasterizar(d, cols, filas, margen, giro = 0) {
  const sx = 4
  const sy = 8
  const lienzo = document.createElement('canvas')
  lienzo.width = cols * sx
  lienzo.height = filas * sy
  const ctx = lienzo.getContext('2d', { willReadFrequently: true })
  const a = (giro * Math.PI) / 180
  const ancho = 120 * Math.abs(Math.cos(a)) + 60 * Math.abs(Math.sin(a))
  const alto = 120 * Math.abs(Math.sin(a)) + 60 * Math.abs(Math.cos(a))
  const k = Math.min((lienzo.width * (1 - 2 * margen)) / ancho, (lienzo.height * (1 - 2 * margen)) / alto)
  ctx.translate(lienzo.width / 2, lienzo.height / 2)
  ctx.scale(k, k)
  ctx.rotate(a)
  ctx.translate(-60, -30)
  ctx.fill(new Path2D(d), 'evenodd')
  const datos = ctx.getImageData(0, 0, lienzo.width, lienzo.height).data
  const celdas = []
  for (let f = 0; f < filas; f++) {
    for (let c = 0; c < cols; c++) {
      let suma = 0
      for (let y = 0; y < sy; y++) {
        for (let x = 0; x < sx; x++) suma += datos[((f * sy + y) * lienzo.width + c * sx + x) * 4 + 3]
      }
      const cobertura = suma / (sx * sy * 255)
      celdas.push(RAMPA[Math.round(cobertura * (RAMPA.length - 1))])
    }
  }
  return celdas
}

// Código QR como celdas: cada módulo ocupa dos celdas de ancho y una de alto,
// así queda cuadrado. Devuelve null si la dirección no entra en la rejilla.
function rejillaQR(qrcode, url, modulos) {
  const qr = qrcode(0, 'M')
  qr.addData(url)
  qr.make()
  const n = qr.getModuleCount()
  if (n > modulos - 4) return null
  const desfase = Math.floor((modulos - n) / 2)
  const cols = modulos * 2
  const celdas = new Array(cols * modulos).fill(' ')
  for (let f = 0; f < n; f++) {
    for (let c = 0; c < n; c++) {
      if (!qr.isDark(f, c)) continue
      const i = (f + desfase) * cols + (c + desfase) * 2
      celdas[i] = celdas[i + 1] = LLENO
    }
  }
  return celdas
}

// Lienzo de caracteres que puede pasar de un dibujo a otro con una onda que
// recorre las columnas de izquierda a derecha.
function crearLienzo(canvas, cols, filas, cw, ch, color) {
  const dpr = window.devicePixelRatio || 1
  canvas.width = Math.round(cols * cw * dpr)
  canvas.height = Math.round(filas * ch * dpr)
  canvas.style.width = `${cols * cw}px`
  canvas.style.height = `${filas * ch}px`
  const ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.font = `bold ${Math.round(ch * 0.9)}px ui-monospace, Consolas, Menlo, monospace`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  let actual = new Array(cols * filas).fill(' ')
  let raf = 0

  const pintar = (celdas) => {
    ctx.clearRect(0, 0, cols * cw, filas * ch)
    ctx.fillStyle = color
    for (let i = 0; i < celdas.length; i++) {
      const car = celdas[i]
      if (car === ' ') continue
      const x = (i % cols) * cw
      const y = Math.floor(i / cols) * ch
      // Los módulos del QR se pisan apenas para que no queden rendijas.
      if (car === LLENO) ctx.fillRect(x, y, cw + 0.4, ch + 0.4)
      else ctx.fillText(car, x + cw / 2, y + ch / 2)
    }
  }

  return {
    mostrar(celdas) {
      cancelAnimationFrame(raf)
      actual = celdas
      pintar(celdas)
    },
    transformar(destino) {
      cancelAnimationFrame(raf)
      const origen = actual
      // Cada celda cambia en su momento: según su columna, con algo de azar.
      const inicio = origen.map((_, i) => ((i % cols) / cols) * 0.55 + Math.random() * 0.15)
      const t0 = performance.now()
      let ultimo = 0
      return new Promise((resolver) => {
        const paso = (ahora) => {
          if (ahora - ultimo >= CUADRO) {
            ultimo = ahora
            const p = (ahora - t0) / CAMBIO
            const cuadro = origen.map((a, i) => {
              const b = destino[i]
              if (a === b || p >= inicio[i] + 0.3) return b
              if (p < inicio[i]) return a
              return a === ' ' && b === ' ' ? ' ' : RAMPA[1 + Math.floor(Math.random() * (RAMPA.length - 1))]
            })
            pintar(cuadro)
            if (p >= 1) {
              actual = destino
              pintar(destino)
              resolver()
              return
            }
          }
          raf = requestAnimationFrame(paso)
        }
        raf = requestAnimationFrame(paso)
      })
    },
    detener() {
      cancelAnimationFrame(raf)
    },
  }
}

const MODULOS = 45 // lado del panel en módulos: entra un QR de hasta 41 con margen
const MODULO = 8 // px por módulo en el panel

// Columnas, filas y ancho de celda (px) de la animación según dónde va.
const MEDIDAS = { barra: [30, 8, 2.75], portada: [52, 13, 3.2] }

export default function HerramientasAscii({ lugar = 'barra' }) {
  const miniRef = useRef(null)
  const grandeRef = useRef(null)
  const indice = useRef(0)
  const [abierto, setAbierto] = useState(false)
  const [tactil] = useState(() => window.matchMedia('(hover: none), (pointer: coarse)').matches)
  const [telefono] = useState(() => window.matchMedia('(max-width: 420px)').matches)
  const visible = lugar === 'portada' ? telefono : !telefono
  const reducido = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const abiertoRef = useRef(false)
  abiertoRef.current = abierto

  // Animación: una herramienta tras otra.
  useEffect(() => {
    if (!visible) return
    const [cols, filas, cw] = MEDIDAS[lugar]
    const lienzo = crearLienzo(miniRef.current, cols, filas, cw, cw * 2, '#8a4718')
    const dibujos = HERRAMIENTAS.map((d) => rasterizar(d, cols, filas, 0.04))
    lienzo.mostrar(dibujos[indice.current])
    let timer = 0
    let activo = true

    const siguiente = async () => {
      if (!activo) return
      if (document.hidden || abiertoRef.current) {
        timer = setTimeout(siguiente, PAUSA)
        return
      }
      indice.current = (indice.current + 1) % dibujos.length
      if (reducido.current) lienzo.mostrar(dibujos[indice.current])
      else await lienzo.transformar(dibujos[indice.current])
      if (activo) timer = setTimeout(siguiente, PAUSA)
    }
    timer = setTimeout(siguiente, PAUSA)
    return () => {
      activo = false
      clearTimeout(timer)
      lienzo.detener()
    }
  }, [visible, lugar])

  // Panel: la herramienta del momento se transforma en el QR de esta página.
  useEffect(() => {
    if (!abierto) return
    const cols = MODULOS * 2
    const lienzo = crearLienzo(grandeRef.current, cols, MODULOS, MODULO / 2, MODULO, '#2b1d12')
    lienzo.mostrar(rasterizar(HERRAMIENTAS[indice.current], cols, MODULOS, 0.1, -30))
    let activo = true
    // La herramienta se ve un momento antes de convertirse en el código.
    const pausa = new Promise((r) => setTimeout(r, reducido.current ? 0 : 400))
    Promise.all([import('qrcode-generator'), pausa]).then(([{ default: qrcode }]) => {
      if (!activo) return
      qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8']
      const qr = rejillaQR(qrcode, location.href, MODULOS) || rejillaQR(qrcode, location.origin + location.pathname, MODULOS)
      if (reducido.current) lienzo.mostrar(qr)
      else lienzo.transformar(qr)
    })
    return () => {
      activo = false
      lienzo.detener()
    }
  }, [abierto])

  if (!visible) return null

  if (tactil || lugar === 'portada') {
    return (
      <span className={`ascii-marca ascii-${lugar}`} aria-hidden="true">
        <canvas ref={miniRef} className="ascii-mini" />
      </span>
    )
  }

  return (
    <div
      className="ascii-marca"
      onMouseEnter={() => setAbierto(true)}
      onMouseLeave={() => setAbierto(false)}
      onKeyDown={(e) => e.key === 'Escape' && setAbierto(false)}
    >
      <button
        type="button"
        className="ascii-boton"
        aria-label="Código QR para abrir esta página en el celular"
        aria-expanded={abierto}
        onClick={() => setAbierto(true)}
        onBlur={() => setAbierto(false)}
      >
        <canvas ref={miniRef} className="ascii-mini" aria-hidden="true" />
      </button>
      {abierto && (
        <div className="ascii-panel">
          <canvas ref={grandeRef} role="img" aria-label="Código QR de esta página" />
          <p>Escanea el código con el celular para abrir esta página.</p>
        </div>
      )}
    </div>
  )
}

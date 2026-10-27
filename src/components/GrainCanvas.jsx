import { useEffect, useRef } from 'react'

// Fondo animado: vetas de madera que ondulan y forman un nudo donde está el ratón.
export default function GrainCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, raf
    let mouse = { x: 0.7, y: 0.5 }
    let t = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const lines = 46
      for (let i = 0; i < lines; i++) {
        const base = (i / lines) * h * 1.2 - h * 0.1
        ctx.beginPath()
        for (let x = 0; x <= w; x += 8) {
          const knot = Math.exp(-(((x - mouse.x * w) ** 2) + ((base - mouse.y * h) ** 2)) / 18000) * 40
          const y = base
            + Math.sin(x * 0.006 + i * 0.35 + t) * 10
            + Math.sin(x * 0.017 + i * 0.9) * 4
            + knot * Math.sin(i * 0.5)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        const a = 0.08 + (i % 5 === 0 ? 0.12 : 0)
        ctx.strokeStyle = `rgba(60, 35, 18, ${a})`
        ctx.lineWidth = i % 7 === 0 ? 2.5 : 1
        ctx.stroke()
      }
      if (!reduce) {
        t += 0.004
        raf = requestAnimationFrame(draw)
      }
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }
      if (reduce) draw()
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={ref} className="grain-canvas" aria-hidden="true" />
}

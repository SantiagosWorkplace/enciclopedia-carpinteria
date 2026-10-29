import { useState } from 'react'

// Velocidad orientativa del torno según el diámetro de la pieza. Regla
// práctica: diámetro × rpm entre ≈ 150 000 y 230 000 (en mm), lo que da una
// velocidad en la superficie de ≈ 8 – 12 m/s. Las piezas desequilibradas o
// con grietas empiezan muy por debajo.
const BAJO = 150000
const ALTO = 230000

const num = (n, d = 0) => n.toLocaleString('es-AR', { minimumFractionDigits: d, maximumFractionDigits: d })
const redondear = (n) => Math.round(n / 50) * 50

export default function CalculadoraTorno() {
  const [diametro, setDiametro] = useState(100)
  const [desequilibrada, setDesequilibrada] = useState(false)

  const factor = desequilibrada ? 0.5 : 1
  const min = redondear((BAJO / diametro) * factor)
  const max = redondear((ALTO / diametro) * factor)

  return (
    <div className="calc">
      <div className="calc-campos">
        <label>
          <span>Diámetro de la pieza: <strong>{diametro} mm</strong></span>
          <input type="range" min="20" max="400" step="5" value={diametro} onChange={(ev) => setDiametro(+ev.target.value)} />
        </label>
        <label className="calc-check">
          <input type="checkbox" checked={desequilibrada} onChange={(ev) => setDesequilibrada(ev.target.checked)} />
          <span>Pieza en bruto, desequilibrada o con corteza</span>
        </label>
      </div>
      <div className="calc-resultado" aria-live="polite">
        <span>Velocidad orientativa</span>
        <strong>{num(min)} – {num(max)} rpm</strong>
        <span>Empieza por el valor bajo y sube solo si la pieza gira sin vibrar.</span>
      </div>
    </div>
  )
}

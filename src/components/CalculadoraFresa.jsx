import { useState } from 'react'

// Velocidad máxima orientativa de una fresa según su diámetro, y velocidad
// del filo: v = π · D · n / 60. El fabricante de la fresa manda siempre.
const LIMITES = [
  { hasta: 25, rpm: 24000 },
  { hasta: 50, rpm: 18000 },
  { hasta: 65, rpm: 16000 },
  { hasta: 90, rpm: 12000 },
]

const num = (n, d = 0) => n.toLocaleString('es-AR', { minimumFractionDigits: d, maximumFractionDigits: d })

export default function CalculadoraFresa() {
  const [diametro, setDiametro] = useState(32)
  const [rpm, setRpm] = useState(16000)

  const maximo = LIMITES.find((l) => diametro <= l.hasta).rpm
  const filo = (Math.PI * (diametro / 1000) * rpm) / 60
  const ok = rpm <= maximo

  return (
    <div className="calc">
      <div className="calc-campos">
        <label>
          <span>Diámetro de la fresa: <strong>{diametro} mm</strong></span>
          <input type="range" min="6" max="90" value={diametro} onChange={(ev) => setDiametro(+ev.target.value)} />
        </label>
        <label>
          <span>Velocidad elegida: <strong>{num(rpm)} rpm</strong></span>
          <input type="range" min="8000" max="30000" step="500" value={rpm} onChange={(ev) => setRpm(+ev.target.value)} />
        </label>
      </div>
      <div className="calc-resultado" aria-live="polite">
        <span>Velocidad máxima orientativa</span>
        <strong>{num(maximo)} rpm</strong>
        <span>El filo corre a <b>{num(filo, 1)} m/s</b> ({num(filo * 3.6)} km/h)</span>
        <span className={ok ? 'calc-ok' : 'calc-mal'}>{ok ? '✓ Dentro del rango' : '✗ Demasiado rápido para este diámetro'}</span>
      </div>
    </div>
  )
}

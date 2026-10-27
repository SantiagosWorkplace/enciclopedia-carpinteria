import { useState } from 'react'

// Contenido de humedad por pesada (método de estufa) y peso que tendrá la
// pieza al llegar a una humedad objetivo.
const num = (n, d = 1) => n.toLocaleString('es-AR', { minimumFractionDigits: d, maximumFractionDigits: d })

export default function CalculadoraHumedad() {
  const [humedo, setHumedo] = useState(126)
  const [seco, setSeco] = useState(100)
  const [objetivo, setObjetivo] = useState(10)

  const valido = seco > 0 && humedo >= seco
  const ch = valido ? ((humedo - seco) / seco) * 100 : 0
  const pesoObjetivo = seco * (1 + objetivo / 100)

  return (
    <div className="calc">
      <div className="calc-campos">
        <label>
          <span>Peso actual de la muestra</span>
          <span className="calc-num">
            <input type="number" min="1" step="0.1" value={humedo} onChange={(ev) => setHumedo(Math.max(0, +ev.target.value))} />
            <em>g</em>
          </span>
        </label>
        <label>
          <span>Peso anhidro (seca en estufa)</span>
          <span className="calc-num">
            <input type="number" min="1" step="0.1" value={seco} onChange={(ev) => setSeco(Math.max(0, +ev.target.value))} />
            <em>g</em>
          </span>
        </label>
        <label>
          <span>Humedad objetivo: <strong>{objetivo} %</strong></span>
          <input type="range" min="6" max="20" value={objetivo} onChange={(ev) => setObjetivo(+ev.target.value)} />
        </label>
      </div>
      <div className="calc-resultado" aria-live="polite">
        {valido ? (
          <>
            <span>Contenido de humedad</span>
            <strong>{num(ch)} %</strong>
            <span>Llegará al {objetivo} % cuando pese <b>{num(pesoObjetivo)} g</b></span>
            <code>({num(humedo)} − {num(seco)}) ÷ {num(seco)} × 100</code>
          </>
        ) : (
          <span>El peso actual no puede ser menor que el peso anhidro.</span>
        )}
      </div>
    </div>
  )
}

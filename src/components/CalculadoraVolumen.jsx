import { useState } from 'react'

// Volumen, pies tablares y peso de un lote de tablas.
// 1 pie tablar = 1 pie × 1 pie × 1 pulgada = 0,3048 × 0,3048 × 0,0254 m³.
const PIE_TABLAR = 0.3048 * 0.3048 * 0.0254

const corto = (n) => n.toLocaleString('es-AR', { maximumFractionDigits: 4 })
const num = (n, d = 2) => n.toLocaleString('es-AR', { minimumFractionDigits: d, maximumFractionDigits: d })

function Campo({ etiqueta, valor, set, min, max, paso, unidad }) {
  return (
    <label>
      <span>{etiqueta}</span>
      <span className="calc-num">
        <input type="number" min={min} max={max} step={paso} value={valor}
          onChange={(ev) => set(Math.min(max, Math.max(0, +ev.target.value)))} />
        <em>{unidad}</em>
      </span>
    </label>
  )
}

export default function CalculadoraVolumen() {
  const [largo, setLargo] = useState(2.4)
  const [ancho, setAncho] = useState(150)
  const [espesor, setEspesor] = useState(25)
  const [cantidad, setCantidad] = useState(1)
  const [densidad, setDensidad] = useState(500)

  const m3 = largo * (ancho / 1000) * (espesor / 1000) * cantidad
  const pies = m3 / PIE_TABLAR
  const kg = m3 * densidad

  return (
    <div className="calc">
      <div className="calc-campos calc-grilla">
        <Campo etiqueta="Largo" valor={largo} set={setLargo} min={0.1} max={12} paso={0.1} unidad="m" />
        <Campo etiqueta="Ancho" valor={ancho} set={setAncho} min={10} max={1000} paso={5} unidad="mm" />
        <Campo etiqueta="Espesor" valor={espesor} set={setEspesor} min={3} max={300} paso={1} unidad="mm" />
        <Campo etiqueta="Cantidad" valor={cantidad} set={setCantidad} min={1} max={500} paso={1} unidad="u." />
        <label className="calc-ancho">
          <span>Densidad al 12 %: <strong>{densidad} kg/m³</strong></span>
          <input type="range" min="150" max="1200" step="10" value={densidad} onChange={(ev) => setDensidad(+ev.target.value)} />
        </label>
      </div>
      <div className="calc-resultado" aria-live="polite">
        <span>Volumen</span>
        <strong>{num(m3, 4)} m³</strong>
        <span>{num(m3 * 1000, 1)} litros · <b>{num(pies, 2)}</b> pies tablares</span>
        <span>Peso aproximado: <b>{num(kg, 1)} kg</b></span>
        <code>{corto(largo)} m × {corto(ancho / 1000)} m × {corto(espesor / 1000)} m × {cantidad}</code>
      </div>
    </div>
  )
}

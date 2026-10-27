import { useState } from 'react'

// Coeficientes de cambio dimensional por cada 1 % de contenido de humedad
// (valores medios publicados por el Wood Handbook del USDA Forest Products
// Laboratory). Válidos aproximadamente entre 6 y 14 % de CH.
const ESPECIES = [
  { id: 'pino', nombre: 'Pino blanco (Pinus strobus)', t: 0.00212, r: 0.00071 },
  { id: 'cedro', nombre: 'Cedro rojo occidental', t: 0.00234, r: 0.00111 },
  { id: 'cerezo', nombre: 'Cerezo americano', t: 0.00248, r: 0.00126 },
  { id: 'nogal', nombre: 'Nogal negro', t: 0.00274, r: 0.0019 },
  { id: 'fresno', nombre: 'Fresno blanco americano', t: 0.00274, r: 0.00169 },
  { id: 'arce', nombre: 'Arce duro', t: 0.00353, r: 0.00165 },
  { id: 'roble-blanco', nombre: 'Roble blanco', t: 0.00365, r: 0.0018 },
  { id: 'roble-rojo', nombre: 'Roble rojo', t: 0.00369, r: 0.00158 },
  { id: 'haya', nombre: 'Haya americana', t: 0.00431, r: 0.0019 },
]

const mm = (n) => n.toLocaleString('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

export default function CalculadoraMovimiento() {
  const [especie, setEspecie] = useState('roble-blanco')
  const [corte, setCorte] = useState('t')
  const [ancho, setAncho] = useState(300)
  const [chA, setChA] = useState(8)
  const [chB, setChB] = useState(12)

  const e = ESPECIES.find((x) => x.id === especie)
  const coef = e[corte]
  const delta = ancho * coef * (chB - chA)
  const escala = 300 / Math.max(ancho, 1)

  return (
    <div className="calc">
      <div className="calc-campos">
        <label>
          <span>Especie</span>
          <select value={especie} onChange={(ev) => setEspecie(ev.target.value)}>
            {ESPECIES.map((x) => <option key={x.id} value={x.id}>{x.nombre}</option>)}
          </select>
        </label>
        <label>
          <span>Corte de la tabla</span>
          <select value={corte} onChange={(ev) => setCorte(ev.target.value)}>
            <option value="t">Tangencial (anillos paralelos a la cara)</option>
            <option value="r">Radial (anillos perpendiculares a la cara)</option>
          </select>
        </label>
        <label>
          <span>Ancho de la tabla: <strong>{ancho} mm</strong></span>
          <input type="range" min="50" max="1000" step="10" value={ancho} onChange={(ev) => setAncho(+ev.target.value)} />
        </label>
        <label>
          <span>Humedad al construir: <strong>{chA} %</strong></span>
          <input type="range" min="6" max="14" value={chA} onChange={(ev) => setChA(+ev.target.value)} />
        </label>
        <label>
          <span>Humedad en uso: <strong>{chB} %</strong></span>
          <input type="range" min="6" max="14" value={chB} onChange={(ev) => setChB(+ev.target.value)} />
        </label>
      </div>

      <div className="calc-resultado" aria-live="polite">
        <span>La tabla {delta >= 0 ? 'crece' : 'se contrae'}</span>
        <strong>{mm(Math.abs(delta))} mm</strong>
        <span>de {ancho} mm a {mm(ancho + delta)} mm</span>
        <svg viewBox="0 0 340 60" aria-hidden="true">
          <rect x="20" y="14" width={ancho * escala} height="22" fill="none" stroke="currentColor" strokeDasharray="4 3" />
          <rect x="20" y="14" width={Math.max(0, (ancho + delta * 8) * escala)} height="22" className="calc-barra" />
          <text x="20" y="54">Diferencia exagerada × 8 para que se vea</text>
        </svg>
        <code>{ancho} × {coef.toLocaleString('es-AR', { maximumSignificantDigits: 3 })} × ({chB} − {chA})</code>
      </div>
    </div>
  )
}

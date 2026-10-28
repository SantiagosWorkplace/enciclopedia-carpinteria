import { useState } from 'react'

// Flecha de un estante simplemente apoyado con carga repartida:
// f = 5 · W · L³ / (384 · E · I), con I = b · t³ / 12.
// E: módulo de elasticidad medio en flexión. kdef: factor de fluencia del
// Eurocódigo 5 para clase de servicio 1 (interior seco).
const MATERIALES = [
  { id: 'pino', nombre: 'Pino (macizo)', E: 8.5, kdef: 0.6 },
  { id: 'roble', nombre: 'Roble (macizo)', E: 12, kdef: 0.6 },
  { id: 'arce', nombre: 'Arce duro (macizo)', E: 12.5, kdef: 0.6 },
  { id: 'contrachapado', nombre: 'Contrachapado de abedul', E: 8, kdef: 0.8 },
  { id: 'mdf', nombre: 'MDF', E: 3, kdef: 2.25 },
  { id: 'aglomerado', nombre: 'Aglomerado o melamina', E: 2.5, kdef: 2.25 },
]

// Límite orientativo: a partir de ≈ 1/600 de la luz la curva empieza a notarse.
const LIMITE = 1 / 600

const num = (n, d = 1) => n.toLocaleString('es-AR', { minimumFractionDigits: d, maximumFractionDigits: d })

export default function CalculadoraEstante() {
  const [material, setMaterial] = useState('pino')
  const [luz, setLuz] = useState(900)
  const [fondo, setFondo] = useState(250)
  const [espesor, setEspesor] = useState(19)
  const [carga, setCarga] = useState(30)

  const m = MATERIALES.find((x) => x.id === material)
  const L = luz / 1000
  const I = ((fondo / 1000) * (espesor / 1000) ** 3) / 12
  const W = carga * 9.81
  const inicial = ((5 * W * L ** 3) / (384 * m.E * 1e9 * I)) * 1000
  const final = inicial * (1 + m.kdef)
  const limite = luz * LIMITE
  const ok = final <= limite

  return (
    <div className="calc">
      <div className="calc-campos">
        <label>
          <span>Material</span>
          <select value={material} onChange={(ev) => setMaterial(ev.target.value)}>
            {MATERIALES.map((x) => <option key={x.id} value={x.id}>{x.nombre}</option>)}
          </select>
        </label>
        <label>
          <span>Luz entre apoyos: <strong>{luz} mm</strong></span>
          <input type="range" min="300" max="1500" step="10" value={luz} onChange={(ev) => setLuz(+ev.target.value)} />
        </label>
        <label>
          <span>Fondo del estante: <strong>{fondo} mm</strong></span>
          <input type="range" min="100" max="600" step="10" value={fondo} onChange={(ev) => setFondo(+ev.target.value)} />
        </label>
        <label>
          <span>Espesor: <strong>{espesor} mm</strong></span>
          <input type="range" min="10" max="40" value={espesor} onChange={(ev) => setEspesor(+ev.target.value)} />
        </label>
        <label>
          <span>Carga repartida: <strong>{carga} kg</strong></span>
          <input type="range" min="0" max="120" step="5" value={carga} onChange={(ev) => setCarga(+ev.target.value)} />
        </label>
      </div>
      <div className="calc-resultado" aria-live="polite">
        <span>Flecha con los años</span>
        <strong>{num(final)} mm</strong>
        <span>Al cargarlo: {num(inicial)} mm · fluencia × {num(1 + m.kdef, 2)}</span>
        <span className={ok ? 'calc-ok' : 'calc-mal'}>
          {ok ? '✓ No debería notarse' : '✗ Se notará la curva'} (límite ≈ {num(limite)} mm)
        </span>
        <svg viewBox="0 0 340 60" aria-hidden="true">
          <path d={`M20 20 Q170 ${20 + Math.min(final, 40) * 2} 320 20`} fill="none" stroke="currentColor" strokeWidth="6" />
          <path d="M14 34 L26 34 L20 24 Z M314 34 L326 34 L320 24 Z" fill="currentColor" />
          <text x="20" y="56">Curva exagerada para que se vea</text>
        </svg>
      </div>
    </div>
  )
}

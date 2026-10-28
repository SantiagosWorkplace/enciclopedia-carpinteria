import { useState } from 'react'

// Lista de corte editable: suma el volumen de madera maciza y la superficie de
// tablero, y les agrega el porcentaje de desperdicio.
const PIE_TABLAR = 0.3048 * 0.3048 * 0.0254
const PLACA = 2.44 * 1.22 // m², formato de 2440 × 1220 mm

const EJEMPLO = [
  { id: 1, nombre: 'Patas', tipo: 'macizo', cantidad: 4, largo: 720, ancho: 45, espesor: 45 },
  { id: 2, nombre: 'Faldones largos', tipo: 'macizo', cantidad: 2, largo: 1100, ancho: 90, espesor: 22 },
  { id: 3, nombre: 'Faldones cortos', tipo: 'macizo', cantidad: 2, largo: 600, ancho: 90, espesor: 22 },
  { id: 4, nombre: 'Tablero chapado', tipo: 'tablero', cantidad: 1, largo: 1400, ancho: 800, espesor: 18 },
]

const num = (n, d = 2) => n.toLocaleString('es-AR', { minimumFractionDigits: d, maximumFractionDigits: d })

export default function ListaCorte() {
  const [piezas, setPiezas] = useState(EJEMPLO)
  const [desperdicio, setDesperdicio] = useState(25)

  const cambiar = (id, campo, valor) =>
    setPiezas((ps) => ps.map((p) => (p.id === id ? { ...p, [campo]: valor } : p)))
  const agregar = () =>
    setPiezas((ps) => [...ps, { id: Math.max(0, ...ps.map((p) => p.id)) + 1, nombre: 'Pieza nueva', tipo: 'macizo', cantidad: 1, largo: 500, ancho: 100, espesor: 20 }])
  const quitar = (id) => setPiezas((ps) => ps.filter((p) => p.id !== id))

  const factor = 1 + desperdicio / 100
  const m3 = piezas.filter((p) => p.tipo === 'macizo')
    .reduce((s, p) => s + p.cantidad * (p.largo / 1000) * (p.ancho / 1000) * (p.espesor / 1000), 0)
  const m2 = piezas.filter((p) => p.tipo === 'tablero')
    .reduce((s, p) => s + p.cantidad * (p.largo / 1000) * (p.ancho / 1000), 0)

  return (
    <div className="lista-corte">
      <div className="tabla-scroll">
        <table>
          <thead>
            <tr><th>Pieza</th><th>Material</th><th>Cant.</th><th>Largo</th><th>Ancho</th><th>Espesor</th><th></th></tr>
          </thead>
          <tbody>
            {piezas.map((p) => (
              <tr key={p.id}>
                <td><input aria-label="Nombre de la pieza" value={p.nombre} onChange={(ev) => cambiar(p.id, 'nombre', ev.target.value)} /></td>
                <td>
                  <select aria-label="Material" value={p.tipo} onChange={(ev) => cambiar(p.id, 'tipo', ev.target.value)}>
                    <option value="macizo">Macizo</option>
                    <option value="tablero">Tablero</option>
                  </select>
                </td>
                {['cantidad', 'largo', 'ancho', 'espesor'].map((campo) => (
                  <td key={campo}>
                    <input type="number" min="0" aria-label={campo} value={p[campo]}
                      onChange={(ev) => cambiar(p.id, campo, Math.max(0, +ev.target.value))} />
                  </td>
                ))}
                <td><button type="button" className="lc-quitar" onClick={() => quitar(p.id)} aria-label={`Quitar ${p.nombre}`}>×</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="tabla-nota">Medidas en milímetros, ya terminadas (después de cepillar).</p>
      <div className="lc-pie">
        <button type="button" className="btn-sec" onClick={agregar}>+ Agregar pieza</button>
        <label>
          <span>Desperdicio: <strong>{desperdicio} %</strong></span>
          <input type="range" min="0" max="60" step="5" value={desperdicio} onChange={(ev) => setDesperdicio(+ev.target.value)} />
        </label>
      </div>
      <div className="lc-totales" aria-live="polite">
        <div>
          <span>Madera maciza a comprar</span>
          <strong>{num(m3 * factor, 3)} m³</strong>
          <span>{num((m3 * factor) / PIE_TABLAR, 1)} pies tablares · neto {num(m3, 3)} m³</span>
        </div>
        <div>
          <span>Tablero a comprar</span>
          <strong>{num(m2 * factor)} m²</strong>
          <span>≈ {m2 > 0 ? Math.ceil((m2 * factor) / PLACA) : 0} placa(s) de 2440 × 1220 mm</span>
        </div>
      </div>
    </div>
  )
}

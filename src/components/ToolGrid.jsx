import { useState } from 'react'
import { herramientas, categorias } from '../data.js'

export default function ToolGrid() {
  const [cat, setCat] = useState('Todas')
  const [q, setQ] = useState('')

  const lista = herramientas.filter((h) =>
    (cat === 'Todas' || h.cat === cat) &&
    (h.nombre + h.desc).toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div>
      <div className="tool-controls">
        <div className="filters">
          {categorias.map((c) => (
            <button key={c} className={c === cat ? 'active' : ''} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <input type="search" placeholder="Buscar herramienta…" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="tool-grid" key={cat + q}>
        {lista.map((h, i) => (
          <article key={h.nombre} className="tool" style={{ animationDelay: `${i * 40}ms` }}>
            <span className="tool-icon">{h.icono}</span>
            <div>
              <span className="tool-cat">{h.cat}</span>
              <h4>{h.nombre}</h4>
              <p>{h.desc}</p>
            </div>
          </article>
        ))}
        {lista.length === 0 && <p className="empty">No hay herramientas que coincidan.</p>}
      </div>
    </div>
  )
}

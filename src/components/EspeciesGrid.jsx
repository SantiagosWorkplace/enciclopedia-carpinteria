import { useState } from 'react'
import Reveal from './Reveal.jsx'
import WoodCard from './WoodCard.jsx'
import { maderas } from '../data.js'

// Tarjetas de especies con orden y unidad de dureza (kN por defecto, lbf opcional).
export default function EspeciesGrid() {
  const [orden, setOrden] = useState('nombre')
  const [unidad, setUnidad] = useState(() => {
    try { return localStorage.getItem('unidad') || 'metrico' } catch { return 'metrico' }
  })

  const cambiarUnidad = () => {
    const nueva = unidad === 'metrico' ? 'imperial' : 'metrico'
    setUnidad(nueva)
    try { localStorage.setItem('unidad', nueva) } catch { /* sin almacenamiento */ }
  }

  const ordenadas = [...maderas].sort((a, b) =>
    orden === 'nombre' ? a.nombre.localeCompare(b.nombre, 'es') : a.janka - b.janka
  )

  return (
    <>
      <div className="sort">
        Ordenar por:
        <button className={orden === 'nombre' ? 'active' : ''} onClick={() => setOrden('nombre')}>Nombre</button>
        <button className={orden === 'janka' ? 'active' : ''} onClick={() => setOrden('janka')}>Dureza</button>
      </div>
      <div className="wood-grid">
        {ordenadas.map((m, i) => (
          <Reveal key={m.id} delay={(i % 4) * 80}>
            <WoodCard madera={m} unidad={unidad} onCambiarUnidad={cambiarUnidad} />
          </Reveal>
        ))}
      </div>
    </>
  )
}

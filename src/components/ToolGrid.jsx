import { useState } from 'react'
import { herramientas, funciones, energias, movilidades } from '../herramientas.js'
import { construcciones } from '../construcciones.js'

const nombreObra = Object.fromEntries(construcciones.map((c) => [c.id, c.nombre]))
const iconoEnergia = { Manual: '✋', Eléctrica: '⚡', Neumática: '💨', Combustión: '⛽' }

// Catálogo con filtros combinables. Los valores iniciales llegan desde el
// artículo que lo inserta, y el sistema constructivo también por ?obra= en la URL.
export default function ToolGrid({ energiaInicial = 'Todas', movilidadInicial = 'Todas', query = {} }) {
  const [funcion, setFuncion] = useState('Todas')
  const [energia, setEnergia] = useState(energiaInicial)
  const [movilidad, setMovilidad] = useState(movilidadInicial)
  const [obra, setObra] = useState(query.obra && nombreObra[query.obra] ? query.obra : 'todas')
  const [q, setQ] = useState('')

  const lista = herramientas.filter((h) =>
    (funcion === 'Todas' || h.cat === funcion) &&
    (energia === 'Todas' || h.energia === energia) &&
    (movilidad === 'Todas' || h.movilidad === movilidad) &&
    (obra === 'todas' || h.usos.includes(obra)) &&
    (h.nombre + h.desc).toLowerCase().includes(q.toLowerCase())
  )
  const filtrado = funcion !== 'Todas' || energia !== 'Todas' || movilidad !== 'Todas' || obra !== 'todas' || q
  const limpiar = () => {
    setFuncion('Todas'); setEnergia('Todas'); setMovilidad('Todas'); setObra('todas'); setQ('')
  }

  return (
    <div>
      <div className="tool-filters">
        <Grupo titulo="Energía" opciones={energias} valor={energia} onChange={setEnergia} iconos={iconoEnergia} />
        <Grupo titulo="Tipo" opciones={movilidades} valor={movilidad} onChange={setMovilidad} />
        <label className="filtro-obra">
          <span>Para construir</span>
          <select value={obra} onChange={(e) => setObra(e.target.value)}>
            <option value="todas">Cualquier sistema</option>
            {construcciones.map((c) => <option key={c.id} value={c.id}>{c.nombre}</option>)}
          </select>
        </label>
        <input type="search" placeholder="Buscar herramienta…" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="filters">
        {['Todas', ...funciones].map((c) => (
          <button key={c} className={c === funcion ? 'active' : ''} onClick={() => setFuncion(c)}>{c}</button>
        ))}
      </div>

      <p className="tool-count">
        {lista.length} {lista.length === 1 ? 'herramienta' : 'herramientas'}
        {obra !== 'todas' && <> para <strong>{nombreObra[obra]}</strong></>}
        {filtrado && <button className="link" onClick={limpiar}>Quitar filtros</button>}
      </p>

      <div className="tool-grid" key={[funcion, energia, movilidad, obra, q].join('|')}>
        {lista.map((h, i) => (
          <article key={h.nombre} className="tool" style={{ animationDelay: `${Math.min(i, 20) * 30}ms` }}>
            <span className="tool-icon">{h.icono}</span>
            <div>
              <span className="tool-cat">{h.cat}</span>
              <h4>{h.nombre}</h4>
              <p>{h.desc}</p>
              <div className="badges">
                <span className={`badge energia-${h.energia}`}>{iconoEnergia[h.energia]} {h.energia}</span>
                <span className="badge">{h.movilidad === 'Móvil' ? '🚶' : '🏭'} {h.movilidad}</span>
                <span className="badge usos" title={h.usos.map((u) => nombreObra[u]).join(' · ')}>
                  {h.usos.length === construcciones.length ? 'Todos los sistemas' : `${h.usos.length} sistemas`}
                </span>
              </div>
            </div>
          </article>
        ))}
        {lista.length === 0 && <p className="empty">No hay herramientas que coincidan con esos filtros.</p>}
      </div>
    </div>
  )
}

function Grupo({ titulo, opciones, valor, onChange, iconos = {} }) {
  return (
    <div className="seg" role="group" aria-label={titulo}>
      <span>{titulo}</span>
      {['Todas', ...opciones].map((o) => (
        <button key={o} className={o === valor ? 'active' : ''} onClick={() => onChange(o)} aria-pressed={o === valor}>
          {iconos[o] && <span aria-hidden="true">{iconos[o]} </span>}{o}
        </button>
      ))}
    </div>
  )
}

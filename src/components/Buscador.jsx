import { useMemo, useRef, useState } from 'react'
import { capitulos } from '../contenido/indice.js'
import { glosario } from '../contenido/glosario.js'
import { conQuery, enlace, ir } from '../router.js'
import { normalizar, SINONIMOS } from '../busqueda.js'

// Casilla de búsqueda con sugerencias mientras se escribe: artículos, capítulos y
// términos del glosario. Tolera errores de tipeo («barnis», «cajon», «gubia»).

const ENTRADAS = [
  ...capitulos.map((c) => ({ tipo: 'Capítulo', titulo: c.titulo, detalle: c.subtitulo, href: enlace(c.id) })),
  ...capitulos.flatMap((c) => c.articulos.map((a) => ({ tipo: 'Artículo', titulo: a.titulo, detalle: c.titulo, href: enlace(c.id, a.id) }))),
  ...glosario.map((g) => ({ tipo: 'Glosario', titulo: g.termino, detalle: g.definicion, href: `#/glosario?t=${g.id}` })),
].map((e) => ({ ...e, palabras: normalizar(e.titulo).split(/[^a-z0-9]+/).filter(Boolean), n: normalizar(e.titulo) }))

// Distancia de edición entre dos palabras cortas: cuántas letras sobran, faltan,
// cambian o están invertidas («gubai» está a una de «gubia»).
function distancia(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)])
  for (let j = 1; j <= b.length; j++) d[0][j] = j
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const costo = a[i - 1] === b[j - 1] ? 0 : 1
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + costo)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1)
    }
  }
  return d[a.length][b.length]
}

// Qué tan bien coincide una palabra escrita con alguna palabra del título:
// 3 si una empieza con lo escrito, 2 si lo contiene, 1 si se parece (un error
// de tipeo en palabras cortas, dos en largas), 0 si no.
function parecido(t, palabras, aproximado = true) {
  let mejor = 0
  for (const p of palabras) {
    if (p.startsWith(t)) return 3
    if (t.length >= 3 && p.includes(t)) mejor = Math.max(mejor, 2)
    else if (aproximado && t.length >= 5) {
      const tolerancia = t.length > 7 ? 2 : 1
      if (distancia(t, p.slice(0, t.length)) <= tolerancia || distancia(t, p) <= tolerancia) mejor = Math.max(mejor, 1)
    }
  }
  return mejor
}

const ORDEN_TIPO = { Artículo: 0, Capítulo: 1, Glosario: 2 }

export function sugerir(consulta, max = 7) {
  const ts = normalizar(consulta).split(/[^a-z0-9]+/).filter((t) => t.length > 1)
  if (!ts.length) return []
  return ENTRADAS
    .map((e) => {
      const notas = ts.map((t) => Math.max(parecido(t, e.palabras), ...(SINONIMOS[t] || []).map((x) => parecido(x, e.palabras, false))))
      if (notas.some((x) => x === 0)) return null
      const exacto = e.n.startsWith(normalizar(consulta).trim()) ? 5 : 0
      return { e, p: notas.reduce((a, b) => a + b, 0) + exacto }
    })
    .filter(Boolean)
    .sort((x, y) => y.p - x.p || ORDEN_TIPO[x.e.tipo] - ORDEN_TIPO[y.e.tipo] || x.e.titulo.length - y.e.titulo.length)
    .slice(0, max)
    .map(({ e }) => e)
}

export default function Buscador({ q, setQ }) {
  const [abierto, setAbierto] = useState(false)
  const [activo, setActivoEstado] = useState(-1)
  const activoRef = useRef(-1)
  const setActivo = (v) => {
    activoRef.current = typeof v === 'function' ? v(activoRef.current) : v
    setActivoEstado(activoRef.current)
  }
  const lista = useMemo(() => (q.trim().length >= 2 ? sugerir(q) : []), [q])
  const caja = useRef(null)

  const buscarTodo = () => {
    if (q.trim()) ir(conQuery('#/buscar', { q: q.trim() }))
    setAbierto(false)
    caja.current?.blur()
  }
  const elegir = (e) => {
    ir(e.href)
    setAbierto(false)
    caja.current?.blur()
  }
  const teclas = (ev) => {
    if (ev.key === 'ArrowDown') { ev.preventDefault(); setAbierto(true); setActivo((i) => Math.min(i + 1, lista.length)) }
    else if (ev.key === 'ArrowUp') { ev.preventDefault(); setActivo((i) => Math.max(i - 1, -1)) }
    else if (ev.key === 'Escape') setAbierto(false)
    else if (ev.key === 'Enter') {
      ev.preventDefault()
      const i = activoRef.current
      if (i >= 0 && i < lista.length) elegir(lista[i])
      else buscarTodo()
    }
  }
  const visible = abierto && q.trim().length >= 2

  return (
    <div className="buscador" role="search">
      <input
        ref={caja}
        type="search"
        placeholder="Buscar…"
        value={q}
        onChange={(e) => { setQ(e.target.value); setAbierto(true); setActivo(-1) }}
        onFocus={() => setAbierto(true)}
        onBlur={() => setTimeout(() => setAbierto(false), 150)}
        onKeyDown={teclas}
        aria-label="Buscar en la enciclopedia"
        role="combobox"
        aria-expanded={visible}
        aria-controls="sugerencias"
        aria-autocomplete="list"
        aria-activedescendant={visible && activo >= 0 ? `sug-${activo}` : undefined}
        autoComplete="off"
      />
      {visible && (
        <ul id="sugerencias" className="sugerencias" role="listbox">
          {lista.map((e, i) => (
            <li
              key={e.href}
              id={`sug-${i}`}
              role="option"
              aria-selected={i === activo}
              className={i === activo ? 'activo' : ''}
              onMouseDown={(ev) => { ev.preventDefault(); elegir(e) }}
              onMouseEnter={() => setActivo(i)}
            >
              <span className="sug-tipo">{e.tipo}</span>
              <strong>{e.titulo}</strong>
              <span className="sug-detalle">{e.detalle}</span>
            </li>
          ))}
          <li
            id={`sug-${lista.length}`}
            role="option"
            aria-selected={activo === lista.length}
            className={`sug-todo${activo === lista.length ? ' activo' : ''}`}
            onMouseDown={(ev) => { ev.preventDefault(); buscarTodo() }}
            onMouseEnter={() => setActivo(lista.length)}
          >
            Buscar «{q.trim()}» en todo el texto →
          </li>
        </ul>
      )}
    </div>
  )
}

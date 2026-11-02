import { useEffect, useState } from 'react'
import { useRuta } from './router.js'
import { capitulos, buscarArticulo } from './contenido/indice.js'
import Portada from './paginas/Portada.jsx'
import Capitulo from './paginas/Capitulo.jsx'
import Articulo from './paginas/Articulo.jsx'
import Glosario from './paginas/Glosario.jsx'
import Buscar from './paginas/Buscar.jsx'
import Buscador from './components/Buscador.jsx'

const SITIO = 'Taller Atenea'
const DESCRIPCION = 'Enciclopedia de carpintería en español: madera, herramientas, uniones, acabados y construcción, con medidas en sistema métrico.'

export default function App() {
  const { partes, query } = useRuta()
  const [scroll, setScroll] = useState(0)
  const [q, setQ] = useState(query.q || '')
  const claveRuta = partes.join('/')

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScroll(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cada página nueva empieza arriba (salvo que pida ir a un punto concreto).
  useEffect(() => {
    if (!query.ir && !query.t) window.scrollTo(0, 0)
  }, [claveRuta])

  // Título de la pestaña y descripción propios de cada página. La casilla de
  // búsqueda muestra la consulta solo en la página de resultados.
  useEffect(() => {
    const [p0, p1] = partes
    const capitulo = capitulos.find((c) => c.id === p0)
    const articulo = capitulo && p1 ? buscarArticulo(p0, p1).articulo : null
    const titulo = articulo?.titulo || capitulo?.titulo || { glosario: 'Glosario', buscar: 'Búsqueda' }[p0]
    document.title = titulo ? `${titulo} · ${SITIO}` : `${SITIO} · Enciclopedia de carpintería`
    const descripcion = articulo?.resumen || capitulo?.intro || DESCRIPCION
    document.querySelector('meta[name="description"]')?.setAttribute('content', descripcion)
    setQ(p0 === 'buscar' ? query.q || '' : '')
  }, [claveRuta, query.q])

  return (
    <>
      <div className="read-progress" style={{ transform: `scaleX(${scroll})` }} />
      <nav className="nav">
        <a href="#/" className="logo">⟁ Taller Atenea</a>
        <div className="nav-links">
          <a href="#/?ir=indice">Índice</a>
          <a href="#/glosario">Glosario</a>
          <Buscador q={q} setQ={setQ} />
        </div>
      </nav>

      <main>
        <Pagina partes={partes} query={query} />
      </main>

      <footer>
        <p>Medir dos veces, cortar una. · Contenido original, medidas en sistema métrico.</p>
      </footer>
    </>
  )
}

function Pagina({ partes, query }) {
  const [p0, p1] = partes
  if (!p0) return <Portada query={query} />
  if (p0 === 'glosario') return <Glosario query={query} />
  if (p0 === 'buscar') return <Buscar query={query} />

  const capitulo = capitulos.find((c) => c.id === p0)
  if (capitulo && !p1) return <Capitulo capitulo={capitulo} />
  const { articulo } = buscarArticulo(p0, p1)
  if (capitulo && articulo) return <Articulo key={`${p0}/${p1}`} capitulo={capitulo} articulo={articulo} query={query} />

  return (
    <div className="pagina">
      <h1>Página no encontrada</h1>
      <p>Esa dirección no existe. Vuelve al <a href="#/?ir=indice">índice</a>.</p>
    </div>
  )
}

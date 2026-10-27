import { useEffect, useState } from 'react'
import GrainCanvas from './components/GrainCanvas.jsx'
import Reveal from './components/Reveal.jsx'
import WoodCard from './components/WoodCard.jsx'
import JointViewer from './components/JointViewer.jsx'
import ToolGrid from './components/ToolGrid.jsx'
import WorldBuilds from './components/WorldBuilds.jsx'
import { maderas } from './data.js'

const secciones = [
  { id: 'maderas', titulo: 'Maderas' },
  { id: 'uniones', titulo: 'Uniones' },
  { id: 'herramientas', titulo: 'Herramientas' },
  { id: 'construcciones', titulo: 'Construcciones' },
]

export default function App() {
  const [scroll, setScroll] = useState(0)
  const [orden, setOrden] = useState('nombre')
  const [unidad, setUnidad] = useState(() => {
    try { return localStorage.getItem('unidad') || 'metrico' } catch { return 'metrico' }
  })

  const [obra, setObra] = useState('todas')
  const verHerramientas = (id) => {
    setObra(id)
    document.getElementById('herramientas').scrollIntoView({ behavior: 'smooth' })
  }

  const cambiarUnidad = () => {
    const nueva = unidad === 'metrico' ? 'imperial' : 'metrico'
    setUnidad(nueva)
    try { localStorage.setItem('unidad', nueva) } catch { /* sin almacenamiento */ }
  }

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScroll(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const ordenadas = [...maderas].sort((a, b) =>
    orden === 'nombre' ? a.nombre.localeCompare(b.nombre) : a.janka - b.janka
  )

  return (
    <>
      <div className="read-progress" style={{ transform: `scaleX(${scroll})` }} />

      <nav className="nav">
        <a href="#top" className="logo">⟁ Taller</a>
        <div>
          {secciones.map((s) => <a key={s.id} href={`#${s.id}`}>{s.titulo}</a>)}
        </div>
      </nav>

      <header className="hero" id="top">
        <GrainCanvas />
        <div className="hero-content" style={{ transform: `translateY(${scroll * 200}px)` }}>
          <span className="eyebrow">Enciclopedia interactiva</span>
          <h1>El oficio de la <span className="accent">madera</span></h1>
          <p>Especies, uniones y herramientas explicadas como en un manual de taller, con fichas, diagramas y pasos que puedes ir marcando.</p>
          <a href="#maderas" className="btn">Empezar a explorar ↓</a>
        </div>
      </header>

      <main>
        <section id="maderas">
          <Reveal>
            <span className="eyebrow">Capítulo I</span>
            <h2>Maderas</h2>
            <p className="lead">Cada especie tiene su carácter. Pasa el ratón para inclinar la tarjeta y haz clic para ver su ficha técnica. En la ficha, toca el valor de dureza para alternar entre kN y lbf.</p>
            <div className="sort">
              Ordenar por:
              <button className={orden === 'nombre' ? 'active' : ''} onClick={() => setOrden('nombre')}>Nombre</button>
              <button className={orden === 'janka' ? 'active' : ''} onClick={() => setOrden('janka')}>Dureza</button>
            </div>
          </Reveal>
          <div className="wood-grid">
            {ordenadas.map((m, i) => (
              <Reveal key={m.id} delay={(i % 4) * 80}>
                <WoodCard madera={m} unidad={unidad} onCambiarUnidad={cambiarUnidad} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="uniones" className="alt">
          <Reveal>
            <span className="eyebrow">Capítulo II</span>
            <h2>Uniones y técnicas</h2>
            <p className="lead">Elige una unión, mira cómo encajan las piezas y sigue el procedimiento paso a paso. Haz clic en cada paso para marcarlo como hecho.</p>
          </Reveal>
          <Reveal delay={100}>
            <JointViewer />
          </Reveal>
        </section>

        <section id="herramientas">
          <Reveal>
            <span className="eyebrow">Capítulo III</span>
            <h2>Herramientas</h2>
            <p className="lead">De la escuadra a la grúa: más de 70 herramientas manuales, eléctricas, neumáticas y a combustión, móviles o estacionarias. Filtra por el sistema que vas a construir para ver todo lo que necesitas.</p>
          </Reveal>
          <Reveal delay={100}>
            <ToolGrid obra={obra} setObra={setObra} />
          </Reveal>
        </section>

        <section id="construcciones" className="alt">
          <Reveal>
            <span className="eyebrow">Capítulo IV</span>
            <h2>Construcciones del mundo</h2>
            <p className="lead">Cómo se construye con madera en distintas culturas y climas, y los sistemas de construcción en seco que la combinan con acero, yeso y paneles. Todos los planos están a la misma escala y en sistema métrico, para comparar de verdad una casa con otra. Pasa el ratón por una medida para ver a qué pieza corresponde.</p>
          </Reveal>
          <Reveal delay={100}>
            <WorldBuilds onVerHerramientas={verHerramientas} />
          </Reveal>
        </section>
      </main>

      <footer>
        <p>Medir dos veces, cortar una. · Proyecto en construcción</p>
      </footer>
    </>
  )
}

import { Fragment } from 'react'
import { glosarioPorId } from '../contenido/glosario.js'
import { figuras } from '../figuras/index.js'
import { interactivos } from '../interactivos.js'

// Fotos con licencia libre, guardadas en public/fotos. Cada una lleva autor y licencia.
function Foto({ f }) {
  return <img src={import.meta.env.BASE_URL + f.src} alt={f.alt} width={f.ancho} height={f.alto} loading="lazy" decoding="async" />
}

function Credito({ c }) {
  return (
    <span className="credito">
      Foto: <a href={c.fuente} target="_blank" rel="noopener noreferrer">{c.autor}</a>
      {' · '}<a href={c.licenciaUrl} target="_blank" rel="noopener noreferrer">{c.licencia}</a>
    </span>
  )
}

export const slug = (texto) =>
  texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// Formato en línea: **negrita**, *cursiva*, [[glosario]] o [[texto|id]], [texto](#/ruta).
const PATRON = /(\*\*[^*]+\*\*|\*[^*]+\*|\[\[[^\]]+\]\]|\[[^\]]+\]\([^)]+\))/g

export function Texto({ children }) {
  const partes = String(children).split(PATRON)
  return partes.map((p, i) => {
    if (p.startsWith('**')) return <strong key={i}><Texto>{p.slice(2, -2)}</Texto></strong>
    if (p.startsWith('[[')) {
      const [visible, id = visible] = p.slice(2, -2).split('|')
      const entrada = glosarioPorId[id]
      if (!entrada) return <Fragment key={i}>{visible}</Fragment>
      return (
        <a key={i} className="glos" href={`#/glosario?t=${id}`} data-def={entrada.definicion}>
          {visible}
        </a>
      )
    }
    if (p.startsWith('[')) {
      const [, texto, href] = p.match(/\[([^\]]+)\]\(([^)]+)\)/)
      return <a key={i} href={href}>{texto}</a>
    }
    if (p.startsWith('*') && p.length > 2) return <em key={i}><Texto>{p.slice(1, -1)}</Texto></em>
    return <Fragment key={i}>{p}</Fragment>
  })
}

const AVISOS = {
  seguridad: { icono: '⚠️', titulo: 'Seguridad' },
  consejo: { icono: '💡', titulo: 'Consejo' },
  nota: { icono: '📝', titulo: 'Nota' },
  verificar: { icono: '🔎', titulo: 'Dato a verificar' },
}

// Renderiza la lista de bloques de un artículo.
export default function Bloques({ bloques, query }) {
  return bloques.map((b, i) => {
    switch (b.tipo) {
      case 'h2':
        return <h2 key={i} id={slug(b.texto)}>{b.texto}</h2>
      case 'h3':
        return <h3 key={i}>{b.texto}</h3>
      case 'p':
        return <p key={i}><Texto>{b.texto}</Texto></p>
      case 'lista':
        return <ul key={i} className="lista">{b.items.map((x, j) => <li key={j}><Texto>{x}</Texto></li>)}</ul>
      case 'pasos':
        return (
          <ol key={i} className="pasos-art">
            {b.items.map((x, j) => <li key={j}><span className="num">{j + 1}</span><span><Texto>{x}</Texto></span></li>)}
          </ol>
        )
      case 'datos':
        return (
          <dl key={i} className="datos">
            {b.items.map(([k, v]) => <div key={k}><dt>{k}</dt><dd><Texto>{v}</Texto></dd></div>)}
          </dl>
        )
      case 'tabla':
        return (
          <figure key={i} className="tabla-art">
            {b.titulo && <figcaption>{b.titulo}</figcaption>}
            <div className="tabla-scroll">
              <table>
                <thead><tr>{b.columnas.map((c) => <th key={c}>{c}</th>)}</tr></thead>
                <tbody>{b.filas.map((f, j) => <tr key={j}>{f.map((c, k) => <td key={k}><Texto>{c}</Texto></td>)}</tr>)}</tbody>
              </table>
            </div>
            {b.nota && <p className="tabla-nota"><Texto>{b.nota}</Texto></p>}
          </figure>
        )
      case 'aviso': {
        const a = AVISOS[b.nivel] || AVISOS.nota
        return (
          <aside key={i} className={`aviso aviso-${b.nivel}`}>
            <strong>{a.icono} {b.titulo || a.titulo}</strong>
            <p><Texto>{b.texto}</Texto></p>
          </aside>
        )
      }
      case 'figura': {
        const Figura = figuras[b.id]
        return (
          <figure key={i} className="figura">
            {Figura ? <div className="figura-lienzo"><Figura /></div> : <div className="figura-falta">Figura «{b.id}» pendiente</div>}
            {b.pie && <figcaption><Texto>{b.pie}</Texto></figcaption>}
          </figure>
        )
      }
      case 'foto':
        return (
          <figure key={i} className="foto">
            <Foto f={b} />
            {b.pie && <figcaption><Texto>{b.pie}</Texto><Credito c={b.credito} /></figcaption>}
          </figure>
        )
      case 'galeria':
        return (
          <figure key={i} className="foto galeria">
            <div className="galeria-grilla">
              {b.fotos.map((f) => (
                <figure key={f.src}>
                  <Foto f={f} />
                  <figcaption><Texto>{f.pie}</Texto><Credito c={f.credito} /></figcaption>
                </figure>
              ))}
            </div>
            {b.pie && <figcaption><Texto>{b.pie}</Texto></figcaption>}
          </figure>
        )
      case 'interactivo': {
        const Componente = interactivos[b.id]
        return Componente
          ? <div key={i} className="interactivo"><Componente {...b.props} query={query} /></div>
          : <p key={i} className="figura-falta">Interactivo «{b.id}» no encontrado</p>
      }
      default:
        return null
    }
  })
}

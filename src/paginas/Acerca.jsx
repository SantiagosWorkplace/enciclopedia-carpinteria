import Migas from '../components/Migas.jsx'
import Donacion from '../components/Donacion.jsx'
import { AUTOR, SITIO, correo } from '../sitio.js'

const fuentes = [
  {
    obra: 'Albert Jackson y David Day, Manual completo de la madera, la carpintería y la ebanistería',
    datos: 'Madrid: Ediciones del Prado, 1993. Edición original: William Collins Sons & Co., Londres, 1989.',
    uso: 'Obra de referencia principal para la organización por capítulos y los temas que trata cada uno. Los textos, las figuras y las medidas del sitio están redactados y dibujados de nuevo; no se reproducen textos ni ilustraciones del libro.',
  },
  {
    obra: 'Forest Products Laboratory, Wood Handbook: Wood as an Engineering Material',
    datos: 'Departamento de Agricultura de los Estados Unidos (USDA).',
    url: 'https://www.fpl.fs.usda.gov/',
    uso: 'Densidades, durezas, coeficientes de movimiento y propiedades mecánicas de las especies.',
  },
  {
    obra: 'Normas europeas del Comité Europeo de Normalización (CEN)',
    datos: 'EN 204 (colas), EN 300 (OSB), EN 312 (aglomerado), EN 338 (clases resistentes), EN 636 (contrachapado), EN 975 (clasificación de frondosas), EN 14080 (madera laminada encolada) y EN 14749 (muebles de almacenaje).',
    url: 'https://www.cencenelec.eu/',
    uso: 'Clases, usos y requisitos de tableros, colas, madera estructural y muebles.',
  },
  {
    obra: 'NIMF 15, Convención Internacional de Protección Fitosanitaria (FAO)',
    datos: 'Norma para el tratamiento del embalaje de madera.',
    url: 'https://www.ippc.int/',
    uso: 'Marcado y tratamiento de palés y embalajes.',
  },
  {
    obra: 'FSC y PEFC',
    datos: 'Sistemas de certificación forestal.',
    url: 'https://fsc.org/',
    uso: 'Certificación y origen responsable de la madera.',
  },
  {
    obra: 'Wikimedia Commons',
    datos: 'Fotografías con licencia libre (CC0, dominio público, CC BY y CC BY-SA).',
    url: 'https://commons.wikimedia.org/',
    uso: 'Las fotos de los artículos. Cada una muestra su autor, su licencia y un enlace a la original.',
  },
]

export default function Acerca() {
  const mail = correo()
  return (
    <div className="pagina acerca">
      <Migas items={[['Acerca y fuentes']]} />
      <header className="art-head">
        <span className="eyebrow">Sobre el sitio</span>
        <h1>Acerca de {SITIO}</h1>
        <p className="lead">
          {SITIO} es una enciclopedia de carpintería interactiva y gratuita, en español y con todas las medidas en
          sistema métrico. Explica el material, las herramientas, las uniones, los acabados y la construcción como
          un manual de taller.
        </p>
      </header>

      <section>
        <h2>Autor y contacto</h2>
        <p>
          El sitio lo escribe y lo mantiene <strong>{AUTOR}</strong>, su único autor. Para avisar de un error, proponer
          un tema o hacer una consulta, escribe a <a href={`mailto:${mail}`}>{mail}</a>.
        </p>
      </section>

      <section>
        <h2>Cómo se hace</h2>
        <ul>
          <li>Los textos son originales y se revisan contra las fuentes de esta página.</li>
          <li>Las figuras son dibujos propios; las medidas de cada una salen del artículo donde aparece.</li>
          <li>Las fotos son de Wikimedia Commons, con licencia libre y el crédito de su autor.</li>
          <li>Cada artículo muestra la fecha de su última actualización.</li>
          <li>Los avisos «Verificar» señalan datos que cambian según el fabricante, la norma o el país.</li>
        </ul>
      </section>

      <section>
        <h2>Fuentes</h2>
        <ol className="fuentes">
          {fuentes.map((f) => (
            <li key={f.obra}>
              <strong>{f.url ? <a href={f.url} target="_blank" rel="noopener noreferrer">{f.obra}</a> : f.obra}</strong>.{' '}
              {f.datos}
              <span className="fuente-uso">{f.uso}</span>
            </li>
          ))}
        </ol>
      </section>

      <aside className="aviso aviso-seguridad">
        <strong>⚠️ Antes de trabajar</strong>
        <p>
          La información es orientativa y no reemplaza las instrucciones del fabricante de cada herramienta, máquina o
          producto, ni las normas de seguridad y de construcción de tu país.
        </p>
      </aside>

      <Donacion />
    </div>
  )
}

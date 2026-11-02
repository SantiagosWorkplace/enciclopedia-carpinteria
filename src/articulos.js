// Carga perezosa de artículos: cada archivo es un fragmento aparte del build,
// así la portada no descarga el contenido de toda la enciclopedia.
const modulos = import.meta.glob('./contenido/articulos/*/*.js')

const clave = (cap, art) => `./contenido/articulos/${cap}/${art}.js`

export const disponible = (cap, art) => clave(cap, art) in modulos
export const cargarArticulo = async (cap, art) => (await modulos[clave(cap, art)]()).default

// Minutos de lectura aproximados (≈ 200 palabras por minuto).
export function minutosLectura(bloques) {
  const texto = bloques
    .map((b) => [b.texto, ...(b.items || []).flat(), ...(b.filas || []).flat()].filter(Boolean).join(' '))
    .join(' ')
  return Math.max(1, Math.round(texto.split(/\s+/).length / 200))
}

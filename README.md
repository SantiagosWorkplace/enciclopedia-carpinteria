# Taller Atenea

Enciclopedia de carpintería interactiva y gratuita: https://taller-atenea.netlify.app

Enciclopedia interactiva sobre maderas, uniones y herramientas. React + Vite, HTML, CSS y JavaScript.

## Cómo ejecutar

```bash
npm install
npm run dev
```

`npm run validar` comprueba el contenido: que cada artículo tenga entrada en el índice, que los términos `[[...]]` existan en el glosario y que los "ver también" apunten a rutas reales.

## Cómo está organizado el contenido

La enciclopedia usa rutas por hash (`#/capitulo/articulo`), así funciona en cualquier hosting estático.

- `src/contenido/indice.js` — capítulos y artículos (título y resumen). Es la fuente del índice de la portada.
- `src/contenido/articulos/<capitulo>/<articulo>.js` — el texto de cada artículo. Si el archivo no existe, el artículo aparece como "en preparación".
- `src/contenido/glosario.js` — términos del glosario.
- `src/figuras/` — ilustraciones originales en SVG; se registran en `figuras/index.js`.
- `src/interactivos.js` — componentes que un artículo puede insertar (especies, uniones, herramientas, construcciones, calculadoras).

### Escribir un artículo

Cada artículo exporta `{ actualizado, relacionados, bloques }`. Tipos de bloque:

| Bloque | Campos |
|---|---|
| `p`, `h2`, `h3` | `texto` |
| `lista`, `pasos` | `items` (lista de textos) |
| `datos` | `items` (pares `[etiqueta, valor]`) |
| `tabla` | `titulo`, `columnas`, `filas`, `nota` |
| `aviso` | `nivel` (`seguridad`, `consejo`, `nota`, `verificar`), `texto`, `titulo` opcional |
| `figura` | `id` (de `figuras/index.js`), `pie` |
| `interactivo` | `id` (de `interactivos.js`), `props` |

En los textos: `**negrita**`, `*cursiva*`, `[[termino]]` o `[[texto visible|termino]]` para el glosario y `[texto](#/capitulo/articulo)` para enlaces.

Todo el contenido es original y las medidas van en sistema métrico. Los datos dudosos se marcan con un aviso `verificar`.

## Estructura del código

- `src/data.js` — especies de madera.
- `src/herramientas.js` — catálogo de herramientas.
- `src/uniones.js` — uniones con sus pasos y la geometría de cada dibujo.
- `src/construcciones.js` — sistemas constructivos del mundo; los planos se escriben en metros y comparten escala (40 px = 1 m).
- `src/components/WorldBuilds.jsx` — capítulo de construcciones con planos que se dibujan solos y medidas enlazadas a cada pieza.
- `src/components/GrainCanvas.jsx` — fondo animado de vetas que reacciona al ratón.
- `src/components/WoodCard.jsx` — tarjetas con inclinación 3D que giran para mostrar la ficha técnica.
- `src/components/JointViewer.jsx` — diagramas de uniones que se ensamblan y pasos que se marcan.
- `src/components/ToolGrid.jsx` — catálogo de herramientas con filtro y búsqueda.
- `src/components/Reveal.jsx` — aparición al hacer scroll.

## Páginas de referencia

| Sitio | Qué aporta |
|---|---|
| [The Wood Database](https://www.wood-database.com/) | Fichas de cientos de especies: dureza Janka, densidad, trabajabilidad, fotos. El mejor modelo para la sección de maderas. |
| [Fine Woodworking](https://www.finewoodworking.com/) | Técnicas explicadas como en un libro, con diagramas de uniones. |
| [Popular Woodworking](https://www.popularwoodworking.com/) | Artículos técnicos y planos, de nivel básico a avanzado. |
| [Paul Sellers' Blog](https://paulsellers.com/) | Carpintería manual paso a paso; muy buena referencia de "técnica correcta". |
| [Woodworkers Guild of America](https://www.wwgoa.com/) | Guías organizadas por técnica y herramienta. |
| [Wikipedia: Woodworking joints](https://en.wikipedia.org/wiki/Woodworking_joints) | Índice enciclopédico de tipos de uniones. |
| [Instructables – Woodworking](https://www.instructables.com/workshop/woodworking/) | Proyectos paso a paso con fotos, formato muy interactivo. |

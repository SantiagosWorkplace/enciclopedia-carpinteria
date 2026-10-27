# Enciclopedia de Carpintería

Enciclopedia interactiva sobre maderas, uniones y herramientas. React + Vite, HTML, CSS y JavaScript.

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Estructura

- `src/data.js` — maderas y herramientas.
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

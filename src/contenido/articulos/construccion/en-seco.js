export default {
  actualizado: '2026-10-27',
  relacionados: ['construccion/mundo', 'madera/tableros', 'herramientas-manuales/catalogo'],
  bloques: [
    { tipo: 'p', texto: 'La construcción en seco reemplaza el agua de la mezcla por piezas que se atornillan, clavan o encastran: estructuras de madera o de chapa de acero, placas de yeso, tableros y paneles. La obra es más limpia y rápida, y muchas herramientas son las mismas que las de carpintería.' },
    { tipo: 'p', texto: 'El entramado ligero de madera y la madera contralaminada (CLT) también son sistemas en seco, por eso aparecen en este grupo junto al steel framing, la tabiquería de placa de yeso y los paneles SIP.' },
    { tipo: 'interactivo', id: 'construcciones', props: { grupoInicial: 'seco' } },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las secciones de perfiles, la separación entre montantes y los espesores de paneles cambian según el fabricante y la norma de cada país. Confírmalos con la documentación técnica antes de construir.' },
  ],
}

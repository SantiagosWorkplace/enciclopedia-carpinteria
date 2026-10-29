export default {
  actualizado: '2026-10-29',
  relacionados: ['uniones/clavijas-galletas', 'uniones/cantos', 'uniones/ingletes', 'madera/tableros'],
  bloques: [
    { tipo: 'p', texto: 'La galletera es una pequeña sierra circular que corta ranuras en forma de media luna. En ellas se encola una [[galleta]], una pieza ovalada de madera prensada, que une las dos piezas y sobre todo las **alinea**. Es la forma más rápida de unir tableros, encolar tablas por el canto sin escalones o armar cajas de tablero.' },

    { tipo: 'h2', texto: 'Las galletas' },
    { tipo: 'figura', id: 'galletas', pie: 'A la izquierda, los tres tamaños más comunes, a escala. A la derecha, una unión de canto en sección.' },
    {
      tipo: 'lista',
      items: [
        '**Material:** madera de haya comprimida, con la veta en diagonal. Absorbe el agua de la cola, se hincha y ajusta firme en la ranura.',
        '**Tamaños:** n.º 0, 10 y 20, de menor a mayor. Usa la mayor que entre en el ancho de la pieza.',
        '**Espesor:** ≈ 4 mm, igual para todos los tamaños.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las medidas de cada número pueden variar levemente entre fabricantes. Comprueba la profundidad de corte con una galleta real antes de empezar.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Guarda las galletas en un frasco cerrado. Si absorben la humedad del ambiente, se hinchan y ya no entran en la ranura.' },

    { tipo: 'h2', texto: 'Cómo se usa' },
    {
      tipo: 'pasos',
      items: [
        'Junta las piezas en su posición final y marca con lápiz una línea que cruce la unión en el lugar de cada galleta.',
        'Ajusta la profundidad para el tamaño de galleta y la altura de la guía para que la ranura quede centrada en el espesor.',
        'Apoya la guía en la cara de referencia de la pieza, alinea la marca central de la máquina con la línea de lápiz y hunde la hoja.',
        'Repite en la otra pieza, apoyando la guía en la cara que debe quedar a ras.',
        'Pon cola en las ranuras, no solo en la galleta, y en los cantos. Arma y prensa enseguida: la galleta empieza a hincharse en minutos.',
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Separación:** en uniones de canto, una galleta cada 15 – 25 cm, empezando a unos 5 cm de cada extremo.',
        '**Tableros gruesos:** dos filas de galletas superpuestas en piezas de más de ≈ 30 mm.',
        '**Ingletes:** la guía se inclina a 45° y la ranura queda perpendicular a la cara del inglete.',
        '**Cerca de un extremo que se va a recortar:** no pongas galletas donde vas a cortar después.',
      ],
    },

    { tipo: 'h2', texto: 'Cuándo usarlas y cuándo no' },
    {
      tipo: 'tabla',
      titulo: 'Galletas frente a otras uniones',
      columnas: ['Situación', '¿Galletas?'],
      filas: [
        ['Encolar tablas por el canto para un tablero', 'Sí: alinean las caras y facilitan el prensado'],
        ['Cajas y muebles de tablero', 'Sí: rápidas y suficientes'],
        ['Ingletes de marcos', 'Sí: refuerzan y alinean'],
        ['Sillas, mesas y uniones que reciben palanca', 'No: usa caja y espiga o espigas planas'],
        ['Piezas de menos de ≈ 12 mm de espesor', 'No: la ranura las debilita o se marca en la cara'],
      ],
    },

    { tipo: 'h2', texto: 'Espigadoras de espiga plana' },
    { tipo: 'p', texto: 'Una variante más reciente corta, con una fresa que oscila de lado a lado, cajas alargadas de fondo redondeado. En ellas se encola una espiga plana de madera maciza. El resultado es una caja y espiga suelta: mucho más resistente que una galleta y casi tan rápida. Es una opción excelente para patas, faldones y bastidores.' },
    { tipo: 'p', texto: 'Las uniones con clavijas, galletas y espigas planas se comparan en detalle en [Clavijas, galletas y espigas planas](#/uniones/clavijas-galletas).' },
  ],
}

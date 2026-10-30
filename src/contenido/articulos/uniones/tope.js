export default {
  actualizado: '2026-10-29',
  relacionados: ['uniones/elegir-union', 'uniones/clavijas-galletas', 'herrajes/tornillos', 'herrajes/clavos'],
  bloques: [
    { tipo: 'p', texto: 'En la [[unión a tope|union-tope]], una pieza apoya su testa o su canto contra otra, sin cortes de encaje. Es la más rápida de hacer y la más débil si se confía solo en la cola, porque en general encola una testa. Con el refuerzo adecuado, alcanza para cajas de taller, muebles de tablero, zócalos y estructuras ocultas.' },

    { tipo: 'h2', texto: 'Cortes que cierran sin luz' },
    {
      tipo: 'lista',
      items: [
        '**Testa a escuadra** en los dos sentidos, a lo ancho y a lo grueso. Compruébala con la escuadra contra la cara y contra el canto.',
        '**Largo exacto:** las piezas iguales se cortan juntas o con un tope, nunca midiendo una por una.',
        '**Testa limpia:** un disco de dientes finos o un repaso con la tabla de refrentar dejan la testa lisa. Una testa astillada muestra luz en la junta.',
      ],
    },

    { tipo: 'h2', texto: 'Refuerzos' },
    { tipo: 'figura', id: 'refuerzos-tope', pie: 'Cuatro refuerzos para una esquina a tope, vista de testa. La pieza horizontal apoya su testa contra la vertical.' },
    {
      tipo: 'tabla',
      titulo: 'Cómo reforzar una unión a tope',
      columnas: ['Refuerzo', 'Cómo es', 'Cuándo usarlo'],
      filas: [
        ['Taco encolado', 'Listón cuadrado o triangular encolado en el ángulo interior', 'Cajas, zócalos y bastidores ocultos'],
        ['Tornillos', 'Atraviesan una pieza y entran en la testa de la otra', 'Muebles de taller y de tablero; con pretaladro'],
        ['Tornillos de bolsillo', 'Entran en diagonal desde un agujero inclinado en la cara interior', 'Bastidores y marcos que no se ven por dentro'],
        ['Clavijas', 'Varillas encoladas en agujeros alineados', 'Muebles de tablero y de madera maciza'],
        ['Galletas', 'Piezas ovaladas en ranuras de media luna', 'Tableros y cajas; sobre todo alinean'],
        ['Escuadras y placas', 'Piezas metálicas atornilladas', 'Estructuras, arreglos y uniones que no se ven'],
        ['Clavos', 'Mejor inclinados en direcciones alternas', 'Cajones de embalaje, carpintería de obra'],
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Tornillos en la testa:** agarran mucho menos que en la veta lateral, porque la rosca corta las fibras en lugar de abrazarlas. Usa tornillos más largos y no los aprietes de más.',
        '**Tableros de partículas y MDF:** usa tornillos para aglomerado, de rosca gruesa, y pretaladra siempre. Atornillar cerca del canto sin pretaladro lo abre en capas.',
        '**Clavijas y galletas:** quedan ocultas y convierten la unión en una de las más prácticas para muebles de tablero. Ver [Clavijas, galletas y espigas planas](#/uniones/clavijas-galletas).',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Una testa absorbe la cola y queda seca. Pasa una mano de cola diluida en la testa, espera unos minutos y vuelve a encolar antes de armar: la segunda mano queda en la superficie.' },

    { tipo: 'h2', texto: 'Tope por el canto' },
    { tipo: 'p', texto: 'Cuando dos tablas se unen canto con canto, la unión a tope es en realidad muy fuerte: encola veta larga con veta larga. Es la forma de hacer tableros anchos. Ver [Unión de tablas por el canto](#/uniones/cantos).' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'El largo de tornillo y el diámetro de pretaladro dependen del tornillo y del material. Sigue las indicaciones del fabricante y prueba en un recorte.' },
  ],
}

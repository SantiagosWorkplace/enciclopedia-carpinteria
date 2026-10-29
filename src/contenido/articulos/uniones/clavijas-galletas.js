export default {
  actualizado: '2026-10-29',
  relacionados: ['electricas/galletera', 'uniones/tope', 'uniones/cantos', 'herramientas-manuales/taladros-manuales'],
  bloques: [
    { tipo: 'p', texto: 'Clavijas, galletas y espigas planas convierten una unión a tope en una unión firme y, sobre todo, alineada. Las tres se encolan en agujeros o ranuras hechos en las dos piezas, y las tres quedan ocultas. Son las uniones más usadas en muebles de tablero y muy prácticas en madera maciza.' },

    { tipo: 'h2', texto: 'Clavijas' },
    { tipo: 'p', texto: 'La [[clavija]] es una varilla cilíndrica de madera dura, normalmente haya, encolada mitad en cada pieza. Las de fábrica tienen estrías para que salgan el aire y la cola sobrante, y las puntas achaflanadas para entrar con facilidad.' },
    {
      tipo: 'tabla',
      titulo: 'Medidas habituales de clavijas',
      columnas: ['Diámetro × largo', 'Espesor de pieza orientativo', 'Broca'],
      filas: [
        ['6 × 30 mm', '12 – 16 mm', '6 mm'],
        ['8 × 30 – 40 mm', '16 – 22 mm', '8 mm'],
        ['10 × 40 – 50 mm', '22 – 30 mm', '10 mm'],
        ['12 × 50 – 60 mm', 'Más de 30 mm', '12 mm'],
      ],
      nota: 'Regla práctica: diámetro de la clavija de 1/3 a 1/2 del espesor de la pieza. Cada agujero, 1 – 2 mm más profundo que la mitad del largo de la clavija.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las clavijas pueden venir unas centésimas más gruesas o más finas que la medida nominal, según el fabricante y la humedad. Prueba el ajuste en un agujero de ensayo: debe entrar con presión de la mano.' },
    {
      tipo: 'pasos',
      items: [
        'Junta las piezas y marca con lápiz una línea que cruce la unión en cada clavija. Separación habitual: de 10 a 15 cm, con la primera a unos 3 – 5 cm de cada extremo.',
        'Perfora con una guía de clavijas apoyada siempre en la cara de referencia. Mantiene la broca perpendicular y centrada.',
        'Si no tienes guía, perfora una pieza, coloca centradores metálicos en los agujeros y presiona la otra pieza contra ellos: sus puntas marcan dónde perforar.',
        'Usa un tope de profundidad en la broca y limpia el agujero de virutas.',
        'Pon la cola en los agujeros con un palito, no solo en la clavija: una clavija encolada por fuera empuja la cola al fondo.',
        'Arma y prensa enseguida, porque la clavija se hincha con el agua de la cola.',
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'El agujero tiene que estar perfectamente perpendicular. Una desviación de un grado en dos agujeros enfrentados alcanza para que la unión no cierre o quede con escalón.' },

    { tipo: 'h2', texto: 'Galletas' },
    { tipo: 'figura', id: 'galletas', pie: 'Las galletas más comunes, a escala, y una unión de canto con una galleta en sección.' },
    { tipo: 'p', texto: 'La [[galleta]] se encola en dos ranuras de media luna cortadas con la galletera. Las ranuras son algo más largas que la galleta, y eso deja ajustar las piezas unos milímetros a lo largo antes de prensar. Por eso es la forma más rápida y tolerante de unir tableros, cantos y cajas. Ver [La galletera](#/electricas/galletera).' },

    { tipo: 'h2', texto: 'Espigas planas sueltas' },
    { tipo: 'p', texto: 'Una máquina con una fresa oscilante abre cajas alargadas en las dos piezas, y una espiga plana de madera, fabricada a medida, las une. Es una caja y espiga suelta hecha en segundos: resiste casi como una espiga tallada y alinea como una clavija. Las mismas cajas se pueden hacer con una fresadora y una guía, y espigas cortadas de una tira de madera dura.' },

    { tipo: 'h2', texto: 'Cuál elegir' },
    {
      tipo: 'tabla',
      titulo: 'Comparación',
      columnas: ['', 'Clavijas', 'Galletas', 'Espigas planas'],
      filas: [
        ['Herramienta', 'Taladro y guía', 'Galletera', 'Máquina de espigas o fresadora'],
        ['Precisión necesaria', 'Alta: no perdona errores', 'Baja: se ajusta a lo largo', 'Media'],
        ['Resistencia', 'Alta', 'Media: sobre todo alinea', 'Muy alta'],
        ['Mejor uso', 'Marcos, patas, muebles de tablero', 'Cantos, tableros, cajas', 'Marcos, sillas, mesas'],
      ],
    },
  ],
}

export default {
  actualizado: '2026-10-29',
  relacionados: ['uniones/encolado', 'herramientas-manuales/cepillos', 'maquinas/cepilladora', 'madera/movimiento'],
  bloques: [
    { tipo: 'p', texto: 'Las tablas anchas son caras, difíciles de conseguir y tienden a abarquillarse. Por eso las tapas de mesas, los laterales de muebles y los tableros de banco se hacen encolando varias tablas por el [[canto]]. Bien hecha, la junta es más fuerte que la madera y casi invisible.' },

    { tipo: 'h2', texto: 'Elegir y ordenar las tablas' },
    {
      tipo: 'lista',
      items: [
        '**Misma especie y humedad:** tablas de la misma partida, aclimatadas juntas en el taller.',
        '**Aspecto:** ordena las tablas a la vista. Busca que el color y el dibujo de la veta continúen de una a otra y que la veta corra en el mismo sentido, para cepillar todo el tablero sin repelos.',
        '**Anillos:** muchos carpinteros alternan la orientación de los anillos de una tabla a la siguiente, como en la figura. Si cada tabla se abarquilla, lo hace hacia un lado distinto, y el tablero queda ondulado en lugar de curvo.',
        '**Tablas radiales:** si puedes, usa tablas de corte radial. Casi no se abarquillan y la orientación deja de importar.',
        '**Marca un triángulo** con lápiz a lo ancho de todas las tablas. Si se mezclan, el triángulo indica su orden y su cara.',
      ],
    },
    { tipo: 'figura', id: 'encolar-cantos', pie: 'A la izquierda, cinco tablas vistas de testa. A la derecha, dos tablas vistas desde arriba con una junta con resorte.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Alternar los anillos no impide el movimiento de la madera, solo lo reparte. Que un tablero quede plano depende sobre todo de que la madera esté bien seca y de que sus dos caras estén igual de expuestas al aire.' },

    { tipo: 'h2', texto: 'Preparar los cantos' },
    {
      tipo: 'lista',
      items: [
        '**Derechos y a escuadra con la cara,** con la cepilladora o con un cepillo largo. Con la sierra de mesa también sirve, si el disco deja un corte limpio.',
        '**Prueba a contraluz:** apoya una tabla sobre la otra. No debe verse luz en toda la junta.',
        '**Compensa el ángulo:** si cepillas a mano, dobla las dos tablas juntas, cara con cara, y cepilla los dos cantos a la vez. Si el cepillo no queda a escuadra, los errores se anulan al desplegarlas.',
        '**Junta con resorte:** algunos dejan un hueco mínimo en el centro de la junta, de unas décimas de milímetro. La prensa del medio lo cierra y los extremos, que pierden humedad antes, quedan apretados.',
      ],
    },

    { tipo: 'h2', texto: 'Encolar y prensar' },
    { tipo: 'figura', id: 'prensado-tablero', pie: 'La prensa del centro va arriba y se aprieta primero; las de los extremos van abajo, y de ellas solo se ven las mordazas. A lo largo de cada junta sale un cordón de gotas de cola.' },
    {
      tipo: 'pasos',
      items: [
        'Arma todo en seco con las prensas y comprueba que las juntas cierran sin forzar.',
        'Reparte cola en un canto de cada junta, en una capa fina y continua que cubra todo el canto.',
        'Arma y aprieta primero la prensa del centro y luego hacia los extremos, alternando prensas arriba y abajo del tablero para que no se curve.',
        'Nivela las juntas mientras aprietas, con golpes de mazo sobre un taco o con [[calzos|calzo]] prensados a través del tablero.',
        'Aprieta hasta que salga un cordón parejo de pequeñas gotas de cola a lo largo de la junta. Más presión no mejora la unión.',
        'Retira la cola sobrante cuando tenga consistencia de goma, con un formón o una rasqueta.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Las galletas o las clavijas no hacen más fuerte una junta de canto, pero mantienen las caras alineadas al prensar. Ahorran cepillado si el tablero tiene muchas tablas.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Deja el tablero al menos un día antes de cepillarlo o lijarlo. La cola hincha la madera junto a la junta; si la aplanas enseguida, al secarse queda una canaleta hundida en cada junta.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'El tiempo de prensado y de curado depende de la cola, la temperatura y la humedad. Sigue las indicaciones del fabricante. Ver [Encolado y prensado](#/uniones/encolado).' },
  ],
}

export default {
  actualizado: '2026-10-29',
  relacionados: ['uniones/visor', 'electricas/fresadora', 'maquinas/sierra-mesa', 'diseno/armarios'],
  bloques: [
    { tipo: 'p', texto: 'La [[ranura]] es un canal cerrado por los dos lados, y el [[rebajo]] es un escalón abierto por un lado. Las dos sostienen y ubican otra pieza: un estante, una trasera, el fondo de un cajón o la tabla vecina de un revestimiento. Son la base de los muebles de caja.' },

    { tipo: 'h2', texto: 'Seis uniones' },
    { tipo: 'figura', id: 'ranuras-rebajos', pie: 'Todas vistas en sección, salvo la ranura detenida, que se ve de frente: la ranura no llega al canto delantero y la unión no se ve.' },
    {
      tipo: 'tabla',
      titulo: 'Uniones con ranura o rebajo',
      columnas: ['Unión', 'Cómo es', 'Uso'],
      filas: [
        ['Ranura', 'Canal a contraveta en la cara de una pieza, donde entra la otra', 'Estantes fijos, divisiones'],
        ['Ranura detenida', 'La ranura termina antes del canto delantero; la otra pieza lleva un recorte', 'Estantes cuando no se quiere ver la unión'],
        ['Rebajo', 'Escalón en el canto o en el extremo', 'Esquinas de cajas, traseras, puertas que montan sobre el marco'],
        ['Machihembrado', 'Una tabla con [[lengüeta|lengueta]] y otra con ranura en los cantos', 'Revestimientos, suelos, traseras de tablas'],
        ['Lengüeta postiza', 'Las dos piezas con ranura y un listón aparte que las une', 'Tableros, ingletes, cantos de tablero'],
        ['Fondo en ranura', 'Un tablero fino entra en una ranura sin cola', 'Fondos de cajones, paneles de puertas'],
      ],
    },

    { tipo: 'h2', texto: 'Medidas habituales' },
    {
      tipo: 'datos',
      items: [
        ['Profundidad de una ranura para estante', '≈ 1/3 del espesor del lateral; nunca más de la mitad'],
        ['Ancho de la ranura', 'Igual al espesor real de la pieza que entra, medido, no el nominal'],
        ['Rebajo para trasera', 'Ancho igual al espesor de la trasera más 1 – 2 mm; profundidad ≈ la mitad del lateral'],
        ['Ranura para fondo de cajón', '≈ 6 mm de ancho y de profundidad, a 10 – 12 mm del borde inferior'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los tableros de un mismo espesor nominal suelen medir unas décimas de milímetro menos o más. Mide el tablero real con un calibre antes de elegir la fresa o ajustar la sierra.' },

    { tipo: 'h2', texto: 'Cómo se cortan' },
    {
      tipo: 'lista',
      items: [
        '**Fresadora con guía:** una fresa recta del ancho justo, o una más fina en dos pasadas, contra un listón prensado como guía. Es lo más práctico para ranuras en laterales grandes.',
        '**Sierra de mesa:** varias pasadas con el disco, moviendo la guía entre una y otra, o con un juego de discos de ranurar donde la máquina lo admita.',
        '**A mano:** se sierran los dos costados de la ranura con una sierra de costilla y se vacía con el formón y una guimbarda. Los rebajos se cortan con un guillame.',
        '**Ranura detenida:** con la fresadora, empezando o terminando el corte contra un tope. El extremo redondeado se escuadra con el formón o se redondea la pieza.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Muchas sierras de mesa no admiten juegos de discos de ranurar, y en algunos países su uso está restringido por norma. Comprueba el manual de tu máquina.' },

    { tipo: 'h2', texto: 'Detalles que importan' },
    {
      tipo: 'lista',
      items: [
        '**Fondos y paneles flotantes:** el fondo de madera maciza se mueve con la humedad. No se encola: queda libre en la ranura, con holgura a lo ancho. Los de contrachapado se pueden encolar.',
        '**Machihembrado:** si el [[machihembrado]] se monta en una época seca, se deja una pequeña separación entre tablas para que puedan hincharse cuando suba la humedad. Si se monta en una época húmeda, van casi juntas.',
        '**Lengüeta postiza:** de contrachapado, porque una de madera maciza con la veta a lo largo se parte con facilidad.',
        '**Estantes en ranura:** la ranura los sostiene en toda su profundidad y además mantiene derechos los laterales.',
      ],
    },
  ],
}

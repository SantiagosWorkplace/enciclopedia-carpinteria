export default {
  actualizado: '2026-10-27',
  relacionados: ['madera/crecimiento', 'madera/movimiento', 'madera/secado', 'madera/chapas'],
  bloques: [
    { tipo: 'p', texto: 'La forma en que se sierra un tronco decide tres cosas de cada tabla: cuánto se va a mover, qué dibujo va a tener la veta y cuánto va a costar. Dos tablas de la misma especie pueden comportarse de forma muy distinta solo por la parte del tronco de la que salieron.' },

    { tipo: 'h2', texto: 'Del bosque al aserradero' },
    {
      tipo: 'pasos',
      items: [
        '**Apeo:** se corta el árbol y se le quitan las ramas.',
        '**Tronzado:** el tronco se divide en trozas de largo comercial, buscando dejar fuera los defectos grandes.',
        '**Descortezado:** se quita la corteza, que lleva tierra y piedras que dañarían las sierras.',
        '**Aserrado principal:** una sierra de cinta o circular grande abre la troza en tablones o en piezas más pequeñas.',
        '**Canteado y despuntado:** se quitan los cantos con corteza y los extremos rajados.',
        '**Clasificación y secado:** las piezas se separan por calidad y se apilan para secar. Ver [Secado de la madera](#/madera/secado).',
      ],
    },

    { tipo: 'h2', texto: 'Tres formas de aserrar un tronco' },
    { tipo: 'figura', id: 'cortes-aserrado', pie: 'Vista desde la testa. Las líneas negras son los cortes de la sierra. Los colores indican qué tipo de tabla sale de cada zona.' },
    { tipo: 'h3', texto: 'a. En paralelo' },
    { tipo: 'p', texto: 'La troza se corta entera con cortes paralelos, sin girarla. Es lo más rápido y lo que menos madera desperdicia. La mayoría de las tablas salen tangenciales; solo las del centro, cerca de la médula, salen radiales. Las tablas quedan con [[gema]] en los cantos y hay que cantearlas después.' },
    { tipo: 'h3', texto: 'b. En vuelta' },
    { tipo: 'p', texto: 'Se sacan tablas de una cara, se gira la troza un cuarto de vuelta, se sacan de la siguiente y así sucesivamente. El aserrador puede ir eligiendo la mejor cara en cada vuelta y dejar los defectos en el centro, que sale como una viga con la médula. Casi todas las tablas salen tangenciales.' },
    { tipo: 'h3', texto: 'c. Radial o al cuarto' },
    { tipo: 'p', texto: 'La troza se divide primero en cuatro. Cada cuarto se sierra alternando sus dos caras planas para que los cortes queden lo más cerca posible de los radios. Las tablas son más estrechas, se desperdicia más y lleva más trabajo, por eso son más caras. A cambio, son las más estables.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Existe también el aserrado radial "en abanico", con cada corte siguiendo un radio exacto. Da las tablas radiales perfectas, pero con forma de cuña y mucho desperdicio, así que casi no se usa.' },

    { tipo: 'h2', texto: 'Cómo reconocer el corte de una tabla' },
    { tipo: 'p', texto: 'No hace falta saber cómo se aserró el tronco: basta con mirar la testa de la tabla y ver el ángulo de los anillos con la cara.' },
    { tipo: 'figura', id: 'orientacion-anillos', pie: 'Arriba, la cara de la tabla. Abajo, su testa con los anillos. El tipo de tabla se define por el ángulo entre los anillos y la cara.' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de tabla según el ángulo de los anillos',
      columnas: ['Tipo', 'Ángulo con la cara', 'Aspecto de la cara', 'Comportamiento'],
      filas: [
        ['[[Tangencial|aserrado-tangencial]]', '0 – 30°', 'Arcos en forma de llama o catedral', 'Es la que más se mueve a lo ancho y tiende a abarquillarse'],
        ['[[Falso radial|falso-radial]]', '30 – 60°', 'Veta recta y pareja en la cara y en el canto', 'Estabilidad intermedia; ideal para patas que se ven por las cuatro caras'],
        ['[[Radial|aserrado-radial]]', '60 – 90°', 'Líneas rectas y apretadas; espejuelos en robles', 'Se mueve aproximadamente la mitad que la tangencial y se mantiene plana'],
      ],
    },
    { tipo: 'p', texto: 'Una misma tabla puede tener partes de cada tipo: una tabla ancha que pasa cerca de la médula suele ser radial en el centro y tangencial en los cantos.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para un tablero de mesa, une tablas del mismo tipo de corte y alterna o no el sentido de los anillos según el aspecto que busques. Lo que más importa es que estén bien secas y que el tablero pueda moverse sin trabas; se explica en [El movimiento de la madera](#/madera/movimiento).' },

    { tipo: 'h2', texto: 'Cómo se vende la madera' },
    { tipo: 'p', texto: 'Los nombres de las piezas cambian de un país a otro, y conviene confirmar con el proveedor lo que entiende por cada uno. Como orientación:' },
    {
      tipo: 'lista',
      items: [
        '**Tabla:** pieza plana, de unos 10 a 30 mm de espesor y bastante más ancha que gruesa.',
        '**Tablón:** como la tabla, pero más gruesa, desde unos 40 mm.',
        '**Listón:** pieza estrecha y delgada, por ejemplo de 20 × 40 mm.',
        '**Tirante, cuartón o viga:** piezas de sección más cuadrada, para estructura.',
        '**En bruto:** tal como sale de la sierra, con la superficie áspera.',
        '**Cepillada:** pasada por la cepilladora, en dos o en las cuatro caras.',
      ],
    },
    { tipo: 'p', texto: 'En muchos países las medidas todavía se nombran en pulgadas (1" = 25,4 mm). La medida nombrada suele ser la de la pieza en bruto: una tabla "de 1 pulgada", una vez cepillada, queda más delgada.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Cuánto pierde una pieza al cepillarse depende del país y del aserradero. Una tabla de 1" en bruto suele quedar entre ≈ 19 y 22 mm. Pide siempre las medidas reales en milímetros.' },
    { tipo: 'h3', texto: 'Volumen: metros cúbicos y pies tablares' },
    { tipo: 'p', texto: 'La madera se cobra por volumen. El sistema métrico usa el metro cúbico (m³). En Argentina, Uruguay, Estados Unidos y otros países también se usa el [[pie tablar|pie-tablar]]: un pie por un pie por una pulgada, equivalente a ≈ 2,36 litros, es decir, 0,00236 m³.' },
    { tipo: 'datos', items: [['Ejemplo', 'Una tabla de 2,4 m × 150 mm × 25 mm tiene 2,4 × 0,15 × 0,025 = 0,009 m³, unos 3,8 pies tablares.']] },
    { tipo: 'interactivo', id: 'calculadora-volumen' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Al comprar, suma entre un 15 y un 30 % al volumen que indica tu lista de corte para cubrir defectos, gemas y errores. Se detalla en [Lista de corte y cálculo de material](#/diseno/lista-corte).' },
  ],
}

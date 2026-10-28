export default {
  actualizado: '2026-10-28',
  relacionados: ['madera/movimiento', 'uniones/caja-espiga', 'uniones/cantos', 'diseno/medidas-muebles'],
  bloques: [
    { tipo: 'p', texto: 'Una mesa parece simple: un tablero y cuatro patas. Pero el tablero es la superficie de madera más grande de la casa, y se va a mover con la humedad varios milímetros a lo ancho. Toda la construcción de una mesa gira alrededor de dos problemas: que la base no se descuadre y que el tablero pueda moverse sin rajarse.' },

    { tipo: 'h2', texto: 'Tipos de mesa' },
    {
      tipo: 'tabla',
      titulo: 'Estructuras más comunes',
      columnas: ['Tipo', 'Estructura', 'Ventajas', 'Cuidado con'],
      filas: [
        ['De patas y faldón', 'Cuatro patas unidas por faldones bajo el tablero', 'Rígida, clásica, fácil de dimensionar', 'Faldón demasiado bajo que golpea las rodillas'],
        ['De caballetes', 'Dos soportes en los extremos unidos por un travesaño', 'Deja libres los costados; se desarma', 'El travesaño debe ser alto o acuñado para que no se descuadre'],
        ['De pie central', 'Una columna con patas en estrella', 'Nadie choca con las patas; ideal para mesas redondas', 'Las patas deben extenderse lo bastante para que no vuelque'],
        ['Extensible', 'Correderas y hojas adicionales', 'Se adapta al número de comensales', 'Herrajes de calidad y hojas de la misma madera y humedad'],
      ],
    },

    { tipo: 'h2', texto: 'Partes de una mesa de patas y faldón' },
    { tipo: 'figura', id: 'partes-mesa', pie: 'A la izquierda, alzado de la mesa con la unión de caja y espiga en línea de puntos. A la derecha, tres formas de fijar el tablero en sección.' },
    {
      tipo: 'lista',
      items: [
        '**Patas:** de 4 a 8 cm de lado en una mesa de comedor, según el diseño. Pueden ser rectas, ahusadas por las caras interiores o torneadas.',
        '**[[Faldones|faldon]]:** de 7 a 12 cm de alto y unos 2 cm de espesor. Suelen quedar unos milímetros retranqueados respecto de la cara de la pata.',
        '**Uniones:** caja y espiga es la opción tradicional y más fuerte. Como las dos espigas que llegan a una pata se encuentran, se cortan en inglete o se escalonan.',
        '**Esquineros:** tacos o escuadras en las esquinas interiores, atornillados a los faldones. Refuerzan la base y sirven para atornillar el tablero.',
        '**Tablero:** tablas encoladas por el canto o un tablero chapado.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Recuerda dejar espacio para las piernas: con una mesa a 75 cm y un tablero de 2,5 cm, un faldón de 10 cm deja ≈ 62 cm libres. Si el asiento está a 45 cm, quedan solo 17 cm para los muslos. Ajusta el alto del faldón o el de la mesa.' },

    { tipo: 'h2', texto: 'El tablero' },
    { tipo: 'p', texto: 'Para un tablero de madera maciza se encolan tablas por el canto. Algunas pautas:' },
    {
      tipo: 'lista',
      items: [
        'Usa tablas bien secas y aclimatadas, de anchos parecidos, entre 8 y 15 cm si son tangenciales.',
        'Ordénalas por el color y la veta antes de encolar, y marca el orden con un triángulo de carpintero.',
        'Que la veta de todas corra en el mismo sentido para cepillar el tablero sin que se repele.',
        'Alternar o no la curva de los anillos es una discusión antigua: lo decisivo es que la madera esté bien seca y que el tablero quede fijado de forma que pueda moverse.',
      ],
    },
    { tipo: 'p', texto: 'La técnica del encolado se explica en [Unión de tablas por el canto](#/uniones/cantos).' },

    { tipo: 'h2', texto: 'Fijar el tablero dejándolo moverse' },
    { tipo: 'p', texto: 'Un tablero de roble de 90 cm de ancho puede cambiar 6 mm o más entre invierno y verano. Si se atornilla o se encola rígido a los faldones, se raja o arrastra la base. Las fijaciones correctas lo sujetan hacia abajo pero lo dejan deslizar a lo ancho:' },
    {
      tipo: 'tabla',
      titulo: 'Fijaciones del tablero',
      columnas: ['Fijación', 'Cómo funciona', 'Dónde se usa'],
      filas: [
        ['Botones de madera', 'Taco atornillado al tablero con una lengüeta que entra en una ranura del faldón, con holgura', 'En faldones paralelos a la veta, el botón queda separado del faldón para que el tablero se acerque o se aleje; en los perpendiculares, desliza a lo largo de la ranura'],
        ['Herrajes en ocho', 'Pletina que gira: un tornillo va al faldón y otro al tablero', 'Mesas sencillas; se encastran en el canto superior del faldón'],
        ['Agujeros ovalados', 'Tornillos con arandela en agujeros alargados en el sentido del movimiento', 'Listones o esquineros atornillados al tablero'],
        ['Clips metálicos', 'Herrajes en forma de Z que se enganchan en una ranura', 'Producción en serie'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Fija el tablero rígido solo en el centro de cada faldón largo. Así se mueve la mitad hacia cada lado y el voladizo se mantiene parejo en los dos costados.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Para calcular cuánto se mueve tu tablero según la especie, el ancho y la humedad, usa la calculadora de [El movimiento de la madera](#/madera/movimiento).' },

    { tipo: 'h2', texto: 'Cabezales en los extremos' },
    { tipo: 'p', texto: 'Un cabezal es una pieza atravesada en el extremo del tablero, con la veta perpendicular, que lo mantiene plano y oculta la testa. Como el tablero se mueve a lo ancho y el cabezal casi no cambia de largo, se une así:' },
    {
      tipo: 'pasos',
      items: [
        'Se talla una lengüeta a lo largo de la testa del tablero, y algunas espigas más largas.',
        'El cabezal lleva una ranura y cajas para esas espigas, más anchas que ellas salvo la del centro.',
        'Solo la espiga del centro se encola. Las demás se sujetan con clavijas que pasan por agujeros alargados en la espiga.',
        'El cabezal se deja unos milímetros más largo que el ancho del tablero para que, cuando el tablero se hinche, no sobresalga.',
      ],
    },

    { tipo: 'h2', texto: 'Estabilidad' },
    {
      tipo: 'lista',
      items: [
        'Cuanto más vuela el tablero más allá de las patas, más fácil es que la mesa vuelque si alguien se apoya en el borde. Como orientación, no pases de ≈ 30 – 35 cm en una mesa de comedor.',
        'En mesas de pie central, las patas de la base deben extenderse lo más cerca posible del borde del tablero. Prueba la estabilidad apoyando peso en el borde antes de terminarla.',
        'Si la mesa cojea, coloca regatones regulables en las patas o recórtalas sobre una superficie plana.',
      ],
    },
  ],
}

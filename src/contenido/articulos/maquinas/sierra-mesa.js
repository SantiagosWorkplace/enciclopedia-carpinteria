export default {
  actualizado: '2026-10-29',
  relacionados: ['maquinas/seguridad-maquinas', 'electricas/sierras-portatiles', 'maquinas/ingletadora', 'uniones/ranuras-rebajos'],
  bloques: [
    { tipo: 'p', texto: 'La sierra de mesa es el centro de muchos talleres: corta tablas al hilo a un ancho exacto, escuadra piezas, hace ranuras, rebajos, espigas y biseles. Es también la máquina que más accidentes causa, casi siempre por rechazo o por acercar la mano a la hoja. Bien ajustada y usada con sus accesorios, es segura y muy precisa.' },

    { tipo: 'h2', texto: 'Partes' },
    { tipo: 'figura', id: 'sierra-mesa', pie: 'Vista desde arriba durante un corte al hilo. La pieza avanza alejándose del operario, que se para a un costado de la hoja.' },
    {
      tipo: 'lista',
      items: [
        '**Hoja:** de 250 mm en la mayoría de las sierras de taller; de 210 mm o menos en las de obra. Sube, baja y se inclina hasta 45°.',
        '**[[Cuchillo divisor|cuchillo-divisor]]:** justo detrás de la hoja, apenas más fino que el corte. Sube y baja con ella.',
        '**Protector:** cubre la hoja por arriba; en muchos modelos va montado sobre el cuchillo divisor.',
        '**Guía paralela:** para cortes al hilo. Debe quedar paralela a la hoja, o abrirse muy poco hacia atrás.',
        '**Guía de ingletes o carro:** corre en las ranuras de la mesa para cortes al través y en ángulo.',
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Tipos de sierra de mesa',
      columnas: ['Tipo', 'Características'],
      filas: [
        ['De obra o portátil', 'Liviana, se transporta; mesa pequeña y menos precisa'],
        ['De taller o de ebanista', 'Pesada, de hierro fundido, motor de inducción; precisa y estable'],
        ['Escuadradora o seccionadora', 'Con carro deslizante largo, para cortar tableros enteros a escuadra'],
      ],
    },

    { tipo: 'h2', texto: 'Ajustes' },
    {
      tipo: 'pasos',
      items: [
        'Alinea la hoja con las ranuras de la guía de ingletes: mide desde la ranura a un mismo diente, adelante y atrás.',
        'Alinea la guía paralela con la ranura. Si no es exactamente paralela, que se abra ≈ 0,1 – 0,2 mm hacia atrás, nunca que se cierre.',
        'Comprueba con una escuadra los topes de 90° y 45° de la inclinación de la hoja.',
        'Ajusta la altura: la hoja debe sobresalir de la pieza más o menos la altura de un diente. Cuanto más alta, más limpio el corte pero más expuesta queda la hoja.',
      ],
    },

    { tipo: 'h2', texto: 'Corte al hilo' },
    {
      tipo: 'pasos',
      items: [
        'La pieza debe tener un canto recto apoyado en la guía y una cara plana sobre la mesa. Una tabla torcida o abarquillada se cepilla antes.',
        'Fija la guía al ancho deseado midiendo desde un diente que apunte hacia ella.',
        'Arranca la sierra y espera a que tome velocidad.',
        'Avanza con una mano empujando y la otra apretando la pieza contra la guía, siempre por delante de la hoja.',
        'Cuando la mano que empuja llegue a ≈ 15 cm de la hoja, sigue con un empujador. Para cortes de menos de ≈ 8 cm de ancho, usa empujador desde el principio.',
        'Empuja la pieza hasta que pase del todo el cuchillo divisor. No la retires hacia atrás con la hoja en marcha.',
      ],
    },

    { tipo: 'h2', texto: 'Corte al través' },
    {
      tipo: 'lista',
      items: [
        'Usa la guía de ingletes o, mejor, un carro de corte transversal: una plataforma que corre en las dos ranuras y lleva la pieza sujeta.',
        'Para piezas iguales, usa un tope fijado al carro o a la guía de ingletes, **nunca** la guía paralela: el recorte quedaría atrapado entre la hoja y la guía y saldría disparado.',
        'Si hay que usar la guía paralela como referencia, prensa un taco en ella **antes** de la hoja: la pieza toca el taco al principio y queda libre al cortar.',
        'Las piezas muy largas se cortan mejor con la ingletadora o con una sierra circular.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Nunca cortes a pulso, sin apoyar la pieza en una guía. La pieza gira, se traba en la hoja y sale despedida.' },

    { tipo: 'h2', texto: 'Ranuras, rebajos y espigas' },
    {
      tipo: 'lista',
      items: [
        '**Con pasadas sucesivas:** se baja la hoja a la profundidad de la ranura y se hacen varias pasadas corriendo la guía.',
        '**Con juego de ranurar:** discos y separadores que cortan una ranura ancha en una pasada. Necesitan su propio inserto y no están permitidos en todas las sierras ni en todos los países.',
        '**Espigas:** con la pieza vertical en una plantilla que corre por la guía, o en horizontal con pasadas sucesivas sobre el carro.',
      ],
    },
    { tipo: 'p', texto: 'En los cortes que no atraviesan la pieza hay que quitar el cuchillo divisor si es fijo, y la hoja queda tapada por la madera. Por eso exigen todavía más cuidado: peines de presión y empujadores siempre.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'En la Unión Europea y otros lugares, las normas de seguridad de las sierras de mesa limitan o prohíben ciertos usos, como los juegos de ranurar o trabajar sin cuchillo divisor. Respeta las instrucciones del fabricante y la normativa local.' },
  ],
}

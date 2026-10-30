export default {
  actualizado: '2026-10-29',
  relacionados: ['uniones/visor', 'uniones/encolado', 'madera/movimiento', 'diseno/estructura'],
  bloques: [
    { tipo: 'p', texto: 'No existe la mejor unión, sino la adecuada para cada caso. Una unión tiene que resistir los esfuerzos que va a recibir, respetar el movimiento de la madera y verse como corresponde al mueble. Además, tiene que poder hacerse con las herramientas y el tiempo disponibles.' },

    { tipo: 'h2', texto: 'Las cuatro preguntas' },
    {
      tipo: 'pasos',
      items: [
        '**¿Qué esfuerzo recibe?** Una unión que solo apoya, como un estante, trabaja a compresión y cizalla. Una que tiende a separarse, como el lateral de un cajón al tirar del frente, necesita traba mecánica: colas de milano o una espiga con clavija. Las patas de sillas y mesas reciben palanca y descuadre, y necesitan uniones largas y bien ajustadas.',
        '**¿Qué caras quedan encoladas?** La cola resiste mucho entre veta larga y veta larga, y muy poco en la testa. Ver la figura de abajo.',
        '**¿Cómo se moverá la madera?** Si dos piezas se cruzan con la veta perpendicular, una cambia de ancho con la humedad y la otra no. Una unión encolada ancha a contraveta termina rajando una de las dos.',
        '**¿Se va a ver?** Algunas uniones se lucen, como las colas de milano pasantes o las espigas acuñadas. Otras se esconden, como la caja y espiga ciega, las clavijas o las galletas.',
      ],
    },

    { tipo: 'h2', texto: 'La veta manda en el encolado' },
    { tipo: 'figura', id: 'superficies-encolado', pie: 'La misma cola, tres resultados. Las barras comparan de forma aproximada cuánto resiste cada encolado.' },
    { tipo: 'p', texto: 'La testa absorbe la cola como un manojo de pajitas y deja poca superficie útil. Por eso las uniones resistentes multiplican las caras de veta larga: la espiga encola sus dos [[mejillas|mejilla]] contra las paredes de la caja, y una cola de milano encola los costados de cada cola.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Una unión de canto bien hecha, entre veta larga y veta larga, suele ser más fuerte que la madera misma: si se rompe, casi siempre parte la madera al lado de la junta.' },

    { tipo: 'h2', texto: 'Qué unión usar en cada caso' },
    {
      tipo: 'tabla',
      titulo: 'Uniones habituales',
      columnas: ['Situación', 'Uniones que funcionan', 'Ver'],
      filas: [
        ['Marcos de puertas y ventanas', 'Caja y espiga, media madera, clavijas', '[Caja y espiga](#/uniones/caja-espiga)'],
        ['Patas y faldones de mesas y sillas', 'Caja y espiga, clavijas, galletas dobles', '[Caja y espiga](#/uniones/caja-espiga)'],
        ['Cajones', 'Cola de milano oculta en el frente y pasante atrás, o rebajo y ranura', '[Colas de milano](#/uniones/colas-milano)'],
        ['Cajas de madera maciza', 'Colas de milano, ingletes reforzados, rebajos', '[Ingletes](#/uniones/ingletes)'],
        ['Muebles de tablero', 'Galletas, clavijas, rebajos, herrajes desmontables', '[Clavijas, galletas y espigas planas](#/uniones/clavijas-galletas)'],
        ['Estantes fijos', 'Ranura, ranura detenida, cola de milano deslizante', '[Ranuras y rebajos](#/uniones/ranuras-rebajos)'],
        ['Tableros anchos', 'Encolado de cantos, con o sin galletas para alinear', '[Unión de tablas por el canto](#/uniones/cantos)'],
        ['Marcos de cuadros', 'Inglete con galleta, lengüeta o grapas', '[Ingletes](#/uniones/ingletes)'],
        ['Estructuras y techos', 'Boca de pájaro, empalmes, caja y espiga con clavija, herrajes', '[Uniones de construcción](#/uniones/construccion)'],
      ],
    },

    { tipo: 'h2', texto: 'Criterios prácticos' },
    {
      tipo: 'lista',
      items: [
        '**Lo simple primero:** si una [[unión a tope|union-tope]] con tornillos resiste, no hace falta una cola de milano. Las uniones complejas se justifican por resistencia o por aspecto.',
        '**Herramientas:** casi todas las uniones se pueden hacer a mano. Las máquinas aceleran las repetitivas, como ranuras, clavijas y galletas, pero exigen plantillas y montajes.',
        '**Cantidad de piezas:** para una silla, una unión trabajada a mano está bien. Para ocho, conviene un método repetible con topes y plantillas.',
        '**Desarmar:** si el mueble tiene que desarmarse para mudarlo, se usan herrajes desmontables o una espiga pasante con chaveta, sin cola. Ver [Herrajes desmontables](#/herrajes/desmontables).',
        '**Material:** el tablero de partículas y el MDF no admiten uniones talladas. Se unen con clavijas, galletas, rebajos y herrajes.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Si dudas entre dos uniones, hazlas en recortes de la misma madera y rómpelas. Diez minutos de ensayo enseñan más que cualquier tabla.' },
  ],
}

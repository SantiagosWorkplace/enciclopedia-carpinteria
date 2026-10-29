export default {
  actualizado: '2026-10-29',
  relacionados: ['uniones/visor', 'herramientas-manuales/medir-trazar', 'herramientas-manuales/sierras', 'diseno/armarios'],
  bloques: [
    { tipo: 'p', texto: 'La [[cola de milano|cola-milano]] traba dos piezas con formas de trapecio que encajan entre sí. Las colas se ensanchan hacia el extremo, y una vez armadas, la pieza de colas no puede separarse en la dirección de su largo aunque no tenga cola. Es la unión más resistente para esquinas de cajas y cajones, y una muestra de oficio cuando queda a la vista.' },

    { tipo: 'h2', texto: 'Colas y espigas' },
    {
      tipo: 'lista',
      items: [
        '**Colas:** los trapecios que se ensanchan hacia el extremo. Se ven en la cara de su pieza.',
        '**Espigas:** las piezas que quedan entre las colas, en la otra tabla. Se ven en forma de trapecio desde la testa. No hay que confundirlas con la espiga de la caja y espiga.',
        '**Medias espigas:** las de los bordes. Cierran la unión para que no se abra en las esquinas.',
        '**Línea base:** la marca del [[gramil]] que indica el fondo de colas y espigas. Se marca igual al espesor de la otra pieza.',
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Las colas van en la pieza que recibe el tirón. En un cajón, van en los laterales: al tirar del frente, las colas lo traban y el cajón no se abre.' },

    { tipo: 'h2', texto: 'Tipos y pendiente' },
    { tipo: 'figura', id: 'tipos-cola-milano', pie: 'En las dos primeras, abajo está la pieza de colas vista de cara y arriba la de espigas vista de testa. Las espigas llenan los huecos entre las colas.' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de cola de milano',
      columnas: ['Tipo', 'Cómo es', 'Uso'],
      filas: [
        ['Pasante', 'Colas y espigas atraviesan las dos piezas y se ven en las dos caras', 'Cajas, baúles, partes traseras de cajones'],
        ['Oculta de un lado', 'Las colas llegan a ≈ 2/3 del espesor de la otra pieza y un labio las tapa', 'Frentes de cajón'],
        ['Oculta de los dos lados', 'Las dos piezas tienen labio y la unión no se ve', 'Cajas finas; muy difícil a mano'],
        ['Deslizante', 'Una lengüeta en forma de cola entra a lo largo de una ranura del mismo perfil', 'Estantes, travesaños, patas de mesas de trípode'],
        ['A media madera', 'El extremo de un travesaño en forma de cola, rebajado a medio espesor', 'Travesaños que reciben tirones'],
      ],
    },
    {
      tipo: 'datos',
      items: [
        ['Pendiente en maderas blandas', '1:6, unos 9,5°'],
        ['Pendiente en maderas duras', '1:8, unos 7°'],
        ['Espesor de las espigas', 'Más finas que las colas en trabajos a mano; iguales en las de plantilla'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Con más pendiente, la traba es mayor pero las puntas de las colas quedan con veta corta y se pueden quebrar. Con menos, se debilita la traba. La pendiente 1:6 a 1:8 es el equilibrio habitual.' },

    { tipo: 'h2', texto: 'Cómo se hace una pasante a mano' },
    {
      tipo: 'pasos',
      items: [
        'Escuadra y alisa las testas. Marca con el gramil la línea base en las dos caras y los dos cantos de cada pieza, a la medida del espesor de la otra.',
        'Traza las colas en la pieza de colas con una falsa escuadra o una plantilla de pendiente. Marca con una cruz el desperdicio.',
        'Sierra las colas con una sierra de costilla, por el lado del desperdicio, hasta la línea base sin pasarla.',
        'Quita las medias espigas de los bordes con la sierra y el desperdicio entre colas con el formón, cortando desde las dos caras hasta la mitad.',
        'Apoya la pieza de colas sobre la testa de la de espigas, alineada, y marca las espigas con la punta de una cuchilla dentro de las colas.',
        'Sierra las espigas por el lado del desperdicio, conservando la línea marcada, y vacía con el formón desde las dos caras.',
        'Prueba en seco empujando con la mano o con golpes suaves sobre un taco. Si traba, busca el brillo de roce y rebaja solo ahí.',
        'Encola los costados de colas y espigas, arma y comprueba la escuadra de la caja midiendo las diagonales.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para empezar, practica en pino de 18 – 20 mm con tres colas grandes. Lo difícil no es serrar sino serrar recto y en ángulo a la vez: dedica una tarde a cortes de práctica sobre líneas marcadas.' },

    { tipo: 'h2', texto: 'Con máquina' },
    {
      tipo: 'lista',
      items: [
        '**Plantillas para fresadora:** una fresa de cola de milano y un casquillo copiador cortan colas y espigas a la vez, ocultas o pasantes. Rápidas y repetibles, aunque el espaciado queda fijo.',
        '**Deslizante:** se fresa la ranura con una fresa de cola de milano de una pasada, y la lengüeta en la otra pieza con la misma fresa en dos pasadas.',
        '**Sierra de cinta y sierra de mesa:** se usan para acelerar los cortes de las colas, que luego se terminan a mano.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'La fresa de cola de milano no admite pasadas sucesivas de profundidad: corta todo el perfil de una vez. Vacía antes la mayor parte de la ranura con una fresa recta y avanza despacio.' },
  ],
}

export default {
  actualizado: '2026-11-02',
  relacionados: ['herramientas-manuales/martillos-destornilladores', 'electricas/taladros', 'herrajes/desmontables', 'madera/tableros'],
  bloques: [
    { tipo: 'p', texto: 'Un tornillo une con fuerza, aprieta las piezas mientras fragua la cola y se puede quitar. Para que agarre sin rajar la madera ni romperse, hay que elegir el tipo y el largo, y pretaladrar los agujeros correctos.' },

    { tipo: 'h2', texto: 'Partes' },
    { tipo: 'figura', id: 'partes-tornillo', pie: 'Un tornillo para madera de cabeza avellanada, con su caña lisa. A la derecha, tres formas de cabeza.' },
    {
      tipo: 'lista',
      items: [
        '**Cabeza:** la avellanada queda al ras de la superficie, en un avellanado cónico. La alomada sobresale y apoya plana: sirve para fijar chapas, herrajes y fondos. La gota de sebo es avellanada con la parte de arriba abombada, para tornillos que quedan a la vista.',
        '**Caña:** la parte lisa bajo la cabeza. Gira suelta dentro de la pieza de arriba, y por eso el tornillo la aprieta contra la de abajo.',
        '**Rosca:** los filetes que se clavan en la madera. El **núcleo** es el cilindro central de la rosca, sin contar los filetes.',
        '**Punta:** en los tornillos modernos suele tener un corte que empieza el agujero solo y reduce el riesgo de rajar.',
      ],
    },
    { tipo: 'p', texto: 'La medida se da por el diámetro y el largo en milímetros: un tornillo de 4 × 40 mide 4 mm de diámetro y 40 mm de largo, contados desde la superficie de la pieza, con la cabeza incluida si es avellanada.' },

    { tipo: 'h2', texto: 'Tipos' },
    {
      tipo: 'foto', src: 'fotos/herrajes/tornillo-madera.jpg', ancho: 1000, alto: 379,
      alt: 'Tornillo para madera plateado sobre fondo gris',
      pie: 'Tornillo para madera de cabeza avellanada, con la rosca casi hasta la cabeza.',
      credito: { autor: 'Dmitry Makeev', licencia: 'CC BY 3.0', licenciaUrl: 'https://creativecommons.org/licenses/by/3.0', fuente: 'https://commons.wikimedia.org/wiki/File:Wood_screws.jpg' },
    },
    {
      tipo: 'tabla',
      titulo: 'Tornillos frecuentes',
      columnas: ['Tornillo', 'Cómo es', 'Uso'],
      filas: [
        ['Para madera tradicional', 'Caña lisa larga, rosca en parte del largo', 'Madera maciza; aprieta muy bien dos piezas'],
        ['Para tablero o aglomerado', 'Rosca en casi todo el largo, filete profundo y núcleo fino; acero templado', 'Tableros y uso general; muy rápido de poner'],
        ['[[Confirmat|confirmat]]', 'Grueso, de rosca ancha y punta roma', 'Uniones de tablero de 16 – 19 mm, sin cola'],
        ['De bolsillo', 'Cabeza plana con arandela, punta autorroscante', 'Uniones con agujero oblicuo hecho con plantilla'],
        ['Para exterior', 'Inoxidable o con recubrimiento resistente', 'Muebles de jardín, decks, maderas con taninos'],
        ['Para chapa', 'Rosca fina en todo el largo', 'Herrajes metálicos; no para madera'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Los tornillos de acero templado son duros pero frágiles: con mucho par se cortan en vez de doblarse. Los de latón son blandos: para no partirlos, pon primero un tornillo de acero de la misma medida, sácalo y después pon el de latón.' },

    { tipo: 'h2', texto: 'Pretaladrar' },
    { tipo: 'figura', id: 'pretaladrar', pie: 'Los tres agujeros de un tornillo, en sección. Con el agujero de paso en la pieza de arriba, la rosca agarra solo en la de abajo y la junta se cierra.' },
    { tipo: 'p', texto: 'Un tornillo bien puesto lleva tres agujeros: el [[agujero de paso|agujero-paso]], el [[agujero piloto|agujero-piloto]] y el cono para la cabeza, que se hace con un [[avellanador]].' },
    {
      tipo: 'pasos',
      items: [
        '**Agujero de paso:** en la pieza de arriba, del diámetro de la caña. El tornillo pasa sin roscar y puede apretar la pieza.',
        '**Agujero piloto:** en la pieza de abajo, del diámetro del núcleo de la rosca, o un poco menor en maderas blandas. Evita que la madera se raje y que el tornillo se rompa.',
        '**Avellanado:** un cono para la cabeza, hasta que quede al ras o apenas hundida.',
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Agujeros orientativos',
      columnas: ['Tornillo', 'Paso', 'Piloto en madera dura', 'Piloto en madera blanda'],
      filas: [
        ['3 mm', '3 mm', '2 mm', '1,5 mm'],
        ['3,5 mm', '3,5 mm', '2,5 mm', '2 mm'],
        ['4 mm', '4 mm', '2,5 – 3 mm', '2 mm'],
        ['5 mm', '5 mm', '3 – 3,5 mm', '2,5 mm'],
        ['6 mm', '6 mm', '4 mm', '3 mm'],
      ],
      nota: 'Hay brocas que hacen los tres agujeros a la vez, con un avellanador regulable. Son muy prácticas para un mismo tamaño de tornillo.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'El piloto depende de la rosca de cada marca y de la dureza de la madera. Prueba en un recorte: el tornillo debe entrar firme, sin forzar el destornillador ni rajar la madera.' },
    { tipo: 'p', texto: 'En tableros, cerca de los cantos y en maderas duras, pretaladra siempre. En madera blanda, un tornillo de tablero con punta autoperforante puede ir sin piloto, lejos de los extremos.' },

    { tipo: 'h2', texto: 'Largo y posición' },
    {
      tipo: 'lista',
      items: [
        '**Largo:** como regla práctica, al menos unas dos terceras partes del tornillo deben entrar en la pieza de abajo.',
        '**Testa:** un tornillo en la testa agarra poco, porque la rosca corta las fibras en vez de atraparlas. Usa tornillos más largos, o una clavija cruzada que dé madera de veta lateral a la rosca.',
        '**Distancia a los bordes:** lejos de los extremos y de los cantos, y nunca en línea sobre la misma veta, para no rajar.',
        '**Movimiento:** en tapas de madera maciza, fija con agujeros ovalados o con herrajes que permitan el movimiento. Ver [El movimiento de la madera](#/madera/movimiento).',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La regla de las dos terceras partes es orientativa. En tableros de partículas y en testas, la resistencia es menor: busca la carga que admite cada tornillo en la ficha del fabricante.' },

    { tipo: 'h2', texto: 'Atornillar' },
    {
      tipo: 'lista',
      items: [
        '**Punta justa:** usa la punta que corresponde a la cabeza. Ver [Martillos, mazos y destornilladores](#/herramientas-manuales/martillos-destornilladores).',
        '**Embrague:** con atornillador, regula el embrague para que no hunda la cabeza ni pase de rosca. Ver [Taladros y atornilladores](#/electricas/taladros).',
        '**Cera:** una pasada de cera o jabón seco en la rosca ayuda en maderas duras.',
        '**Pasado de rosca:** si el tornillo gira sin apretar, la rosca de la madera se rompió. Rellena el agujero con una clavija encolada o con palillos y cola, deja secar y vuelve a pretaladrar.',
      ],
    },
  ],
}

export default {
  actualizado: '2026-10-29',
  relacionados: ['madera/especies', 'madera/propiedades', 'madera/secado', 'talla/herramientas-talla'],
  bloques: [
    { tipo: 'p', texto: 'Casi cualquier madera se puede tallar, pero algunas lo hacen mucho más fácil. La madera ideal tiene grano fino y parejo, veta recta, pocos nudos y una dureza media: lo bastante blanda para cortarla sin esfuerzo y lo bastante firme para que el detalle no se desmigaje.' },

    { tipo: 'h2', texto: 'Qué buscar' },
    { tipo: 'figura', id: 'grano-talla', pie: 'Tres testas vistas de cerca. Cuanto más pareja es la madera entre un anillo y el siguiente, más fácil es tallarla con detalle.' },
    {
      tipo: 'lista',
      items: [
        '**Textura fina y pareja:** la gubia corta igual en toda la superficie. En maderas con anillos muy marcados, la parte blanda se hunde y la dura salta.',
        '**Veta recta:** la veta revirada o entrecruzada se levanta y obliga a cambiar la dirección de corte a cada paso. Se explica en [Propiedades mecánicas](#/madera/propiedades).',
        '**Sin resina ni aceites en exceso:** embotan el filo y manchan.',
        '**Estable y seca:** una madera bien seca no se raja con el tiempo. Ver [Secado de la madera](#/madera/secado).',
        '**Color según el acabado:** las maderas claras y sin dibujo resaltan la forma y se pueden pintar. En maderas con veta muy vistosa, el dibujo compite con el tallado.',
      ],
    },

    { tipo: 'h2', texto: 'Especies' },
    {
      tipo: 'tabla',
      titulo: 'Maderas para tallar',
      columnas: ['Madera', 'Dureza al tallar', 'Cómo se comporta', 'Ideal para'],
      filas: [
        ['Tilo', 'Blanda', 'Muy pareja y casi sin veta; corta limpio en cualquier dirección', 'Aprender, detalle fino, piezas para pintar'],
        ['Cedro', 'Blanda a media', 'Parejo, aromático, se trabaja con facilidad', 'Imaginería, relieves, retablos'],
        ['Nogal', 'Media', 'Corta limpio y toma detalle; color oscuro y cálido', 'Relieves, muebles tallados, figuras'],
        ['Cerezo', 'Media', 'Grano fino; a veces se astilla en contraveta', 'Relieves y detalles en muebles'],
        ['Caoba', 'Media', 'Fácil de cortar; en algunas piezas la veta es entrecruzada', 'Muebles tallados, molduras'],
        ['Peral', 'Media a dura', 'Muy fino y homogéneo', 'Detalle muy fino, moldes y sellos'],
        ['Haya', 'Dura', 'Pareja pero exigente con el filo', 'Utensilios, piezas resistentes'],
        ['Roble', 'Dura', 'Poro abierto; el detalle fino se rompe', 'Tallas grandes y motivos de trazo amplio'],
        ['Boj', 'Muy dura', 'Finísimo y denso; solo en piezas pequeñas', 'Miniaturas, mangos, piezas de ajedrez'],
        ['Pino blanco', 'Blanda', 'Parejo si los anillos son poco marcados; los pinos resinosos se desgarran', 'Prácticas, tallas grandes y pintadas'],
      ],
      nota: 'La dureza depende de cada tabla: dentro de una misma especie hay piezas más blandas y más duras. Ver la escala de [[Janka|janka]] en las fichas de [Especies de madera](#/madera/especies).',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los nombres comunes cambian según el país: «cedro» o «caoba» designan especies distintas en cada región. Algunas, como ciertas caobas y cedros americanos, están protegidas por [[CITES|cites]]. Antes de comprar, pide el nombre científico y el origen de la madera.' },

    { tipo: 'h2', texto: 'Elegir la pieza' },
    {
      tipo: 'pasos',
      items: [
        'Mira la testa: busca anillos parejos y sin [[fendas|fenda]]. Las grietas en la testa suelen seguir hacia adentro.',
        'Revisa las caras: sin nudos en la zona del motivo ni bolsas de resina.',
        'Orienta la veta según la forma: debe correr a lo largo de las partes finas, como patas, picos o colas, para que no queden de [[veta corta|veta-corta]] y se quiebren.',
        'Comprueba la humedad: para relieves y muebles, entre el 8 y el 12 %.',
      ],
    },

    { tipo: 'h2', texto: 'Bloques grandes' },
    { tipo: 'p', texto: 'Un bloque macizo grande tarda años en secar y suele rajarse desde el centro, donde está la [[médula|medula]]. Hay tres soluciones habituales:' },
    {
      tipo: 'lista',
      items: [
        '**Bloque encolado:** tablas secas, encoladas cara contra cara, con la veta en la misma dirección. Coloca las líneas de cola donde no vayan detalles finos ni la cara principal.',
        '**Sin médula:** elegir piezas cortadas fuera del centro del tronco.',
        '**Talla en verde:** tallar la madera recién cortada, que es mucho más blanda, y dejar que la pieza ya ahuecada o fina seque despacio. Es la técnica de las cucharas y los cuencos, pero las formas cambian un poco al secar.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para empezar, consigue una tabla de tilo o de cedro de unos 20 a 25 mm de espesor. Se puede practicar en ella cualquiera de las técnicas de este capítulo.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'El polvo de algunas maderas, sobre todo tropicales, irrita la piel y las vías respiratorias. Al lijar o raspar usa mascarilla. Ver [Salud y seguridad](#/taller/salud-seguridad).' },
  ],
}

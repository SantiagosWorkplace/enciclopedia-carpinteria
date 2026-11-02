export default {
  actualizado: '2026-10-29',
  relacionados: ['herramientas-manuales/formones-gubias', 'herramientas-manuales/afilado', 'talla/sujetar-talla', 'talla/relieve'],
  bloques: [
    { tipo: 'p', texto: 'Para tallar no hacen falta muchas herramientas, pero sí que estén muy bien afiladas. La herramienta principal es la gubia, un formón de hoja curva. La acompañan la [[gubia en V|gubia-v]], algunos formones de talla, un mazo y, para la talla geométrica y las figuras pequeñas, un cuchillo.' },

    { tipo: 'h2', texto: 'Cómo se nombra una gubia' },
    { tipo: 'p', texto: 'Cada gubia se identifica con dos números: el [[barrido]], que indica la curva de la hoja, y el ancho del filo en milímetros. Una gubia «7/20» tiene barrido 7 y 20 mm de ancho. En el sistema más difundido, el 1 es plano, el 9 es media caña y los números mayores corresponden a hojas en U y en V. Los barridos se ven en [Formones y gubias](#/herramientas-manuales/formones-gubias).' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los números de barrido no son iguales en todas las marcas: algunos fabricantes, sobre todo ingleses, usan otra numeración. Al comprar, compara el dibujo del perfil del catálogo, no solo el número.' },

    { tipo: 'h2', texto: 'Formas de la hoja' },
    { tipo: 'figura', id: 'perfiles-gubia', pie: 'Las cuatro primeras se ven de costado, con el filo abajo. La cola de pez se ve de frente: la caña es fina y la hoja se abre hacia el filo.' },
    {
      tipo: 'tabla',
      titulo: 'Gubias según la forma de la caña',
      columnas: ['Forma', 'Cómo es', 'Para qué'],
      filas: [
        ['Recta', 'Caña recta de punta a punta', 'La mayor parte del trabajo; la primera que se compra'],
        ['Curva', 'Caña curvada en todo su largo', 'Huecos largos donde una recta choca con el borde'],
        ['[[De cuchara|gubia-cuchara]]', 'Recta, con una curva cerrada cerca del filo', 'Fondos hondos y rincones de difícil acceso'],
        ['De cuchara inversa', 'La curva cerca del filo va hacia el otro lado', 'Socavados y superficies convexas dentro de un hueco'],
        ['[[Cola de pez|cola-pez]]', 'Caña fina que se abre en una hoja ancha', 'Nivelar fondos y llegar a los rincones sin rozar los bordes'],
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Gubia en V:** dos alas en ángulo, en general de 45°, 60° o 90°. Traza contornos, marca líneas y separa planos.',
        '**Gubias en U pequeñas:** de 1 a 3 mm, abren canales finos para nervaduras, cabellos o plumas.',
        '**Formón de talla:** plano y biselado de los dos lados, para dejar superficies planas y aristas vivas.',
        '**Formón oblicuo:** con el filo en ángulo, llega a rincones agudos y recorta detalles.',
        '**Gubias de mango corto:** de palma, para trabajos pequeños que se empujan solo con la mano.',
      ],
    },

    { tipo: 'h2', texto: 'Un juego para empezar' },
    {
      tipo: 'foto', src: 'fotos/talla/gubias.jpg', ancho: 932, alto: 699,
      alt: 'Varias gubias y formones de talla con mango de madera sobre un banco',
      pie: 'Gubias y formones de talla de distintas formas sobre el banco. Los números grabados en el mango indican el barrido y el ancho.',
      credito: { autor: 'David Adam Kess', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Topmast_Studio_(WORKSHOP)_Swiss_Tools_at_the_workbench_Pfeil_Wood_Carving_Tools_Gouges,_Chisels,_Carving_Sets_(pic.1a).jpg' },
    },
    {
      tipo: 'tabla',
      titulo: 'Juego básico de talla',
      columnas: ['Herramienta', 'Medida orientativa', 'Para qué'],
      filas: [
        ['Gubia n.º 3', '≈ 16 – 20 mm', 'Superficies casi planas y fondos'],
        ['Gubia n.º 5', '≈ 12 – 14 mm', 'Modelar curvas suaves'],
        ['Gubia n.º 7', '≈ 10 – 14 mm', 'Desbastar y vaciar huecos'],
        ['Gubia n.º 9', '≈ 6 – 10 mm', 'Huecos hondos y molduras'],
        ['Gubia n.º 11', '≈ 2 – 3 mm', 'Líneas finas'],
        ['Gubia en V', '≈ 6 – 10 mm, 60°', 'Contornos y líneas'],
        ['Formón de talla', '≈ 12 – 16 mm', 'Planos y aristas'],
        ['Cuchillo de talla', 'Hoja ≈ 3 – 5 cm', 'Talla geométrica y figuras pequeñas'],
      ],
      nota: 'Es mejor comprar las herramientas de a una, a medida que el trabajo las pida, que un juego grande de golpe.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las medidas de la tabla son una sugerencia para piezas medianas. Para tallas grandes conviene subir de ancho, y para miniaturas, bajar.' },

    { tipo: 'h2', texto: 'Mazos y otras herramientas' },
    {
      tipo: 'lista',
      items: [
        '**Mazo de tallista:** de cabeza redonda, para que cualquier lado golpee igual. Los hay de madera dura, de latón y de plástico. Uno de unos 450 – 550 g sirve para casi todo; los más pesados, para desbastar.',
        '**Escofinas y limas:** para desbastar formas redondas y emparejar superficies. Las pequeñas de punta curva, llamadas rifloires, llegan a los huecos.',
        '**Compás de puntas y calibre:** para tomar medidas del modelo y pasarlas a la pieza.',
        '**Punzones:** varillas con la punta texturada que, a golpe de mazo, dejan un fondo granulado.',
      ],
    },

    { tipo: 'h2', texto: 'El afilado' },
    { tipo: 'figura', id: 'afilar-gubia', pie: 'Las tres herramientas se ven desde la punta. El bisel exterior se afila rodando la gubia; la rebaba de adentro se quita con una piedra de perfil.' },
    { tipo: 'p', texto: 'Las gubias de talla se afilan con un [[bisel]] exterior de unos 20 – 25°, más bajo para maderas blandas y más alto para maderas duras. El filo tiene que quedar recto visto de costado, sin esquinas adelantadas ni hundidas.' },
    {
      tipo: 'pasos',
      items: [
        'Apoya el bisel plano sobre la piedra y desliza la gubia a lo largo mientras la haces rodar de un borde al otro, para que todo el filo toque la piedra.',
        'Sigue hasta que se forme una [[rebaba]] pareja en toda la cara interior. Pasa a la piedra fina y repite.',
        'Quita la rebaba con una [[piedra de perfil|piedra-perfil]] del radio de la gubia, apoyada plana por dentro.',
        'Termina en el cuero con pasta de pulir: [[asentar|asentar]] el filo deja un acabado de espejo. Para el interior se usa un cuero doblado o una madera con el canto redondeado.',
        'Prueba el filo con un corte a través de la veta en un trozo de madera blanda. El corte debe quedar brillante; una raya blanca indica una mella en el filo.',
      ],
    },
    { tipo: 'p', texto: 'La gubia en V se afila como dos formones: cada ala por separado, con el mismo ángulo y quitando lo mismo de cada lado. En la unión de las alas suele quedar una pequeña punta que sobresale. Se redondea con suavidad la quilla de afuera hasta que el filo quede recto visto de costado.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Un tallista asienta el filo en el cuero cada pocos minutos de trabajo. Así casi nunca necesita volver a la piedra.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Las dos manos van siempre detrás del filo: una empuja y la otra guía y frena. Guarda las gubias en un rollo de lona o en un estante con ranuras, sin que los filos se toquen, y no las dejes sueltas sobre el banco.' },
  ],
}

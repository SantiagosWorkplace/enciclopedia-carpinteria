export default {
  actualizado: '2026-10-27',
  relacionados: ['madera/tableros', 'madera/aserrado', 'chapeado/preparar-chapa', 'chapeado/soporte'],
  bloques: [
    { tipo: 'p', texto: 'Una [[chapa]] es una lámina de madera de menos de un milímetro hasta unos pocos milímetros de espesor. Pegada sobre un tablero estable, permite usar las maderas más vistosas en superficies grandes, sin el movimiento de la madera maciza y con una fracción del material. De un solo tronco valioso pueden salir cientos de metros cuadrados de chapa.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Chapado no es sinónimo de baja calidad. Buena parte de los muebles más finos de la historia están chapados: la chapa permite dibujos, como la veta en espejo o la marquetería, que serían imposibles en macizo.' },

    { tipo: 'h2', texto: 'Cómo se fabrica' },
    {
      tipo: 'pasos',
      items: [
        'Se eligen trozas rectas y sin defectos, y se descortezan.',
        'Según el corte que se busque, la troza se deja entera o se divide en mitades o cuartos.',
        'Las piezas se ablandan con agua caliente o vapor durante horas o días, según la especie, para que la cuchilla corte sin romper las fibras.',
        'Se cortan las hojas, de forma continua o una a una.',
        'Las hojas se secan rápidamente y se apilan en el mismo orden en que se cortaron.',
      ],
    },
    { tipo: 'p', texto: 'Ese orden es importante: las hojas consecutivas son casi idénticas. Un paquete de hojas de una misma pieza se vende junto y numerado, para poder combinar su dibujo.' },

    { tipo: 'h2', texto: 'Tipos de corte' },
    { tipo: 'figura', id: 'cortes-chapa', pie: 'Las líneas negras indican cada hoja. La cuchilla aparece en gris y las flechas azules muestran el movimiento.' },
    {
      tipo: 'tabla',
      titulo: 'Cortes de chapa',
      columnas: ['Corte', 'Cómo se hace', 'Aspecto', 'Usos'],
      filas: [
        ['[[Desenrollo|desenrollo]]', 'La troza gira contra una cuchilla fija, como si se pelara', 'Veta ancha e irregular; hojas muy grandes', 'Contrachapado, chapas de bajo costo, ojo de perdiz'],
        ['Plano', 'Media troza sube y baja contra la cuchilla, con cortes paralelos a su centro', 'Veta en catedral en el centro y rayada en los bordes', 'La chapa decorativa más habitual'],
        ['Al cuarto', 'Un cuarto de troza se corta con la cuchilla perpendicular a los anillos', 'Veta recta y rayada; espejuelos en robles', 'Paneles y muebles de aspecto sobrio'],
        ['Semidesenrollo', 'Media troza se monta fuera del centro del torno y gira contra la cuchilla', 'Catedral más ancha que la del corte plano', 'Hojas anchas con dibujo de catedral'],
        ['Falso cuarto', 'Corte en ángulo respecto de los radios', 'Veta recta sin espejuelos', 'Roble con veta recta y uniforme'],
        ['Aserrada', 'Se corta con sierra, como una tabla muy fina', 'Igual que la madera maciza', 'Restauración; chapas gruesas de 1,5 a 3 mm'],
      ],
    },

    { tipo: 'h2', texto: 'Espesores y presentaciones' },
    {
      tipo: 'lista',
      items: [
        '**Chapa natural:** el espesor más común es de ≈ 0,5 a 0,7 mm. Las chapas más gruesas, cerca de 1 mm o más, toleran mejor el lijado.',
        '**Chapa con soporte:** pegada a una hoja de papel o tela. Se rompe menos, cubre piezas curvas y se puede pegar con adhesivo de contacto.',
        '**Chapa reconstituida:** se fabrica tiñendo, encolando y volviendo a cortar chapas de especies de rápido crecimiento. Imita maderas exóticas con un aspecto muy regular y sin variaciones entre hojas.',
        '**Tableros chapados:** contrachapado, MDF o aglomerado con la chapa ya pegada de fábrica.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Con chapa de 0,6 mm, lija con lija fina (grano 150 o más) y sin presionar en los bordes: es muy fácil atravesarla, y una vez que se ve el tablero de abajo ya no tiene arreglo.' },

    { tipo: 'h2', texto: 'Dibujos especiales' },
    { tipo: 'p', texto: 'Ciertas zonas del árbol dan dibujos que en macizo serían frágiles o inestables, pero que en chapa se pueden aprovechar:' },
    {
      tipo: 'lista',
      items: [
        '**Raíz o lupa:** madera de los bultos que crecen en algunos troncos o en la base. Dibujo de remolinos y pequeños nudos.',
        '**Pluma o horqueta:** de la unión entre el tronco y una rama gruesa. La veta se abre como una pluma o una llama.',
        '**Ondulado o rizado:** las fibras ondulan y la superficie refleja la luz en franjas, como en muchos violines de arce.',
        '**Ojo de perdiz:** pequeños círculos repartidos por la cara, típico de algunos arces. Se aprovecha mejor con desenrollo.',
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Las chapas de raíz y de pluma suelen llegar onduladas y quebradizas. Antes de pegarlas hay que aplanarlas con un producto suavizante y prensado entre tableros. Se explica en [Preparar la chapa](#/chapeado/preparar-chapa).' },

    { tipo: 'h2', texto: 'Combinar las hojas' },
    { tipo: 'p', texto: 'Como las hojas de un paquete son casi iguales, se pueden ordenar para formar un dibujo:' },
    {
      tipo: 'lista',
      items: [
        '**En libro abierto:** se da vuelta una hoja de cada dos, como las páginas de un libro, y el dibujo queda en espejo. Es la combinación más usada.',
        '**Deslizada:** las hojas se colocan una junto a otra sin girarlas. El dibujo se repite y el brillo es más parejo.',
        '**En cuatro:** cuatro hojas en espejo a lo largo y a lo ancho, típico con raíces.',
        '**Aleatoria:** hojas mezcladas, a veces de distintos paquetes, para imitar tablas macizas.',
      ],
    },
    { tipo: 'p', texto: 'Al cortarse, la chapa se dobla sobre la cuchilla y en una de sus caras se abren pequeñas grietas: es la cara *abierta*; la otra es la *cerrada*. En la combinación en libro abierto quedan a la vista caras alternas, y por eso las hojas pueden reflejar la luz de forma distinta. Se tiene en cuenta al elegir y al acabar.' },
    { tipo: 'p', texto: 'Cómo pegar la chapa sobre un tablero se explica en el capítulo [Chapeado y marquetería](#/chapeado/soporte).' },
  ],
}

export default {
  actualizado: '2026-10-27',
  relacionados: ['madera/especies', 'madera/defectos', 'diseno/estructura', 'madera/frondosas-coniferas'],
  bloques: [
    { tipo: 'p', texto: 'Las fichas de madera están llenas de números: densidad, dureza, módulo de elasticidad, resistencia a flexión. Este artículo explica qué mide cada uno, en qué unidades se da y para qué sirve al elegir una madera.' },

    { tipo: 'h2', texto: 'Densidad' },
    { tipo: 'p', texto: 'La [[densidad]] es el peso de un metro cúbico de madera, en kg/m³. Es la propiedad más útil de todas porque casi todas las demás crecen con ella: una madera más densa suele ser más dura, más rígida y más resistente, aunque también más difícil de trabajar y más pesada.' },
    { tipo: 'p', texto: 'Como el agua pesa, la densidad se da siempre para una humedad determinada, normalmente el **12 %**. A veces aparece la *densidad básica*, que divide el peso seco por el volumen de la madera verde; da números más bajos y no hay que confundirlas.' },
    {
      tipo: 'tabla',
      titulo: 'Clasificación orientativa por densidad al 12 %',
      columnas: ['Categoría', 'Densidad', 'Ejemplos'],
      filas: [
        ['Ligera', 'Menos de 500 kg/m³', 'Balsa, pino blanco, cedro rojo, álamo'],
        ['Media', '500 – 700 kg/m³', 'Pino silvestre, cerezo, nogal, caoba'],
        ['Pesada', '700 – 900 kg/m³', 'Roble, haya, arce duro, eucalipto'],
        ['Muy pesada', 'Más de 900 kg/m³', 'Lapacho, quebracho, guayacán'],
      ],
      nota: 'Las categorías no son una norma: cada fuente usa límites algo distintos.',
    },

    { tipo: 'h2', texto: 'Dureza' },
    { tipo: 'p', texto: 'La dureza indica cuánto resiste la superficie a marcarse y abollarse. Importa en suelos, tableros de mesa y mangos. Hay varios ensayos; los más usados son:' },
    {
      tipo: 'lista',
      items: [
        '**[[Janka|janka]]:** fuerza necesaria para hundir una bola de acero de 11,28 mm hasta la mitad de su diámetro. Se da en newtons (N o kN) o en libras-fuerza (lbf); 1 kN ≈ 225 lbf. Es el valor más común en fichas de suelos.',
        '**Brinell:** se aprieta una bola de 10 mm con una fuerza fija y se mide la huella. Se usa en Europa para suelos de madera y se da en N/mm².',
      ],
    },
    { tipo: 'p', texto: 'La testa es bastante más dura que las caras, y en una misma tabla la madera tardía es más dura que la temprana. En las [fichas de especies](#/madera/especies) puedes comparar la dureza Janka de cada madera y cambiar la unidad con un clic.' },

    { tipo: 'h2', texto: 'Cómo trabaja una pieza' },
    { tipo: 'p', texto: 'Una pieza de madera puede recibir esfuerzos de distintos tipos, y su resistencia a cada uno depende muchísimo de la dirección de la veta:' },
    { tipo: 'figura', id: 'esfuerzos', pie: 'Los esfuerzos básicos. "A lo largo" significa en la dirección de la veta; "a lo ancho", perpendicular a ella.' },
    {
      tipo: 'lista',
      items: [
        '**Compresión a lo largo:** muy alta. Por eso un poste o una pata soportan mucho peso.',
        '**Compresión a lo ancho:** varias veces menor. La madera se aplasta bajo una arandela pequeña o bajo el apoyo de una viga.',
        '**Tracción a lo largo:** la más alta de todas en madera sin defectos, aunque los nudos y la fibra inclinada la reducen mucho.',
        '**Tracción a lo ancho:** muy baja. Por eso la madera se raja con una cuña o al clavar cerca del extremo.',
        '**Flexión:** combina las dos: la cara de arriba se comprime y la de abajo se tracciona. Es como trabajan estantes, vigas y asientos.',
        '**Cortante:** las fibras se deslizan unas sobre otras. Importa en uniones y en vigas cortas muy cargadas.',
      ],
    },

    { tipo: 'h2', texto: 'Los valores de una ficha técnica' },
    {
      tipo: 'datos',
      items: [
        ['[[Módulo de rotura|mor]] (MOR)', 'Resistencia a flexión: la tensión a la que se rompe una pieza apoyada en los extremos y cargada en el centro. En N/mm², que es lo mismo que megapascales (MPa).'],
        ['[[Módulo de elasticidad|moe]] (MOE)', 'Rigidez: cuánto se dobla una pieza bajo una carga, antes de romperse. En GPa o en N/mm² (1 GPa = 1000 N/mm²). Decide cuánto se va a curvar un estante.'],
        ['Compresión paralela', 'Tensión máxima a lo largo de la veta, en N/mm².'],
        ['Dureza Janka', 'En kN o en lbf, sobre la cara de la tabla.'],
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Valores medios de madera sin defectos al 12 % de humedad',
      columnas: ['Especie', 'Densidad', 'MOR', 'MOE', 'Compresión paralela', 'Janka'],
      filas: [
        ['Pino blanco (Pinus strobus)', '≈ 390 kg/m³', '59 N/mm²', '8,5 GPa', '33 N/mm²', '1,7 kN'],
        ['Pino Oregón', '≈ 540 kg/m³', '85 N/mm²', '13,4 GPa', '50 N/mm²', '3,2 kN'],
        ['Cerezo americano', '≈ 560 kg/m³', '85 N/mm²', '10,3 GPa', '49 N/mm²', '4,2 kN'],
        ['Nogal negro', '≈ 615 kg/m³', '101 N/mm²', '11,6 GPa', '52 N/mm²', '4,5 kN'],
        ['Fresno blanco', '≈ 670 kg/m³', '103 N/mm²', '12,0 GPa', '51 N/mm²', '5,9 kN'],
        ['Arce duro', '≈ 705 kg/m³', '109 N/mm²', '12,6 GPa', '54 N/mm²', '6,4 kN'],
        ['Roble blanco', '≈ 760 kg/m³', '105 N/mm²', '12,3 GPa', '51 N/mm²', '6,0 kN'],
      ],
      nota: 'Probetas pequeñas, sin nudos ni defectos. Una pieza real tiene valores menores.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Valores medios publicados por el Wood Handbook (USDA Forest Products Laboratory) para especies norteamericanas. La densidad está calculada aproximadamente a partir del peso específico. Para otras especies o procedencias, consulta la ficha del proveedor.' },
    { tipo: 'p', texto: 'Un dato curioso: el pino Oregón tiene un módulo de elasticidad de unos 13 GPa y el acero de unos 200 GPa, quince veces más. Pero el acero pesa unas quince veces más, así que **por cada kilo de material la rigidez a lo largo de la veta es parecida**. Por eso la madera es tan eficiente como material de estructura.' },

    { tipo: 'h2', texto: 'Qué cambia la resistencia' },
    {
      tipo: 'lista',
      items: [
        '**La humedad:** por debajo del punto de saturación de las fibras, la madera es más resistente cuanto más seca está. Al 12 % puede resistir a flexión entre 1,5 y 2 veces lo que resiste verde.',
        '**Los defectos:** nudos, fibra inclinada y grietas son puntos débiles. Una fibra inclinada en 1 de cada 10 unidades de largo ya reduce de forma notable la resistencia a flexión.',
        '**La duración de la carga:** la madera aguanta más una carga breve que una permanente. Una carga mantenida durante años solo puede ser del orden del 60 % de la que rompe la pieza en un ensayo rápido. Además, bajo carga constante la pieza sigue curvándose: es la [[fluencia]], el motivo por el que los estantes largos se comban con los años.',
        '**La temperatura:** el calor prolongado la debilita; por eso las normas reducen los valores en ambientes calientes.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para que un estante no se curve, la rigidez importa más que la resistencia. Duplicar el espesor de la tabla la hace ocho veces más rígida; duplicar el ancho, solo dos veces. Acortar la luz entre apoyos a la mitad reduce la flecha a la octava parte o menos.' },

    { tipo: 'h2', texto: 'Clases resistentes para estructura' },
    { tipo: 'p', texto: 'Para construir, no se usan los valores de las probetas sin defectos sino **clases resistentes**, que ya tienen en cuenta los nudos y la variación entre piezas. La norma europea EN 338, usada también como referencia en otros países, las nombra con una letra y un número:' },
    {
      tipo: 'lista',
      items: [
        '**C** para coníferas y álamo, de C14 a C50.',
        '**D** para frondosas, como D30 o D40.',
        'El número es la resistencia característica a flexión en N/mm². Una pieza **C24** tiene 24 N/mm²: muy por debajo de los 85 N/mm² de una probeta de pino Oregón, porque se refiere a piezas grandes, con sus defectos, y a un valor que solo un 5 % de las piezas no alcanza.',
        'La madera laminada encolada tiene sus propias clases, como **GL24h**, según la norma EN 14080.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'El cálculo de una estructura que soporta personas, como un entrepiso, una escalera o un techo, debe hacerlo un profesional con la norma de tu país. Las tablas de este artículo sirven para comparar maderas, no para dimensionar estructuras.' },
  ],
}

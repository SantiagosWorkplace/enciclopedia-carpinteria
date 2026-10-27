export default {
  actualizado: '2026-10-27',
  relacionados: ['madera/crecimiento', 'madera/especies', 'madera/propiedades', 'acabados/preparacion'],
  bloques: [
    { tipo: 'p', texto: 'Toda la madera que se usa en carpintería sale de dos grandes grupos de árboles: las [[coníferas|conifera]] y las [[frondosas|frondosa]]. En el comercio se las llama "maderas blandas" y "maderas duras", pero esos nombres hablan de botánica, no de dureza: hay frondosas muy blandas y coníferas bastante duras.' },

    { tipo: 'h2', texto: 'Dos familias de árboles' },
    {
      tipo: 'tabla',
      titulo: 'Coníferas y frondosas',
      columnas: ['', 'Coníferas', 'Frondosas'],
      filas: [
        ['Grupo botánico', 'Gimnospermas: semillas desnudas, casi siempre en piñas', 'Angiospermas: semillas dentro de un fruto'],
        ['Hojas', 'En aguja o en escama; casi todas perennes', 'Anchas y planas; en climas templados muchas caen en otoño'],
        ['Células principales', '[[Traqueidas|traqueida]]: el 90 % o más del volumen', 'Vasos para conducir agua y fibras para resistir'],
        ['Poros en la testa', 'No tiene', 'Sí, visibles con lupa o a simple vista'],
        ['Resina', 'Frecuente: pinos, píceas, alerces, pino Oregón', 'Rara; algunas tienen gomas o aceites'],
        ['Ejemplos', 'Pino, abeto, pícea, alerce, cedro del Líbano, ciprés, araucaria', 'Roble, haya, nogal, cerezo, eucalipto, lapacho, balsa'],
        ['Usos típicos', 'Estructura, carpintería de obra, encofrados, tableros, papel', 'Muebles, suelos, ebanistería, tornería, chapas'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Hay excepciones a cada regla: el alerce es una conífera que pierde las hojas en otoño, y muchas frondosas tropicales las conservan todo el año. Lo que separa a los dos grupos con seguridad es la estructura de la madera.' },

    { tipo: 'h2', texto: 'Lo que se ve con una lupa' },
    { tipo: 'p', texto: 'La diferencia más útil para un carpintero está en la testa. Si se corta limpia con un cúter muy afilado y se mira con una lupa de 10 aumentos, cada grupo muestra un dibujo propio:' },
    { tipo: 'figura', id: 'estructura-celular', pie: 'Cortes transversales ampliados, esquemáticos. Las líneas verticales son los radios; las horizontales oscuras, el límite entre dos anillos.' },
    {
      tipo: 'lista',
      items: [
        '**Coníferas:** filas ordenadas de traqueidas, células largas (≈ 2 – 5 mm) y cerradas que conducen el agua y a la vez sostienen el árbol. No hay poros. En pinos, píceas y alerces se ven además canales de resina.',
        '**Frondosas:** tienen [[poros|poro]], que son vasos cortados de través: tubos formados por células abiertas en sus extremos. Alrededor hay fibras de paredes gruesas, que dan la resistencia, y radios a menudo más anchos que los de las coníferas.',
      ],
    },

    { tipo: 'h2', texto: 'Cómo se reparten los poros' },
    { tipo: 'p', texto: 'En las frondosas, la forma en que se reparten los poros a lo largo del anillo cambia el aspecto de la veta y la manera de terminarla:' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de porosidad',
      columnas: ['Porosidad', 'Cómo se ve', 'Ejemplos'],
      filas: [
        ['En anillo', 'Una franja de poros grandes al principio de cada anillo y poros pequeños en el resto. Veta muy marcada.', 'Roble, fresno, castaño, olmo, acacia blanca'],
        ['Semidifusa', 'Poros que se hacen más chicos poco a poco a lo largo del anillo.', 'Nogal, cerezo'],
        ['Difusa', 'Poros pequeños y parejos en todo el anillo. Veta suave, superficie uniforme.', 'Haya, arce, abedul, tilo, álamo, eucalipto'],
      ],
    },
    { tipo: 'p', texto: 'El tamaño de los poros define la **textura**. Una madera de *textura gruesa* o *abierta*, como el roble o el fresno, deja hoyos en la superficie que hay que rellenar con tapaporos si se busca un acabado liso y brillante. Una de *textura fina*, como el arce o el cerezo, queda lisa con poco trabajo. Se explica en [Preparar la superficie](#/acabados/preparacion).' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'En maderas de porosidad en anillo, los poros grandes forman en la cara de la tabla líneas o "arcos" muy visibles. Un tinte se acumula en ellos y los oscurece más que el resto: prueba siempre en un recorte antes de teñir la pieza.' },

    { tipo: 'h2', texto: 'Blanda y dura: lo que significa de verdad' },
    { tipo: 'p', texto: 'La dureza depende sobre todo de la [[densidad]], y la densidad varía muchísimo dentro de cada grupo:' },
    {
      tipo: 'tabla',
      titulo: 'Densidad aproximada al 12 % de humedad',
      columnas: ['Madera', 'Grupo', 'Densidad'],
      filas: [
        ['Balsa', 'Frondosa', '≈ 100 – 250 kg/m³'],
        ['Pino radiata de plantación', 'Conífera', '≈ 450 – 500 kg/m³'],
        ['Pino silvestre', 'Conífera', '≈ 500 – 550 kg/m³'],
        ['Tejo', 'Conífera', '≈ 650 – 700 kg/m³'],
        ['Roble europeo', 'Frondosa', '≈ 650 – 750 kg/m³'],
        ['Haya europea', 'Frondosa', '≈ 700 – 750 kg/m³'],
        ['Lapacho', 'Frondosa', '≈ 950 – 1100 kg/m³'],
        ['Quebracho colorado', 'Frondosa', '≈ 1200 – 1300 kg/m³'],
      ],
      nota: 'La balsa, la madera comercial más liviana, es una frondosa. El tejo, una conífera, es más denso que muchas frondosas.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las densidades son rangos orientativos y cambian con la procedencia y la velocidad de crecimiento. Para cálculos usa la ficha técnica del proveedor o una base de datos de especies.' },

    { tipo: 'h2', texto: 'Cómo se trabajan' },
    {
      tipo: 'lista',
      items: [
        '**Coníferas:** en general cortan rápido y se clavan sin pretaladrar. La diferencia de dureza entre la madera temprana y la tardía hace que el cepillo o la lija "bajen" más la temprana y la veta quede en relieve. La resina embota las cuchillas y puede rezumar a través del acabado.',
        '**Frondosas:** más variadas. Las densas exigen herramientas bien afiladas, pretaladrar para clavos y tornillos, y a veces cuchillas de metal duro. Muchas tienen la veta entrelazada y se repelan al cepillar.',
      ],
    },
    { tipo: 'p', texto: 'Las fichas de cada especie, con su dureza y trabajabilidad, están en [Especies de madera](#/madera/especies).' },
  ],
}

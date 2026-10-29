export default {
  actualizado: '2026-10-29',
  relacionados: ['madera/chapas', 'chapeado/herramientas-chapeado', 'chapeado/chapeado-prensa', 'chapeado/soporte'],
  bloques: [
    { tipo: 'p', texto: 'Antes de pegar la chapa hay que guardarla bien, aplanarla si llegó ondulada, elegir cómo combinar las hojas, cortarlas y unirlas en una sola lámina del tamaño del soporte. Es el trabajo más minucioso del chapeado y el que decide el aspecto final.' },

    { tipo: 'h2', texto: 'Guardar la chapa' },
    {
      tipo: 'lista',
      items: [
        '**Plana y a la sombra,** en paquetes sobre un tablero, con un peso liviano encima.',
        '**En su orden,** con las hojas numeradas. Las hojas consecutivas son casi idénticas y permiten combinar el dibujo.',
        '**Ni muy seca ni muy húmeda:** la chapa seca se vuelve quebradiza y la húmeda se mancha con hongos. Ventila los paquetes de vez en cuando.',
      ],
    },

    { tipo: 'h2', texto: 'Aplanar las chapas onduladas' },
    { tipo: 'p', texto: 'Las chapas de raíz, de pluma o muy figuradas suelen llegar onduladas y se rompen al apretarlas. Se aplanan antes de cortar:' },
    {
      tipo: 'pasos',
      items: [
        'Humedece las hojas con un pulverizador, o con un producto suavizante para chapa si son muy quebradizas.',
        'Apílalas entre hojas de papel absorbente, sin tinta, y ponlas entre dos tableros planos con un peso o prensas.',
        'Cambia el papel cada pocas horas el primer día y luego una vez por día, hasta que las hojas estén secas y planas.',
        'Úsalas enseguida o guárdalas prensadas: si se dejan sueltas, se vuelven a ondular.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los suavizantes para chapa se venden ya preparados. Algunos carpinteros usan mezclas caseras con glicerina y cola; si lo haces, prueba antes en un recorte porque pueden manchar o afectar la adherencia.' },

    { tipo: 'h2', texto: 'Combinar las hojas' },
    { tipo: 'figura', id: 'uniones-chapa', pie: 'Las cuatro combinaciones más usadas. En el libro abierto y en el cuarteado, las hojas vecinas son espejos una de la otra.' },
    {
      tipo: 'tabla',
      titulo: 'Combinaciones de hojas',
      columnas: ['Combinación', 'Cómo se hace', 'Efecto'],
      filas: [
        ['[[Libro abierto|libro-abierto]]', 'Hojas consecutivas, una dada vuelta como la página de un libro', 'Dibujo simétrico a los dos lados de la junta'],
        ['Deslizado', 'Hojas consecutivas, corridas sin darlas vuelta', 'El dibujo se repite; sin reflejos distintos'],
        ['Cuarteado', 'Cuatro hojas en espejo en las dos direcciones', 'Dibujo central; típico en tapas de mesa y con raíces'],
        ['Al azar', 'Hojas de distintas partes o anchos', 'Parece un tablero de madera maciza'],
        ['Radial o en sol', 'Sectores triangulares alrededor de un centro', 'Tapas redondas'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'En el libro abierto, una hoja muestra su cara superior y la siguiente su cara inferior. Reflejan la luz de forma distinta, y una puede verse más clara que la otra según el ángulo. Es normal y forma parte del efecto.' },

    { tipo: 'h2', texto: 'Cortar y unir las hojas' },
    {
      tipo: 'pasos',
      items: [
        'Elige y marca con tiza la zona de cada hoja que vas a usar. Deja un margen de 10 – 20 mm por lado sobre la medida del soporte.',
        'Corta las hojas apiladas, alineadas por el dibujo, con la sierra de chapa contra la regla.',
        'Rectifica los cantos de la junta: aprieta las hojas entre dos listones rectos con un milímetro de chapa asomando y pasa el cepillo por la tabla de refrentar.',
        'Junta los cantos sobre una superficie plana y pega cinta engomada humedecida sobre la cara vista: primero tiras cortas atravesadas cada 10 – 15 cm y después una tira larga sobre la junta.',
        'Deja secar la cinta. Al encoger, cierra la junta.',
        'Revisa la junta a contraluz: no debe verse luz. La cinta se quita después de pegar la chapa al soporte.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'No uses cinta de pintor ni cinta adhesiva en la cara que va al soporte: no deja pegar la cola y queda atrapada. Por el lado visto, la cinta engomada es la más segura porque sale con agua.' },
  ],
}

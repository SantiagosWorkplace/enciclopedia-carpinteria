export default {
  actualizado: '2026-10-29',
  relacionados: ['uniones/visor', 'maquinas/ingletadora', 'uniones/clavijas-galletas', 'herramientas-manuales/prensas'],
  bloques: [
    { tipo: 'p', texto: 'El [[inglete]] une dos piezas cortadas en ángulo para que formen una esquina sin que se vea ninguna testa. La veta da la vuelta a la esquina y la moldura continúa sin cortes, por eso es la unión de marcos de cuadros, molduras, tapajuntas y cajas finas. A cambio, encola dos testas y solo con cola es débil.' },

    { tipo: 'h2', texto: 'Tipos y refuerzos' },
    { tipo: 'figura', id: 'ingletes', pie: 'Las líneas finas indican la veta. La galleta va oculta, por eso se dibuja con trazos. En el último dibujo, la separación está exagerada.' },
    {
      tipo: 'tabla',
      titulo: 'Ingletes y cómo reforzarlos',
      columnas: ['Tipo', 'Cómo es', 'Uso'],
      filas: [
        ['De marco', 'Corte a 45° en la cara de dos piezas que se unen en el mismo plano', 'Marcos de cuadro, puertas, tapajuntas'],
        ['De caja', 'Corte a 45° en el espesor; las piezas forman una esquina de caja', 'Cajas, zócalos, cantos de tablero'],
        ['Con galleta o clavija', 'Una galleta o una clavija cruza el corte', 'Marcos anchos y cajas de tablero'],
        ['Con lengüeta', 'Un listón de contrachapado en ranuras cortadas en las dos caras del inglete', 'Cajas y marcos de madera maciza'],
        ['Con chavetas', 'Cortes de sierra en la esquina armada, rellenos con láminas de madera', 'Marcos y cajas; las chavetas se ven y decoran'],
        ['Con grapas o clavos', 'Grapas en V por detrás o clavos finos', 'Marcos de cuadro'],
        ['Compuesto', 'Corte con dos ángulos a la vez: inclinación de la hoja y giro', 'Cajas de lados inclinados, molduras de techo'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'En los ingletes de madera maciza, cada pieza encoge y se hincha a lo ancho, pero casi nada a lo largo. Si el aire se seca, la junta se abre por el vértice interior. Si se humedece, se abre por fuera. Cuanto más anchas las piezas, más se nota.' },

    { tipo: 'h2', texto: 'El ángulo exacto' },
    { tipo: 'figura', id: 'angulos-inglete', pie: 'La línea de trazos es el corte a escuadra y la continua, el corte a inglete. El arco marca el ángulo entre los dos.' },
    {
      tipo: 'lista',
      items: [
        '**El ángulo de corte** es 180° dividido por el número de lados: 45° en un marco de cuatro lados, 30° en uno de seis, 22,5° en uno de ocho.',
        '**Los errores se multiplican:** un marco de cuatro lados tiene ocho cortes. Medio grado de error en cada uno deja una abertura de 4° en la última esquina.',
        '**Lados opuestos iguales:** en un marco, los dos lados opuestos se cortan juntos o con un tope. Una diferencia de un milímetro abre una esquina.',
        '**Prueba antes:** corta cuatro recortes, arma el marco con cinta y revisa las esquinas. Corrige el ángulo antes de cortar la moldura buena.',
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Herramientas para cortar ingletes',
      columnas: ['Herramienta', 'Precisión', 'Comentario'],
      filas: [
        ['Caja de ingletes y serrucho', 'Media', 'Barata; las ranuras se gastan con el uso'],
        ['Sierra de ingletes manual', 'Buena', 'Guía metálica regulable con una sierra de costilla'],
        ['Ingletadora', 'Muy buena', 'Rápida; ajusta los topes de 45° y 90° con una escuadra'],
        ['Sierra de mesa con guía de ingletes', 'Muy buena', 'Para piezas anchas y cajas'],
        ['Tabla de refrentar a 45°', 'Excelente', 'Se usa con un cepillo para repasar el corte y ajustar a la décima'],
      ],
    },

    { tipo: 'h2', texto: 'Encolado' },
    { tipo: 'figura', id: 'encolado-inglete', pie: 'Marcos vistos desde arriba. Las diagonales se miden de esquina exterior a esquina exterior.' },
    {
      tipo: 'pasos',
      items: [
        'Pasa una mano de cola en las testas y espera unos minutos a que se absorba. Luego pon la segunda mano y arma.',
        'Aprieta con una prensa de cinta alrededor del marco o con prensas de esquina. En cajas, usa tacos encolados con papel en las esquinas para tener dónde apoyar las prensas.',
        'Mide las diagonales: si son iguales, el marco está a escuadra.',
        'Cuando la cola fragua, agrega los refuerzos que no se pusieron al armar, como chavetas o grapas.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Si una esquina queda con una pequeña abertura, frótala con la caña de un destornillador. La madera de los bordes se dobla un poco y cierra la luz. Sirve para décimas de milímetro, no para errores de corte.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los ángulos del inglete compuesto dependen de la inclinación de los lados y del número de lados. Calcúlalos con una tabla o una calculadora de ingletes compuestos y prueba siempre en recortes.' },
  ],
}

export default {
  actualizado: '2026-10-29',
  relacionados: ['herramientas-manuales/taladros-manuales', 'electricas/taladros', 'herrajes/bisagras', 'maquinas/seguridad-maquinas'],
  bloques: [
    { tipo: 'p', texto: 'El taladro de columna hace lo que a mano es difícil: agujeros perfectamente perpendiculares, a una profundidad exacta y repetibles cientos de veces. Es la herramienta para las cazoletas de bisagras, los agujeros de clavijas, los vaciados con brocas Forstner y los agujeros en ángulo con una mesa inclinada.' },

    { tipo: 'h2', texto: 'Partes' },
    { tipo: 'figura', id: 'taladro-columna', pie: 'Un taladro de columna de banco visto de costado. La mesa auxiliar de madera protege la mesa metálica y lleva una guía para repetir agujeros.' },
    {
      tipo: 'foto', src: 'fotos/maquinas/taladro-columna.jpg', ancho: 1000, alto: 667,
      alt: 'Hombre trabajando con un taladro de columna de pie en un taller',
      pie: 'Taladro de columna de pie en un taller: la pieza va sujeta en una mordaza sobre la mesa.',
      credito: { autor: 'LHOON', licencia: 'CC BY-SA 2.5', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/2.5', fuente: 'https://commons.wikimedia.org/wiki/File:Drillpress.jpg' },
    },
    {
      tipo: 'lista',
      items: [
        '**Cabezal:** el motor y el husillo con el portabrocas, que bajan con una palanca de tres brazos.',
        '**Columna:** el tubo vertical que sostiene el cabezal y la mesa.',
        '**Mesa:** sube, baja, gira y en muchos modelos se inclina. Se le agrega una mesa auxiliar de madera con una guía.',
        '**Tope de profundidad:** limita el recorrido del husillo para agujeros ciegos iguales.',
        '**Poleas o variador:** fijan la velocidad. En los de correas, se cambia la posición de la correa entre poleas escalonadas.',
      ],
    },
    { tipo: 'datos', items: [['Tamaño', 'Se indica por la distancia de la broca a la columna (el ancho máximo de pieza es el doble) y por el recorrido del husillo, por ejemplo 60 – 80 mm.']] },

    { tipo: 'h2', texto: 'Velocidades' },
    { tipo: 'p', texto: 'Cuanto más grande la broca, más lenta la velocidad:' },
    {
      tipo: 'tabla',
      titulo: 'Velocidad orientativa en madera',
      columnas: ['Broca', 'Madera blanda', 'Madera dura'],
      filas: [
        ['Helicoidal o de punta hasta 6 mm', '2000 – 3000 rpm', '1500 – 2500 rpm'],
        ['De 6 a 13 mm', '1200 – 2000 rpm', '800 – 1500 rpm'],
        ['Forstner de 15 a 25 mm', '600 – 1000 rpm', '400 – 800 rpm'],
        ['Forstner de 25 a 50 mm', '300 – 600 rpm', '250 – 500 rpm'],
        ['Sierra de copa', '300 – 500 rpm', '250 – 400 rpm'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Son valores generales. El fabricante de cada broca suele indicar su velocidad; si la madera humea o la broca chirría, baja la velocidad.' },

    { tipo: 'h2', texto: 'Técnica' },
    {
      tipo: 'pasos',
      items: [
        'Pon una mesa auxiliar de madera o un taco de desecho bajo la pieza: protege la mesa y evita astillas a la salida.',
        'Sujeta la pieza a una guía o con prensas. Una broca que se traba hace girar la pieza como una hélice.',
        'Marca el centro con un punzón y baja la broca apagada para alinearla.',
        'Fija el tope si el agujero es ciego.',
        'Baja la broca con avance parejo y súbela a menudo para sacar la viruta en agujeros profundos.',
        'Para series, prensa un tope en la guía: todas las piezas quedarán iguales.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Quita siempre la llave del portabrocas antes de encender, no uses guantes y mantén el pelo recogido. Nunca sujetes con la mano una pieza pequeña: usa una prensa o una mordaza de taladro.' },

    { tipo: 'h2', texto: 'Trabajos especiales' },
    {
      tipo: 'lista',
      items: [
        '**Cazoletas de bisagras:** broca Forstner de 35 mm, tope de profundidad a ≈ 12 – 13 mm y una guía a la distancia del canto que indica el fabricante de la bisagra.',
        '**Agujeros en ángulo:** inclinando la mesa o con una plantilla con el ángulo, por ejemplo para las patas de un taburete.',
        '**Agujeros en piezas redondas:** con un taco con ranura en V que sostenga la pieza centrada.',
        '**Lijado con tambor:** con un rodillo de lija en el portabrocas, para curvas interiores.',
      ],
    },
  ],
}

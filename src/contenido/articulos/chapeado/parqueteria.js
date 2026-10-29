export default {
  actualizado: '2026-10-29',
  relacionados: ['chapeado/marqueteria', 'chapeado/preparar-chapa', 'chapeado/filetes', 'madera/chapas'],
  bloques: [
    { tipo: 'p', texto: 'La [[parquetería|parqueteria]] compone figuras geométricas repetidas con chapa o con madera maciza: cuadros, rombos, triángulos o espigas. A diferencia de la marquetería, no busca representar algo sino crear un ritmo de colores y de reflejos. Las piezas son muchas e iguales, y la precisión del corte lo es todo.' },

    { tipo: 'h2', texto: 'Composiciones clásicas' },
    { tipo: 'figura', id: 'parqueteria', pie: 'Cada tono representa una especie distinta o la misma especie con la veta en otra dirección.' },
    {
      tipo: 'tabla',
      titulo: 'Composiciones de parquetería',
      columnas: ['Composición', 'Piezas', 'Detalles'],
      filas: [
        ['Damero', 'Cuadrados', 'Dos especies, o una sola con la veta alternada a 90°: los reflejos cambian según la luz'],
        ['Cubos', 'Rombos de 60° y 120°', 'Tres tonos: claro arriba, medio y oscuro a los costados; da sensación de volumen'],
        ['Punta de Hungría', 'Paralelogramos con los extremos en ángulo', 'Filas en zigzag; muy usada en suelos'],
        ['Espiga', 'Rectángulos con los extremos a escuadra', 'Cada pieza apoya su extremo contra el costado de la siguiente'],
        ['Estrella o sol', 'Rombos alrededor de un centro', 'Tapas redondas y centros de mesa'],
      ],
    },

    { tipo: 'h2', texto: 'El método de tiras' },
    { tipo: 'p', texto: 'La forma más precisa de hacer muchas piezas iguales es cortar primero tiras y después rebanarlas. Para un damero:' },
    {
      tipo: 'pasos',
      items: [
        'Corta tiras del mismo ancho de dos chapas de color distinto, contra una regla y con un tope para que todas sean iguales.',
        'Une las tiras alternando colores, con cinta engomada por la cara vista.',
        'Corta la lámina resultante a lo ancho, en tiras del mismo ancho que las primeras.',
        'Corre una de cada dos tiras un cuadro, de modo que los colores se alternen también en esa dirección.',
        'Une las tiras con cinta y pega el conjunto como una sola hoja.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para los cubos se usa el mismo método, pero las tiras se cortan a 60°. Un listón guía con el ángulo exacto, fijado al tablero de corte, mantiene todas las piezas iguales.' },

    { tipo: 'h2', texto: 'Precisión' },
    {
      tipo: 'lista',
      items: [
        '**Los errores se suman:** medio milímetro de diferencia en cada pieza se convierte en un centímetro después de veinte piezas. Mide con el tope, no con la regla.',
        '**Empieza por el centro** y trabaja hacia los bordes, para que los errores queden repartidos y el dibujo quede centrado.',
        '**Un borde perimetral** de cenefa o filete enmarca la composición y absorbe las diferencias en los bordes.',
        '**Veta y luz:** cambiar la dirección de la veta de una misma especie produce un dibujo que aparece y desaparece al moverse alrededor del mueble.',
      ],
    },
  ],
}

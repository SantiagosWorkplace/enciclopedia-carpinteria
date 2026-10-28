export default {
  actualizado: '2026-10-28',
  relacionados: ['diseno/proceso', 'diseno/lista-corte', 'herramientas-manuales/medir-trazar'],
  bloques: [
    { tipo: 'p', texto: 'Un plano es un mueble descrito sin palabras. Si está bien hecho, cualquier persona que conozca las convenciones del dibujo técnico puede fabricarlo igual que quien lo diseñó. No hace falta dibujar como un arquitecto: alcanza con unas pocas reglas aplicadas con constancia.' },

    { tipo: 'h2', texto: 'Tipos de dibujo' },
    {
      tipo: 'lista',
      items: [
        '**Boceto:** a mano alzada, para pensar. No necesita escala.',
        '**Plano de conjunto:** el mueble completo en varias vistas, con sus medidas generales.',
        '**Despiece:** cada pieza por separado, con todas sus medidas, uniones y agujeros.',
        '**Detalle:** una unión, un perfil o un herraje dibujado más grande, a escala 1:1 o 1:2.',
        '**Dibujo a tamaño real:** el mueble o una parte dibujada a escala 1:1 sobre papel o un tablero. Imprescindible en sillas y en piezas con curvas o ángulos.',
      ],
    },

    { tipo: 'h2', texto: 'Las vistas' },
    { tipo: 'p', texto: 'Un objeto de tres dimensiones se describe en el papel con varias vistas planas, cada una mirándolo de frente desde una dirección:' },
    { tipo: 'figura', id: 'vistas', pie: 'Una pieza de ejemplo en perspectiva y en tres vistas según el sistema europeo. Las cotas están en milímetros.' },
    {
      tipo: 'lista',
      items: [
        '**[[Alzado|alzado]]:** la vista de frente. Es la principal; se elige la que más información da.',
        '**[[Planta|planta]]:** la vista desde arriba.',
        '**Perfil:** la vista de costado, izquierdo o derecho.',
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Los dos sistemas de colocación',
      columnas: ['Sistema', 'Planta', 'Perfil izquierdo', 'Dónde se usa'],
      filas: [
        ['Europeo (primer diedro)', 'Debajo del alzado', 'A la derecha del alzado', 'Europa y gran parte de América Latina'],
        ['Americano (tercer diedro)', 'Encima del alzado', 'A la izquierda del alzado', 'Estados Unidos y Canadá'],
      ],
      nota: 'Para no confundir, indica el sistema en el plano. En la norma ISO se representa con un pequeño símbolo de un cono truncado.',
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Muchos planos de carpintería en revistas y webs usan el sistema americano o una mezcla. Antes de cortar, comprueba en qué lado está cada vista mirando una pieza que sea fácil de reconocer.' },

    { tipo: 'h2', texto: 'Cortes y secciones' },
    { tipo: 'p', texto: 'Para mostrar lo que hay dentro, como un rebajo, una ranura o el interior de un cajón, se dibuja la pieza como si se la hubiera cortado con un plano imaginario. La parte cortada se raya con líneas finas a 45°, y la posición del corte se marca en otra vista con una línea de trazo y punto y dos letras, por ejemplo A-A.' },

    { tipo: 'h2', texto: 'Tipos de línea' },
    {
      tipo: 'tabla',
      titulo: 'Líneas de un plano',
      columnas: ['Línea', 'Aspecto', 'Uso'],
      filas: [
        ['Continua gruesa', '────', 'Aristas y contornos visibles'],
        ['Discontinua', '– – – –', 'Aristas ocultas, como una espiga dentro de la caja'],
        ['Trazo y punto fina', '— · — ·', 'Ejes de simetría, centros de agujeros, planos de corte'],
        ['Continua fina', '────', 'Líneas de cota, rayado de los cortes'],
      ],
    },

    { tipo: 'h2', texto: 'Escalas' },
    { tipo: 'p', texto: 'La [[escala]] indica cuántas veces se ha reducido el objeto. A escala 1:10, 1 cm del papel son 10 cm del mueble.' },
    {
      tipo: 'tabla',
      titulo: 'Escalas habituales',
      columnas: ['Escala', 'Uso'],
      filas: [
        ['1:1', 'Detalles, plantillas, sillas a tamaño real'],
        ['1:2 y 1:5', 'Muebles pequeños, despieces'],
        ['1:10', 'Muebles medianos y grandes en una hoja A4 o A3'],
        ['1:20', 'Armarios empotrados, cocinas'],
        ['1:50', 'Distribución de muebles en una habitación'],
      ],
    },

    { tipo: 'h2', texto: 'Acotar' },
    { tipo: 'p', texto: 'Las [[cotas|cota]] dicen las medidas. En carpintería se dan siempre en **milímetros** y sin escribir la unidad. Reglas básicas:' },
    {
      tipo: 'lista',
      items: [
        'Cada medida aparece **una sola vez** en todo el plano, en la vista donde mejor se entiende.',
        'Las cotas van fuera de la pieza siempre que se pueda, con líneas auxiliares que no tocan el dibujo.',
        'Acota desde una misma referencia, como el suelo o un costado, para que los errores no se sumen.',
        'Indica las medidas totales además de las parciales: es lo primero que se busca.',
        'Los agujeros se acotan por su centro y con su diámetro (Ø).',
        'Escribe las cifras para que se lean desde abajo o desde la derecha de la hoja.',
      ],
    },

    { tipo: 'h2', texto: 'Del plano al taller' },
    {
      tipo: 'lista',
      items: [
        '**Cajetín:** en una esquina, el nombre del mueble, la escala, el sistema de vistas, la fecha y el número de hoja.',
        '**Listón de medidas:** un listón en el que se marcan a tamaño real todas las alturas o anchos del mueble. Se traslada al taller sin pasar por la cinta métrica y evita errores de lectura.',
        '**Programas de dibujo:** FreeCAD, SketchUp, Fusion o QCAD permiten dibujar en 3D o 2D, sacar vistas automáticamente y hasta generar la lista de corte.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Aunque dibujes en la computadora, imprime el plano y llévalo al banco. Anota en él cada cambio que hagas al fabricar: la próxima vez tendrás un plano probado.' },
  ],
}

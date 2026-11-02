export default {
  actualizado: '2026-10-29',
  relacionados: ['talla/herramientas-talla', 'talla/maderas-talla', 'talla/relieve', 'herramientas-manuales/medir-trazar'],
  bloques: [
    { tipo: 'p', texto: 'La [[talla geométrica|talla-geometrica]] decora una superficie con pequeñas muescas: triángulos, rombos, curvas y estrellas que se quitan de un solo golpe de cuchillo. Cada muesca deja dos o tres facetas planas que la luz pinta de tonos distintos, y su repetición forma rosetas, cenefas y mosaicos. Es la decoración tradicional de muchos baúles, cajas, cucharas y platos de madera.' },

    { tipo: 'h2', texto: 'Herramientas y madera' },
    {
      tipo: 'lista',
      items: [
        '**Cuchillo de corte:** hoja corta, recta y fina, con la punta en ángulo. Hace casi todo el trabajo.',
        '**Cuchillo de clavar:** una hoja corta que se clava en vertical para marcar muescas pequeñas, sin sacar viruta.',
        '**Para trazar:** lápiz blando, regla, compás y una goma de borrar.',
        '**Madera:** de grano fino, parejo y sin anillos marcados, como el tilo. El nogal y el cerezo también sirven, con más esfuerzo. Los pinos resinosos se desmigajan.',
      ],
    },

    { tipo: 'h2', texto: 'La muesca triangular' },
    { tipo: 'figura', id: 'talla-geometrica', pie: 'La muesca vista desde arriba y en sección: tres facetas que bajan hasta el centro. A la derecha, una roseta de seis pétalos; cada pétalo son dos facetas.' },
    { tipo: 'p', texto: 'Es la muesca base: de ella salen casi todos los diseños. Lo más hondo está en el centro del triángulo; desde ahí, las facetas suben hasta los lados y las aristas del fondo suben hasta los vértices.' },
    {
      tipo: 'pasos',
      items: [
        'Traza el triángulo y marca su centro.',
        'Haz los tres [[cortes de parada|corte-parada]]: clava la punta del cuchillo en el centro, con la hoja vertical, y llévala hacia cada vértice, cada vez menos hondo, hasta salir en la superficie en el vértice.',
        'Haz el primer corte de rebanado: con la hoja inclinada, corta a lo largo de un lado, de modo que llegue al fondo justo en el centro.',
        'Repite en los otros dos lados, siempre con la misma inclinación. La viruta debe salir entera y sola.',
        'Si la viruta no sale, no hagas palanca: vuelve a pasar los cortes de parada y el último corte, un poco más hondos.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Para practicar, empieza con triángulos de unos 10 a 20 mm de lado, que quedan de unos 2 a 4 mm de hondo. Los métodos varían entre escuelas: con práctica, muchos tallistas quitan la muesca con solo tres cortes inclinados, sin cortes de parada.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'El secreto es mantener siempre la misma inclinación de la hoja. Así las facetas de todas las muescas reflejan la luz igual y el diseño se ve parejo.' },

    { tipo: 'h2', texto: 'Cómo sostener el cuchillo' },
    {
      tipo: 'foto', src: 'fotos/talla/talla-geometrica.jpg', ancho: 1000, alto: 666,
      alt: 'Manos que tallan muescas en una tabla clara con un cuchillo corto',
      pie: 'Talla geométrica: el cuchillo corto saca pequeñas muescas triangulares. El pulgar de la otra mano empuja la hoja.',
      credito: { autor: 'Jonathunder', licencia: 'CC BY-SA 3.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/3.0', fuente: 'https://commons.wikimedia.org/wiki/File:ChipCarving.JPG' },
    },
    {
      tipo: 'lista',
      items: [
        '**Primera posición:** el cuchillo en la mano como para pelar una papa, con el nudillo del pulgar apoyado en la madera. La mano y el pulgar se mueven juntos; el pulgar hace de tope.',
        '**Segunda posición:** el cuchillo al revés, con el pulgar apoyado en el lomo de la hoja. Sirve para los cortes en sentido contrario sin tener que girar la pieza.',
        '**La pieza gira:** en lugar de cambiar la mano a posiciones incómodas, gira la tabla para que cada corte vaya a favor de la veta.',
      ],
    },

    { tipo: 'h2', texto: 'Diseños' },
    {
      tipo: 'tabla',
      titulo: 'Motivos de la talla geométrica',
      columnas: ['Motivo', 'Cómo se hace', 'Dónde se usa'],
      filas: [
        ['Cenefa de triángulos', 'Una cuadrícula de líneas paralelas; triángulos alternados', 'Bordes de tapas, marcos y cajas'],
        ['Rombos y estrellas', 'Varias muescas triangulares unidas por un vértice', 'Centros y esquinas'],
        ['Roseta', 'Pétalos trazados con el compás; cada pétalo, dos facetas', 'Centro de tapas, platos y respaldos'],
        ['Formas libres', 'Muescas curvas que siguen un dibujo, como hojas o letras', 'Inscripciones y motivos figurativos'],
      ],
    },
    {
      tipo: 'pasos',
      items: [
        'Para trazar una roseta de seis pétalos, dibuja un círculo con el compás.',
        'Sin cambiar la abertura del compás, apoya la punta en cualquier punto del círculo y traza un arco de borde a borde que pase por el centro.',
        'Apoya la punta donde ese arco cortó el círculo y repite. Seis arcos forman los seis pétalos.',
      ],
    },

    { tipo: 'h2', texto: 'Terminar' },
    { tipo: 'p', texto: 'Borra las líneas de lápiz que queden con una goma suave, sin lijar: la lija redondea las aristas de las facetas, y la gracia de la talla está en esas aristas vivas. Como acabado se usa un aceite ligero, cera o un barniz muy fino. Un acabado grueso se acumula en el fondo de las muescas y apaga el dibujo.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'La mano que sostiene la pieza nunca debe estar delante del recorrido de la hoja. Protege el pulgar que hace de tope con cinta o con un dedal de cuero.' },
  ],
}

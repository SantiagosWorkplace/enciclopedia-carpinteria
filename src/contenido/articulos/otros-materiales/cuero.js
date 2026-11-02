export default {
  actualizado: '2026-11-02',
  relacionados: ['diseno/sillas', 'diseno/ergonomia', 'herrajes/adhesivos', 'taller/salud-seguridad'],
  bloques: [
    { tipo: 'p', texto: 'Un asiento tapizado o una tapa forrada en cuero completan muchos muebles de madera. El tapizado tradicional, con muelles y crin, es un oficio aparte. Pero un asiento suelto con espuma, o una tapa de escritorio forrada, están al alcance de cualquier taller con una grapadora y paciencia.' },

    { tipo: 'h2', texto: 'El asiento suelto' },
    { tipo: 'p', texto: 'Es la forma más sencilla de tapizar una silla: un tablero acolchado y forrado que encaja en el hueco del bastidor y se atornilla desde abajo. Se quita en minutos para cambiar la tela.' },
    { tipo: 'figura', id: 'capas-tapizado', pie: 'Despiece en sección de un asiento suelto. Cada capa va encima de la anterior; la tela envuelve todo y se grapa por debajo del tablero.' },
    {
      tipo: 'tabla',
      titulo: 'Materiales',
      columnas: ['Capa', 'Material', 'Detalle'],
      filas: [
        ['Base', 'Contrachapado de ≈ 9 – 12 mm', 'Con agujeros de ≈ 10 mm para que el aire salga al sentarse'],
        ['Acolchado', 'Espuma de poliuretano de alta densidad, ≈ 3 – 5 cm', 'La espuma blanda se aplasta y en poco tiempo se siente la madera'],
        ['Capa intermedia', '[[Guata|guata]] de poliéster', 'Redondea las aristas de la espuma y evita que la tela roce'],
        ['Cubierta', 'Tela de tapicería o cuero', 'Las telas de tapicería indican su resistencia al roce en la ficha'],
        ['Fondo', 'Tela negra fina', 'Tapa las grapas y los bordes de la tela por debajo'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Para asientos se suele recomendar espuma de ≈ 30 kg/m³ o más; los proveedores la clasifican por densidad y firmeza. Pide la ficha y, si el mueble es para un lugar público, espuma con tratamiento ignífugo.' },
    { tipo: 'p', texto: 'En sillas sin tablero, el asiento se arma sobre [[cinchas|cincha]] tensadas sobre el bastidor, entrecruzadas, que sostienen la espuma con más elasticidad. Las medidas de un asiento cómodo se explican en [Ergonomía y medidas del cuerpo](#/diseno/ergonomia).' },
    {
      tipo: 'foto', src: 'fotos/otros-materiales/cinchas.jpg', ancho: 1000, alto: 692,
      alt: 'Bastidor de madera de un asiento con cinchas negras entrecruzadas y muelles en zigzag',
      pie: 'Bastidor de un asiento con cinchas entrecruzadas sobre muelles en zigzag, antes de colocar la espuma.',
      credito: { autor: 'Eugenepik', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Leather_chair_upholstery_by_Eugene_Pik_(2022)_04.jpg' },
    },

    { tipo: 'h2', texto: 'Paso a paso' },
    {
      tipo: 'pasos',
      items: [
        'Corta el tablero ≈ 3 mm más chico por lado que el hueco del asiento, para dejar lugar a la tela. Redondea las aristas superiores y taladra los agujeros.',
        'Corta la espuma del tamaño del tablero o apenas más grande, con un cúter de hoja larga o un cuchillo eléctrico. Pégala con adhesivo de contacto para espuma.',
        'Cubre con guata y recórtala al ras del borde inferior del tablero.',
        'Corta la tela con ≈ 8 cm de margen por lado. Si tiene dibujo o una dirección de pelo, céntrala y oriéntala hacia el frente.',
        'Grapa por debajo en el centro de cada lado, tensando la tela parejo, y sigue hacia las esquinas.',
        'Resuelve las esquinas: tira de la punta en diagonal, grápala, pliega los dos lados y recorta lo que sobre.',
        'Grapa la tela de fondo, encaja el asiento y atorníllalo desde abajo.',
      ],
    },
    { tipo: 'figura', id: 'grapar-tela', pie: 'A la izquierda, el asiento visto desde abajo: primero se grapa el centro de cada lado y después hacia las esquinas. A la derecha, cómo se pliega una esquina.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Si la tela queda con arrugas, quita las grapas de esa zona con un sacagrapas y vuelve a tensar. Pon al principio pocas grapas, separadas, y completa cuando todo esté parejo.' },

    { tipo: 'h2', texto: 'Cuero' },
    { tipo: 'p', texto: 'El cuero es la piel curtida de un animal. Se vende por pieza entera o media pieza, con la forma del animal, y por eso se aprovecha menos que una tela en rollo: hay bordes irregulares, marcas y zonas más flojas que conviene evitar.' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de cuero',
      columnas: ['Tipo', 'Cómo es', 'Uso'],
      filas: [
        ['[[Plena flor|plena-flor]]', 'Superficie original de la piel, con sus poros y marcas; la más resistente', 'Asientos y tapas de calidad; mejora con el uso'],
        ['Flor corregida', 'Superficie lijada y pintada; aspecto parejo', 'Tapizado económico y resistente a manchas'],
        ['[[Serraje|serraje]]', 'Capa interior de la piel, aterciopelada', 'Detalles; se mancha y se gasta antes'],
        ['[[Curtido vegetal|curtido-vegetal]]', 'Firme, se oscurece con la luz; se puede repujar', 'Tapas de escritorio, bordes, tiradores'],
        ['[[Curtido al cromo|curtido-cromo]]', 'Blando, flexible y de color estable', 'Tapizado sobre espuma'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'El espesor habitual para tapicería ronda ≈ 1 – 1,4 mm, y para forrar tapas ≈ 0,8 – 1,2 mm. Compra con margen: según la calidad y la forma de las piezas, se desperdicia una parte importante de cada piel.' },

    { tipo: 'h3', texto: 'Forrar una tapa de escritorio' },
    {
      tipo: 'pasos',
      items: [
        'Rebaja la zona a forrar ≈ 1 mm, el espesor del cuero, para que quede al ras del marco de madera.',
        'Corta el cuero algo más grande que el rebaje.',
        'Extiende una capa fina y pareja de cola: de almidón o vinílica diluida, que dan tiempo para acomodar el cuero.',
        'Apoya el cuero desde el centro hacia los bordes, alisando con un paño limpio para sacar el aire.',
        'Cuando la cola haya tomado, recorta el sobrante contra el borde del rebaje con un cúter muy afilado.',
      ],
    },
    { tipo: 'p', texto: 'Los adhesivos se comparan en [Adhesivos](#/herrajes/adhesivos).' },

    { tipo: 'h2', texto: 'Cuidado' },
    {
      tipo: 'lista',
      items: [
        '**Limpieza:** un paño apenas húmedo; nada de disolventes ni alcohol.',
        '**Nutrición:** una crema para cuero, una o dos veces por año, evita que se reseque y se agriete.',
        '**Luz y calor:** el sol directo y las estufas lo resecan y lo decoloran.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Las grapadoras neumáticas disparan con fuerza: nunca pongas los dedos delante de la boca ni la apuntes a nadie. La espuma de poliuretano arde con facilidad y produce humo tóxico: guárdala lejos de chispas y llamas.' },
  ],
}

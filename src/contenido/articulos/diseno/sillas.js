export default {
  actualizado: '2026-10-28',
  relacionados: ['diseno/ergonomia', 'diseno/estructura', 'uniones/caja-espiga', 'uniones/clavijas-galletas'],
  bloques: [
    { tipo: 'p', texto: 'La silla es el mueble más difícil de construir. Es liviana pero soporta a una persona que se deja caer, se mece y se apoya en el respaldo; casi ninguna de sus piezas está a escuadra con las demás, y la comodidad depende de pocos centímetros. Por eso conviene empezar por diseños probados y hacer siempre un prototipo.' },

    { tipo: 'h2', texto: 'Partes de una silla' },
    { tipo: 'figura', id: 'partes-silla', pie: 'Silla de comedor vista de costado, a escala. Medidas en centímetros.' },
    {
      tipo: 'lista',
      items: [
        '**Patas traseras:** en muchas sillas siguen hacia arriba como [[montantes|montante]] del respaldo, de una sola pieza. Se cortan con una plantilla y, como tienen un quiebre, hay que cuidar que no quede [veta corta](#/diseno/estructura).',
        '**Patas delanteras:** suelen ser rectas; a veces se abren hacia afuera o hacia adelante.',
        '**[[Faldones|faldon]]:** los cuatro travesaños bajo el asiento. Forman el bastidor que mantiene la silla en escuadra.',
        '**[[Chambranas|chambrana]]:** travesaños bajos que unen las patas y reducen la palanca sobre las uniones del faldón.',
        '**Asiento:** macizo y esculpido, tapizado sobre un bastidor, o tejido con cuerda, enea o rejilla.',
        '**Respaldo:** travesaños, tablillas o un panel entre los montantes.',
      ],
    },

    { tipo: 'h2', texto: 'Medidas y ángulos' },
    {
      tipo: 'datos',
      items: [
        ['Altura del asiento (delante)', '43 – 46 cm'],
        ['Fondo del asiento', '40 – 45 cm'],
        ['Ancho del asiento', '≥ 40 cm delante; puede estrecharse 3 – 5 cm hacia atrás'],
        ['Inclinación del asiento', 'Cae 3 – 5° hacia atrás: ≈ 2 – 4 cm más bajo atrás que delante'],
        ['Ángulo asiento – respaldo', '≈ 95 – 105° para comer; más abierto para descansar'],
        ['Apoyo lumbar', 'El respaldo sostiene la zona lumbar a ≈ 20 – 25 cm sobre el asiento'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Un respaldo plano y vertical es incómodo aunque las medidas sean correctas. Inclínalo y, si puedes, curva ligeramente las tablillas o el travesaño para que acompañen la espalda.' },

    { tipo: 'h2', texto: 'Tipos de construcción' },
    {
      tipo: 'tabla',
      titulo: 'Las tres familias principales',
      columnas: ['Tipo', 'Cómo se arma', 'Uniones típicas'],
      filas: [
        ['De bastidor', 'Cuatro patas unidas por faldones y chambranas; el asiento se apoya sobre el bastidor', 'Caja y espiga, espigas redondas, refuerzos de esquina'],
        ['De asiento macizo', 'Patas y respaldo se encastran en un asiento grueso, como en las sillas tipo Windsor', 'Espigas cónicas o cilíndricas acuñadas en agujeros del asiento'],
        ['De tablero', 'Piezas planas de contrachapado o tablero, a veces curvadas', 'Tornillos, herrajes, espigas planas'],
      ],
    },

    { tipo: 'h2', texto: 'Dónde se rompen las sillas' },
    { tipo: 'p', texto: 'La situación más exigente es la persona que se mece sobre las patas traseras. La pata funciona como una palanca larga y la unión con el faldón lateral recibe todo el esfuerzo. Para que aguante:' },
    {
      tipo: 'lista',
      items: [
        '**Faldones anchos:** de 7 a 9 cm de alto, con espigas tan largas como permita la pata.',
        '**Cajas que no se crucen:** en la pata, las cajas del faldón delantero o trasero y del lateral se encuentran; se escalonan en altura o se cortan las espigas en inglete para aprovechar todo el largo.',
        '**Chambranas,** sobre todo laterales, a 12 – 18 cm del suelo.',
        '**Esquineros** atornillados y encolados por dentro del bastidor, que además sirven para fijar el asiento.',
        '**Madera de veta recta** y sin nudos en patas y faldones: roble, fresno, haya, arce o nogal.',
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Las sillas se aflojan con los años por los cambios de humedad: las espigas se aplastan un poco dentro de las cajas cada vez que se hinchan. Usar madera bien seca, ajustes precisos y una buena cola retrasa mucho el problema.' },

    { tipo: 'h2', texto: 'Ángulos compuestos' },
    { tipo: 'p', texto: 'Si las patas se abren hacia los costados y hacia atrás a la vez, cada unión tiene un ángulo en dos planos. La forma más segura de no equivocarse:' },
    {
      tipo: 'pasos',
      items: [
        'Dibuja la silla a tamaño real en un tablero: de frente, de costado y en planta.',
        'Mide los ángulos directamente sobre el dibujo con una falsa escuadra y anótalos.',
        'Prepara plantillas o calzos de cada ángulo para taladrar y cortar siempre igual.',
        'Arma la silla en seco, sin cola, y comprueba que asienta en las cuatro patas.',
        'Encola por etapas: primero el frente y la trasera como dos marcos, después los laterales.',
      ],
    },

    { tipo: 'h2', texto: 'Antes de dar la silla por buena' },
    {
      tipo: 'lista',
      items: [
        'Siéntate en ella al menos un rato, como si comieras y como si charlaras.',
        'Comprueba que no cojea en un suelo plano. Si cojea, se corrige recortando la pata más larga con la silla sobre una superficie plana.',
        'Revisa que no haya aristas vivas en el borde delantero del asiento, donde apoyan los muslos.',
        'Ponle conteras de fieltro o de plástico para que las patas no rayen el suelo ni absorban humedad por la testa.',
      ],
    },
  ],
}

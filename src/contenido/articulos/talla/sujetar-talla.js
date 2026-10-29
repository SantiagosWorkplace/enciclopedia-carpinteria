export default {
  actualizado: '2026-10-29',
  relacionados: ['taller/sujecion-banco', 'taller/banco', 'talla/relieve', 'talla/bulto'],
  bloques: [
    { tipo: 'p', texto: 'Para tallar se necesitan las dos manos en la herramienta: una empuja y la otra guía. Por eso la pieza tiene que estar sujeta, firme y sin moverse. Además, conviene poder girarla o inclinarla para llegar a cada parte con el ángulo justo y sin cortar contra la veta.' },

    { tipo: 'h2', texto: 'Los métodos' },
    { tipo: 'figura', id: 'sujecion-talla', pie: 'El tornillo y la rótula, de costado; el tablero con topes, visto desde arriba. Las cuñas aprietan la pieza contra los topes fijos.' },
    {
      tipo: 'tabla',
      titulo: 'Formas de sujetar una talla',
      columnas: ['Método', 'Cómo funciona', 'Para qué'],
      filas: [
        ['Prensas', 'Aprietan la pieza contra el banco, con un taco de madera entre la prensa y la pieza', 'Tablas y relieves; rápido, pero las prensas estorban'],
        ['[[Gato|gato]]', 'Se traba en un agujero del banco con un golpe de mazo', 'Relieves; se cambia de lugar en segundos'],
        ['Tornillo de banco', 'Con tacos de madera en las mordazas', 'Piezas largas, cantos y molduras'],
        ['Tablero con topes y cuñas', 'Un tablero con listones fijos; cuñas dobles aprietan la pieza contra ellos', 'Relieves: la pieza se saca y se gira al instante'],
        ['[[Tornillo de tallista|tornillo-tallista]]', 'Se enrosca en la base de la pieza, atraviesa el banco y se aprieta con una tuerca de mariposa por debajo', 'Tallas de bulto: se gira aflojando la tuerca'],
        ['Rótula de tallista', 'Un brazo con una articulación de bola, fijado al banco', 'Tallas de bulto medianas; gira e inclina en cualquier dirección'],
        ['Saco de arena o de cuero', 'Un almohadón de cuero relleno de arena', 'Cuencos y piezas redondas pequeñas'],
      ],
    },

    { tipo: 'h2', texto: 'El tornillo de tallista' },
    {
      tipo: 'pasos',
      items: [
        'Deja en la base de la pieza una zona de desperdicio, o elige una cara que vaya a quedar oculta.',
        'Haz un agujero guía del diámetro que indique el fabricante del tornillo y enrosca la punta de rosca para madera.',
        'Pasa el otro extremo por un agujero del banco.',
        'Coloca la arandela y aprieta la tuerca de mariposa desde abajo.',
        'Para girar la pieza, afloja la tuerca, gírala y vuelve a apretar.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Un taco de madera con la base plana entre la pieza y el banco eleva la talla y deja espacio para las manos y la herramienta en la parte de abajo.' },

    { tipo: 'h2', texto: 'Pegar con papel' },
    { tipo: 'p', texto: 'Para tallas finas o caladas, que no soportan prensas, se pega la pieza a un tablero auxiliar con una hoja de papel en medio. El tablero se sujeta al banco con cualquiera de los métodos anteriores, y la pieza queda firme y sin marcas.' },
    {
      tipo: 'pasos',
      items: [
        'Pon cola en el tablero auxiliar y apoya una hoja de papel de diario o de papel de estraza.',
        'Pon cola sobre el papel, coloca la pieza y prensa.',
        'Deja secar el tiempo completo que indique la cola.',
        'Al terminar, mete una espátula o un formón ancho en la junta y haz palanca con cuidado: el papel se parte por la mitad.',
        'Quita los restos de papel y de cola con un rascador o con agua tibia.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La fuerza de la unión depende de la cola y del papel. Haz una prueba en un recorte: si cuesta separarlo, usa un papel más fino o menos cola.' },

    { tipo: 'h2', texto: 'El banco de tallista' },
    {
      tipo: 'lista',
      items: [
        '**Más alto que un banco de carpintería:** a la altura del codo o un poco más, para trabajar sin agacharse y ver la pieza de cerca.',
        '**Pesado y estable:** los golpes de mazo no deben mover el banco.',
        '**Con espacio libre alrededor:** para trabajar desde varios lados.',
        '**Luz lateral:** una lámpara baja de un costado marca las formas con sombras. Ver [Talla en relieve](#/talla/relieve).',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'No sostengas la pieza con una mano mientras empujas una gubia con la otra: si la gubia resbala, va derecho a la mano. Si tienes que tallar con la pieza en la mano, usa un cuchillo, un guante anticorte en la mano que la sostiene y cortes cortos y controlados.' },
  ],
}

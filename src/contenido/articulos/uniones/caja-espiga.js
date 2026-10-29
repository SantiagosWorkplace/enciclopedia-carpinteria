export default {
  actualizado: '2026-10-29',
  relacionados: ['uniones/visor', 'uniones/media-madera', 'diseno/sillas', 'diseno/mesas'],
  bloques: [
    { tipo: 'p', texto: 'La [[caja]] y [[espiga]] es la unión clásica de marcos, mesas, sillas y puertas. La espiga, tallada en el extremo de una pieza, entra ajustada en la caja, un hueco abierto en la otra. Resiste muy bien la palanca y el descuadre porque la espiga queda sujeta en toda su longitud. Además encola sus dos [[mejillas|mejilla]], de veta larga, contra las paredes de la caja.' },

    { tipo: 'h2', texto: 'Las partes' },
    {
      tipo: 'lista',
      items: [
        '**Espiga:** la lengüeta que entra.',
        '**[[Mejillas|mejilla]]:** las dos caras anchas de la espiga, las que más encolan.',
        '**[[Hombros|hombro]]:** las superficies que rodean la espiga y apoyan contra la cara de la otra pieza. Si cierran bien, la unión se ve limpia y resiste el descuadre.',
        '**Caja:** el hueco. Sus paredes largas siguen la veta de la pieza.',
      ],
    },

    { tipo: 'h2', texto: 'Proporciones' },
    {
      tipo: 'datos',
      items: [
        ['Espesor de la espiga', '≈ 1/3 del espesor del travesaño, ajustado al formón más cercano'],
        ['Largo de una espiga ciega', 'Lo mayor posible sin debilitar la pata; en patas de mesa suele ir de 25 a 40 mm'],
        ['Fondo de la caja', '≈ 2 mm más que el largo de la espiga, para la cola sobrante'],
        ['Distancia de la caja al extremo', 'Se deja la pata más larga durante el trabajo y se corta después'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las proporciones son orientativas. En sillas y en piezas que reciben mucha palanca se usan espigas más largas, y en patas donde se encuentran dos espigas, se cortan sus puntas a inglete para que no choquen.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Ese sobrante del extremo de la pata se llama cuerno. Evita que la madera se raje al abrir la caja cerca de la testa y se corta una vez encolado.' },

    { tipo: 'h2', texto: 'Variantes' },
    { tipo: 'figura', id: 'variantes-espiga', pie: 'La pata está cortada para mostrar la espiga dentro de la caja. En la pasante acuñada, la caja se abre un poco hacia afuera para alojar las cuñas.' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de caja y espiga',
      columnas: ['Variante', 'Cómo es', 'Uso'],
      filas: [
        ['Ciega', 'La espiga no atraviesa la pieza', 'Mesas, sillas, marcos: la más común'],
        ['Pasante', 'La espiga atraviesa y se ve del otro lado', 'Muebles de estilo rústico o artesanal, bancos'],
        ['Acuñada', 'Pasante, con cuñas en cortes de sierra que la abren', 'No sale aunque la cola falle'],
        ['Con clavija', 'Una clavija atraviesa pata y espiga', 'Puertas, entramados; se puede armar sin prensas'],
        ['Con resalte', 'Un tramo corto junto al extremo llena la caja sin abrirla hasta la testa', 'Marcos de puerta, patas con faldón en el extremo'],
        ['Doble', 'Dos espigas, una al lado de la otra o una sobre otra', 'Travesaños anchos o gruesos'],
        ['Suelta o postiza', 'Las dos piezas tienen caja y una espiga aparte las une', 'Hecha con fresadora o máquina de espigas planas'],
        ['Con chaveta', 'Pasante y larga; una cuña atraviesa la parte que sale', 'Muebles desmontables, sin cola'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'En la espiga con clavija, el agujero de la espiga se perfora 1 – 2 mm más cerca del hombro que el de la pata. Al meter la clavija, tira de la espiga y cierra los hombros con fuerza. Se llama espiga tirada.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'En travesaños muy anchos, una sola espiga ancha encoge con la humedad y se afloja. Se divide en dos espigas con un resalte entre ellas.' },

    { tipo: 'h2', texto: 'Cómo se hace' },
    {
      tipo: 'pasos',
      items: [
        'Marca la caja: largo con lápiz y escuadra, ancho con un gramil de dos puntas ajustado al formón que vas a usar.',
        'Marca la espiga con el mismo gramil sin cambiar su ajuste, siempre desde la cara de referencia. Así caja y espiga coinciden aunque no estén centradas exactas.',
        'Abre la caja: con un formón de cajear, golpeando desde el centro hacia los extremos, o perforando una hilera de agujeros y limpiando con el formón. Con máquinas, con una escopleadora o con la fresadora y una guía.',
        'Sierra las mejillas de la espiga por el lado del desperdicio, primero en diagonal desde cada esquina y al final recto.',
        'Sierra los hombros con la pieza plana sobre el banco, contra un gancho de banco.',
        'Ajusta las mejillas con un guillame o un formón ancho hasta que la espiga entre con presión de la mano. Si necesita martillo, está demasiado justa: al encolar se hincha y puede rajar la caja.',
        'Prueba en seco, comprueba la escuadra y encola las paredes de la caja y las mejillas, con poca cola en el fondo.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Al cajear con formón y mazo, la pieza tiene que estar sujeta al banco con prensas o un gato, nunca sostenida con la mano.' },
  ],
}

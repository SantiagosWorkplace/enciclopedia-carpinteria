export default {
  actualizado: '2026-11-02',
  relacionados: ['taller/banco', 'herramientas-manuales/prensas', 'herramientas-manuales/sierras', 'herramientas-manuales/cepillos'],
  bloques: [
    { tipo: 'p', texto: 'Una pieza que se mueve no se puede trabajar con precisión, y una pieza sostenida con la mano deja una sola mano para la herramienta. Sujetar bien la pieza es la mitad de la técnica de cualquier trabajo a mano, y también una cuestión de seguridad.' },

    { tipo: 'h2', texto: 'Cuatro formas básicas' },
    { tipo: 'figura', id: 'sujecion-banco', pie: 'Las flechas rojas muestran hacia dónde empuja la herramienta o el tornillo.' },
    {
      tipo: 'galeria',
      pie: 'Gato y perros en bancos reales.',
      fotos: [
        { src: 'fotos/taller/gato.jpg', alt: 'Gato de hierro colocado en un agujero de la tapa del banco', pie: 'Gato: el gancho de hierro entra en un agujero de la tapa y aprieta la pieza.', ancho: 800, alto: 600, credito: { autor: 'Bob Key', licencia: 'Dominio público', licenciaUrl: 'https://creativecommons.org/publicdomain/mark/1.0/deed.es', fuente: 'https://commons.wikimedia.org/wiki/File:Holdfast.jpg' } },
        { src: 'fotos/taller/perros.jpg', alt: 'Dos perros de madera asomando de la tapa junto a un tornillo metálico', pie: 'Dos perros asomando de la tapa, junto a un tornillo de pecho metálico.', ancho: 700, alto: 933, credito: { autor: 'Bob Key', licencia: 'Dominio público', licenciaUrl: 'https://creativecommons.org/publicdomain/mark/1.0/deed.es', fuente: 'https://commons.wikimedia.org/wiki/File:Twobenchdogs.jpg' } },
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Perros y tornillo de cola:** la pieza queda entre un perro fijo y otro en el tornillo, que aprieta. Ideal para cepillar caras de tablas.',
        '**[[Gato|gato]]:** un gancho de hierro que se mete en un agujero de la tapa. Un golpe de mazo arriba lo traba y aprieta la pieza; un golpe atrás lo suelta. Es rapidísimo para tallar, formonear o serrar.',
        '**[[Gancho de banco|gancho-banco]]:** se engancha en el canto del banco y la pieza se apoya contra su taco superior. Para serrar al través y ajustar con el formón.',
        '**Tope de cepillar:** un taco que sobresale unos milímetros de la tapa. La pieza se apoya contra él y el propio cepillo la empuja.',
      ],
    },

    { tipo: 'h2', texto: 'Tornillos de banco' },
    {
      tipo: 'foto', src: 'fotos/taller/tornillo-dos-husillos.jpg', ancho: 640, alto: 480,
      alt: 'Banco de madera clara con un tornillo de dos husillos en el frente',
      pie: 'Banco con un tornillo de pecho de dos husillos en el frente.',
      credito: { autor: 'Bob Key', licencia: 'Dominio público', licenciaUrl: 'https://creativecommons.org/publicdomain/mark/1.0/deed.es', fuente: 'https://commons.wikimedia.org/wiki/File:Twinscrewvise.jpg' },
    },
    {
      tipo: 'tabla',
      titulo: 'Tipos de tornillo',
      columnas: ['Tornillo', 'Uso'],
      filas: [
        ['De pecho', 'En el frente del banco; sujeta piezas de canto para cepillar cantos o de punta para serrar espigas y colas'],
        ['De cola', 'En el extremo; aprieta piezas entre perros a lo largo de la tapa'],
        ['De pierna', 'Una mordaza larga que baja hasta el suelo con un pasador abajo; sujeta tablas anchas de canto'],
        ['Doble (tipo Moxon)', 'Dos husillos; se coloca sobre el banco y eleva la pieza a la altura de los ojos para serrar colas de milano'],
        ['Metálico de ajustador', 'Mordazas de hierro; mejor reservarlo para metal o forrar las mordazas con madera'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Forra las mordazas de cualquier tornillo con madera blanda o cuero. Protegen la pieza y agarran mejor que el metal.' },

    { tipo: 'h2', texto: 'Otros recursos' },
    {
      tipo: 'lista',
      items: [
        '**Tabla de refrentar:** una base con un tope a 90° por la que corre el cepillo de costado, para dejar las testas exactamente a escuadra.',
        '**Prensas al banco:** cualquier sargento sirve para fijar una pieza al canto de la tapa si no hay tornillo.',
        '**Prensas de palanca:** se atornillan a una plantilla o a la mesa y sujetan con un movimiento de la mano.',
        '**Cuñas:** entre la pieza y un tope, para sujetar piezas de forma irregular.',
        '**Alfombra antideslizante:** una malla de goma bajo la pieza alcanza para lijar o fresar piezas livianas.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Con formones, gubias y fresadoras, la pieza siempre sujeta y las dos manos en la herramienta. Sostener la pieza con una mano frente al filo es la causa más común de cortes en el taller.' },
  ],
}

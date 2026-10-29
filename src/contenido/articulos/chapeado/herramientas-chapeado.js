export default {
  actualizado: '2026-10-29',
  relacionados: ['madera/chapas', 'chapeado/preparar-chapa', 'chapeado/chapeado-mano', 'chapeado/chapeado-prensa'],
  bloques: [
    { tipo: 'p', texto: 'Chapear necesita pocas herramientas, pero muy precisas. La [[chapa]] es tan fina que una cuchilla sin filo la desgarra, una regla que se mueve tuerce la junta y un poco de cola de más atraviesa la hoja. Este artículo reúne lo necesario para cortar, unir y pegar chapa a mano y con prensa.' },

    { tipo: 'h2', texto: 'Cortar y unir' },
    { tipo: 'figura', id: 'herramientas-chapeado', pie: 'Las herramientas básicas, esquemáticas. El martillo de chapear tiene una tira de latón en el borde que aprieta la chapa.' },
    {
      tipo: 'tabla',
      titulo: 'Herramientas de corte y unión',
      columnas: ['Herramienta', 'Para qué sirve', 'Detalles'],
      filas: [
        ['Sierra de chapa', 'Cortes rectos contra una regla, sin desgarrar', 'Hoja curva con dientes finos sin triscado; corta en las dos direcciones'],
        ['Cúter de hoja fija', 'Cortes rectos y recortes', 'Hojas nuevas a mano: se cambian en cuanto arrastran'],
        ['Bisturí', 'Cortes curvos y marquetería', 'Hojas de punta fina intercambiables'],
        ['Regla metálica', 'Guía de la cuchilla', 'Gruesa y con base antideslizante; nunca de plástico'],
        ['Tabla de refrentar', 'Rectificar los cantos de las hojas', 'Con un cepillo bien afilado, las hojas prensadas entre dos listones'],
        ['Gramil de corte', 'Cortar tiras paralelas a un canto', 'Una cuchilla en lugar de la punta de trazar'],
        ['Cinta engomada', 'Unir las hojas por la cara vista', 'Papel con cola que se activa con agua; se quita después con agua y rasqueta'],
        ['Tablero de corte', 'Base para cortar', 'MDF o una plancha de corte; se reemplaza cuando se marca'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Corta siempre con varias pasadas suaves en lugar de una fuerte. La primera, apenas marcada, guía a las siguientes y evita que la cuchilla siga la veta.' },

    { tipo: 'h2', texto: 'Pegar' },
    {
      tipo: 'tabla',
      titulo: 'Herramientas para pegar',
      columnas: ['Herramienta', 'Método', 'Uso'],
      filas: [
        ['[[Martillo de chapear|martillo-chapear]]', 'A mano con cola caliente', 'No golpea: se arrastra apretando para sacar el aire y la cola sobrante'],
        ['Cazo de cola al baño María', 'A mano con [[cola animal|cola-animal]]', 'Mantiene la cola a temperatura sin hervirla'],
        ['Plancha', 'A mano', 'Reactiva la cola animal o la vinílica seca y aplana'],
        ['Rodillo de goma', 'Reparto de cola y cola de contacto', 'Capa pareja y fina'],
        ['Tableros de presión y travesaños curvos', 'Prensa', 'Reparten la presión de las prensas sobre toda la superficie'],
        ['Bolsa de vacío con bomba', 'Vacío', 'Superficies grandes y curvas'],
        ['Rascador y taco de lija', 'Terminación', 'Igualan la superficie sin atravesar la chapa'],
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Las cuchillas de chapear cortan la piel sin esfuerzo. Mantén la mano que sujeta la regla lejos de la línea de corte, corta alejando la cuchilla del cuerpo y guarda las hojas usadas en un recipiente cerrado.' },
  ],
}

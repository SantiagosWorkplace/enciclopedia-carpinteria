export default {
  actualizado: '2026-10-30',
  relacionados: ['uniones/encolado', 'chapeado/chapeado-mano', 'curvado/laminado', 'acabados/seguridad-acabados'],
  bloques: [
    { tipo: 'p', texto: 'No hay una cola para todo. Cada adhesivo tiene su tiempo de trabajo, su resistencia al agua y al calor, y su forma de aplicarse. Elegir bien es la mitad del encolado; la otra mitad es la preparación y el prensado, que se explican en [Encolado y prensado](#/uniones/encolado).' },

    { tipo: 'h2', texto: 'Cómo pega una cola' },
    { tipo: 'p', texto: 'La mayoría de las colas para madera entran en los poros y las fibras de las dos piezas y se endurecen dentro. Por eso pegan mejor sobre madera recién cepillada o lijada, limpia y bien ajustada. El endurecimiento se llama [[fraguado]]: unas colas fraguan al evaporarse el agua, otras por una reacción química y otras al enfriarse.' },

    { tipo: 'h2', texto: 'Tipos' },
    {
      tipo: 'tabla',
      titulo: 'Adhesivos para carpintería',
      columnas: ['Adhesivo', 'Cómo es', 'Uso'],
      filas: [
        ['[[Cola vinílica|cola-vinilica]]', 'Blanca o amarilla, al agua; fragua al secarse. Limpia, barata y sin olor', 'Casi todas las uniones de interior'],
        ['Vinílica resistente al agua', 'Vinílica de clase D3 o D4', 'Cocinas, baños, muebles de exterior protegidos'],
        ['[[Cola animal|cola-animal]]', 'Se aplica caliente o líquida; reversible con calor y humedad', 'Restauración, chapeado a mano, instrumentos'],
        ['[[Poliuretano|cola-poliuretano]]', 'Fragua con la humedad y espuma al hacerlo; muy resistente al agua', 'Exterior, maderas aceitosas, uniones con huecos pequeños'],
        ['[[Epoxi|epoxi]]', 'Dos componentes que se mezclan; rellena huecos y pega casi todo', 'Exterior, náutica, madera con metal, reparaciones'],
        ['Urea-formaldehído', 'En polvo para mezclar con agua; muy rígida, no se deforma', 'Laminado curvado y chapeado en prensa'],
        ['[[De contacto|cola-contacto]]', 'Se aplica en ambas caras y pega al instante al unirlas', 'Laminados plásticos, cuero, cantos'],
        ['[[Cianoacrilato|cianoacrilato]]', 'Pega en segundos, en capa muy fina', 'Retoques, piezas pequeñas, fijar astillas'],
        ['[[Termofusible|termofusible]]', 'Se funde con una pistola y fragua al enfriarse', 'Plantillas, fijaciones provisorias, maquetas'],
      ],
    },
    { tipo: 'figura', id: 'aplicar-cola', pie: 'La vinílica se pone en una cara y se reparte. La de contacto va en las dos caras y se espera a que esté seca al tacto antes de unir. El epoxi se mezcla en la proporción justa y se usa enseguida.' },

    { tipo: 'h2', texto: 'Resistencia al agua' },
    { tipo: 'p', texto: 'Las colas vinílicas se clasifican según su resistencia al agua con las clases D1 a D4, de la norma europea EN 204. La clase figura en el envase.' },
    {
      tipo: 'tabla',
      titulo: 'Clases de durabilidad',
      columnas: ['Clase', 'Dónde aguanta'],
      filas: [
        ['D1', 'Interior seco'],
        ['D2', 'Interior con humedad ocasional'],
        ['D3', 'Interior con agua frecuente, como cocinas y baños; exterior protegido de la lluvia'],
        ['D4', 'Interior con agua frecuente y exterior a la intemperie, con un buen acabado'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las clases se miden en ensayos de laboratorio; la duración real al exterior depende del diseño, del acabado y del clima. Para piezas que van a estar mojadas mucho tiempo, como un bote, usa epoxi o una cola específica.' },

    { tipo: 'h2', texto: 'Cómo elegir' },
    {
      tipo: 'lista',
      items: [
        '**Tiempo para armar:** una vinílica común da pocos minutos de [[tiempo abierto|tiempo-abierto]]. Para armados largos, usa una vinílica lenta, cola animal líquida, epoxi lento o urea.',
        '**Agua:** interior seco, vinílica común; cocina o baño, D3; exterior, D4, poliuretano o epoxi.',
        '**Huecos:** las vinílicas necesitan uniones ajustadas. El epoxi rellena huecos sin perder fuerza; el poliuretano los llena de espuma débil.',
        '**Fluencia:** las vinílicas ceden un poco bajo carga constante. En piezas curvadas que tiran para volver a su forma, usa urea o epoxi. Ver [Curvado por laminado](#/curvado/laminado).',
        '**Reversible:** solo la cola animal se despega con calor y humedad, una ventaja para restaurar.',
        '**Acabado:** la cola que queda en la superficie no deja entrar el tinte ni el aceite. Ver [Preparar la superficie](#/acabados/preparacion).',
      ],
    },

    { tipo: 'h2', texto: 'Aplicar y guardar' },
    {
      tipo: 'lista',
      items: [
        '**Cantidad:** una capa pareja que cubra toda la superficie. Al prensar debe salir un cordón fino de gotitas; si no sale nada, falta cola.',
        '**Epoxi:** mide los dos componentes con precisión, en peso o en volumen según indique el fabricante. Una mezcla con proporciones equivocadas no endurece bien.',
        '**Poliuretano:** humedece apenas una de las caras si la madera está muy seca, y prensa firme: la espuma empuja las piezas.',
        '**Contacto:** después de unir no se puede corregir la posición. Para ubicar una pieza grande, apoya varillas entre las dos caras y retíralas una por una.',
        '**Conservación:** la vinílica se arruina si se congela. Las colas tienen fecha de vencimiento: una cola vieja espesa o con grumos no pega bien.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'El epoxi y el poliuretano sensibilizan la piel: con el tiempo pueden causar alergia. Usa guantes de nitrilo y lávate con agua y jabón, nunca con disolvente. El cianoacrilato pega la piel en segundos; la cola de contacto con disolvente es inflamable y sus vapores se acumulan. Ventila y lee la [[ficha de seguridad|fds]].' },
  ],
}

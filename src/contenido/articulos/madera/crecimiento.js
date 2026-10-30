export default {
  actualizado: '2026-10-27',
  relacionados: ['madera/frondosas-coniferas', 'madera/aserrado', 'madera/movimiento', 'madera/defectos'],
  bloques: [
    { tipo: 'p', texto: 'Cada tabla conserva la historia del árbol del que salió. La posición de los anillos, el color, los nudos y la forma en que se mueve al secar se explican por cómo creció ese árbol. Entender esa anatomía es lo que permite elegir bien una pieza y prever cómo se va a comportar.' },

    { tipo: 'h2', texto: 'Cómo vive un árbol' },
    { tipo: 'p', texto: 'Las raíces absorben agua y sales minerales del suelo. Esa *savia bruta* sube por la madera más joven del tronco hasta las hojas. Allí, con la luz del sol, el árbol combina el agua con el dióxido de carbono del aire y fabrica azúcares: es la fotosíntesis, que además libera oxígeno.' },
    { tipo: 'p', texto: 'Los azúcares disueltos forman la *savia elaborada*, que baja por una capa fina bajo la corteza, el floema, y alimenta todo el árbol. Lo que no se consume se guarda como almidón o se convierte en la materia de las nuevas células: madera.' },
    {
      tipo: 'datos',
      items: [
        ['Celulosa', '≈ 40 – 50 % de la madera seca. Largas cadenas que forman las fibras y dan resistencia a la tracción.'],
        ['Hemicelulosas', '≈ 20 – 30 %. Unen la celulosa y son las primeras en absorber agua.'],
        ['Lignina', '≈ 20 – 30 %. El "cemento" que endurece las paredes y da rigidez.'],
        ['Extractivos', 'Pocas unidades por ciento. Resinas, taninos, aceites y colorantes que dan color, olor y durabilidad.'],
      ],
    },

    { tipo: 'h2', texto: 'Las capas del tronco' },
    { tipo: 'p', texto: 'Un corte transversal del tronco muestra, de afuera hacia adentro, capas con funciones muy distintas:' },
    { tipo: 'figura', id: 'seccion-tronco', pie: 'Sección esquemática de un tronco. El cámbium es en realidad una capa de pocas células, invisible a simple vista.' },
    {
      tipo: 'lista',
      items: [
        '**Corteza exterior:** tejido muerto que protege al árbol del frío, el fuego, los golpes y los insectos.',
        '**Floema o corteza interior:** conduce la savia elaborada hacia abajo. Con el tiempo se aplasta y pasa a formar parte de la corteza exterior.',
        '**[[Cámbium|cambium]]:** una capa de células vivas que se dividen sin parar. Hacia adentro forman madera y hacia afuera, floema.',
        '**[[Albura|albura]]:** la madera más joven y activa. Sube la savia bruta y guarda reservas.',
        '**[[Duramen|duramen]]:** albura que dejó de conducir y se llenó de extractivos. Es la parte central, a menudo más oscura.',
        '**[[Médula|medula]]:** el centro blando del tronco, restos del primer tallo.',
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'El tronco solo engorda en el cámbium y solo se alarga en las puntas de tallos y ramas. Por eso un clavo en un tronco a 1,5 m del suelo sigue a 1,5 m aunque el árbol crezca: lo que hace es quedar cada vez más adentro.' },

    { tipo: 'h2', texto: 'Anillos de crecimiento' },
    {
      tipo: 'foto', src: 'fotos/madera/troncos-pino.jpg', ancho: 1000, alto: 667,
      alt: 'Testas de troncos de pino apilados, con los anillos de crecimiento y la corteza a la vista',
      pie: 'Testas de troncos de pino. Se ven los anillos de crecimiento, la corteza y las grietas radiales que abre el secado desde el centro.',
      credito: { autor: 'Radomianin', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Pine_log_cross-sections,_Teutendorf,_2016-09-17.jpg' },
    },
    { tipo: 'p', texto: 'En los climas con estaciones marcadas, el cámbium trabaja a ritmos distintos a lo largo del año. En primavera, cuando el árbol necesita mover mucha agua, forma la [[madera temprana|madera-temprana]]: células grandes, de paredes finas, clara y liviana. Hacia el verano y el otoño forma la [[madera tardía|madera-tardia]]: células pequeñas, de paredes gruesas, más oscura y densa. En invierno se detiene.' },
    { tipo: 'p', texto: 'El contraste entre la madera tardía de un año y la temprana del siguiente dibuja un [[anillo]] por año. Contando los anillos en la base del tronco se puede saber la edad del árbol.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'En los trópicos, donde el clima cambia poco a lo largo del año, los anillos pueden ser difusos o seguir las estaciones de lluvia en lugar de los años. No siempre sirven para contar la edad.' },
    { tipo: 'h3', texto: 'Qué dice el ancho de los anillos' },
    { tipo: 'p', texto: 'El ancho de los anillos es una pista de la calidad, pero se lee distinto según la madera:' },
    {
      tipo: 'lista',
      items: [
        '**Coníferas (pinos, abetos):** los anillos estrechos y regulares suelen indicar una madera más densa y resistente. Los anillos muy anchos, típicos de árboles de crecimiento rápido en plantación, dan una madera más liviana y blanda.',
        '**Frondosas con porosidad en anillo (roble, fresno):** es al revés. La franja de poros de primavera tiene casi siempre el mismo ancho, así que un anillo ancho tiene más madera tardía y la pieza es más densa y resistente.',
        '**Frondosas con porosidad difusa (haya, arce):** el ancho de los anillos casi no permite predecir la densidad.',
      ],
    },
    { tipo: 'p', texto: 'En el artículo [Frondosas y coníferas](#/madera/frondosas-coniferas) se explica qué son los poros y por qué aparecen así.' },

    { tipo: 'h2', texto: 'Albura y duramen' },
    { tipo: 'p', texto: 'Cuando un árbol envejece, la albura del centro deja de conducir savia. Sus últimas células vivas mueren y depositan extractivos en las paredes: así se forma el duramen, que avanza hacia afuera año tras año mientras se forma albura nueva junto al cámbium.' },
    {
      tipo: 'tabla',
      titulo: 'Diferencias prácticas entre albura y duramen',
      columnas: ['', 'Albura', 'Duramen'],
      filas: [
        ['Color', 'Generalmente más clara', 'Generalmente más oscura; en algunas especies no se distingue'],
        ['Durabilidad natural', 'Baja en todas las especies', 'De baja a muy alta según la especie'],
        ['Insectos', 'Atrae carcomas por el almidón que guarda', 'Menos atacada'],
        ['Impregnación', 'Absorbe bien protectores y tintes', 'A menudo difícil de impregnar'],
        ['Resistencia mecánica', 'Similar a la del duramen de igual densidad', 'Similar a la de la albura de igual densidad'],
      ],
      nota: 'Pinos, robles, nogales y cerezos tienen albura y duramen bien diferenciados. En el abeto, la pícea, la haya o el tilo la diferencia de color es mínima o nula.',
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para exterior, usa duramen de especies durables o madera tratada. "Madera de cedro" o "de lapacho" no garantiza nada si la pieza es de albura: mira el color de los cantos y pregunta al proveedor.' },

    { tipo: 'h2', texto: 'Radios medulares' },
    { tipo: 'p', texto: 'Además de las células que corren a lo largo del tronco, hay bandas de células que van de la médula hacia la corteza: los [[radios medulares|radio]]. Transportan y guardan nutrientes en dirección radial.' },
    { tipo: 'p', texto: 'En casi todas las especies son finos y apenas se ven. En el roble y el plátano de sombra son anchos y, en las tablas de [[corte radial|aserrado-radial]], aparecen como manchas brillantes llamadas espejuelos. Los radios también son planos débiles: muchas grietas de secado se abren siguiéndolos.' },

    { tipo: 'h2', texto: 'Madera que conviene evitar' },
    {
      tipo: 'lista',
      items: [
        '**Médula y madera juvenil:** los primeros anillos alrededor de la médula forman una madera menos estable, que se contrae más a lo largo. Las piezas que incluyen la médula casi siempre se rajan al secar.',
        '**[[Madera de reacción|madera-reaccion]]:** se forma en árboles inclinados o ramas. Se reconoce por anillos excéntricos, con la médula desplazada hacia un lado, o por zonas de color y brillo distintos. Al secar se arquea mucho y puede rajarse a lo ancho.',
        '**Nudos:** son la base de las ramas, que quedaron incluidas en el tronco. Se tratan en [Defectos y cómo elegir una tabla](#/madera/defectos).',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los porcentajes de celulosa, hemicelulosas y lignina son rangos medios. Varían entre especies y entre coníferas y frondosas.' },
  ],
}

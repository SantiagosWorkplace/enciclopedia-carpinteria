export default {
  actualizado: '2026-10-28',
  relacionados: ['electricas/taladros', 'herrajes/tornillos', 'uniones/clavijas-galletas', 'maquinas/taladro-columna'],
  bloques: [
    { tipo: 'p', texto: 'Los taladros manuales parecen cosa del pasado, pero siguen siendo útiles: no necesitan enchufe ni batería, son silenciosos y dan un control muy fino de la profundidad. Además, las brocas que se usan con ellos y con los taladros eléctricos son en buena parte las mismas.' },

    { tipo: 'h2', texto: 'Herramientas' },
    {
      tipo: 'foto', src: 'fotos/herramientas-manuales/berbiqui.jpg', ancho: 1000, alto: 527,
      alt: 'Berbiquí antiguo de metal con una broca colocada',
      pie: 'Berbiquí antiguo con su broca, de la colección del Museo de Arte de Cleveland. El brazo curvo da mucha fuerza de giro.',
      credito: { autor: 'Museo de Arte de Cleveland', licencia: 'CC0', licenciaUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', fuente: 'https://commons.wikimedia.org/wiki/File:Unknown_artist_-_Brace_and_Bit_-_1920.71_-_Cleveland_Museum_of_Art.jpg' },
    },
    {
      tipo: 'lista',
      items: [
        '**[[Berbiquí|berbiqui]]:** manubrio en forma de manivela con una pieza para apoyar el pecho o la mano. Hace agujeros grandes, de 6 a 40 mm o más, con brocas de barrena. Tiene mucha fuerza y muy buen control.',
        '**Taladro de mano o de engranajes:** una manivela que hace girar el mandril a través de un engranaje. Para brocas helicoidales finas, hasta unos 8 mm.',
        '**Barrena de mano:** una pequeña broca con un mango en T, para iniciar agujeros de tornillos.',
        '**Punzón o lezna:** marca y empieza el agujero de un tornillo pequeño o un clavo, apartando las fibras sin cortarlas.',
      ],
    },

    { tipo: 'h2', texto: 'Brocas' },
    { tipo: 'figura', id: 'brocas', pie: 'Las brocas más usadas en madera, de costado y con la punta hacia abajo.' },
    {
      tipo: 'tabla',
      titulo: 'Qué broca usar',
      columnas: ['Broca', 'Cómo es', 'Para qué'],
      filas: [
        ['Helicoidal', 'Punta cónica a ≈ 118°', 'Uso general en madera y metal; tiende a desviarse al empezar'],
        ['De punta o para madera', 'Punta central y dos espuelas que cortan el borde', 'Agujeros limpios y exactos para clavijas y herrajes'],
        ['De pala', 'Hoja plana con punta central', 'Agujeros grandes y rápidos, con bordes bastos; con taladro eléctrico'],
        ['Forstner', 'Borde cortante circular y punta pequeña', 'Agujeros de fondo plano, como los de las bisagras de cazoleta'],
        ['De barrena', 'Tornillo guía, espuelas y espiral larga', 'Agujeros profundos con berbiquí'],
        ['Avellanador', 'Cono de 82° o 90°', 'Asiento para la cabeza de los tornillos'],
      ],
    },

    { tipo: 'h2', texto: 'Agujeros para tornillos' },
    { tipo: 'p', texto: 'Un tornillo para madera necesita dos agujeros: el de **paso** en la pieza que se sujeta, del diámetro del cuerpo del tornillo, para que la apriete contra la otra; y el **guía** en la pieza que recibe la rosca, más fino, para que no se raje.' },
    {
      tipo: 'tabla',
      titulo: 'Agujeros orientativos',
      columnas: ['Tornillo (Ø)', 'Paso', 'Guía en blanda', 'Guía en dura'],
      filas: [
        ['3 mm', '3 – 3,5 mm', '1,5 mm', '2 mm'],
        ['3,5 mm', '3,5 – 4 mm', '2 mm', '2,5 mm'],
        ['4 mm', '4 – 4,5 mm', '2 – 2,5 mm', '2,5 – 3 mm'],
        ['5 mm', '5 – 5,5 mm', '2,5 – 3 mm', '3 – 3,5 mm'],
        ['6 mm', '6 – 6,5 mm', '3 – 3,5 mm', '4 mm'],
      ],
      nota: 'Regla general: en madera dura, la guía es casi igual al núcleo del tornillo; en madera blanda, algo menor.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los diámetros dependen de la forma de la rosca y del tipo de tornillo. Prueba siempre en un recorte de la misma madera, sobre todo con maderas duras y cerca de las testas.' },

    { tipo: 'h2', texto: 'Técnica' },
    {
      tipo: 'pasos',
      items: [
        'Marca el centro con un punzón: la punta de la broca encuentra el lugar sola.',
        'Para un agujero a escuadra, coloca una escuadra junto a la broca, o pide a alguien que mire de costado. Con práctica, basta con comprobarlo desde dos direcciones a 90°.',
        'Para controlar la profundidad, envuelve la broca con cinta de pintor o usa un tope de collarín.',
        'Para que el agujero no se astille al salir, taladra hasta que asome la punta y termina desde el otro lado, o apoya la pieza sobre un taco de desecho bien apretado.',
        'Saca la broca de vez en cuando para limpiar la viruta, sobre todo en agujeros profundos.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para agujeros en ángulo, como los de las patas de una silla, taladra primero un taco con el ángulo correcto y úsalo como guía.' },
  ],
}

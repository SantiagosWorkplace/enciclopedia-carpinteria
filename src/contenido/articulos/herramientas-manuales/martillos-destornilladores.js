export default {
  actualizado: '2026-11-02',
  relacionados: ['herrajes/clavos', 'herrajes/tornillos', 'herramientas-manuales/taladros-manuales', 'electricas/taladros'],
  bloques: [
    { tipo: 'p', texto: 'Martillos y destornilladores parecen las herramientas más fáciles de usar, y por eso se usan mal: clavos doblados, tablas rajadas, cabezas de tornillo destrozadas y superficies marcadas. Elegir el peso y la punta adecuados resuelve casi todo.' },

    { tipo: 'h2', texto: 'Martillos y mazos' },
    {
      tipo: 'foto', src: 'fotos/herramientas-manuales/martillo-una.jpg', ancho: 800, alto: 600,
      alt: 'Martillo de carpintero con mango de madera',
      pie: 'Martillo de orejas o de uña: la uña curva sirve para sacar clavos.',
      credito: { autor: 'Shakespeare at en.wikipedia', licencia: 'CC BY-SA 3.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/3.0', fuente: 'https://commons.wikimedia.org/wiki/File:Claw_hammer-1.jpg' },
    },
    {
      tipo: 'tabla',
      titulo: 'Para qué sirve cada uno',
      columnas: ['Herramienta', 'Peso', 'Uso'],
      filas: [
        ['Martillo de orejas o de uña', '300 – 600 g', 'Clavar y sacar clavos en carpintería y obra'],
        ['Martillo de peña', '100 – 300 g', 'Clavos pequeños y puntas; la peña empieza el clavo sin golpear los dedos'],
        ['Mazo de madera', '400 – 800 g', 'Golpear formones y armar uniones'],
        ['Maza de goma o de nailon', '200 – 700 g', 'Armar piezas sin marcarlas'],
        ['Martillo japonés', '200 – 500 g', 'Golpear formones japoneses; una cara plana y otra levemente abombada'],
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Botador:** un punzón romo que hunde la cabeza del clavo bajo la superficie para taparla después con masilla.',
        '**Palanca o pie de cabra:** para sacar clavos grandes y desarmar.',
        '**Tenazas:** para sacar clavos sin cabeza o doblados.',
      ],
    },

    { tipo: 'h2', texto: 'Clavar bien' },
    {
      tipo: 'pasos',
      items: [
        'Toma el martillo cerca del extremo del mango: el golpe sale del codo y la muñeca, no del hombro.',
        'Sujeta el clavo y dale dos o tres golpes suaves hasta que se sostenga solo. Retira los dedos.',
        'Golpea con la cara del martillo plana sobre la cabeza del clavo, mirando el clavo, no el martillo.',
        'Termina con golpes suaves y, si la cabeza debe quedar oculta, húndela con el botador.',
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Para que no se raje la madera:** aplasta un poco la punta del clavo con el martillo, de modo que corte las fibras en lugar de separarlas; pretaladra cerca de las testas y en maderas duras; no pongas varios clavos en la misma veta.',
        '**Clavos en ángulo:** clavados con inclinaciones alternadas, sujetan mucho mejor que rectos.',
        '**Para sacar un clavo:** pon un taco de madera bajo las orejas del martillo; protege la superficie y da más palanca.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Usa gafas al clavar: los clavos templados pueden saltar o astillarse. Nunca golpees dos martillos de acero entre sí.' },

    { tipo: 'h2', texto: 'Destornilladores y puntas' },
    { tipo: 'p', texto: 'La regla de oro es que la punta encaje justa en la cabeza del tornillo. Una punta pequeña o del tipo equivocado se sale de la ranura, la destroza y raya la pieza.' },
    { tipo: 'figura', id: 'puntas-destornillador', pie: 'Cabezas de tornillo vistas desde arriba. La Pozidriv se distingue de la Phillips por las cuatro rayas finas entre los brazos de la cruz.' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de punta',
      columnas: ['Punta', 'Cómo es', 'Comentario'],
      filas: [
        ['Plana', 'Una ranura recta', 'La hoja debe llenar el largo y el ancho de la ranura; se sale con facilidad'],
        ['Phillips (PH)', 'Cruz de lados en ángulo', 'Muy común; la más usada es PH2'],
        ['Pozidriv (PZ)', 'Cruz con cuatro rayas finas entre los brazos', 'Habitual en tornillos para aglomerado; con una punta PH resbala'],
        ['Torx (TX)', 'Estrella de seis puntas', 'Transmite mucha fuerza sin salirse; TX20 y TX25 son las más comunes'],
        ['Cuadrada', 'Hueco cuadrado', 'Agarra muy bien; común en América del Norte'],
        ['Hexagonal (Allen)', 'Hueco hexagonal', 'Herrajes de muebles desmontables'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Mira la cabeza del tornillo con atención: si tiene cuatro rayas finas entre los brazos de la cruz, es Pozidriv. Usar ahí una punta Phillips es la causa más común de cabezas destrozadas.' },

    { tipo: 'h2', texto: 'Atornillar a mano' },
    {
      tipo: 'lista',
      items: [
        'Haz siempre el agujero de paso y el guía. Las medidas están en [Taladros manuales y barrenas](#/herramientas-manuales/taladros-manuales).',
        'Empuja con fuerza contra el tornillo mientras giras: la presión evita que la punta se salga.',
        'Frota la rosca con cera o jabón seco en maderas duras: entra mucho más fácil.',
        'Con tornillos de latón, que son blandos, enrosca y saca primero un tornillo de acero de la misma medida para abrir la rosca.',
        'En trabajos a la vista, deja las ranuras de los tornillos planos alineadas: es un detalle que se nota.',
      ],
    },
  ],
}

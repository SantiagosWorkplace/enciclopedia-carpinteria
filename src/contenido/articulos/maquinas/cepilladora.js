export default {
  actualizado: '2026-10-29',
  relacionados: ['herramientas-manuales/cepillos', 'electricas/cepillo-electrico', 'madera/defectos', 'maquinas/seguridad-maquinas'],
  bloques: [
    { tipo: 'p', texto: 'Para que una pieza quede plana, a escuadra y al espesor exacto, en el taller se usan dos máquinas que trabajan en equipo. La **cepilladora**, también llamada labradora, deja plana una cara y escuadra un canto con ella. La **regruesadora** copia esa cara plana en la cara opuesta y deja toda la pieza al mismo espesor. En Europa son muy comunes las máquinas combinadas que hacen las dos cosas.' },

    { tipo: 'h2', texto: 'Cómo trabajan' },
    { tipo: 'figura', id: 'cepilladora-regruesadora', pie: 'De costado, en sección. La pieza avanza de izquierda a derecha.' },
    {
      tipo: 'foto', src: 'fotos/maquinas/cepilladora.jpg', ancho: 1000, alto: 772,
      alt: 'Cepilladora de pie con dos mesas largas y una guía',
      pie: 'Cepilladora de pie: dos mesas largas y la guía. Entre las mesas gira el rodillo de cuchillas.',
      credito: { autor: 'Jeff Easter from San Francisco, America', licencia: 'CC BY 2.0', licenciaUrl: 'https://creativecommons.org/licenses/by/2.0', fuente: 'https://commons.wikimedia.org/wiki/File:Powermatic_jointer_(2).jpg' },
    },
    {
      tipo: 'lista',
      items: [
        '**Cepilladora:** el rodillo portacuchillas está entre dos mesas. La de salida queda exactamente a la altura del filo; la de entrada, más baja, tanto como la profundidad de pasada. Lo que la cuchilla quita de la cara de abajo es lo que baja la mesa de entrada.',
        '**Regruesadora:** la pieza se apoya en una mesa y unos rodillos la arrastran bajo el rodillo portacuchillas, que queda arriba. La mesa sube o baja para fijar el espesor final. Como copia la cara de abajo, si esta está torcida, la de arriba también lo estará.',
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Una regruesadora no endereza una tabla alabeada: los rodillos la aplanan mientras pasa y, al salir, vuelve a su forma. Primero hay que aplanar una cara en la cepilladora.' },

    { tipo: 'h2', texto: 'El orden correcto' },
    {
      tipo: 'pasos',
      items: [
        '**Corta las piezas en bruto** un poco más largas y anchas de lo necesario. Las tablas cortas se aplanan mejor que las largas.',
        '**Cara de referencia:** en la cepilladora, con la cara cóncava hacia abajo, hasta que quede plana en toda su superficie.',
        '**Canto de referencia:** en la cepilladora, con la cara recién cepillada apoyada contra la guía a 90°.',
        '**Espesor:** en la regruesadora, con la cara de referencia hacia abajo. Pasadas finas, dando vuelta la pieza solo si ambas caras ya están planas.',
        '**Ancho:** en la sierra de mesa, con el canto de referencia contra la guía. Un último repaso en la cepilladora quita las marcas de la sierra.',
        '**Largo:** al final, en la ingletadora o en el carro de la sierra.',
      ],
    },

    { tipo: 'h2', texto: 'Seguridad en la cepilladora' },
    {
      tipo: 'lista',
      items: [
        'Usa siempre el protector del rodillo y ajústalo a la pieza.',
        'Empuja con **bloques de empuje** con suela antideslizante, nunca con los dedos sobre el rodillo.',
        'Profundidad de pasada pequeña, ≈ 1 mm o menos, sobre todo en piezas anchas o duras.',
        'No cepilles piezas más cortas que lo que indica el fabricante, en general ≈ 30 cm, ni más delgadas de ≈ 10 – 12 mm.',
        'Nunca cepilles testas: las fibras saltan y la pieza puede romperse.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'La cepilladora es la máquina con más accidentes en los dedos después de la sierra de mesa. El peligro está en el momento en que la mano pasa sobre el rodillo: usa siempre los bloques de empuje y deja que el protector cubra el rodillo al pasar la pieza.' },

    { tipo: 'h2', texto: 'La regruesadora' },
    {
      tipo: 'lista',
      items: [
        'Cepilla a favor de la veta para evitar repelos: mira el canto antes de entrar.',
        'Quita como máximo 1 – 2 mm por pasada, menos en piezas anchas.',
        'Alterna el extremo que entra primero entre pasadas para repartir el desgaste de las cuchillas, siempre respetando la veta.',
        'No pases piezas más cortas que la distancia entre los rodillos de arrastre.',
      ],
    },
    { tipo: 'h3', texto: 'La mordida en los extremos' },
    { tipo: 'p', texto: 'La [[mordida]] es un escalón de pocas décimas que queda al principio y al final de la tabla, cuando solo la sujeta un rodillo y la pieza se levanta contra las cuchillas. Para reducirla:' },
    {
      tipo: 'lista',
      items: [
        'Sostén la tabla horizontal a la entrada y a la salida, con soportes o levantando apenas el extremo.',
        'Pasa varias piezas seguidas, tocándose por los extremos.',
        'Deja las piezas un poco más largas y recorta los extremos después.',
      ],
    },
  ],
}

export default {
  actualizado: '2026-11-02',
  relacionados: ['herramientas-manuales/afilado', 'uniones/caja-espiga', 'uniones/colas-milano', 'talla/herramientas-talla'],
  bloques: [
    { tipo: 'p', texto: 'El formón es la herramienta más simple del taller y una de las más versátiles: limpia uniones, talla cajas, ajusta hombros, rebaja y redondea. Su eficacia depende casi por completo de un filo bien afilado y de una técnica que mantenga las dos manos detrás de él.' },

    { tipo: 'h2', texto: 'Tipos de formón' },
    {
      tipo: 'foto', src: 'fotos/herramientas-manuales/formon.jpg', ancho: 1000, alto: 233,
      alt: 'Formón de banco con mango de madera',
      pie: 'Formón de banco con mango de madera, fabricado en Suecia hacia 1950.',
      credito: { autor: 'R. Henrik Nilsson', licencia: 'CC BY 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Ca_1950s_bench_chisel_by_Jernbolaget_Eskilstuna_Sweden.jpg' },
    },
    { tipo: 'figura', id: 'formones', pie: 'Tres formones típicos con su sección transversal, y los barridos más comunes de las gubias.' },
    {
      tipo: 'tabla',
      titulo: 'Formones',
      columnas: ['Formón', 'Características', 'Uso'],
      filas: [
        ['De banco', 'Cantos biselados, largo medio; se puede golpear con mazo', 'El más versátil: rebajar, limpiar, colas de milano'],
        ['De mortajar', 'Grueso, de sección casi cuadrada, muy robusto', 'Tallar cajas a golpe de mazo y hacer palanca para sacar el desperdicio'],
        ['De ajustar', 'Largo, fino y flexible; solo se empuja con la mano', 'Rebajes finos y ajustes de hombros y espigas'],
        ['De colas de milano', 'Cantos biselados casi hasta el filo', 'Limpiar ángulos agudos entre colas'],
        ['Japonés', 'Acero duro soldado a hierro blando; espalda hueca', 'Filos muy duraderos; se golpea con martillo de acero'],
      ],
    },
    { tipo: 'p', texto: 'Un juego básico tiene 4 a 6 anchos: por ejemplo 6, 10, 12, 18 y 25 mm. Conviene que alguno coincida con el ancho de las cajas y ranuras que vas a hacer más a menudo.' },

    { tipo: 'h2', texto: 'Gubias' },
    { tipo: 'p', texto: 'Las gubias son formones de hoja curva. Se identifican por el ancho y por el [[barrido]], un número que indica cuánto se curva la hoja: del 1, plano, al 9, media caña, y números mayores para hojas en U o en V.' },
    {
      tipo: 'lista',
      items: [
        '**De bisel exterior:** el bisel está en la cara de afuera. Son las de talla y para vaciar cavidades.',
        '**De bisel interior:** el bisel está por dentro. Se usan para ajustar curvas convexas, como el hombro de una pieza redondeada.',
        '**Formones de punta en V:** dos hojas en ángulo para trazar contornos y líneas en talla.',
      ],
    },
    { tipo: 'p', texto: 'Las gubias de talla tienen su propio capítulo: [Herramientas de talla](#/talla/herramientas-talla).' },

    { tipo: 'h2', texto: 'Técnica' },
    {
      tipo: 'pasos',
      items: [
        'Sujeta siempre la pieza al banco: así las dos manos quedan libres para el formón.',
        'Una mano empuja el mango; la otra guía la hoja cerca del filo, apoyada en la pieza, frenando y dirigiendo.',
        'Primero corta a través de la veta, en las líneas trazadas con la cuchilla de marcar, y después quita el desperdicio a lo largo de la veta.',
        'Trabaja en pasadas pequeñas. Un corte grueso desvía el formón siguiendo la veta, más allá de la línea.',
        'Para rebajar plano, el bisel va hacia arriba y la espalda apoyada en la pieza. Para vaciar o sacar viruta en curva, el bisel va hacia abajo.',
        'Para golpear usa un mazo de madera o de plástico, no un martillo de acero, salvo en formones japoneses o con virola de acero.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Nunca pongas una mano delante del filo ni cortes hacia tu cuerpo. La mayoría de los cortes con formón se producen cuando la herramienta resbala de golpe por un corte que se soltó.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'No uses un formón de banco como palanca ni como destornillador: la hoja se quiebra o se mella. Para sacar el desperdicio de una caja profunda, usa un formón de mortajar.' },

    { tipo: 'h2', texto: 'Cuidado' },
    {
      tipo: 'lista',
      items: [
        'Guarda los formones con protectores en el filo o en un estante con ranuras, sin que se toquen entre sí.',
        'Repasa el filo en la piedra fina o en el cuero en cuanto deje de cortar limpio: es mucho más rápido que reafilarlo desde cero.',
        'Protege el acero del óxido con una capa fina de aceite o cera, sobre todo en talleres húmedos.',
      ],
    },
  ],
}

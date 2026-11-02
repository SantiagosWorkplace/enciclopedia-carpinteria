export default {
  actualizado: '2026-11-02',
  relacionados: ['uniones/ingletes', 'maquinas/sierra-mesa', 'maquinas/seguridad-maquinas', 'diseno/lista-corte'],
  bloques: [
    { tipo: 'p', texto: 'La ingletadora es una sierra circular montada sobre un brazo que baja sobre la pieza. Corta listones, molduras y tablas a lo ancho con ángulos exactos y repetibles. Es la herramienta de los marcos, los zócalos, las molduras de techo y las piezas de estructura.' },

    { tipo: 'h2', texto: 'Tipos' },
    {
      tipo: 'foto', src: 'fotos/maquinas/ingletadora.jpg', ancho: 1000, alto: 750,
      alt: 'Ingletadora sobre una mesa al aire libre, con un listón en la mesa giratoria',
      pie: 'Ingletadora con un listón sobre la mesa giratoria; la escala del frente marca el ángulo de inglete.',
      credito: { autor: 'Santeri Viinamäki', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Black_%26_Decker_miter_saw.jpg' },
    },
    {
      tipo: 'tabla',
      titulo: 'Ingletadoras',
      columnas: ['Tipo', 'Qué hace'],
      filas: [
        ['Simple', 'Gira la mesa para cortar en ángulo en la cara'],
        ['De bisel', 'Además inclina el cabezal hacia un lado (o hacia los dos)'],
        ['Telescópica o radial', 'El cabezal corre sobre guías; corta piezas mucho más anchas'],
      ],
      nota: 'Los discos más comunes son de 216, 254 y 305 mm. Con un disco de 254 mm, una ingletadora fija corta tablas de ≈ 14 – 16 cm de ancho y una telescópica, de ≈ 30 cm.',
    },

    { tipo: 'h2', texto: 'Los cuatro cortes' },
    { tipo: 'figura', id: 'cortes-ingletadora', pie: 'En rojo, la superficie que deja el disco en el extremo del listón.' },
    {
      tipo: 'lista',
      items: [
        '**Recto:** 90° en la cara y en el canto.',
        '**[[Inglete|inglete]]:** la mesa gira; el ángulo se ve mirando la cara. Es el corte de los marcos.',
        '**Bisel:** el cabezal se inclina; el ángulo se ve mirando el canto.',
        '**Compuesto:** inglete y bisel a la vez. Es el corte de las molduras de techo y de las cajas con lados inclinados.',
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Ángulo de inglete para marcos de lados iguales',
      columnas: ['Lados', 'Inglete en cada extremo'],
      filas: [
        ['4 (cuadrado o rectángulo)', '45°'],
        ['5', '36°'],
        ['6', '30°'],
        ['8', '22,5°'],
        ['12', '15°'],
      ],
      nota: 'Regla general: el inglete de cada extremo es 180° dividido por el número de lados.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Para molduras de techo colocadas en una esquina de 90°, los ángulos compuestos dependen de la inclinación de la moldura: con molduras de 38° se usan ≈ 31,6° de inglete y 33,9° de bisel; con molduras de 45°, ≈ 35,3° y 30°. Comprueba siempre con dos recortes antes de cortar la pieza.' },

    { tipo: 'h2', texto: 'Calibrar' },
    {
      tipo: 'pasos',
      items: [
        'Con la máquina desconectada, baja el disco y comprueba con una escuadra que esté a 90° de la guía y de la mesa.',
        'Haz un corte de prueba en una tabla ancha, da vuelta uno de los trozos y júntalos por el corte: cualquier error se ve duplicado.',
        'Para los 45°, corta cuatro piezas iguales y arma un marco: si queda abierto en alguna esquina, ajusta el tope.',
      ],
    },

    { tipo: 'h2', texto: 'Técnica' },
    {
      tipo: 'pasos',
      items: [
        'Apoya la pieza firme contra la guía y la mesa. Sujétala con la prensa de la máquina si es corta o si la mano queda cerca.',
        'Mantén la mano fuera de la zona marcada en la mesa, en general a ≈ 15 cm del disco o más.',
        'Arranca el disco con el cabezal arriba y espera a que tome velocidad.',
        'Baja el cabezal de forma pareja. En una telescópica, tira del cabezal hacia ti, bájalo y empuja hacia la guía cortando.',
        'Al terminar, suelta el gatillo y espera a que el disco se detenga **antes** de subirlo: si sube girando, puede arrastrar el recorte.',
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Piezas largas:** sostén los dos lados con soportes a la altura de la mesa.',
        '**Piezas iguales:** usa un tope en la guía o en el soporte, no midas cada una.',
        '**Piezas muy pequeñas:** no las cortes; corta de una pieza larga.',
        '**Cortes finos:** corta un poco largo y recorta después de a medio milímetro.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Nunca cruces los brazos para sujetar la pieza del otro lado del disco, ni cortes piezas curvas o redondas sin un soporte que impida que giren.' },
  ],
}

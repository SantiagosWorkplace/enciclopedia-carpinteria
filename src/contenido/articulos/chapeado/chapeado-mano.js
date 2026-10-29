export default {
  actualizado: '2026-10-29',
  relacionados: ['chapeado/herramientas-chapeado', 'chapeado/preparar-chapa', 'herrajes/adhesivos', 'chapeado/chapeado-prensa'],
  bloques: [
    { tipo: 'p', texto: 'Durante siglos la chapa se pegó sin prensas, con [[cola animal|cola-animal]] caliente y un [[martillo de chapear|martillo-chapear]]. La cola caliente se vuelve gel al enfriarse y sujeta la chapa en segundos. Con calor se puede volver a ablandar, lo que permite corregir, unir hojas en el mismo tablero y reparar muebles antiguos.' },

    { tipo: 'h2', texto: 'La cola caliente' },
    {
      tipo: 'lista',
      items: [
        '**Se prepara** remojando los granos de cola en agua fría durante unas horas y calentándola después al baño María.',
        '**Temperatura de trabajo:** alrededor de 60 °C. Nunca debe hervir, porque pierde fuerza.',
        '**Consistencia:** debe caer del pincel como un hilo continuo, sin cortarse en gotas ni formar grumos.',
        '**Reversible:** con calor y humedad se despega. Es la cola de la restauración, porque permite desarmar sin dañar.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La temperatura, la proporción de agua y el tiempo de remojo dependen del tipo y de la fuerza de la cola. Sigue las indicaciones del proveedor.' },

    { tipo: 'h2', texto: 'Paso a paso' },
    { tipo: 'figura', id: 'chapeado-mano', pie: 'A la izquierda, el recorrido del martillo sobre la chapa. A la derecha, el corte doble para unir dos hojas sobre el mismo tablero.' },
    {
      tipo: 'pasos',
      items: [
        'Pasa una mano de cola diluida en el soporte y déjala secar: sella el poro.',
        'Calienta el taller y el soporte si hace frío: la cola gelifica antes en una superficie fría.',
        'Pon cola caliente en el soporte y en la cara de atrás de la chapa, en capas finas.',
        'Coloca la chapa y humedece apenas su cara con una esponja, para que no se ondule ni se pegue a la plancha.',
        'Pasa la plancha tibia sobre una zona para volver a ablandar la cola.',
        'Arrastra el martillo con fuerza, desde el centro hacia los bordes, en zigzag y a favor de la veta. La cola sobrante y el aire salen por los bordes.',
        'Repite plancha y martillo zona por zona hasta cubrir toda la hoja.',
        'Golpea suave con la uña: si suena hueco, vuelve a planchar y pasar el martillo.',
        'Limpia la cola de la superficie con un trapo húmedo y caliente antes de que se seque.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para unir dos hojas, pega una solapada unos 20 mm sobre la otra. Con la cola todavía blanda, corta las dos a la vez contra una regla, retira las dos tiras y aprieta la junta con el martillo. Pon cinta engomada encima para que no se abra al secar.' },

    { tipo: 'h2', texto: 'Con cola vinílica y plancha' },
    { tipo: 'p', texto: 'Una variante moderna para superficies pequeñas: se pone cola vinílica en el soporte y en la chapa, se deja secar hasta que esté transparente y se pega la chapa con una plancha a temperatura media. El calor reactiva la cola y la une. Se aprieta enseguida con un taco o un rodillo mientras se enfría.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'No todas las colas vinílicas se reactivan bien con calor. Prueba en un recorte y busca la temperatura de la plancha que no queme la chapa.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'La cola caliente y la plancha queman. Trabaja con el cable de la plancha ordenado y apoya el cazo de cola en una base estable, lejos del borde del banco.' },
  ],
}

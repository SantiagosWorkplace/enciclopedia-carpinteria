export default {
  actualizado: '2026-10-29',
  relacionados: ['electricas/seguridad-electricas', 'herramientas-manuales/sierras', 'maquinas/sierra-mesa', 'madera/tableros'],
  bloques: [
    { tipo: 'p', texto: 'La sierra circular, la caladora y la sierra de sable llevan el corte a la pieza: a una placa de tablero que no cabe en la sierra de mesa, a una viga ya colocada o a una curva en una tabla. Bien usadas cortan rápido y recto; mal usadas, son las herramientas portátiles más peligrosas del taller.' },

    { tipo: 'h2', texto: 'Sierra circular' },
    {
      tipo: 'foto', src: 'fotos/electricas/sierra-circular.jpg', ancho: 1000, alto: 669,
      alt: 'Mano que guía una sierra circular a batería sobre un tablero',
      pie: 'Sierra circular a batería cortando un tablero apoyado en el banco.',
      credito: { autor: 'Mark Hunter', licencia: 'CC BY 2.0', licenciaUrl: 'https://creativecommons.org/licenses/by/2.0', fuente: 'https://commons.wikimedia.org/wiki/File:DeWalt_circular_saw.jpg' },
    },
    {
      tipo: 'lista',
      items: [
        '**Disco:** los diámetros más comunes son de 165 a 190 mm, que cortan entre ≈ 55 y 70 mm de profundidad a 90°. La base se inclina hasta 45° o más para cortes en bisel.',
        '**[[Cuchillo divisor|cuchillo-divisor]]:** mantiene abierto el corte detrás del disco. No lo quites nunca.',
        '**Protector retráctil:** cubre el disco por debajo y se abre al entrar en la pieza. Debe volver solo a su posición.',
        '**Sierra de incisión con riel guía:** variante que se hunde en la pieza y corre sobre un riel de aluminio. Da cortes rectos y limpios, de calidad casi de taller, en placas enteras.',
      ],
    },
    { tipo: 'h3', texto: 'Profundidad del disco' },
    { tipo: 'figura', id: 'profundidad-disco', pie: 'Con poca profundidad, hay menos dientes dentro de la madera y el disco tiene menos superficie para quedar atrapado.' },
    { tipo: 'p', texto: 'Ajusta la profundidad para que el disco sobresalga por debajo de la pieza apenas un diente, ≈ 3 a 6 mm. Así corta más limpio, se calienta menos y el riesgo de [[rechazo]] es mucho menor.' },
    {
      tipo: 'tabla',
      titulo: 'Elegir el disco',
      columnas: ['Dientes (disco de ≈ 190 mm)', 'Uso'],
      filas: [
        ['12 – 24', 'Cortes rápidos al hilo y madera de construcción'],
        ['40', 'Uso general; buen compromiso'],
        ['48 – 60', 'Cortes finos al través, contrachapado, tableros chapados'],
        ['60 o más, con dientes alternos o trapezoidales', 'Melamina y laminados'],
      ],
    },
    {
      tipo: 'pasos',
      items: [
        'Apoya la pieza de modo que **las dos partes** queden sostenidas, pero sin que el corte se cierre: si el tablero se hunde en el medio, el corte apretará el disco.',
        'Pon la cara buena hacia abajo: los dientes cortan subiendo y astillan la cara de arriba.',
        'Usa una regla o un riel como guía; a pulso es muy difícil cortar recto.',
        'Arranca la sierra fuera de la pieza y espera a que alcance toda la velocidad.',
        'Avanza a ritmo constante, sin forzar y sin torcer la sierra.',
        'Nunca retrocedas con el disco girando. Si debes corregir, suelta el gatillo, espera a que se detenga y vuelve a empezar.',
        'Al terminar, espera a que el disco se detenga antes de levantar la sierra.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Párate a un costado de la línea de corte, nunca detrás de la sierra: si hay rechazo, la herramienta salta hacia atrás. Mantén las dos manos en las empuñaduras y nunca pases la mano por debajo de la pieza.' },

    { tipo: 'h2', texto: 'Caladora' },
    {
      tipo: 'foto', src: 'fotos/electricas/caladora.jpg', ancho: 1000, alto: 750,
      alt: 'Caladora a batería vista de costado, con la hoja montada',
      pie: 'Caladora a batería de 18 V, con la hoja montada debajo de la base.',
      credito: { autor: 'Widar23', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Makita_DJV181.jpg' },
    },
    { tipo: 'p', texto: 'La caladora mueve una hoja estrecha hacia arriba y hacia abajo. Es la herramienta portátil para curvas, para aberturas en el medio de un tablero y para cortes cortos en piezas delgadas.' },
    {
      tipo: 'lista',
      items: [
        '**Movimiento pendular:** además de subir y bajar, la hoja avanza en cada carrera. Con pendular alto corta rápido pero basto; sin pendular, más lento y limpio. Para curvas cerradas y tableros, pendular bajo o cero.',
        '**Hojas:** casi todas son de encastre en T. Hay hojas para madera, metal, laminados y curvas; los dientes gruesos cortan rápido y los finos, limpio.',
        '**Hojas de corte inverso:** con los dientes hacia abajo, astillan la cara de abajo en lugar de la de arriba; útiles con melamina.',
        '**Curvas:** cuanto más estrecha la hoja, más cerrada la curva. En curvas muy cerradas, haz cortes de alivio radiales antes de seguir la línea.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'La hoja de la caladora flexa y tiende a inclinarse en piezas gruesas. Para cortes a escuadra en madera de más de 30 – 40 mm, avanza despacio, usa hojas gruesas y de calidad, o cambia de herramienta.' },

    { tipo: 'h2', texto: 'Sierra de sable' },
    { tipo: 'p', texto: 'Una hoja larga que va y viene, sin base de apoyo. Es una herramienta de demolición y de obra: corta vigas colocadas, troncos, ramas, clavos y caños. No sirve para cortes precisos.' },
    {
      tipo: 'lista',
      items: [
        'Apoya siempre la zapata contra la pieza: reduce las vibraciones y los tirones.',
        'Usa hojas bimetálicas para madera con clavos.',
        'Cuidado con lo que hay detrás de la pieza: cables, caños o una persona del otro lado de la pared.',
      ],
    },

    { tipo: 'h2', texto: 'Multiherramienta oscilante' },
    { tipo: 'p', texto: 'Una hoja que oscila unos pocos grados a gran velocidad. Hace cortes de inmersión en el medio de una superficie y cortes al ras de un suelo o una pared. Ideal para reparaciones, recortar marcos de puertas y ajustar piezas ya instaladas.' },
  ],
}

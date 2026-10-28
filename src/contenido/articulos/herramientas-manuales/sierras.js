export default {
  actualizado: '2026-10-28',
  relacionados: ['herramientas-manuales/medir-trazar', 'herramientas-manuales/afilado', 'uniones/colas-milano', 'electricas/sierras-portatiles'],
  bloques: [
    { tipo: 'p', texto: 'Las sierras de mano siguen siendo imprescindibles en el taller: son silenciosas, precisas, no levantan polvo fino y permiten cortes que ninguna máquina hace con tanta facilidad, como las colas de milano o los ajustes finales de una espiga.' },

    { tipo: 'h2', texto: 'Cómo corta un diente' },
    { tipo: 'p', texto: 'La forma del diente depende de si se corta a lo largo de la veta o a través de ella:' },
    { tipo: 'figura', id: 'dientes-sierra', pie: 'Arriba, el perfil de los dientes y el sentido en que cortan. Abajo, vistos desde arriba: el triscado abre un corte más ancho que la hoja.' },
    {
      tipo: 'lista',
      items: [
        '**Al hilo:** cada diente es como un pequeño formón que arranca las fibras a lo largo. Su cara delantera es casi vertical y se lima recta.',
        '**Al través:** cada diente es como una cuchilla que corta las fibras de los dos lados del corte. Su cara delantera está inclinada hacia atrás y se lima en bisel.',
        '**Japonesa:** los dientes apuntan hacia el mango y la sierra corta al tirar. Como la hoja trabaja tensada, puede ser mucho más fina.',
      ],
    },
    { tipo: 'p', texto: 'Los dientes se doblan alternadamente hacia uno y otro lado: es el [[triscado]]. Gracias a él, el corte es más ancho que la hoja y no se traba. Un triscado excesivo deja un corte basto y difícil de guiar.' },

    { tipo: 'h2', texto: 'Tipos de sierra' },
    {
      tipo: 'tabla',
      titulo: 'Sierras de mano',
      columnas: ['Sierra', 'Uso', 'Dientes por pulgada (25,4 mm)'],
      filas: [
        ['Serrucho al hilo', 'Cortar tablas a lo largo', '4 – 7'],
        ['Serrucho al través', 'Cortar tablas a lo ancho', '7 – 10'],
        ['Sierra de costilla para espigas', 'Espigas y hombros; tiene un lomo de refuerzo', '10 – 14'],
        ['Sierra de costilla para colas', 'Colas de milano y cortes finos', '14 – 20'],
        ['Sierra de arco o de calar', 'Curvas y vaciados', 'Hojas finas e intercambiables'],
        ['Ryoba (japonesa)', 'Un filo al hilo y otro al través', '—'],
        ['Dozuki (japonesa)', 'Con lomo; uniones finas', '—'],
        ['Sierra de enrasar', 'Cortar espigas a ras sin marcar la superficie; sin triscado', '—'],
      ],
      nota: 'Los dientes se cuentan tradicionalmente por pulgada, incluso en países métricos. Más dientes, corte más fino y más lento.',
    },

    { tipo: 'h2', texto: 'Cómo serrar recto' },
    {
      tipo: 'pasos',
      items: [
        'Sujeta la pieza con firmeza, en el tornillo de banco o con una prensa, a una altura cómoda.',
        'Párate de modo que el brazo, la sierra y la línea queden en un mismo plano vertical, como un pistón.',
        'Toma el mango sin apretar, con el índice extendido a lo largo de él: el dedo apunta en la dirección del corte.',
        'Apoya la hoja del lado del desperdicio, guiándola con la uña del pulgar de la otra mano, y abre una pequeña entrada con dos o tres pasadas cortas, suaves y casi sin presión.',
        'Una vez abierta la entrada, usa toda la longitud de la hoja con pasadas largas y sin forzar: el peso de la sierra alcanza.',
        'Mira la línea, no la sierra. Si te desvías, corrige poco a poco girando ligeramente la hoja.',
        'Al final del corte, sostén la parte que se va a soltar para que no se astille el borde.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Si la sierra se traba, el corte se está cerrando o la hoja está torcida. Abre el corte con una cuña, y no la fuerces: una hoja doblada no vuelve a cortar recto.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Nunca pongas la mano en la línea de corte delante de la sierra, ni siquiera para guiar la entrada en un corte corto. Si el diente salta, va directo a los dedos.' },

    { tipo: 'h2', texto: 'Mantenimiento' },
    {
      tipo: 'lista',
      items: [
        '**Afilado:** las sierras occidentales se liman con una lima triangular, diente por diente, en un tornillo de afilar. Cada cierto tiempo hay que igualar la altura de los dientes y rehacer el triscado con un triscador.',
        '**Sierras japonesas:** muchas tienen los dientes endurecidos por inducción y no se pueden limar: se cambia la hoja.',
        '**Óxido:** guarda las sierras secas y con una capa fina de cera o aceite. El óxido en la hoja aumenta mucho el roce.',
        '**Protección:** guarda los dientes con una funda o una ranura en un listón, para que no golpeen otras herramientas.',
      ],
    },
  ],
}

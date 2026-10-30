export default {
  actualizado: '2026-10-29',
  relacionados: ['herrajes/adhesivos', 'herramientas-manuales/prensas', 'uniones/cantos', 'madera/secado'],
  bloques: [
    { tipo: 'p', texto: 'Una buena cola, bien usada, es más fuerte que la madera. Casi todos los encolados que fallan lo hacen por la preparación: superficies que no ajustan, madera húmeda o aceitosa, poco tiempo, demasiada o muy poca presión. Este artículo trata el proceso. Los tipos de cola están en [Adhesivos](#/herrajes/adhesivos).' },

    { tipo: 'h2', texto: 'Antes de la cola' },
    {
      tipo: 'lista',
      items: [
        '**Ajuste:** las piezas tienen que cerrar en seco, sin forzar. La cola vinílica no rellena huecos: una junta abierta queda débil.',
        '**Superficies recién cortadas o cepilladas.** Una superficie vieja, sucia o lijada con grano muy fino absorbe peor la cola.',
        '**Madera seca:** con un [[contenido de humedad|ch]] de ≈ 8 – 12 % para muebles de interior. La madera húmeda encoge después y abre las juntas.',
        '**Maderas aceitosas** como la teca o los palisandros: limpia las caras con un solvente justo antes de encolar, o usa una cola epoxi.',
        '**Temperatura:** la mayoría de las colas vinílicas no funcionan bien con el taller frío.',
        '**Ensayo en seco:** arma todo con las prensas, con los tacos y la escuadra a mano. Ver [Prensas y sargentos](#/herramientas-manuales/prensas).',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Cada cola tiene una temperatura mínima de uso, que en muchas vinílicas ronda los 10 °C. Consulta el envase.' },

    { tipo: 'h2', texto: 'El tiempo' },
    {
      tipo: 'datos',
      items: [
        ['Tiempo abierto', 'Desde que pones la cola hasta que debes cerrar la unión: es el [[tiempo abierto|tiempo-abierto]]. En cola vinílica, unos minutos'],
        ['Tiempo de prensado', 'Lo que la unión debe quedar apretada. En cola vinílica, de 30 a 60 minutos en uniones sin tensión'],
        ['Curado completo', 'Hasta que la cola alcanza su resistencia final, en general unas 24 horas'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los tiempos cambian mucho con la marca, la temperatura y la humedad del aire. Toma siempre los del fabricante. En verano, el tiempo abierto se acorta.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para un armado complejo, como una silla o un mueble con muchas uniones, encola por partes: primero los dos costados y, cuando fraguan, las piezas que los unen. O usa una cola de tiempo abierto largo.' },

    { tipo: 'h2', texto: 'La presión' },
    { tipo: 'figura', id: 'presion-prensa', pie: 'Dos tablas encoladas por el canto, vistas desde arriba. Cada mordaza aprieta una franja de la junta.' },
    {
      tipo: 'lista',
      items: [
        '**Cuánta:** suficiente para cerrar la junta y hacer salir un cordón parejo de pequeñas gotas. La cola debe quedar como una película finísima.',
        '**Demasiada** expulsa casi toda la cola y deja una junta seca, y además curva las piezas y marca la madera.',
        '**Repartida:** la presión de cada mordaza se abre en un abanico. Pon las prensas a distancias cortas, más juntas en piezas finas.',
        '**[[Calzos|calzo]]:** listones rectos o levemente curvos prensados entre la mordaza y la pieza. Reparten la presión en piezas anchas y protegen la superficie.',
        '**Escuadra:** mide las diagonales de cada marco o caja después de apretar. Si difieren, inclina un poco las prensas hacia la diagonal larga hasta igualarlas.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las fichas técnicas de muchas colas indican la presión recomendada en N/mm². Suele ser menor en maderas blandas que en duras.' },
    { tipo: 'figura', id: 'calzo-diagonal', pie: 'La curvatura del calzo y el descuadre del marco están exagerados para que se vean.' },

    { tipo: 'h2', texto: 'La cola sobrante' },
    {
      tipo: 'lista',
      items: [
        '**Esperar a que esté gomosa** y retirarla con un formón o una rasqueta. Sale entera, sin ensuciar la madera.',
        '**Con un trapo húmedo enseguida** también funciona, pero diluye la cola y la mete en los poros. Esas manchas no toman el tinte ni el aceite.',
        '**En rincones difíciles,** cinta de pintor en los bordes antes de armar, o un sorbete cortado en bisel para recogerla.',
        '**Antes del acabado,** revisa con luz rasante o pasando un trapo con alcohol: las manchas de cola se ven más claras.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Las colas de poliuretano y epoxi irritan la piel y algunas desprenden vapores. Usa guantes y buena ventilación, y lee la ficha de seguridad del producto.' },
  ],
}

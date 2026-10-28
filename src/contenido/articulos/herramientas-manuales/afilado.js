export default {
  actualizado: '2026-10-28',
  relacionados: ['herramientas-manuales/formones-gubias', 'herramientas-manuales/cepillos', 'herramientas-manuales/escofinas-rascadores'],
  bloques: [
    { tipo: 'p', texto: 'Un filo es la intersección de dos superficies: la espalda y el [[bisel]]. Cuanto más lisas son y más fina es la línea donde se encuentran, mejor corta. Afilar no es un arte misterioso sino un método: aplanar, desbastar el bisel hasta que se forme una rebaba, afinar con piedras cada vez más finas y quitar la rebaba.' },

    { tipo: 'h2', texto: 'El filo, de cerca' },
    { tipo: 'figura', id: 'angulos-afilado', pie: 'Filo de un formón o una cuchilla de cepillo, con la espalda arriba. El espesor está exagerado.' },
    {
      tipo: 'lista',
      items: [
        '**Espalda:** la cara plana. Solo hace falta aplanar y pulir los primeros 2 – 3 cm junto al filo, pero tienen que quedar perfectamente planos.',
        '**Bisel primario:** se hace en la piedra gruesa o media, normalmente a 25°.',
        '**[[Microbisel|microbisel]]:** un bisel muy estrecho, unos grados más inclinado, hecho solo en la piedra fina. Ahorra mucho tiempo: al reafilar, solo se trabaja esa franja.',
        '**[[Rebaba|rebaba]]:** al afilar el bisel, el acero se dobla hacia la espalda formando una lámina finísima. Cuando se siente con la yema del dedo en todo el ancho, el bisel llegó al filo.',
      ],
    },

    { tipo: 'h2', texto: 'Ángulos' },
    {
      tipo: 'tabla',
      titulo: 'Ángulos de afilado orientativos',
      columnas: ['Herramienta', 'Bisel', 'Microbisel'],
      filas: [
        ['Formón de banco', '25°', '30°'],
        ['Formón de mortajar', '30°', '35°'],
        ['Formón de ajustar', '20 – 25°', 'Opcional'],
        ['Cuchilla de cepillo de banco (bisel abajo)', '25°', '30°'],
        ['Cuchilla de cepillo de bloque (bisel arriba)', '25°', '30°'],
        ['Gubias de talla', '20 – 25°', '—'],
      ],
      nota: 'Un ángulo más agudo corta mejor pero se mella antes; uno más abierto dura más. En maderas muy duras o abrasivas, sube unos grados.',
    },
    { tipo: 'p', texto: 'En un cepillo con el bisel hacia abajo, el ángulo de corte es el de la rana, normalmente 45°, sea cual sea el bisel. En uno con el bisel hacia arriba, el ángulo de corte es la suma del asiento y del bisel: 12° + 25° = 37°. Para maderas con veta difícil se usan ángulos de corte de 50 – 55°.' },

    { tipo: 'h2', texto: 'Abrasivos' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de piedra',
      columnas: ['Tipo', 'Ventajas', 'Inconvenientes'],
      filas: [
        ['Piedras al agua sintéticas', 'Cortan rápido y dan filos muy finos', 'Se desgastan y hay que aplanarlas a menudo'],
        ['Piedras al aceite', 'Duraderas y limpias de usar', 'Más lentas'],
        ['Placas de diamante', 'Siempre planas; sirven para aplanar otras piedras', 'Más caras; el grano más fino no pule tanto'],
        ['Lija sobre vidrio', 'Barata para empezar; cualquier grano', 'La lija se gasta enseguida'],
        ['Cuero con pasta', 'Pule y quita la rebaba final', 'Solo mantiene; no corrige el filo'],
      ],
    },
    {
      tipo: 'datos',
      items: [
        ['Grano grueso (≈ 200 – 400)', 'Reparar mellas y cambiar el ángulo'],
        ['Grano medio (≈ 800 – 1200)', 'Afilar el bisel de forma habitual'],
        ['Grano fino (≈ 4000 – 8000)', 'Pulir el filo y hacer el microbisel'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Las numeraciones de granos no son iguales entre sistemas ni fabricantes: un 1000 japonés no equivale a una lija de grano 1000. Usa los números como orientación.' },

    { tipo: 'h2', texto: 'Paso a paso' },
    {
      tipo: 'pasos',
      items: [
        '**Aplana la espalda** la primera vez: frótala plana sobre la piedra gruesa y luego las finas, hasta que los primeros centímetros brillen de forma pareja.',
        '**Fija el ángulo:** con una guía de afilar, la distancia a la que sobresale la hoja determina el ángulo. Anota esa distancia para repetirla siempre igual.',
        '**Afila el bisel** en la piedra media con pasadas largas y presión pareja, hasta sentir la rebaba en todo el ancho de la espalda.',
        '**Haz el microbisel:** sube el ángulo 5° y da 10 a 20 pasadas en la piedra fina.',
        '**Quita la rebaba:** apoya la espalda plana sobre la piedra fina y da unas pasadas; alterna con el bisel hasta que la rebaba se desprenda.',
        '**Asienta en el cuero** con pasta de pulir, arrastrando siempre hacia atrás, nunca contra el filo.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para saber si el filo está listo, míralo de frente bajo una luz fuerte: un filo afilado no refleja nada. Cualquier brillo en la línea del filo es una zona roma o una mella.' },

    { tipo: 'h2', texto: 'Amoladoras' },
    { tipo: 'p', texto: 'Una muela eléctrica desbasta rápido los biseles muy dañados, pero calienta el acero. Si el filo se pone azul o pajizo, perdió el temple en esa zona y hay que eliminarla. Toca el acero con frecuencia, enfríalo en agua y usa poca presión; las muelas lentas al agua no tienen ese problema.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Con una amoladora usa siempre gafas de protección y el apoyo de herramienta ajustado a 2 – 3 mm de la muela. Nunca afiles en el costado de la muela si no está diseñada para eso.' },

    { tipo: 'h2', texto: 'Mantener el filo' },
    {
      tipo: 'lista',
      items: [
        'Repasa en el cuero o en la piedra fina en cuanto el corte deja de ser limpio. Unas pasadas a tiempo ahorran media hora de afilado.',
        'Mantén las piedras planas: aplánalas cada pocas sesiones con una placa de diamante o una piedra de aplanar.',
        'Guarda las herramientas con el filo protegido.',
      ],
    },
  ],
}

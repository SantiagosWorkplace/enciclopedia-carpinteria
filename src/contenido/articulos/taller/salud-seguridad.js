export default {
  actualizado: '2026-10-29',
  relacionados: ['maquinas/seguridad-maquinas', 'maquinas/polvo', 'electricas/seguridad-electricas', 'acabados/seguridad-acabados'],
  bloques: [
    { tipo: 'p', texto: 'La carpintería es un oficio para toda la vida, y para disfrutarlo hay que llegar a viejo con los diez dedos, buena vista, buen oído y pulmones sanos. La mayoría de los daños no vienen de un accidente espectacular sino de exposiciones pequeñas y repetidas: polvo, ruido, posturas y productos químicos.' },

    { tipo: 'h2', texto: 'Protección personal' },
    { tipo: 'figura', id: 'proteccion-personal', pie: 'La protección básica para la cabeza: gafas, protección auditiva y mascarilla contra el polvo. Para vapores de acabados hace falta un respirador con filtros.' },
    {
      tipo: 'tabla',
      titulo: 'Qué usar y cuándo',
      columnas: ['Protección', 'Para qué', 'Detalles'],
      filas: [
        ['Gafas o pantalla facial', 'Astillas, viruta, polvo, salpicaduras', 'Siempre con máquinas, herramientas eléctricas, cinceles y químicos. Pantalla completa en el torno'],
        ['Protección auditiva', 'Ruido', 'Tapones o protectores con máquinas y herramientas eléctricas; el daño del oído es acumulativo y no se recupera'],
        ['Mascarilla FFP2 o FFP3', 'Polvo fino', 'Bien ajustada a la cara; se cambia cuando cuesta respirar'],
        ['Respirador con filtros para vapores', 'Solventes y acabados', 'Filtros del tipo indicado por el fabricante del producto'],
        ['Guantes', 'Astillas, químicos, cantos', 'Al manipular y al aplicar acabados; **nunca** con máquinas que giran'],
        ['Calzado cerrado y firme', 'Golpes y caídas de piezas', 'Con puntera si se manipulan piezas pesadas'],
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Ruido aproximado',
      columnas: ['Fuente', 'Nivel'],
      filas: [
        ['Conversación normal', '≈ 60 dB'],
        ['Lijadora', '≈ 80 – 90 dB'],
        ['Sierra circular, fresadora, sierra de mesa', '≈ 90 – 100 dB'],
        ['Cepilladora y regruesadora', '≈ 95 – 105 dB'],
      ],
      nota: 'Por encima de ≈ 80 – 85 dB durante horas, el oído se daña. Cada 3 dB más es el doble de energía sonora.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los valores de ruido cambian mucho según la máquina, la madera y la distancia. Muchos fabricantes indican el nivel de su máquina en el manual.' },

    { tipo: 'h2', texto: 'Maderas que pueden causar reacciones' },
    { tipo: 'p', texto: 'El polvo de algunas especies irrita la piel, los ojos o las vías respiratorias, y con el tiempo puede causar alergias. Ejemplos conocidos:' },
    {
      tipo: 'lista',
      items: [
        '**Cedro rojo occidental:** asma.',
        '**Iroko:** asma y dermatitis.',
        '**Teca:** dermatitis.',
        '**Palisandros** (género *Dalbergia*): dermatitis y alergias.',
        '**Wengué:** dermatitis; sus astillas se infectan con facilidad.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La sensibilidad varía mucho entre personas. Si trabajas con una especie nueva, infórmate sobre su toxicidad en una base de datos de especies y extrema la aspiración.' },

    { tipo: 'h2', texto: 'Primeros auxilios' },
    {
      tipo: 'lista',
      items: [
        '**Cortes:** presión directa con una gasa limpia y la herida elevada. Si sangra mucho, no deja de sangrar o es profunda, a urgencias.',
        '**Amputación:** presión fuerte sobre la herida y llamar a emergencias. La parte amputada, envuelta en una gasa limpia y húmeda dentro de una bolsa cerrada, y la bolsa sobre hielo, sin que el hielo la toque.',
        '**Astilla en el ojo:** no frotar. Lavar con abundante agua limpia; si no sale o duele, al médico con el ojo tapado.',
        '**Salpicadura química:** lavar con agua corriente al menos 15 minutos y consultar la ficha de seguridad del producto.',
        '**Quemaduras:** agua fría corriente durante 10 – 20 minutos; nada de hielo, aceite ni pomadas caseras.',
        '**Astillas en la piel:** con pinzas limpias, en la dirección en que entraron; desinfectar.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Ten un botiquín completo a la vista, un teléfono a mano y los números de emergencia anotados. Si trabajas solo con máquinas, avisa a alguien antes de empezar y al terminar.' },

    { tipo: 'h2', texto: 'Hábitos que protegen' },
    {
      tipo: 'lista',
      items: [
        'No trabajes cansado, apurado, enojado ni después de tomar alcohol o medicamentos que den sueño.',
        'Levanta las piezas pesadas con las piernas, no con la espalda, y pide ayuda con las placas.',
        'Haz pausas en trabajos repetitivos y con herramientas que vibran.',
        'Mantén el suelo libre de recortes, cables y virutas.',
        'Si algo te parece peligroso, probablemente lo sea: busca otra forma de hacerlo.',
      ],
    },
  ],
}

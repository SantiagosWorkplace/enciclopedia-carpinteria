export default {
  actualizado: '2026-10-29',
  relacionados: ['electricas/sierras-portatiles', 'taller/salud-seguridad', 'taller/electricidad-luz', 'maquinas/seguridad-maquinas'],
  bloques: [
    { tipo: 'p', texto: 'Una herramienta eléctrica hace en segundos lo que a mano lleva minutos, y con la misma rapidez puede causar un accidente. Casi todos los accidentes se repiten: la mano en la línea de corte, la pieza sin sujetar, el cambio de hoja con la herramienta enchufada, el rechazo de una sierra. Conocerlos es la mejor protección.' },

    { tipo: 'h2', texto: 'Protección personal' },
    {
      tipo: 'tabla',
      titulo: 'Equipo de protección',
      columnas: ['Riesgo', 'Protección', 'Cuándo'],
      filas: [
        ['Astillas y virutas en los ojos', 'Gafas o pantalla facial', 'Siempre, con cualquier herramienta eléctrica'],
        ['Ruido', 'Protectores auditivos o tapones', 'Sierras, fresadoras, cepillos y lijadoras: casi todas superan el nivel que daña el oído'],
        ['Polvo', 'Mascarilla FFP2 o FFP3 y aspiración', 'Al lijar, fresar y cortar tableros'],
        ['Atrapamiento', 'Ropa ajustada, mangas recogidas, pelo atado, sin anillos ni pulseras', 'Siempre'],
        ['Cortes al manipular', 'Guantes', 'Al mover tableros o cambiar hojas, **nunca** al usar herramientas que giran'],
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'El polvo de madera es un riesgo para la salud a largo plazo: el de maderas duras está clasificado como cancerígeno para las vías respiratorias. Aspira en la fuente, ventila y usa mascarilla aunque el trabajo sea corto.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los límites de exposición al polvo de madera y los niveles de ruido que obligan a usar protección están fijados por la normativa laboral de cada país.' },

    { tipo: 'h2', texto: 'Reglas básicas' },
    {
      tipo: 'pasos',
      items: [
        '**Lee el manual** de cada herramienta nueva. Cada una tiene sus propios riesgos y ajustes.',
        '**Sujeta la pieza** con prensas o en el banco. Una mano sosteniendo la pieza es una mano cerca de la cuchilla.',
        '**Desconecta** la herramienta o quita la batería antes de cambiar una hoja, una broca o una fresa, o de hacer cualquier ajuste.',
        '**Revisa** el cable, el enchufe, las protecciones y que la hoja o la fresa estén bien sujetas.',
        '**Planifica el corte:** que el cable y tu cuerpo queden fuera del recorrido de la herramienta, y que la pieza no caiga al final del corte.',
        '**No fuerces:** si la herramienta se frena, la hoja está desafilada o el avance es demasiado rápido.',
        '**Espera a que se detenga** del todo antes de apoyarla o retirarla de la pieza.',
        '**Trabaja descansado y concentrado.** El cansancio, el apuro y las distracciones están detrás de muchos accidentes.',
      ],
    },

    { tipo: 'h2', texto: 'El rechazo' },
    { tipo: 'p', texto: 'El [[rechazo]] es el accidente típico de las sierras circulares, las fresadoras y las amoladoras. Cuando el disco queda apretado en el corte o sus dientes muerden de golpe la madera, la energía del giro lanza la herramienta hacia atrás, hacia el usuario, o arranca la pieza de las manos.' },
    {
      tipo: 'lista',
      items: [
        'El corte se cierra detrás del disco porque la madera tiene tensiones o porque la pieza cede.',
        'La sierra se tuerce dentro del corte o se retrocede con el disco girando.',
        'El disco está desafilado, sucio de resina o tiene poco triscado.',
        'La profundidad del disco es excesiva.',
        'Con la fresadora, se avanza en el mismo sentido del giro.',
      ],
    },
    { tipo: 'p', texto: 'Cómo evitarlo con cada herramienta se explica en [Sierras circulares, caladoras y de sable](#/electricas/sierras-portatiles) y en [La fresadora](#/electricas/fresadora).' },

    { tipo: 'h2', texto: 'Electricidad' },
    {
      tipo: 'lista',
      items: [
        '**Diferencial:** conecta las herramientas a un circuito protegido por un interruptor diferencial de 30 mA.',
        '**Doble aislamiento:** las herramientas marcadas con un cuadrado dentro de otro no necesitan conexión a tierra; las demás, sí.',
        '**Prolongadores:** de sección suficiente para la potencia y la longitud, desenrollados del todo para que no se calienten.',
        '**Humedad:** no uses herramientas con cable bajo la lluvia ni sobre suelos mojados.',
      ],
    },
    { tipo: 'p', texto: 'La instalación del taller se trata en [Electricidad e iluminación](#/taller/electricidad-luz).' },
  ],
}

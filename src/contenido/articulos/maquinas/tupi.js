export default {
  actualizado: '2026-10-29',
  relacionados: ['electricas/fresadora', 'maquinas/seguridad-maquinas', 'uniones/ranuras-rebajos', 'chapeado/filetes'],
  bloques: [
    { tipo: 'p', texto: 'La tupí es una máquina con un eje vertical que asoma de una mesa y hace girar un portaherramientas o una fresa grande. Hace molduras, perfiles de puertas, ranuras, rebajos, espigas y copias de plantillas en serie, con una potencia y un tamaño de herramienta que ninguna fresadora alcanza. También es una de las máquinas más peligrosas del taller y la que más formación exige.' },

    { tipo: 'h2', texto: 'Tupí o mesa de fresar' },
    {
      tipo: 'tabla',
      titulo: 'Comparación',
      columnas: ['', 'Mesa de fresar', 'Tupí'],
      filas: [
        ['Potencia', '≈ 1,5 – 2,3 kW', '≈ 2 – 7 kW o más'],
        ['Velocidad', 'Muy alta, para fresas pequeñas', 'Menor, para herramientas grandes'],
        ['Herramientas', 'Fresas de vástago de 6 – 12 mm', 'Portacuchillas y fresas de hasta ≈ 200 mm o más'],
        ['Uso típico', 'Molduras pequeñas, ranuras, piezas sueltas', 'Producción en serie, perfiles grandes, puertas'],
      ],
    },

    { tipo: 'h2', texto: 'Herramientas' },
    {
      tipo: 'lista',
      items: [
        '**Portacuchillas:** un cuerpo de acero con cuchillas intercambiables de perfil.',
        '**Fresas de una pieza:** de metal duro, con su perfil fijo.',
        '**Herramientas con limitador de pasada:** su forma impide que cada cuchilla tome más de un espesor de viruta determinado. Son mucho más seguras al trabajar a mano y son obligatorias en muchos países.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las normas de seguridad sobre herramientas, protectores y alimentadores de la tupí cambian según el país. Respeta siempre la velocidad máxima marcada en la herramienta.' },

    { tipo: 'h2', texto: 'Principios de trabajo' },
    {
      tipo: 'lista',
      items: [
        '**Avance contra el giro:** la pieza se mueve siempre en sentido contrario al de la herramienta. El avance a favor del giro arranca la pieza de las manos.',
        '**La herramienta, lo más cubierta posible:** guía partida con las dos mitades lo más cerca posible de la herramienta, y protectores y prensores de muelle por encima y de costado.',
        '**[[Alimentador|alimentador]]:** siempre que se pueda, la pieza la empuja un alimentador motorizado. Las manos quedan lejos y el avance es parejo.',
        '**Piezas cortas o estrechas:** en un carro o con plantillas, nunca a mano.',
        '**Profundidad:** los perfiles grandes se hacen en varias pasadas.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'La tupí no perdona: si la pieza sale despedida, la mano que empujaba va hacia la herramienta. No la uses sin formación práctica, sin protectores, con piezas pequeñas sostenidas a mano ni con herramientas sin limitador de pasada en trabajo manual.' },

    { tipo: 'h2', texto: 'Trabajos con plantilla' },
    { tipo: 'p', texto: 'Para piezas curvas en serie, como los bastidores de sillas o los arcos de puertas, la pieza se fija a una plantilla que apoya en un anillo o un rodamiento de copia junto a la herramienta. Se empieza el corte contra un pivote de entrada, nunca de golpe contra la herramienta, y la plantilla lleva empuñaduras para mantener las manos lejos.' },
    { tipo: 'p', texto: 'Para trabajos pequeños y en el taller doméstico, una [fresadora](#/electricas/fresadora) en una mesa de fresar resuelve casi todo con mucho menos riesgo.' },
  ],
}

export default {
  actualizado: '2026-10-29',
  relacionados: ['taller/banco', 'taller/electricidad-luz', 'taller/almacenaje', 'maquinas/seguridad-maquinas'],
  bloques: [
    { tipo: 'p', texto: 'Un buen taller no necesita ser grande: necesita estar ordenado según el camino que recorre la madera, desde que entra en tablas hasta que sale convertida en un mueble. Un taller bien pensado ahorra pasos, evita accidentes y hace que el trabajo sea más agradable.' },

    { tipo: 'h2', texto: 'El recorrido de la madera' },
    { tipo: 'figura', id: 'distribucion-taller', pie: 'Taller de 6 × 4 m a escala. Las flechas siguen el recorrido de la madera; la franja roja es el espacio libre que necesita la sierra delante y detrás.' },
    {
      tipo: 'pasos',
      items: [
        '**Almacén:** cerca de la puerta, para descargar la madera sin cruzar el taller.',
        '**Corte en bruto:** la sierra o la ingletadora, cerca del almacén.',
        '**Cepillado:** cepilladora y regruesadora, que generan mucha viruta: cerca de la aspiración.',
        '**Banco y mecanizado:** el corazón del taller, con buena luz y las herramientas de mano a su alrededor.',
        '**Armado:** una mesa baja y amplia donde encolar y montar.',
        '**Acabado:** lo más lejos posible del polvo, o en otro ambiente, con ventilación.',
      ],
    },

    { tipo: 'h2', texto: 'Espacio para las piezas largas' },
    { tipo: 'p', texto: 'El problema de un taller pequeño no es dónde poner las máquinas sino cómo pasar las piezas por ellas. Para cortar al hilo una tabla de 2,4 m en una sierra de mesa hace falta ≈ 2,4 m libres delante de la hoja y otro tanto detrás, en línea.' },
    {
      tipo: 'lista',
      items: [
        'Alinea las máquinas que trabajan a lo largo, como la sierra de mesa y la cepilladora, en la misma dirección, para que compartan el espacio libre.',
        'Deja la ingletadora contra una pared larga, con soportes a los lados.',
        'Haz que la mesa de armado tenga la misma altura que la mesa de la sierra: sirve de mesa de salida.',
        'Si el espacio no alcanza, aprovecha puertas o ventanas: una tabla larga puede asomar por ellas al cortar.',
      ],
    },

    { tipo: 'h2', texto: 'Máquinas móviles' },
    { tipo: 'p', texto: 'En un garaje o un taller compartido, poner las máquinas sobre bases con ruedas bloqueables permite sacarlas al centro para trabajar y guardarlas contra la pared al terminar. Las ruedas deben bloquear el giro y el desplazamiento, para que la máquina no se mueva durante el corte.' },

    { tipo: 'h2', texto: 'El local' },
    {
      tipo: 'tabla',
      titulo: 'Qué mirar al elegir o preparar el lugar',
      columnas: ['Aspecto', 'Recomendación'],
      filas: [
        ['Puerta', '≥ 1,3 m de ancho para entrar placas de 1220 mm; mejor una puerta de garaje'],
        ['Altura', '≥ 2,4 m para girar tablas y placas'],
        ['Suelo', 'Firme y nivelado; hormigón con una alfombra de goma o tarima en las zonas de pie'],
        ['Humedad', 'Lo más estable posible: ≈ 40 – 60 % de humedad relativa. Ver [El movimiento de la madera](#/madera/movimiento)'],
        ['Temperatura', 'Las colas y los acabados necesitan en general más de 10 – 15 °C'],
        ['Ruido', 'Las máquinas superan los 90 dB: piensa en los vecinos y en el horario'],
        ['Electricidad', 'Circuitos suficientes para las máquinas. Ver [Electricidad e iluminación](#/taller/electricidad-luz)'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Antes de comprar o mover una máquina, dibuja la planta del taller a escala en papel cuadriculado y recorta las máquinas también a escala, con su espacio de entrada y salida. Prueba distribuciones moviendo los recortes.' },
  ],
}

export default {
  actualizado: '2026-10-29',
  relacionados: ['talla/sujetar-talla', 'talla/maderas-talla', 'herramientas-manuales/escofinas-rascadores', 'maquinas/sierra-cinta'],
  bloques: [
    { tipo: 'p', texto: 'La [[talla de bulto|talla-bulto]] es la escultura exenta: una figura que se ve desde todos los lados, como un animal, una persona o una forma abstracta. Se parte de un bloque y se quita todo lo que sobra. A diferencia del relieve, no hay un fondo que sostenga la forma: cada parte tiene que resistir por sí misma.' },

    { tipo: 'h2', texto: 'Antes de cortar' },
    {
      tipo: 'lista',
      items: [
        '**Modelo:** un dibujo de frente y de costado a tamaño real, o mejor, un modelo pequeño de plastilina o arcilla. Es mucho más fácil corregir el modelo que la madera.',
        '**Dirección de la veta:** debe correr a lo largo de las partes finas, como patas, cuellos, colas o brazos. Si una parte fina queda de [[veta corta|veta-corta]], se quiebra con el primer golpe.',
        '**Base de desperdicio:** deja un taco de madera bajo la figura para sujetarla con el [[tornillo de tallista|tornillo-tallista]]. Se separa al final.',
        '**Bloque:** si no consigues una pieza maciza seca del tamaño necesario, encola varias tablas. Ver [Maderas para tallar](#/talla/maderas-talla).',
      ],
    },

    { tipo: 'h2', texto: 'Paso a paso' },
    { tipo: 'figura', id: 'etapas-bulto', pie: 'El bloque en perspectiva, con los dos perfiles trazados con lápiz; el bloque serrado por su perfil lateral, y cómo se redondea la sección por etapas.' },
    {
      tipo: 'pasos',
      items: [
        '**Trazar:** dibuja el perfil lateral en una cara del bloque y el perfil frontal en la cara contigua, a la misma escala y alineados en altura.',
        '**Serrar el perfil lateral** con la sierra de cinta o con una sierra de arco. Guarda los recortes.',
        '**Volver a armar el bloque:** pega los recortes en su lugar con cinta. Así vuelves a tener caras planas y el perfil frontal sigue a la vista.',
        '**Serrar el perfil frontal.** Al quitar la cinta y los recortes queda una figura cuadrada, ya con su silueta desde dos lados.',
        '**Línea de centro:** traza una línea por el centro de toda la figura, de frente y de espaldas. Vuelve a marcarla cada vez que la borres al tallar.',
        '**[[Desbaste|desbaste]]:** quita las esquinas con gubias anchas y mazo, o con escofinas. Primero se pasa de cuadrado a octógono y después a la curva.',
        '**Modelar:** define las formas grandes antes que las pequeñas. Compara a menudo con el modelo, de lejos y desde todos los lados.',
        '**Detalles:** ojos, plumas, pelo, pliegues, con gubias pequeñas y la gubia en V.',
        '**Separar la base** y terminar la superficie a gubia, con escofina y rascador, o con lija.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Toma las medidas del modelo con un compás de puntas y pásalas a la pieza. Para copias exactas a escala se usa una máquina de sacar puntas, que marca la profundidad de muchos puntos del modelo en el bloque.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'En la sierra de cinta, la pieza debe apoyar en la mesa justo debajo de la hoja. Con un bloque ya serrado, que se balancea, apóyalo sobre un calzo o sujétalo con una prensa a un tablero plano. Ver [Sierra de cinta](#/maquinas/sierra-cinta).' },

    { tipo: 'h2', texto: 'Tallar con cuchillo' },
    { tipo: 'p', texto: 'Las figuras pequeñas, de una mano de alto, se tallan con un cuchillo y la pieza en la mano. Se usan unos pocos cortes, siempre con la hoja controlada por las dos manos:' },
    {
      tipo: 'tabla',
      titulo: 'Cortes básicos con cuchillo',
      columnas: ['Corte', 'Cómo se hace', 'Para qué'],
      filas: [
        ['Empuje con el pulgar', 'El pulgar de la mano que sostiene la pieza empuja el lomo de la hoja', 'Cortes cortos y precisos'],
        ['Palanca', 'El pulgar de la mano del cuchillo apoya en la pieza; la muñeca gira y la hoja corta como unas tijeras', 'Rebajes pequeños y controlados'],
        ['Hacia el pulgar', 'La hoja avanza hacia el pulgar, como al pelar una papa, frenada por los dedos', 'Detalles finos; con el pulgar protegido'],
        ['De parada', 'Un corte recto que marca dónde termina el siguiente', 'Separar formas, como un ala del cuerpo'],
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Usa un guante anticorte en la mano que sostiene la pieza y un dedal o cinta en el pulgar. Mantén el cuchillo siempre afilado: un filo romo exige más fuerza y resbala.' },
  ],
}

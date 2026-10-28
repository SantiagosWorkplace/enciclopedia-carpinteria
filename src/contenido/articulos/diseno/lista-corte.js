export default {
  actualizado: '2026-10-28',
  relacionados: ['diseno/planos', 'madera/aserrado', 'madera/defectos', 'madera/tableros'],
  bloques: [
    { tipo: 'p', texto: 'La lista de corte es el puente entre el plano y la madera: una tabla con cada pieza del mueble, cuántas hay y sus medidas. Con ella se calcula cuánta madera comprar, se aprovechan mejor las tablas y se sabe en todo momento qué falta fabricar.' },

    { tipo: 'h2', texto: 'Qué lleva una lista de corte' },
    {
      tipo: 'tabla',
      titulo: 'Ejemplo: mesa de comedor de 140 × 80 cm',
      columnas: ['Ref.', 'Pieza', 'Cant.', 'Largo', 'Ancho', 'Espesor', 'Material', 'Notas'],
      filas: [
        ['A', 'Pata', '4', '720', '45', '45', 'Roble', 'Veta recta; anillos en diagonal'],
        ['B', 'Faldón largo', '2', '1100', '90', '22', 'Roble', 'Incluye espigas de 30'],
        ['C', 'Faldón corto', '2', '600', '90', '22', 'Roble', 'Incluye espigas de 30'],
        ['D', 'Tablero', '1', '1400', '800', '25', 'Roble', 'De 6 tablas encoladas'],
        ['E', 'Botón', '10', '50', '30', '20', 'Recortes', ''],
      ],
      nota: 'Medidas finales en milímetros, ya cepilladas. El largo es siempre en el sentido de la veta.',
    },
    {
      tipo: 'lista',
      items: [
        '**Referencia:** una letra por pieza, que se escribe también en el plano y, con tiza o lápiz, en la madera.',
        '**Largo en el sentido de la veta:** así no hay dudas sobre cómo cortar la pieza.',
        '**Medidas finales:** las de la pieza terminada. Incluyen las espigas y las lengüetas, que son parte de la pieza.',
        '**Notas:** orientación de la veta, piezas que deben salir de la misma tabla, uniones especiales.',
      ],
    },

    { tipo: 'h2', texto: 'De la medida final a la medida en bruto' },
    { tipo: 'p', texto: 'La madera en bruto llega más gruesa, más ancha y más larga de lo que quedará la pieza. Al elegir la tabla de la que saldrá cada pieza, hay que sumar:' },
    {
      tipo: 'datos',
      items: [
        ['Largo', '+ 25 – 50 mm para recortar las testas, que suelen tener fendas'],
        ['Ancho', '+ 5 – 10 mm para cantear y cepillar'],
        ['Espesor', '+ 3 – 6 mm para aplanar y cepillar; más si la tabla está deformada'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para piezas finales de 19 – 20 mm, compra madera en bruto de al menos 25 mm. Para piezas de 45 mm, necesitarás 50 mm o más, o encolar dos piezas.' },

    { tipo: 'h2', texto: 'Calcular el material' },
    { tipo: 'p', texto: 'Escribe tu lista de corte en la tabla. El cálculo suma el volumen de las piezas macizas y la superficie de las de tablero, y les agrega un porcentaje de desperdicio:' },
    { tipo: 'interactivo', id: 'lista-corte' },
    {
      tipo: 'tabla',
      titulo: 'Desperdicio orientativo',
      columnas: ['Material', 'Desperdicio'],
      filas: [
        ['Madera maciza de buena calidad, piezas grandes', '15 – 25 %'],
        ['Madera maciza común, muchas piezas pequeñas o elección de veta', '30 – 50 %'],
        ['Tablero, piezas rectangulares bien distribuidas', '10 – 20 %'],
        ['Tablero con veta que debe seguir una dirección', '20 – 30 %'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'La cantidad de placas que da la calculadora es una estimación por superficie. Para saber exactamente cuántas placas necesitas, hay que dibujar cómo se acomodan las piezas en cada una.' },

    { tipo: 'h2', texto: 'Plan de corte de un tablero' },
    {
      tipo: 'pasos',
      items: [
        'Dibuja la placa a escala con sus medidas reales, por ejemplo 2440 × 1220 mm.',
        'Resta unos milímetros en los bordes: los cantos de fábrica suelen estar golpeados.',
        'Coloca primero las piezas más grandes y después llena los huecos con las pequeñas.',
        'Deja entre pieza y pieza el ancho del corte de la sierra, ≈ 3 – 4 mm.',
        'Si el tablero tiene veta o dibujo, orienta todas las piezas visibles en el mismo sentido.',
        'Organiza los cortes para que sean de lado a lado: primero cortes largos que dividan la placa en tiras, después cortes cortos.',
      ],
    },
    { tipo: 'p', texto: 'Muchos almacenes de tableros cortan las piezas a medida con máquina si se les entrega la lista. Existen también programas gratuitos que optimizan el plan de corte.' },

    { tipo: 'h2', texto: 'Elegir de qué tabla sale cada pieza' },
    {
      tipo: 'lista',
      items: [
        'Las piezas más visibles, como el frente de un cajón o el tablero, salen de las mejores tablas.',
        'Las piezas que deben verse iguales, como dos puertas, salen de la misma tabla o de tablas consecutivas.',
        'Las patas, mejor con veta recta y anillos en diagonal, para que las cuatro caras se vean parecidas.',
        'Los nudos y los defectos pequeños pueden ir en piezas ocultas o en zonas que se van a eliminar.',
        'Marca cada pieza con su letra y un triángulo de carpintero que indique la cara y el canto de referencia.',
      ],
    },
  ],
}

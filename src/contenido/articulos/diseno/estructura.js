export default {
  actualizado: '2026-10-28',
  relacionados: ['madera/propiedades', 'diseno/seguridad-diseno', 'uniones/elegir-union', 'madera/tableros'],
  bloques: [
    { tipo: 'p', texto: 'Un mueble es una pequeña estructura: recibe cargas y tiene que llevarlas hasta el suelo sin romperse, sin doblarse demasiado y sin volcar. No hace falta hacer cálculos de ingeniería para diseñar bien, pero sí entender qué le pasa a cada pieza cuando se usa.' },

    { tipo: 'h2', texto: 'Qué cargas recibe un mueble' },
    {
      tipo: 'lista',
      items: [
        '**Peso propio:** el del mueble mismo. En un ropero grande puede superar los 100 kg.',
        '**Carga de uso:** libros, platos, una persona sentada. Los libros pesan mucho más de lo que parece: un metro de estante lleno puede cargar 25 – 40 kg.',
        '**Cargas dinámicas:** dejarse caer en una silla, subirse a una mesa, un cajón que se cierra de golpe. Pueden duplicar o triplicar la carga quieta.',
        '**Cargas laterales:** empujar un mueble, apoyarse en el respaldo, mecerse en una silla sobre dos patas. Son las que más uniones rompen.',
      ],
    },
    { tipo: 'p', texto: 'Cada pieza trabaja a compresión, tracción, flexión o cortante. Los esfuerzos y cómo resiste la madera cada uno se explican en [Propiedades mecánicas](#/madera/propiedades).' },

    { tipo: 'h2', texto: 'Flexión: estantes, tableros y asientos' },
    { tipo: 'p', texto: 'Una pieza apoyada en sus extremos y cargada se curva. Cuánto baja su centro, la [[flecha]], depende de cuatro cosas:' },
    {
      tipo: 'lista',
      items: [
        '**La [[luz]] entre apoyos, elevada a la cuarta potencia** en una carga repartida: un estante el doble de largo baja **16 veces** más con la misma carga por metro.',
        '**El espesor, al cubo:** el doble de espesor lo hace 8 veces más rígido.',
        '**El ancho o fondo:** el doble de fondo, el doble de rigidez.',
        '**El material:** su [[módulo de elasticidad|moe]]. El MDF y el aglomerado son 3 o 4 veces menos rígidos que la madera maciza.',
      ],
    },
    { tipo: 'p', texto: 'Además, la madera y sobre todo los tableros siguen curvándose bajo una carga permanente: es la [[fluencia]]. Un estante de aglomerado que hoy parece recto puede estar visiblemente combado en un año.' },
    { tipo: 'interactivo', id: 'calculadora-estante' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La calculadora usa la fórmula de una viga simplemente apoyada con carga repartida, módulos de elasticidad medios y los factores de fluencia del Eurocódigo 5 para interior seco. El límite de 1/600 de la luz es un criterio práctico de aspecto, no de resistencia. Los tableros varían mucho entre fabricantes.' },
    {
      tipo: 'h3', texto: 'Cómo hacer más rígido un estante',
    },
    {
      tipo: 'lista',
      items: [
        '**Acortar la luz:** es lo más eficaz. Un soporte en el centro reduce la flecha a una fracción.',
        '**Pegar un listón de canto** en el frente, de 40 – 50 mm de alto: funciona como una viga y además tapa el canto del tablero.',
        '**Fijar el estante a la trasera** con tornillos o en una ranura: la trasera lo sostiene a lo largo.',
        '**Usar madera maciza o contrachapado** en lugar de aglomerado para luces largas.',
      ],
    },

    { tipo: 'h2', texto: 'Descuadre: el enemigo de las cajas y los bastidores' },
    { tipo: 'p', texto: 'Un rectángulo de cuatro piezas unidas en las esquinas se deforma con facilidad en un paralelogramo: es el [[descuadre]]. Le pasa a una estantería sin trasera que se balancea, a una mesa que "baila" o a una silla que se afloja. Hay tres formas de evitarlo:' },
    {
      tipo: 'lista',
      items: [
        '**Triangular:** una diagonal, una cartela o una escuadra en la esquina. El triángulo es la única figura que no se deforma sin cambiar la longitud de sus lados.',
        '**Cerrar con un panel:** una trasera de contrachapado o de tablero, encolada o atornillada en todo su perímetro, rigidiza una caja como ninguna otra pieza.',
        '**Uniones rígidas y anchas:** una caja y espiga larga en un faldón ancho resiste mucho mejor el giro que una espiga corta o una unión con dos tornillos.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'En una mesa, cuanto más ancho es el faldón, mejor resiste el descuadre: la unión tiene más brazo de palanca. Por debajo de unos 7 – 8 cm de alto, conviene agregar chambranas o esquineros.' },

    { tipo: 'h2', texto: 'Las uniones, el punto débil' },
    { tipo: 'p', texto: 'Casi nunca se rompe una pieza por el medio: falla la unión. Algunas razones:' },
    {
      tipo: 'lista',
      items: [
        '**Palanca:** una fuerza pequeña lejos de la unión produce un esfuerzo grande en ella. Al mecerse en una silla, la unión entre la pata trasera y el faldón lateral recibe el peso de la persona multiplicado por el largo de la pata.',
        '**Contraveta:** si se encolan piezas con las vetas cruzadas, el movimiento de la madera rompe la cola con el tiempo.',
        '**Aplastamiento por humedad:** cuando una espiga ajustada se hincha dentro de su caja, se aplasta un poco; al secarse queda más delgada y la unión se afloja. Es la razón de muchas sillas que se aflojan con los años.',
        '**Poca superficie de encolado:** la cola trabaja bien en caras a lo largo de la veta y muy mal en las testas.',
      ],
    },
    { tipo: 'p', texto: 'Cómo elegir la unión adecuada para cada caso se explica en el capítulo [Uniones](#/uniones/elegir-union).' },

    { tipo: 'h2', texto: 'Veta corta' },
    { tipo: 'p', texto: 'Cuando una pieza curva se corta de una tabla recta, en las zonas donde la curva atraviesa la veta las fibras quedan muy cortas y la pieza se parte con facilidad. Pasa en patas curvas, respaldos y brazos de sillón.' },
    {
      tipo: 'lista',
      items: [
        'Orienta la pieza en la tabla para que la veta siga la curva lo más posible.',
        'Divide la curva en dos o más piezas unidas.',
        'Curva la madera en lugar de cortarla: con vapor o laminando chapas finas. Ver el capítulo [Curvado](#/curvado/principios-curvado).',
      ],
    },

    { tipo: 'h2', texto: 'Estabilidad' },
    { tipo: 'p', texto: 'Un mueble vuelca cuando la vertical que pasa por su [[centro de gravedad|centro-gravedad]] sale de la superficie de apoyo. Los muebles altos y estrechos, con cajones que se abren o con el peso arriba, son los más peligrosos. Se explica en detalle, con cálculo incluido, en [Diseñar muebles seguros](#/diseno/seguridad-diseno).' },
  ],
}

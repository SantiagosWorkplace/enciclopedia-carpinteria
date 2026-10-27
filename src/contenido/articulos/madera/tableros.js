export default {
  actualizado: '2026-10-27',
  relacionados: ['madera/chapas', 'madera/movimiento', 'construccion/en-seco', 'herrajes/tornillos'],
  bloques: [
    { tipo: 'p', texto: 'Los tableros manufacturados se fabrican descomponiendo la madera en chapas, listones, virutas, partículas o fibras, y volviéndola a unir con cola y presión. El resultado pierde parte del carácter de la madera maciza, pero gana lo que a ella le falta: grandes medidas, espesor uniforme y un movimiento casi nulo con la humedad.' },

    { tipo: 'h2', texto: 'Los tableros principales' },
    { tipo: 'figura', id: 'tableros', pie: 'Cara superior y sección de cada tablero. Los espesores no están a escala y las densidades son aproximadas.' },
    { tipo: 'h3', texto: 'Contrachapado' },
    { tipo: 'p', texto: 'El [[contrachapado]] se forma con chapas de desenrollo encoladas con la veta cruzada a 90° entre capas. Siempre lleva un número impar de chapas, simétrico respecto de la central, para que las tensiones se equilibren y el tablero no se curve. Según el país se llama también multilaminado, terciado, compensado o triplay.' },
    {
      tipo: 'lista',
      items: [
        '**Resistente en todas las direcciones** de la cara y bueno para sujetar tornillos, incluso cerca de los cantos.',
        '**Calidad según las caras:** cada fabricante clasifica las caras por sus defectos y reparaciones, con letras o números.',
        '**Abedul:** muchas chapas finas, por ejemplo 13 en un tablero de 18 mm. Muy estable y con un canto vistoso.',
        '**Fenólico:** con caras de film impregnado en resina, resistente al agua y al desgaste. Se usa para encofrados.',
        '**Marino:** chapas y cola elegidas para resistir el agua, sin huecos interiores.',
      ],
    },
    { tipo: 'p', texto: 'Según la cola, la norma europea EN 636 distingue contrachapados para ambiente seco, húmedo o exterior. Los de interior suelen ir encolados con urea-formaldehído, y los de exterior, con colas fenólicas, más oscuras y resistentes al agua.' },

    { tipo: 'h3', texto: 'Alistonado' },
    { tipo: 'p', texto: 'El [[alistonado]] tiene un núcleo de listones de madera maciza y, en general, una o dos chapas por cada cara. Es más liviano que el aglomerado o el MDF, rígido y bueno para estantes largos y puertas.' },
    { tipo: 'p', texto: 'Se llama también alistonado al tablero hecho solo de listones macizos encolados por el canto, a veces con empalmes dentados. En ese caso es madera maciza y se mueve como tal: hay que tratarlo como un tablero de tablas encoladas.' },

    { tipo: 'h3', texto: 'Aglomerado' },
    { tipo: 'p', texto: 'El [[aglomerado]] se fabrica con partículas de madera encoladas y prensadas, más finas en las caras para que queden lisas. Es el tablero más barato y la base de la mayoría de los muebles de melamina.' },
    {
      tipo: 'lista',
      items: [
        '**Ventajas:** económico, plano y estable.',
        '**Limitaciones:** sujeta mal los tornillos, sobre todo en los cantos; se hincha y se deshace con el agua; los cantos se desgranan si no se protegen.',
        '**Hidrófugo:** existen versiones resistentes a la humedad, a menudo teñidas de verde, para cocinas y baños. Resisten la humedad, no el agua directa.',
      ],
    },
    { tipo: 'p', texto: 'La norma europea EN 312 clasifica los tableros de partículas en tipos P1 a P7 según su resistencia y el ambiente de uso.' },

    { tipo: 'h3', texto: 'MDF' },
    { tipo: 'p', texto: 'El [[MDF|mdf]] se fabrica con fibras de madera secas, mezcladas con resina y prensadas. Es homogéneo en todo su espesor, lo que permite fresarlo, moldurarlo y pintarlo con un acabado muy liso. En Argentina se conoce como fibrofácil, y en Chile, como trupán.' },
    {
      tipo: 'lista',
      items: [
        '**Ventajas:** caras y cantos lisos; ideal para pintar, fresar y para plantillas.',
        '**Limitaciones:** pesado, flexa bajo carga en estantes largos y sujeta mal los tornillos en los cantos. Se hincha con el agua salvo en sus versiones resistentes a la humedad.',
        '**HDF:** versión de alta densidad, de pocos milímetros, para fondos de muebles, cajones y suelos laminados.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'El polvo de MDF es muy fino y contiene resina. Córtalo y líjalo con aspiración y una mascarilla FFP2 o mejor, aunque sean pocos cortes.' },

    { tipo: 'h3', texto: 'OSB' },
    { tipo: 'p', texto: 'El [[OSB|osb]] se fabrica con virutas largas y planas, orientadas en capas: las de las caras van a lo largo del tablero y las del centro, cruzadas o al azar. Es resistente y económico, y es el tablero estructural más usado para cerramientos, techos y suelos en la [construcción en seco](#/construccion/en-seco).' },
    { tipo: 'p', texto: 'La norma EN 300 lo clasifica en OSB/1 (uso general en interior), OSB/2 (estructural en ambiente seco), OSB/3 (estructural en ambiente húmedo) y OSB/4 (estructural de alta prestación en ambiente húmedo).' },

    { tipo: 'h3', texto: 'Tablero duro' },
    { tipo: 'p', texto: 'Fibras muy prensadas en láminas delgadas, de 2 a 6 mm, con una cara lisa y a veces la otra rugosa. Se usa en fondos de muebles, bases de cajones y revestimientos. En Argentina se lo conoce por la marca comercial *chapadur*.' },

    { tipo: 'h2', texto: 'Comparación' },
    {
      tipo: 'tabla',
      titulo: 'Características principales',
      columnas: ['Tablero', 'Densidad', 'Tornillos en el canto', 'Con humedad', 'Usos típicos'],
      filas: [
        ['Contrachapado', '≈ 450 – 700 kg/m³', 'Bien', 'Bien si es de exterior', 'Muebles, cajones, estructura, encofrados'],
        ['Alistonado', '≈ 450 – 550 kg/m³', 'Bien, en el sentido de los listones', 'Regular', 'Estantes, puertas, tableros de mesa'],
        ['Aglomerado', '≈ 600 – 700 kg/m³', 'Mal', 'Mal; regular si es hidrófugo', 'Muebles de melamina, interiores'],
        ['MDF', '≈ 650 – 800 kg/m³', 'Mal', 'Mal; regular si es resistente a la humedad', 'Muebles pintados, molduras, plantillas'],
        ['OSB', '≈ 600 – 680 kg/m³', 'Regular', 'Bien el OSB/3', 'Cerramientos, techos, suelos, embalajes'],
        ['Tablero duro', '≈ 900 kg/m³ o más', 'No se atornilla de canto', 'Mal', 'Fondos y bases de cajón'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las densidades y comportamientos son orientativos y varían mucho entre fabricantes. Consulta la ficha técnica del tablero concreto.' },

    { tipo: 'h2', texto: 'Medidas habituales' },
    {
      tipo: 'tabla',
      titulo: 'Formatos frecuentes',
      columnas: ['Tablero', 'Medidas de la placa', 'Espesores frecuentes'],
      filas: [
        ['Contrachapado y OSB', '2440 × 1220 mm; también 2500 × 1250 mm', '4, 6, 9, 12, 15, 18 y 25 mm'],
        ['MDF y aglomerado', '2440 × 1220, 2600 × 1830 o 2750 × 1830 mm', '3, 5,5, 9, 12, 15, 18, 25 y 30 mm'],
        ['Melamina', '2600 × 1830 o 2750 × 1830 mm', '15, 18 y 25 mm'],
        ['Tablero duro', '2440 × 1220 o 2600 × 1830 mm', '3 mm, a veces 5 mm'],
      ],
      nota: 'Los formatos cambian según el país y el fabricante. El formato de 2440 × 1220 mm viene de las medidas imperiales de 8 × 4 pies.',
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Mide siempre el espesor real del tablero antes de cortar ranuras y encastres: un contrachapado "de 18" puede tener 17,5 mm o 18,5 mm.' },

    { tipo: 'h2', texto: 'Tableros con acabado' },
    {
      tipo: 'lista',
      items: [
        '**Melamina:** aglomerado o MDF revestido con papel decorativo impregnado en resina. Lista para usar; los cantos se cubren con tapacantos.',
        '**Laminado de alta presión (HPL):** láminas más gruesas y resistentes, para mesadas y superficies de mucho uso.',
        '**Chapados:** con chapa natural de madera, listos para lijar y barnizar.',
        '**Prepintados o lacados:** con una base de pintura o un acabado final de fábrica.',
      ],
    },

    { tipo: 'h2', texto: 'Formaldehído y salud' },
    { tipo: 'p', texto: 'Muchas colas de tableros contienen [[formaldehído|formaldehido]], que se libera poco a poco al aire, sobre todo cuando el tablero es nuevo, hace calor y hay humedad. Por eso las normas limitan cuánto puede emitir:' },
    {
      tipo: 'lista',
      items: [
        '**E1:** la clase de referencia en Europa durante años, con un límite de 0,1 ppm en el ensayo de cámara.',
        '**Unión Europea:** desde agosto de 2026, un reglamento baja el límite para muebles y productos de madera a 0,062 mg/m³.',
        '**Estados Unidos:** la norma TSCA Título VI, equivalente a la antigua CARB fase 2.',
        '**Sin formaldehído añadido:** tableros con colas que no lo contienen, marcados como NAF o similares.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los límites y la denominación de las clases cambian según el país y se han endurecido en los últimos años. Comprueba la clase en la etiqueta o la ficha del tablero y la norma vigente en tu país.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Sellar todas las caras y los cantos de un tablero con barniz o pintura reduce mucho sus emisiones. Ventila bien los muebles nuevos durante las primeras semanas.' },

    { tipo: 'h2', texto: 'Trabajar con tableros' },
    {
      tipo: 'lista',
      items: [
        '**Corte limpio:** usa discos de metal duro con muchos dientes. La cara buena va **hacia abajo** con sierra circular portátil y caladora, porque los dientes cortan subiendo, y **hacia arriba** en la sierra de mesa, donde cortan bajando.',
        '**Melamina:** para que no se astille, marca el corte con una cuchilla, pon cinta de papel en la línea o usa una sierra con disco incisor.',
        '**Tornillos:** en aglomerado y MDF usa tornillos específicos, pretaladra siempre y aléjate del extremo. Para cajas de melamina se usan tornillos tipo confirmat de 7 × 50 mm con su broca escalonada.',
        '**Cantos:** cúbrelos con tapacantos de melamina, PVC o chapa, o pega un listón de madera maciza que proteja el canto y permita moldurarlo.',
        '**Almacenaje:** guárdalos en horizontal sobre apoyos parejos y poco separados, o de pie apoyados en toda su superficie. Apoyados en ángulo contra una pared, se curvan.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Una placa de MDF de 18 mm pesa entre ≈ 40 y 70 kg según el formato. Muévelas entre dos personas o con un carro y lleva guantes: los cantos de melamina cortan.' },
  ],
}

export default {
  actualizado: '2026-10-28',
  relacionados: ['diseno/estructura', 'diseno/armarios', 'acabados/seguridad-acabados', 'madera/tableros'],
  bloques: [
    { tipo: 'p', texto: 'Un mueble mal pensado puede lastimar: los accidentes más graves con muebles son los vuelcos de cómodas, estanterías y televisores sobre niños pequeños. La mayoría se evita con decisiones simples de diseño y con un tornillo a la pared.' },

    { tipo: 'h2', texto: 'Por qué vuelca un mueble' },
    { tipo: 'p', texto: 'Un mueble apoyado en el suelo vuelca cuando una fuerza lo hace girar sobre su arista delantera y la vertical de su [[centro de gravedad|centro-gravedad]] sale de la base. Lo favorecen:' },
    { tipo: 'figura', id: 'vuelco', pie: 'A la izquierda, un tirón arriba hace girar la estantería sobre la arista delantera. A la derecha, la misma estantería fijada a la pared.' },
    {
      tipo: 'lista',
      items: [
        '**Altura grande y fondo pequeño:** cuanto más alto y estrecho, menos fuerza hace falta.',
        '**Peso arriba:** un televisor o libros en los estantes superiores suben el centro de gravedad.',
        '**Cajones abiertos:** al abrir varios cajones, el peso se adelanta; si además un niño se apoya o trepa, su peso actúa en el borde, lejos de la base.',
        '**Suelos irregulares o alfombras gruesas:** inclinan el mueble hacia adelante.',
      ],
    },
    { tipo: 'h3', texto: 'Cuánta fuerza hace falta' },
    { tipo: 'p', texto: 'Para un mueble con el peso repartido de forma pareja, la fuerza horizontal en la parte de arriba que lo hace volcar es aproximadamente:' },
    { tipo: 'datos', items: [['Fuerza de vuelco', '= peso × (fondo ÷ 2) ÷ altura']] },
    { tipo: 'p', texto: 'Una estantería vacía de 30 kg, 30 cm de fondo y 180 cm de alto vuelca con 30 × 0,15 ÷ 1,8 ≈ **2,5 kg** de fuerza en lo alto: menos de lo que hace un niño de dos años al colgarse.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Fija a la pared todo mueble alto, toda cómoda o cajonera y todo mueble que sostenga un televisor, aunque parezca estable. Usa escuadras metálicas o cintas antivuelco atornilladas a un elemento firme de la pared, con tacos adecuados al tipo de pared.' },
    {
      tipo: 'lista',
      items: [
        'Pon lo pesado en los estantes y cajones de abajo.',
        'Haz los muebles algo más profundos en la base, o con zócalo hacia adelante, si van a estar sueltos.',
        'En cómodas, un tope o un sistema que impida abrir más de un cajón a la vez reduce mucho el riesgo.',
        'Los televisores van fijados al mueble o a la pared, nunca solo apoyados.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Varios países exigen ensayos de estabilidad para cómodas y roperos, como la norma europea EN 14749 o la ley STURDY en Estados Unidos. Si fabricas para vender, consulta la normativa aplicable.' },

    { tipo: 'h2', texto: 'Muebles para niños' },
    {
      tipo: 'lista',
      items: [
        '**Cunas:** la separación entre barrotes debe impedir que pase la cabeza; la norma europea fija entre 45 y 65 mm. El colchón debe ajustar sin huecos a los lados.',
        '**Camas cucheta o literas:** barandas en los cuatro lados de la cama de arriba, con su borde al menos 16 cm por encima del colchón. La cama superior no es para menores de 6 años.',
        '**Huecos que atrapan:** evita aberturas en las que quepan los dedos pero no salgan, de ≈ 7 – 12 mm, y huecos en los que quepa el cuerpo pero no la cabeza.',
        '**Baúles de juguetes:** con tapa liviana, sostenida por un herraje que la mantenga abierta en cualquier posición, y con agujeros de ventilación o una separación que impida el cierre hermético.',
        '**Piezas pequeñas:** nada que pueda soltarse y caber en la boca de un niño pequeño.',
        '**Cordones y cuerdas:** fuera del alcance de la cuna y de los muebles a los que trepan.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las medidas de cunas (EN 716), literas (EN 747) y juguetes (EN 71) son de normas europeas; otros países tienen normas equivalentes con valores que pueden variar. Consúltalas antes de fabricar muebles infantiles para terceros.' },

    { tipo: 'h2', texto: 'Aristas, astillas y vidrio' },
    {
      tipo: 'lista',
      items: [
        'Redondea o achaflana las aristas vivas, sobre todo a la altura de la cabeza de un niño y en los bordes de mesas y estantes.',
        'Lija las caras ocultas que se tocan, como el interior de los cajones y la parte de abajo de los tableros.',
        'Usa siempre vidrio **templado** o laminado en puertas, estantes y tapas de mesa: si se rompe, no forma esquirlas cortantes.',
        'Las puntas de tornillos y clavos no deben asomar por ninguna cara.',
      ],
    },

    { tipo: 'h2', texto: 'Resistencia' },
    {
      tipo: 'lista',
      items: [
        'Diseña para cargas mayores que las esperadas: alguien se va a subir a la silla para cambiar una lámpara y alguien se va a sentar en la mesa.',
        'Antes de entregar un mueble, pruébalo con el doble de la carga normal, aplicada poco a poco y sin golpes.',
        'Revisa periódicamente uniones y herrajes de sillas, literas y muebles infantiles.',
      ],
    },

    { tipo: 'h2', texto: 'Materiales y acabados' },
    {
      tipo: 'lista',
      items: [
        '**Tableros:** elige tableros de baja emisión de formaldehído para dormitorios y muebles infantiles. Ver [Tableros manufacturados](#/madera/tableros).',
        '**Pinturas:** sin plomo ni metales pesados. Para juguetes y cunas, busca productos que declaren cumplir la norma de seguridad de juguetes.',
        '**Contacto con alimentos:** la mayoría de los aceites y barnices, una vez curados por completo, son seguros. Respeta el tiempo de curado que indica el fabricante, que puede ser de varias semanas.',
        '**Madera tratada:** nunca en muebles de interior, juguetes ni tablas de cocina.',
        '**Especies irritantes:** algunas maderas tropicales provocan alergias al contacto; evítalas en piezas que se tocan mucho.',
      ],
    },
    { tipo: 'p', texto: 'La seguridad al aplicar acabados se trata en [Seguridad con productos de acabado](#/acabados/seguridad-acabados).' },
  ],
}

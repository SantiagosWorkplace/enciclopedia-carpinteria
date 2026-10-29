export default {
  actualizado: '2026-10-29',
  relacionados: ['acabados/tintes', 'acabados/preparacion', 'acabados/seguridad-acabados', 'madera/defectos'],
  bloques: [
    { tipo: 'p', texto: 'Decolorar sirve para aclarar una madera, igualar piezas de tonos distintos o quitar manchas que el lijado no alcanza. No hay un decolorante para todo: cada uno actúa sobre un tipo de color distinto, y elegir el equivocado no da ningún resultado.' },

    { tipo: 'h2', texto: 'Los tres decolorantes' },
    { tipo: 'figura', id: 'decolorantes', pie: 'Cada par muestra la madera antes y después. Cada producto quita un tipo de color distinto.' },
    {
      tipo: 'tabla',
      titulo: 'Qué quita cada decolorante',
      columnas: ['Decolorante', 'Qué quita', 'Cómo se usa'],
      filas: [
        ['[[Ácido oxálico|acido-oxalico]]', 'Manchas negras de hierro y agua en maderas con taninos, como roble y nogal; el gris de la madera envejecida a la intemperie', 'Cristales disueltos en agua caliente hasta que no se disuelven más; se aplica, se deja secar y se lava con agua'],
        ['De dos componentes', 'El color natural de la madera', 'Un componente alcalino y otro de agua oxigenada, por separado o mezclados, según el fabricante; se neutraliza al final'],
        ['Lejía de cloro', 'El color de un tinte, sobre todo al agua', 'Se aplica pura o algo diluida y se lava con agua al terminar'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las proporciones, los tiempos de acción y el modo de neutralizar cambian según el producto. Sigue las instrucciones del fabricante y prueba siempre en una zona oculta.' },

    { tipo: 'h2', texto: 'Paso a paso' },
    {
      tipo: 'pasos',
      items: [
        'Quita todo el acabado viejo con un [[decapante]] y lija. El decolorante no atraviesa barnices ni ceras.',
        'Protégete: guantes de nitrilo, gafas y ropa de manga larga.',
        'Aplica el decolorante con una esponja o un pincel de fibra sintética, en un recipiente de vidrio o plástico, nunca de metal.',
        'Cubre toda la superficie, no solo la mancha, para que no quede un círculo más claro.',
        'Deja actuar el tiempo indicado. Si hace falta, repite.',
        'Lava con agua limpia o neutraliza como indica el fabricante.',
        'Deja secar uno o dos días. El agua levanta la fibra: lija suave con grano fino antes del acabado.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'No mezcles nunca decolorantes entre sí. La lejía de cloro con un ácido, como el oxálico, desprende cloro gaseoso, que es tóxico. Lava bien la madera entre un producto y otro. Al lijar después del ácido oxálico usa mascarilla: los restos de cristales irritan la nariz y la garganta.' },

    { tipo: 'h2', texto: 'Otras manchas' },
    {
      tipo: 'tabla',
      titulo: 'Manchas frecuentes',
      columnas: ['Mancha', 'Dónde está', 'Qué hacer'],
      filas: [
        ['Aro blanco de un vaso', 'En el acabado, no en la madera: humedad atrapada', 'Calor suave con un secador de pelo, o pulir con una pasta muy fina; no hace falta decolorar'],
        ['Aro negro', 'El agua llegó a la madera y reaccionó con los taninos', 'Quitar el acabado y usar ácido oxálico'],
        ['Grasa o aceite', 'Dentro de la madera', 'Disolvente, como aguarrás mineral, o talco que absorba la grasa; repetir'],
        ['Tinta', 'Dentro de la madera', 'Probar lejía de cloro; las tintas permanentes a veces no salen'],
        ['Madera gris del exterior', 'La superficie, dañada por el sol', 'Lijar o cepillar unos décimos de milímetro, o ácido oxálico'],
      ],
    },
  ],
}

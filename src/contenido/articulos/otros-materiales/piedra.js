export default {
  actualizado: '2026-10-30',
  relacionados: ['diseno/mesas', 'diseno/armarios', 'madera/movimiento', 'otros-materiales/metal'],
  bloques: [
    { tipo: 'p', texto: 'Las tapas de piedra aparecen en encimeras de cocina, mesas, cómodas y lavabos. La piedra resiste el calor y el desgaste, pero tiene tres rasgos que el carpintero debe respetar: pesa mucho, no se mueve con la humedad y se rompe si se dobla. El mueble tiene que darle un apoyo plano y firme, y dejar que la madera se siga moviendo debajo.' },

    { tipo: 'h2', texto: 'Tipos' },
    {
      tipo: 'tabla',
      titulo: 'Piedras y materiales para tapas',
      columnas: ['Material', 'Cómo es', 'Cuidados'],
      filas: [
        ['[[Mármol|marmol]]', 'Piedra calcárea, con vetas; se trabaja y se pule bien', 'Los ácidos lo atacan: limón, vinagre, vino. Se raya y se mancha'],
        ['[[Granito|granito]]', 'Muy duro; resiste el calor, los rayones y los ácidos', 'Algunas variedades son porosas y se sellan'],
        ['[[Cuarzo compacto|cuarzo-compacto]]', 'Cuarzo molido unido con resina; color parejo, no poroso', 'No tolera ollas calientes apoyadas directamente'],
        ['Porcelánico o piedra sinterizada', 'Láminas finas, muy duras y estables', 'Los cantos y las esquinas son frágiles a los golpes'],
        ['Pizarra', 'Oscura y mate, en lajas', 'Se raya con facilidad; los aceites la oscurecen'],
      ],
    },

    { tipo: 'h2', texto: 'Peso' },
    {
      tipo: 'datos',
      items: [
        ['Densidad del mármol y el granito', '≈ 2,6 – 2,8 kg por dm³, unas cuatro veces la de una madera media'],
        ['Tapa de 2 cm', '≈ 55 kg por m²'],
        ['Tapa de 3 cm', '≈ 80 kg por m²'],
        ['Ejemplo', 'Una mesa de 160 × 90 cm en 2 cm pesa ≈ 80 kg solo de tapa'],
      ],
    },
    { tipo: 'p', texto: 'Ese peso exige patas, travesaños y uniones pensados para él, y también cuenta al mover el mueble y al calcular cuánto carga un piso o una pared. Ver [Construcción de mesas](#/diseno/mesas).' },

    { tipo: 'h2', texto: 'Apoyo' },
    { tipo: 'figura', id: 'apoyo-piedra', pie: 'Vistas de frente con los espesores exagerados. La piedra necesita un apoyo plano y repartido. Si vuela mucho, una ménsula sostiene el voladizo. Debajo, puntos de silicona y no una capa rígida de pegamento.' },
    {
      tipo: 'lista',
      items: [
        '**Plano:** la piedra no se adapta a un apoyo torcido. Un bastidor alabeado o un punto alto bastan para partirla al apoyar un peso. Comprueba el plano con una regla larga antes de colocarla.',
        '**Repartido:** apóyala sobre un tablero de soporte o sobre travesaños poco separados, no solo en las cuatro esquinas.',
        '**[[Vuelo|vuelo]]:** el borde que sobresale sin apoyo es la zona más frágil. Si el vuelo es grande, agrega una [[ménsula|mensula]] metálica o un tablero de soporte que llegue cerca del borde.',
        '**Recortes:** los huecos para fregaderos y placas debilitan la tapa. Deben tener las esquinas redondeadas y apoyo a ambos lados del hueco.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Como orientación, una tapa de granito de 2 cm suele volar sin apoyo unos 15 cm, y una de 3 cm unos 25 cm. El mármol, el cuarzo y los porcelánicos tienen otros límites. Pregunta al marmolista por el material y el espesor exactos.' },

    { tipo: 'h2', texto: 'Fijación' },
    { tipo: 'p', texto: 'Por su peso, una tapa de piedra casi no se desplaza: en muchos muebles antiguos apoya suelta, centrada con unos topes. Si hay que fijarla, usa puntos de [[silicona neutra|silicona-neutra]] o de un adhesivo elástico, nunca una capa continua de pegamento rígido: la madera de debajo se mueve con la humedad, y la piedra no. Ver [El movimiento de la madera](#/madera/movimiento).' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Algunas siliconas y adhesivos manchan el mármol y las piedras claras porosas. Usa productos indicados para piedra natural y prueba en un recorte o en una zona oculta.' },

    { tipo: 'h2', texto: 'Medidas y plantillas' },
    {
      tipo: 'pasos',
      items: [
        'Termina y coloca el mueble en su lugar antes de medir: la piedra se corta a la medida real, no a la del plano.',
        'Haz una plantilla a tamaño natural con tablero fino de MDF o cartón pluma. Marca los huecos, los cantos que van pulidos y los que quedan contra la pared.',
        'Indica el espesor, el tipo de canto, el sentido de las vetas y el vuelo de cada lado.',
        'En encimeras de cocina, lo habitual es que el marmolista tome las medidas en obra con los muebles ya instalados.',
      ],
    },

    { tipo: 'h2', texto: 'Cuidado y sellado' },
    {
      tipo: 'lista',
      items: [
        '**Prueba de la gota:** deja unas gotas de agua sobre la piedra. Si en unos minutos la piedra se oscurece, absorbe y conviene sellarla.',
        '**Sellador:** un [[hidrofugante]] para piedra penetra en los poros y frena el agua y las grasas sin cambiar el aspecto. Se renueva cada cierto tiempo según el uso.',
        '**Limpieza:** agua con jabón neutro. En el mármol, nada ácido ni abrasivo: ni vinagre, ni limón, ni polvos limpiadores.',
        '**Manchas y rayas profundas:** se quitan puliendo, un trabajo para el marmolista.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La frecuencia del sellado depende de la porosidad de cada piedra y del uso. Sigue la indicación del fabricante del sellador.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Una tapa de piedra se lleva siempre de canto, entre dos o más personas: llevada en plano se dobla con su propio peso y se parte. Usa guantes y calzado cerrado, y planifica el recorrido antes de levantarla.' },
  ],
}

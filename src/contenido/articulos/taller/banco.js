export default {
  actualizado: '2026-10-29',
  relacionados: ['taller/sujecion-banco', 'diseno/ergonomia', 'herramientas-manuales/cepillos', 'uniones/cantos'],
  bloques: [
    { tipo: 'p', texto: 'El banco es la herramienta más importante del taller de mano. Tiene que ser pesado para no moverse al cepillar, plano para servir de referencia, firme para golpear sobre él y capaz de sujetar la pieza en cualquier posición. Un buen banco dura toda la vida, y muchos carpinteros lo construyen como su primer gran proyecto.' },

    { tipo: 'h2', texto: 'Partes' },
    { tipo: 'figura', id: 'banco-trabajo', pie: 'Banco de carpintero de frente. El tornillo de cola y los perros sujetan piezas planas a lo largo de la tapa.' },
    {
      tipo: 'lista',
      items: [
        '**Tapa:** gruesa, de 50 a 100 mm, de madera dura laminada (haya, arce, fresno) o de dos o tres capas de tablero encoladas.',
        '**Patas y travesaños:** robustos y bien unidos; un estante bajo con herramientas pesadas le agrega masa.',
        '**[[Tornillo de pecho|tornillo-banco]]:** en el frente; sujeta piezas de canto o de punta.',
        '**Tornillo de cola:** en un extremo; con los [[perros|perro]] sujeta piezas planas sobre la tapa.',
        '**Agujeros para perros y gatos:** de 19 o 20 mm, en una o dos filas.',
      ],
    },

    { tipo: 'h2', texto: 'Medidas' },
    {
      tipo: 'datos',
      items: [
        ['Altura', 'Con los brazos colgando, la tapa a la altura de la muñeca: ≈ 85 – 95 cm para la mayoría. Más bajo para cepillar mucho, más alto para trabajos finos.'],
        ['Largo', '150 – 240 cm. Debe superar la pieza más larga que vas a cepillar habitualmente.'],
        ['Fondo', '50 – 70 cm. Más profundo cuesta llegar al otro lado.'],
        ['Espesor de la tapa', '≥ 50 mm; más si se va a golpear mucho.'],
      ],
    },
    { tipo: 'p', texto: 'Las medidas del cuerpo y las alturas de trabajo se explican en [Ergonomía y medidas del cuerpo](#/diseno/ergonomia).' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Deja el frente de la tapa, las patas delanteras y el tornillo de pecho en un mismo plano. Así puedes prensar una tabla larga contra el frente del banco para cepillar su canto.' },

    { tipo: 'h2', texto: 'Tipos de banco' },
    {
      tipo: 'tabla',
      titulo: 'Bancos más comunes',
      columnas: ['Tipo', 'Características'],
      filas: [
        ['Europeo de ebanista', 'Tornillo de pecho y de cola, filas de perros; el más completo para trabajo a mano'],
        ['De patas gruesas y tapa maciza', 'Muy pesado y simple; sujeta con gatos y prensas en las patas'],
        ['De tablero', 'Tapa de tablero doble sobre patas de madera o perfiles; económico y plano'],
        ['Plegable o portátil', 'Para obra o espacios pequeños; liviano y menos firme'],
        ['Japonés', 'Una viga baja inclinada sobre la que se trabaja sentado o de rodillas, con topes'],
      ],
    },

    { tipo: 'h2', texto: 'Mantener el banco' },
    {
      tipo: 'lista',
      items: [
        'Aplana la tapa cada cierto tiempo con una garlopa: se va hundiendo en el centro con el uso.',
        'Protégela con aceite o cera, no con barniz: un acabado duro hace resbalar las piezas y se marca.',
        'Usa un tablero de sacrificio o un cartón al encolar y al teñir.',
        'No cortes directamente sobre la tapa con sierras o formones: usa un taco de desecho.',
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Además del banco, conviene tener una mesa de armado más baja, ≈ 70 – 75 cm, y amplia: encolar un mueble grande sobre el banco obliga a trabajar con los brazos en alto.' },
  ],
}

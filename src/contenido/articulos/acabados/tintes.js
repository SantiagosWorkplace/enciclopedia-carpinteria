export default {
  actualizado: '2026-10-29',
  relacionados: ['acabados/preparacion', 'acabados/decolorado', 'acabados/goma-laca', 'acabados/barnices'],
  bloques: [
    { tipo: 'p', texto: 'Teñir cambia el color de la madera sin taparla: la veta sigue a la vista. Sirve para igualar piezas de tonos distintos, para que una madera barata se parezca a otra o para lograr un color que ninguna especie tiene. El tinte no protege: siempre va debajo de un acabado.' },

    { tipo: 'h2', texto: 'Tinte y pigmento' },
    { tipo: 'figura', id: 'penetracion-tinte', pie: 'Secciones con los tamaños exagerados. El tinte se disuelve y entra en las fibras; el pigmento son partículas que quedan en la superficie y en los poros. A la derecha, un pino teñido visto desde arriba.' },
    { tipo: 'p', texto: 'Hay dos formas de dar color. Un [[tinte]] está disuelto en un líquido y penetra en las fibras: el color es transparente y vivo. Un [[pigmento]] son partículas de color muy finas, suspendidas en un aglutinante, que quedan sobre la superficie y se juntan en los poros: el color es más opaco y marca el dibujo de los poros. Muchos productos comerciales mezclan los dos.' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de tinte',
      columnas: ['Tipo', 'Ventajas', 'Inconvenientes'],
      filas: [
        ['Al agua', 'Penetra bien, colores claros y vivos, resiste la luz; tiempo para trabajar', 'Levanta la fibra; tarda en secar'],
        ['Al alcohol', 'Seca en minutos; sirve para retoques y para teñir en el día', 'Difícil de dejar parejo en superficies grandes: marca los solapes'],
        ['Al disolvente o al aceite', 'Fácil de aplicar, no levanta la fibra, mucho tiempo para trabajar', 'Olor y vapores; secado lento'],
        ['De pigmento, en gel', 'Mancha poco en maderas difíciles; color parejo', 'Tapa algo la veta; se acumula en los poros y rincones'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Un tinte se disuelve otra vez con su propio disolvente. Si tiñes al alcohol y aplicas goma laca a pincel, que también es al alcohol, el pincel arrastra el color. La primera mano del acabado debe ser de otro disolvente, o aplicarse muy rápido o a pistola, sin repasar.' },

    { tipo: 'h2', texto: 'Paso a paso' },
    {
      tipo: 'pasos',
      items: [
        '**Prueba:** tiñe un recorte de la misma madera, lijado igual que la pieza, y ponle el acabado encima. El color cambia mucho con el acabado y al secar.',
        '**Preparar:** con tintes al agua, [[levanta la fibra|levantar-fibra]] antes. Quita el polvo.',
        '**Aplicar** con un trapo, una esponja o un pincel, mojando bien toda la superficie, sin dejar que se seque un borde antes de seguir con el resto.',
        '**Retirar** el sobrante con un trapo limpio, a favor de la veta, antes de que empiece a secar. El tinte que queda encima se ve como manchas.',
        '**Secar** el tiempo que indique el fabricante antes del acabado.',
        '**Corregir:** para oscurecer, otra mano. Para aclarar un tinte al agua todavía húmedo, un trapo con agua.',
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Las testas absorben mucho más tinte y quedan casi negras. Pasa antes una mano de acabado muy diluido solo en las testas, o lija las testas un grano más fino.' },

    { tipo: 'h2', texto: 'Maderas que manchan' },
    { tipo: 'p', texto: 'El pino, el cerezo, el abedul y el arce absorben el tinte de forma muy desigual y quedan con manchas oscuras. Tres soluciones:' },
    {
      tipo: 'lista',
      items: [
        '**Mano de [[sellador]] diluida:** una mano muy diluida de goma laca o del acabado que vas a usar, que tapa en parte la madera antes de teñir. El color queda más claro: hay que probar.',
        '**Tinte en gel:** al quedar en la superficie, mancha mucho menos.',
        '**Color en el acabado:** un barniz o una laca con tinte, en manos finas. Se aplica a pistola para que quede parejo.',
      ],
    },

    { tipo: 'h2', texto: 'Teñido químico' },
    { tipo: 'p', texto: 'Algunas maderas cambian de color por una reacción química con sus taninos. El caso clásico es el roble expuesto a vapores de amoníaco, que se oscurece de forma pareja y profunda. Es un proceso con productos peligrosos, que se hace en una cámara cerrada y con protección respiratoria.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'El amoníaco concentrado es corrosivo y sus vapores dañan los ojos y los pulmones. No lo mezcles nunca con lejía de cloro: desprende gases tóxicos. Ver [Seguridad con productos de acabado](#/acabados/seguridad-acabados).' },
  ],
}

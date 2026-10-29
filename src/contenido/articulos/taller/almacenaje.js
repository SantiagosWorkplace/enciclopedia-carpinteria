export default {
  actualizado: '2026-10-29',
  relacionados: ['madera/secado', 'madera/tableros', 'taller/incendios', 'herramientas-manuales/formones-gubias'],
  bloques: [
    { tipo: 'p', texto: 'La madera que se compra derecha puede torcerse en el estante, y las herramientas mal guardadas se mellan, se oxidan o se pierden. Un buen almacenaje protege la inversión y hace que encontrar cada cosa lleve segundos.' },

    { tipo: 'h2', texto: 'Tablas y tableros' },
    { tipo: 'figura', id: 'almacen-madera', pie: 'A la izquierda, un estante de brazos visto de frente. En el centro, tableros de pie apoyados en toda su superficie. A la derecha, el error más común.' },
    {
      tipo: 'lista',
      items: [
        '**Tablas en horizontal,** sobre brazos o ménsulas cada 60 – 80 cm, para que no se comben por su propio peso.',
        '**Madera que todavía no está seca:** con [[separadores|separador]] entre capas, como en una pila de secado. Ver [Secado de la madera](#/madera/secado).',
        '**Tableros:** lo mejor es en horizontal, apilados sobre apoyos parejos y poco separados. Si van de pie, casi verticales, apoyados en toda su superficie contra una pared o un bastidor y sobre un taco que los separe del suelo.',
        '**Recortes:** en cajones o tachos verticales clasificados por tamaño o especie. Tira lo que no vas a usar: un taller lleno de recortes inútiles ocupa el lugar de los útiles.',
        '**Lejos de la humedad y del sol:** no contra una pared exterior fría, ni junto a una estufa, ni bajo una ventana con sol directo.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Lleva la madera al taller una o dos semanas antes de usarla para que se aclimate. Guárdala en el mismo ambiente donde la vas a trabajar.' },

    { tipo: 'h2', texto: 'Herramientas' },
    {
      tipo: 'lista',
      items: [
        '**Paneles en la pared:** a la vista y al alcance del banco. Un sistema de listones con el canto cortado a 45° permite mover soportes sin atornillar cada vez.',
        '**Herramientas con filo:** formones en un portaformones con ranuras, cepillos de costado o con la suela sobre un listón, sierras con los dientes protegidos.',
        '**Cajones poco profundos** para herramientas pequeñas de medir y trazar: en un cajón hondo todo se mezcla y se golpea.',
        '**Prensas:** colgadas de barras en la pared o en un carro con ruedas.',
        '**Herramientas eléctricas:** en estantes, con sus accesorios, o en cajas apilables; las baterías, juntas y cerca del cargador.',
      ],
    },
    { tipo: 'h3', texto: 'Contra el óxido' },
    {
      tipo: 'lista',
      items: [
        'Mantén la humedad del taller estable y, si es alta, usa un deshumidificador.',
        'Pasa una capa fina de cera o aceite en las superficies de hierro: mesas de máquinas, cepillos, formones.',
        'No dejes herramientas sobre el suelo de hormigón: absorbe la humedad y la transmite al metal.',
        'Guarda el papel de lija y las piedras al agua lejos de las herramientas.',
      ],
    },

    { tipo: 'h2', texto: 'Productos de acabado y químicos' },
    {
      tipo: 'lista',
      items: [
        'En un armario metálico, cerrado y ventilado, lejos de cualquier fuente de calor y de las zonas de polvo.',
        'En sus envases originales, bien cerrados y etiquetados.',
        'Solo la cantidad que vas a usar en un tiempo razonable: los productos inflamables son una carga de fuego.',
        'Fuera del alcance de los niños.',
        'Los trapos con aceite, **nunca** en un cajón ni en una bolsa. Ver [Prevención de incendios](#/taller/incendios).',
      ],
    },
  ],
}

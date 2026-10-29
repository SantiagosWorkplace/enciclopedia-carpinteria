export default {
  actualizado: '2026-10-29',
  relacionados: ['chapeado/marqueteria', 'chapeado/preparar-chapa', 'electricas/fresadora', 'herramientas-manuales/medir-trazar'],
  bloques: [
    { tipo: 'p', texto: 'Filetes, cenefas e incrustaciones son los detalles que enmarcan una superficie chapada o una pieza maciza. Un [[filete]] es una línea fina de madera de otro color. Una [[cenefa]] es una banda más ancha, a menudo con la veta cruzada o con un dibujo. Una [[incrustación|incrustacion]] es una pieza embutida en un hueco tallado en la superficie.' },

    { tipo: 'h2', texto: 'Cómo se componen' },
    { tipo: 'figura', id: 'filetes', pie: 'A la izquierda, un tablero con campo, filete y cenefa vistos desde arriba. A la derecha, dos secciones con los espesores exagerados.' },
    {
      tipo: 'tabla',
      titulo: 'Elementos decorativos',
      columnas: ['Elemento', 'Cómo es', 'Medidas habituales'],
      filas: [
        ['Filete simple', 'Una tira de una sola madera, clara u oscura', '≈ 1 – 3 mm de ancho'],
        ['Filete compuesto', 'Varias tiras encoladas en capas: claro, oscuro, claro', '≈ 2 – 6 mm'],
        ['Cenefa a contraveta', 'Tiras cortadas a lo ancho de una hoja de chapa', '≈ 15 – 40 mm'],
        ['Cenefa de dibujo', 'Paquetes de tiras de colores encolados y cortados en rebanadas, con dibujos repetidos', 'Se compran hechas o se fabrican'],
        ['Incrustación', 'Pieza de madera, nácar, metal o hueso en una caja poco profunda', 'Según el dibujo'],
      ],
    },

    { tipo: 'h2', texto: 'Orden de trabajo con cola caliente' },
    {
      tipo: 'pasos',
      items: [
        'Pega la chapa del campo con cola caliente, cubriendo todo el tablero.',
        'Marca el ancho de la cenefa con un gramil de corte apoyado en el canto y corta la chapa del campo por esa línea. Ablanda la cola de la franja con una plancha y retírala con un formón.',
        'Corta las tiras de la cenefa a lo ancho de una hoja, todas del mismo ancho, y pégalas una junto a otra alrededor del campo.',
        'Resuelve las esquinas con un inglete: superpone las tiras en la esquina, corta las dos juntas a 45° y retira los sobrantes.',
        'Corta con el gramil una ranura poco profunda entre el campo y la cenefa, del ancho del filete, y encola el filete.',
        'Deja secar y nivela con un rascador, siempre del filete hacia afuera para no levantarlo.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'En tableros nuevos, es más sencillo armar el campo, el filete y la cenefa sobre la mesa de trabajo, unidos con cinta engomada, y prensar todo de una vez.' },

    { tipo: 'h2', texto: 'En madera maciza' },
    {
      tipo: 'lista',
      items: [
        '**Ranuras para filetes:** con una fresa fina en la fresadora, contra una guía, o con un gramil de corte de dos cuchillas y un formón estrecho para vaciar.',
        '**Profundidad:** algo menos que el espesor del filete, para que quede apenas más alto y se nivele después.',
        '**Curvas:** los filetes finos se doblan en seco; los más gruesos, con calor o humedeciéndolos.',
        '**Incrustaciones:** se dibuja la pieza sobre la superficie, se marca el contorno con una cuchilla y se vacía la caja con una fresadora pequeña o con gubias, hasta la profundidad de la pieza menos unas décimas.',
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Los filetes de madera clara sobre maderas oscuras, como el boj o el arce sobre nogal, son el detalle clásico de muchos muebles de los siglos XVIII y XIX.' },
  ],
}

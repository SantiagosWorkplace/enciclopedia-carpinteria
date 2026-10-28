export default {
  actualizado: '2026-10-28',
  relacionados: ['herrajes/bisagras', 'herrajes/correderas', 'uniones/ranuras-rebajos', 'madera/tableros'],
  bloques: [
    { tipo: 'p', texto: 'Armarios, cómodas, alacenas, aparadores y estanterías comparten la misma idea: una caja rígida a la que se le agregan estantes, puertas y cajones. Bien resuelta la caja, el resto es repetir soluciones conocidas.' },

    { tipo: 'h2', texto: 'Partes de un mueble de caja' },
    { tipo: 'figura', id: 'partes-armario', pie: 'De frente, con la puerta a la izquierda y el interior a la vista a la derecha. Abajo, la planta: la trasera entra en un rebajo de los costados.' },
    {
      tipo: 'lista',
      items: [
        '**Costados:** los dos laterales. Llevan el peso hasta el suelo y alojan las ranuras, los rebajos y los agujeros de los estantes.',
        '**Techo y base:** cierran la caja arriba y abajo. Pueden ir entre los costados o por encima de ellos.',
        '**Trasera:** además de cerrar la caja, la mantiene en escuadra. Va en un [[rebajo]] o en una [[ranura]] de los costados.',
        '**[[Zócalo|zocalo]] o patas:** separan la caja del suelo. El zócalo retranqueado deja lugar para los pies.',
        '**Estantes, puertas y cajones.**',
      ],
    },

    { tipo: 'h2', texto: 'Cómo armar la caja' },
    {
      tipo: 'tabla',
      titulo: 'Sistemas de construcción',
      columnas: ['Sistema', 'Material', 'Uniones', 'Comentario'],
      filas: [
        ['Macizo tradicional', 'Madera maciza', 'Colas de milano entre costados, techo y base; trasera de tablillas o de bastidor y panel', 'Todas las piezas con la veta en el mismo sentido alrededor de la caja, para que se muevan juntas'],
        ['Bastidor y panel', 'Madera maciza', 'Caja y espiga en los bastidores; paneles flotantes', 'Muy estable; aspecto clásico'],
        ['Tablero con uniones de carpintería', 'Contrachapado o tablero chapado', 'Ranuras, rebajos, espigas o galletas', 'Rápido y preciso con fresadora o sierra de mesa'],
        ['Tablero con herrajes', 'Melamina, aglomerado, MDF', 'Tornillos confirmat, excéntricas, clavijas', 'Se desarma; ver [Herrajes desmontables](#/herrajes/desmontables)'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'En madera maciza, evita encolar una pieza con la veta cruzada sobre un costado ancho, como un listón frontal a todo el fondo. Encólalo solo en el frente y fíjalo atrás con tornillos en agujeros ovalados.' },

    { tipo: 'h2', texto: 'Trasera' },
    {
      tipo: 'lista',
      items: [
        '**En rebajo:** los costados llevan un rebajo en el canto trasero; la trasera se apoya en él y se atornilla o se clava. Fácil de colocar y de reemplazar.',
        '**En ranura:** la trasera entra en ranuras de los costados, el techo y la base. Más limpia, pero hay que colocarla al encolar la caja.',
        '**Clavada por detrás:** la más simple; el canto de la trasera queda a la vista en los costados.',
      ],
    },
    { tipo: 'p', texto: 'Una trasera de contrachapado de 6 – 9 mm atornillada en todo el perímetro cada 15 – 20 cm hace rígida la caja. Una de tablero duro de 3 mm también ayuda, pero bastante menos.' },

    { tipo: 'h2', texto: 'Estantes' },
    {
      tipo: 'lista',
      items: [
        '**Fijos,** en ranuras o con espigas: aportan rigidez a la caja.',
        '**Regulables,** sobre soportes en agujeros. En la construcción con tablero se usa el **sistema 32**: agujeros de 5 mm de diámetro cada 32 mm, en una línea a 37 mm del canto delantero.',
        'Para luces mayores de ≈ 80 cm o cargas pesadas, calcula la [[flecha]] con la calculadora de [Cómo trabaja una estructura](#/diseno/estructura).',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las medidas del sistema 32 son el estándar más extendido, pero algunos fabricantes de herrajes usan otras distancias al canto. Comprueba las medidas de tus herrajes antes de taladrar.' },

    { tipo: 'h2', texto: 'Puertas' },
    {
      tipo: 'lista',
      items: [
        '**De bastidor y panel:** el panel flota en una ranura del bastidor, sin cola, con holgura para moverse. Es la puerta clásica de madera maciza.',
        '**De tablero:** contrachapado, MDF o tablero chapado, con el canto tapado.',
        '**Montaje:** la puerta puede cubrir el frente del costado (superpuesta) o quedar dentro de la caja (embutida). Las embutidas exigen holguras parejas de ≈ 2 mm alrededor.',
        '**Bisagras:** de cazoleta para tablero, o de pala, de libro o de pivote para muebles de madera. Se explican en [Bisagras](#/herrajes/bisagras).',
      ],
    },

    { tipo: 'h2', texto: 'Cajones' },
    { tipo: 'p', texto: 'Un cajón es una pequeña caja de cinco piezas: frente, dos laterales, trasera y fondo. El fondo va en una ranura de los laterales y del frente, y se fija a la trasera con un tornillo en agujero ovalado para que pueda moverse.' },
    {
      tipo: 'tabla',
      titulo: 'Uniones del cajón',
      columnas: ['Unión', 'Dónde', 'Comentario'],
      filas: [
        ['Cola de milano oculta', 'Frente con laterales', 'La tradicional: resiste el tirón al abrir'],
        ['Cola de milano pasante', 'Trasera con laterales', 'Fuerte y visible solo de costado'],
        ['Ranura y rebajo', 'Frente y trasera', 'Rápida con fresadora o sierra de mesa'],
        ['Frente postizo', 'Sobre una caja de cajón simple', 'El frente decorativo se atornilla desde dentro y permite ajustar su posición'],
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Cajones de madera sobre madera:** la holgura total a lo ancho es de 1 – 2 mm; la madera de los laterales debe ser dura y estable, y conviene encerar las guías.',
        '**Con correderas metálicas:** el cajón debe ser más estrecho que el hueco según indique el fabricante; en las de bolas, casi siempre ≈ 12,5 – 13 mm por lado. Ver [Correderas y guías](#/herrajes/correderas).',
      ],
    },

    { tipo: 'h2', texto: 'Muebles altos' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Todo mueble alto, y toda cómoda con cajones, puede volcar si se abren varios cajones o si un niño trepa. Fíjalos siempre a la pared. Se explica en [Diseñar muebles seguros](#/diseno/seguridad-diseno).' },
  ],
}

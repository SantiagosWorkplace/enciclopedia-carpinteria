export default {
  actualizado: '2026-10-29',
  relacionados: ['curvado/moldes', 'maquinas/sierra-cinta', 'herrajes/adhesivos', 'madera/chapas'],
  bloques: [
    { tipo: 'p', texto: 'El curvado por laminado encola varias láminas finas sobre un molde. Cada lámina se dobla sin esfuerzo, y una vez que fragua la cola, el conjunto queda rígido con la forma del molde. Permite curvas muy cerradas, piezas idénticas en serie y casi cualquier especie. Además, la pieza es muy estable porque las láminas se equilibran entre sí.' },

    { tipo: 'h2', texto: 'El proceso' },
    { tipo: 'figura', id: 'laminado', pie: 'A la izquierda, las flechas rojas son las prensas. En el centro, la línea de trazos es la curva del molde: la pieza suelta queda algo más abierta.' },
    {
      tipo: 'pasos',
      items: [
        'Prepará el molde y cubrilo con cinta de embalar o plástico para que la cola no lo pegue. Ver [Moldes y plantillas](#/curvado/moldes).',
        'Cortá las láminas de una misma tabla, una tras otra, con la sierra de cinta. Numerá su orden en el canto antes de cortar.',
        'Llevá las láminas al espesor final con una lijadora de banda ancha, o con la regruesadora apoyando cada lámina sobre una tabla de base. Todas iguales.',
        'Armá en seco sobre el molde con todas las prensas y comprobá que las láminas llegan a apoyar en toda la curva.',
        'Repartí la cola en una cara de cada lámina con un rodillo, sin dejar zonas secas. Apilá en el orden original.',
        'Apretá desde el centro hacia los extremos, para que el aire y la cola sobrante salgan por las puntas.',
        'Dejá fraguar el tiempo completo que indica la cola, sin apuro, antes de soltar.',
        'Cepillá o lijá un canto hasta dejarlo limpio, cortá la pieza al ancho y alisá el otro canto.',
      ],
    },

    { tipo: 'h2', texto: 'Espesor de las láminas' },
    {
      tipo: 'lista',
      items: [
        '**Cuanto más cerrada la curva, más finas las láminas.** Para radios pequeños se usan láminas de 1,5 – 2 mm; para curvas suaves, de 3 – 6 mm.',
        '**Prueba rápida:** doblá una lámina en seco sobre el molde. Si se adapta sin crujir ni astillarse, sirve.',
        '**Más láminas, menos recuperación.** La pieza recupera menos su forma recta cuantas más láminas tiene, aunque sean más finas.',
        '**Chapas de fábrica:** para piezas muy curvas o muy finas se pueden usar chapas, que ya vienen del espesor justo. Ver [Chapas de madera](#/madera/chapas).',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Algunas guías citan que la [[recuperación|recuperacion]] disminuye aproximadamente con el cuadrado del número de láminas. Es una aproximación: medila con una pieza de prueba en tu molde.' },

    { tipo: 'h2', texto: 'Qué cola usar' },
    {
      tipo: 'tabla',
      titulo: 'Colas para laminar',
      columnas: ['Cola', 'Ventajas', 'Desventajas'],
      filas: [
        ['Urea-formaldehído', 'Rígida, tiempo abierto largo, poca recuperación', 'Se prepara mezclando; desprende formaldehído al curar'],
        ['Epoxi', 'Rígida, no necesita mucha presión, resiste agua', 'Cara; hay que medir la mezcla con precisión'],
        ['Vinílica (PVA)', 'Fácil y a mano', 'Tiempo abierto corto; queda algo elástica y la pieza recupera más'],
        ['Poliuretano', 'Resiste agua', 'Espuma al curar; necesita mucha presión'],
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Las colas de urea y epoxi irritan la piel y las vías respiratorias. Usá guantes, buena ventilación y seguí la ficha de seguridad del producto.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para piezas de una sola cara vista, como el aro de una mesa, se pueden alternar especies o intercalar chapas de otro color en el canto: el laminado se convierte en un detalle decorativo.' },
  ],
}

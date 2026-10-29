export default {
  actualizado: '2026-10-29',
  relacionados: ['curvado/laminado', 'curvado/vapor', 'electricas/fresadora', 'maquinas/sierra-cinta'],
  bloques: [
    { tipo: 'p', texto: 'El [[molde]] define la forma de la pieza curva. Un buen molde es rígido, liso, preciso y deja lugar para las prensas. Casi siempre se hace con capas de MDF o contrachapado encoladas, porque son estables, baratas y fáciles de fresar con precisión.' },

    { tipo: 'h2', texto: 'Tipos de molde' },
    { tipo: 'figura', id: 'tipos-molde', pie: 'En azul grisáceo, el molde; en marrón, la pieza. Las flechas rojas indican dónde se aplica la presión.' },
    {
      tipo: 'tabla',
      titulo: 'Moldes para curvar',
      columnas: ['Molde', 'Cómo es', 'Uso'],
      filas: [
        ['Macho y hembra', 'Dos piezas que encierran la pieza entre sus curvas', 'Laminados en serie, presión pareja'],
        ['De un lado', 'Un solo molde y prensas sobre un fleje de contrachapado fino', 'Piezas únicas, curvas abiertas'],
        ['Bolsa de vacío', 'Molde y pieza dentro de una bolsa a la que se le saca el aire', 'Formas complejas, tableros chapeados'],
        ['Para vapor', 'Molde fuerte con puntos de anclaje para el fleje y las prensas', 'Piezas macizas al vapor'],
        ['De secado', 'Molde más liviano que sostiene la pieza mientras seca', 'Libera el molde de curvado para la pieza siguiente'],
      ],
    },

    { tipo: 'h2', texto: 'Las dos curvas del molde macho y hembra' },
    { tipo: 'p', texto: 'La hembra **no** es una copia del macho. Su curva es paralela a la del macho y está separada exactamente el espesor de la pieza. Si se usa la misma curva para las dos, aprietan solo en el centro y dejan los extremos sueltos.' },
    {
      tipo: 'pasos',
      items: [
        'Dibuja en una plantilla de MDF fino la curva interior de la pieza: la del macho.',
        'Traza la curva de la hembra con un compás o un disco separador del espesor de la pieza que ruede sobre la curva del macho.',
        'Corta las dos curvas en la sierra de cinta, por fuera de la línea.',
        'Lleva cada plantilla a la línea con escofina y lija, hasta que la curva quede suave y continua.',
        'Copia la plantilla en las capas del molde con una fresa copiadora, y encola las capas hasta el ancho de la pieza más un margen.',
      ],
    },

    { tipo: 'h2', texto: 'Compensar la recuperación' },
    {
      tipo: 'lista',
      items: [
        '**Toda pieza curva se abre un poco** al soltarla: es la [[recuperación|recuperacion]]. En laminados con cola rígida suele ser poca, y en piezas al vapor, más.',
        '**El molde se hace algo más cerrado** que la curva buscada, para que al abrirse quede justa.',
        '**Cuánto más cerrado** se averigua con una pieza de prueba: se mide la curva que da el molde y se corrige.',
        '**En vapor,** la pieza que seca atada o en una forma de secado recupera mucho menos.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La recuperación depende de la especie, del espesor, del número de láminas, de la cola y del tiempo en el molde. No hay una cifra general: guarda las medidas de cada pieza de prueba para la próxima vez.' },

    { tipo: 'h2', texto: 'Detalles que ahorran problemas' },
    {
      tipo: 'lista',
      items: [
        '**Agujeros o ranuras** a lo largo del molde para pasar las mordazas de las prensas.',
        '**Cinta de embalar o cera** en las caras del molde que tocan la cola.',
        '**Una línea de referencia** marcada en el molde y en la pieza para ubicarla siempre igual.',
        '**Moldes para vapor resistentes:** la fuerza para doblar una pieza maciza es grande. Atornilla el molde a una base gruesa o al banco.',
      ],
    },
  ],
}

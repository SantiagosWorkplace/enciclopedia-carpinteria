export default {
  actualizado: '2026-10-29',
  relacionados: ['uniones/visor', 'uniones/caja-espiga', 'herramientas-manuales/sierras', 'herramientas-manuales/formones-gubias'],
  bloques: [
    { tipo: 'p', texto: 'En la [[media madera|media-madera]], cada pieza pierde la mitad de su espesor en la zona donde se cruza con la otra. Las dos encajan con las caras a ras y comparten una superficie de encolado amplia, de veta larga contra veta larga. Es fácil de trazar, rápida de cortar y bastante resistente, por eso se usa en bastidores, marcos, estructuras de taller y muebles rústicos.' },

    { tipo: 'h2', texto: 'Variantes' },
    { tipo: 'figura', id: 'medias-maderas', pie: 'Arriba, cada unión armada y vista desde arriba. Abajo, las dos piezas de perfil: la de arriba baja y encaja en la de abajo.' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de media madera',
      columnas: ['Variante', 'Dónde se usa', 'Detalles'],
      filas: [
        ['En cruz', 'Cruces de travesaños, celosías, bastidores', 'Las dos piezas siguen de largo; las muescas en el centro'],
        ['En T', 'Travesaños intermedios de un bastidor', 'Una pieza termina sobre la otra'],
        ['En esquina', 'Marcos, bastidores, puertas rústicas', 'Las dos terminan en la esquina; conviene reforzarla'],
        ['Con cola de milano', 'Travesaños que reciben tirones', 'La punta en forma de cola impide que se abra'],
        ['En inglete', 'Marcos que se ven de frente', 'Por delante parece un inglete y por detrás es media madera'],
      ],
    },

    { tipo: 'h2', texto: 'Cómo se hace' },
    {
      tipo: 'pasos',
      items: [
        'Marca las caras de referencia de las dos piezas. Todas las medidas de profundidad se toman desde ellas.',
        'Apoya una pieza sobre la otra y marca con la cuchilla el ancho exacto de la muesca. Es más preciso que medir.',
        'Ajusta el [[gramil]] a la mitad del espesor y marca la profundidad en los dos cantos de las dos piezas, desde la cara de referencia. Un mismo ajuste deja las caras a ras aunque la mitad no sea exacta.',
        'Sierra los dos hombros por el lado del desperdicio, hasta la línea del gramil.',
        'Haz varios cortes intermedios a la misma profundidad. El desperdicio sale en trozos con el formón.',
        'Aplana el fondo con el formón, trabajando desde los dos cantos hacia el centro, o con una guimbarda.',
        'Prueba en seco. Debe entrar con presión de la mano, sin golpes, y quedar a ras.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Con máquinas, la sierra de mesa con varias pasadas o la fresadora con una guía cortan muchas muescas iguales. Ajusta la profundidad en un recorte del mismo espesor antes de cortar las piezas.' },

    { tipo: 'h2', texto: 'Resistencia' },
    {
      tipo: 'lista',
      items: [
        '**Buena con cola:** la superficie de encolado es grande y de veta larga.',
        '**Debilidad:** cada pieza queda con la mitad de su sección en la unión. No conviene en piezas finas que trabajan a flexión.',
        '**Esquinas:** la media madera en esquina se puede abrir por palanca. Una o dos clavijas o tornillos la aseguran.',
        '**A contraveta:** en piezas anchas que se cruzan, la cola sufre con el movimiento de la madera. Por encima de ≈ 10 cm de ancho, mejor fijarla con tornillos o clavijas y poca cola.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'El ancho a partir del cual una unión a contraveta empieza a dar problemas depende de la especie, del corte de la tabla y de los cambios de humedad del lugar. Ver [El movimiento de la madera](#/madera/movimiento).' },
  ],
}

export default {
  actualizado: '2026-10-29',
  relacionados: ['talla/herramientas-talla', 'talla/sujetar-talla', 'talla/maderas-talla', 'talla/geometrica'],
  bloques: [
    { tipo: 'p', texto: 'En la talla en relieve el motivo sobresale de un fondo, como si emergiera de la tabla. Se trabaja sobre una sola cara y se ve de frente. Es la talla de los paneles de puertas, los frisos, los respaldos de sillas y los marcos.' },

    { tipo: 'h2', texto: 'Tipos de relieve' },
    {
      tipo: 'tabla',
      titulo: 'Clases de relieve',
      columnas: ['Tipo', 'Cómo es', 'Profundidad'],
      filas: [
        ['[[Bajorrelieve|bajorrelieve]]', 'El motivo sobresale poco; casi no tiene [[socavados|socavado]]', 'Poca: unos milímetros en un panel'],
        ['Medio relieve', 'El motivo sobresale cerca de la mitad de su volumen', 'Intermedia'],
        ['[[Altorrelieve|altorrelieve]]', 'Sobresale más de la mitad; los bordes se socavan y algunas partes quedan casi libres', 'Mucha; pide madera gruesa'],
        ['Relieve rehundido', 'El fondo queda a la altura de la superficie y el motivo se talla hacia adentro', 'Poca; el contorno es un corte hondo'],
        ['Talla calada', 'Se quita el fondo por completo y el motivo queda como una reja', 'Atraviesa la tabla'],
      ],
    },

    { tipo: 'h2', texto: 'Paso a paso' },
    { tipo: 'figura', id: 'etapas-relieve', pie: 'Secciones de una tabla, con las profundidades exageradas. La línea de puntos marca la superficie original. Abajo, la diferencia entre un bajorrelieve y un altorrelieve.' },
    {
      tipo: 'pasos',
      items: [
        '**Dibujo:** pasa el diseño a la tabla con papel de calco, o pégalo y talla a través de él. Marca con lápiz las zonas que van a quedar más altas.',
        '**Contorno:** recorre el contorno con la gubia en V, por fuera de la línea, sin llegar a ella. También se puede hacer con [[cortes de parada|corte-parada]]: gubias del mismo radio que cada curva, clavadas en vertical con el mazo.',
        '**Rebajar el fondo:** quita la madera alrededor del motivo con gubias de barrido 5 o 7, en pasadas poco profundas, y vuelve a marcar el contorno a medida que bajas. Hazlo hasta la profundidad elegida.',
        '**Nivelar el fondo:** empareja el fondo con una gubia de barrido 3 o de cola de pez. Para una profundidad exacta en todo el fondo, usa una [[guimbarda]].',
        '**Modelar:** da volumen al motivo. Primero define los planos altos y bajos, después redondea. Trabaja todo el relieve a la vez, sin terminar una zona antes que las demás.',
        '**Socavar:** en un altorrelieve, recorta los bordes del motivo por debajo, en ángulo. Así proyectan sombra y el motivo parece despegarse del fondo.',
        '**Detalle y textura:** nervaduras, pliegues, ojos. El fondo puede quedar liso, con marcas de gubia o granulado con un punzón.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Mide la profundidad del fondo con un taco atravesado por un clavo o un tornillo que sobresalga lo que quieres rebajar. Al pasarlo por el fondo, marca las zonas que todavía están altas.' },

    { tipo: 'h2', texto: 'La dirección del corte' },
    { tipo: 'figura', id: 'cortar-veta', pie: 'La pieza se ve de costado y la veta corre a lo largo. Las flechas muestran la dirección del corte a favor de la veta.' },
    { tipo: 'p', texto: 'La regla es cortar «cuesta abajo»: de lo alto hacia lo bajo de la forma. Así las fibras quedan apoyadas detrás del filo y el corte sale limpio. En una forma convexa se corta desde la cresta hacia los lados. En una forma cóncava, desde los dos bordes hacia el fondo, y nunca desde el fondo hacia arriba.' },
    {
      tipo: 'lista',
      items: [
        '**Si la madera se levanta o se desgarra,** estás cortando contra la veta: da vuelta la dirección del corte.',
        '**A través de la veta** el corte casi siempre es seguro, aunque deja la superficie un poco más áspera.',
        '**Corte en sesgo:** girar apenas la gubia mientras avanza, en lugar de empujarla derecha, corta las fibras en diagonal y deja un acabado más liso.',
      ],
    },

    { tipo: 'h2', texto: 'Luz y acabado' },
    { tipo: 'p', texto: 'Trabaja con una [[luz rasante|luz-rasante]], una lámpara baja que ilumine la pieza de costado. Las sombras muestran las formas, los desniveles del fondo y las marcas que faltan limpiar. Gira la pieza o la lámpara de vez en cuando para ver el relieve desde otro lado.' },
    { tipo: 'p', texto: 'Muchos tallistas dejan la superficie tal como sale de la gubia, con sus pequeñas facetas brillantes, porque marcan la forma mejor que el lijado. Si lijas, hazlo al final y con cuidado, para no redondear las aristas. Antes de aplicar el acabado, quita el polvo de los rincones con un pincel.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Las astillas saltan con fuerza cuando se golpea con el mazo. Usa gafas de protección y no dejes que nadie se acerque de frente a la herramienta.' },
  ],
}

export default {
  actualizado: '2026-10-28',
  relacionados: ['diseno/ergonomia', 'diseno/planos', 'diseno/lista-corte', 'madera/especies'],
  bloques: [
    { tipo: 'p', texto: 'Los errores más caros de un mueble no se cometen con la sierra sino antes, en el papel: una mesa demasiado alta, un cajón que no abre porque choca con la puerta, una estantería que se comba. Un proceso de diseño ordenado permite descubrir esos problemas cuando corregirlos cuesta solo una goma de borrar.' },

    { tipo: 'h2', texto: 'Las etapas' },
    { tipo: 'figura', id: 'etapas-diseno', pie: 'Las nueve etapas, agrupadas en tres fases. El orden no es rígido: una maqueta puede obligar a volver al boceto, y medir el lugar puede cambiar la necesidad.' },
    {
      tipo: 'pasos',
      items: [
        '**Definir la necesidad.** Qué tiene que hacer el mueble, quién lo va a usar, dónde va a estar y con qué presupuesto y herramientas se cuenta.',
        '**Medir el lugar.** Ancho, alto y fondo disponibles, zócalos, enchufes, ventanas, puertas que se abren y el camino por el que el mueble tiene que entrar.',
        '**Buscar referencias.** Muebles parecidos, medidas habituales y soluciones constructivas. Ver [Medidas habituales de muebles](#/diseno/medidas-muebles).',
        '**Bocetar.** Muchos dibujos rápidos a mano alzada, sin medidas exactas, para explorar formas y proporciones.',
        '**Elegir estructura y uniones.** Cómo se sostiene el mueble, cómo se unen las piezas y cómo va a moverse la madera.',
        '**Probar con una maqueta.** A escala o a tamaño real, según el mueble.',
        '**Dibujar el plano definitivo,** con vistas, cortes y cotas.',
        '**Hacer la lista de corte** y calcular el material.',
        '**Planificar el orden de trabajo:** qué piezas se cortan primero, qué se acaba antes de armar y en qué orden se encola.',
      ],
    },

    { tipo: 'h2', texto: 'Las preguntas del principio' },
    {
      tipo: 'lista',
      items: [
        '**Función:** ¿qué se guarda, se apoya o se hace sobre el mueble? ¿Cuánto pesa?',
        '**Usuarios:** ¿adultos, niños, personas mayores? ¿Su altura? ¿Alguien con movilidad reducida?',
        '**Lugar:** ¿interior o exterior? ¿Calefacción, humedad, sol directo?',
        '**Duración:** ¿un mueble para toda la vida o para unos años? ¿Se va a mudar?',
        '**Recursos:** ¿con qué herramientas se cuenta? ¿Cuánto tiempo y dinero?',
        '**Estilo:** ¿con qué otros muebles va a convivir?',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Escribe las respuestas en una hoja y tenla a mano durante todo el diseño. Cuando dudes entre dos opciones, la hoja suele decidir por ti.' },

    { tipo: 'h2', texto: 'Bocetos y proporciones' },
    { tipo: 'p', texto: 'Un boceto no tiene que ser bonito: tiene que ser rápido. Dibujar diez versiones en lugar de una ayuda a no enamorarse de la primera idea. Conviene dibujar el mueble de frente, de costado y en perspectiva, y con una figura humana al lado para comprobar la escala.' },
    { tipo: 'p', texto: 'Algunas pautas ayudan a que las proporciones resulten agradables. No son leyes, solo puntos de partida:' },
    {
      tipo: 'lista',
      items: [
        '**Rectángulos con relación clara:** 1:1, 1:2, 2:3 o la proporción áurea, ≈ 1:1,618. Muchos muebles clásicos usan estas relaciones en el frente o en los paneles.',
        '**Cajones graduados:** en una cómoda, los cajones de abajo más altos que los de arriba se ven más equilibrados que todos iguales. Una progresión simple es sumar 2 o 3 cm a cada cajón hacia abajo.',
        '**Peso visual abajo:** zócalos, patas más gruesas en la base o tiradores alineados dan estabilidad al conjunto.',
        '**Retranqueos constantes:** si el faldón queda unos milímetros por detrás de la cara de la pata, que sea la misma medida en todo el mueble.',
        '**Grosores coherentes:** piezas demasiado gruesas hacen pesado un mueble; demasiado finas lo hacen parecer frágil, aunque aguante.',
      ],
    },

    { tipo: 'h2', texto: 'Maquetas y prototipos' },
    { tipo: 'p', texto: 'Una maqueta descubre problemas que el dibujo esconde. Hay dos tipos útiles:' },
    {
      tipo: 'lista',
      items: [
        '**A escala** (1:5 o 1:10), en cartón, cartón pluma o madera de balsa. Sirve para ver las proporciones y cómo se ve el mueble desde distintos ángulos.',
        '**A tamaño real,** con madera barata, recortes de tablero o cartón grueso, unidos con tornillos o cinta. Es imprescindible en sillas y en todo lo que se usa con el cuerpo: sentarse en el prototipo dice más que cualquier tabla de medidas.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Antes de construir un mueble grande, marca su silueta en el suelo y en la pared con cinta de pintor. Déjala unos días: verás si estorba el paso o si la altura funciona.' },

    { tipo: 'h2', texto: 'Elegir el material' },
    {
      tipo: 'tabla',
      titulo: 'Criterios para elegir',
      columnas: ['Si necesitas…', 'Considera…'],
      filas: [
        ['Superficies grandes y estables', 'Tablero chapado o contrachapado; o madera maciza con uniones que permitan el movimiento'],
        ['Piezas que trabajan mucho (patas, sillas)', 'Frondosas densas y de veta recta: roble, fresno, haya, arce'],
        ['Un mueble liviano', 'Coníferas, álamo, contrachapado de pocas capas'],
        ['Exterior', 'Duramen de especies durables o madera tratada; tornillería inoxidable'],
        ['Acabado pintado', 'MDF, álamo, pino sin nudos'],
        ['Bajo presupuesto', 'Especies locales y de plantación; tablero en las partes que no se ven'],
      ],
    },
    { tipo: 'p', texto: 'Más detalles en los artículos [Especies de madera](#/madera/especies), [Tableros manufacturados](#/madera/tableros) y [El movimiento de la madera](#/madera/movimiento).' },

    { tipo: 'h2', texto: 'Del diseño al taller' },
    { tipo: 'p', texto: 'El diseño termina cuando cualquier persona del taller podría fabricar el mueble solo con los papeles: un [plano](#/diseno/planos) completo, una [lista de corte](#/diseno/lista-corte) y una lista de herrajes y acabados. Si al fabricar aparece una duda, anota la respuesta en el plano: es el registro para la próxima vez.' },
  ],
}

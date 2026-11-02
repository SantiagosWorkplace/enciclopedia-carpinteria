export default {
  actualizado: '2026-11-02',
  relacionados: ['diseno/planos', 'herramientas-manuales/sierras', 'uniones/caja-espiga', 'herramientas-manuales/catalogo'],
  bloques: [
    { tipo: 'p', texto: 'Una unión precisa empieza en una línea precisa. Si el trazado está desviado medio milímetro, ninguna sierra ni formón lo va a corregir. Trazar bien es cuestión de pocas herramientas, de una buena referencia y de un hábito: medir lo menos posible y transferir las medidas directamente de una pieza a otra.' },

    { tipo: 'h2', texto: 'Herramientas para medir' },
    {
      tipo: 'tabla',
      titulo: 'Medir',
      columnas: ['Herramienta', 'Para qué', 'Detalles'],
      filas: [
        ['Cinta métrica', 'Medidas largas', 'El gancho se mueve a propósito: compensa su propio espesor al medir por fuera o por dentro'],
        ['Regla de acero', 'Medidas cortas y precisas, comprobar planitud', 'De 300 a 1000 mm; con graduación de medio milímetro'],
        ['Calibre o pie de rey', 'Espesores, diámetros de brocas y espigas', 'Lee décimas de milímetro'],
        ['Regla de canto', 'Comprobar que una superficie es plana', 'De aluminio o acero, rectificada; no lleva graduación'],
        ['Nivel', 'Horizontales y verticales', 'Imprescindible en carpintería de obra e instalación de muebles'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Usa siempre la misma cinta métrica en un trabajo. Dos cintas distintas pueden diferir en uno o dos milímetros a lo largo de un metro.' },

    { tipo: 'h2', texto: 'Herramientas para trazar' },
    {
      tipo: 'foto', src: 'fotos/herramientas-manuales/gramil.jpg', ancho: 1000, alto: 669,
      alt: 'Mano que desliza un gramil por el canto de un tablero',
      pie: 'Gramil apoyado contra el canto: la punta marca una línea paralela a ese canto.',
      credito: { autor: 'Jordanhill School D&T Dept', licencia: 'CC BY 2.0', licenciaUrl: 'https://creativecommons.org/licenses/by/2.0', fuente: 'https://commons.wikimedia.org/wiki/File:Using_a_marking_gauge_to_strike_a_line_on_MDF.jpg' },
    },
    {
      tipo: 'lista',
      items: [
        '**Escuadra de carpintero:** hoja de acero en un cabo de madera o metal, para trazar líneas a 90° del canto. La escuadra combinada agrega una regla deslizante, un nivel y un ángulo de 45°.',
        '**[[Falsa escuadra|falsa-escuadra]]:** su hoja se fija en cualquier ángulo para copiarlo de un plano o de otra pieza.',
        '**[[Gramil|gramil]]:** traza una línea paralela a un canto. El de punta raya; el de cuchilla o de rueda corta las fibras y deja una línea más limpia a contraveta. El gramil de mortaja tiene dos puntas para trazar los dos lados de una caja o una espiga a la vez.',
        '**Cuchilla de marcar:** traza líneas a través de la veta mucho más finas que un lápiz, y además corta las fibras: el formón o la sierra encuentran un borde exacto donde apoyar.',
        '**Lápiz:** mecánico de 0,5 mm para líneas finas; el lápiz de carpintero, plano, para marcar piezas en bruto.',
        '**Compás y plantillas:** para curvas, colas de milano y piezas que se repiten.',
      ],
    },

    { tipo: 'h2', texto: 'Comprobar la escuadra' },
    { tipo: 'p', texto: 'Una escuadra que no está a 90° arruina todo lo que se traza con ella. Se comprueba en un minuto:' },
    { tipo: 'figura', id: 'comprobar-escuadra', pie: 'El error está muy exagerado. Una escuadra buena deja las dos líneas superpuestas.' },
    {
      tipo: 'pasos',
      items: [
        'Apoya el cabo en un canto bien recto de una tabla o un tablero y traza una línea fina a lo largo de la hoja.',
        'Da vuelta la escuadra, como una página, y apóyala en el mismo canto con la hoja en el mismo punto de partida.',
        'Traza una segunda línea. Si coincide con la primera, la escuadra está a 90°. Si se abren, el error de la escuadra es la mitad de la separación.',
      ],
    },

    { tipo: 'h2', texto: 'Caras y cantos de referencia' },
    { tipo: 'p', texto: 'Toda pieza tiene una **cara de referencia** y un **canto de referencia**: los primeros que se dejan planos y a escuadra entre sí. Todas las medidas y todos los trazados se hacen desde ellos, nunca desde las caras opuestas, que pueden tener pequeños errores de espesor o de ancho.' },
    {
      tipo: 'lista',
      items: [
        'Marca la cara de referencia con un lazo o una línea que llegue al canto de referencia, y el canto con una «V» o una flecha.',
        'Apoya siempre el cabo de la escuadra y la guía del gramil en la cara o el canto de referencia.',
        'En piezas que forman un conjunto, como las cuatro patas de una mesa, marca un triángulo de carpintero sobre todas juntas: indica su posición y orientación de un vistazo.',
      ],
    },

    { tipo: 'h2', texto: 'Trazar sin medir' },
    {
      tipo: 'lista',
      items: [
        '**Transfiere en lugar de medir:** para marcar el ancho de una caja, apoya directamente la espiga sobre la pieza y marca a sus lados.',
        '**Usa el gramil para todo lo repetido:** una vez fijado, la medida es la misma en todas las piezas.',
        '**Listón de medidas:** marca en un listón las alturas de un mueble a tamaño real y úsalo en lugar de la cinta.',
        '**Marca el desperdicio:** raya con una cruz la parte que se va a quitar. Evita cortar del lado equivocado de la línea.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Al cortar, la línea es la frontera: la sierra va del lado del desperdicio y «deja» la línea en la pieza. Así siempre queda un poco de material para el ajuste final.' },
  ],
}

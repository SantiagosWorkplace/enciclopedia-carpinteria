export default {
  actualizado: '2026-10-29',
  relacionados: ['electricas/seguridad-electricas', 'maquinas/tupi', 'uniones/ranuras-rebajos', 'uniones/colas-milano'],
  bloques: [
    { tipo: 'p', texto: 'La fresadora, también llamada router o fresadora de superficie, es probablemente la herramienta eléctrica más versátil del taller. Con la fresa adecuada y una guía hace ranuras, rebajos, molduras, colas de milano, cajas para bisagras, copias exactas de una plantilla y cantos enrasados.' },

    { tipo: 'h2', texto: 'Tipos' },
    {
      tipo: 'foto', src: 'fotos/electricas/fresadora.jpg', ancho: 1000, alto: 593,
      alt: 'Tres vistas de una fresadora con base de inmersión sobre un tablero perforado',
      pie: 'Fresadora de superficie con base de inmersión, vista desde tres ángulos.',
      credito: { autor: 'D-Platoon', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Oberfraese_Tauchkorb_1.jpg' },
    },
    {
      tipo: 'tabla',
      titulo: 'Fresadoras',
      columnas: ['Tipo', 'Características', 'Uso'],
      filas: [
        ['De inmersión', 'El motor baja sobre dos columnas con resorte y se bloquea a la profundidad elegida', 'Ranuras y cajas que empiezan en el medio de la pieza; la más versátil'],
        ['De base fija', 'La profundidad se fija antes de empezar', 'Molduras de canto y montaje en mesa'],
        ['De cantear o compacta', 'Pequeña y liviana, para una mano', 'Enrasar cantos, redondear aristas, bisagras'],
      ],
    },
    {
      tipo: 'datos',
      items: [
        ['Potencia', '≈ 700 – 1000 W las compactas; 1400 – 2300 W las grandes'],
        ['Velocidad', '≈ 8000 – 30 000 rpm, regulable'],
        ['Pinzas', 'Las [[pinzas|pinza]] más comunes son de 6, 8 y 12 mm, o ¼" y ½". El vástago de la fresa debe coincidir exactamente con la pinza.'],
      ],
    },

    { tipo: 'h2', texto: 'Fresas' },
    { tipo: 'figura', id: 'perfiles-fresa', pie: 'Sección de una tabla después de pasar cada fresa. Las de canto suelen llevar un rodamiento que copia el borde.' },
    {
      tipo: 'lista',
      items: [
        '**Material:** las [[fresas|fresa]] de metal duro duran mucho más que las de acero rápido, sobre todo en tableros, que tienen cola y son abrasivos.',
        '**Con rodamiento:** un rodamiento en la punta apoya en el canto o en una plantilla y guía el corte. No hace falta otra guía.',
        '**Rectas y en espiral:** para ranuras, cajas y trabajos con plantilla. Las de espiral ascendente sacan la viruta y las descendentes dejan la cara superior limpia.',
        '**De enrasar:** con el rodamiento a la altura del filo, copian una plantilla o dejan un canto a ras de otro.',
      ],
    },

    { tipo: 'h2', texto: 'Velocidad según el diámetro' },
    { tipo: 'p', texto: 'Cuanto más grande es la fresa, más rápido corre su filo a las mismas revoluciones. Las fresas grandes deben girar más despacio:' },
    { tipo: 'interactivo', id: 'calculadora-fresa' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los límites de la calculadora son una guía general. Respeta siempre la velocidad máxima marcada en la fresa o indicada por su fabricante.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Si la madera se quema, la velocidad es demasiado alta para el avance o la fresa está desafilada o sucia de resina. Si la superficie queda ondulada o astillada, la velocidad es baja o el avance demasiado rápido.' },

    { tipo: 'h2', texto: 'Sentido de avance' },
    { tipo: 'p', texto: 'La fresa gira en sentido horario visto desde arriba. Hay que avanzar siempre **contra** el giro, para que la fresa empuje la máquina hacia la pieza y no la arrastre:' },
    { tipo: 'figura', id: 'sentido-fresado', pie: 'Para bordes exteriores, en sentido antihorario; para aberturas interiores, en sentido horario.' },
    {
      tipo: 'lista',
      items: [
        '**Canto de frente a ti:** de izquierda a derecha.',
        '**En la mesa de fresar,** con la fresa hacia arriba, la pieza avanza de derecha a izquierda contra la guía.',
        'Avanzar a favor del giro, el llamado fresado en concordancia, hace que la fresadora "salga corriendo" a lo largo de la pieza. Solo lo usan profesionales en pasadas finísimas para evitar astillas.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Sujeta la pieza con prensas y la fresadora con las dos manos. Espera a que la fresa se detenga del todo antes de levantarla de la pieza o apoyarla en el banco.' },

    { tipo: 'h2', texto: 'Guías' },
    {
      tipo: 'lista',
      items: [
        '**Guía paralela:** se apoya en el canto de la pieza; para ranuras y rebajos paralelos al canto.',
        '**Regla:** un listón recto o un riel prensado a la pieza, para ranuras en cualquier lugar.',
        '**Casquillo copiador:** un anillo en la base que sigue una plantilla. La pieza sale un poco más grande o más chica que la plantilla según el diámetro del casquillo y de la fresa.',
        '**Plantillas:** de MDF o contrachapado, para repetir piezas idénticas o cortar cajas de bisagras y cerraduras.',
        '**Mesa de fresar:** la fresadora queda invertida bajo una mesa; se trabaja como una pequeña [tupí](#/maquinas/tupi).',
      ],
    },

    { tipo: 'h2', texto: 'Buenas prácticas' },
    {
      tipo: 'pasos',
      items: [
        'Coloca la fresa con al menos ¾ del vástago dentro de la pinza, separada 1 – 2 mm del fondo. Nunca aprietes la pinza sin fresa.',
        'Haz las ranuras y los rebajos profundos en varias pasadas: como guía, cada pasada no debería ser más profunda que el diámetro de la fresa, y bastante menos en maderas duras.',
        'Prueba el ajuste en un recorte del mismo espesor antes de pasar a la pieza.',
        'En molduras de canto, fresa primero las testas y después los cantos largos: las astillas de las esquinas se van con la última pasada.',
      ],
    },
  ],
}

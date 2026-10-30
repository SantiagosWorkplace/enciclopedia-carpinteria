export default {
  actualizado: '2026-10-29',
  relacionados: ['maquinas/seguridad-maquinas', 'electricas/lijadoras', 'taller/salud-seguridad', 'taller/incendios'],
  bloques: [
    { tipo: 'p', texto: 'El polvo que se ve en el suelo del taller molesta, pero el peligroso es el que no se ve: partículas finísimas que flotan durante horas y llegan hasta lo más profundo de los pulmones. Respirarlo un día no se nota; respirarlo durante años causa alergias, asma y otras enfermedades. Controlarlo es parte del trabajo.' },

    { tipo: 'h2', texto: 'Por qué el polvo fino es peligroso' },
    { tipo: 'figura', id: 'tamano-polvo', pie: 'Esquema sin escala proporcional. Las partículas más finas, que no se ven, son las que llegan más adentro de los pulmones y las que más tiempo flotan en el aire.' },
    {
      tipo: 'tabla',
      titulo: 'Tamaño de las partículas',
      columnas: ['Tamaño', 'Qué pasa', 'De dónde sale'],
      filas: [
        ['Mayor de ≈ 100 µm', 'Virutas y aserrín: caen enseguida', 'Cepilladora, sierra, regruesadora'],
        ['≈ 10 – 100 µm', 'Se respira y se queda en nariz y garganta', 'Casi todas las máquinas'],
        ['Menor de ≈ 10 µm', 'Invisible; llega a los bronquios', 'Lijado, fresado, corte de tableros'],
        ['Menor de ≈ 4 µm', 'Fracción respirable: llega a los alvéolos y queda horas en el aire', 'Sobre todo el lijado'],
      ],
      nota: '1 µm (micrómetro) es una milésima de milímetro. Un pelo humano mide ≈ 50 – 100 µm.',
    },
    {
      tipo: 'lista',
      items: [
        '**Cáncer:** el polvo de maderas duras está clasificado como cancerígeno para las fosas nasales y los senos paranasales.',
        '**Alergias y asma:** muchas maderas, sobre todo tropicales, son sensibilizantes: tras años de exposición, la persona desarrolla alergia.',
        '**Tableros:** el polvo de MDF y aglomerado lleva resinas y es especialmente fino.',
        '**Incendio y explosión:** el polvo fino en suspensión puede arder de golpe. Se trata en [Prevención de incendios](#/taller/incendios).',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los límites de exposición laboral al polvo de madera cambian según el país y se han ido reduciendo. En la Unión Europea, el límite para el polvo de maderas duras es hoy de 2 mg/m³ en una jornada de 8 horas.' },

    { tipo: 'h2', texto: 'Tres niveles de control' },
    {
      tipo: 'pasos',
      items: [
        '**Captar en la fuente:** conectar cada máquina y herramienta a una aspiración. Es lo más eficaz.',
        '**Filtrar el aire del taller:** un filtro de aire en el techo recoge el polvo fino que se escapa.',
        '**Proteger a la persona:** mascarilla FFP2 o FFP3 bien ajustada, como última barrera, no como única.',
      ],
    },

    { tipo: 'h2', texto: 'Equipos de aspiración' },
    {
      tipo: 'tabla',
      titulo: 'Aspirador o colector',
      columnas: ['Equipo', 'Cómo trabaja', 'Para qué'],
      filas: [
        ['Aspirador de taller', 'Mucha succión y poco caudal, por mangueras finas', 'Herramientas portátiles: lijadoras, fresadoras, sierras de incisión'],
        ['Colector de polvo', 'Mucho caudal y poca succión, por tubos anchos de 100 – 150 mm', 'Máquinas: sierra de mesa, cepilladora, regruesadora, sierra de cinta'],
        ['Separador ciclónico', 'Hace girar el aire y deja caer el polvo grueso antes del filtro', 'Delante de un aspirador o colector: el filtro dura mucho más'],
        ['Filtro de aire ambiente', 'Ventilador y filtros que recirculan el aire del taller', 'El polvo fino que escapa de todo lo anterior'],
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Filtros:** lo importante es qué tamaño de partícula retienen. Las bolsas de tela comunes dejan pasar el polvo más fino; los cartuchos plisados y los filtros de clase alta lo retienen.',
        '**Tubos:** lisos, cortos y con pocas curvas; en los colectores, la velocidad del aire en los tubos debe rondar los 20 m/s para que el polvo no se deposite.',
        '**Compuertas:** abre solo la compuerta de la máquina que estás usando.',
        '**Electricidad estática:** los tubos de plástico se cargan; conéctalos a tierra con un alambre si la instalación es grande.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La velocidad del aire y los diámetros de tubo son valores habituales de diseño. Para una instalación fija, calcula el caudal que necesita cada máquina según su fabricante.' },

    { tipo: 'h2', texto: 'Hábitos' },
    {
      tipo: 'lista',
      items: [
        'Limpia con aspirador, nunca con escoba ni con aire comprimido: levantan justamente el polvo más fino.',
        'Deja funcionando el filtro de aire un rato después de terminar.',
        'Cámbiate la ropa de trabajo antes de entrar en la casa.',
        'Mantén la mascarilla puesta mientras haya polvo en el aire, no solo mientras la máquina funciona.',
        'Si tienes barba, la mascarilla no sella: considera un respirador con suministro de aire o una pantalla con filtro motorizado.',
      ],
    },
  ],
}

// Catálogo de herramientas. Cada una indica su función, la energía que usa,
// si es móvil o estacionaria y en qué sistemas constructivos (ids de
// construcciones.js) se emplea.

export const funciones = [
  'Medición y trazado', 'Corte', 'Cepillado y desbaste', 'Talla y ensamble',
  'Perforación y atornillado', 'Fijación', 'Sujeción y montaje', 'Lijado y acabado', 'Seguridad',
]
export const energias = ['Manual', 'Eléctrica', 'Neumática', 'Combustión']
export const movilidades = ['Móvil', 'Estacionaria']

const TODAS = ['platform', 'japon', 'fachwerk', 'troncos', 'china', 'pilotes', 'chiloe', 'clt', 'steel', 'drywall', 'sip']
const MADERA = ['platform', 'japon', 'fachwerk', 'troncos', 'china', 'pilotes', 'chiloe', 'clt', 'sip']
const ENSAMBLES = ['japon', 'fachwerk', 'china', 'chiloe']
const TRADICIONALES = ['japon', 'fachwerk', 'troncos', 'china', 'pilotes', 'chiloe']
const MODERNAS = ['platform', 'clt', 'steel', 'drywall', 'sip']

const h = (nombre, cat, energia, movilidad, icono, usos, desc) => ({ nombre, cat, energia, movilidad, icono, usos, desc })

export const herramientas = [
  // Medición y trazado
  h('Cinta métrica', 'Medición y trazado', 'Manual', 'Móvil', '📏', TODAS, 'De 5 a 8 m con lectura en milímetros. El juego del gancho compensa su espesor al medir por dentro y por fuera.'),
  h('Metro plegable', 'Medición y trazado', 'Manual', 'Móvil', '📏', [...TRADICIONALES, 'platform'], 'Rígido para medir en vertical y dentro de huecos; tramos de 20 cm.'),
  h('Escuadra de carpintero', 'Medición y trazado', 'Manual', 'Móvil', '📐', TODAS, 'Comprueba y traza ángulos de 90°. Verificarla periódicamente invirtiéndola sobre una línea.'),
  h('Escuadra japonesa (sashigane)', 'Medición y trazado', 'Manual', 'Móvil', '📐', ['japon'], 'Escuadra de acero flexible con escalas especiales para trazar pendientes y diagonales sin calcular. Base del trazado tradicional japonés.'),
  h('Cartabón de techos', 'Medición y trazado', 'Manual', 'Móvil', '📐', ['platform', 'steel', 'sip', 'pilotes'], 'Triángulo de 18 o 30 cm con escala de grados para marcar cortes de cabios, escaleras y cerchas.'),
  h('Falsa escuadra', 'Medición y trazado', 'Manual', 'Móvil', '📐', ['platform', 'japon', 'fachwerk', 'troncos', 'china', 'pilotes', 'chiloe', 'sip'], 'Copia y transfiere cualquier ángulo: pendientes de techo, colas de milano, biseles.'),
  h('Gramil', 'Medición y trazado', 'Manual', 'Móvil', '📏', [...ENSAMBLES, 'troncos'], 'Traza líneas paralelas a un canto. Más preciso que el lápiz porque corta las fibras.'),
  h('Nivel de burbuja', 'Medición y trazado', 'Manual', 'Móvil', '🎯', TODAS, 'De 60 a 200 cm. Para verificarlo, girarlo 180° sobre la misma superficie: la burbuja debe quedar igual.'),
  h('Plomada', 'Medición y trazado', 'Manual', 'Móvil', '🎯', TODAS, 'Peso colgado de un hilo que marca la vertical exacta. Aploma postes y traslada puntos del techo al piso.'),
  h('Tiralíneas (hilo entizado)', 'Medición y trazado', 'Manual', 'Móvil', '📏', TODAS, 'Hilo cargado de tiza que marca líneas rectas largas al tensarlo y soltarlo. En Japón se usa el sumitsubo, con tinta.'),
  h('Compás de trazar', 'Medición y trazado', 'Manual', 'Móvil', '📐', ['troncos', 'chiloe', 'fachwerk'], 'Copia el contorno de un tronco sobre el de abajo para tallar un asiento ajustado, o adapta piezas a muros irregulares.'),
  h('Nivel láser', 'Medición y trazado', 'Eléctrica', 'Móvil', '🔦', MODERNAS, 'Proyecta líneas horizontales y verticales en toda la habitación. Ideal para soleras, cielorrasos y alinear perfiles.'),
  h('Medidor láser', 'Medición y trazado', 'Eléctrica', 'Móvil', '🔦', MODERNAS, 'Mide distancias de decenas de metros con precisión de ≈ ± 2 mm y calcula superficies.'),
  h('Medidor de humedad', 'Medición y trazado', 'Eléctrica', 'Móvil', '💧', MADERA, 'Mide el contenido de humedad de la madera: para estructura conviene ≤ 19 – 20 %, para muebles 8 – 12 %.'),
  h('Detector de montantes y cables', 'Medición y trazado', 'Eléctrica', 'Móvil', '🔦', ['drywall', 'steel', 'platform'], 'Localiza montantes, cañerías y cables detrás de la placa antes de perforar.'),

  // Corte
  h('Serrucho de carpintero', 'Corte', 'Manual', 'Móvil', '🪚', ['platform', 'troncos', 'fachwerk', 'pilotes', 'chiloe', 'sip'], 'Para cortes generales. Dientes de corte transversal (a través de la veta) o de hilo (a favor de la veta).'),
  h('Serrucho de costilla', 'Corte', 'Manual', 'Móvil', '🪚', ENSAMBLES, 'Hoja rígida reforzada para cortes finos y rectos en uniones.'),
  h('Sierra japonesa (ryoba / dozuki)', 'Corte', 'Manual', 'Móvil', '🪚', ['japon', 'china', 'chiloe'], 'Corta al tirar, lo que permite hojas más finas y cortes muy precisos.'),
  h('Tronzador', 'Corte', 'Manual', 'Móvil', '🪚', ['troncos', 'fachwerk'], 'Sierra larga para dos personas que corta troncos y vigas gruesas. Fue la herramienta principal del leñador antes de la motosierra.'),
  h('Hacha', 'Corte', 'Manual', 'Móvil', '🪓', ['troncos', 'pilotes', 'fachwerk'], 'Para talar, desramar y desbastar. El hacha de labrar, de filo ancho, escuadra troncos en vigas.'),
  h('Machete', 'Corte', 'Manual', 'Móvil', '🔪', ['pilotes'], 'Corta y limpia bambú, cañas y fibras para techumbre en la construcción tropical.'),
  h('Cutter (trincheta)', 'Corte', 'Manual', 'Móvil', '🔪', ['drywall', 'sip', 'steel'], 'Corta placas de yeso: se marca el papel de una cara, se quiebra la placa y se corta la otra cara.'),
  h('Serrucho de punta', 'Corte', 'Manual', 'Móvil', '🪚', ['drywall'], 'Hoja angosta y puntiaguda para calar huecos de cajas eléctricas en placas de yeso.'),
  h('Tijera de chapa', 'Corte', 'Manual', 'Móvil', '✂️', ['steel', 'drywall'], 'Corta perfiles y flejes de chapa galvanizada. Las hay de corte recto, a izquierda y a derecha.'),
  h('Sierra circular portátil', 'Corte', 'Eléctrica', 'Móvil', '⚙️', ['platform', 'sip', 'clt', 'pilotes', 'chiloe', 'troncos', 'steel'], 'La herramienta clave de la obra. Con disco de 184 – 235 mm corta ≈ 65 – 85 mm de espesor; con disco para metal sirve en steel framing.'),
  h('Sierra caladora', 'Corte', 'Eléctrica', 'Móvil', '⚙️', ['platform', 'drywall', 'sip', 'steel'], 'Cortes curvos y calados en tablas, placas y paneles. La hoja se elige según el material.'),
  h('Sierra sable', 'Corte', 'Eléctrica', 'Móvil', '⚙️', ['platform', 'steel', 'sip', 'clt', 'troncos'], 'Corta en lugares incómodos y en demolición: madera con clavos, perfiles y caños.'),
  h('Motosierra', 'Corte', 'Combustión', 'Móvil', '⚙️', ['troncos', 'pilotes', 'fachwerk'], 'Tala, troceado y tallado de troncos. Exige casco con protector facial, guantes y pantalón anticorte.'),
  h('Sierra de cadena para carpintería', 'Corte', 'Eléctrica', 'Móvil', '⚙️', ['fachwerk', 'japon', 'sip', 'clt'], 'Sierra de espada con guía que corta vigas y paneles gruesos en una sola pasada.'),
  h('Amoladora angular', 'Corte', 'Eléctrica', 'Móvil', '⚙️', ['steel', 'clt'], 'Con disco abrasivo corta y rebarba perfiles y varillas. Nunca montarle discos dentados para madera.'),
  h('Ingletadora telescópica', 'Corte', 'Eléctrica', 'Estacionaria', '⚙️', ['platform', 'chiloe', 'sip'], 'Cortes repetibles a 90°, ingletes y biseles. La telescópica corta tablas de hasta ≈ 30 cm de ancho.'),
  h('Sierra de mesa', 'Corte', 'Eléctrica', 'Estacionaria', '⚙️', ['platform', 'chiloe', 'china'], 'Cortes rectos repetibles. Usar siempre cuchillo divisor, protector y empujador.'),
  h('Sierra de cinta', 'Corte', 'Eléctrica', 'Estacionaria', '⚙️', ['china', 'chiloe', 'fachwerk', 'japon'], 'Cortes curvos y reaserrado de tablones, como las piezas curvas del techo chino.'),
  h('Tronzadora de metal', 'Corte', 'Eléctrica', 'Estacionaria', '⚙️', ['steel'], 'Corta perfiles a medida con disco abrasivo o de carburo; más precisa que la amoladora para cortes en serie.'),
  h('Router CNC', 'Corte', 'Eléctrica', 'Estacionaria', '🖥️', ['clt', 'japon', 'sip'], 'Corta paneles CLT y SIP a medida y fabrica ensambles tradicionales en serie (en Japón, el sistema «pre-cut»).'),

  // Cepillado y desbaste
  h('Cepillo manual nº 4 / 5', 'Cepillado y desbaste', 'Manual', 'Móvil', '🪵', ['fachwerk', 'china', 'chiloe', 'platform'], 'Cepillo de alisar de uso general. La cuchilla debe sobresalir apenas para sacar virutas finas.'),
  h('Kanna (cepillo japonés)', 'Cepillado y desbaste', 'Manual', 'Móvil', '🪵', ['japon'], 'Cuerpo de madera y hoja gruesa; se trabaja tirando. Deja superficies tan lisas que muchas veces no se lija.'),
  h('Cepillo de rebajos', 'Cepillado y desbaste', 'Manual', 'Móvil', '🪵', ['fachwerk', 'chiloe', 'japon'], 'Cuchilla a todo el ancho de la suela para trabajar escalones y rebajos.'),
  h('Azuela', 'Cepillado y desbaste', 'Manual', 'Móvil', '🪓', ['troncos', 'fachwerk', 'japon'], 'Desbasta y aplana vigas a golpes, con el filo perpendicular al mango. En Japón (chōna) deja una textura decorativa.'),
  h('Plana (cuchilla de descortezar)', 'Cepillado y desbaste', 'Manual', 'Móvil', '🔪', ['troncos', 'pilotes'], 'Cuchilla de dos mangos que se tira hacia el cuerpo para descortezar troncos y redondear postes.'),
  h('Cepillo de cantos para placa', 'Cepillado y desbaste', 'Manual', 'Móvil', '🪵', ['drywall'], 'Rebaja y bisela los cantos cortados de la placa de yeso para que la junta se masille bien.'),
  h('Cepillo eléctrico', 'Cepillado y desbaste', 'Eléctrica', 'Móvil', '⚙️', ['platform', 'troncos', 'chiloe', 'fachwerk'], 'Rebaja puertas, vigas y cantos rápidamente, con pasadas finas de 1 – 2 mm.'),
  h('Cepilladora y regruesadora', 'Cepillado y desbaste', 'Eléctrica', 'Estacionaria', '⚙️', ['fachwerk', 'japon', 'china', 'chiloe'], 'Endereza una cara y un canto (cepilladora) y lleva la pieza a un espesor uniforme (regruesadora).'),

  // Talla y ensamble
  h('Formones', 'Talla y ensamble', 'Manual', 'Móvil', '🔪', [...ENSAMBLES, 'troncos'], 'Vaciado de cajas y ajuste fino. En Japón (nomi) se golpean con martillo de acero. Cortar siempre alejando las manos del filo.'),
  h('Mazo de madera', 'Talla y ensamble', 'Manual', 'Móvil', '🔨', [...ENSAMBLES, 'troncos'], 'Golpea formones y encaja ensambles sin marcar la madera.'),
  h('Gubias', 'Talla y ensamble', 'Manual', 'Móvil', '🔪', ['china', 'chiloe'], 'Formones de hoja curva para tallas decorativas y vaciados cóncavos.'),
  h('Fresadora (router)', 'Talla y ensamble', 'Eléctrica', 'Móvil', '⚙️', ['platform', 'sip', 'chiloe', 'china'], 'Molduras, ranuras y rebajos; en SIP abre canales para instalaciones. Avanzar en contra del giro de la fresa.'),
  h('Galletera', 'Talla y ensamble', 'Eléctrica', 'Móvil', '⚙️', ['chiloe', 'platform'], 'Abre ranuras para galletas de madera comprimida que alinean y refuerzan ingletes y tableros.'),
  h('Escopleadora de cadena', 'Talla y ensamble', 'Eléctrica', 'Móvil', '⚙️', ['fachwerk', 'japon', 'china'], 'Abre cajas grandes en vigas con una cadena de corte: reemplaza horas de formón en estructuras macizas.'),
  h('Escopleadora de banco', 'Talla y ensamble', 'Eléctrica', 'Estacionaria', '⚙️', ['fachwerk', 'japon', 'china', 'chiloe'], 'Hace cajas cuadradas con una broca hueca; para cajas pequeñas y medianas en serie.'),

  // Perforación y atornillado
  h('Berbiquí y barrenas', 'Perforación y atornillado', 'Manual', 'Móvil', '🪛', ['fachwerk', 'troncos', 'chiloe', 'japon'], 'Taladro manual de manivela; con barrenas largas abre los agujeros para las clavijas de madera.'),
  h('Taladro atornillador inalámbrico', 'Perforación y atornillado', 'Eléctrica', 'Móvil', '🪛', TODAS, 'La herramienta más usada en obra: perfora y atornilla con control de torque. Baterías de 12 – 18 V.'),
  h('Atornillador de impacto', 'Perforación y atornillado', 'Eléctrica', 'Móvil', '🪛', ['clt', 'sip', 'steel', 'platform'], 'Mete tornillos largos, de 200 mm o más, en CLT y SIP sin forzar la muñeca.'),
  h('Atornillador para placa de yeso', 'Perforación y atornillado', 'Eléctrica', 'Móvil', '🪛', ['drywall', 'steel'], 'Con tope de profundidad: hunde la cabeza del tornillo apenas bajo el papel sin romperlo.'),
  h('Rotomartillo', 'Perforación y atornillado', 'Eléctrica', 'Móvil', '🪛', MODERNAS, 'Perfora hormigón para anclar soleras y varillas; modo percutor con brocas SDS.'),

  // Fijación
  h('Martillo de carpintero', 'Fijación', 'Manual', 'Móvil', '🔨', ['platform', 'pilotes', 'chiloe', 'troncos', 'sip', 'fachwerk'], 'Cabeza de 450 – 650 g con uña para arrancar clavos. Golpear con la cara plana, nunca con el costado.'),
  h('Pinza punzonadora', 'Fijación', 'Manual', 'Móvil', '🔧', ['drywall'], 'Une soleras y montantes de chapa punzonándolos, sin tornillos, en tabiques livianos.'),
  h('Llaves de vaso y torquímetro', 'Fijación', 'Manual', 'Móvil', '🔧', ['clt', 'steel', 'platform'], 'Aprietan pernos y anclajes al par indicado por el cálculo estructural.'),
  h('Clavadora neumática', 'Fijación', 'Neumática', 'Móvil', '🔩', ['platform', 'sip', 'chiloe'], 'Clava en tiras clavos de 50 – 90 mm en una fracción de segundo. Funciona con compresor; usar siempre gafas.'),
  h('Grapadora neumática', 'Fijación', 'Neumática', 'Móvil', '🔩', ['platform', 'sip', 'steel'], 'Fija barreras de vapor, membranas y mallas.'),
  h('Clavadora a batería', 'Fijación', 'Eléctrica', 'Móvil', '🔩', ['platform', 'sip', 'chiloe'], 'Como la neumática pero sin manguera ni compresor.'),
  h('Compresor de aire', 'Fijación', 'Eléctrica', 'Móvil', '💨', ['platform', 'sip', 'chiloe', 'steel'], 'Alimenta clavadoras y grapadoras neumáticas. Para obra, de 24 – 50 L.'),
  h('Fijadora a gas', 'Fijación', 'Combustión', 'Móvil', '🔩', ['steel', 'drywall'], 'Dispara clavos de acero en hormigón y chapa para fijar soleras y cielorrasos.'),

  // Sujeción y montaje
  h('Sargentos y prensas', 'Sujeción y montaje', 'Manual', 'Móvil', '🗜️', MADERA, 'Aprietan piezas al encolar o al presentar. Usar tacos para no marcar la madera.'),
  h('Caballetes', 'Sujeción y montaje', 'Manual', 'Móvil', '🪵', TODAS, 'Apoyo de trabajo para cortar tablas, placas y perfiles a buena altura.'),
  h('Banco de carpintero', 'Sujeción y montaje', 'Manual', 'Estacionaria', '🛠️', ENSAMBLES, 'Superficie plana y pesada con tornillos y topes para sujetar el trabajo.'),
  h('Gancho para troncos', 'Sujeción y montaje', 'Manual', 'Móvil', '🪝', ['troncos'], 'Palanca con gancho para girar y mover troncos pesados cuidando la espalda.'),
  h('Polipasto (aparejo)', 'Sujeción y montaje', 'Manual', 'Móvil', '⛓️', ['troncos', 'fachwerk', 'japon', 'china', 'chiloe'], 'Poleas o cadena que levantan vigas y troncos con poca fuerza.'),
  h('Elevador de placas', 'Sujeción y montaje', 'Manual', 'Móvil', '🪜', ['drywall'], 'Sostiene las placas contra el cielorraso mientras se atornillan.'),
  h('Andamio', 'Sujeción y montaje', 'Manual', 'Estacionaria', '🪜', TODAS, 'Plataforma para trabajar en altura, con barandas, rodapié y bases niveladas.'),
  h('Grúa (autogrúa o torre)', 'Sujeción y montaje', 'Combustión', 'Estacionaria', '🏗️', ['clt', 'sip'], 'Iza paneles CLT y SIP de cientos de kilos y los coloca en su lugar.'),

  // Lijado y acabado
  h('Lija y taco', 'Lijado y acabado', 'Manual', 'Móvil', '🧽', MADERA, 'Lijado a mano en la dirección de la veta: grano 80 → 120 → 180.'),
  h('Espátulas y llana', 'Lijado y acabado', 'Manual', 'Móvil', '🧱', ['drywall', 'steel'], 'Espátulas de 10, 15 y 30 cm para cargar masilla y cubrir la cinta en las juntas.'),
  h('Pincel y brocha', 'Lijado y acabado', 'Manual', 'Móvil', '🖌️', ['chiloe', 'troncos', 'pilotes', 'fachwerk', 'platform'], 'Aplican protectores, aceites e impregnantes contra hongos, insectos y sol.'),
  h('Lijadora orbital', 'Lijado y acabado', 'Eléctrica', 'Móvil', '⚙️', ['chiloe', 'platform', 'clt', 'japon', 'china'], 'Lijado sin marcas en espiral. Avanzar por grano: 80 → 120 → 180 → 220.'),
  h('Lijadora de paredes (jirafa)', 'Lijado y acabado', 'Eléctrica', 'Móvil', '⚙️', ['drywall'], 'Lijadora de brazo largo con aspiración para lijar masilla en paredes y techos.'),

  // Seguridad
  h('Equipo de protección personal', 'Seguridad', 'Manual', 'Móvil', '🦺', TODAS, 'Gafas, protección auditiva, guantes, mascarilla para polvo y calzado de seguridad.'),
  h('Arnés y línea de vida', 'Seguridad', 'Manual', 'Móvil', '🦺', ['platform', 'clt', 'steel', 'sip', 'japon', 'fachwerk', 'china'], 'Para trabajos en altura, en general desde ≈ 2 m, anclado a un punto resistente.'),
  h('Aspirador de obra', 'Seguridad', 'Eléctrica', 'Móvil', '🧹', ['drywall', 'clt', 'platform', 'sip', 'chiloe'], 'Conectado a lijadoras y sierras reduce el polvo fino, dañino para los pulmones.'),
]

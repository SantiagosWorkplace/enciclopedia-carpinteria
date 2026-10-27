// Sistemas constructivos en madera del mundo. Todas las medidas en sistema métrico.
// Los dibujos se escriben en metros (x desde la izquierda, h desde el suelo) y
// comparten la misma escala, así se pueden comparar entre sí y con una persona.

export const ESCALA = 40 // px por metro
export const ANCHO = 420
export const ALTO = 318
export const SUELO = 290

const px = (m) => +(m * ESCALA).toFixed(1)
const py = (h) => +(SUELO - h * ESCALA).toFixed(1)

// Rectángulo con su esquina inferior izquierda en (x, h).
const R = (x, h, ancho, alto) => `M${px(x)} ${py(h)} h${px(ancho)} v${-px(alto)} h${-px(ancho)} Z`
// Polilínea por puntos [x, h]; cerrada opcionalmente.
const L = (pts, cerrar = false) => 'M' + pts.map(([x, h]) => `${px(x)} ${py(h)}`).join(' L') + (cerrar ? ' Z' : '')
const C = (x, h, r) => `M${px(x - r)} ${py(h)} a${px(r)} ${px(r)} 0 1 0 ${px(2 * r)} 0 a${px(r)} ${px(r)} 0 1 0 ${px(-2 * r)} 0`
const rango = (n, f) => Array.from({ length: n }, (_, i) => f(i)).join(' ')

// Silueta de 1,70 m de pie en (x, h), para dar escala.
export const persona = ({ x, h = 0 }) => [
  C(x, h + 1.585, 0.115),
  L([[x, h + 1.47], [x, h + 0.9]]),
  L([[x - 0.17, h], [x, h + 0.9], [x + 0.17, h]]),
  L([[x - 0.3, h + 0.95], [x, h + 1.35], [x + 0.3, h + 0.95]]),
].join(' ')

// Barra de escala de 0 a `metros` bajo la línea de suelo.
export const barraEscala = (metros) => ({
  linea: L([[0.3, -0.55], [0.3 + metros, -0.55]]) + ' ' + rango(metros + 1, (i) => L([[0.3 + i, -0.45], [0.3 + i, -0.65]])),
  marcas: Array.from({ length: metros + 1 }, (_, i) => ({ x: px(0.3 + i), y: py(-0.42), texto: i === metros ? `${i} m` : `${i}` })),
})

// ---------- Entramado ligero (platform frame) ----------
const montantes = (() => {
  const paso = 0.406
  const sill = 1.5
  return rango(23, (i) => {
    const x = 0.6 + i * paso
    if (i >= 9 && i <= 11) return R(x, 0.573, 0.038, sill - 0.573) // montantes cortos bajo el antepecho
    return R(x, 0.573, 0.038, 2.36)
  })
})()

// ---------- Japón ----------
const ejesJapon = [1.5, 3.32, 5.14, 6.96, 8.78]
const shoji =
  R(3.44, 0.55, 3.52, 1.21) + ' ' +
  rango(11, (i) => L([[3.44 + (i + 1) * 0.293, 0.55], [3.44 + (i + 1) * 0.293, 1.76]])) + ' ' +
  rango(3, (i) => L([[3.44, 0.55 + (i + 1) * 0.3], [6.96, 0.55 + (i + 1) * 0.3]]))

// ---------- Entramado europeo ----------
const postes = (x0, ancho, h0, alto) =>
  rango(7, (i) => R(x0 + (i * (ancho - 0.18)) / 6, h0, 0.18, alto))
const bahia = (x0, ancho, i) => x0 + (i * (ancho - 0.18)) / 6

// ---------- Casa de troncos ----------
const troncos = rango(10, (c) => R(0.7, 0.4 + c * 0.25, 9.0, 0.25))
const hastial = rango(8, (c) => {
  const h = 2.9 + c * 0.25
  const medio = 4.2 - c * 0.298
  return R(5.2 - medio, h, medio * 2, 0.25)
})
const esquinas = rango(9, (c) => C(0.85, 0.4 + (c + 1) * 0.25, 0.125) + ' ' + C(9.55, 0.4 + (c + 1) * 0.25, 0.125))

// ---------- China ----------
const ejesChina = [1.2, 3.9, 6.6, 9.3]
const dougong = (x) => L([
  [x - 0.25, 3.85], [x + 0.25, 3.85], [x + 0.25, 4.0], [x + 0.55, 4.0], [x + 0.55, 4.15], [x + 0.8, 4.15],
  [x + 0.8, 4.3], [x - 0.8, 4.3], [x - 0.8, 4.15], [x - 0.55, 4.15], [x - 0.55, 4.0], [x - 0.25, 4.0],
], true)
const techoChino =
  `M${px(-0.2)} ${py(4.15)} Q${px(2.2)} ${py(4.35)} ${px(3.5)} ${py(6.4)} L${px(7.0)} ${py(6.4)} ` +
  `Q${px(8.3)} ${py(4.35)} ${px(10.7)} ${py(4.15)} L${px(10.7)} ${py(3.95)} ` +
  `Q${px(8.1)} ${py(4.15)} ${px(6.9)} ${py(6.2)} L${px(3.6)} ${py(6.2)} Q${px(2.4)} ${py(4.15)} ${px(-0.2)} ${py(3.95)} Z`

// ---------- Palafito (Chiloé) ----------
const tejuelas = rango(11, (f) => {
  const h = 3.3 + f * 0.2
  let d = `M${px(2.6)} ${py(h)}`
  for (let x = 2.6; x < 7.79; x += 0.26) d += ` a${px(0.13)} ${px(0.1)} 0 0 0 ${px(0.26)} 0`
  return d
})

const delMundo = [
  {
    id: 'platform',
    grupos: ['mundo', 'seco'],
    nombre: 'Entramado ligero',
    local: 'Platform frame / balloon frame',
    region: 'Norteamérica',
    epoca: 'Desde 1830 hasta hoy',
    resumen: 'Muros hechos con muchas piezas delgadas y estandarizadas, unidas con clavos y rigidizadas con tableros. Cada planta se arma sobre la plataforma de la anterior.',
    clima: 'Muy versátil: con aislación entre montantes sirve desde climas fríos hasta templados.',
    curiosidad: 'Las piezas se conocen por su medida nominal en pulgadas («2×4»), pero la sección real cepillada es 38 × 89 mm. En países métricos se modula a 40 o 60 cm.',
    persona: { x: 8.6 },
    partes: [
      { id: 'cimiento', nombre: 'Cimiento', d: R(0.6, 0, 9.0, 0.3) },
      { id: 'forjado', nombre: 'Viguetas de piso', d: R(0.6, 0.3, 9.0, 0.235) },
      { id: 'solera', nombre: 'Solera inferior', d: R(0.6, 0.535, 9.0, 0.038) },
      { id: 'montantes', nombre: 'Montantes', d: montantes },
      { id: 'dintel', nombre: 'Dintel y antepecho', d: R(3.848, 2.698, 1.662, 0.235) + ' ' + R(3.848, 1.5, 1.662, 0.038) },
      { id: 'testero', nombre: 'Doble testero', d: R(0.6, 2.933, 9.0, 0.076) },
      { id: 'cercha', nombre: 'Cercha de cubierta', d: L([[0.3, 3.009], [5.1, 6.2], [9.9, 3.009]], true) + ' ' + L([[2.7, 3.009], [5.1, 6.2], [7.5, 3.009]]) + ' ' + L([[3.9, 3.009], [3.9, 3.8]]) + ' ' + L([[6.3, 3.009], [6.3, 3.8]]) },
    ],
    medidas: [
      { parte: 'montantes', nombre: 'Montantes (pies derechos)', valor: '38 × 89 mm · 38 × 140 mm en muros exteriores más aislados' },
      { parte: 'montantes', nombre: 'Separación entre ejes', valor: '40,6 cm o 61 cm (40 / 60 cm en países métricos)' },
      { parte: 'solera', nombre: 'Solera inferior', valor: '38 × 89 mm' },
      { parte: 'testero', nombre: 'Doble testero', valor: '2 piezas de 38 × 89 mm' },
      { parte: 'dintel', nombre: 'Dintel sobre vanos', valor: '2 piezas de 38 × 235 mm' },
      { parte: 'forjado', nombre: 'Viguetas de piso', valor: '38 × 235 mm cada 40,6 cm' },
      { parte: null, nombre: 'Tableros estructurales (OSB / contrachapado)', valor: '122 × 244 cm, 11 – 12 mm de espesor' },
      { parte: 'montantes', nombre: 'Altura de muro', valor: '≈ 2,44 m' },
    ],
  },
  {
    id: 'japon',
    grupos: ['mundo'],
    nombre: 'Casa tradicional japonesa',
    local: 'Minka · jiku-gumi (estructura de pilares y vigas)',
    region: 'Japón',
    epoca: 'Siglos XVII – XIX, técnicas que siguen vigentes',
    resumen: 'Estructura de pilares y vigas unidos con ensambles de carpintería, sin clavos. Los muros no cargan: son paneles corredizos que abren la casa al jardín.',
    clima: 'Veranos húmedos: piso elevado, aleros profundos y mucha ventilación. Los ensambles permiten cierto movimiento ante sismos.',
    curiosidad: 'Todo se modula con el ken (≈ 1,82 m) y el tatami: el tamaño de una habitación se dice en tatamis, por ejemplo «una sala de 6 tatamis».',
    persona: { x: 9.5 },
    partes: [
      { id: 'soseki', nombre: 'Basas de piedra', d: ejesJapon.map((x) => R(x - 0.12, 0, 0.36, 0.18)).join(' ') },
      { id: 'piso', nombre: 'Piso elevado', d: R(1.5, 0.43, 7.4, 0.12) },
      { id: 'pilares', nombre: 'Pilares (hashira)', d: ejesJapon.map((x) => R(x, 0.18, 0.12, 2.9)).join(' ') },
      { id: 'nuki', nombre: 'Nuki y dintel (kamoi)', d: R(1.5, 1.76, 7.4, 0.105) + ' ' + R(1.5, 2.55, 7.4, 0.105) },
      { id: 'shoji', nombre: 'Paneles corredizos (shoji)', d: shoji },
      { id: 'hari', nombre: 'Viga principal (hari)', d: R(1.3, 3.08, 7.8, 0.3) },
      { id: 'alero', nombre: 'Cubierta y alero', d: L([[0.3, 3.1], [2.6, 5.3], [7.8, 5.3], [10.1, 3.1]], true) + ' ' + L([[3.9, 5.3], [5.2, 6.4], [6.5, 5.3]], true) },
    ],
    medidas: [
      { parte: 'pilares', nombre: 'Módulo ken (entre ejes de pilares)', valor: '≈ 1,82 m = 6 shaku de 30,3 cm' },
      { parte: 'pilares', nombre: 'Pilares (hashira)', valor: '10,5 – 12 cm de lado' },
      { parte: null, nombre: 'Tatami', valor: '≈ 91 × 182 cm (según la región, 88 – 95,5 cm de ancho)' },
      { parte: 'piso', nombre: 'Altura del piso sobre el terreno', valor: '≥ 45 cm, para ventilar y evitar la humedad' },
      { parte: 'nuki', nombre: 'Altura del dintel (kamoi)', valor: '≈ 1,76 m' },
      { parte: 'nuki', nombre: 'Nuki (tablas pasantes)', valor: 'atraviesan los pilares y los arriostran' },
      { parte: 'alero', nombre: 'Vuelo del alero', valor: '90 – 120 cm' },
      { parte: null, nombre: 'Uniones', valor: 'tsugite (empalmes) y shiguchi (encuentros), sin clavos' },
    ],
  },
  {
    id: 'fachwerk',
    grupos: ['mundo'],
    nombre: 'Entramado de madera europeo',
    local: 'Fachwerk · timber framing · colombage',
    region: 'Alemania, Inglaterra, Francia',
    epoca: 'Siglos XIII – XIX',
    resumen: 'Un esqueleto de postes, vigas y riostras de roble a la vista; los huecos se rellenan con zarzo y barro o con ladrillo. La planta alta suele volar sobre la baja.',
    clima: 'Templado y lluvioso: zócalo de piedra para alejar la madera de la humedad y cubiertas muy empinadas.',
    curiosidad: 'Las piezas se marcaban con números romanos tallados para armarlas en obra en el orden correcto, como un mueble desarmado.',
    persona: { x: 9.6 },
    partes: [
      { id: 'zocalo', nombre: 'Zócalo de piedra', d: R(1.2, 0, 7.6, 0.5) },
      { id: 'postes', nombre: 'Soleras, postes y vigas', d: R(1.2, 0.5, 7.6, 0.2) + ' ' + postes(1.2, 7.6, 0.7, 2.3) + ' ' + R(1.2, 3.0, 7.6, 0.4) },
      { id: 'alta', nombre: 'Planta alta en voladizo', d: R(0.8, 3.4, 8.4, 0.18) + ' ' + postes(0.8, 8.4, 3.58, 2.22) + ' ' + R(0.8, 5.8, 8.4, 0.2) },
      {
        id: 'riostras',
        nombre: 'Riostras y cruces de San Andrés',
        d: [
          L([[bahia(1.2, 7.6, 0) + 0.18, 0.7], [bahia(1.2, 7.6, 1), 3.0]]),
          L([[bahia(1.2, 7.6, 6), 0.7], [bahia(1.2, 7.6, 5) + 0.18, 3.0]]),
          L([[bahia(0.8, 8.4, 1) + 0.18, 3.58], [bahia(0.8, 8.4, 2), 5.8]]),
          L([[bahia(0.8, 8.4, 2), 3.58], [bahia(0.8, 8.4, 1) + 0.18, 5.8]]),
          L([[bahia(0.8, 8.4, 4) + 0.18, 3.58], [bahia(0.8, 8.4, 5), 5.8]]),
          L([[bahia(0.8, 8.4, 5), 3.58], [bahia(0.8, 8.4, 4) + 0.18, 5.8]]),
        ].join(' '),
      },
      { id: 'cubierta', nombre: 'Arranque de cubierta', d: L([[0.4, 6.0], [1.35, 7.35]]) + ' ' + L([[9.6, 6.0], [8.65, 7.35]]) + ' ' + L([[0.4, 6.0], [9.6, 6.0]]) },
    ],
    medidas: [
      { parte: 'postes', nombre: 'Postes y vigas de roble', valor: 'secciones de 15 – 25 cm' },
      { parte: 'alta', nombre: 'Voladizo de la planta alta', valor: '20 – 60 cm' },
      { parte: 'riostras', nombre: 'Riostras diagonales', valor: 'rigidizan el entramado frente al viento' },
      { parte: null, nombre: 'Clavijas de madera en las uniones', valor: 'Ø 2 – 3 cm' },
      { parte: null, nombre: 'Relleno de los paños', valor: 'zarzo con barro y paja, o ladrillo' },
      { parte: 'zocalo', nombre: 'Zócalo de piedra', valor: 'separa la solera de la humedad del suelo' },
      { parte: 'cubierta', nombre: 'Pendiente de cubierta', valor: '≈ 45 – 60° (continúa fuera del dibujo)' },
    ],
  },
  {
    id: 'troncos',
    grupos: ['mundo'],
    nombre: 'Casa de troncos',
    local: 'Blockhaus · izba · log cabin',
    region: 'Escandinavia, Rusia, Alpes, Canadá',
    epoca: 'Desde la Edad Media',
    resumen: 'Muros de troncos macizos apilados horizontalmente y trabados en las esquinas. El propio tronco es estructura, cerramiento y aislación.',
    clima: 'Frío y con mucho bosque: la gran masa de madera acumula calor y aísla.',
    curiosidad: 'Al secarse, los troncos encogen y el muro baja varios centímetros: por eso sobre puertas y ventanas se deja una holgura.',
    persona: { x: 9.9 },
    partes: [
      { id: 'cimiento', nombre: 'Cimiento elevado', d: R(1.0, 0, 8.4, 0.4) },
      { id: 'troncos', nombre: 'Troncos del muro', d: troncos + ' ' + hastial },
      { id: 'esquinas', nombre: 'Esquinas trabadas', d: esquinas },
      { id: 'ventana', nombre: 'Ventana con holgura', d: R(4.2, 1.15, 1.6, 1.0) + ' ' + R(4.2, 2.15, 1.6, 0.07) },
      { id: 'cubierta', nombre: 'Cubierta', d: L([[0.2, 2.75], [5.2, 7.0], [10.2, 2.75]]) },
    ],
    medidas: [
      { parte: 'troncos', nombre: 'Troncos', valor: 'Ø 20 – 35 cm' },
      { parte: 'esquinas', nombre: 'Vuelo de las esquinas', valor: '20 – 40 cm' },
      { parte: 'troncos', nombre: 'Asentamiento del muro', valor: 'hasta ≈ 5 % de su altura en los primeros años' },
      { parte: 'ventana', nombre: 'Holgura sobre puertas y ventanas', valor: '5 – 8 cm' },
      { parte: 'cimiento', nombre: 'Cimiento', valor: 'eleva el primer tronco lejos del suelo húmedo' },
      { parte: 'cubierta', nombre: 'Pendiente de cubierta', valor: '≈ 35 – 45° para la nieve' },
    ],
  },
  {
    id: 'china',
    grupos: ['mundo'],
    nombre: 'Estructura tradicional china',
    local: 'Tailiang (vigas apiladas) y dougong (ménsulas)',
    region: 'China, Corea y su área de influencia',
    epoca: 'Más de 2000 años de tradición',
    resumen: 'Columnas de madera sobre basas de piedra sostienen vigas apiladas que definen la curva del techo. Las ménsulas dougong reparten el peso de los grandes aleros.',
    clima: 'Lluvias intensas: aleros amplios y curvados que alejan el agua de la estructura.',
    curiosidad: 'El tratado Yingzao Fashi (1103) estandarizó las piezas en módulos (cai): las medidas de todo el edificio derivaban de la sección de una pieza.',
    persona: { x: 10.0 },
    partes: [
      { id: 'plataforma', nombre: 'Plataforma de base', d: R(0.3, 0, 9.9, 0.5) },
      { id: 'basas', nombre: 'Basas de piedra', d: ejesChina.map((x) => R(x - 0.3, 0.5, 0.6, 0.15)).join(' ') },
      { id: 'columnas', nombre: 'Columnas', d: ejesChina.map((x) => R(x - 0.175, 0.65, 0.35, 3.2)).join(' ') },
      { id: 'dougong', nombre: 'Ménsulas dougong', d: ejesChina.map(dougong).join(' ') },
      {
        id: 'tailiang',
        nombre: 'Vigas apiladas (tailiang)',
        d: [
          R(0.6, 4.3, 9.3, 0.35), R(2.2, 5.15, 6.1, 0.3), R(3.6, 5.85, 3.3, 0.3),
          R(2.5, 4.65, 0.15, 0.5), R(7.85, 4.65, 0.15, 0.5), R(3.9, 5.45, 0.15, 0.4), R(6.45, 5.45, 0.15, 0.4),
        ].join(' '),
      },
      { id: 'techo', nombre: 'Techo curvo', d: techoChino + ' ' + R(3.4, 6.4, 3.7, 0.25) },
    ],
    medidas: [
      { parte: 'columnas', nombre: 'Columnas de madera', valor: 'Ø 30 – 50 cm según la importancia del edificio' },
      { parte: 'basas', nombre: 'Basas de piedra', valor: 'aíslan la columna de la humedad del suelo' },
      { parte: 'dougong', nombre: 'Ménsulas dougong', valor: 'bloques y brazos encajados sin clavos' },
      { parte: 'tailiang', nombre: 'Vigas apiladas', valor: 'la altura de cada nivel define la curva del techo' },
      { parte: 'techo', nombre: 'Vuelo del alero', valor: 'puede superar 1,5 m' },
      { parte: 'plataforma', nombre: 'Plataforma', valor: 'su altura marcaba la jerarquía del edificio' },
    ],
  },
  {
    id: 'pilotes',
    grupos: ['mundo'],
    nombre: 'Casa sobre pilotes',
    local: 'Rumah panggung · bahay kubo · ruean thai',
    region: 'Sudeste asiático',
    epoca: 'Tradición milenaria, aún en uso',
    resumen: 'La vivienda se eleva sobre pilotes de madera dura o bambú. Los muros livianos dejan pasar el aire y el techo empinado evacúa las lluvias del monzón.',
    clima: 'Tropical húmedo: protege de inundaciones, animales y humedad, y ventila por debajo.',
    curiosidad: 'El espacio bajo la casa es parte de la vivienda: sombra para trabajar, guardar herramientas o resguardar animales.',
    persona: { x: 0.45 },
    partes: [
      { id: 'pilotes', nombre: 'Pilotes', d: [2.7, 4.37, 6.03, 7.7].map((x) => R(x - 0.1, 0, 0.2, 2.0)).join(' ') },
      { id: 'piso', nombre: 'Vigas y piso', d: R(2.4, 2.0, 5.6, 0.2) },
      { id: 'muros', nombre: 'Muros livianos', d: R(2.7, 2.2, 5.0, 2.0) + ' ' + rango(19, (i) => L([[2.95 + i * 0.25, 2.2], [2.95 + i * 0.25, 4.2]])) },
      { id: 'escalera', nombre: 'Escalera', d: L([[0.9, 0], [2.4, 2.2]]) + ' ' + L([[1.4, 0], [2.7, 2.0]]) + ' ' + rango(5, (i) => L([[1.08 + i * 0.27, 0.3 + i * 0.4], [1.6 + i * 0.25, 0.3 + i * 0.4]])) },
      { id: 'cubierta', nombre: 'Cubierta empinada', d: L([[2.0, 4.0], [5.2, 7.2], [8.4, 4.0]], true) },
    ],
    medidas: [
      { parte: 'piso', nombre: 'Altura del piso', valor: '1,5 – 3 m sobre el terreno' },
      { parte: 'pilotes', nombre: 'Pilotes', valor: 'madera dura o bambú, Ø 15 – 25 cm' },
      { parte: 'cubierta', nombre: 'Pendiente de cubierta', valor: '≈ 40 – 50°' },
      { parte: 'muros', nombre: 'Muros', valor: 'tablas, bambú tejido o paneles que dejan pasar el aire' },
      { parte: 'escalera', nombre: 'Acceso', valor: 'escalera o rampa; a veces se retira por seguridad' },
    ],
  },
  {
    id: 'chiloe',
    grupos: ['mundo'],
    nombre: 'Palafito chilote',
    local: 'Palafitos y arquitectura en madera de Chiloé',
    region: 'Chiloé, Chile',
    epoca: 'Siglos XIX – XX',
    resumen: 'Casas de madera nativa sobre pilotes clavados en la orilla del mar: de un lado dan a la calle, del otro al agua. Se revisten con tejuelas, tablillas de madera superpuestas.',
    clima: 'Muy lluvioso y ventoso: las tejuelas superpuestas escurren el agua como escamas.',
    curiosidad: 'Los carpinteros de ribera, que construían barcos, levantaron también las iglesias de madera de Chiloé, Patrimonio de la Humanidad (UNESCO, 2000).',
    persona: { x: 8.05, h: 3.25 },
    partes: [
      { id: 'pilotes', nombre: 'Pilotes', d: [2.4, 3.8, 5.2, 6.6, 8.0].map((x) => R(x - 0.12, 0, 0.25, 3.0)).join(' ') },
      { id: 'agua', nombre: 'Nivel del agua (variable con la marea)', d: rango(6, (i) => `M${px(0.2 + i * 1.7)} ${py(1.2)} q${px(0.42)} ${-px(0.12)} ${px(0.85)} 0 t${px(0.85)} 0`) },
      { id: 'vigas', nombre: 'Vigas de apoyo', d: R(2.1, 3.0, 6.2, 0.25) },
      { id: 'muros', nombre: 'Muros', d: R(2.6, 3.25, 5.2, 2.3) + ' ' + R(3.4, 3.9, 0.8, 1.0) + ' ' + R(6.2, 3.9, 0.8, 1.0) },
      { id: 'tejuelas', nombre: 'Tejuelas', d: tejuelas },
      { id: 'cubierta', nombre: 'Cubierta', d: L([[2.2, 5.45], [5.2, 7.2], [8.2, 5.45]], true) },
    ],
    medidas: [
      { parte: 'pilotes', nombre: 'Pilotes', valor: 'troncos hincados en la orilla; la marea sube y baja bajo la casa' },
      { parte: 'tejuelas', nombre: 'Tejuelas de alerce o ciprés', valor: 'tablillas partidas a mano, en hileras superpuestas' },
      { parte: 'muros', nombre: 'Estructura', valor: 'entramado de madera nativa sobre la plataforma' },
      { parte: 'agua', nombre: 'Marea', valor: 'en Chiloé la diferencia entre mareas puede ser de varios metros' },
    ],
  },
  {
    id: 'clt',
    grupos: ['mundo', 'seco'],
    nombre: 'Madera contralaminada',
    local: 'CLT · cross-laminated timber',
    region: 'Europa (Austria, Alemania) y hoy todo el mundo',
    epoca: 'Desde la década de 1990',
    resumen: 'Paneles macizos de tablas encoladas en capas cruzadas a 90°. Funcionan como muros y losas, se fabrican a medida y se montan en obra como un mecano.',
    clima: 'Cualquiera: es un sistema industrial con aislación exterior.',
    curiosidad: 'Ya existen edificios de madera de más de 80 m, como Mjøstårnet (Noruega, 85,4 m). Ante el fuego la madera se carboniza por fuera a ≈ 0,65 mm/min y protege su núcleo.',
    persona: { x: 0.4 },
    partes: [
      { id: 'cimiento', nombre: 'Fundación de hormigón', d: R(0.9, 0, 5.5, 0.5) },
      { id: 'muros', nombre: 'Muros CLT', d: R(1.0, 0.5, 0.12, 3.0) + ' ' + R(6.18, 0.5, 0.12, 3.0) + ' ' + R(3.6, 0.5, 0.1, 3.0) + ' ' + R(1.0, 3.66, 0.12, 3.0) + ' ' + R(6.18, 3.66, 0.12, 3.0) },
      { id: 'losas', nombre: 'Losas CLT', d: R(1.0, 3.5, 5.3, 0.16) + ' ' + R(1.0, 6.66, 5.3, 0.16) },
      {
        id: 'capas',
        nombre: 'Detalle de capas (no a escala)',
        d: rango(5, (i) => {
          const x = 6.9 + i * 0.12
          const h = 1.2 + i * 0.5
          const veta = i % 2 === 0
            ? rango(3, (j) => L([[x + 0.1, h + 0.09 + j * 0.09], [x + 2.9, h + 0.09 + j * 0.09]]))
            : rango(14, (j) => L([[x + 0.15 + j * 0.2, h + 0.05], [x + 0.15 + j * 0.2, h + 0.33]]))
          return R(x, h, 3.0, 0.38) + ' ' + veta
        }),
      },
    ],
    medidas: [
      { parte: 'capas', nombre: 'Composición', valor: '3, 5 o 7 capas cruzadas a 90°' },
      { parte: 'capas', nombre: 'Espesor de cada capa', valor: '≈ 20 – 40 mm' },
      { parte: 'muros', nombre: 'Espesor de panel', valor: '≈ 60 – 300 mm' },
      { parte: 'losas', nombre: 'Luz habitual de losas', valor: '≈ 4 – 7 m sin apoyos intermedios' },
      { parte: 'muros', nombre: 'Altura de planta', valor: '≈ 3 m' },
      { parte: 'cimiento', nombre: 'Fundación', valor: 'hormigón, con barrera contra la humedad bajo la madera' },
    ],
  },
]

// ---------- Steel framing ----------
const montantesAcero = rango(23, (i) => {
  const x = 0.6 + i * 0.4
  if (i >= 9 && i <= 11) return R(x, 0.29, 0.04, 1.2 - 0.29) // bajo el antepecho
  return R(x, 0.29, 0.04, 2.6)
})

// ---------- Tabique de placa de yeso ----------
const montantesYeso = rango(13, (i) => {
  const x = 0.8 + i * 0.48
  if (i === 3) return R(x, 2.085, 0.035, 0.48) // sobre la puerta
  return R(x, 0.035, 0.035, 2.53)
})
const lana = L(Array.from({ length: 14 }, (_, i) => [i % 2 ? 9.2 : 8.05, 0.85 + i * 0.18]))

// ---------- Paneles SIP ----------
const panelesSip = rango(7, (k) => R(0.8 + k * 1.22, 0.3, 1.22, 2.44))
const juntasSip = rango(6, (k) => R(0.8 + (k + 1) * 1.22 - 0.04, 0.3, 0.08, 2.44))

const enSeco = [
  {
    id: 'steel',
    grupos: ['seco'],
    nombre: 'Steel framing',
    local: 'Entramado de perfiles de acero galvanizado liviano',
    region: 'Norteamérica, Australia, Latinoamérica',
    epoca: 'Desde la década de 1990 en vivienda',
    resumen: 'La misma lógica del entramado ligero de madera, pero con perfiles de chapa galvanizada atornillados. Se combina con madera en placas OSB o fenólicas, revestimientos y aberturas.',
    clima: 'Cualquiera, con aislación entre montantes y barrera de vapor. No se pudre ni lo atacan insectos.',
    curiosidad: 'Muchas herramientas son las mismas que en carpintería (nivel, escuadra, atornillador), pero los cortes se hacen con tijera de chapa, sierra de disco para metal o amoladora.',
    persona: { x: 9.75 },
    partes: [
      { id: 'platea', nombre: 'Platea de hormigón', d: R(0.4, 0, 9.4, 0.25) },
      { id: 'soleras', nombre: 'Soleras (PGU)', d: R(0.6, 0.25, 9.0, 0.04) + ' ' + R(0.6, 2.89, 9.0, 0.04) },
      { id: 'montantes', nombre: 'Montantes (PGC)', d: montantesAcero },
      { id: 'vano', nombre: 'Dintel y antepecho', d: R(3.84, 2.45, 1.56, 0.44) + ' ' + R(3.84, 1.2, 1.56, 0.04) },
      {
        id: 'cruces',
        nombre: 'Cruces de San Andrés (fleje)',
        d: L([[0.6, 0.29], [2.2, 2.89]]) + ' ' + L([[2.2, 0.29], [0.6, 2.89]]) + ' ' + L([[7.8, 0.29], [9.4, 2.89]]) + ' ' + L([[9.4, 0.29], [7.8, 2.89]]),
      },
      { id: 'cercha', nombre: 'Cerchas de acero', d: L([[0.3, 2.93], [5.0, 5.9], [9.7, 2.93]], true) + ' ' + L([[2.65, 2.93], [5.0, 5.9], [7.35, 2.93]]) },
    ],
    medidas: [
      { parte: 'montantes', nombre: 'Montantes PGC', valor: '90 – 200 mm de alma × 40 mm de ala, chapa de 0,9 – 1,6 mm' },
      { parte: 'montantes', nombre: 'Separación entre ejes', valor: '40 o 60 cm, coincidente con placas de 1,20 m' },
      { parte: 'soleras', nombre: 'Soleras PGU', valor: 'perfil U del mismo ancho que el montante' },
      { parte: 'cruces', nombre: 'Rigidización', valor: 'flejes en cruz o placas OSB de 11 mm atornilladas' },
      { parte: 'platea', nombre: 'Anclaje a la platea', valor: 'varillas roscadas o anclajes químicos' },
      { parte: null, nombre: 'Galvanizado', valor: 'Z275 = 275 g/m² de zinc (ambas caras)' },
      { parte: null, nombre: 'Tornillos', valor: 'autoperforantes: punta mecha para chapa gruesa, punta aguja para placas' },
      { parte: null, nombre: 'Aislación', valor: 'lana de vidrio o mineral de 50 – 150 mm entre montantes' },
    ],
  },
  {
    id: 'drywall',
    grupos: ['seco'],
    nombre: 'Tabique de placa de yeso',
    local: 'Drywall · tabiquería seca (Durlock, Pladur, Knauf)',
    region: 'Todo el mundo',
    epoca: 'Desde mediados del siglo XX',
    resumen: 'Divisiones interiores y cielorrasos de placas de yeso atornilladas a una estructura de perfiles de chapa (o de listones de madera). Se terminan con cinta y masilla en las juntas.',
    clima: 'Interior. Hay placas resistentes a la humedad para baños y cocinas, y resistentes al fuego.',
    curiosidad: 'Comparte con la carpintería el trazado, la plomada y el nivel. En construcción con madera se usa la misma placa sobre montantes de madera.',
    persona: { x: 7.15 },
    partes: [
      { id: 'losa', nombre: 'Losa existente', d: R(0.4, 2.6, 6.8, 0.2) },
      { id: 'soleras', nombre: 'Soleras', d: R(0.8, 0, 6.0, 0.035) + ' ' + R(0.8, 2.565, 6.0, 0.035) },
      { id: 'montantes', nombre: 'Montantes', d: montantesYeso },
      { id: 'puerta', nombre: 'Vano de puerta', d: R(1.76, 2.05, 0.96, 0.035) },
      { id: 'placas', nombre: 'Placas de yeso (a junta trabada)', d: R(3.7, 0.035, 1.2, 2.4) + ' ' + R(4.9, 0.035, 1.2, 2.4) + ' ' + R(6.1, 0.035, 0.7, 2.4) + ' ' + R(3.7, 2.435, 3.1, 0.13) },
      { id: 'detalle', nombre: 'Corte del tabique (no a escala)', d: R(7.7, 0.8, 0.22, 2.6) + ' ' + R(9.32, 0.8, 0.22, 2.6) + ' ' + R(7.92, 0.8, 1.4, 2.6) + ' ' + lana },
    ],
    medidas: [
      { parte: 'montantes', nombre: 'Montantes', valor: '35, 70 o 100 mm, chapa galvanizada de ≈ 0,5 mm' },
      { parte: 'montantes', nombre: 'Separación entre ejes', valor: '40 – 48 cm según fabricante y uso' },
      { parte: 'placas', nombre: 'Placas', valor: '1,20 × 2,40 m · espesor 9,5 / 12,5 / 15 mm' },
      { parte: 'placas', nombre: 'Tipos de placa', valor: 'estándar, resistente a la humedad y resistente al fuego' },
      { parte: 'detalle', nombre: 'Espesor terminado', valor: '≈ 95 mm (montante de 70 + 2 placas de 12,5)' },
      { parte: 'detalle', nombre: 'Aislación acústica', valor: 'lana de vidrio de 50 – 70 mm en la cavidad' },
      { parte: 'soleras', nombre: 'Fijación de soleras', valor: 'tarugos o fijaciones cada ≈ 60 cm' },
      { parte: null, nombre: 'Juntas', valor: 'cinta de papel + masilla en 2 – 3 manos, lijado fino' },
    ],
  },
  {
    id: 'sip',
    grupos: ['seco'],
    nombre: 'Paneles SIP',
    local: 'Structural insulated panels · paneles estructurales aislados',
    region: 'Norteamérica, Europa, Chile, Argentina',
    epoca: 'Desde la década de 1950',
    resumen: 'Paneles sándwich de dos placas de OSB con un núcleo aislante de espuma. Son estructura, aislación y base de revestimiento en una sola pieza, y se montan muy rápido.',
    clima: 'Fríos y templados: el núcleo continuo evita puentes térmicos.',
    curiosidad: 'Se trabaja casi como madera: sierra circular, caladora, fresadora y clavadora. Los paneles suelen traer canales para cables ya hechos.',
    persona: { x: 9.75 },
    partes: [
      { id: 'platea', nombre: 'Platea de hormigón', d: R(0.6, 0, 9.0, 0.25) },
      { id: 'solera', nombre: 'Solera de madera tratada', d: R(0.8, 0.25, 8.54, 0.05) },
      { id: 'paneles', nombre: 'Paneles de muro', d: panelesSip },
      { id: 'juntas', nombre: 'Juntas con lengüeta (spline)', d: juntasSip },
      { id: 'vanos', nombre: 'Ventana y puerta', d: R(3.3, 1.2, 1.4, 1.1) + ' ' + R(6.0, 0.3, 0.9, 2.05) },
      { id: 'techo', nombre: 'Paneles de techo', d: L([[0.4, 2.74], [5.07, 5.2], [9.74, 2.74]]) + ' ' + L([[0.4, 2.99], [5.07, 5.45], [9.74, 2.99]]) + ' ' + L([[0.4, 2.74], [0.4, 2.99]]) + ' ' + L([[9.74, 2.74], [9.74, 2.99]]) },
    ],
    medidas: [
      { parte: 'paneles', nombre: 'Composición', valor: 'OSB de 11 mm + núcleo de EPS o PUR + OSB de 11 mm' },
      { parte: 'paneles', nombre: 'Espesor del panel', valor: '≈ 115 – 300 mm' },
      { parte: 'paneles', nombre: 'Tamaño', valor: '1,22 m de ancho · 2,44 m a más de 6 m de largo' },
      { parte: 'juntas', nombre: 'Uniones entre paneles', valor: 'lengüeta de OSB o madera, sellada con espuma y atornillada' },
      { parte: 'solera', nombre: 'Solera', valor: 'madera tratada, anclada a la platea' },
      { parte: 'techo', nombre: 'Techo', valor: 'los mismos paneles, apoyados en vigas o cumbrera' },
      { parte: null, nombre: 'Cuidado', valor: 'proteger los cantos de OSB de la humedad durante la obra' },
    ],
  },
]

export const construcciones = [...delMundo, ...enSeco]

export const gruposConstruccion = [
  { id: 'todas', nombre: 'Todas' },
  { id: 'mundo', nombre: 'Tradiciones del mundo' },
  { id: 'seco', nombre: 'Construcción en seco' },
]

// Glosario. En los textos se enlaza con [[id]] o [[texto visible|id]].

const t = (id, termino, definicion, ver) => ({ id, termino, definicion, ver })

export const glosario = [
  t('abarquillado', 'Abarquillado', 'Curvatura de una tabla a lo ancho, que la deja con forma de teja. Es típica de las tablas de corte tangencial al secarse.', 'madera/movimiento'),
  t('alabeo', 'Alabeo', 'Torcedura de una tabla en la que sus cuatro esquinas dejan de estar en un mismo plano.', 'madera/defectos'),
  t('albura', 'Albura', 'Parte exterior y más joven del tronco, que conduce la savia. Suele ser más clara y menos durable que el duramen.', 'madera/crecimiento'),
  t('anillo', 'Anillo de crecimiento', 'Capa de madera que el árbol forma en un período de crecimiento, normalmente un año. En el corte transversal se ve como un círculo.', 'madera/crecimiento'),
  t('aserrado-radial', 'Aserrado radial', 'Corte en el que la cara de la tabla queda aproximadamente perpendicular a los anillos. Da tablas más estables. También se llama "al cuarto".', 'madera/aserrado'),
  t('aserrado-tangencial', 'Aserrado tangencial', 'Corte en el que la cara de la tabla queda tangente a los anillos. Es el más económico y muestra veta en forma de llama, pero se mueve más.', 'madera/aserrado'),
  t('canto', 'Canto', 'Cada una de las caras estrechas y largas de una tabla, paralelas a la veta.'),
  t('caja', 'Caja', 'Hueco tallado en una pieza para recibir la espiga de otra.', 'uniones/caja-espiga'),
  t('ch', 'Contenido de humedad', 'Peso del agua que contiene la madera expresado como porcentaje de su peso completamente seca. Se abrevia CH.', 'madera/secado'),
  t('cola-milano', 'Cola de milano', 'Unión con piezas en forma de trapecio que se traban mecánicamente y resisten la tracción.', 'uniones/colas-milano'),
  t('contrachapado', 'Contrachapado', 'Tablero formado por chapas finas encoladas con la veta cruzada a 90° entre capas consecutivas.', 'madera/tableros'),
  t('chapa', 'Chapa', 'Lámina fina de madera, de menos de 1 mm a unos pocos milímetros, obtenida por corte o desenrollo.', 'madera/chapas'),
  t('duramen', 'Duramen', 'Parte interior del tronco, ya sin función de conducción. Suele ser más oscura y más resistente a hongos e insectos que la albura.', 'madera/crecimiento'),
  t('espiga', 'Espiga', 'Lengüeta tallada en el extremo de una pieza para entrar ajustada en una caja.', 'uniones/caja-espiga'),
  t('fenda', 'Fenda', 'Grieta en la madera, en general en los extremos, provocada por un secado desigual.', 'madera/defectos'),
  t('frondosa', 'Frondosa', 'Árbol de hoja ancha (angiosperma). Su madera tiene vasos y suele llamarse "madera dura", aunque no siempre lo sea.', 'madera/frondosas-coniferas'),
  t('conifera', 'Conífera', 'Árbol, normalmente de hoja en aguja o escama (gimnosperma), como pinos y abetos. Su madera suele llamarse "blanda".', 'madera/frondosas-coniferas'),
  t('heq', 'Humedad de equilibrio', 'Contenido de humedad al que tiende la madera según la humedad relativa y la temperatura del aire que la rodea. Se abrevia HEq.', 'madera/movimiento'),
  t('inglete', 'Inglete', 'Corte en ángulo, normalmente de 45°, para unir dos piezas formando una esquina sin que se vea la testa.', 'uniones/ingletes'),
  t('janka', 'Dureza Janka', 'Fuerza necesaria para hundir una bola de acero de 11,28 mm hasta la mitad de su diámetro en la madera. Se expresa en newtons (N o kN) o en libras-fuerza.', 'madera/propiedades'),
  t('mdf', 'MDF', 'Tablero de fibras de densidad media, fabricado con fibras de madera prensadas con resina. Liso y estable, pero sensible al agua.', 'madera/tableros'),
  t('nudo', 'Nudo', 'Resto de una rama incluido en el tronco. Puede ser sano (firmemente unido) o saltadizo (suelto).', 'madera/defectos'),
  t('osb', 'OSB', 'Tablero de virutas orientadas: láminas de madera prensadas con resina y dispuestas en capas cruzadas.', 'madera/tableros'),
  t('pf', 'Punto de saturación de las fibras', 'Contenido de humedad, alrededor del 25 – 30 %, por debajo del cual la madera empieza a contraerse al perder agua.', 'madera/movimiento'),
  t('radio', 'Radio medular', 'Bandas de células que van del centro del tronco hacia la corteza. En el corte radial se ven como reflejos o "espejuelos".', 'madera/crecimiento'),
  t('testa', 'Testa', 'Extremo de una pieza, donde quedan a la vista las fibras cortadas. Absorbe y pierde humedad mucho más rápido que las caras.'),
  t('veta', 'Veta', 'Dirección y aspecto de las fibras de la madera. "A favor de la veta" significa en la dirección de las fibras.'),
]

export const glosarioPorId = Object.fromEntries(glosario.map((x) => [x.id, x]))

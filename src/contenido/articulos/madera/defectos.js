export default {
  actualizado: '2026-11-02',
  relacionados: ['madera/secado', 'madera/movimiento', 'madera/crecimiento', 'diseno/lista-corte'],
  bloques: [
    { tipo: 'p', texto: 'Ninguna tabla es perfecta. Algunos defectos solo cambian el aspecto y pueden incluso aprovecharse; otros debilitan la pieza o la hacen inestable y obligan a descartarla. Saber reconocerlos antes de comprar ahorra dinero y disgustos.' },

    { tipo: 'h2', texto: 'Deformaciones' },
    { tipo: 'p', texto: 'Casi siempre aparecen durante el secado, por la diferencia entre la contracción tangencial y la radial, por tensiones del árbol o por una pila mal armada:' },
    { tipo: 'figura', id: 'deformaciones-tabla', pie: 'Las cuatro deformaciones de una tabla, exageradas.' },
    {
      tipo: 'tabla',
      titulo: 'Las cuatro deformaciones',
      columnas: ['Deformación', 'Qué es', 'Cómo detectarla', 'Cómo se recupera'],
      filas: [
        ['[[Abarquillado|abarquillado]]', 'Curva a lo ancho, como una teja', 'Una regla puesta de canto sobre la cara deja luz en el centro o en los bordes', 'Aserrando la tabla en piezas más estrechas antes de cepillar'],
        ['[[Arqueado|arqueado]]', 'Curva a lo largo, en el plano de la cara', 'Apoyada sobre la cara, se balancea o deja luz en el centro', 'Cortando en piezas más cortas'],
        ['[[Combado|combado]]', 'Curva a lo largo, en el plano del canto', 'Mirando el canto desde un extremo, a ras, se ve el arco', 'Aserrando un canto recto con una regla o una guía; se pierde ancho'],
        ['[[Alabeo|alabeo]]', 'Torcedura: las cuatro esquinas no quedan en un plano', 'Apoyada sobre una mesa plana, cojea en diagonal', 'Muy difícil: hay que rebajar mucho espesor'],
      ],
    },
    { tipo: 'h3', texto: 'Por qué conviene cortar antes de cepillar' },
    { tipo: 'p', texto: 'La flecha de una curva crece con el cuadrado del largo. Una tabla de 2 m con 6 mm de arqueado, cortada en dos piezas de 1 m, deja en cada una solo 6 ÷ 4 = **1,5 mm**. Cepillar dos piezas cortas hace perder mucha menos madera que aplanar la tabla entera.' },
    { tipo: 'p', texto: 'Con el abarquillado pasa lo mismo a lo ancho: una tabla de 200 mm que se cortó en dos de 100 mm pierde mucho menos espesor al aplanarse.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Las tablas alabeadas son las peores: el alabeo no se reduce cortando a lo largo y se lleva mucho espesor. Si la pieza tiene que quedar larga y gruesa, descártala.' },

    { tipo: 'h2', texto: 'Defectos naturales' },
    {
      tipo: 'lista',
      items: [
        '**[[Nudos|nudo]] sanos o vivos:** la rama estaba viva cuando el tronco la envolvió, así que la madera del nudo está unida al resto. Son firmes y pueden ser decorativos, pero son más duros y desvían la veta a su alrededor.',
        '**Nudos muertos o saltadizos:** la rama estaba muerta y el tronco la rodeó sin unirse a ella. Suelen tener un anillo oscuro alrededor y pueden caerse, dejando un agujero.',
        '**Nudos en el canto o la arista:** son los que más debilitan una pieza que trabaja a flexión, como un estante o una viga. Evítalos en la zona central de la pieza.',
        '**[[Fibra revirada|fibra-revirada]] o inclinada:** las fibras corren en hélice o en diagonal respecto de la pieza. La resistencia baja mucho y la pieza tiende a torcerse. Se detecta siguiendo las grietas finas de la superficie o rasgando la cara con un punzón: la raya sigue la fibra.',
        '**Bolsas de resina:** cavidades llenas de resina en coníferas. Rezuman a través del acabado; hay que vaciarlas, limpiarlas con alcohol y sellarlas.',
        '**[[Acebolladura|acebolladura]]:** separación entre anillos, visible como una grieta curva en la testa. La pieza puede abrirse en capas.',
        '**Corazón partido:** grietas que salen de la médula hacia afuera. Las piezas con médula conviene evitarlas.',
        '**[[Madera de reacción|madera-reaccion]]:** se arquea mucho al secar y se reconoce por anillos muy excéntricos.',
      ],
    },

    { tipo: 'h2', texto: 'Defectos de aserrado y manipulación' },
    {
      tipo: 'lista',
      items: [
        '**[[Gema|gema]]:** falta de madera en una arista. Reduce el ancho útil.',
        '**Espesor desparejo:** la sierra se desvió y la pieza es más gruesa en un extremo. Obliga a cepillar más.',
        '**Marcas de sierra profundas:** ondas o escalones que hay que eliminar cepillando.',
        '**Golpes y aplastamientos:** en la madera blanda se pueden levantar con un trapo húmedo y una plancha caliente, porque el vapor hincha las fibras aplastadas. Si las fibras están cortadas, no.',
      ],
    },

    { tipo: 'h2', texto: 'Hongos e insectos' },
    {
      tipo: 'tabla',
      titulo: 'Daños biológicos',
      columnas: ['Daño', 'Cómo se reconoce', 'Gravedad'],
      filas: [
        ['Pudrición', 'Madera blanda, que se hunde con un punzón; color pardo con grietas en cubos, o blanquecina y fibrosa; olor a humedad', 'Grave: la resistencia desaparece. Descartar'],
        ['[[Azulado|azulado]]', 'Manchas grises o azuladas en la albura', 'Estética: casi no afecta a la resistencia, pero indica que la madera estuvo húmeda'],
        ['Carcoma', 'Agujeros redondos de 1 a 2 mm y serrín fino que cae', 'Grave si está activa: el serrín fresco y claro lo indica'],
        ['Polilla de la albura', 'Agujeros muy pequeños y polvo como harina en la albura de frondosas', 'Grave en la albura; el duramen suele quedar sano'],
        ['Termitas', 'Galerías internas siguiendo la veta; la superficie puede parecer sana', 'Muy grave; requiere tratamiento profesional del edificio'],
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'No metas en el taller madera con insectos activos: pueden pasar a otras piezas y a la estructura de la casa. Si debes recuperarla, trátala o déjala aislada.' },

    { tipo: 'h2', texto: 'Cómo elegir una tabla' },
    {
      tipo: 'pasos',
      items: [
        '**Mira la testa:** el ángulo de los anillos dice si es tangencial o radial. Busca la médula, fendas y acebolladuras.',
        '**Mira a lo largo de cada canto,** con un ojo cerrado y desde un extremo: así se ven el combado y el arqueado.',
        '**Apóyala en el suelo o en una mesa plana:** si cojea en diagonal está alabeada.',
        '**Pon una regla de canto** sobre la cara, a lo ancho, para ver el abarquillado.',
        '**Revisa los nudos:** que estén firmes y lejos de los cantos y de donde irán las uniones.',
        '**Sigue la veta:** que corra paralela a los cantos y no salga en diagonal por la cara.',
        '**Sopésala:** una tabla mucho más pesada que otras de igual medida está más húmeda. Si puedes, mide su humedad.',
        '**Busca agujeros y serrín** de insectos y zonas blandas o manchadas.',
        '**Calcula de más:** compra entre un 15 y un 30 % más de lo que indica la lista de corte.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Lleva tu lista de corte al aserradero. Con ella puedes aprovechar una tabla con un nudo grande para dos piezas cortas, o una con gema para piezas estrechas, y pagar menos que por madera «perfecta».' },

    { tipo: 'h2', texto: 'Clasificación comercial' },
    { tipo: 'p', texto: 'Las maderas se venden clasificadas por calidad según reglas que cambian con el país y el uso. Hay dos tipos principales:' },
    {
      tipo: 'lista',
      items: [
        '**Por aspecto:** para carpintería y muebles. Se mide qué proporción de la tabla queda libre de defectos visibles. Ejemplos: la norma europea EN 975 para frondosas o las reglas norteamericanas de la NHLA, con grados como FAS o Select.',
        '**Estructural:** para construcción. Se clasifica por los defectos que reducen la resistencia, a ojo o con máquina, y se asigna una clase resistente, como C24. Ver [Propiedades mecánicas](#/madera/propiedades).',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Cada país tiene sus propias normas de clasificación estructural (por ejemplo UNE 56544 en España o la serie IRAM 9662 en Argentina). Consulta la norma vigente antes de usar madera en una estructura.' },
  ],
}

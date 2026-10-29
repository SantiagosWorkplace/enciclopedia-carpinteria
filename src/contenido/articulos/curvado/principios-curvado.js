export default {
  actualizado: '2026-10-29',
  relacionados: ['curvado/vapor', 'curvado/laminado', 'madera/propiedades', 'madera/defectos'],
  bloques: [
    { tipo: 'p', texto: 'Una pieza curva se puede recortar de una tabla ancha o se puede curvar. Recortarla es sencillo, pero corta las fibras: en los tramos donde la veta cruza la pieza de lado a lado queda [[veta corta|veta-corta]], que se quiebra con un golpe. Una pieza curvada mantiene las fibras enteras siguiendo la curva, y por eso es más fuerte, más liviana y gasta menos madera.' },

    { tipo: 'h2', texto: 'Qué pasa dentro de la madera' },
    { tipo: 'figura', id: 'curvado-fibras', pie: 'A la izquierda, en rojo, los tramos de veta corta. En el centro, las grietas de la cara exterior. A la derecha, el fleje metálico y sus topes.' },
    {
      tipo: 'lista',
      items: [
        '**Al curvar una pieza,** la cara exterior se estira y la interior se comprime. En el medio hay una línea, la [[fibra neutra|fibra-neutra]], que no cambia de largo.',
        '**La madera se estira muy poco** antes de romperse, alrededor del 1 – 2 %, aunque esté caliente y húmeda. En cambio, caliente y húmeda se puede comprimir mucho más.',
        '**El [[fleje]]** es una lámina de acero apoyada en la cara exterior, con topes en los dos extremos. Impide que esa cara se estire: la fibra neutra se desplaza hacia el fleje y casi toda la pieza trabaja a compresión, que es lo que la madera tolera.',
        '**Las fibras comprimidas** se pliegan en ondas microscópicas. Por eso la cara interior de una pieza curvada al vapor queda a veces con pequeñas arrugas.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los porcentajes de estiramiento y compresión que admite la madera varían con la especie, la humedad y la temperatura. Los valores de este artículo son órdenes de magnitud, no datos de cálculo.' },

    { tipo: 'h2', texto: 'Tres maneras de curvar' },
    {
      tipo: 'tabla',
      titulo: 'Métodos de curvado',
      columnas: ['Método', 'Cómo funciona', 'Mejor para'],
      filas: [
        ['[Por cortes](#/curvado/cortes-kerf)', 'Cortes de sierra en la cara interior que se cierran al curvar', 'Tableros y molduras que se fijan a una estructura'],
        ['[Al vapor](#/curvado/vapor)', 'El calor y la humedad ablandan la lignina y la pieza maciza se dobla', 'Respaldos y patas de sillas, aros, costillas de botes'],
        ['[Por laminado](#/curvado/laminado)', 'Láminas finas encoladas sobre un molde', 'Curvas cerradas, piezas repetidas, cualquier especie'],
      ],
    },

    { tipo: 'h2', texto: 'Especies que se curvan bien' },
    {
      tipo: 'tabla',
      titulo: 'Aptitud para el curvado al vapor',
      columnas: ['Aptitud', 'Especies'],
      filas: [
        ['Muy buena', 'Fresno, roble blanco, haya, olmo, nogal, hickory'],
        ['Buena', 'Cerezo, abedul, arce, roble rojo'],
        ['Pobre', 'La mayoría de las coníferas, caoba, teca y muchas maderas tropicales'],
      ],
      nota: 'Por laminado se puede curvar casi cualquier especie, porque cada lámina se dobla poco.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Dentro de una misma especie hay grandes diferencias entre árboles. Haz siempre una prueba con un recorte de la misma tabla antes de preparar todas las piezas.' },

    { tipo: 'h2', texto: 'Elegir la pieza' },
    {
      tipo: 'lista',
      items: [
        '**Veta recta** de punta a punta, sin [[fibra revirada|fibra-revirada]]. Donde la veta sale a la cara, la pieza se astilla al curvar.',
        '**Sin nudos, grietas ni [[acebolladuras|acebolladura]].** Cualquier defecto es el punto donde empieza la rotura.',
        '**Madera rajada** a lo largo de la veta en lugar de aserrada: sigue la dirección natural de las fibras.',
        '**Humedad:** para vapor, mejor madera secada al aire, con un 15 – 20 % de humedad, que madera secada en horno. La madera verde se curva todavía mejor, pero encoge después.',
        '**Algo más larga** de lo necesario: los extremos se marcan con los topes y se cortan al final.',
      ],
    },
  ],
}

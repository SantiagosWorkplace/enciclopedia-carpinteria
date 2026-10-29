export default {
  actualizado: '2026-10-29',
  relacionados: ['acabados/barnices', 'acabados/ceras', 'acabados/tintes', 'acabados/seguridad-acabados'],
  bloques: [
    { tipo: 'p', texto: 'La [[goma laca|goma-laca]] es una resina natural que segrega un pequeño insecto sobre las ramas de algunos árboles de la India y del sudeste asiático. Disuelta en alcohol, forma una película fina y transparente que seca en minutos. Es el acabado clásico de los muebles finos, un sellador que se agarra a casi todo y el mejor producto para retoques.' },

    { tipo: 'h2', texto: 'Tipos' },
    {
      tipo: 'tabla',
      titulo: 'Clases de goma laca',
      columnas: ['Tipo', 'Color', 'Uso'],
      filas: [
        ['Naranja o natural', 'Ámbar cálido', 'Calienta el tono de maderas oscuras; muebles de época'],
        ['Rubia', 'Ámbar claro', 'Uso general'],
        ['Decolorada o blanca', 'Casi incolora', 'Maderas claras; dura menos en escamas'],
        ['[[Descerada|descerada]]', 'Cualquiera de las anteriores, sin la cera natural', 'Sellador bajo barnices y pinturas: se agarra mejor y deja agarrar'],
      ],
    },
    { tipo: 'p', texto: 'Se vende en escamas, que se disuelven en el taller, o ya disuelta en lata. Las escamas duran años en un frasco cerrado y fresco. La goma laca disuelta pierde calidad con el tiempo: si no seca dura en pocas horas, hay que tirarla.' },

    { tipo: 'h2', texto: 'Preparación' },
    {
      tipo: 'pasos',
      items: [
        'Pesa las escamas y ponlas en un frasco de vidrio con tapa.',
        'Agrega alcohol de alta graduación, de 96° o más. El alcohol con agua deja el acabado lechoso.',
        'Agita de vez en cuando durante un día, hasta que no queden escamas sin disolver.',
        'Cuela con un trapo fino o un filtro de pintura y anota en la etiqueta la fecha y la concentración.',
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Concentraciones de trabajo',
      columnas: ['Uso', 'Escamas por litro de alcohol'],
      filas: [
        ['Sellador y muñeca', '≈ 100 – 120 g'],
        ['Acabado a pincel', '≈ 200 – 250 g'],
      ],
      nota: 'Una goma laca más diluida se nivela mejor y deja menos marcas, pero hacen falta más manos.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las concentraciones son orientativas y cambian según el método de cada taller. En recetas en inglés se expresan en «libras por galón»: una libra por galón equivale a unos 120 g por litro.' },

    { tipo: 'h2', texto: 'A pincel' },
    { tipo: 'p', texto: 'Con un pincel suave y ancho, aplica manos finas a favor de la veta, en una sola pasada y sin volver atrás: la goma laca empieza a secar enseguida y el pincel la arrastra. Entre manos espera una hora y lija apenas con grano ≈ 320 – 400. Tres o cuatro manos dan una película fina y bonita.' },

    { tipo: 'h2', texto: 'A muñeca' },
    { tipo: 'figura', id: 'muneca', pie: 'La muñeca en sección: un alma de lana o algodón envuelta en una tela lisa que no suelte pelusa. A la derecha, los recorridos sobre la pieza.' },
    { tipo: 'p', texto: 'El acabado a [[muñeca|muneca]] es la técnica tradicional de los muebles de lujo: decenas de manos finísimas, aplicadas con un tampón de tela, que forman una película muy fina y de brillo profundo. Lleva tiempo y práctica, pero no necesita más que la muñeca, goma laca y alcohol.' },
    {
      tipo: 'pasos',
      items: [
        '**Cargar:** abre la funda y moja el alma con goma laca diluida. Cierra la funda y aprieta la muñeca contra la palma: debe quedar húmeda, no mojada.',
        '**Lubricar:** si la muñeca empieza a pegarse, pon una gota de aceite de vaselina en la suela.',
        '**Trabajar:** entra a la pieza en movimiento, con círculos y ochos que cubran toda la superficie, y sal en movimiento. Si la muñeca se detiene sobre la goma laca, deja una marca.',
        '**Construir:** repite en sesiones cortas, dejando secar entre una y otra. A medida que la película crece, la presión aumenta y la carga disminuye.',
        '**Terminar:** con la muñeca apenas mojada con alcohol, en pasadas rectas a lo largo de la veta. Así se quitan las marcas de los círculos y el aceite.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Guarda la muñeca en un frasco de vidrio cerrado: así no se seca y está lista para la siguiente sesión.' },

    { tipo: 'h2', texto: 'Ventajas y límites' },
    {
      tipo: 'lista',
      items: [
        '**Sellador universal:** la goma laca descerada se agarra a casi cualquier superficie y casi cualquier acabado se agarra a ella. Bloquea la resina de los nudos, los olores y los restos de silicona.',
        '**Reparable:** cada mano nueva disuelve un poco la anterior y se funde con ella.',
        '**Punto débil:** el alcohol la disuelve y el calor la marca: un vaso caliente o una bebida alcohólica derramada dejan aros blancos. No es buena para mesas de uso diario sin otra protección.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'El alcohol es muy inflamable y sus vapores se acumulan en lugares cerrados. Trabaja con ventilación, sin llamas cerca, y guarda los frascos bien cerrados.' },
  ],
}

export default {
  actualizado: '2026-10-30',
  relacionados: ['madera/movimiento', 'herrajes/tornillos', 'acabados/lacas-pintura', 'taller/incendios'],
  bloques: [
    { tipo: 'p', texto: 'El metal da a un mueble patas finas, bastidores que casi no se ven y refuerzos que la madera sola no lograría. Para combinarlos bien hay que elegir el perfil y el metal adecuados, saber cortarlos y taladrarlos, y unirlos de forma que la madera pueda seguir moviéndose.' },

    { tipo: 'h2', texto: 'Perfiles' },
    { tipo: 'figura', id: 'perfiles-metal', pie: 'Secciones de los perfiles más comunes, con las paredes exageradas. Los tubos son huecos; la pletina, la varilla y los perfiles abiertos son macizos.' },
    { tipo: 'p', texto: 'Los perfiles se venden en barras, en general de 6 m, que el comercio corta a pedido. Se nombran por sus medidas exteriores y el espesor de pared: un tubo de 30 × 30 × 1,5 mm mide 30 mm de lado y tiene paredes de 1,5 mm. La [[pletina]] se nombra por su ancho y su espesor, por ejemplo 40 × 4 mm.' },
    {
      tipo: 'tabla',
      titulo: 'Metales para muebles',
      columnas: ['Metal', 'Cómo es', 'Uso con madera'],
      filas: [
        ['Acero común', 'Resistente, barato y fácil de soldar; se oxida si no se protege', 'Patas, bastidores, estructuras de mesas y estanterías'],
        ['Acero inoxidable', 'No se oxida; más caro y más difícil de cortar y taladrar', 'Exterior, cocinas, baños, tornillería'],
        ['Aluminio', 'Pesa alrededor de un tercio que el acero; no se oxida en profundidad', 'Perfiles, guías, plantillas, cantos'],
        ['Latón y bronce', 'Color dorado; se trabajan bien y se oscurecen con el tiempo', 'Tiradores, bisagras finas, incrustaciones'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las medidas, espesores y largos de barra cambian entre comercios y países. Pide la tabla de perfiles del proveedor, que suele indicar también el peso por metro.' },

    { tipo: 'h2', texto: 'Cortar y taladrar' },
    {
      tipo: 'lista',
      items: [
        '**Sierra de arco:** con hoja para metal de dientes finos. Al menos tres dientes deben apoyar en el espesor de la pared; si no, la hoja se engancha y se rompen dientes.',
        '**Amoladora con disco de corte:** rápida en acero; deja rebabas y produce muchas chispas.',
        '**Sierra de cinta o tronzadora para metal:** cortes rectos y a escuadra en tubos y perfiles.',
        '**Aluminio:** se corta con la ingletadora o la sierra de mesa solo con un disco específico para aluminio y la pieza bien sujeta. Ver [Ingletadora](#/maquinas/ingletadora).',
        '**Taladrar:** marca el centro con un [[granete]] para que la broca no resbale. Usa brocas de [[acero rápido|hss]], velocidad baja, presión firme y unas gotas de aceite de corte en el acero. Sujeta siempre la pieza con una prensa.',
        '**Rebabas:** quítalas con una lima o una broca más grande girada a mano. Cortan como un cuchillo.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Las chispas de la amoladora pueden encender el aserrín y el polvo del aspirador. Corta metal lejos de la zona de madera, con el suelo barrido, y nunca aspires limaduras calientes con el sistema de extracción de polvo. Usa gafas, guantes y protección auditiva. Ver [Prevención de incendios](#/taller/incendios).' },

    { tipo: 'h2', texto: 'Unir metal y madera' },
    { tipo: 'figura', id: 'fijar-metal', pie: 'A la izquierda y en el centro, secciones: el perno rosca en una pieza metálica fijada a la madera. A la derecha, vista desde abajo: la pletina lleva agujeros ovalados en el sentido en que se mueve la madera.' },
    {
      tipo: 'tabla',
      titulo: 'Fijaciones',
      columnas: ['Fijación', 'Cómo funciona', 'Cuándo usarla'],
      filas: [
        ['Tornillo para madera', 'Atraviesa un agujero del metal y rosca en la madera', 'Fijaciones permanentes, como una tapa sobre un bastidor'],
        ['[[Inserto roscado|inserto-roscado]]', 'Casquillo con rosca exterior para madera y rosca métrica interior', 'Uniones que se arman y desarman muchas veces'],
        ['[[Tuerca de garras|tuerca-garras]]', 'Tuerca con garras que se clavan desde la cara oculta', 'Tableros y piezas con acceso por detrás'],
        ['Perno pasante', 'Atraviesa toda la madera y cierra con tuerca y arandela', 'Uniones muy cargadas, como patas de bancos'],
        ['Adhesivo epoxi', 'Pega metal y madera rellenando huecos', 'Incrustaciones y piezas pequeñas, no uniones estructurales grandes'],
      ],
    },
    { tipo: 'p', texto: 'La madera se hincha y se contrae a lo ancho con la humedad; el metal casi no cambia. Si un bastidor metálico sujeta una tapa ancha con tornillos en agujeros redondos, la tapa se raja o se arquea. Haz los agujeros del metal ovalados en el sentido del ancho de la tapa y pon el tornillo en el centro, con arandela. Ver [El movimiento de la madera](#/madera/movimiento).' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Pide al herrero los agujeros y los ovalados ya hechos, y una pletina soldada en cada punto donde vayas a atornillar la madera. Taladrar un bastidor ya pintado es mucho más difícil.' },

    { tipo: 'h2', texto: 'Proteger el metal' },
    {
      tipo: 'tabla',
      titulo: 'Acabados del metal',
      columnas: ['Acabado', 'Cómo es', 'Dónde va bien'],
      filas: [
        ['Pintura', 'Una mano de [[imprimación|imprimacion]] antióxido y dos de esmalte', 'Interior y exterior; se repinta fácil'],
        ['Pintura en polvo', 'Polvo que se funde en un horno; la hace un taller especializado', 'Bastidores y patas: muy resistente y pareja'],
        ['[[Galvanizado|galvanizado]]', 'Capa de zinc que protege el acero', 'Exterior, aunque quede a la vista el gris del zinc'],
        ['Barniz o cera', 'Película transparente sobre el acero limpio', 'Interior seco, para dejar el metal a la vista'],
        ['[[Pavonado|pavonado]]', 'Capa oscura y fina formada sobre el acero', 'Herrajes y piezas pequeñas de interior'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'El hierro y la humedad dejan manchas negras en las maderas ricas en taninos, como el roble o el castaño. Usa tornillería inoxidable o protegida, y no uses lana de acero con productos al agua sobre esas maderas: las partículas que quedan manchan.' },
    { tipo: 'p', texto: 'Dos metales distintos en contacto y con humedad se corroen entre sí: es la [[corrosión galvánica|corrosion-galvanica]]. Al exterior, usa tornillos del mismo metal que la pieza o separa los metales con arandelas de nailon.' },

    { tipo: 'h2', texto: 'Soldar' },
    { tipo: 'p', texto: 'La soldadura es un oficio aparte y necesita equipo y protección propios. Para un mueble, lo habitual es dibujar el bastidor con todas las medidas y encargarlo a un herrero, indicando el perfil, dónde van las pletinas y los agujeros, y el acabado.' },
  ],
}

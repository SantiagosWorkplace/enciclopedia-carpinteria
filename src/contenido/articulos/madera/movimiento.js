export default {
  actualizado: '2026-11-02',
  relacionados: ['madera/secado', 'madera/aserrado', 'diseno/mesas', 'uniones/elegir-union'],
  bloques: [
    { tipo: 'p', texto: 'La madera nunca deja de moverse. Aunque esté seca, cortada y barnizada, gana y pierde agua según el aire que la rodea, y con ella cambia de tamaño. Casi todas las grietas, tableros abarquillados y uniones rotas de un mueble se deben a no haber tenido en cuenta este movimiento.' },
    { tipo: 'p', texto: 'La buena noticia es que se mueve de forma previsible: sabiendo cómo y cuánto, se puede diseñar para que el movimiento no cause daño.' },

    { tipo: 'h2', texto: 'Por qué se mueve' },
    { tipo: 'p', texto: 'La madera es **higroscópica**: absorbe y cede humedad del ambiente. El agua está en dos lugares. El *agua libre* llena las cavidades de las células y se va primero al secar, sin que la pieza cambie de tamaño. El *agua ligada* está dentro de las paredes celulares, y cuando sale, las paredes se encogen.' },
    { tipo: 'p', texto: 'El límite entre las dos es el [[punto de saturación de las fibras|pf]], alrededor del 25 – 30 % de [[contenido de humedad|ch]]. Por encima, la madera pierde agua sin contraerse. Por debajo, cada punto de humedad que pierde la hace más pequeña, y cada punto que gana la hincha.' },
    { tipo: 'p', texto: 'Con el tiempo, cada pieza tiende a la [[humedad de equilibrio|heq]] del lugar donde está, que depende sobre todo de la humedad relativa del aire:' },
    {
      tipo: 'tabla',
      titulo: 'Humedad de equilibrio aproximada de la madera a unos 20 °C',
      columnas: ['Humedad relativa del aire', 'Humedad de equilibrio de la madera'],
      filas: [
        ['30 %', '≈ 6 %'],
        ['40 %', '≈ 8 %'],
        ['50 %', '≈ 9 %'],
        ['60 %', '≈ 11 %'],
        ['70 %', '≈ 13 %'],
        ['80 %', '≈ 16 %'],
        ['90 %', '≈ 20 %'],
      ],
      nota: 'Valores medios, casi iguales para todas las especies. La temperatura influye poco en el rango habitual de una vivienda.',
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Dentro de una casa, la madera suele oscilar entre ≈ 6 y 12 % a lo largo del año: más seca en invierno con calefacción, más húmeda en verano. Un mueble que vive al exterior, bajo techo, puede pasar del 12 al 18 % o más.' },

    { tipo: 'h2', texto: 'Tres direcciones, tres comportamientos' },
    { tipo: 'p', texto: 'La madera no se mueve igual en todas las direcciones. A lo largo de la [[veta]] (longitudinal) casi no cambia. A lo ancho cambia mucho, y además distinto según la orientación de los [[anillos de crecimiento|anillo]]:' },
    { tipo: 'figura', id: 'direcciones-contraccion', pie: 'Contracción total típica al secar la madera desde verde hasta completamente seca. La tangencial suele ser cerca del doble que la radial.' },
    {
      tipo: 'lista',
      items: [
        '**Tangencial** (paralela a los anillos): es la mayor, del orden del 5 al 10 % al secar desde verde.',
        '**Radial** (de la médula hacia la corteza): aproximadamente la mitad que la tangencial.',
        '**Longitudinal** (a lo largo de la veta): muy pequeña, del 0,1 al 0,3 %. En la práctica se ignora, salvo en madera de reacción o con veta muy desviada.',
      ],
    },
    { tipo: 'p', texto: 'Esta diferencia explica el problema de las uniones *a contraveta*: si se encola rígidamente una pieza con la veta a lo largo sobre otra con la veta a lo ancho, una no se mueve y la otra sí, y algo termina cediendo.' },

    { tipo: 'h2', texto: 'Cómo se deforma cada corte' },
    { tipo: 'p', texto: 'Como la contracción tangencial es mayor que la radial, al secarse los anillos «intentan enderezarse». El resultado depende de dónde salió la pieza del tronco:' },
    { tipo: 'figura', id: 'deformaciones-tronco', pie: 'Línea de puntos: pieza recién cortada. Relleno: la misma pieza seca. Las deformaciones están exageradas.' },
    {
      tipo: 'lista',
      items: [
        '**a. Tabla tangencial:** se [[abarquilla|abarquillado]]. La cara que miraba hacia la corteza queda cóncava.',
        '**b. Tabla radial:** se mantiene plana; pierde algo de espesor, pero es la más estable.',
        '**c. Cuadrado con los anillos en diagonal:** se convierte en un rombo.',
        '**d. Pieza redonda:** se vuelve ligeramente ovalada.',
        '**e. Cuadrado con los anillos paralelos a una cara:** se convierte en un rectángulo.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Las patas con los anillos en diagonal (a 45°) muestran una veta parecida en las cuatro caras, pero si la madera no está bien seca pierden la escuadra al terminar de secarse (caso c). Escuadra las piezas a su medida final solo cuando la madera ya esté aclimatada.' },

    { tipo: 'h2', texto: 'Cuánto se mueve una tabla' },
    { tipo: 'p', texto: 'Dentro del rango de uso habitual (entre ≈ 6 y 14 % de humedad), el cambio de ancho se calcula multiplicando tres números:' },
    { tipo: 'datos', items: [['Movimiento (mm)', '= ancho (mm) × coeficiente de la especie × diferencia de humedad (%)']] },
    { tipo: 'p', texto: 'Por ejemplo, una tabla tangencial de roble blanco de 300 mm de ancho, construida al 8 % y usada en un ambiente que la lleva al 12 %, se mueve 300 × 0,00365 × 4 ≈ **4,4 mm**. En un tablero de mesa de 900 mm, el movimiento llega a más de 1 cm.' },
    { tipo: 'interactivo', id: 'calculadora-movimiento' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los coeficientes son valores medios publicados para especies norteamericanas (Wood Handbook, USDA). Para otras especies o procedencias, y para cálculos críticos, consulta la ficha técnica del proveedor.' },

    { tipo: 'h2', texto: 'Diseñar para el movimiento' },
    { tipo: 'p', texto: 'El objetivo no es impedir que la madera se mueva, algo imposible, sino dejarla moverse sin que nada se rompa:' },
    {
      tipo: 'lista',
      items: [
        '**Paneles flotantes:** en puertas de bastidor, el panel va suelto dentro de una ranura, sin cola, con holgura a lo ancho.',
        '**Tapas de mesa fijadas con piezas móviles:** botones de madera, herrajes en forma de ocho o tornillos en agujeros alargados, nunca cola a lo largo del faldón.',
        '**Encolar solo donde las vetas coinciden:** una moldura a contraveta sobre un lateral ancho se encola en el frente y se fija con clavos o tornillos en ranuras hacia atrás.',
        '**Sellar las [[testas|testa]]:** la testa pierde y gana agua mucho más rápido que las caras; sellarla reduce las [[fendas|fenda]].',
        '**Acabar ambas caras por igual:** un acabado solo en una cara hace que las dos intercambien humedad a distinto ritmo y la pieza se curve.',
        '**Usar tableros manufacturados en superficies grandes:** el [[contrachapado]] y el [[MDF|mdf]] apenas se mueven a lo ancho.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Si armas un mueble en época seca, deja la holgura para que el panel crezca. Si lo armas en época húmeda, el panel ya está hinchado: dale menos holgura en la ranura, pero asegúrate de que no quede pegado.' },

    { tipo: 'h2', texto: 'Antes de empezar a trabajar' },
    {
      tipo: 'pasos',
      items: [
        'Compra la madera con anticipación y llévala al lugar donde vas a trabajar.',
        'Apílala con separadores (listones) entre tablas para que el aire circule por todas las caras.',
        'Déjala aclimatar una o dos semanas, más si llega muy húmeda.',
        'Mide el [[contenido de humedad|ch]] con un medidor: para muebles de interior conviene que esté cerca del 8 – 12 %.',
        'Corta las piezas un poco más grandes, déjalas reposar unos días y luego llévalas a la medida final.',
      ],
    },
  ],
}

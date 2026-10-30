export default {
  actualizado: '2026-10-27',
  relacionados: ['madera/movimiento', 'madera/defectos', 'madera/aserrado', 'taller/almacenaje'],
  bloques: [
    { tipo: 'p', texto: 'Un árbol recién cortado está lleno de agua: en la albura de muchas coníferas, el agua pesa más que la propia madera. Antes de trabajarla hay que bajar esa humedad hasta el nivel del lugar donde va a vivir el mueble. Si no, la pieza se seguirá secando ya armada, y se encogerá, se torcerá o se rajará.' },

    { tipo: 'h2', texto: 'El contenido de humedad' },
    { tipo: 'p', texto: 'El [[contenido de humedad|ch]] (CH) es el peso del agua que tiene la madera dividido por el peso de esa misma madera completamente seca, el [[peso anhidro|anhidro]]:' },
    { tipo: 'datos', items: [['CH (%)', '= (peso actual − peso anhidro) ÷ peso anhidro × 100']] },
    { tipo: 'p', texto: 'Como se divide por el peso seco y no por el peso total, el CH puede superar el 100 %. Una muestra de 126 g que pesa 100 g después de secarse del todo tiene un 26 % de humedad.' },
    {
      tipo: 'tabla',
      titulo: 'Humedades de referencia',
      columnas: ['Estado', 'Contenido de humedad'],
      filas: [
        ['Madera recién cortada', '≈ 40 a más del 150 %, según especie y zona del tronco'],
        ['[[Punto de saturación de las fibras|pf]]', '≈ 25 – 30 %: por debajo, la madera empieza a contraerse'],
        ['Secada al aire, a la intemperie bajo techo', '≈ 12 – 18 %, según el clima'],
        ['Estructura de construcción', 'Por debajo del ≈ 20 %; idealmente cerca de la humedad de servicio'],
        ['Carpintería exterior (ventanas, puertas)', '≈ 12 – 16 %'],
        ['Muebles de interior sin calefacción', '≈ 10 – 14 %'],
        ['Muebles de interior con calefacción o aire acondicionado', '≈ 7 – 10 %'],
      ],
      nota: 'La meta es siempre la [[humedad de equilibrio|heq]] del lugar de destino. La tabla que la relaciona con la humedad del aire está en [El movimiento de la madera](#/madera/movimiento).',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los valores de destino son orientativos y dependen mucho del clima local. En zonas muy secas o muy húmedas conviene medir la humedad del aire de la vivienda y calcular la de equilibrio.' },

    { tipo: 'h2', texto: 'Cómo medir la humedad' },
    { tipo: 'h3', texto: 'Por pesada: el método de referencia' },
    {
      tipo: 'pasos',
      items: [
        'Corta una rebanada de unos 25 mm a lo largo de la veta, al menos a 30 cm del extremo de la tabla: la testa se seca antes y daría un valor bajo.',
        'Quítale las astillas sueltas y pésala enseguida con una balanza de 0,1 g.',
        'Sécala en un horno a 103 ± 2 °C. Pésala cada pocas horas hasta que deje de perder peso: ese es el peso anhidro.',
        'Calcula el CH con la fórmula de arriba.',
      ],
    },
    { tipo: 'interactivo', id: 'calculadora-humedad' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para seguir el secado de una pila sin cortar cada vez, elige una tabla testigo. Calcula su peso anhidro estimado a partir del CH de una rebanada cortada de ella y pésala cada semana: la calculadora indica cuánto deberá pesar cuando llegue a la humedad que buscas.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'No uses el horno de la cocina con madera tratada, con resinas o con pinturas. Ventila bien y no dejes el horno funcionando sin vigilancia.' },
    { tipo: 'h3', texto: 'Con un medidor electrónico' },
    {
      tipo: 'lista',
      items: [
        '**De púas (resistivos):** clavan dos puntas en la madera y miden la resistencia eléctrica, que baja cuanto más húmeda está. Hay que corregir la lectura según la especie y la temperatura. Son fiables entre ≈ 6 y 25 %.',
        '**Sin púas (capacitivos):** se apoyan sobre la cara y miden unos milímetros de profundidad sin marcar la pieza. Hay que indicarles la densidad de la especie, y leen mal sobre superficies irregulares.',
      ],
    },
    { tipo: 'p', texto: 'Mide en varios puntos y en el centro de la tabla, nunca en la testa. Por encima del punto de saturación de las fibras, ningún medidor portátil es preciso.' },

    { tipo: 'h2', texto: 'Secado al aire' },
    {
      tipo: 'foto', src: 'fotos/madera/pilas-secado-1907.jpg', ancho: 1000, alto: 786,
      alt: 'Fotografía antigua de pilas altas de tablas con separadores en un aserradero',
      pie: 'Pilas de tablas con separadores, secándose al aire en un aserradero de Idaho (Estados Unidos), en 1907.',
      credito: { autor: 'Steve Shook from Moscow, Idaho, USA', licencia: 'CC BY 2.0', licenciaUrl: 'https://creativecommons.org/licenses/by/2.0', fuente: 'https://commons.wikimedia.org/wiki/File:Stickering_Lumber,_Potlatch_Lumber_Company,_1907_-_Potlatch,_Idaho_(18598423695).jpg' },
    },
    { tipo: 'p', texto: 'Es el método tradicional y el que puede usar cualquier taller. Es lento y solo llega a la humedad de equilibrio del aire exterior, pero bien hecho da madera de muy buena calidad.' },
    { tipo: 'figura', id: 'pila-secado', pie: 'Pila de secado vista de costado. Los separadores alineados transmiten el peso en vertical hasta los apoyos.' },
    {
      tipo: 'pasos',
      items: [
        'Sella las [[testas|testa]] apenas cortes las tablas, con parafina, cera, cola blanca o pintura. Por la testa el agua sale diez veces más rápido que por las caras, o más, y se abren [[fendas|fenda]].',
        'Prepara una base firme y nivelada, al menos a 30 cm del suelo, para que circule el aire y no suba la humedad.',
        'Coloca [[separadores|separador]] secos, todos del mismo espesor (≈ 20 – 25 mm), cada 40 a 60 cm. Para tablas finas, más juntos.',
        'Alinea los separadores en vertical, exactamente sobre los apoyos. Si quedan corridos, el peso de arriba dobla las tablas y quedan [[arqueadas|arqueado]].',
        'Deja unos centímetros entre tablas de la misma capa para que el aire suba.',
        'Cubre la pila con un techo que sobresalga, para protegerla del sol y la lluvia, y pon peso encima para que las capas superiores no se tuerzan.',
        'Ubícala en un lugar ventilado y a la sombra, con los costados abiertos.',
      ],
    },
    { tipo: 'p', texto: 'La regla tradicional dice que hace falta **un año por cada 25 mm de espesor**. Es solo una orientación: una conífera en clima seco y ventoso puede estar lista en pocos meses, y un roble grueso en clima húmedo puede tardar bastante más.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Si los separadores son de una madera rica en taninos o están húmedos, dejan manchas en las tablas. Usa separadores secos de una especie clara o de la misma madera que estás secando.' },
    { tipo: 'p', texto: 'Para llegar a la humedad de un mueble de interior, termina el secado dentro de un local cerrado o del propio taller durante algunas semanas, con la pila armada de la misma forma.' },

    { tipo: 'h2', texto: 'Secado en horno' },
    { tipo: 'p', texto: 'En la industria, la madera se seca en cámaras donde se controlan la temperatura, la humedad y la circulación del aire. Se sigue un programa que empieza suave, con aire húmedo, y se vuelve más seco y caliente a medida que baja la humedad de la madera. Así se llega a cualquier humedad final en días o semanas en lugar de meses o años.' },
    {
      tipo: 'lista',
      items: [
        '**Convencional:** aire caliente, en general entre ≈ 40 y 90 °C.',
        '**Por deshumidificación:** temperaturas más bajas; el agua se condensa en una bomba de calor. Usado en talleres medianos.',
        '**Al vacío:** el agua hierve a menos temperatura y el secado es muy rápido; para piezas gruesas o valiosas.',
        '**Solar:** una pequeña cámara con techo transparente. Barato y suave, útil para un taller.',
      ],
    },
    { tipo: 'p', texto: 'El calor del horno mata hongos e insectos. Los palés y embalajes de madera que viajan entre países deben recibir un tratamiento térmico según la norma internacional NIMF 15 y se marcan con las letras **HT**.' },

    { tipo: 'h2', texto: 'Defectos de secado' },
    {
      tipo: 'lista',
      items: [
        '**Fendas de testa:** grietas en los extremos por secado demasiado rápido. Se evitan sellando las testas.',
        '**Grietas superficiales:** se abren en las caras, a menudo siguiendo los radios, cuando el aire está demasiado seco al principio.',
        '**Grietas internas:** grietas ocultas en el centro de la pieza, que aparecen al cortarla. Se deben a un secado muy agresivo.',
        '**Deformaciones:** abarquillado, arqueado, combado y alabeo. Se explican en [Defectos y cómo elegir una tabla](#/madera/defectos).',
        '**Colapso:** las células se aplastan y la superficie queda ondulada. Ocurre en algunas especies, como ciertos eucaliptos, si se calientan cuando aún están muy húmedas.',
        '**[[Endurecimiento superficial|endurecimiento]]:** la tabla parece bien, pero tiene tensiones internas: al aserrarla a lo largo por el canto, las dos mitades se curvan y pueden apretar la hoja de la sierra. Se corrige en el horno con un acondicionado final de aire húmedo.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Si al aserrar una tabla a lo largo el corte se cierra detrás de la hoja, detente: la madera puede aprisionar el disco y provocar un rechazo. Usa siempre el cuchillo divisor de la sierra y abre el corte con una cuña si hace falta.' },

    { tipo: 'h2', texto: '¿Está lista para trabajar?' },
    {
      tipo: 'lista',
      items: [
        'Su CH está a uno o dos puntos de la humedad de equilibrio del lugar de destino.',
        'Pesada cada semana, ya no pierde peso.',
        'Las lecturas del medidor son parecidas en varios puntos de la tabla y en tablas distintas.',
        'Al aserrar por el canto un recorte de prueba, las dos mitades no se curvan.',
        'Ha pasado al menos una o dos semanas en el taller, con separadores, para aclimatarse.',
      ],
    },
  ],
}

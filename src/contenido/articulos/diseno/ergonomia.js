export default {
  actualizado: '2026-10-28',
  relacionados: ['diseno/medidas-muebles', 'diseno/sillas', 'diseno/mesas', 'taller/banco'],
  bloques: [
    { tipo: 'p', texto: 'La ergonomía estudia cómo adaptar los objetos al cuerpo. En un mueble, eso se traduce en unas pocas medidas que deciden si es cómodo o no: la altura del asiento, la distancia entre el asiento y la mesa, la altura de trabajo y hasta dónde llega la mano sin esforzarse.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Las medidas de este artículo están en centímetros y son valores para un adulto medio. Si el mueble es para una persona concreta, mide a esa persona: es la mejor referencia posible.' },

    { tipo: 'h2', texto: 'Sentado a una mesa' },
    { tipo: 'figura', id: 'medidas-cuerpo', pie: 'Alturas de referencia, a escala. La línea roja marca la altura del codo de una persona de pie de unos 170 cm.' },
    {
      tipo: 'datos',
      items: [
        ['Altura del asiento', '43 – 46 cm. Los pies apoyan en el suelo y el muslo queda horizontal.'],
        ['Altura de la mesa', '72 – 76 cm.'],
        ['Asiento → mesa', '27 – 30 cm de diferencia. Es la medida más importante: si cambias una altura, cambia la otra.'],
        ['Espacio para las piernas', 'Al menos 18 – 20 cm entre el asiento y la parte de abajo del faldón; en la práctica, faldón a ≈ 63 – 65 cm del suelo o más.'],
        ['Fondo del asiento', '40 – 45 cm. Más profundo, la espalda no llega al respaldo.'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para comprobar la relación entre una silla y una mesa, siéntate con los brazos relajados: los antebrazos deben quedar a la altura de la mesa o apenas por encima, con los hombros sueltos.' },

    { tipo: 'h2', texto: 'Trabajar de pie' },
    { tipo: 'p', texto: 'La altura cómoda de una superficie de trabajo depende del tipo de tarea y se mide respecto del codo, no del suelo:' },
    {
      tipo: 'tabla',
      titulo: 'Altura de trabajo de pie',
      columnas: ['Tipo de trabajo', 'Altura de la superficie', 'Ejemplo para codo a 105 cm'],
      filas: [
        ['De precisión, mirando de cerca', '5 – 10 cm por encima del codo', '≈ 110 – 115 cm'],
        ['Liviano: cocinar, montar piezas', '10 – 15 cm por debajo del codo', '≈ 90 – 95 cm'],
        ['Con fuerza: cepillar, serrar, amasar', '15 – 40 cm por debajo del codo', '≈ 65 – 90 cm'],
      ],
      nota: 'Por eso un banco de carpintero suele ser más bajo que una mesada de cocina: para cepillar se usa el peso del cuerpo.',
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Una regla tradicional para el banco de trabajo: de pie, con los brazos colgando, la tapa del banco debe quedar a la altura de los nudillos o de la muñeca. Se explica en [El banco de trabajo](#/taller/banco).' },

    { tipo: 'h2', texto: 'Alcances' },
    {
      tipo: 'lista',
      items: [
        '**Zona cómoda:** entre la altura de la cadera y la de los ojos, ≈ 75 – 160 cm del suelo. Es donde van las cosas de uso diario.',
        '**Estante más alto sin banqueta:** ≈ 180 cm para un adulto medio.',
        '**Por debajo de ≈ 50 cm:** hay que agacharse. Es buen lugar para cajones, que se abren y se miran desde arriba, más que para estantes.',
        '**Fondo de alcance sobre una mesada:** ≈ 60 cm. Más allá, cuesta llegar a lo que está atrás.',
        '**Alacenas sobre la mesada:** a ≈ 50 – 60 cm de la superficie, para que no golpee la cabeza y se vea la mesada.',
      ],
    },

    { tipo: 'h2', texto: 'Espacios de paso' },
    {
      tipo: 'tabla',
      titulo: 'Espacios libres recomendados',
      columnas: ['Situación', 'Espacio'],
      filas: [
        ['Para sentarse y levantarse de una mesa', '75 – 90 cm desde el borde de la mesa hasta la pared'],
        ['Detrás de una silla ocupada, para pasar', '≥ 100 cm desde el borde de la mesa'],
        ['Delante de un armario con puertas batientes', 'Ancho de la puerta + ≈ 50 cm'],
        ['Delante de una cajonera', 'Fondo del cajón abierto + ≈ 50 cm'],
        ['Entre el sofá y la mesa baja', '40 – 45 cm'],
        ['Pasillo entre muebles', '≥ 80 cm; ≥ 90 cm si pasa una silla de ruedas'],
      ],
    },

    { tipo: 'h2', texto: 'Diseño para todas las personas' },
    {
      tipo: 'lista',
      items: [
        '**Usuarios de silla de ruedas:** necesitan ≈ 70 cm libres de altura bajo la mesa, 75 – 80 cm de ancho entre patas y superficies de trabajo a ≈ 75 – 85 cm.',
        '**Personas mayores:** asientos algo más altos y firmes, con apoyabrazos, ayudan a levantarse.',
        '**Niños:** las medidas cambian con la edad; un mueble regulable en altura dura más años.',
        '**Tiradores:** los de barra o de asa se usan con toda la mano y son más fáciles que los pomos pequeños.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las medidas de accesibilidad están reguladas en muchos países por normas de edificación. Consulta la norma local si el mueble es para un espacio público o adaptado.' },
  ],
}

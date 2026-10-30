export default {
  actualizado: '2026-10-29',
  relacionados: ['electricas/taladros', 'electricas/seguridad-electricas', 'electricas/catalogo-electricas'],
  bloques: [
    { tipo: 'p', texto: 'Las herramientas a batería han mejorado tanto que hoy reemplazan a las de cable en casi todos los trabajos de obra y montaje. Pero no siempre son la mejor opción: para trabajos largos y de mucha potencia en el taller, el cable sigue siendo más barato y no se detiene nunca.' },

    { tipo: 'h2', texto: 'Cómo leer una batería' },
    { tipo: 'figura', id: 'leer-bateria', pie: 'Dos baterías de la misma plataforma de 18 V. La de 5 Ah guarda el doble de energía que la de 2,5 Ah: dura el doble, pero es más grande y pesada.' },
    {
      tipo: 'datos',
      items: [
        ['Voltaje (V)', 'Indica la potencia que puede entregar la plataforma. 12 V para herramientas compactas, 18 V para uso general, 36 V o más para herramientas grandes.'],
        ['Capacidad (Ah)', 'En [[amperios-hora|amperio-hora]]: cuánto dura una carga. Una de 5 Ah dura aproximadamente el doble que una de 2,5 Ah.'],
        ['Energía (Wh)', '= voltaje × capacidad. Una batería de 18 V y 5 Ah guarda 90 Wh. Es la mejor medida para comparar.'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Algunos fabricantes anuncian el voltaje máximo sin carga y otros el nominal: "20 V máx." y "18 V" suelen ser la misma batería. Del mismo modo, "12 V máx." equivale a 10,8 V nominales.' },

    { tipo: 'h2', texto: 'Batería o cable' },
    {
      tipo: 'tabla',
      titulo: 'Comparación',
      columnas: ['', 'Batería', 'Cable'],
      filas: [
        ['Movilidad', 'Total; sin cables en el camino', 'Limitada por el enchufe y el prolongador'],
        ['Potencia sostenida', 'Alta en herramientas modernas, pero baja al descargarse', 'Constante mientras haya corriente'],
        ['Autonomía', 'La de las baterías disponibles', 'Ilimitada'],
        ['Costo', 'Mayor; baterías y cargador aparte', 'Menor'],
        ['Peso', 'Mayor por la batería', 'Menor en la mano, pero con el cable a cuestas'],
        ['Ideal para', 'Taladros, atornilladores, sierras de obra, trabajos en altura', 'Fresadoras grandes, lijadoras, cepillos, aspiradores y uso continuo en el taller'],
      ],
    },

    { tipo: 'h2', texto: 'Plataformas' },
    { tipo: 'p', texto: 'Cada marca usa sus propias baterías, y en general no son compatibles con las de otras marcas. Por eso conviene elegir una plataforma, un voltaje de una marca, y comprar dentro de ella: las mismas baterías sirven para todas las herramientas.' },
    {
      tipo: 'lista',
      items: [
        'Elige una marca con buena oferta de herramientas en el voltaje que te interesa y con repuestos en tu país.',
        'Compra al menos dos baterías: una se carga mientras usas la otra.',
        'Las baterías de mayor capacidad pesan más; para atornillar en altura, una compacta es más cómoda.',
      ],
    },

    { tipo: 'h2', texto: 'Motores sin escobillas' },
    { tipo: 'p', texto: 'Los [[motores sin escobillas|sin-escobillas]] no tienen carbones que rocen y se gasten. Un circuito electrónico controla el giro, ajusta la potencia según la resistencia y desperdicia menos energía en calor. Rinden más con la misma batería y casi no necesitan mantenimiento. Cuestan más, pero en uso intensivo lo compensan.' },

    { tipo: 'h2', texto: 'Cuidar las baterías de litio' },
    {
      tipo: 'lista',
      items: [
        'No tienen efecto memoria: se pueden cargar en cualquier momento, sin esperar a que se agoten.',
        'Guárdalas a media carga si no las vas a usar por semanas, en un lugar fresco y seco.',
        'No las dejes al sol, dentro de un auto caliente ni cargándolas sobre superficies que ardan.',
        'Si una batería se golpeó fuerte, se hinchó, huele raro o se calienta sin uso, deja de usarla y llévala a un punto de reciclaje.',
        'Usa solo el cargador de la marca.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Una batería de litio dañada puede incendiarse. Nunca la abras, la perfores ni la tires a la basura común.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las aerolíneas limitan el transporte de baterías de litio según su energía en Wh, y en general no permiten llevarlas en el equipaje despachado. Consulta las reglas vigentes antes de viajar con ellas.' },
  ],
}

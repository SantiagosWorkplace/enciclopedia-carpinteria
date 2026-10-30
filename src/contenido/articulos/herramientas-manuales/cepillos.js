export default {
  actualizado: '2026-10-28',
  relacionados: ['herramientas-manuales/afilado', 'herramientas-manuales/escofinas-rascadores', 'madera/defectos', 'electricas/cepillo-electrico'],
  bloques: [
    { tipo: 'p', texto: 'Un cepillo bien afilado y ajustado deja una superficie que ninguna lija iguala: lisa, brillante y con los poros cortados limpios. También es la herramienta para aplanar, escuadrar y ajustar piezas a mano cuando no hay máquinas, o cuando la pieza es demasiado grande o delicada para ellas.' },

    { tipo: 'h2', texto: 'Partes del cepillo' },
    { tipo: 'figura', id: 'partes-cepillo', pie: 'Cepillo de banco metálico en sección. Avanza hacia la izquierda; la cuchilla asoma apenas por la boca.' },
    {
      tipo: 'lista',
      items: [
        '**Suela:** la base. Debe ser plana, sobre todo delante y detrás de la boca.',
        '**Boca:** la abertura por donde asoma la cuchilla y sale la viruta. Cuanto más cerrada, menos [[repelos|repelo]] en maderas difíciles.',
        '**Cuchilla:** apoya con el [[bisel]] hacia abajo en los cepillos de banco.',
        '**[[Contrahierro|contrahierro]]:** dobla la viruta enseguida y evita que la cuchilla arranque fibras por delante del corte.',
        '**[[Rana|rana]]:** el asiento de la cuchilla, normalmente a 45°. Moviéndola hacia adelante se cierra la boca.',
        '**Rueda de ajuste y palanca lateral:** regulan cuánto asoma la cuchilla y que asome pareja a lo ancho.',
      ],
    },

    { tipo: 'h2', texto: 'Tipos de cepillo' },
    {
      tipo: 'foto', src: 'fotos/herramientas-manuales/cepillo-6.jpg', ancho: 1000, alto: 626,
      alt: 'Cepillo metálico de banco sobre una tabla de pino',
      pie: 'Cepillo metálico n.º 6, de unos 45 cm: un tamaño entre el garlopín y la garlopa. Delante se ve el pomo y atrás el mango.',
      credito: { autor: 'Andrew Fogg', licencia: 'CC BY 2.0', licenciaUrl: 'https://creativecommons.org/licenses/by/2.0', fuente: 'https://commons.wikimedia.org/wiki/File:Stanley_No.6_Fore_plane.jpg' },
    },
    {
      tipo: 'tabla',
      titulo: 'Cepillos más usados',
      columnas: ['Cepillo', 'Largo aprox.', 'Uso'],
      filas: [
        ['Garlopín (n.º 5)', '35 cm', 'Desbastar y aplanar en general; el más versátil'],
        ['Garlopa (n.º 7)', '55 – 60 cm', 'Aplanar tableros y enderezar cantos largos'],
        ['Cepillo de alisar (n.º 4)', '24 – 25 cm', 'Acabado final de superficies'],
        ['Cepillo de contrafibra o de bloque', '15 – 18 cm', 'Testas, chaflanes y ajustes con una mano; cuchilla con el bisel hacia arriba y a ángulo bajo'],
        ['Guillame', 'Variable', 'Rebajos y hombros de espigas; la cuchilla ocupa todo el ancho'],
        ['Cepillo de ranurar', 'Variable', 'Ranuras paralelas al canto, con guía'],
        ['Kanna (japonés)', 'Variable', 'Cuerpo de madera; se trabaja tirando'],
      ],
      nota: 'Los números son los de la serie de cepillos metálicos más difundida. Un cepillo más largo puentea los huecos y endereza; uno corto sigue la superficie.',
    },

    { tipo: 'h2', texto: 'Ajustar el cepillo' },
    {
      tipo: 'pasos',
      items: [
        'Afila la cuchilla. Un cepillo desafilado no se arregla con ningún ajuste. Ver [Afilado](#/herramientas-manuales/afilado).',
        'Coloca el contrahierro a ≈ 0,5 – 1 mm del filo para trabajo fino; a 1,5 – 2 mm para desbastar.',
        'Monta la cuchilla, aprieta la palanca de cierre con firmeza moderada y retrae el filo con la rueda.',
        'Mirando a lo largo de la suela contra una luz, avanza la cuchilla hasta que apenas asome y centra el filo con la palanca lateral.',
        'Prueba en un recorte. La viruta debe salir pareja, del mismo espesor en todo su ancho. Ajusta hasta lograrlo.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Ajusta siempre el último movimiento de la rueda hacia adelante: así se elimina la holgura del mecanismo y la cuchilla no retrocede al trabajar.' },

    { tipo: 'h2', texto: 'Cepillar a favor de la veta' },
    { tipo: 'p', texto: 'Las fibras casi nunca son paralelas a la cara. Si se cepilla en el sentido en que "suben", el filo las levanta y arranca [[repelos|repelo]]. Hay que mirar el canto de la tabla: las líneas de la veta indican hacia dónde cepillar, como si se acariciara un perro a favor del pelo.' },
    {
      tipo: 'lista',
      items: [
        'Si aparecen repelos, da vuelta la pieza y cepilla en el otro sentido.',
        'En maderas de veta entrelazada, cierra la boca, acerca el contrahierro, toma pasadas muy finas y lleva el cepillo un poco en diagonal.',
        'Si aun así hay repelos, termina con una [cuchilla de rascar](#/herramientas-manuales/escofinas-rascadores).',
      ],
    },

    { tipo: 'h2', texto: 'Aplanar y escuadrar a mano' },
    {
      tipo: 'pasos',
      items: [
        '**Cara de referencia:** detecta los puntos altos con una regla de canto y dos listones paralelos puestos a los extremos, que muestran el alabeo. Cepilla en diagonal en los dos sentidos y termina a lo largo.',
        '**Canto de referencia:** cepíllalo recto y a escuadra con la cara; compruébalo con la escuadra en varios puntos.',
        '**Espesor:** traza con el gramil la línea de espesor en todos los cantos, desde la cara de referencia, y cepilla hasta ella.',
        '**Ancho:** traza con el gramil desde el canto de referencia y cepilla el canto opuesto hasta la línea.',
        '**Testas:** cepíllalas sobre una tabla de refrentar, que mantiene el cepillo a escuadra. Si no, trabaja desde los dos extremos hacia el centro para no astillar la esquina.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Al terminar, apoya el cepillo de costado o con la punta sobre un listón: nunca con la cuchilla apoyada sobre el banco, donde se mella.' },
  ],
}

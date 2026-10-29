export default {
  actualizado: '2026-10-29',
  relacionados: ['acabados/pistola', 'acabados/barnices', 'acabados/preparacion', 'madera/tableros'],
  bloques: [
    { tipo: 'p', texto: 'Una [[laca|laca]] es un acabado de secado muy rápido que se aplica casi siempre a pistola. Puede ser transparente, como un barniz, u opaca y de color: es el «lacado» de los muebles de cocina, de las puertas y de muchos muebles modernos. La pintura cumple la misma función con productos más sencillos, que se aplican a pincel o a rodillo.' },

    { tipo: 'h2', texto: 'Lacas' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de laca',
      columnas: ['Laca', 'Cómo es', 'Para qué'],
      filas: [
        ['Nitrocelulósica', 'Seca por evaporación en minutos; cada mano se funde con la anterior y se repara fácil; resiste poco el agua y el alcohol; amarillea', 'Muebles de interior, instrumentos, restauración'],
        ['Precatalizada o catalizada', 'Endurece por reacción química; mucho más resistente', 'Cocinas, baños, muebles de uso intenso'],
        ['De poliuretano de dos componentes', 'La más dura y resistente; con endurecedor', 'Talleres profesionales con cabina'],
        ['Al agua', 'Poco olor, no amarillea', 'Interiores; cada vez más usada'],
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Las lacas al disolvente son muy inflamables y se aplican pulverizadas: hacen falta cabina o extracción, respirador para vapores orgánicos y ninguna fuente de chispas cerca. Los productos con endurecedores de isocianato exigen protección respiratoria especial: consulta la ficha de seguridad.' },

    { tipo: 'h2', texto: 'El brillo' },
    { tipo: 'figura', id: 'niveles-brillo', pie: 'La misma madera con cuatro niveles de brillo. Cuanto más brillante, más nítido el reflejo y más se ven las imperfecciones.' },
    { tipo: 'p', texto: 'Las lacas, los barnices y las pinturas se venden en varios niveles de brillo. Un acabado mate disimula rayas, huellas y ondulaciones; uno brillante exige una superficie perfectamente plana, porque refleja todo. Para un alto brillo de piano se aplican muchas manos, se lija hasta dejar todo plano y se pule con pastas cada vez más finas.' },

    { tipo: 'h2', texto: 'Lacado opaco' },
    {
      tipo: 'pasos',
      items: [
        '**Soporte:** el MDF es el más usado porque no tiene veta que se marque. Lija las caras a grano ≈ 180.',
        '**Cantos:** los cantos del MDF son porosos y absorben mucho. Séllalos con una mano de fondo, masilla fina o cola diluida, y lija.',
        '**Fondo:** una o dos manos de fondo o [[imprimación|imprimacion]] del sistema de laca elegido. Rellena y deja una base pareja.',
        '**Lijar** el fondo con grano ≈ 240 – 320 hasta que no quede ninguna imperfección. Aquí se decide el resultado.',
        '**Color:** dos manos finas de laca de color, con un lijado suave entre ellas.',
        '**Transparente:** en algunos sistemas, una mano final de laca incolora para más resistencia.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Usa productos del mismo sistema y del mismo fabricante para el fondo, el color y la laca final. Mezclar sistemas puede causar falta de adherencia o arrugas.' },

    { tipo: 'h2', texto: 'Pintura' },
    {
      tipo: 'lista',
      items: [
        '**Esmalte al agua:** acrílico o de poliuretano; poco olor, seca rápido, no amarillea. Es la opción más común hoy para muebles.',
        '**Esmalte sintético:** al disolvente; muy resistente y bien nivelado, pero con olor fuerte y secado lento.',
        '**Pintura a la caseína:** a base de leche y pigmentos; aspecto mate y desgastado, muy usada en estilos rústicos.',
        '**Imprimación:** la base que asegura la adherencia y evita que la madera absorba la pintura de forma desigual.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'En pino y otras coníferas, la resina de los nudos atraviesa la pintura y deja manchas amarillas. Sella los nudos antes con goma laca descerada o con un sellador de nudos.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Para muebles infantiles y juguetes, usa pinturas sin plomo ni metales pesados, que declaren cumplir la norma de seguridad de juguetes. Ver [Diseñar muebles seguros](#/diseno/seguridad-diseno).' },
  ],
}

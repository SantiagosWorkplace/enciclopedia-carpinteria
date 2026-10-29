export default {
  actualizado: '2026-10-29',
  relacionados: ['acabados/ceras', 'acabados/barnices', 'acabados/seguridad-acabados', 'taller/incendios'],
  bloques: [
    { tipo: 'p', texto: 'El aceite es el acabado más sencillo: entra en la madera, la oscurece un poco, resalta la veta y deja un tacto natural, sin película de plástico. Protege poco contra el agua y los golpes, pero se aplica sin equipos y se repara con otra mano en cualquier momento.' },

    { tipo: 'h2', texto: 'Dentro o encima' },
    { tipo: 'figura', id: 'aceite-pelicula', pie: 'Secciones con los espesores exagerados. El aceite queda dentro de las fibras; el barniz forma una película sobre la superficie.' },
    { tipo: 'p', texto: 'Un [[aceite secante|aceite-secante]] se endurece al reaccionar con el oxígeno del aire. Este proceso se llama [[curado]] y es más lento que el secado al tacto: el aceite puede tardar semanas en curar del todo. Un aceite no secante, como el de vaselina, nunca se endurece.' },
    {
      tipo: 'tabla',
      titulo: 'Aceites para madera',
      columnas: ['Aceite', 'Cómo es', 'Uso'],
      filas: [
        ['Linaza cruda', 'Secante, pero muy lento: días entre manos', 'Poco usado solo; se usa en mezclas'],
        ['Linaza cocida', 'Linaza con secantes añadidos: seca en un día', 'Muebles de interior, mangos; amarillea con el tiempo'],
        ['Tung puro', 'Secante; más resistente al agua que la linaza', 'Muebles, cocina; las primeras manos se diluyen'],
        ['[[Aceite-barniz|aceite-barniz]]', 'Aceite con resinas de barniz y disolvente; llamado a veces «aceite danés» o «aceite de acabado»', 'Muebles: más protección, aspecto de aceite'],
        ['Aceite con cera dura', 'Aceite y ceras que forman una capa fina y resistente', 'Suelos, mesas, encimeras'],
        ['De vaselina', 'Aceite mineral no secante, sin olor ni sabor', 'Tablas de cortar y utensilios; hay que renovarlo a menudo'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Los aceites de cocina, como el de oliva o el de girasol, no curan bien y se ponen rancios con el tiempo. No sirven como acabado.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los nombres comerciales no indican qué hay dentro de la lata: un «aceite de tung» puede ser una mezcla con barniz. Lee la ficha técnica para saber la composición y los tiempos.' },

    { tipo: 'h2', texto: 'Aplicación' },
    {
      tipo: 'pasos',
      items: [
        'Lija hasta grano ≈ 180 – 220 y quita el polvo.',
        'Moja bien la superficie con un trapo o un pincel. Mantenla mojada unos 10 – 20 minutos, agregando aceite donde se absorba.',
        'Retira todo el sobrante con trapos limpios, frotando a favor de la veta. Lo que queda encima se vuelve pegajoso.',
        'Repasa una hora después: el aceite suele volver a salir de los poros. Límpialo.',
        'Deja curar al menos un día, o lo que indique el fabricante.',
        'Lija muy suave con grano ≈ 320 – 400 o una esponja abrasiva fina, quita el polvo y aplica otra mano. Entre 3 y 5 manos suelen bastar.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'En la segunda o tercera mano, lija con la superficie mojada de aceite, usando lija al agua de grano ≈ 400. El polvo de madera y el aceite forman una pasta que rellena los poros, y la superficie queda muy lisa. Retira bien la pasta, a través de la veta.' },

    { tipo: 'h2', texto: 'Mantenimiento' },
    {
      tipo: 'lista',
      items: [
        '**Renovar:** cuando la madera se vea seca o mate, limpia y aplica una mano fina. No hace falta lijar ni quitar el aceite viejo.',
        '**Reparar:** una raya o una mancha se lija en la zona y se vuelve a aceitar; no queda una marca de reparación como con un barniz.',
        '**Contacto con alimentos:** la mayoría de los aceites secantes, una vez curados, son seguros. Respeta el tiempo de curado. Ver [Diseñar muebles seguros](#/diseno/seguridad-diseno).',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Los trapos con aceite secante pueden encenderse solos al curar. Extiéndelos de a uno al aire libre o guárdalos en una lata metálica con agua y tapa. Ver [Seguridad con productos de acabado](#/acabados/seguridad-acabados) y [Prevención de incendios](#/taller/incendios).' },
  ],
}

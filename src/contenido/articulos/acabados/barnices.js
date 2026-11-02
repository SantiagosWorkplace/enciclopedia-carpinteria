export default {
  actualizado: '2026-11-02',
  relacionados: ['acabados/preparacion', 'acabados/lacas-pintura', 'acabados/pistola', 'acabados/exterior'],
  bloques: [
    { tipo: 'p', texto: 'El barniz forma una película dura y transparente sobre la madera. Es el acabado que más protege contra el agua, el roce, el calor y los productos de limpieza, por eso se usa en mesas, encimeras, suelos y puertas. Su desventaja es que, si se raya hasta la madera, la reparación se nota.' },

    { tipo: 'h2', texto: 'Tipos de barniz' },
    {
      tipo: 'tabla',
      titulo: 'Barnices para madera',
      columnas: ['Barniz', 'Cómo es', 'Uso'],
      filas: [
        ['Al aceite o sintético', 'Resina alquídica con aceite; tono ámbar, película resistente', 'Muebles de interior; secado lento'],
        ['[[Poliuretano|poliuretano]] al disolvente', 'Muy duro, resiste el agua, el calor y el roce; amarillea algo', 'Mesas, suelos, encimeras'],
        ['Al agua', 'Poco olor, seca rápido, casi incoloro y no amarillea', 'Interiores, maderas claras; levanta la fibra'],
        ['Marino', 'Flexible, con filtros para la luz del sol; menos duro', 'Exterior y barcos; necesita mantenimiento'],
        ['De dos componentes', 'Se mezcla con un endurecedor; el más resistente', 'Talleres profesionales, a pistola'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Los barnices al agua dejan las maderas oscuras con un tono algo frío y grisáceo. Una mano previa de goma laca descerada o de aceite les devuelve la calidez.' },

    { tipo: 'h2', texto: 'Capas' },
    { tipo: 'figura', id: 'capas-barniz', pie: 'Sección con los espesores muy exagerados. Cada mano se lija apenas antes de aplicar la siguiente, salvo la última.' },
    {
      tipo: 'pasos',
      items: [
        '**Sellador:** la primera mano, diluida, penetra en la madera y la sella. Puede ser el mismo barniz diluido o un [[sellador]] compatible.',
        '**Lijar** con grano ≈ 240 – 320, a mano y con presión mínima, solo para quitar el polvo atrapado y las fibras levantadas. Quita bien el polvo.',
        '**Segunda y siguientes manos:** finas y parejas, lijando entre una y otra.',
        '**Mano final:** sin lijar después. Si quieres un brillo perfecto, deja curar varios días y pule con abrasivo muy fino y pasta de pulir.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La dilución de la primera mano, el tiempo entre manos y el número de manos dependen de cada barniz: sigue la ficha técnica. En general se recomiendan 3 manos en muebles y más en superficies de mucho uso.' },

    { tipo: 'h2', texto: 'A pincel' },
    {
      tipo: 'foto', src: 'fotos/acabados/barniz-pincel.jpg', ancho: 1000, alto: 745,
      alt: 'Luthier con guantes barnizando un violín con un pincel',
      pie: 'Barnizado a pincel de un violín sin terminar. Los guantes protegen la piel del barniz.',
      credito: { autor: 'Ronaldmoretto', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Applying_Varnish_on_Unfinished_Violin.jpg' },
    },
    {
      tipo: 'lista',
      items: [
        '**El pincel:** de cerda natural para barnices al disolvente; de fibra sintética para los barnices al agua.',
        '**No agites la lata:** revuelve con una varilla. Agitar mete burbujas que quedan en la película.',
        '**Carga poco** y extiende en pasadas a favor de la veta, primero a lo largo y después repasando con la punta del pincel, apenas apoyado, de un extremo al otro.',
        '**Borde húmedo:** avanza siempre empalmando con barniz todavía fresco. Si repasas una zona que empezó a secar, quedan marcas.',
        '**Verticales:** manos más finas, de arriba abajo, y revisa los chorreados unos minutos después.',
        '**Polvo:** barniza en un lugar limpio, sin corrientes de aire, y con una [[luz rasante|luz-rasante]] para ver la película.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'El barniz frotado es un poliuretano diluido a la mitad con su disolvente, que se aplica con un trapo y se deja secar sin repasar. Cada mano es finísima, casi no deja marcas y no junta polvo. Hacen falta más manos.' },

    { tipo: 'h2', texto: 'Defectos' },
    {
      tipo: 'tabla',
      titulo: 'Problemas del barnizado',
      columnas: ['Defecto', 'Causa', 'Solución'],
      filas: [
        ['Burbujas', 'Lata agitada, pincel pasado muy rápido o barniz espeso', 'Revolver, diluir un poco y pasar el pincel despacio'],
        ['Chorreados', 'Mucho barniz en superficies verticales', 'Manos finas; lijar el chorreado cuando esté duro'],
        ['Polvo y pelos', 'Ambiente sucio, pincel que suelta cerdas', 'Lijar entre manos; limpiar el taller antes'],
        ['[[Ojos de pez|ojo-pez]]', 'Restos de cera, silicona o aceite', 'Limpiar con disolvente; una mano de goma laca descerada'],
        ['Marcas del pincel', 'Barniz espeso o repaso sobre zona seca', 'Diluir; trabajar con borde húmedo'],
        ['No seca', 'Frío, humedad o mano muy gruesa', 'Calor y ventilación; manos más finas'],
      ],
    },
  ],
}

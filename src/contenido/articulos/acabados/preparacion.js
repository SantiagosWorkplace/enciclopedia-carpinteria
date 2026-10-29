export default {
  actualizado: '2026-10-29',
  relacionados: ['electricas/lijadoras', 'herramientas-manuales/escofinas-rascadores', 'acabados/tintes', 'acabados/barnices'],
  bloques: [
    { tipo: 'p', texto: 'El acabado no esconde los defectos: los agranda. Una raya de lija, un resto de cola o una abolladura que casi no se ven en la madera desnuda saltan a la vista bajo la primera mano de barniz o de tinte. Por eso la preparación es la mitad del acabado.' },

    { tipo: 'h2', texto: 'El orden de trabajo' },
    {
      tipo: 'pasos',
      items: [
        '**Reparar:** levanta las abolladuras, rellena grietas y agujeros y quita los restos de cola.',
        '**Alisar:** cepilla o pasa la [[cuchilla de rascar|rascador]] para borrar las marcas de máquina. Lijar desde un grano grueso lleva mucho más tiempo.',
        '**Lijar** por granos, a favor de la veta, hasta el grano final que pida el acabado.',
        '**Levantar la fibra** si el producto es al agua.',
        '**Quitar el polvo** de la superficie, de los poros y de los rincones.',
        '**Tapar los poros** solo si quieres una superficie de vidrio en una madera de poro abierto.',
      ],
    },

    { tipo: 'h2', texto: 'Reparar' },
    {
      tipo: 'lista',
      items: [
        '**Abolladuras:** pon una gota de agua en el golpe, cúbrelo con un paño húmedo y apoya la punta de una plancha caliente unos segundos. El vapor hincha las fibras aplastadas y las levanta. No sirve si las fibras están cortadas.',
        '**Restos de cola:** la cola seca no deja entrar el tinte ni el aceite, y aparece como una mancha clara. Ráspala con un formón o una cuchilla y lija la zona. Para encontrarla, pasa un trapo apenas húmedo con alcohol: la cola queda mate.',
        '**Grietas y agujeros:** con masilla para madera del color más parecido. Prueba antes cómo queda bajo el acabado, porque la masilla no cambia de color como la madera.',
        '**Grietas finas:** una mezcla de cola y polvo de lija de la misma madera. Bajo el acabado queda más oscura que la madera; úsala solo en grietas muy finas.',
      ],
    },

    { tipo: 'h2', texto: 'El lijado' },
    { tipo: 'p', texto: 'Cada grano tiene que borrar las rayas del anterior, sin saltar más de un grano de la serie. Las secuencias y las lijadoras se explican en [Lijadoras](#/electricas/lijadoras). El último paso se hace siempre a mano, a favor de la veta, con un taco de lija.' },
    {
      tipo: 'tabla',
      titulo: 'Grano final según el acabado',
      columnas: ['Acabado', 'Grano final', 'Por qué'],
      filas: [
        ['Tinte', '≈ 150 – 180', 'Más fino que 180 – 220, el tinte penetra menos y puede quedar desparejo'],
        ['Aceite y cera', '≈ 180 – 220', 'Quedan dentro de la madera: se ve la superficie tal como está'],
        ['Barniz, laca, goma laca', '≈ 180 – 220', 'La película cubre las rayas finas; entre manos se lija más fino'],
        ['Pintura', '≈ 120 – 180', 'Un grano algo grueso ayuda a que se agarre la imprimación'],
      ],
      nota: 'Lija las testas un grano más fino que las caras: absorben más y quedan más oscuras.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los granos son orientativos y cambian con la especie y con el producto. Prueba siempre en un recorte de la misma madera, lijado igual que la pieza, y con el acabado completo encima.' },
    {
      tipo: 'lista',
      items: [
        '**Cantos y aristas:** lija con un taco duro para no redondearlos sin querer. Después, rompe las aristas vivas con una pasada suave de lija fina: el acabado se agarra mal en un filo.',
        '**Curvas:** con una almohadilla blanda o con la lija envuelta en un taco de la forma de la curva.',
        '**Para revisar:** usa una [[luz rasante|luz-rasante]] o pasa un trapo húmedo con alcohol. Las rayas de lija aparecen al instante.',
      ],
    },

    { tipo: 'h2', texto: 'Levantar la fibra' },
    { tipo: 'figura', id: 'preparar-superficie', pie: 'Secciones con los tamaños muy exagerados. Sin tapaporos, la película se hunde en cada poro. Con agua, las fibras sueltas de la superficie se levantan.' },
    { tipo: 'p', texto: 'El agua hincha las fibras sueltas que dejó la lija, y al secar quedan de punta: la superficie se vuelve áspera. Pasa con eso cualquier tinte, barniz o pintura al agua. Para que no pase después del acabado, se provoca antes: [[levantar la fibra|levantar-fibra]].' },
    {
      tipo: 'pasos',
      items: [
        'Pasa una esponja o un trapo apenas húmedo por toda la superficie, sin empapar.',
        'Deja secar por completo, en general unas horas.',
        'Lija muy suave con el grano final, solo para cortar las fibras levantadas. Si lijas fuerte, abres fibras nuevas.',
      ],
    },

    { tipo: 'h2', texto: 'Tapaporos' },
    { tipo: 'p', texto: 'Las maderas de [[poro]] abierto, como el roble, el fresno, el nogal o la caoba, dejan pequeñas depresiones bajo un barniz o una laca. Para un acabado liso como un vidrio se rellenan los poros con un [[tapaporos]], una pasta que se aplica antes del acabado.' },
    {
      tipo: 'pasos',
      items: [
        'Si vas a teñir, tiñe antes o usa un tapaporos del color elegido.',
        'Extiende la pasta en sentido transversal a la veta, con una espátula de plástico o un trapo de arpillera, para que entre en los poros.',
        'Cuando empieza a opacarse, retira el sobrante, también a través de la veta, para no sacarla de los poros.',
        'Deja secar el tiempo que indique el fabricante y lija suave con grano fino.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Sin tapaporos se logra el mismo efecto con varias manos de barniz o laca, lijando entre manos hasta que la superficie quede plana. Lleva más tiempo y más producto.' },

    { tipo: 'h2', texto: 'Quitar el polvo' },
    { tipo: 'p', texto: 'Aspira la pieza con un cepillo suave, sopla los poros y los rincones y pasa por último un trapo de algodón apenas húmedo con el disolvente del acabado. Si vas a usar un producto al agua, el trapo va con agua. Termina de lijar en otro lugar, o espera a que el polvo se asiente, antes de abrir la lata.' },
  ],
}

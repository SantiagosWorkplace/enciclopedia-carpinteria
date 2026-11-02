export default {
  actualizado: '2026-11-02',
  relacionados: ['acabados/preparacion', 'herramientas-manuales/escofinas-rascadores', 'maquinas/polvo', 'electricas/seguridad-electricas'],
  bloques: [
    { tipo: 'p', texto: 'Lijar es la parte menos glamorosa de la carpintería y una de las que más se notan en el resultado. Una lijadora adecuada, con la secuencia de granos correcta y buena aspiración, deja la madera lista para el acabado en una fracción del tiempo que llevaría a mano.' },

    { tipo: 'h2', texto: 'Tipos de lijadora' },
    { tipo: 'figura', id: 'lijadoras', pie: 'Vistas desde abajo. En rojo, el movimiento de la lija.' },
    {
      tipo: 'foto', src: 'fotos/electricas/lijadora-excentrica.jpg', ancho: 1000, alto: 706,
      alt: 'Lijadora excéntrica con cable y tres discos de lija amarillos',
      pie: 'Lijadora excéntrica y discos de lija con agujeros para aspirar el polvo.',
      credito: { autor: 'Dave Pape', licencia: 'Dominio público', licenciaUrl: 'https://creativecommons.org/publicdomain/mark/1.0/deed.es', fuente: 'https://commons.wikimedia.org/wiki/File:Random_orbit_sander.jpg' },
    },
    {
      tipo: 'tabla',
      titulo: 'Cuál usar',
      columnas: ['Lijadora', 'Movimiento', 'Ventajas', 'Limitaciones'],
      filas: [
        ['Orbital', 'Pequeños círculos, siempre iguales', 'Base cuadrada que entra en esquinas; usa lija común cortada', 'Lenta; puede dejar marcas en espiral'],
        ['Excéntrica o rotorbital', 'Gira y oscila a la vez, de forma aleatoria', 'Rápida y sin marcas visibles; la más versátil', 'Base redonda: no llega a los rincones'],
        ['De banda', 'Una banda continua en línea recta', 'Desbasta muy rápido', 'Agresiva; se hunde con facilidad y deja rayas'],
        ['Delta o de detalle', 'Oscila en una base triangular', 'Rincones, molduras, listones', 'Superficie pequeña; lenta'],
      ],
    },
    {
      tipo: 'datos',
      items: [
        ['Excéntrica', 'Discos de 125 o 150 mm; órbita de ≈ 2,5 – 5 mm. Órbita pequeña para acabado fino, grande para desbaste.'],
        ['De banda', 'Bandas de 75 × 457 o 75 × 533 mm, las más comunes.'],
        ['Fijación', 'Velcro en las excéntricas; pinzas o velcro en las orbitales.'],
      ],
    },

    { tipo: 'h2', texto: 'Secuencia de granos' },
    { tipo: 'p', texto: 'Cada grano tiene que borrar las rayas del anterior. Por eso no conviene saltar más de un grano de la serie:' },
    {
      tipo: 'tabla',
      titulo: 'Secuencias habituales',
      columnas: ['Punto de partida', 'Secuencia'],
      filas: [
        ['Madera con marcas de sierra o cepilladora', '80 → 120 → 150 → 180'],
        ['Madera cepillada a mano o bien preparada', '120 → 150 → 180'],
        ['Entre manos de barniz o laca', '240 – 320, a mano o con presión mínima'],
      ],
      nota: 'Lijar más fino que 180 – 220 antes de teñir puede hacer que el tinte penetre menos y quede desparejo. Prueba en un recorte.',
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para ver si quedan rayas del grano anterior, ilumina la superficie con una luz rasante, casi paralela a ella, o pásale un trapo apenas humedecido con alcohol: las rayas aparecen enseguida.' },

    { tipo: 'h2', texto: 'Técnica' },
    {
      tipo: 'pasos',
      items: [
        'Conecta el aspirador o la bolsa. Además de cuidar los pulmones, la lija se embota menos y dura más.',
        'Apoya la lijadora sobre la pieza antes de encenderla y apágala antes de levantarla, para no hacer marcas al aterrizar.',
        'No presiones: el peso de la máquina y de la mano alcanza. Presionar frena la órbita y raya.',
        'Muévela despacio, unos centímetros por segundo, en pasadas que se superpongan a la mitad.',
        'Mantén la base plana. Inclinarla hunde el borde y redondea los cantos.',
        'Cambia la lija cuando corte menos: una lija gastada calienta y pule en lugar de cortar.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'El polvo de lijado es el más fino y peligroso del taller. Usa siempre aspiración y mascarilla FFP2 o FFP3, y limpia con aspirador, no con escoba ni con aire comprimido.' },

    { tipo: 'h2', texto: 'Lija' },
    {
      tipo: 'lista',
      items: [
        '**Óxido de aluminio:** el abrasivo general para madera.',
        '**Cerámico:** muy duradero; para desbastes y maderas duras.',
        '**Carburo de silicio:** cortante y fino; para lijar entre manos de acabado y al agua.',
        '**Malla abrasiva:** se embota poco y aspira por toda la superficie.',
      ],
    },
    { tipo: 'p', texto: 'La preparación completa de la superficie antes del acabado se explica en [Preparar la superficie](#/acabados/preparacion).' },
  ],
}

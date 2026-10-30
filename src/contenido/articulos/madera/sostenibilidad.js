export default {
  actualizado: '2026-10-27',
  relacionados: ['madera/especies', 'madera/tableros', 'construccion/mundo', 'acabados/seguridad-acabados'],
  bloques: [
    { tipo: 'p', texto: 'La madera es el único material de construcción importante que crece solo, con la energía del sol, y que guarda carbono mientras se usa. Pero esa ventaja depende de dónde sale: la madera de un bosque bien gestionado se renueva, mientras que la de una tala ilegal destruye ecosistemas que tardan siglos en recuperarse.' },

    { tipo: 'h2', texto: 'La madera guarda carbono' },
    { tipo: 'p', texto: 'Alrededor de la mitad del peso de la madera seca es carbono que el árbol tomó del aire como CO₂. Mientras la madera existe, ese carbono queda guardado; se libera al pudrirse o al quemarse.' },
    { tipo: 'figura', id: 'ciclo-carbono', pie: 'El carbono queda guardado mientras la madera está en uso. Reutilizarla alarga ese tiempo, y replantar cierra el ciclo.' },
    { tipo: 'datos', items: [['CO₂ guardado (kg)', '= peso seco de la madera (kg) × 0,5 × 44 ÷ 12']] },
    { tipo: 'p', texto: 'El factor 44 ÷ 12 pasa de carbono a CO₂. Un metro cúbico de una madera que seca pesa 500 kg guarda 500 × 0,5 × 3,67 ≈ **917 kg de CO₂**, casi una tonelada.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'El balance completo de un producto también cuenta la energía de la tala, el transporte, el secado y la fabricación. Aun así, la madera suele salir mejor parada que el acero, el hormigón o el aluminio para el mismo uso, sobre todo si es de origen cercano.' },

    { tipo: 'h2', texto: 'Certificación forestal' },
    { tipo: 'p', texto: 'Un sello de certificación indica que la madera viene de un bosque gestionado según reglas ambientales, sociales y económicas comprobadas por un auditor independiente. Para que un producto lleve el sello, cada empresa que lo compra, transforma y vende debe tener además una certificación de [[cadena de custodia|cadena-custodia]].' },
    {
      tipo: 'tabla',
      titulo: 'Los dos grandes sistemas',
      columnas: ['', 'FSC', 'PEFC'],
      filas: [
        ['Nombre', 'Forest Stewardship Council', 'Programme for the Endorsement of Forest Certification'],
        ['Fundado', '1993', '1999'],
        ['Cómo funciona', 'Un estándar internacional único, adaptado a cada país', 'Reconoce sistemas nacionales que cumplen sus requisitos'],
        ['Etiquetas habituales', 'FSC 100 %, FSC Mixto, FSC Reciclado', 'PEFC certificado, PEFC reciclado'],
        ['Cómo verificar', 'Buscar el código del certificado en la base de datos pública de FSC', 'Buscar el código en la base de datos pública de PEFC'],
      ],
    },
    { tipo: 'p', texto: 'Ejemplos de sistemas nacionales reconocidos por [[PEFC|pefc]] son CERTFOR en Chile, CERFLOR en Brasil y CERFOAR en Argentina. La lista completa y vigente se consulta en la web de PEFC.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Un sello sin código no vale nada. Pide al vendedor el código de certificado que figura en la factura o la etiqueta, del tipo «FSC-C000000» del [[FSC|fsc]], y comprueba en la web del sistema que está vigente y cubre ese producto.' },

    { tipo: 'h2', texto: 'Especies protegidas' },
    { tipo: 'p', texto: 'La convención [[CITES|cites]] regula el comercio internacional de especies amenazadas. Las maderas aparecen en tres apéndices:' },
    {
      tipo: 'lista',
      items: [
        '**Apéndice I:** comercio prohibido salvo excepciones. Por ejemplo, el palisandro de Brasil (*Dalbergia nigra*).',
        '**Apéndice II:** comercio permitido solo con permiso de exportación que acredite un origen legal y sostenible. Incluye, entre otras, la caoba de hoja grande (*Swietenia macrophylla*), el palo santo (*Bulnesia sarmientoi*), los cedros americanos del género *Cedrela*, la mayoría de los palisandros del género *Dalbergia* y los lapachos del género *Handroanthus*.',
        '**Apéndice III:** especies que un país protege y para las que pide colaboración a los demás.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las listas de CITES cambian en cada conferencia de las partes, con nuevas especies y excepciones (por ejemplo para instrumentos musicales). Consulta la situación actual de cada especie en la base de datos oficial Species+ antes de comprar o exportar.' },
    { tipo: 'p', texto: 'Además, cada país tiene leyes propias: en Argentina, la Ley 26.331 de Bosques Nativos; en Estados Unidos, la Ley Lacey, que prohíbe comerciar madera obtenida ilegalmente en cualquier país; y en la Unión Europea, el reglamento sobre productos libres de deforestación, que reemplaza al antiguo Reglamento de la Madera.' },

    { tipo: 'h2', texto: 'Cómo comprar mejor' },
    {
      tipo: 'pasos',
      items: [
        '**Prefiere especies locales y de plantación.** Pinos, eucaliptos, álamos y otras especies cultivadas suelen tener un origen claro y viajan menos.',
        '**Pide madera certificada** y el código de certificado en la factura.',
        '**Desconfía de las especies tropicales sin papeles** o con precios muy bajos: es donde más se concentra la tala ilegal.',
        '**Considera la madera recuperada** de demoliciones, palés o muebles viejos.',
        '**Aprovecha cada tabla:** una buena lista de corte reduce el desperdicio más que cualquier otra medida.',
        '**Elige tableros de baja emisión** de [[formaldehído|formaldehido]]. Ver [Tableros manufacturados](#/madera/tableros).',
        '**Usa la madera donde rinde:** maciza donde se ve y se toca; tablero chapado en fondos, laterales ocultos y superficies grandes.',
      ],
    },

    { tipo: 'h2', texto: 'Madera recuperada' },
    { tipo: 'p', texto: 'La madera de vigas, suelos o muebles antiguos suele estar muy bien seca, ser de árboles viejos de anillos estrechos y tener una pátina imposible de imitar. También trae sorpresas:' },
    {
      tipo: 'lista',
      items: [
        '**Metal oculto:** clavos, tornillos y grapas que destrozan cuchillas y sierras. Pásale un detector de metales antes de cortar o cepillar.',
        '**Pinturas viejas:** las anteriores a la década de 1980 pueden contener plomo. No las lijes en seco; usa decapante y protección.',
        '**Madera tratada:** la madera de exterior tratada con sales de cobre, cromo y arsénico (CCA) tiene un tono verdoso. No la uses en muebles ni en contacto con alimentos.',
        '**Insectos:** revisa si hay agujeros con serrín fresco.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Nunca quemes madera tratada, tableros con melamina o laminados, ni madera pintada: los humos y las cenizas son tóxicos. Llévalos a un punto limpio.' },

    { tipo: 'h2', texto: 'Los restos del taller' },
    {
      tipo: 'lista',
      items: [
        '**Recortes:** guárdalos por tamaño; sirven para cuñas, tacos, piezas pequeñas o pruebas de acabado.',
        '**Viruta y serrín de madera sin tratar:** sirven para compost, como cama para animales o para hacer briquetas.',
        '**Polvo de MDF y de tableros:** va a la basura, no al compost, por las colas que contiene.',
        '**Trapos con aceite:** pueden prenderse fuego solos. Se explica en [Seguridad con productos de acabado](#/acabados/seguridad-acabados).',
      ],
    },
  ],
}

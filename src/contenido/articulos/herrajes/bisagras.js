export default {
  actualizado: '2026-10-30',
  relacionados: ['diseno/armarios', 'herrajes/cierres', 'herrajes/tornillos', 'otros-materiales/vidrio'],
  bloques: [
    { tipo: 'p', texto: 'La bisagra decide cómo se ve una puerta cerrada, cuánto se abre y si se puede ajustar. Una bisagra mal elegida o mal colocada hace que la puerta roce, cuelgue o no cierre parejo, aunque el mueble esté perfecto.' },

    { tipo: 'h2', texto: 'Tipos' },
    { tipo: 'figura', id: 'tipos-bisagra', pie: 'Cuatro bisagras abiertas. Las de libro y de mariposa giran sobre un eje de nudillos; la de cazoleta, sobre un brazo articulado.' },
    {
      tipo: 'tabla',
      titulo: 'Bisagras para muebles',
      columnas: ['Bisagra', 'Cómo es', 'Uso'],
      filas: [
        ['[[De libro|bisagra-libro]]', 'Dos hojas unidas por un eje; se embute en rebajes del canto', 'Puertas de madera maciza, cajas, muebles clásicos'],
        ['[[De cazoleta|bisagra-cazoleta]]', 'Una copa embutida en la puerta y un brazo que se atornilla a una placa en el lateral', 'Muebles de cocina y de tablero; se regula en tres sentidos'],
        ['[[De piano|bisagra-piano]]', 'Larga y continua; reparte la carga en todo el largo', 'Tapas de baúles, tapas abatibles, escritorios'],
        ['De mariposa y decorativas', 'Se atornillan por fuera, sin rebaje', 'Muebles rústicos, cajas'],
        ['De pivote', 'Un eje arriba y otro abajo de la puerta', 'Puertas que giran sin bisagra a la vista'],
        ['Invisible', 'Dos cuerpos embutidos en los cantos, unidos por brazos', 'Puertas y tapas que deben verse limpias'],
        ['De vidrio', 'Pinzas o copas para vidrio, sin marco de madera', 'Vitrinas con puertas de vidrio templado'],
      ],
    },

    { tipo: 'h2', texto: 'Bisagra de libro' },
    { tipo: 'p', texto: 'Se embute en un rebaje poco profundo en el canto de la puerta y del mueble. La profundidad de los dos rebajes, sumada, fija la separación entre la puerta y el mueble.' },
    {
      tipo: 'pasos',
      items: [
        'Marca la posición sobre la puerta: en general, a una distancia del borde superior e inferior parecida al ancho del travesaño, o a un sexto o un séptimo de la altura.',
        'Apoya la bisagra y traza su contorno con una cuchilla. Marca la profundidad con el [[gramil]]: el espesor de una hoja, para que el eje sobresalga del canto.',
        'Vacía el rebaje con el formón o con la fresadora y una guía, y comprueba que la hoja entre al ras.',
        'Atornilla la bisagra a la puerta con un solo tornillo por hoja, presenta la puerta y marca las posiciones en el mueble.',
        'Rebaja el mueble, cuelga la puerta y prueba. Cuando todo cierre bien, pon el resto de los tornillos.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Pretaladra con una broca centradora para que el tornillo entre centrado en el agujero de la bisagra: si queda corrido, arrastra la bisagra al apretar y la puerta se desplaza.' },

    { tipo: 'h2', texto: 'Bisagra de cazoleta' },
    { tipo: 'p', texto: 'Es la bisagra de casi todos los muebles de cocina. La copa entra en un agujero ciego en la puerta y el brazo se engancha en una placa atornillada al lateral. Unos tornillos de regulación mueven la puerta hacia los costados, hacia arriba o abajo y hacia adentro o afuera, para alinearla después de colgada.' },
    { tipo: 'figura', id: 'cazoleta-montaje', pie: 'Vistas desde arriba. Según el codo del brazo, la misma bisagra coloca la puerta delante del lateral, compartiendo el lateral con otra puerta o dentro del mueble.' },
    {
      tipo: 'datos',
      items: [
        ['Agujero de la copa', '≈ 35 mm de diámetro, ≈ 12 – 13 mm de profundidad'],
        ['Distancia al canto', '≈ 3 – 6 mm entre el agujero y el canto de la puerta, según cuánto tape la puerta'],
        ['Apertura', '≈ 95 – 110° la común; hay modelos de 155 – 170°'],
        ['Cuántas', 'Dos hasta ≈ 90 cm de altura; tres o más en puertas más altas o pesadas'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las medidas de la copa, la distancia al canto y el número de bisagras dependen del fabricante, del espesor y del peso de la puerta. Usa la plantilla y la tabla de cada marca.' },
    { tipo: 'p', texto: 'El agujero de la copa se hace con una broca de fondo plano de 35 mm, en el taladro de columna o con una guía. Los muebles de tablero suelen usar el [[sistema 32|sistema-32]], con filas de agujeros cada 32 mm para placas, estantes y herrajes.' },

    { tipo: 'h2', texto: 'Colocación' },
    {
      tipo: 'lista',
      items: [
        '**Puerta superpuesta:** tapa el canto del lateral. Es la más fácil de ajustar y la más común en cocinas.',
        '**Puerta embutida:** queda dentro del mueble, al ras del frente. Se ve más fina, pero exige un mueble a escuadra y holguras parejas de ≈ 2 mm.',
        '**Carga:** las bisagras resisten mejor cerca de los extremos de la puerta. El peso de la puerta tira de la de arriba hacia afuera.',
        '**Cierre:** muchas bisagras de cazoleta llevan cierre suave incorporado. Ver [Cerraduras y cierres](#/herrajes/cierres).',
      ],
    },
  ],
}

export default {
  actualizado: '2026-10-30',
  relacionados: ['diseno/armarios', 'madera/tableros', 'herrajes/tornillos', 'uniones/clavijas-galletas'],
  bloques: [
    { tipo: 'p', texto: 'Un mueble que se arma sin cola se puede transportar plano, desarmar para una mudanza y reparar cambiando una pieza. Los herrajes desmontables lo hacen posible, sobre todo en tableros, donde las uniones tradicionales de madera maciza no funcionan bien.' },

    { tipo: 'h2', texto: 'Los más usados' },
    { tipo: 'figura', id: 'herrajes-desmontables', pie: 'Secciones de un estante unido a un lateral. La excéntrica gira y tira de la cabeza del perno; el confirmat rosca en el canto del estante; la tuerca de barril recibe un perno que atraviesa el lateral.' },
    {
      tipo: 'tabla',
      titulo: 'Herrajes desmontables',
      columnas: ['Herraje', 'Cómo funciona', 'Uso'],
      filas: [
        ['[[Excéntrica|excentrica]]', 'Un perno en el lateral y una leva en el estante: media vuelta de la leva atrapa la cabeza del perno y aprieta la unión', 'Muebles de tablero de 16 – 19 mm; no se ve desde afuera'],
        ['[[Confirmat|confirmat]]', 'Tornillo grueso que atraviesa el lateral y rosca en el canto del otro tablero', 'Cascos de tablero; rápido y firme, la cabeza queda a la vista'],
        ['Perno y [[tuerca de barril|tuerca-barril]]', 'Un perno atraviesa una pieza y rosca en un cilindro metido de costado en la otra', 'Camas, mesas y bancos de madera maciza'],
        ['Perno e inserto', 'Un perno rosca en un [[inserto roscado|inserto-roscado]] fijado en la madera', 'Patas atornilladas, uniones que se desarman a menudo'],
        ['Herraje de cama', 'Dos placas que se enganchan en ranuras', 'Unir largueros y cabeceros sin tornillos a la vista'],
        ['Placa de esquina para patas', 'Escuadra metálica en los faldones y un tornillo doble a la pata', 'Mesas con patas desmontables'],
      ],
    },

    { tipo: 'h2', texto: 'La excéntrica' },
    {
      tipo: 'pasos',
      items: [
        'Taladra el alojamiento de la leva en la cara del estante, con una broca de fondo plano, a la distancia del canto que indique el fabricante.',
        'Taladra en el canto del estante un agujero que llegue hasta el alojamiento, para el paso del perno.',
        'Taladra el lateral y enrosca el perno, hasta el tope.',
        'Mete la leva con la abertura hacia el canto, presenta el estante y gira la leva media vuelta con un destornillador hasta que apriete.',
      ],
    },
    {
      tipo: 'datos',
      items: [
        ['Leva habitual', '≈ 15 mm de diámetro'],
        ['Distancia del canto', '≈ 24 o 34 mm, según el modelo'],
        ['Tablero', 'Hay levas para cada espesor: la profundidad del alojamiento cambia'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las medidas cambian entre fabricantes y modelos. Usa la ficha y, mejor aún, una plantilla de taladrado de la misma marca que los herrajes.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Combina las excéntricas con clavijas de madera, sin cola o encoladas solo en una pieza. Las clavijas alinean y soportan el peso; la excéntrica solo mantiene la unión cerrada. Ver [Clavijas, galletas y espigas planas](#/uniones/clavijas-galletas).' },

    { tipo: 'h2', texto: 'El confirmat' },
    { tipo: 'p', texto: 'Se pone con una broca escalonada que hace en una pasada el agujero de paso en el lateral, el piloto en el canto del otro tablero y el avellanado. El más común mide 7 × 50 mm. Agarra mucho mejor en el canto de un tablero que un tornillo común, pero solo admite unos pocos desarmes: cada vez que se saca, la rosca del tablero se gasta.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'El diámetro del piloto y del agujero de paso depende del modelo de confirmat. Comprueba la broca recomendada y prueba en un recorte del mismo tablero.' },

    { tipo: 'h2', texto: 'En madera maciza' },
    { tipo: 'p', texto: 'Para camas, mesas grandes y bancos, el perno con tuerca de barril es la opción clásica: el perno entra por un agujero en el poste o en la pata y rosca en una tuerca cilíndrica metida en un agujero cruzado del larguero. Aprieta mucho y se puede desarmar sin desgaste. La tuerca necesita una distancia mínima a la testa del larguero para que la madera no se rompa al apretar.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'La madera se contrae con el tiempo y los pernos se aflojan. Revisa y aprieta los herrajes de camas y mesas una o dos veces al año.' },
  ],
}

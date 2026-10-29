export default {
  actualizado: '2026-10-29',
  relacionados: ['madera/tableros', 'madera/movimiento', 'chapeado/chapeado-prensa', 'madera/chapas'],
  bloques: [
    { tipo: 'p', texto: 'El soporte es el tablero sobre el que se pega la chapa. Todo lo que le pase al soporte se verá en la superficie: si se mueve, la chapa se raja; si no es plano, las ondas se notan con la luz; si tiene poros o marcas, terminan apareciendo a través de la chapa con el tiempo.' },

    { tipo: 'h2', texto: 'Qué tablero usar' },
    {
      tipo: 'tabla',
      titulo: 'Soportes para chapear',
      columnas: ['Soporte', 'Ventajas', 'Cuidados'],
      filas: [
        ['[[MDF|mdf]]', 'Plano, liso, sin veta ni movimiento; el más usado', 'Pesado; los cantos absorben mucha cola y se chapean o se tapan con madera maciza'],
        ['[[Contrachapado|contrachapado]]', 'Liviano y resistente; sostiene bien los tornillos', 'Su chapa exterior puede marcarse a través de la chapa fina; elegir uno de cara lisa'],
        ['[[Aglomerado|aglomerado]]', 'Barato y estable', 'Cantos frágiles; superficie algo porosa'],
        ['[[Alistonado|alistonado]]', 'Liviano y fuerte', 'Necesita una chapa intermedia cruzada para que no se marquen los listones'],
        ['Madera maciza', 'Tradicional en muebles antiguos', 'Se mueve con la humedad: piezas estrechas, bien secas y con la chapa en la misma dirección de la veta'],
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Sobre madera maciza ancha, la chapa termina rajándose cuando el soporte encoge. Por eso los muebles antiguos chapados sobre macizo muestran grietas finas a lo largo de la veta.' },

    { tipo: 'h2', texto: 'Compensar las dos caras' },
    { tipo: 'figura', id: 'soporte-compensado', pie: 'Secciones con los espesores exagerados. Al secarse, la cola y la chapa tiran de la cara del tablero.' },
    {
      tipo: 'lista',
      items: [
        '**Regla básica:** todo tablero chapado en una cara se chapea también en la otra, con una chapa de espesor y dureza parecidos, al mismo tiempo y con la misma cola. Así las tensiones se equilibran.',
        '**[[Contrachapa|contrachapa]]:** la chapa de la cara que no se ve puede ser de una especie más barata, siempre que sea parecida en espesor y densidad.',
        '**Dirección:** las dos chapas, la de la cara y la de atrás, van con la veta en la misma dirección.',
        '**Sobre contrachapado:** la veta de la chapa se coloca cruzada a la de la cara del tablero. Si van en la misma dirección, las grietas finas de la cara del contrachapado pueden copiarse en la chapa.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Un tablero chapado que va fijado a una estructura rígida, como un fondo atornillado a un marco, se puede chapear de una sola cara. Uno suelto, como una puerta o una tapa, siempre de las dos.' },

    { tipo: 'h2', texto: 'Preparar el soporte' },
    {
      tipo: 'pasos',
      items: [
        'Corta el soporte a medida final o con un margen pequeño, según cómo se vayan a terminar los cantos.',
        'Si los cantos van con madera maciza, pégala antes de chapear y llévala a ras de las caras: la chapa la cubre y la junta no se ve.',
        'Comprueba que esté plano con una regla en varias direcciones. Los resaltos se lijan; los huecos se rellenan con masilla dura y se lijan.',
        'Lija toda la superficie con grano 80 – 120 para abrir el poro y quitar el brillo de fábrica del MDF.',
        'Aspira y limpia el polvo justo antes de encolar.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los fabricantes de cola recomiendan a veces un grano de lija o un tratamiento previo del soporte. Revisa la ficha técnica de la cola que vas a usar.' },
  ],
}

export default {
  actualizado: '2026-10-29',
  relacionados: ['uniones/visor', 'construccion/mundo', 'construccion/en-seco', 'diseno/estructura'],
  bloques: [
    { tipo: 'p', texto: 'Las uniones de construcción unen vigas, pilares, cabios y soleras de techos, entramados, pérgolas y galpones. Las piezas son grandes, las cargas también, y las uniones casi siempre trabajan a compresión: una pieza apoya sobre otra. La cola tiene poco papel; las sostienen el encaje, las clavijas, los pernos y los herrajes metálicos.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Una estructura que soporta personas, un techo o nieve debe dimensionarla un profesional según la normativa de cada lugar. Este artículo explica cómo son las uniones, no cómo calcularlas.' },

    { tipo: 'h2', texto: 'Cuatro uniones básicas' },
    { tipo: 'figura', id: 'empalmes-estructura', pie: 'Vistas de costado. Los trazos gruesos son pernos. En la boca de pájaro, la solera se ve de testa.' },
    {
      tipo: 'tabla',
      titulo: 'Uniones de estructura',
      columnas: ['Unión', 'Qué hace', 'Detalles'],
      filas: [
        ['[[Boca de pájaro|boca-pajaro]]', 'Asienta un cabio inclinado sobre la solera', 'Un corte horizontal apoya sobre la solera y uno vertical apoya contra su cara'],
        ['Empalme a media madera', 'Alarga una viga', 'Se ubica sobre un apoyo o se asegura con pernos pasantes'],
        ['Empalme en bisel', 'Alarga una viga con menos material visible', 'Cuanto más largo el bisel, mayor la superficie de contacto'],
        ['Rayo de Júpiter', 'Empalme en bisel con dientes y una cuña central', 'Tradicional; la cuña aprieta el empalme y resiste tracción'],
        ['Caja y espiga de entramado', 'Une pies derechos, soleras y vigas', 'Se asegura con clavijas de madera dura, a menudo tiradas'],
        ['Cola de milano de entramado', 'Une una viga secundaria a una principal', 'Traba contra el tirón; se usa en entramados de suelo'],
        ['Cajeado de apoyo', 'Encastra el extremo de una vigueta en una viga', 'Rebaje poco profundo para que no se desplace'],
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Boca de pájaro:** la profundidad del corte suele limitarse a ≈ 1/3 del canto del cabio, para no debilitarlo.',
        '**Empalmes:** se ubican sobre un apoyo o cerca de él, donde la viga trabaja menos. Un [[empalme]] en el centro de un vano es el lugar más débil.',
        '**Clavijas:** de madera dura y seca, de 20 – 30 mm de diámetro en entramados grandes. La espiga tirada, con el agujero desplazado, aprieta la unión sin prensas.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La profundidad máxima de la boca de pájaro, el largo de los empalmes y el diámetro de clavijas y pernos están regulados en las normas de estructuras de madera de cada país.' },

    { tipo: 'h2', texto: 'Herrajes de estructura' },
    { tipo: 'p', texto: 'En la construcción actual, muchas uniones tradicionales se reemplazan o se refuerzan con piezas metálicas galvanizadas, diseñadas y ensayadas para cada carga:' },
    { tipo: 'figura', id: 'estribo-viga', pie: 'Viga de 70 × 200 mm y vigueta de 45 × 170 mm, a ras por arriba. El estribo se clava a la viga por sus alas y a la vigueta por sus costados.' },
    {
      tipo: 'lista',
      items: [
        '**Estribos:** sostienen vigas que llegan de costado a otra viga, sin cajear.',
        '**Escuadras y placas perforadas:** unen soleras, montantes y cabios.',
        '**Anclajes de pilar:** separan el pie del pilar del suelo y del agua.',
        '**Conectores contra viento:** atan el techo a los muros para que no se levante.',
        '**Tornillos estructurales:** largos y de alta resistencia, reemplazan pernos en muchas uniones.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Usa siempre los clavos o tornillos que indica el fabricante del herraje, en todos sus agujeros. Un herraje con la mitad de los clavos resiste mucho menos que lo que dice su ficha.' },
    { tipo: 'p', texto: 'El [Visor de uniones](#/uniones/visor) muestra cómo encajan la boca de pájaro y el empalme en bisel. En [Construcciones del mundo](#/construccion/mundo) se ve cómo combinan estas uniones distintas tradiciones.' },
  ],
}

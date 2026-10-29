export default {
  actualizado: '2026-10-29',
  relacionados: ['taller/incendios', 'taller/salud-seguridad', 'acabados/pistola', 'acabados/aceites'],
  bloques: [
    { tipo: 'p', texto: 'Los productos de acabado son la parte más química del taller. Sus riesgos son tres: los vapores que se respiran, el fuego y el contacto con la piel y los ojos. Casi todos se evitan con ventilación, protección adecuada y orden.' },

    { tipo: 'h2', texto: 'Lee la ficha' },
    { tipo: 'p', texto: 'Cada producto tiene una [[ficha de datos de seguridad|fds]], que el fabricante o el vendedor deben entregar. Indica qué contiene, qué riesgos tiene, qué protección usar, cómo almacenarlo y qué hacer en caso de accidente. Los pictogramas de la etiqueta son un resumen; la ficha da los detalles.' },

    { tipo: 'h2', texto: 'Vapores' },
    { tipo: 'p', texto: 'Los disolventes de barnices, lacas, tintes y ceras desprenden [[compuestos orgánicos volátiles|cov]]. En poca cantidad producen dolor de cabeza, mareo y náuseas; la exposición repetida durante años puede dañar el sistema nervioso, el hígado y los riñones. Los productos al agua desprenden muchos menos, pero no ninguno.' },
    {
      tipo: 'lista',
      items: [
        '**Ventilación cruzada:** dos aberturas enfrentadas, con un ventilador que saque el aire hacia afuera.',
        '**Los vapores pesan más que el aire:** se acumulan cerca del suelo y en sótanos, donde suele haber estufas y calefones.',
        '**Si sientes el olor fuerte o mareo,** sal al aire libre y ventila antes de seguir.',
      ],
    },

    { tipo: 'h2', texto: 'Protección personal' },
    {
      tipo: 'tabla',
      titulo: 'Qué usar',
      columnas: ['Protección', 'Cuándo', 'Detalle'],
      filas: [
        ['Respirador para vapores orgánicos', 'Barnices, lacas y tintes al disolvente; siempre a pistola', 'Filtros para vapores orgánicos; a pistola, combinados con filtro de partículas'],
        ['Mascarilla de partículas', 'Lijado entre manos y de acabados viejos', 'No sirve contra vapores'],
        ['Guantes de nitrilo', 'Con cualquier producto', 'Los de látex no resisten bien los disolventes'],
        ['Gafas cerradas', 'Al verter, mezclar y pulverizar; con decolorantes', 'Una salpicadura de disolvente o de álcali daña el ojo'],
        ['Ropa de manga larga', 'A pistola y con decolorantes', 'Que no suelte pelusa sobre el acabado'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Cambia los filtros del respirador según indique el fabricante, o antes si notas el olor del producto a través de ellos. Los filtros siguen absorbiendo aunque no se usen: guárdalos en una bolsa cerrada.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Los productos de dos componentes con isocianatos pueden causar asma por sensibilización, incluso con poca exposición. A pistola exigen equipos de protección respiratoria especiales: consulta la ficha y, si no tienes el equipo, elige otro producto.' },

    { tipo: 'h2', texto: 'Fuego' },
    { tipo: 'figura', id: 'trapos-aceite', pie: 'Un montón de trapos con aceite secante puede calentarse hasta encenderse. Tendidos de a uno o sumergidos en agua dentro de una lata cerrada, no hay peligro.' },
    {
      tipo: 'lista',
      items: [
        '**[[Autocombustión|autocombustion]]:** los trapos, el papel y el aserrín con aceites secantes, aceite-barniz o barniz al aceite generan calor al curar. Extiéndelos de a uno al aire libre o guárdalos en una lata metálica con agua y tapa hasta desecharlos.',
        '**Llamas y chispas:** nada de estufas, hornallas, cigarrillos ni motores sin protección mientras haya vapores. El piloto de un calefón puede encender los vapores de la habitación.',
        '**Cantidades pequeñas:** ten en el taller solo lo que vas a usar, en envases cerrados.',
        '**Extintor** adecuado para líquidos inflamables, a la vista y cerca de la salida. Ver [Prevención de incendios](#/taller/incendios).',
      ],
    },

    { tipo: 'h2', texto: 'Almacenar y desechar' },
    {
      tipo: 'lista',
      items: [
        '**Envases originales,** bien cerrados y con la etiqueta. Nunca en botellas de bebidas.',
        '**Lugar fresco,** lejos del sol y del calor, en un armario metálico si es posible, y fuera del alcance de los niños.',
        '**Restos:** no los tires por el desagüe ni a la tierra. Deja que los restos pequeños sequen y endurezcan en el envase abierto, al aire libre, y lleva los líquidos y los envases a un punto de recogida de residuos peligrosos.',
        '**Pinturas viejas:** las pinturas antiguas pueden contener plomo. No las lijes en seco ni las quemes: comprueba antes si tienen plomo y usa decapante.',
      ],
    },
  ],
}

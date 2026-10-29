export default {
  actualizado: '2026-10-29',
  relacionados: ['acabados/barnices', 'acabados/aceites', 'madera/defectos', 'madera/propiedades'],
  bloques: [
    { tipo: 'p', texto: 'Al aire libre, la madera sufre cuatro enemigos a la vez: el sol, el agua, los hongos y los insectos. Ningún acabado dura para siempre en el exterior. La protección más eficaz combina una madera adecuada, un diseño que aleje el agua y un acabado que se pueda mantener.' },

    { tipo: 'h2', texto: 'Los enemigos' },
    {
      tipo: 'tabla',
      titulo: 'Qué daña la madera al exterior',
      columnas: ['Agente', 'Qué hace', 'Cómo se combate'],
      filas: [
        ['Sol', 'La luz ultravioleta degrada la superficie: la madera se vuelve gris y las películas se rajan', 'Pigmentos y filtros solares en el acabado'],
        ['Agua', 'Hincha y contrae la madera, abre grietas y levanta las películas', 'Diseño que escurra; testas selladas; acabado'],
        ['Hongos', 'Pudrición, moho y [[azulado]] donde la madera queda húmeda', 'Madera durable o tratada; que seque rápido'],
        ['Insectos', 'Carcomas y termitas que abren galerías', 'Madera durable o tratada; revisar a menudo'],
      ],
    },

    { tipo: 'h2', texto: 'Película o impregnación' },
    { tipo: 'figura', id: 'exterior-agua', pie: 'Secciones con los espesores exagerados. Cuando una película se raja, el agua entra por la grieta y la levanta. Un aceite penetrante no forma película: se gasta. A la derecha, un poste con la testa cortada en pendiente.' },
    {
      tipo: 'tabla',
      titulo: 'Acabados para exterior',
      columnas: ['Acabado', 'Cómo envejece', 'Mantenimiento'],
      filas: [
        ['Aceite para exterior', 'Se gasta y se aclara de forma pareja; no se pela', 'Una mano cada año o dos, solo limpiando'],
        ['[[Lasur|lasur]]', 'Impregnante con pigmento y filtros solares; se gasta despacio', 'Cada dos a cuatro años, sin lijar a fondo'],
        ['Barniz marino', 'Brillo y veta a la vista; cuando se raja, se pela', 'Una mano fina cada año; si se pela, lijar hasta la madera'],
        ['Pintura', 'La que más protege del sol; dura años', 'Repintar cuando se agriete, tras lijar las zonas sueltas'],
        ['Sin acabado', 'Las maderas durables se vuelven gris plata y siguen sanas', 'Ninguno; solo limpiar'],
      ],
      nota: 'Cuanto más pigmento lleva un acabado, más tiempo protege del sol. Los incoloros son los que menos duran al exterior.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los intervalos de mantenimiento son orientativos: dependen mucho de la orientación, del clima y de la altitud. Una cara al sol o expuesta a la lluvia se gasta mucho antes que una a la sombra o bajo techo.' },

    { tipo: 'h2', texto: 'El diseño que aleja el agua' },
    {
      tipo: 'lista',
      items: [
        '**Testas selladas:** la testa absorbe agua como una esponja. Séllala con varias manos de acabado o con un sellador para testas, y protégela con un remate o una tapa.',
        '**Superficies inclinadas:** las tapas de postes, los travesaños y los alféizares deben tener pendiente para que el agua no se acumule.',
        '**[[Goterón|goteron]]:** una ranura bajo el borde de una tapa o un alféizar corta la gota y evita que el agua se deslice hacia la pared o la unión.',
        '**Aristas redondeadas:** una película se mantiene mucho mejor sobre un canto redondeado que sobre un filo.',
        '**Separar del suelo:** los pies y los postes no deben apoyar en la tierra ni en el césped. Un taco o una base metálica deja que sequen.',
        '**Ventilación:** deja separación entre las tablas y detrás de los revestimientos para que el aire las seque.',
        '**Tornillería inoxidable o galvanizada:** el hierro común se oxida, mancha de negro las maderas con taninos y pierde fuerza.',
      ],
    },

    { tipo: 'h2', texto: 'Madera durable y tratada' },
    { tipo: 'p', texto: 'Algunas especies, como la teca, el iroko, la robinia o el alerce rico en duramen, resisten la pudrición por sí mismas, sobre todo en su duramen; la albura de casi todas las especies es poco durable. El pino tratado en autoclave lleva un protector inyectado a presión y dura muchos años, incluso en contacto con el suelo si el tratamiento es el adecuado para ese uso.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La durabilidad natural cambia mucho entre especies y entre piezas. Consulta la clase de durabilidad y la clase de uso del tratamiento cuando compres madera para exterior.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'La madera tratada contiene biocidas. Usa guantes y mascarilla al cortarla y lijarla, no quemes los recortes ni el aserrín, y no la uses en muebles de interior, juguetes ni tablas de cocina.' },
  ],
}

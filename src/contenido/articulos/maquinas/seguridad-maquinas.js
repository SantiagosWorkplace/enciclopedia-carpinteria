export default {
  actualizado: '2026-10-29',
  relacionados: ['electricas/seguridad-electricas', 'maquinas/sierra-mesa', 'maquinas/polvo', 'taller/salud-seguridad'],
  bloques: [
    { tipo: 'p', texto: 'Las máquinas estacionarias tienen motores más potentes que las portátiles y la pieza se lleva hasta la herramienta, con las manos. Eso las hace precisas y productivas, y también responsables de los accidentes más graves del taller: amputaciones en la sierra de mesa, la cepilladora y la tupí. Casi todos se evitan con protectores bien puestos, empujadores y una manera de trabajar que nunca acerque los dedos a la cuchilla.' },

    { tipo: 'h2', texto: 'Antes de encender' },
    {
      tipo: 'pasos',
      items: [
        'Lee el manual y conoce dónde está el **paro de emergencia**.',
        'Comprueba que los protectores, el cuchillo divisor y las guías estén colocados y ajustados.',
        'Revisa la pieza: sin clavos, piedras, nudos sueltos ni grietas que puedan abrirse.',
        'Ten a mano los empujadores, los peines de presión y los soportes de salida que vas a necesitar.',
        'Despeja la mesa y el suelo alrededor: nada de recortes, cables ni virutas donde puedas tropezar.',
        'Conecta la aspiración.',
        'Ponte gafas y protección auditiva; recógete el pelo, las mangas y quítate anillos y relojes.',
      ],
    },

    { tipo: 'h2', texto: 'Mientras trabajas' },
    {
      tipo: 'lista',
      items: [
        '**Manos fuera de la línea de corte.** Usa [[empujadores|empujador]] siempre que la mano tenga que pasar a menos de ≈ 10 – 15 cm de la hoja o la cuchilla.',
        '**Nunca por encima ni por detrás de la hoja** en marcha, ni para quitar un recorte.',
        '**Una pieza a la vez,** apoyada siempre en una guía y en la mesa.',
        '**Piezas pequeñas:** no las trabajes a mano en una máquina grande. Corta la pieza larga y saca la pequeña al final, o usa un carro o una plantilla.',
        '**No uses guantes** en máquinas con piezas que giran: pueden engancharse y arrastrar la mano.',
        '**Apaga y espera** a que todo se detenga antes de ajustar, medir o retirar recortes.',
        '**Una persona por máquina.** Si alguien te ayuda a recibir la pieza, solo debe sostenerla, nunca tirar de ella.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Antes de cambiar una hoja, una cuchilla o una fresa, desconecta la máquina del enchufe o corta su interruptor general. Que el interruptor de marcha esté en apagado no alcanza.' },

    { tipo: 'h2', texto: 'El rechazo' },
    { tipo: 'p', texto: 'En la sierra de mesa, el [[rechazo]] lanza la pieza hacia el operario a gran velocidad. Ocurre cuando la parte de atrás de la hoja, la que sube, atrapa la madera: porque el corte se cierra, porque la pieza se separa de la guía o porque se gira. La mano que empujaba sigue hacia adelante y puede llegar a la hoja.' },
    {
      tipo: 'lista',
      items: [
        'Usa siempre el cuchillo divisor, alineado con la hoja.',
        'Mantén la pieza apoyada contra la guía en todo el recorrido.',
        'No uses al mismo tiempo la guía paralela y la de ingletes en un corte al través: el recorte queda atrapado.',
        'Párate a un costado de la línea de la hoja.',
        'Mantén las hojas afiladas y limpias de resina.',
      ],
    },

    { tipo: 'h2', texto: 'Accesorios de seguridad' },
    { tipo: 'figura', id: 'accesorios-seguridad', pie: 'El empujador y el bloque de empuje, de costado, llevan la pieza hasta el final del corte. El peine de presión, visto desde arriba, tiene los dedos inclinados hacia el avance: deja pasar la pieza y frena su retroceso.' },
    {
      tipo: 'foto', src: 'fotos/maquinas/peine-presion.jpg', ancho: 1000, alto: 750,
      alt: 'Peine de presión de madera fijado a la mesa de una sierra junto a la guía',
      pie: 'Peine de presión fijado a la mesa con un pomo: sus dedos flexibles aprietan la pieza contra la guía.',
      credito: { autor: 'Mitch Barrie', licencia: 'CC BY-SA 2.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/2.0', fuente: 'https://commons.wikimedia.org/wiki/File:Table_saw_featherboard.jpg' },
    },
    {
      tipo: 'tabla',
      titulo: 'Accesorios',
      columnas: ['Accesorio', 'Para qué'],
      filas: [
        ['Empujadores y bloques de empuje', 'Llevar la pieza hasta el final del corte sin acercar las manos'],
        ['Peines de presión', 'Mantener la pieza apretada contra la guía o la mesa'],
        ['Inserto de luz cero', 'Una placa sin hueco alrededor de la hoja: evita que caigan recortes finos y reduce las astillas'],
        ['Carro de corte transversal', 'Cortar al través con la pieza sujeta y las manos lejos de la hoja'],
        ['Soportes de entrada y salida', 'Sostener piezas largas para que no basculen'],
        ['Sistemas de frenado por contacto', 'Algunas sierras detienen la hoja en milisegundos si detectan contacto con la piel'],
      ],
    },

    { tipo: 'h2', texto: 'El taller' },
    {
      tipo: 'lista',
      items: [
        'Deja espacio de entrada y salida en cada máquina para la pieza más larga que vayas a trabajar.',
        'Buena luz, sin sombras sobre la zona de corte.',
        'Suelo antideslizante y limpio de virutas.',
        'Un botiquín visible y un teléfono a mano. Si trabajas solo, que alguien sepa que estás en el taller.',
        'Las máquinas se apagan con llave o interruptor bloqueable si hay niños en la casa.',
      ],
    },
  ],
}

export default {
  actualizado: '2026-10-29',
  relacionados: ['herramientas-manuales/taladros-manuales', 'herrajes/tornillos', 'electricas/bateria-cable', 'maquinas/taladro-columna'],
  bloques: [
    { tipo: 'p', texto: 'Bajo el nombre de "taladro" se venden herramientas muy distintas: el taladro atornillador, el percutor para paredes, el atornillador de impacto y el rotomartillo. Cada una golpea, gira y aprieta de una forma diferente, y elegir la equivocada se paga con tornillos pasados, brocas rotas o agujeros que no avanzan.' },

    { tipo: 'h2', texto: 'Tipos' },
    {
      tipo: 'tabla',
      titulo: 'Qué hace cada uno',
      columnas: ['Herramienta', 'Cómo trabaja', 'Uso principal'],
      filas: [
        ['Taladro atornillador', 'Gira; tiene [[embrague]] regulable y dos velocidades', 'Taladrar madera y metal, atornillar con control'],
        ['Taladro percutor', 'Gira y además vibra con pequeños golpes hacia adelante', 'Ladrillo y hormigón liviano'],
        ['Atornillador de impacto', 'Gira y, cuando encuentra resistencia, da golpes de giro muy rápidos', 'Tornillos largos y grandes, tirafondos, estructura'],
        ['Rotomartillo', 'Un martillo neumático interno golpea la broca con fuerza; portabrocas SDS', 'Hormigón y mampostería; también picar'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Para carpintería, la combinación más útil es un taladro atornillador y un atornillador de impacto de la misma plataforma: uno taladra y el otro atornilla, sin cambiar brocas a cada rato.' },

    { tipo: 'h2', texto: 'Controles del taladro atornillador' },
    { tipo: 'figura', id: 'taladro-atornillador', pie: 'Un taladro atornillador a batería de costado. El embrague y el selector de velocidad se ajustan antes de empezar; el gatillo regula la velocidad mientras se trabaja.' },
    {
      tipo: 'lista',
      items: [
        '**Gatillo:** cuanto más se aprieta, más rápido gira. Empieza siempre despacio.',
        '**Selector de velocidad:** la 1.ª es lenta y con mucha fuerza, para atornillar y para brocas grandes; la 2.ª es rápida, para brocas finas.',
        '**Anillo del embrague:** números del 1 al 20 o más. Con número bajo, el embrague salta enseguida y no deja pasar el tornillo; para taladrar, se pone en la posición del dibujo de la broca, que lo anula.',
        '**Sentido de giro:** un botón cambia de atornillar a desatornillar.',
        '**Portabrocas:** de 10 o 13 mm, sin llave en casi todos los modelos.',
      ],
    },
    { tipo: 'p', texto: 'El [[par de apriete|par]] máximo se indica en N·m. Un taladro atornillador de 18 V suele entregar entre 40 y 80 N·m; un atornillador de impacto, de 150 a más de 200 N·m, aunque los dos valores no se miden igual y no son comparables directamente.' },

    { tipo: 'h2', texto: 'Velocidad según la broca' },
    {
      tipo: 'lista',
      items: [
        '**Brocas finas (hasta ≈ 6 mm):** alta velocidad.',
        '**Brocas medianas y de punta:** velocidad media.',
        '**Pala, Forstner y sierras de copa grandes:** baja velocidad y firmeza. Una broca grande a alta velocidad quema la madera y puede trabarse y retorcer la muñeca.',
        '**En metal:** baja velocidad y, en acero, unas gotas de aceite.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Con brocas grandes, sujeta el taladro con las dos manos y usa la empuñadura lateral si la tiene. Si la broca se traba, el taladro gira con fuerza y puede lastimar la muñeca o golpear la cara.' },

    { tipo: 'h2', texto: 'Atornillar sin pasar el tornillo' },
    {
      tipo: 'pasos',
      items: [
        'Haz el agujero guía y, si hace falta, el de paso y el avellanado. Las medidas están en [Taladros manuales y barrenas](#/herramientas-manuales/taladros-manuales).',
        'Usa la punta exacta para la cabeza del tornillo y mantenla alineada con él.',
        'Pon el embrague en un número bajo y súbelo de a poco hasta que el tornillo quede a ras.',
        'Usa la 1.ª velocidad y aprieta el gatillo de forma progresiva.',
        'En tableros de aglomerado o MDF, deja de apretar en cuanto la cabeza toca la superficie: un giro de más destruye la rosca.',
      ],
    },

    { tipo: 'h2', texto: 'Agujeros precisos' },
    {
      tipo: 'lista',
      items: [
        '**A escuadra:** usa una guía de taladrar o un taco con un agujero recto como plantilla. Para muchos agujeros iguales, un [taladro de columna](#/maquinas/taladro-columna).',
        '**Profundidad:** tope de collarín en la broca o cinta de pintor como marca.',
        '**Sin astillas a la salida:** taco de desecho bien apretado detrás de la pieza.',
        '**Agujeros para clavijas:** con una plantilla de clavijas, que guía la broca a la distancia correcta del canto.',
      ],
    },
  ],
}

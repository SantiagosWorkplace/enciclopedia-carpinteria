export default {
  actualizado: '2026-10-29',
  relacionados: ['maquinas/polvo', 'acabados/aceites', 'acabados/seguridad-acabados', 'taller/almacenaje'],
  bloques: [
    { tipo: 'p', texto: 'Un taller de carpintería reúne todo lo necesario para un incendio: madera, viruta y polvo que arden con facilidad, productos inflamables y máquinas y herramientas que generan calor y chispas. La buena noticia es que casi todos los incendios de taller tienen causas conocidas y fáciles de evitar.' },

    { tipo: 'h2', texto: 'El triángulo del fuego' },
    { tipo: 'figura', id: 'triangulo-fuego', pie: 'Para que haya fuego hacen falta a la vez combustible, oxígeno y calor.' },

    { tipo: 'h2', texto: 'Los trapos con aceite' },
    { tipo: 'p', texto: 'Los aceites secantes, como el de linaza, el de tung y muchos aceites y barnices de acabado, se endurecen al reaccionar con el oxígeno del aire. Esa reacción produce calor. En un trapo arrugado o en una pila de trapos, el calor no se escapa, la temperatura sube y el trapo puede prenderse fuego solo, horas después de usarlo. Es la [[autocombustión|autocombustion]].' },
    {
      tipo: 'pasos',
      items: [
        'Al terminar, extiende los trapos de a uno, sin pliegues, al aire libre o sobre una superficie no combustible, hasta que se sequen y endurezcan del todo.',
        'O sumérgelos en agua dentro de un recipiente metálico con tapa.',
        'Una vez secos y duros, deséchalos según las indicaciones locales para residuos.',
        '**Nunca** los dejes en un tacho de basura, una bolsa, un cajón ni amontonados en el banco.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Esto vale también para el aserrín y el papel de lija empapados de aceite, y para los trapos que se usaron con tintes o barnices al aceite.' },

    { tipo: 'h2', texto: 'Otras causas' },
    {
      tipo: 'lista',
      items: [
        '**Polvo y viruta acumulados:** sobre todo cerca de motores, enchufes y lámparas. Limpia a diario con aspirador.',
        '**Chispas:** las de una amoladora o una soldadura encienden la viruta con facilidad. Trabaja el metal en otro lugar o limpia todo antes.',
        '**Estufas:** nada de estufas de llama abierta o de resistencia a la vista en una zona con polvo o vapores.',
        '**Instalación eléctrica:** enchufes sobrecargados, prolongadores enrollados que se calientan, motores con polvo dentro.',
        '**Colectores de polvo:** un fragmento de metal que entra al tubo puede producir una chispa dentro del filtro.',
        '**Polvo en suspensión:** una nube de polvo fino en un ambiente cerrado puede incluso explotar si encuentra una chispa.',
        '**Fumar:** nunca dentro del taller.',
      ],
    },

    { tipo: 'h2', texto: 'Extintores' },
    {
      tipo: 'tabla',
      titulo: 'Clases de fuego',
      columnas: ['Clase', 'Qué arde', 'Extintor adecuado'],
      filas: [
        ['A', 'Sólidos: madera, papel, telas', 'Polvo ABC, agua'],
        ['B', 'Líquidos inflamables: solventes, barnices', 'Polvo ABC, CO₂, espuma'],
        ['Equipos eléctricos', 'Máquinas y tableros con tensión', 'CO₂ o polvo; nunca agua'],
      ],
      nota: 'La letra que identifica los fuegos eléctricos cambia según el país. Un extintor de polvo ABC de 5 – 6 kg cubre la mayoría de las situaciones de un taller.',
    },
    {
      tipo: 'lista',
      items: [
        'Cuelga el extintor junto a la salida, a la vista y sin obstáculos.',
        'Aprende a usarlo antes de necesitarlo y revísalo según indique el fabricante.',
        'Instala un detector: de calor mejor que de humo en la zona de máquinas, porque el polvo dispara los detectores de humo.',
        'Mantén despejado el camino a la salida.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Si el fuego no se apaga en los primeros segundos o el humo llena el lugar, sal, cierra la puerta y llama a los bomberos. Ningún mueble vale el riesgo.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La clasificación de los fuegos, los tipos de extintor obligatorios y su mantenimiento están regulados por la normativa de cada país.' },
  ],
}

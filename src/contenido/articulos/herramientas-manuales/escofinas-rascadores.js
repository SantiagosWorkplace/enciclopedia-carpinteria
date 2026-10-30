export default {
  actualizado: '2026-10-28',
  relacionados: ['herramientas-manuales/cepillos', 'acabados/preparacion', 'talla/bulto', 'herramientas-manuales/afilado'],
  bloques: [
    { tipo: 'p', texto: 'Escofinas y limas dan forma a curvas y volúmenes donde el cepillo no llega. La cuchilla de rascar hace lo contrario: deja lisas, sin repelos, las superficies donde el cepillo arranca fibras. Juntas cubren buena parte del trabajo entre el corte y el acabado.' },

    { tipo: 'h2', texto: 'Escofinas y limas' },
    {
      tipo: 'foto', src: 'fotos/herramientas-manuales/escofina.jpg', ancho: 1000, alto: 750,
      alt: 'Escofina con mango de madera apoyada sobre un listón',
      pie: 'Escofina con mango de madera: sus dientes sueltos arrancan madera rápido y dejan una superficie áspera.',
      credito: { autor: 'Luke Milburn', licencia: 'CC BY 2.0', licenciaUrl: 'https://creativecommons.org/licenses/by/2.0', fuente: 'https://commons.wikimedia.org/wiki/File:Rasp_with_wooden_handle.jpg' },
    },
    {
      tipo: 'lista',
      items: [
        '**Escofina:** dientes individuales, levantados uno a uno con un punzón. Quita material rápido y deja una superficie áspera. Las escofinas picadas a mano, con dientes en posiciones irregulares, cortan más suave y no dejan surcos.',
        '**Lima:** filas de dientes en línea, en picado simple o doble. Más lenta y fina que la escofina; sirve para afinar después.',
        '**Raspador de hoja perforada:** una lámina con muchos dientes pequeños que deja pasar la viruta. Rápido para desbastes.',
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Formas y grados',
      columnas: ['Forma', 'Uso'],
      filas: [
        ['Plana', 'Superficies planas y curvas convexas'],
        ['Media caña', 'La cara plana para convexas, la curva para cóncavas'],
        ['Redonda o cola de rata', 'Agujeros y curvas cerradas'],
        ['Triangular', 'Ángulos interiores'],
      ],
      nota: 'Según el tamaño de los dientes se habla de grado bastardo (grueso), entrefino y fino. Conviene tener al menos un grueso y un fino de media caña.',
    },
    {
      tipo: 'pasos',
      items: [
        'Sujeta la pieza firme y a la altura del codo o algo más baja.',
        'Empuja la escofina con las dos manos: una en el mango y otra en la punta. Cortan solo al avanzar; no presiones al volver.',
        'Trabaja en diagonal a la veta, cruzando las pasadas, para no hacer surcos.',
        'Pasa a una lima o escofina más fina cuando la forma esté casi lista, y termina con lija o cuchilla de rascar.',
        'Limpia los dientes a menudo con un cepillo de alambre o una carda.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Usa siempre escofinas y limas con mango. La espiga de una lima sin mango puede clavarse en la palma de la mano.' },

    { tipo: 'h2', texto: 'La cuchilla de rascar' },
    { tipo: 'p', texto: 'La [[cuchilla de rascar|rascador]] es una plancha de acero de 0,5 a 1 mm de espesor, con una pequeña rebaba vuelta en el canto. Esa rebaba funciona como un cepillo diminuto: saca virutas finísimas y, como corta casi sin ángulo de ataque, no levanta las fibras ni en las maderas de veta más rebelde.' },
    {
      tipo: 'lista',
      items: [
        '**Rectangular:** para superficies planas.',
        '**De cuello de cisne:** con curvas de distintos radios, para molduras y cóncavas.',
        '**Cepillo rascador:** la cuchilla montada en un cuerpo con mangos, para superficies grandes sin que se calienten los dedos.',
      ],
    },
    { tipo: 'h3', texto: 'Preparar la rebaba' },
    {
      tipo: 'pasos',
      items: [
        'Lima el canto plano y a escuadra con una lima plana fina, sujetando la cuchilla en el tornillo de banco.',
        'Pule el canto y las caras junto al canto sobre una piedra fina hasta quitar las marcas de la lima.',
        'Con la cuchilla plana sobre el banco, pasa un bruñidor de acero duro sobre la cara, junto al canto, con presión firme: estira el acero hacia afuera.',
        'Con la cuchilla en el tornillo, pasa el bruñidor por el canto, primero a 90° y luego inclinándolo unos pocos grados, para volcar la rebaba hacia la cara.',
        'Repite en los cuatro bordes largos: una cuchilla tiene cuatro filos.',
      ],
    },
    { tipo: 'figura', id: 'rebaba-rascador', pie: 'Secciones del canto, muy ampliadas. La rebaba es un gancho diminuto que se vuelca hacia la cara con el bruñidor; con ella, la cuchilla saca virutas en vez de polvo.' },
    { tipo: 'h3', texto: 'Cómo se usa' },
    {
      tipo: 'lista',
      items: [
        'Sostén la cuchilla con las dos manos y cúrvala ligeramente con los pulgares por detrás.',
        'Inclínala hacia adelante, a unos 45 – 60°, y empújala. Busca el ángulo en que salen virutas, no polvo.',
        'Si solo hace polvo, la rebaba se gastó: vuelve a bruñirla, o a prepararla desde el limado si ya no responde.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'La cuchilla se calienta con el roce y puede quemar los pulgares en trabajos largos. Una tira de cinta o un imán pegado detrás ayuda; o usa un cepillo rascador.' },
    { tipo: 'p', texto: 'Una superficie terminada con cuchilla de rascar suele necesitar muy poca lija antes del acabado. Ver [Preparar la superficie](#/acabados/preparacion).' },
  ],
}

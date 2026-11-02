export default {
  actualizado: '2026-10-29',
  relacionados: ['acabados/lacas-pintura', 'acabados/barnices', 'acabados/seguridad-acabados', 'maquinas/polvo'],
  bloques: [
    { tipo: 'p', texto: 'La pistola pulveriza el acabado en gotas finísimas que caen sobre la pieza y se unen en una película pareja, sin marcas de pincel. Es rápida en superficies grandes y llega a rincones y tallas. A cambio, exige preparar bien el producto, ventilar y practicar la técnica.' },

    { tipo: 'h2', texto: 'Equipos' },
    {
      tipo: 'tabla',
      titulo: 'Tipos de pistola',
      columnas: ['Sistema', 'Cómo funciona', 'Ventajas e inconvenientes'],
      filas: [
        ['Convencional', 'Aire a presión alta pulveriza el producto', 'Acabado muy fino; mucha niebla, se pierde gran parte del producto'],
        ['[[HVLP|hvlp]]', 'Mucho aire a baja presión, de una turbina o de un compresor', 'Mucha menos niebla y menos desperdicio; la más usada en talleres pequeños'],
        ['[[Airless|airless]]', 'Una bomba empuja el producto a presión muy alta por una boquilla diminuta, sin aire', 'Muy rápida con pinturas espesas y superficies grandes; acabado menos fino'],
        ['Eléctrica de mano', 'Un pistón pulveriza el producto', 'Barata; sirve para pinturas y barnices, con acabado más basto'],
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'El chorro de una airless puede atravesar la piel e inyectar pintura bajo ella. Parece un pinchazo sin importancia, pero es una urgencia médica: acude al hospital de inmediato. Nunca pongas la mano delante de la boquilla.' },

    { tipo: 'h2', texto: 'Preparar el producto' },
    {
      tipo: 'lista',
      items: [
        '**Diluir:** casi todos los productos se diluyen para la pistola, con el disolvente que indique el fabricante. La medida es la viscosidad, que se comprueba con una copa de viscosidad: se cuentan los segundos que tarda en vaciarse.',
        '**Colar:** pasa siempre el producto por un filtro de pintura antes de cargar la pistola. Un grumo tapa la boquilla.',
        '**Boquilla:** se elige según el producto: más fina para tintes y lacas, más gruesa para fondos y esmaltes.',
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Boquillas habituales en HVLP',
      columnas: ['Producto', 'Diámetro de la boquilla'],
      filas: [
        ['Tintes y lacas finas', '≈ 1,0 – 1,4 mm'],
        ['Barnices y esmaltes', '≈ 1,4 – 1,8 mm'],
        ['Fondos e imprimaciones', '≈ 1,8 – 2,5 mm'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los diámetros, la presión y la dilución dependen de la pistola y del producto. La ficha técnica del acabado suele indicar la boquilla, la presión y la viscosidad recomendadas.' },

    { tipo: 'h2', texto: 'Ajustar' },
    { tipo: 'p', texto: 'Antes de pintar, prueba sobre un cartón. El abanico debe ser un óvalo de bordes suaves, con el producto repartido de forma pareja. Si se carga en el centro, sube la presión del aire o diluye más. Si se carga en los extremos y el centro queda flaco, baja la presión del aire o aumenta el caudal de producto.' },

    { tipo: 'h2', texto: 'Técnica' },
    {
      tipo: 'foto', src: 'fotos/acabados/acabado-pistola.jpg', ancho: 1000, alto: 1046,
      alt: 'Operario con capucha aplicando un acabado con pistola sobre vigas de madera',
      pie: 'Acabado a pistola sobre las vigas de una estructura de madera, con el operario cubierto de pies a cabeza.',
      credito: { autor: 'Vermont Timber Works Inc.', licencia: 'CC BY-SA 3.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/3.0', fuente: 'https://commons.wikimedia.org/wiki/File:Worker_Applying_a_Wood_Finish.jpg' },
    },
    { tipo: 'figura', id: 'pistola-pasadas', pie: 'A la izquierda, la pistola de costado: siempre perpendicular y a la misma distancia. A la derecha, la pieza vista de frente con las pasadas.' },
    {
      tipo: 'pasos',
      items: [
        'Sostén la pistola perpendicular a la superficie, a una distancia constante: en general ≈ 15 – 20 cm con HVLP y ≈ 20 – 25 cm con una convencional.',
        'Mueve todo el brazo, no la muñeca. Si la muñeca gira, la pistola dibuja un arco y la película queda más gruesa en el centro.',
        'Aprieta el gatillo antes de llegar a la pieza y suéltalo después de salir. Así la pasada empieza y termina pareja.',
        'Solapa cada pasada la mitad de la anterior, a velocidad constante.',
        'Pinta primero los cantos y los rincones, después las superficies grandes.',
        'En superficies verticales, aplica manos finas: una mano gruesa chorrea.',
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Defectos frecuentes',
      columnas: ['Defecto', 'Causa probable'],
      filas: [
        ['[[Piel de naranja|piel-naranja]]', 'Producto muy espeso, poca presión o pistola muy lejos'],
        ['Chorreados', 'Pistola muy cerca, pasada lenta o demasiado producto'],
        ['Superficie áspera, seca', 'Pistola muy lejos o demasiada presión: las gotas llegan secas'],
        ['Película lechosa', 'Humedad alta con lacas de secado rápido'],
      ],
    },

    { tipo: 'h2', texto: 'Limpieza y seguridad' },
    { tipo: 'p', texto: 'Limpia la pistola en cuanto termines, con el disolvente del producto: desarma la boquilla y la aguja y pásales un cepillo. Un resto seco arruina el abanico de la próxima vez.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'La niebla de pulverizado es inflamable y se respira. Pinta con extracción o al aire libre, con respirador para vapores orgánicos y partículas, lejos de motores, estufas y llamas. Ver [Seguridad con productos de acabado](#/acabados/seguridad-acabados).' },
  ],
}

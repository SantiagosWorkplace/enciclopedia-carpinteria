export default {
  actualizado: '2026-10-29',
  relacionados: ['taller/planificar', 'electricas/seguridad-electricas', 'taller/incendios', 'acabados/preparacion'],
  bloques: [
    { tipo: 'p', texto: 'Un taller con pocos enchufes termina lleno de prolongadores, y uno con poca luz, lleno de errores. Planificar la instalación eléctrica y la iluminación desde el principio hace el trabajo más seguro y más preciso.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'La instalación eléctrica debe hacerla o revisarla un electricista matriculado, siguiendo el reglamento de tu país. Este artículo explica qué pedir, no cómo hacerlo.' },

    { tipo: 'h2', texto: 'Circuitos y tomas' },
    {
      tipo: 'lista',
      items: [
        '**Protección:** todo el taller detrás de un interruptor diferencial de 30 mA y de interruptores automáticos adecuados a cada circuito.',
        '**Circuitos separados:** uno para iluminación, uno o más para tomas de uso general y uno propio para cada máquina grande (sierra de mesa, regruesadora, colector de polvo).',
        '**Tomas:** muchas y bien repartidas, a ≈ 110 – 120 cm del suelo para que queden por encima del banco y lejos del polvo del suelo. Una toma doble cada ≈ 1,5 – 2 m de pared.',
        '**Desde el techo:** un enrollacables o una toma colgante sobre la zona central evita cables cruzando el suelo.',
        '**Paro general:** un interruptor accesible que corte todas las máquinas, útil también para que no las usen los niños.',
      ],
    },
    {
      tipo: 'tabla',
      titulo: 'Potencias habituales',
      columnas: ['Equipo', 'Potencia aproximada'],
      filas: [
        ['Herramientas portátiles', '500 – 2300 W'],
        ['Sierra de mesa de taller', '1,5 – 3 kW'],
        ['Regruesadora', '1,5 – 3 kW'],
        ['Colector de polvo', '0,75 – 2,2 kW'],
        ['Tupí y escuadradora profesionales', '3 – 7 kW, a menudo trifásicas'],
      ],
      nota: 'Los motores de inducción consumen al arrancar varias veces su potencia nominal. Es lo que hace saltar las protecciones si el circuito está justo.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las máquinas industriales suelen ser trifásicas, de 380 – 400 V, y no se pueden conectar a la red monofásica de una vivienda sin un convertidor. Comprueba la alimentación antes de comprar una máquina usada.' },

    { tipo: 'h2', texto: 'Iluminación' },
    { tipo: 'figura', id: 'iluminacion-taller', pie: 'Corte de un taller. Varias luminarias reparten la luz general sin sombras duras, y una lámpara de trabajo ilumina el banco desde un costado para que la mano no tape la pieza.' },
    {
      tipo: 'tabla',
      titulo: 'Niveles de luz recomendados',
      columnas: ['Zona', 'Iluminación'],
      filas: [
        ['General del taller', '≈ 300 – 500 lux'],
        ['Banco y máquinas', '≈ 750 – 1000 lux'],
        ['Acabado y revisión de superficies', '≈ 1000 lux o más, con buena reproducción del color'],
      ],
    },
    {
      tipo: 'lista',
      items: [
        '**Luz general pareja,** con muchas luminarias LED distribuidas, para evitar sombras duras.',
        '**Luz de trabajo** dirigida en el banco y en cada máquina, desde un costado para que la mano no tape la pieza.',
        '**Color:** ≈ 4000 – 5000 K, luz neutra. Para teñir y acabar, lámparas con índice de reproducción cromática (IRC) de 90 o más: muestran los colores reales de la madera.',
        '**Luz rasante:** una lámpara portátil casi paralela a la superficie revela rayas de lija, gotas y marcas que con luz cenital no se ven.',
        '**Luz natural:** una ventana o claraboya ayuda, pero el sol directo sobre las máquinas encandila y calienta los acabados.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Los tubos fluorescentes antiguos parpadean al ritmo de la red y pueden hacer que una hoja que gira parezca quieta. Las luminarias LED de buena calidad, sin parpadeo, eliminan ese riesgo.' },
  ],
}

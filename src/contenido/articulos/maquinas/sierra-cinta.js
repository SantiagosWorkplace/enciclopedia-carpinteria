export default {
  actualizado: '2026-10-29',
  relacionados: ['maquinas/seguridad-maquinas', 'electricas/sierras-portatiles', 'madera/chapas', 'curvado/laminado'],
  bloques: [
    { tipo: 'p', texto: 'La sierra de cinta es una hoja continua que gira sobre dos volantes y baja siempre hacia la mesa. Como empuja la pieza contra la mesa y no hacia el operario, casi no produce rechazo. Corta curvas, piezas gruesas y, sobre todo, permite [[reaserrar|reaserrado]] tablas: abrirlas por el espesor para hacer tablas más finas o chapas propias.' },

    { tipo: 'h2', texto: 'Partes' },
    { tipo: 'figura', id: 'sierra-cinta', pie: 'Sierra de cinta de frente, sin las puertas de los volantes. La hoja corta en el tramo derecho, bajando.' },
    {
      tipo: 'datos',
      items: [
        ['Tamaño', 'Se indica por el diámetro de los volantes: de 250 – 300 mm en las pequeñas a 400 – 600 mm en las de taller.'],
        ['Garganta', 'Distancia entre la hoja y el bastidor: el ancho máximo que se puede cortar.'],
        ['Altura de corte', 'Espesor máximo de la pieza bajo la guía superior; define cuánto se puede reaserrar.'],
      ],
    },

    { tipo: 'h2', texto: 'Elegir la hoja' },
    {
      tipo: 'tabla',
      titulo: 'Ancho de la hoja y radio mínimo',
      columnas: ['Ancho de la hoja', 'Radio mínimo aproximado', 'Uso'],
      filas: [
        ['3 mm', '≈ 3 mm', 'Curvas muy cerradas y calado'],
        ['6 mm', '≈ 15 mm', 'Curvas en general'],
        ['10 mm', '≈ 30 mm', 'Curvas amplias y uso general'],
        ['13 mm', '≈ 60 mm', 'Cortes rectos y curvas suaves'],
        ['19 – 25 mm', 'Solo rectos', 'Reaserrado'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los radios mínimos son orientativos y dependen del triscado de la hoja. Consulta la tabla del fabricante.' },
    {
      tipo: 'lista',
      items: [
        '**Dientes:** finos (≈ 10 – 14 por pulgada) para piezas delgadas; gruesos (≈ 3 – 6 por pulgada) para piezas gruesas y reaserrado. Al menos 3 dientes deben estar siempre dentro de la madera.',
        '**Forma del diente:** regular para cortes finos; espaciada o de gancho para cortes rápidos en piezas gruesas.',
        '**Material:** de acero al carbono para uso general; bimetálicas o con dientes de metal duro para reaserrar mucho o maderas duras.',
      ],
    },

    { tipo: 'h2', texto: 'Ajustar la sierra' },
    {
      tipo: 'pasos',
      items: [
        'Con la máquina desconectada, coloca la hoja con los dientes hacia ti y apuntando hacia abajo.',
        'Tensa la hoja según la escala de la máquina para ese ancho, o hasta que al empujarla de costado ceda solo unos milímetros.',
        'Gira el volante superior con la mano y ajusta su inclinación hasta que la hoja corra centrada en la banda del volante.',
        'Acerca las guías laterales hasta casi tocar la hoja, justo por detrás de los dientes, y el rodamiento trasero a una fracción de milímetro de su lomo.',
        'Baja la guía superior a 5 – 10 mm por encima de la pieza en cada corte.',
      ],
    },

    { tipo: 'h2', texto: 'Cortar curvas' },
    {
      tipo: 'lista',
      items: [
        'Traza la curva y planifica el orden de los cortes para no quedar encerrado.',
        'En curvas cerradas, haz primero **cortes de alivio** desde el borde hasta casi la línea: el desperdicio se va soltando en trozos y la hoja no se traba.',
        'Corta con avance suave y deja la línea en la pieza para lijar después.',
        'Evita retroceder en curvas largas: la hoja puede salirse de los volantes. Si debes hacerlo, apaga y espera.',
      ],
    },

    { tipo: 'h2', texto: 'Reaserrar' },
    { tipo: 'p', texto: 'Reaserrar es abrir una tabla por su espesor. Así se obtienen tablas finas para cajas o fondos, pares de tablas con veta en espejo y chapas de 2 a 3 mm.' },
    {
      tipo: 'pasos',
      items: [
        'Usa una hoja ancha y de dientes gruesos, bien afilada.',
        'Corrige la [[deriva]]: traza una línea paralela al canto en un recorte, córtala a pulso siguiendo la línea y observa con qué ángulo tienes que avanzar. Ajusta la guía a ese ángulo.',
        'Apoya la tabla con un canto recto contra una guía alta y la cara bien apoyada.',
        'Avanza despacio y parejo, con un empujador al final del corte.',
        'Deja las tablas reaserradas unos días con separadores antes de cepillarlas: al liberar tensiones, pueden curvarse.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Aunque casi no rechaza, la hoja de una sierra de cinta corta dedos con la misma facilidad que la madera. Nunca pongas la mano delante de la hoja, ni siquiera con la máquina frenando.' },
  ],
}

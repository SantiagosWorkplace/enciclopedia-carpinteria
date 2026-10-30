export default {
  actualizado: '2026-10-30',
  relacionados: ['diseno/armarios', 'herrajes/cierres', 'uniones/ranuras-rebajos', 'herrajes/tornillos'],
  bloques: [
    { tipo: 'p', texto: 'Un cajón tiene que entrar y salir derecho, sin trabarse ni caer, aunque esté cargado. Puede deslizar sobre la propia madera o sobre correderas metálicas. La elección cambia las medidas del cajón, así que conviene tenerla decidida antes de cortar las piezas.' },

    { tipo: 'h2', texto: 'Tipos de guía' },
    { tipo: 'figura', id: 'correderas-cajon', pie: 'Secciones de frente. Las correderas de bolas ocupan un hueco a cada lado; las ocultas van bajo los laterales del cajón; las guías de madera entran en una ranura del lateral.' },
    {
      tipo: 'tabla',
      titulo: 'Guías de cajón',
      columnas: ['Guía', 'Cómo es', 'Ventajas e inconvenientes'],
      filas: [
        ['De madera', 'El cajón desliza sobre listones, sobre el fondo del hueco o con una ranura en los laterales', 'Tradicional y silenciosa; se traba con la humedad si no tiene holgura'],
        ['Metálica de rodillos', 'Dos perfiles con ruedas plásticas, bajo los laterales', 'Barata; extensión parcial y poca carga'],
        ['[[De bolas|corredera-bolas]]', 'Perfiles telescópicos con bolas de acero, a los lados', 'Suave y resistente; suele ser de extensión total'],
        ['Oculta', 'Bajo el cajón, sin verse con el cajón abierto; suele traer cierre suave', 'La más fina; exige medidas exactas del cajón'],
      ],
    },

    { tipo: 'h2', texto: 'Medidas' },
    {
      tipo: 'lista',
      items: [
        '**Holgura lateral:** las correderas de bolas laterales piden un hueco fijo a cada lado, en general ≈ 12,7 mm. El ancho exterior del cajón es el ancho interior del hueco menos dos holguras.',
        '**Largo:** las correderas se venden por largo, en saltos de ≈ 50 mm. Elige el largo más próximo a la profundidad interior del mueble, sin pasarte.',
        '**Altura:** deja espacio libre sobre y bajo el cajón para que no roce.',
        '**[[Extensión total|extension-total]]:** el cajón sale entero y se ve hasta el fondo. La extensión parcial deja dentro una parte del cajón.',
        '**Carga:** las comunes resisten ≈ 25 – 45 kg; para archivos y cajones de herramientas hay modelos reforzados.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La holgura, los largos disponibles y la carga cambian entre marcas y modelos. Las correderas ocultas piden además un espesor de lateral y un rebaje del fondo concretos. Ten las correderas en la mano y lee su ficha antes de cortar el cajón.' },

    { tipo: 'h2', texto: 'Colocar correderas laterales' },
    {
      tipo: 'pasos',
      items: [
        'Separa la corredera en sus dos partes: el perfil del mueble y el del cajón.',
        'Traza en los laterales del mueble una línea paralela al fondo del hueco, a la misma altura en los dos lados. Una tabla separadora apoyada en el fondo hace que las dos queden iguales.',
        'Atornilla el perfil del mueble con el frente retranqueado lo que indique el fabricante, primero en los agujeros ovalados.',
        'Atornilla el perfil del cajón, también en los ovalados, centrado en la altura del lateral.',
        'Mete el cajón y prueba. Corrige con los ovalados y, cuando corra bien, pon los tornillos de los agujeros redondos.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Monta el frente del cajón al final, sujeto con cinta adhesiva de doble faz o con tornillos desde dentro en agujeros holgados. Así lo alineas con los demás frentes después de colgar el cajón.' },

    { tipo: 'h2', texto: 'Guías de madera' },
    { tipo: 'p', texto: 'En los muebles tradicionales, el cajón apoya los laterales sobre un travesaño y unos listones a cada lado, y unos topes lo guían. Para que corra bien, el cajón se ajusta con muy poca holgura en el frente y algo más hacia atrás, y las superficies que rozan se enceran. Otra opción es una ranura en el lateral del cajón que corre sobre un listón fijado al mueble. Las ranuras se explican en [Ranuras y rebajos](#/uniones/ranuras-rebajos).' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Un cajón de madera ajustado en verano puede trabarse en invierno, o al revés. Elige guías de madera de veta recta y estable, y ajusta el cajón en la época más húmeda del año.' },

    { tipo: 'h2', texto: 'Puertas correderas' },
    {
      tipo: 'lista',
      items: [
        '**Colgadas:** las ruedas van en un riel superior y la puerta cuelga; el riel inferior solo la guía. Corren muy suave y no acumulan polvo abajo.',
        '**Apoyadas:** ruedas o patines en un riel inferior, con una guía arriba. Sirven para puertas livianas.',
        '**En ranuras:** puertas finas de tablero o de vidrio que corren en ranuras del mueble, más profundas arriba que abajo. Para colocarlas, se levantan hasta el fondo de la ranura de arriba y se bajan en la de abajo.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Pon topes al final de cada corredera para que el cajón no se salga y caiga sobre los pies. Los muebles con cajones altos y pesados deben fijarse a la pared: al abrir varios cajones, el mueble se vuelca. Ver [Diseñar muebles seguros](#/diseno/seguridad-diseno).' },
  ],
}

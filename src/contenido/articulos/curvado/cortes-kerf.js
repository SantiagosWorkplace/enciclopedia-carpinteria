export default {
  actualizado: '2026-10-29',
  relacionados: ['curvado/moldes', 'maquinas/sierra-mesa', 'madera/tableros', 'curvado/principios-curvado'],
  bloques: [
    { tipo: 'p', texto: 'Una serie de cortes de sierra paralelos en una cara deja la pieza con una lámina fina sin cortar en la otra. Esa lámina se dobla con facilidad, y los cortes se cierran al curvar. Es la forma más rápida de curvar tableros, zócalos, frentes de mostrador o molduras, aunque la pieza queda débil y necesita fijarse a una estructura curva.' },

    { tipo: 'h2', texto: 'Cómo funciona' },
    { tipo: 'figura', id: 'cortes-kerf', pie: 'Los cortes van en la cara interior de la curva. A la derecha, el método para saber cada cuánto cortar.' },
    {
      tipo: 'lista',
      items: [
        '**Cada corte gira la pieza un ángulo pequeño** cuando se cierra. Cuantos más cortes, o más cerca entre sí, más cerrada la curva.',
        '**La lámina sin cortar** queda en la cara exterior, que es la que se ve. En madera maciza suele dejarse de 2 a 3 mm, y en tableros, algo más que la capa exterior.',
        '**Cortes más juntos que el mínimo** dejan una curva más suave, sin facetas, pero la pieza necesita un molde que la empuje: los cortes no llegan a cerrarse del todo.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Si la lámina que queda es demasiado gruesa, se rompe al curvar. Si es demasiado fina, se marca cada corte en la cara exterior. Probá en un recorte con dos o tres espesores distintos.' },

    { tipo: 'h2', texto: 'Calcular la separación' },
    { tipo: 'p', texto: 'Con un solo corte de prueba: prensá la pieza a la mesa por un lado del corte, medí desde el corte una distancia igual al radio exterior de la curva y levantá el extremo libre hasta que el corte se cierre. La altura que subió la pieza en ese punto es la separación entre cortes. La calculadora hace la misma cuenta.' },
    { tipo: 'interactivo', id: 'calculadora-kerf' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'El resultado supone cortes que se cierran por completo y madera que no se aplasta. Usalo como punto de partida y confirmá con un corte de prueba.' },

    { tipo: 'h2', texto: 'Cómo se hace' },
    {
      tipo: 'pasos',
      items: [
        'Marcá en la pieza dónde empieza y terminá la curva.',
        'Ajustá la altura del disco de la sierra de mesa o de la ingleteadora para dejar la lámina elegida. Comprobá en un recorte.',
        'Marcá la separación en la guía o usá un taco espaciador del ancho justo, y cortá todos los cortes con la misma profundidad.',
        'Curvá la pieza sobre el molde o la estructura. Si cuesta, humedecé levemente la cara exterior.',
        'Encolá o atornillá la pieza a la estructura. Para hacerla rígida, rellená los cortes con cola o encolá una chapa o un contrachapado fino por dentro.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'En algunas sierras de mesa, el cuchillo divisor fijo impide los cortes que no atraviesan la pieza y hay que quitarlo. Los cuchillos que suben y bajan con el disco pueden quedar puestos. Usá empujadores, avanzá despacio y volvé a colocar la protección al terminar.' },

    { tipo: 'h2', texto: 'Alternativas' },
    {
      tipo: 'lista',
      items: [
        '**Contrachapado flexible:** tableros fabricados para curvarse, con chapas de veta en la misma dirección. Se curvan a mano sobre una estructura.',
        '**MDF ranurado:** viene con cortes de fábrica en una cara.',
        '**Varias capas de contrachapado fino** encoladas sobre un molde, como un laminado de tablero.',
      ],
    },
  ],
}

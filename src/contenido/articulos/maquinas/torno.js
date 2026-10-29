export default {
  actualizado: '2026-10-29',
  relacionados: ['maquinas/seguridad-maquinas', 'herramientas-manuales/afilado', 'acabados/aceites', 'madera/secado'],
  bloques: [
    { tipo: 'p', texto: 'En el torno, la pieza gira y la herramienta queda quieta en la mano. Así se hacen patas, balaustres, mangos, cuencos, platos y tapas. Es una de las técnicas más gratificantes de la carpintería y también una de las que exige más respeto: una pieza que se suelta o se parte sale despedida con mucha fuerza.' },

    { tipo: 'h2', texto: 'Partes' },
    { tipo: 'figura', id: 'partes-torno', pie: 'Torno de frente con una pieza entre puntas. La línea roja es el eje de giro.' },
    {
      tipo: 'lista',
      items: [
        '**Cabezal:** lleva el motor y el husillo, donde se montan la punta de arrastre o el plato.',
        '**[[Contrapunto|contrapunto]]:** se desliza por la bancada y sostiene el otro extremo con una punta, normalmente giratoria.',
        '**Apoyo:** la barra sobre la que se apoya la herramienta. Se acerca a la pieza y se ajusta a la altura del eje o algo por debajo.',
        '**Bancada:** la base donde se deslizan el contrapunto y el soporte del apoyo. Su largo define la pieza más larga.',
        '**Volteo:** la distancia del eje a la bancada; el doble es el diámetro máximo que se puede tornear.',
      ],
    },

    { tipo: 'h2', texto: 'Dos formas de tornear' },
    {
      tipo: 'tabla',
      titulo: 'Entre puntas y al aire',
      columnas: ['', 'Entre puntas', 'Al aire'],
      filas: [
        ['Cómo se monta', 'Entre la punta de arrastre y el contrapunto', 'Atornillada a un plato o sujeta en un mandril'],
        ['Veta', 'A lo largo del eje', 'Perpendicular al eje'],
        ['Piezas típicas', 'Patas, balaustres, mangos', 'Cuencos, platos, tapas, cajas'],
        ['Herramienta principal', 'Gubia de desbaste y de perfilar', 'Gubia de vaciar'],
      ],
    },

    { tipo: 'h2', texto: 'Herramientas' },
    {
      tipo: 'lista',
      items: [
        '**Gubia de desbaste:** ancha y de barrido profundo; convierte un cuadradillo en cilindro. Solo entre puntas.',
        '**Gubia de perfilar:** más estrecha y de barrido suave, para molduras, curvas y detalles.',
        '**Gubia de vaciar:** de acero grueso y canal profundo, para el interior y el exterior de los cuencos.',
        '**Formón oblicuo:** de filo inclinado; deja superficies muy lisas entre puntas. Es el más difícil de dominar.',
        '**Tronzador:** estrecho y alto, para cortar ranuras y separar la pieza.',
        '**Rascador:** de filo con rebaba, para alisar el interior de cuencos y formas.',
      ],
    },
    { tipo: 'p', texto: 'Las gubias de torno se afilan a ángulos de bisel de ≈ 35 a 45°, más cerrados en las de perfilar y más abiertos en las de vaciar. El afilado se explica en [Afilado](#/herramientas-manuales/afilado).' },

    { tipo: 'h2', texto: 'Velocidad' },
    { tipo: 'p', texto: 'Cuanto mayor es el diámetro, más lento debe girar la pieza: la superficie de un cuenco grande se mueve mucho más rápido que la de un mango a las mismas revoluciones.' },
    { tipo: 'interactivo', id: 'calculadora-torno' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La calculadora usa una regla práctica muy difundida entre torneros, no una norma. Respeta los límites del manual de tu torno y baja siempre la velocidad ante vibraciones.' },

    { tipo: 'h2', texto: 'Técnica básica entre puntas' },
    {
      tipo: 'pasos',
      items: [
        'Marca el centro en las dos testas trazando las diagonales. Golpea la punta de arrastre en una testa con un mazo para que sus uñas marquen.',
        'Monta la pieza, aprieta el contrapunto y bloquéalo.',
        'Acerca el apoyo a 3 – 6 mm de la pieza y gira la pieza con la mano para comprobar que no toca.',
        'Párate fuera de la línea de la pieza al encender y empieza a velocidad baja.',
        'Apoya la herramienta en el apoyo **antes** de tocar la pieza, con el bisel frotando la madera, y levanta el mango poco a poco hasta que el filo empiece a cortar.',
        'Trabaja de diámetros mayores a menores, "cuesta abajo" respecto de la veta.',
        'Detén el torno para ajustar el apoyo y para medir con el compás de espesores.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Usa pantalla facial completa, no solo gafas. Revisa que la pieza no tenga grietas, nudos sueltos ni corteza floja, y no te pares en la línea de la pieza al arrancar: si se suelta, sale en esa dirección.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'La madera verde se tornea muy fácil y es barata. Un cuenco torneado en verde con paredes de espesor parejo se deja secar y luego se vuelve a tornear para corregir la deformación.' },
  ],
}

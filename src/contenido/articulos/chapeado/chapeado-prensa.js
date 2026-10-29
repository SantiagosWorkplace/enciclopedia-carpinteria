export default {
  actualizado: '2026-10-29',
  relacionados: ['chapeado/soporte', 'chapeado/preparar-chapa', 'herrajes/adhesivos', 'curvado/moldes'],
  bloques: [
    { tipo: 'p', texto: 'Prensar la chapa es el método más seguro para superficies grandes. Con la presión pareja, la cola queda como una película fina y continua, sin burbujas ni zonas secas. Se puede hacer con prensas y travesaños, con una prensa de platos o con una bolsa de vacío.' },

    { tipo: 'h2', texto: 'Dos formas de prensar' },
    { tipo: 'figura', id: 'chapeado-prensa', pie: 'Los espesores están exagerados. En los dos casos se chapean las dos caras a la vez, con un tablero de presión liso de cada lado.' },
    {
      tipo: 'lista',
      items: [
        '**Travesaños curvos:** listones gruesos con un canto levemente curvo, colocados de a pares arriba y abajo cada 15 – 25 cm. Al apretar las prensas en sus extremos, tocan primero el centro y empujan la cola y el aire hacia los bordes.',
        '**Tableros de presión:** dos tableros planos, un poco más grandes que la pieza, entre los travesaños y la chapa. Reparten la presión.',
        '**Bolsa de vacío:** la pieza va sobre una base con ranuras y dentro de una bolsa de plástico grueso. La bomba saca el aire y la presión atmosférica aprieta por igual en toda la superficie, plana o curva.',
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Una bomba de vacío de taller suele llegar a ≈ 0,8 – 0,9 bar de vacío, unas 8 toneladas por metro cuadrado. Es menos que una prensa de platos industrial, pero suficiente para la mayoría de las colas de chapeado. Revisa la presión que pide tu cola.' },

    { tipo: 'h2', texto: 'Qué cola usar' },
    {
      tipo: 'tabla',
      titulo: 'Colas para chapear con prensa',
      columnas: ['Cola', 'Ventajas', 'Cuidados'],
      filas: [
        ['Urea-formaldehído', 'Rígida, no fluye con el tiempo, tiempo abierto largo; la clásica de chapeado', 'Se mezcla; desprende formaldehído al curar'],
        ['Vinílica (PVA)', 'Fácil y a mano', 'Con chapas finas puede atravesar la hoja; con el tiempo, las juntas pueden marcarse'],
        ['Vinílica para chapear', 'Más rígida y de menos agua que la común', 'Seguir la ficha del fabricante'],
        ['Epoxi', 'No necesita mucha presión; sirve para chapas aceitosas', 'Cara; tiempo de mezcla preciso'],
        ['De contacto', 'Sin prensa', 'Solo para chapa con soporte de papel; con chapa natural se forman burbujas'],
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Las colas de urea-formaldehído y epoxi irritan la piel y las vías respiratorias. Usa guantes y trabaja con buena ventilación.' },

    { tipo: 'h2', texto: 'Paso a paso' },
    {
      tipo: 'pasos',
      items: [
        'Prepara todo: soporte limpio, chapas unidas y con su cinta, tableros de presión cubiertos con plástico o papel para que la cola no los pegue, prensas abiertas.',
        'Reparte la cola sobre el soporte con un rodillo o una espátula dentada, en una capa pareja. No la pongas sobre la chapa: se ondula al instante.',
        'Coloca la chapa con la cinta hacia arriba y fíjala con dos o tres tiras de cinta para que no se deslice.',
        'Da vuelta el tablero, encola la otra cara y coloca la contrachapa.',
        'Arma el paquete con los tableros de presión y aprieta desde el centro hacia los bordes, o mete todo en la bolsa y enciende la bomba.',
        'Respeta el tiempo de prensado de la cola. Después deja reposar la pieza un día, separada y con aire en las dos caras.',
        'Recorta la chapa sobrante con una cuchilla o una fresa de copiar a ras, siempre cortando hacia el tablero para no astillar.',
        'Quita la cinta humedeciéndola y raspando. Luego lija suave con taco.',
      ],
    },

    { tipo: 'h2', texto: 'Problemas' },
    {
      tipo: 'tabla',
      titulo: 'Defectos frecuentes',
      columnas: ['Defecto', 'Causa', 'Arreglo'],
      filas: [
        ['Burbuja: suena hueco al golpear con la uña', 'Poca cola o poca presión en esa zona', 'Cortar con la cuchilla a lo largo de la veta, meter cola con una jeringa y prensar con un taco'],
        ['Cola que atraviesa la chapa', 'Demasiada cola o chapa muy porosa', 'Menos cola; con tinte, probar antes porque esas manchas no lo toman'],
        ['Juntas abiertas', 'Cinta floja o chapa húmeda que encogió', 'Rellenar con una tira de chapa; prevenir con buena junta'],
        ['Tablero curvo', 'Chapa de un solo lado o caras distintas', 'Compensar siempre las dos caras'],
      ],
    },
  ],
}

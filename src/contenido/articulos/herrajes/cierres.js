export default {
  actualizado: '2026-10-30',
  relacionados: ['herrajes/bisagras', 'herrajes/correderas', 'diseno/armarios', 'diseno/seguridad-diseno'],
  bloques: [
    { tipo: 'p', texto: 'Una puerta o un cajón necesitan algo que los mantenga cerrados, que los frene al cerrar o que los trabe con llave. Los cierres son herrajes pequeños, pero se usan todos los días: uno flojo o ruidoso arruina la sensación de calidad de un mueble.' },

    { tipo: 'h2', texto: 'Retener la puerta' },
    { tipo: 'figura', id: 'cierres', pie: 'Vistas desde arriba, con la puerta cerrada. El imán y el pestillo retienen la puerta; el amortiguador la frena en los últimos centímetros.' },
    {
      tipo: 'tabla',
      titulo: 'Cierres sin llave',
      columnas: ['Cierre', 'Cómo funciona', 'Uso'],
      filas: [
        ['Imán', 'Un imán en el mueble atrae una contraplaca metálica en la puerta', 'Puertas de interior; silencioso y sin mantenimiento'],
        ['[[Pestillo de bola|pestillo-bola]]', 'Una o dos bolas con resorte atrapan una lengüeta o un hueco de la puerta', 'Puertas pequeñas y embutidas'],
        ['Pestillo de rodillo', 'Un rodillo con resorte entra en una pieza de la puerta', 'Puertas que se abren a menudo'],
        ['Empujar para abrir', 'Un resorte empuja la puerta al presionarla', 'Muebles sin tiradores'],
        ['Pasador', 'Un cerrojo que se desliza a mano', 'La puerta fija de un par de puertas, por dentro'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Coloca el imán un poco hundido respecto del frente, pega la contraplaca sobre él, cierra la puerta con fuerza para que la contraplaca marque su posición y después atorníllala. Así coinciden exactamente.' },

    { tipo: 'h2', texto: 'Frenar el cierre' },
    { tipo: 'p', texto: 'Un [[amortiguador]] frena la puerta o el cajón en los últimos centímetros: cierra sin golpe ni ruido, aunque se empuje con fuerza. Hay amortiguadores que se embuten en un agujero del lateral, otros que se atornillan en la cara interior, y muchas bisagras de cazoleta y correderas que ya los traen incorporados. Uno por puerta suele bastar; en puertas grandes o pesadas, dos.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Un amortiguador separado y una bisagra con cierre suave en la misma puerta se estorban: la puerta queda frenada de más y no termina de cerrar.' },

    { tipo: 'h2', texto: 'Cerraduras' },
    {
      tipo: 'tabla',
      titulo: 'Cerraduras para muebles',
      columnas: ['Cerradura', 'Cómo es', 'Uso'],
      filas: [
        ['De embutir', 'Se aloja en una caja tallada en el canto o en la cara interior; solo se ve la [[bocallave]]', 'Muebles finos, escritorios, cómodas'],
        ['De sobreponer', 'Se atornilla en la cara interior, sin rebajes profundos', 'Restauración y muebles sencillos'],
        ['De cilindro', 'Un cilindro con llave atraviesa el frente y gira una leva', 'Cajoneras, vitrinas, muebles de oficina'],
        ['Para puertas de vidrio', 'Se sujeta al vidrio con presión, sin agujeros en la madera', 'Vitrinas'],
        ['De cajón central', 'Una cerradura traba varios cajones con una barra', 'Archivadores y cajoneras'],
      ],
    },
    {
      tipo: 'pasos',
      items: [
        'Elige la cerradura antes de construir: la distancia entre la bocallave y el borde de la cerradura fija dónde va el agujero en el frente.',
        'Marca el centro del agujero de la llave y taládralo; dale la forma de la bocallave con una sierra fina y una lima.',
        'Traza el contorno de la cerradura sobre la cara interior y rebaja la madera con el formón por capas, probando hasta que entre al ras.',
        'Atornilla la cerradura, prueba la llave y marca dónde golpea el pestillo, para tallar su alojamiento en el mueble.',
        'Coloca el escudo de la bocallave por fuera, si lleva.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Los muebles que pueden encerrar a un niño, como baúles y arcones, no deben llevar cierres que traben solos. Usa soportes de tapa que la mantengan abierta y que no la dejen caer de golpe. Ver [Diseñar muebles seguros](#/diseno/seguridad-diseno).' },
  ],
}

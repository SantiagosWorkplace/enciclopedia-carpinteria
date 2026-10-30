export default {
  actualizado: '2026-10-28',
  relacionados: ['uniones/encolado', 'uniones/cantos', 'taller/sujecion-banco', 'herrajes/adhesivos'],
  bloques: [
    { tipo: 'p', texto: 'En carpintería nunca sobran prensas. Sirven para sujetar la pieza mientras se trabaja y, sobre todo, para mantener las uniones apretadas mientras fragua la cola. Saber cuántas usar, dónde ponerlas y cuánto apretar marca la diferencia entre un encolado limpio y uno torcido.' },

    { tipo: 'h2', texto: 'Tipos de prensa' },
    { tipo: 'figura', id: 'prensas', pie: 'Las prensas más comunes, esquemáticas. En las metálicas, en rojo, el mango o el gatillo que aprieta.' },
    {
      tipo: 'foto', src: 'fotos/herramientas-manuales/prensas.jpg', ancho: 900, alto: 900,
      alt: 'Varias prensas sobre un banco de madera',
      pie: 'Sargentos, prensas de apriete rápido y pinzas de resorte sobre el banco.',
      credito: { autor: 'Michaelkurek011', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Woodworking_clamps.jpg' },
    },
    {
      tipo: 'tabla',
      titulo: 'Prensas y sargentos',
      columnas: ['Tipo', 'Cómo aprieta', 'Uso'],
      filas: [
        ['Sargento', 'Una mordaza fija y otra que corre por una barra, con tornillo', 'Uso general; aprieta fuerte'],
        ['De apriete rápido', 'Gatillo que acerca la mordaza; se maneja con una mano', 'Sujetar mientras se trabaja; encolados livianos'],
        ['De barra o de tubo', 'Mordazas sobre una barra larga o un tubo de agua', 'Tableros anchos y armados de muebles'],
        ['De mano', 'Dos mordazas de madera con dos tornillos', 'Piezas en ángulo y superficies delicadas'],
        ['De cinta', 'Una cinta que rodea la pieza y se tensa', 'Marcos, cajas y piezas de varios lados'],
        ['De muelle o pinzas', 'Resorte', 'Pegar cantos, chapas y piezas pequeñas'],
        ['De esquina', 'Sujeta dos piezas a 90°', 'Ingletes y cajas'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Antes de comprar muchas prensas distintas, compra varias iguales: en un encolado de tablero hacen falta cuatro o seis del mismo largo.' },

    { tipo: 'h2', texto: 'Cómo encolar sin torcer el trabajo' },
    {
      tipo: 'pasos',
      items: [
        '**Ensaya en seco:** arma todo con las prensas, sin cola, y ten a mano tacos, martillo de goma y una escuadra. Si algo no cierra en seco, no va a cerrar con cola.',
        '**Protege las piezas** con tacos de madera o plástico entre las mordazas y la madera.',
        '**Alinea las prensas con la unión:** el eje del tornillo debe pasar por el centro de la línea de cola. Si queda por encima o por debajo, la pieza se curva.',
        '**Reparte la presión:** en un tablero, una prensa cada 20 – 30 cm, alternando por arriba y por abajo.',
        '**Aprieta lo justo:** cuando sale un cordón fino y parejo de cola, alcanza. Apretar de más expulsa la cola y deja la unión seca.',
        '**Comprueba la escuadra** midiendo las dos diagonales: deben ser iguales. Si no lo son, inclina un poco las prensas en el sentido de la diagonal larga.',
        '**Limpia la cola** que sale, cuando tiene consistencia de goma, con un formón o una espátula.',
      ],
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'La cola blanca común necesita en general 30 – 60 minutos bajo presión y unas 24 horas para alcanzar su resistencia. Respeta siempre lo que indica el fabricante y la temperatura del taller.' },

    { tipo: 'h2', texto: 'Calzos curvos' },
    { tipo: 'p', texto: 'Un listón con uno de sus cantos ligeramente curvado, de 1 a 2 mm en el centro, reparte la presión de una sola prensa a lo largo de toda una pieza: al apretar los extremos, el centro presiona primero y la curva se aplana. Es muy útil para encolar chapas, cantos y paneles.' },

    { tipo: 'h2', texto: 'Cuidado de las prensas' },
    {
      tipo: 'lista',
      items: [
        'Limpia la cola de las barras y los tornillos antes de que se seque.',
        'Una gota de aceite o cera en los tornillos los mantiene suaves; no la pongas en las mordazas.',
        'Guarda las prensas colgadas de una barra en la pared: se encuentran rápido y no se golpean.',
      ],
    },
    { tipo: 'p', texto: 'Los tipos de cola y sus tiempos están en [Adhesivos](#/herrajes/adhesivos) y la técnica completa en [Encolado y prensado](#/uniones/encolado).' },
  ],
}

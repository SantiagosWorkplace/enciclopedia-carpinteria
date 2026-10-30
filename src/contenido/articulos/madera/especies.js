export default {
  actualizado: '2026-10-27',
  relacionados: ['madera/propiedades', 'madera/frondosas-coniferas', 'madera/movimiento'],
  bloques: [
    { tipo: 'p', texto: 'Cada especie tiene un carácter propio: color, peso, dureza, facilidad para trabajarla y resistencia a la intemperie. Las fichas resumen lo esencial de algunas de las maderas más usadas en carpintería y construcción.' },
    { tipo: 'p', texto: 'Pasa el ratón sobre una tarjeta para inclinarla y haz clic para ver su ficha. La [[dureza Janka|janka]] se muestra en kilonewtons (kN); al tocar el valor cambia a libras-fuerza (lbf). La densidad está medida con alrededor de un 12 % de [[contenido de humedad|ch]].' },
    { tipo: 'interactivo', id: 'especies' },
    {
      tipo: 'foto', src: 'fotos/madera/16-maderas.jpg', ancho: 700, alto: 862,
      alt: 'Dieciséis muestras de madera europea en cuatro filas de cuatro',
      pie: 'Dieciséis maderas europeas, de izquierda a derecha y de arriba abajo. Fila 1: pino silvestre, pícea, alerce y enebro. Fila 2: álamo temblón, carpe, abedul y aliso. Fila 3: haya, roble común, olmo de montaña y cerezo silvestre. Fila 4: peral, arce real, tilo y fresno.',
      credito: { autor: 'Anonimski', licencia: 'CC0', licenciaUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', fuente: 'https://commons.wikimedia.org/wiki/File:16_wood_samples.jpg' },
    },
    { tipo: 'aviso', nivel: 'nota', texto: 'Los valores son medios: una misma especie varía según el origen, la parte del tronco y la velocidad de crecimiento. Para un cálculo estructural se usan los valores de la norma de cada país.' },
  ],
}

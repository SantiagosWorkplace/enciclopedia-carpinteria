export default {
  actualizado: '2026-10-29',
  relacionados: ['chapeado/parqueteria', 'chapeado/filetes', 'madera/chapas', 'chapeado/chapeado-prensa'],
  bloques: [
    { tipo: 'p', texto: 'La [[marquetería|marqueteria]] compone dibujos figurativos, como flores, paisajes, animales o escenas, con chapas de distintos colores cortadas y encajadas como un rompecabezas. El dibujo se arma por separado y después se pega como una sola hoja sobre el soporte.' },

    { tipo: 'h2', texto: 'Tres técnicas' },
    { tipo: 'figura', id: 'marqueteria', pie: 'En la ventana, la línea de trazos es el contorno de la pieza que va detrás. En el corte en paquete, la pieza oscura de arriba encaja en el fondo claro de abajo.' },
    {
      tipo: 'tabla',
      titulo: 'Métodos de corte',
      columnas: ['Método', 'Cómo es', 'Para qué'],
      filas: [
        ['Ventana', 'Se corta el hueco en el fondo, se apoya la chapa de la pieza debajo, se marca el contorno a través del hueco y se corta', 'Principiantes; piezas grandes; elegir el dibujo de la veta de cada pieza'],
        ['Paquete', 'Se apilan varias chapas y se cortan todas juntas con una sierra de marquetería', 'Varias copias del mismo dibujo, en colores intercambiados'],
        ['Paquete inclinado', 'Dos chapas, la sierra inclinada unos grados: la pieza de arriba baja y cubre el ancho del corte', 'Juntas sin hueco, sin perder material en la línea'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'El ángulo de la sierra en el corte inclinado depende del espesor de la chapa y del grueso de la hoja de sierra. Suele estar entre 8° y 13°; ajústalo con pruebas en recortes.' },

    { tipo: 'h2', texto: 'El proceso' },
    {
      tipo: 'pasos',
      items: [
        'Haz el dibujo en tamaño real y una copia. Numera cada pieza y anota su madera y la dirección de la veta.',
        'Elige las chapas por su color y su dibujo. La veta sirve para sugerir pliegues, el agua o la forma de una hoja.',
        'Corta pieza por pieza, de las del fondo a las del frente y de las grandes a las pequeñas, encajándolas en la hoja de fondo.',
        'Sujeta cada pieza encajada con cinta engomada por la cara vista.',
        'Para dar volumen, sombrea los bordes con arena caliente antes de encajarlos.',
        'Cuando el dibujo está completo, pégalo sobre el soporte con la cinta hacia arriba, en prensa o al vacío.',
        'Quita la cinta y nivela con rascador y lija fina, con cuidado de no atravesar las piezas.',
      ],
    },

    { tipo: 'h2', texto: 'El sombreado con arena' },
    { tipo: 'p', texto: 'Se calienta arena fina y seca en una sartén de hierro. El borde de la pieza, sujeto con pinzas, se hunde unos segundos: se tuesta y se oscurece de forma gradual, lo que imita una sombra. Se prueba en recortes de la misma chapa, porque cada especie se tuesta a distinta velocidad.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'La arena caliente quema y conserva el calor mucho tiempo. Usa pinzas, no la toques con los dedos y no dejes la sartén en el fuego sin vigilar.' },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Las chapas teñidas en masa de fábrica, en verdes, azules o rojos, amplían la paleta. Las maderas naturales cambian de color con la luz con los años; las teñidas también se decoloran, a veces más rápido.' },
  ],
}

export default {
  actualizado: '2026-10-28',
  relacionados: ['diseno/ergonomia', 'diseno/mesas', 'diseno/armarios', 'diseno/sillas'],
  bloques: [
    { tipo: 'p', texto: 'Estas tablas reúnen medidas de referencia en centímetros para los muebles más comunes. Son un punto de partida: después hay que ajustarlas al espacio, a las personas que los van a usar y a los objetos que se van a guardar.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Alto se mide desde el suelo hasta la superficie de uso. Las medidas de colchones y electrodomésticos cambian según el país: mide siempre los objetos reales antes de diseñar alrededor de ellos.' },

    { tipo: 'h2', texto: 'Mesas' },
    {
      tipo: 'tabla',
      titulo: 'Mesas',
      columnas: ['Mueble', 'Alto', 'Otras medidas'],
      filas: [
        ['Mesa de comedor', '72 – 76', '60 – 70 cm de ancho por persona; 40 cm de fondo por persona; ancho total 80 – 100'],
        ['Mesa redonda para 4', '72 – 76', 'Ø 90 – 110'],
        ['Mesa redonda para 6', '72 – 76', 'Ø 120 – 140'],
        ['Escritorio', '72 – 75', 'Ancho ≥ 120; fondo 60 – 80'],
        ['Mesa de centro', '38 – 45', 'A 40 – 45 del sofá'],
        ['Mesa auxiliar', '50 – 60', 'Más o menos a la altura del brazo del sofá'],
        ['Mesa de luz', '50 – 65', 'Parecida a la altura de la cama con el colchón'],
        ['Mesa alta o barra', '100 – 110', 'Taburetes de 72 – 78'],
      ],
    },
    { tipo: 'p', texto: 'Para que alguien se siente en la cabecera de una mesa rectangular, la tapa debe sobresalir de las patas unos 30 cm, o las patas deben quedar lo bastante separadas para que entren las rodillas.' },

    { tipo: 'h2', texto: 'Asientos' },
    { tipo: 'figura', id: 'medidas-mesa-silla', pie: 'Silla de comedor y mesa de costado, a escala. Entre el asiento y la tapa de la mesa quedan ≈ 27 – 30 cm, y el faldón deja libres al menos 18 – 20 cm para las piernas.' },
    {
      tipo: 'tabla',
      titulo: 'Asientos',
      columnas: ['Mueble', 'Alto del asiento', 'Fondo del asiento', 'Otras medidas'],
      filas: [
        ['Silla de comedor', '43 – 46', '40 – 45', 'Ancho ≥ 40; respaldo hasta 80 – 95 del suelo'],
        ['Sillón', '38 – 43', '50 – 55', 'Apoyabrazos a 18 – 25 sobre el asiento'],
        ['Sofá', '40 – 45', '50 – 60', '55 – 60 cm de ancho por persona'],
        ['Banqueta de barra (barra a 105)', '72 – 78', '—', 'Reposapiés a ≈ 45 bajo el asiento'],
        ['Banco de comedor', '43 – 46', '30 – 40', '—'],
      ],
    },

    { tipo: 'h2', texto: 'Camas' },
    {
      tipo: 'tabla',
      titulo: 'Colchones habituales',
      columnas: ['Tipo', 'Medidas frecuentes'],
      filas: [
        ['Individual', '80 × 190 o 90 × 190'],
        ['Una plaza y media', '100 – 110 × 190'],
        ['Doble', '135 – 140 × 190'],
        ['Queen', '150 – 160 × 190 – 200'],
        ['King', '180 – 200 × 200'],
      ],
      nota: 'Cada país y cada fabricante tiene sus propios formatos. Diseña la cama alrededor del colchón real, dejando ≈ 1 – 2 cm de holgura por lado.',
    },
    {
      tipo: 'lista',
      items: [
        '**Altura de la cama con el colchón:** 45 – 55 cm, para sentarse con comodidad en el borde.',
        '**Altura libre debajo:** ≥ 15 cm para limpiar; ≥ 25 – 30 cm si se quieren guardar cajas.',
        '**Cabecero:** 90 – 120 cm del suelo para apoyar la espalda sentado.',
      ],
    },

    { tipo: 'h2', texto: 'Guardado' },
    {
      tipo: 'tabla',
      titulo: 'Muebles de guardado',
      columnas: ['Mueble', 'Fondo', 'Otras medidas'],
      filas: [
        ['Estantería de libros', '25 – 30', 'Entre estantes 25 – 35; libros grandes 35 – 40'],
        ['Armario ropero', '55 – 60 interior', 'Barra para ropa larga a 160 – 180; camisas y sacos 100 – 110 de espacio libre'],
        ['Cómoda', '45 – 55', 'Alto 80 – 120; cajones de 12 – 25 de alto'],
        ['Mueble bajo de cocina', '58 – 60', 'Alto 85 – 95 con la mesada; zócalo 10 – 15'],
        ['Alacena', '30 – 35', 'Su base a ≈ 140 – 150 del suelo'],
        ['Mueble de TV', '40 – 50', 'Centro de la pantalla a la altura de los ojos sentado, ≈ 100 – 110'],
        ['Zapatero', '30 – 35', 'Entre estantes 15 – 20; botas 40 – 50'],
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Cuánto puede medir de largo un estante sin curvarse depende del material, del espesor y de la carga. Calcúlalo con la calculadora de [Cómo trabaja una estructura](#/diseno/estructura).' },

    { tipo: 'h2', texto: 'Escaleras y escalones' },
    { tipo: 'p', texto: 'Una escalera cómoda cumple la regla de Blondel: dos contrahuellas más una huella suman entre 60 y 65 cm, que es lo que mide un paso normal.' },
    {
      tipo: 'datos',
      items: [
        ['Contrahuella (alto del escalón)', '16 – 18 cm'],
        ['Huella (fondo del escalón)', '28 – 30 cm'],
        ['Ejemplo', '2 × 17,5 + 28 = 63 cm'],
        ['Ancho de una escalera de vivienda', '≥ 80 – 90 cm'],
        ['Altura del pasamanos', '90 – 100 cm, medido sobre el borde de los escalones'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Las escaleras de una vivienda están reguladas por el código de edificación de cada lugar, que puede fijar límites distintos para huella, contrahuella, barandas y pasamanos.' },
  ],
}

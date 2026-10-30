export default {
  actualizado: '2026-10-30',
  relacionados: ['diseno/armarios', 'uniones/ranuras-rebajos', 'diseno/mesas', 'otros-materiales/metal'],
  bloques: [
    { tipo: 'p', texto: 'El vidrio aparece en puertas de vitrinas, estantes, tapas de mesas y espejos. En general, los cortes, los cantos y los agujeros los hace el vidriero: al carpintero le toca elegir el tipo y el espesor, dejar el alojamiento correcto y montarlo de forma que no se rompa ni vibre.' },

    { tipo: 'h2', texto: 'Tipos' },
    {
      tipo: 'tabla',
      titulo: 'Vidrios para muebles',
      columnas: ['Tipo', 'Cómo es', 'Uso'],
      filas: [
        ['Común o [[flotado|vidrio-flotado]]', 'Liso y transparente; al romperse forma trozos largos y cortantes', 'Puertas pequeñas y cuadros, en lugares protegidos'],
        ['[[Templado|vidrio-templado]]', 'Tratado con calor: entre cuatro y cinco veces más resistente; se rompe en granitos', 'Tapas de mesa, estantes, puertas grandes'],
        ['[[Laminado|vidrio-laminado]]', 'Dos vidrios pegados con una lámina plástica; roto, queda en su lugar', 'Puertas bajas, barandas, donde haya niños'],
        ['Impreso', 'Con relieve o textura: deja pasar la luz pero no se ve a través', 'Puertas de alacenas y baños'],
        ['Espejo', 'Vidrio con una capa de plata o aluminio protegida por pintura', 'Puertas, fondos de vitrinas, tocadores'],
        ['Acrílico o policarbonato', 'Plásticos transparentes: no son vidrio, pesan menos y casi no se rompen; se rayan', 'Muebles infantiles, piezas curvas, plantillas'],
      ],
    },
    { tipo: 'figura', id: 'rotura-vidrio', pie: 'El vidrio común se rompe en cuchillas. El templado se deshace en granitos de cantos poco cortantes. El laminado se raja en telaraña pero los trozos quedan pegados a la lámina interior.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'En puertas bajas, tapas de mesas, lugares de paso y muebles para niños, usa vidrio de seguridad: templado o laminado. Muchos reglamentos lo exigen; consulta la norma de tu país.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'El vidrio templado no se puede cortar, taladrar ni cantear después del templado: se rompe entero. Lleva al vidriero las medidas finales y la posición de todos los agujeros y recortes.' },

    { tipo: 'h2', texto: 'Espesores' },
    {
      tipo: 'tabla',
      titulo: 'Espesores orientativos',
      columnas: ['Uso', 'Espesor'],
      filas: [
        ['Puerta de vitrina pequeña, en marco', '≈ 3 – 4 mm'],
        ['Puerta de vitrina grande, en marco', '≈ 4 – 5 mm, de seguridad si es baja'],
        ['Puerta de vidrio sin marco, con bisagras de vidrio', '≈ 5 – 6 mm templado'],
        ['Estante con carga ligera, hasta ≈ 60 cm de luz', '≈ 6 mm'],
        ['Estante con carga ligera, hasta ≈ 80 cm de luz', '≈ 8 mm'],
        ['Tapa de mesa apoyada en un bastidor completo', '≈ 8 – 10 mm templado'],
        ['Tapa de mesa apoyada en pocos puntos', '≈ 10 – 12 mm templado'],
        ['Espejo', '≈ 3 – 5 mm'],
      ],
      nota: 'Cuanto mayor es la luz o la carga, más grueso el vidrio. Un estante de libros pesa mucho más que uno de copas.',
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'Los valores son orientativos y dependen del tipo de vidrio, de la carga y de cómo se apoya. Para estantes y tapas, pide al vidriero el espesor recomendado para tu medida y tu uso.' },

    { tipo: 'h2', texto: 'Montaje' },
    { tipo: 'figura', id: 'montaje-vidrio', pie: 'Secciones con el vidrio y las holguras exagerados. El junquillo se clava o se atornilla al marco, nunca se pega al vidrio.' },
    {
      tipo: 'lista',
      items: [
        '**Rebaje y [[junquillo]]:** el vidrio entra por detrás, en un rebaje, y lo sujeta un listón fino clavado o atornillado al marco. Si se rompe, se quita el junquillo y se cambia. Es el montaje más práctico para puertas.',
        '**En ranura:** el vidrio queda atrapado al encolar el marco. Es limpio, pero para cambiarlo hay que desarmar el marco. No pongas cola en la ranura.',
        '**Holgura:** deja ≈ 1,5 – 2 mm de holgura en cada lado del vidrio. La madera se mueve y el vidrio no; si queda apretado, se rompe.',
        '**Que no vibre:** unos puntos de [[silicona neutra|silicona-neutra]] o un burlete fino entre el vidrio y el junquillo evitan el ruido al cerrar la puerta.',
        '**Tapas de mesa:** apóyalas sobre topes de goma o plástico transparente, nunca directamente sobre la madera o el metal.',
        '**Estantes:** usa soportes con goma o funda plástica, para que el vidrio no resbale ni apoye sobre metal.',
      ],
    },
    { tipo: 'p', texto: 'Para hacer el rebaje y la ranura, ver [Ranuras y rebajos](#/uniones/ranuras-rebajos). Las bisagras para puertas de vidrio sin marco se explican en [Bisagras](#/herrajes/bisagras).' },

    { tipo: 'h2', texto: 'Cantos' },
    {
      tipo: 'tabla',
      titulo: 'Terminación de los cantos',
      columnas: ['Canto', 'Cómo queda', 'Uso'],
      filas: [
        ['En bruto', 'Tal como sale del corte: corta', 'Solo oculto dentro de un rebaje o una ranura'],
        ['[[Canteado|canteado]]', 'Aristas matadas, mate', 'Vidrios en marco, estantes ocultos'],
        ['Pulido', 'Canto plano o redondo, brillante', 'Estantes, tapas y puertas a la vista'],
        ['Biselado', 'Un plano inclinado ancho junto al canto', 'Espejos y vidrios decorativos'],
      ],
    },

    { tipo: 'h2', texto: 'Cortar vidrio común' },
    { tipo: 'p', texto: 'Un vidrio común fino se puede cortar en el taller. El cortavidrios no corta: raya la superficie, y el vidrio se parte por esa raya.' },
    {
      tipo: 'pasos',
      items: [
        'Limpia el vidrio y apóyalo sobre una superficie plana cubierta con una manta o un fieltro.',
        'Moja la ruedita del cortavidrios con aceite de corte o aceite liviano.',
        'Apoya una regla firme y raya de borde a borde en una sola pasada, con presión pareja. No repases la raya: estropea el corte y la ruedita.',
        'Coloca la raya justo sobre el borde de la mesa y presiona hacia abajo la parte que sobresale, o usa una pinza para partir vidrio.',
        'Mata las aristas con una piedra de agua o una lija al agua de grano ≈ 120 – 220, mojada.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Usa guantes anticorte y gafas. Lleva el vidrio de canto, nunca plano, y recoge las astillas con una escoba y un trapo húmedo, no con la mano.' },

    { tipo: 'h2', texto: 'Espejos' },
    { tipo: 'p', texto: 'Un espejo se fija con soportes o grampas en los cantos, con un adhesivo específico para espejos, o con ambos. La capa de plata de la cara trasera es delicada: muchas siliconas comunes desprenden ácido acético al curar (huelen a vinagre) y la manchan. Usa siempre adhesivo o silicona neutra apta para espejos, en tiras verticales que dejen circular el aire.' },
  ],
}

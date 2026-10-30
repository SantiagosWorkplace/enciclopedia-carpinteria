export default {
  actualizado: '2026-10-30',
  relacionados: ['herramientas-manuales/martillos-destornilladores', 'herrajes/tornillos', 'uniones/tope', 'otros-materiales/cuero'],
  bloques: [
    { tipo: 'p', texto: 'El clavo es la fijación más rápida. Agarra por la fricción de la madera contra su caña, así que resiste bien los esfuerzos que intentan cortarlo de costado y peor los que tiran de él hacia afuera. En mueblería fina se usa poco a la vista, pero sigue siendo útil para fondos, molduras, cajas, plantillas y para sujetar mientras fragua la cola.' },

    { tipo: 'h2', texto: 'Tipos' },
    { tipo: 'figura', id: 'tipos-clavo', pie: 'Cinco clavos de perfil. El anillado tiene anillos que se traban en las fibras y resiste mucho más que uno liso cuando se tira de él.' },
    {
      tipo: 'tabla',
      titulo: 'Clavos frecuentes',
      columnas: ['Clavo', 'Cómo es', 'Uso'],
      filas: [
        ['De cabeza plana', 'Caña redonda y cabeza ancha', 'Cajones de embalaje, obra, estructuras ocultas'],
        ['De cabeza perdida', 'Cabeza pequeña, apenas más ancha que la caña', 'Molduras, marcos y zócalos: la cabeza se hunde y se tapa'],
        ['[[Puntilla|puntilla]]', 'Muy fino, de cabeza mínima o sin cabeza', 'Junquillos, molduras finas, fondos delgados'],
        ['[[Anillado|clavo-anillado]]', 'Caña con anillos', 'Fondos de tablero, suelos, donde el clavo tiende a salirse'],
        ['Tachuela', 'Corta, con cabeza ancha', 'Tapicería y telas'],
        ['Clavo de cobre o galvanizado', 'No se oxida', 'Exterior, botes, maderas con taninos'],
      ],
    },
    { tipo: 'p', texto: 'La medida se da por el largo y el diámetro en milímetros. Como regla práctica, el clavo debe medir unas tres veces el espesor de la pieza que se clava.' },
    { tipo: 'aviso', nivel: 'nota', texto: 'Los clavos de hierro común se oxidan y manchan de negro las maderas con taninos, como el roble o el castaño. Al exterior, usa clavos inoxidables, galvanizados o de cobre.' },

    { tipo: 'h2', texto: 'Técnica' },
    { tipo: 'figura', id: 'clavar-tecnica', pie: 'A la izquierda, vista desde arriba: los clavos escalonados no rajan la tabla. En el centro y a la derecha, secciones: dos clavos inclinados en sentidos opuestos se traban, y el botador hunde la cabeza bajo la superficie.' },
    {
      tipo: 'lista',
      items: [
        '**Escalonar:** no pongas varios clavos en una misma línea de veta; actúan como una cuña y la tabla se raja.',
        '**Lejos de los extremos:** cerca de la testa, la madera se raja con facilidad. Si hace falta clavar ahí, pretaladra un agujero algo más fino que el clavo.',
        '**Despuntar:** en maderas que se rajan, aplasta la punta del clavo con un golpe. La punta roma corta las fibras en vez de separarlas.',
        '**Inclinar:** clavos en ángulos opuestos, en «cola de milano», se traban y resisten mucho más cuando se tira de las piezas.',
        '**Remachar:** un clavo que atraviesa las dos piezas y se dobla del otro lado, a lo largo de la veta, no se sale. Es la técnica de las puertas de tablas tradicionales.',
        '**Sujetar el clavo pequeño:** atraviesa un trozo de cartón con él y sostén el cartón; así no te golpeas los dedos.',
      ],
    },

    { tipo: 'h2', texto: 'Hundir y tapar' },
    {
      tipo: 'pasos',
      items: [
        'Clava hasta que la cabeza quede unos 2 mm por encima de la superficie: un golpe más con el martillo marcaría la madera.',
        'Apoya el [[botador]] sobre la cabeza y húndela ≈ 1 – 2 mm bajo la superficie.',
        'Rellena el hueco con masilla para madera del color del acabado, o con cera de color si la pieza ya está terminada.',
      ],
    },

    { tipo: 'h2', texto: 'Clavadoras' },
    { tipo: 'p', texto: 'Las clavadoras neumáticas y a batería disparan clavos y grapas en cargadores. En carpintería se usan sobre todo dos: la de clavos sin cabeza, que deja agujeros diminutos en molduras y para sujetar piezas mientras fragua la cola, y la grapadora, para fondos y tapicería.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Una clavadora dispara con fuerza suficiente para atravesar una mano. Usa gafas, mantén la otra mano lejos de la zona de disparo, no la apuntes a nadie y desconéctala del aire o de la batería antes de destrabar un clavo. Un clavo puede desviarse en un nudo y salir por un costado.' },
  ],
}

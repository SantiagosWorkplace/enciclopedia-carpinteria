export default {
  actualizado: '2026-11-02',
  relacionados: ['curvado/principios-curvado', 'curvado/moldes', 'diseno/sillas', 'madera/secado'],
  bloques: [
    { tipo: 'p', texto: 'El calor y la humedad ablandan la lignina, la sustancia que mantiene unidas las fibras de la madera. Una pieza maciza que pasó el tiempo suficiente en vapor se dobla sobre un molde casi como si fuera cuero. Al enfriarse y secarse, conserva la forma. Así se hacen los respaldos curvos de las sillas, los aros de las mecedoras y las costillas de los botes.' },

    { tipo: 'h2', texto: 'La caja de vapor' },
    { tipo: 'figura', id: 'caja-vapor', pie: 'Una caja de vapor sencilla en sección: un cajón de tablero o un tubo, con el vapor entrando por abajo.' },
    {
      tipo: 'lista',
      items: [
        '**La [[caja de vapor|caja-vapor]]** puede ser un cajón de contrachapado para exterior o un tubo de plástico apto para agua caliente, aislado por fuera. Un poco más larga que las piezas.',
        '**Generador:** un hervidor eléctrico o un generador de vapor para empapelar, conectado con una manguera resistente al calor.',
        '**Varillas de madera dura** atravesadas en la caja, para que el vapor rodee las piezas por todos lados.',
        '**Salida de vapor y desagüe:** la caja no debe ser hermética. Un agujero pequeño arriba en un extremo deja circular el vapor, y la caja inclinada lleva el agua condensada al desagüe.',
        '**Tapa** fácil de abrir con guantes, en un extremo.',
      ],
    },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'El vapor quema al instante y no se ve bien. Usa guantes gruesos y manga larga, abre la tapa apartando la cara y nunca cierres la caja herméticamente: si la presión sube, puede reventar.' },

    { tipo: 'h2', texto: 'Cuánto tiempo' },
    {
      tipo: 'datos',
      items: [
        ['Regla habitual', '≈ 1 hora por cada 25 mm de espesor, contados desde que la caja está llena de vapor'],
        ['Temperatura en la caja', '≈ 95 – 100 °C'],
        ['Tiempo para curvar', 'Menos de un minuto entre sacar la pieza y tenerla en el molde'],
        ['Tiempo en el molde', 'Desde unas horas hasta que la pieza se enfría; luego, en una forma de secado, hasta que se seca'],
      ],
    },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La regla de una hora por cada 25 mm es una referencia de taller. La madera secada en horno suele necesitar más tiempo, y demasiado vapor la deja quebradiza. Ajusta el tiempo con piezas de prueba.' },

    { tipo: 'h2', texto: 'Cómo se curva' },
    {
      tipo: 'foto', src: 'fotos/curvado/curvado-molde.jpg', ancho: 1000, alto: 750,
      alt: 'Pieza de madera curvada en círculo y sujeta a un molde con muchas prensas',
      pie: 'Pieza recién curvada al vapor, sujeta contra un molde circular con muchas prensas mientras se enfría y se seca.',
      credito: { autor: 'Terasaface', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0', fuente: 'https://commons.wikimedia.org/wiki/File:Steam_bending_a_piece_of_wood_with_clamps.jpg' },
    },
    {
      tipo: 'pasos',
      items: [
        'Prepara todo antes de abrir la caja: el molde sujeto al banco, el fleje, las prensas abiertas, cuñas y guantes a mano. Ensaya los movimientos en frío.',
        'Saca la pieza y colócala enseguida en el fleje, entre sus topes, con la cara que quedará por fuera contra el metal.',
        'Sujeta el centro de la pieza al molde y dóblala con un movimiento continuo y firme hacia los extremos. No te detengas a mitad de la curva.',
        'Fija los extremos con prensas o cuñas, con el fleje todavía puesto.',
        'Deja la pieza en el molde hasta que se enfríe. Después pásala a una forma de secado o átala con una cuerda para que no se abra.',
        'Déjala secar hasta la humedad de uso, a veces durante días, antes de trabajarla.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'Prepara un par de piezas de más. Incluso con buena madera y buena técnica, una de cada pocas puede rajarse o arrugarse al curvar.' },

    { tipo: 'h2', texto: 'Problemas comunes' },
    {
      tipo: 'tabla',
      titulo: 'Qué falló y cómo evitarlo',
      columnas: ['Problema', 'Causa probable', 'Solución'],
      filas: [
        ['Grietas en la cara exterior', 'Sin fleje, fleje flojo o veta que sale a la cara', 'Fleje con topes ajustados; madera de veta recta'],
        ['Arrugas en la cara interior', 'Compresión excesiva para esa especie o radio', 'Radio mayor o pieza más fina'],
        ['La pieza no dobla', 'Poco tiempo de vapor o madera fría al curvar', 'Más tiempo; curvar enseguida'],
        ['Se abre al soltarla', 'Poco tiempo en el molde o madera todavía húmeda', 'Secar en una forma antes de soltar'],
        ['Se tuerce de costado', 'Veta revirada o fleje angosto', 'Fleje más ancho que la pieza; sujetar los cantos'],
      ],
    },
  ],
}

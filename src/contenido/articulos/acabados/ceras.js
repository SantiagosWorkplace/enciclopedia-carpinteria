export default {
  actualizado: '2026-10-29',
  relacionados: ['acabados/aceites', 'acabados/goma-laca', 'acabados/preparacion', 'acabados/seguridad-acabados'],
  bloques: [
    { tipo: 'p', texto: 'La cera da un brillo suave y un tacto sedoso. Sola, sobre la madera desnuda, protege muy poco: el agua y el calor la marcan. Su mejor uso es como última capa sobre otro acabado, como goma laca, aceite o barniz, al que protege del roce y da un lustre que se renueva con facilidad.' },

    { tipo: 'h2', texto: 'Tipos de cera' },
    {
      tipo: 'tabla',
      titulo: 'Ceras para madera',
      columnas: ['Cera', 'Cómo es', 'Uso'],
      filas: [
        ['De abejas', 'Blanda, cálida, fácil de aplicar; brillo suave', 'Muebles de interior, juguetes, mantenimiento'],
        ['[[Carnauba|carnauba]]', 'Vegetal, muy dura; da un brillo alto', 'En mezclas, para endurecer y dar más brillo'],
        ['Microcristalina', 'Derivada del petróleo, estable, no amarillea', 'Restauración y piezas de museo'],
        ['En pasta', 'Mezcla de ceras con disolvente para que se extienda fácil', 'La más común en las tiendas'],
        ['Coloreada o para patinar', 'Con pigmentos', 'Disimular rayas; [[encalado]]: cera blanca en los poros del roble'],
      ],
    },

    { tipo: 'h2', texto: 'Aplicación' },
    { tipo: 'figura', id: 'encerar', pie: 'Una tabla vista desde arriba en las tres etapas. El velo blanco del centro es la cera que se opacó al evaporarse el disolvente.' },
    {
      tipo: 'pasos',
      items: [
        'Aplica una capa muy fina con un paño de algodón o con lana de acero muy fina, en círculos y después a lo largo de la veta.',
        'Deja que el disolvente se evapore, en general unos 10 – 20 minutos, hasta que la cera se vea opaca.',
        'Lustra con un paño limpio de algodón o de lana, a favor de la veta, con presión firme. Cambia de cara del paño a menudo.',
        'Para más brillo, aplica otra capa fina al día siguiente.',
      ],
    },
    { tipo: 'aviso', nivel: 'consejo', texto: 'El error más común es poner mucha cera: el sobrante no se endurece, queda pegajoso y junta polvo. Dos capas finas brillan más que una gruesa.' },

    { tipo: 'h2', texto: 'Cera casera' },
    { tipo: 'p', texto: 'Se prepara con cera de abejas rallada y trementina o aguarrás mineral, en partes parecidas en volumen. Se derrite la cera al baño María, fuera del fuego, y se agrega el disolvente revolviendo. Más disolvente da una pasta más blanda. Un poco de carnauba la endurece.' },
    { tipo: 'aviso', nivel: 'verificar', texto: 'La proporción de cera y disolvente es orientativa. Prueba la consistencia de una cucharada fría antes de envasar todo.' },
    { tipo: 'aviso', nivel: 'seguridad', texto: 'Los vapores del disolvente se inflaman. Nunca calientes la mezcla sobre una llama ni en una hornalla: usa agua caliente y trabaja al aire libre o con buena ventilación.' },

    { tipo: 'h2', texto: 'Mantenimiento y retirada' },
    {
      tipo: 'lista',
      items: [
        '**Limpieza:** un paño apenas húmedo. Los limpiadores con siliconas dejan brillo rápido pero estropean los acabados futuros.',
        '**Renovar:** una capa fina una o dos veces al año, o cuando pierda el brillo.',
        '**Antes de otro acabado:** quita toda la cera con aguarrás mineral y trapos limpios, cambiándolos a menudo. Un resto de cera o silicona hace que el barniz se recoja en pequeños cráteres, los [[ojos de pez|ojo-pez]].',
      ],
    },
  ],
}

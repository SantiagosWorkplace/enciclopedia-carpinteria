// Figuras originales que un artículo puede insertar con { tipo: 'figura', id }.
import Direcciones from './Direcciones.jsx'
import Deformaciones from './Deformaciones.jsx'
import SeccionTronco from './SeccionTronco.jsx'
import EstructuraCelular from './EstructuraCelular.jsx'
import CortesAserrado from './CortesAserrado.jsx'
import OrientacionAnillos from './OrientacionAnillos.jsx'
import PilaSecado from './PilaSecado.jsx'
import DeformacionesTabla from './DeformacionesTabla.jsx'
import Esfuerzos from './Esfuerzos.jsx'
import CicloCarbono from './CicloCarbono.jsx'
import CortesChapa from './CortesChapa.jsx'
import Tableros from './Tableros.jsx'

export const figuras = {
  'direcciones-contraccion': Direcciones,
  'deformaciones-tronco': Deformaciones,
  'seccion-tronco': SeccionTronco,
  'estructura-celular': EstructuraCelular,
  'cortes-aserrado': CortesAserrado,
  'orientacion-anillos': OrientacionAnillos,
  'pila-secado': PilaSecado,
  'deformaciones-tabla': DeformacionesTabla,
  esfuerzos: Esfuerzos,
  'ciclo-carbono': CicloCarbono,
  'cortes-chapa': CortesChapa,
  tableros: Tableros,
}

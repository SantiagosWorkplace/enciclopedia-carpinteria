// Componentes interactivos que un artículo puede insertar con { tipo: 'interactivo', id }.
import EspeciesGrid from './components/EspeciesGrid.jsx'
import JointViewer from './components/JointViewer.jsx'
import ToolGrid from './components/ToolGrid.jsx'
import WorldBuilds from './components/WorldBuilds.jsx'
import CalculadoraMovimiento from './components/CalculadoraMovimiento.jsx'
import CalculadoraVolumen from './components/CalculadoraVolumen.jsx'
import CalculadoraHumedad from './components/CalculadoraHumedad.jsx'
import CalculadoraEstante from './components/CalculadoraEstante.jsx'
import ListaCorte from './components/ListaCorte.jsx'
import CalculadoraFresa from './components/CalculadoraFresa.jsx'
import CalculadoraTorno from './components/CalculadoraTorno.jsx'
import CalculadoraKerf from './components/CalculadoraKerf.jsx'

export const interactivos = {
  especies: EspeciesGrid,
  uniones: JointViewer,
  herramientas: ToolGrid,
  construcciones: WorldBuilds,
  'calculadora-movimiento': CalculadoraMovimiento,
  'calculadora-volumen': CalculadoraVolumen,
  'calculadora-humedad': CalculadoraHumedad,
  'calculadora-estante': CalculadoraEstante,
  'lista-corte': ListaCorte,
  'calculadora-fresa': CalculadoraFresa,
  'calculadora-torno': CalculadoraTorno,
  'calculadora-kerf': CalculadoraKerf,
}

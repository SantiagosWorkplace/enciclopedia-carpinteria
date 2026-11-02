import { DONACION, SITIO } from '../sitio.js'

// Caja de donación. No aparece mientras no haya un enlace configurado en sitio.js.
export default function Donacion({ compacta = false }) {
  if (!DONACION) return null
  return (
    <div className={compacta ? 'donacion donacion-compacta' : 'donacion'}>
      {!compacta && <p>{SITIO} es gratuito y sin publicidad. Si te resulta útil, puedes ayudar a mantenerlo.</p>}
      <a className="btn" href={DONACION} target="_blank" rel="noopener noreferrer">Apoyar el proyecto</a>
    </div>
  )
}

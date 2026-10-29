import { useState } from 'react'

// Separación de los cortes para curvar una pieza por cortes de sierra. Cada
// corte, al cerrarse en la cara interior, gira la pieza un ángulo k / h, donde k
// es el ancho del corte y h su profundidad. Para que la cara exterior siga un
// radio R, los cortes se separan s = R · k / h, medido en esa cara.
const num = (n, d = 1) => n.toLocaleString('es-AR', { minimumFractionDigits: d, maximumFractionDigits: d })

export default function CalculadoraKerf() {
  const [radio, setRadio] = useState(300)
  const [espesor, setEspesor] = useState(18)
  const [ancho, setAncho] = useState(3)
  const [alma, setAlma] = useState(3)
  const [angulo, setAngulo] = useState(90)

  const h = espesor - alma
  const valido = radio > 0 && ancho > 0 && h > 0 && alma > 0
  const rExt = radio + espesor
  const sep = valido ? (rExt * ancho) / h : 0
  const largo = (rExt * angulo * Math.PI) / 180
  const cortes = valido ? Math.ceil(largo / sep) : 0

  const campo = (texto, valor, set, unidad, min = 0.5, paso = 0.5) => (
    <label>
      <span>{texto}</span>
      <span className="calc-num">
        <input type="number" min={min} step={paso} value={valor} onChange={(ev) => set(Math.max(0, +ev.target.value))} />
        <em>{unidad}</em>
      </span>
    </label>
  )

  return (
    <div className="calc">
      <div className="calc-campos">
        {campo('Radio interior de la curva', radio, setRadio, 'mm', 10, 10)}
        {campo('Espesor de la pieza', espesor, setEspesor, 'mm')}
        {campo('Ancho del corte (disco)', ancho, setAncho, 'mm', 0.5, 0.1)}
        {campo('Madera que queda sin cortar', alma, setAlma, 'mm')}
        <label>
          <span>Ángulo de la curva: <strong>{angulo}°</strong></span>
          <input type="range" min="15" max="180" step="15" value={angulo} onChange={(ev) => setAngulo(+ev.target.value)} />
        </label>
      </div>
      <div className="calc-resultado" aria-live="polite">
        {valido ? (
          <>
            <span>Separación entre cortes, de centro a centro</span>
            <strong>{num(sep)} mm</strong>
            <span>Para {angulo}° hacen falta unos <b>{cortes} cortes</b> de {num(h)} mm de profundidad, en un tramo de {num(largo, 0)} mm de la cara exterior.</span>
            <code>({num(radio, 0)} + {num(espesor)}) × {num(ancho)} ÷ {num(h)}</code>
          </>
        ) : (
          <span>La madera sin cortar tiene que ser más delgada que la pieza y mayor que cero.</span>
        )}
      </div>
    </div>
  )
}

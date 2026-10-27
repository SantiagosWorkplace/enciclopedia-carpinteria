// Camino de migas: Índice › … ; cada item es [texto, href?].
export default function Migas({ items }) {
  return (
    <nav className="migas" aria-label="Ubicación">
      <a href="#/?ir=indice">Índice</a>
      {items.map(([texto, href]) => (
        <span key={texto}>
          <span aria-hidden="true"> › </span>
          {href ? <a href={href}>{texto}</a> : <span aria-current="page">{texto}</span>}
        </span>
      ))}
    </nav>
  )
}

// Cabeza de perfil con la protección personal básica del taller.
// Dibujo original.
const etiquetas = [
  { titulo: 'Gafas o pantalla', nota: 'Siempre con máquinas', x: 300, y: 40, desde: [254, 56], hasta: [296, 38] },
  { titulo: 'Mascarilla FFP2 o FFP3', nota: 'Bien ajustada a la cara', x: 300, y: 100, desde: [258, 88], hasta: [296, 98] },
  { titulo: 'Protección auditiva', nota: 'El daño no se recupera', x: 10, y: 66, desde: [184, 72], hasta: [152, 62] },
]

export default function ProteccionPersonal() {
  return (
    <svg className="fig-leyenda" viewBox="0 0 480 170" role="img" aria-label="Cabeza de perfil con gafas de seguridad, protector auditivo de copa y mascarilla contra el polvo">
      <path d="M170 40 Q172 16 204 14 Q238 12 248 38 Q252 50 251 60 L260 76 Q262 81 255 82 L254 92 Q254 100 246 102 L238 104 Q234 116 222 118 L214 118 L214 140 L168 140 L172 112 Q158 96 158 70 Q158 50 170 40 Z" fill="#f5d0a9" stroke="#92400e" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M170 40 Q172 16 204 14 Q238 12 248 38 Q228 30 204 34 Q184 38 176 56 Q166 50 170 40 Z" fill="#78350f" />
      <path d="M200 50 Q186 14 226 14" fill="none" stroke="#b91c1c" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="196" cy="72" rx="13" ry="18" fill="#dc2626" stroke="#7f1d1d" strokeWidth="1.2" />
      <ellipse cx="196" cy="72" rx="7" ry="11" fill="#b91c1c" />
      <path d="M210 56 H244" stroke="#334155" strokeWidth="2" />
      <path d="M240 48 Q256 46 258 54 Q258 64 246 66 Q238 64 238 56 Q238 50 240 48 Z" fill="#bfdbfe" fillOpacity="0.8" stroke="#1d4ed8" strokeWidth="1.4" />
      <path d="M244 70 Q258 72 262 82 Q262 96 250 104 Q238 108 232 100 Q228 86 236 74 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="1.4" />
      <circle cx="250" cy="90" r="5" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
      <path d="M234 82 L208 90" stroke="#64748b" strokeWidth="1.5" />
      {etiquetas.map(({ titulo, nota, x, y, desde, hasta }) => (
        <g key={titulo}>
          <path d={`M${desde[0]} ${desde[1]} L${hasta[0]} ${hasta[1]}`} stroke="#64748b" strokeWidth="1" />
          <circle cx={desde[0]} cy={desde[1]} r="2" fill="#64748b" />
          <text x={x} y={y} className="fig-titulo">{titulo}</text>
          <text x={x} y={y + 15} className="fig-nota">{nota}</text>
        </g>
      ))}
      <text x="240" y="162" textAnchor="middle" className="fig-nota">Guantes para manipular piezas y aplicar acabados; nunca con máquinas que giran</text>
    </svg>
  )
}

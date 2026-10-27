import { useEffect, useState } from 'react'

// Enrutado mínimo por hash (#/capitulo/articulo?clave=valor): funciona en
// cualquier hosting estático, incluido GitHub Pages, sin configurar el servidor.

export function leerRuta() {
  const crudo = window.location.hash.replace(/^#/, '') || '/'
  const [camino, qs = ''] = crudo.split('?')
  return {
    partes: camino.split('/').filter(Boolean).map(decodeURIComponent),
    query: Object.fromEntries(new URLSearchParams(qs)),
  }
}

export function useRuta() {
  const [ruta, setRuta] = useState(leerRuta)
  useEffect(() => {
    const cambiar = () => setRuta(leerRuta())
    window.addEventListener('hashchange', cambiar)
    return () => window.removeEventListener('hashchange', cambiar)
  }, [])
  return ruta
}

export const enlace = (...partes) => '#/' + partes.filter(Boolean).map(encodeURIComponent).join('/')

export const conQuery = (href, query) => {
  const qs = new URLSearchParams(Object.entries(query).filter(([, v]) => v != null && v !== '')).toString()
  return qs ? `${href}?${qs}` : href
}

export const ir = (href) => { window.location.hash = href.replace(/^#/, '') }

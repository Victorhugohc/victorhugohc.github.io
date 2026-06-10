import { nav } from './nav'
import { sidebar } from './sidebar'
import { createLocale } from '../createLocale'

export const es = createLocale({
  label: 'Español',
  lang: 'es',
  link: '/es/',
  title: 'Manual de Sistemas Industriales',
  description: 'Documentación técnica de automatización industrial.',
  nav,
  sidebar,

  translations: {
    outline: 'En esta página',
    prev: 'Página anterior',
    next: 'Página siguiente',
    lastUpdated: 'Última actualización',
    returnToTop: 'Volver arriba',
    menu: 'Menú',
    appearance: 'Apariencia',
    light: 'Cambiar a tema claro',
    dark: 'Cambiar a tema oscuro',
    notFoundTitle: 'Página no encontrada',
    notFoundQuote: 'La página que buscas no existe o fue movida.',
    notFoundLink: 'Volver al inicio'
  }
})
import { nav } from './nav'
import { sidebar } from './sidebar'
import { createLocale } from '../createLocale'

export const en = createLocale({
  label: 'English',
  lang: 'en',
  title: 'Industrial Systems Handbook',
  description: 'Technical documentation for industrial systems.',
  nav,
  sidebar,

  translations: {
    outline: 'On this page',
    prev: 'Previous page',
    next: 'Next page',
    lastUpdated: 'Last updated',
    returnToTop: 'Return to top',
    menu: 'Menu',
    appearance: 'Appearance',
    light: 'Switch to light theme',
    dark: 'Switch to dark theme',
    notFoundTitle: 'Page not found',
    notFoundQuote: 'The page you’re looking for doesn’t exist or has been moved.',
    notFoundLink: 'Back to home'
  }
})
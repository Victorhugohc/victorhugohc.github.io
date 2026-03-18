import { defineConfig } from 'vitepress'

import { navEN } from './nav.en.ts'
import { navES } from './nav.es.ts'
import { sidebarEN } from './sidebar.en.ts'
import { sidebarES } from './sidebar.es.ts'
import { searchConfig } from './search.ts'

export default defineConfig({
  base: '/wiki-dev/',
  outDir: '../../../wiki/wiki-dev',

  themeConfig: {
    search: searchConfig
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "Industrial Systems Handbook",
      description: "Technical documentation for industrial systems.",
      themeConfig: {
        nav: navEN,
        sidebar: sidebarEN,
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        }
      }
    },

    es: {
      label: "Español",
      lang: "es",
      link: '/es/',
      title: "Industrial Systems Handbook",
      description: "Documentación técnica de automatización industrial.",
      themeConfig: {
        nav: navES,
        sidebar: sidebarES,
        docFooter: {
          prev: 'Página anterior',
          next: 'Página siguiente'
        }
      }
    }
  }
})
import { defineConfig } from 'vitepress'
import { en } from './locales/en'
import { es } from './locales/es'
import { searchConfig } from './search'

export default defineConfig({
  base: '/wiki/',
  outDir: '../../wiki/',
  srcDir: 'content',

  cleanUrls: true,

  markdown: {
    math: 'mathjax3'
  },

  themeConfig: {
  search: searchConfig
  },

  locales: {
    en: {
      ...en,
      link: '/en/'
    },
    es: {
      ...es,
      link: '/es/'
    }
  }
})
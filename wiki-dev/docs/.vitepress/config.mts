import { defineConfig } from 'vitepress'
import { en } from './locales/en'
import { es } from './locales/es'
import { searchConfig } from './search'

export default defineConfig({
  base: '/wiki/',
  outDir: '../../wiki/',

  themeConfig: {
  search: searchConfig
  },

  locales: {
    root: en,
    es
  }
})
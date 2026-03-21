type LocaleConfig = {
  label: string
  lang: string
  link?: string // 👈 OPCIONAL
  title: string
  description: string
  nav: any
  sidebar: any
  translations: any
}

export function createLocale({
  label,
  lang,
  link,
  title,
  description,
  nav,
  sidebar,
  translations
}: LocaleConfig) {
  return {
    label,
    lang,
    ...(link ? { link } : {}), // 👈 solo lo agrega si existe
    title,
    description,
    themeConfig: {
      nav,
      sidebar,

      outline: {
        label: translations.outline
      },
      outlineTitle: translations.outline,

      docFooter: {
        prev: translations.prev,
        next: translations.next
      },

      lastUpdatedText: translations.lastUpdated,
      returnToTopLabel: translations.returnToTop,
      sidebarMenuLabel: translations.menu,
      darkModeSwitchLabel: translations.appearance,
      lightModeSwitchTitle: translations.light,
      darkModeSwitchTitle: translations.dark
    }
  }
}
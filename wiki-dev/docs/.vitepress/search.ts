import type { DefaultTheme } from 'vitepress'

export const searchConfig: DefaultTheme.Config['search'] = {
  provider: 'local',
  options: {
    locales: {
      root: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search'
          },
          modal: {
            noResultsText: 'No results',
            resetButtonTitle: 'Clear search',
            footer: {
              selectText: 'Select',
              navigateText: 'Navigate',
              closeText: 'Close'
            }
          }
        }
      },
      es: {
        translations: {
          button: {
            buttonText: 'Buscar',
            buttonAriaLabel: 'Buscar'
          },
          modal: {
            noResultsText: 'Sin resultados',
            resetButtonTitle: 'Limpiar búsqueda',
            footer: {
              selectText: 'Seleccionar',
              navigateText: 'Navegar',
              closeText: 'Cerrar'
            }
          }
        }
      }
    }
  }
}
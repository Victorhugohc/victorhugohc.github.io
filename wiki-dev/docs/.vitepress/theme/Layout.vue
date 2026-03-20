<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed, ref } from 'vue'

// Get current language from VitePress (reactive)
const { lang } = useData()

// Normalize language (handles en, en-US, es, es-MX, etc.)
const currentLang = computed(() => {
  if (!lang.value) return 'en'

  if (lang.value.startsWith('es')) return 'es'
  if (lang.value.startsWith('en')) return 'en'

  // fallback to English for any other language
  return 'en'
})

// Boolean helper for Spanish
const isSpanish = computed(() => currentLang.value === 'es')

// Control visibility (set to true for stability)
const showDonate = ref(true)
</script>

<template>
  <DefaultTheme.Layout>
    
    <template #doc-after>
      <div v-if="showDonate" class="donation-wrapper">

        <div class="donation-box">
          
          <p class="donation-text">
            <span v-if="isSpanish">
              Ayuda a mantener este proyecto y su contenido.
            </span>
            <span v-else>
              Help keep this project and its content alive.
            </span>
          </p>

          <a 
            href="https://www.paypal.com/donate/?hosted_button_id=FLA4AKXQLYSKJ"
            class="donate-button"
            target="_blank"
            rel="noopener"
          >
            <span class="icon-wrapper">
              <svg viewBox="0 0 24 24" class="icon">
                <path d="M12 21c-1 0-7-5.5-9-9-1.5-2.7.5-6 4-6 2 0 3.5 1.5 5 3 1.5-1.5 3-3 5-3 3.5 0 5.5 3.3 4 6-2 3.5-8 9-9 9z"/>
              </svg>
            </span>

            <span>
              {{ isSpanish ? 'Apoyar' : 'Support' }}
            </span>
          </a>

        </div>

      </div>
    </template>

  </DefaultTheme.Layout>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const base = import.meta.env.BASE_URL
  const savedLang = localStorage.getItem('preferred-lang')

  // 1. Si ya hay idioma guardado → usarlo
  if (savedLang) {
    window.location.replace(base + savedLang + '/')
    return
  }

  // 2. Detectar idioma del navegador
  const userLang = navigator.language || navigator.userLanguage

  if (userLang.startsWith('es')) {
    localStorage.setItem('preferred-lang', 'es')
    window.location.replace(base + 'es/')
  } else {
    localStorage.setItem('preferred-lang', 'en')
    window.location.replace(base + 'en/')
  }
})
</script>
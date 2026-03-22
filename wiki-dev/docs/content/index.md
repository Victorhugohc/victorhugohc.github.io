<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const base = '/wiki/'

  const savedLang = localStorage.getItem('preferred-lang')

  if (savedLang) {
    window.location.replace(base + savedLang + '/')
    return
  }

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
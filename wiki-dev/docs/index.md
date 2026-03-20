---
layout: home

hero:
  name: "Industrial Systems Handbook"
  text: "Technical Documentation"
  tagline: "Industrial automation, PLCs, and electrical systems"
  actions:
    - theme: brand
      text: Get Started
      link: /home/overview.md
    - theme: alt
      text: GitHub
      link: https://github.com/
---

<script>
  (function () {
    const savedLang = localStorage.getItem('preferred-lang')

    // Si ya eligió idioma antes → usar ese
    if (savedLang) {
      if (savedLang === 'es' && location.pathname === '/') {
        window.location.replace('/es/')
      }
      return
    }

    // Detectar idioma del navegador
    const userLang = navigator.language || navigator.userLanguage

    if (userLang.startsWith('es')) {
      localStorage.setItem('preferred-lang', 'es')
      if (location.pathname === '/') {
        window.location.replace('/es/')
      }
    } else {
      localStorage.setItem('preferred-lang', 'en')
    }
  })()
</script>
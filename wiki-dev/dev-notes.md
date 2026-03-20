# Dev Notes

## Alias de terminal para VitePress

Para trabajar más rápido en este proyecto, se crearon alias en la terminal que permiten acceder directamente a la carpeta del proyecto y ejecutar comandos sin escribir toda la ruta.

---

## Crear alias

1. Abrir la configuración de zsh:

```bash
nano ~/.zshrc
```

2. Agregar los alias:

```bash
alias wiki="cd /Users/victorhugohc/Desktop/victorhugohc.github.io/wiki-dev"
alias wikidev="cd /Users/victorhugohc/Desktop/victorhugohc.github.io/wiki-dev && npm run docs:dev"
alias wikibuild="cd /Users/victorhugohc/Desktop/victorhugohc.github.io/wiki-dev && npm run docs:build"
alias wikipreview="cd /Users/victorhugohc/Desktop/victorhugohc.github.io/wiki-dev && npm run docs:preview"
```

3. Guardar cambios:
- CTRL + X

1. Activar cambios:

```bash
source ~/.zshrc
```

---

## Uso

Entrar al proyecto:

```bash
wiki
```

Modo desarrollo:

```bash
wikidev
```

Build del proyecto:

```bash
wikibuild
```

Preview del build:

```bash
wikipreview
```

---

## Salir del modo desarrollo

Cuando se ejecuta el servidor en modo desarrollo, la terminal queda ocupada.

Para salir:

```bash
CTRL + C
```

---

## Eliminar alias (permanente)

1. Abrir la configuración:

```bash
nano ~/.zshrc
```

2. Eliminar o comentar las líneas:

```bash
# alias wiki="..."
# alias wikidev="..."
# alias wikibuild="..."
# alias wikipreview="..."
```

3. Guardar cambios:
- CTRL + X

1. Aplicar cambios:

```bash
source ~/.zshrc
```

---

## Eliminar alias (temporal)

Para eliminar los alias solo en la sesión actual:

```bash
unalias wiki
unalias wikidev
unalias wikibuild
unalias wikipreview
```

---

## Notas

- Los alias son permanentes mientras estén en ~/.zshrc
- No es necesario reactivarlos al reiniciar la computadora
- Solo se debe usar source ~/.zshrc cuando se realizan cambios en la configuración

## Donaciones (Paypal) 

El botón de donación se encuentra en :

```bash
docs/.vitepress/theme/Layout.vue
```


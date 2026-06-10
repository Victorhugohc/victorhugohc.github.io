# Categorías de Seguridad

## Descripción general

Las categorías de seguridad definen la estructura y la confiabilidad de los sistemas de control relacionados con la seguridad.

Describen cómo un sistema está diseñado para responder ante fallas y qué tan probable es que mantenga su función de seguridad.

Las categorías se utilizan para clasificar el desempeño de seguridad según principios de diseño y tolerancia a fallas.

## Propósito

El propósito de las categorías de seguridad es asegurar que los sistemas de seguridad proporcionen el nivel de protección requerido.

Se utilizan para:

- Definir la confiabilidad de las funciones de seguridad  
- Guiar el diseño del sistema  
- Apoyar las medidas de reducción de riesgos  
- Asegurar el cumplimiento de las normas de seguridad  

Ayudan a alinear el diseño del sistema con el nivel de riesgo.

## Cómo funciona

Las categorías de seguridad se definen por cómo el sistema maneja las fallas y mantiene las funciones de seguridad.

### Categoría B

Se aplican principios básicos de seguridad.

- Sin tolerancia específica a fallas  
- Una falla puede provocar la pérdida de la función de seguridad  

Se utiliza en aplicaciones de bajo riesgo.

### Categoría 1

Utiliza componentes y principios bien probados.

- Mayor confiabilidad que el diseño básico  
- Aún sin detección de fallas  

Adecuada para riesgo bajo a moderado.

### Categoría 2

Incluye pruebas periódicas de las funciones de seguridad.

- Las fallas pueden detectarse durante las pruebas  
- La función de seguridad puede perderse entre pruebas  

Proporciona mayor confiabilidad que la Categoría 1.

### Categoría 3

Diseñada con redundancia.

- Una falla simple no provoca la pérdida de la función de seguridad  
- Algunas fallas pueden no detectarse  

Proporciona alta confiabilidad.

### Categoría 4

Nivel más alto de confiabilidad.

- Las fallas se detectan continuamente  
- La función de seguridad se mantiene incluso con fallas  

Se utiliza en aplicaciones de alto riesgo.

## Aplicaciones

Las categorías de seguridad se utilizan en sistemas donde se requieren funciones de seguridad.

Las aplicaciones típicas incluyen:

- Sistemas de paro de emergencia  
- Enclavamientos de seguridad  
- Sistemas de protección de maquinaria  
- Sistemas de seguridad de proceso  

Son críticas en sistemas con peligros potenciales.

## Consideraciones clave

La selección de categoría depende de la evaluación de riesgos.

Las categorías más altas aumentan la complejidad y el costo.

La detección de fallas y la redundancia mejoran el desempeño de seguridad.

El diseño del sistema debe seguir los principios definidos para cada categoría.

El cumplimiento de normas es obligatorio.

## Notas prácticas

Un error común es seleccionar una categoría sin una evaluación de riesgos adecuada.

No asumir que una categoría más alta siempre es mejor. Debe coincidir con la aplicación.

Asegurar que todos los componentes cumplan la categoría requerida.

Verificar el desempeño del sistema mediante pruebas.

Documentar claramente el diseño de seguridad para validación y mantenimiento.

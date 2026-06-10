# Control en Lazo Abierto vs Lazo Cerrado

## Descripción general

Los sistemas de control pueden clasificarse según el uso de retroalimentación.

Un sistema en lazo abierto opera sin medir el resultado. Un sistema en lazo cerrado mide continuamente la salida y ajusta su comportamiento para alcanzar un valor deseado.

Esta diferencia define qué tan preciso y adaptable puede ser un sistema de control.

## Propósito

El propósito de elegir entre control en lazo abierto o cerrado es equilibrar simplicidad, costo y desempeño.

El control en lazo abierto se utiliza cuando la relación entre entrada y salida es predecible.

El control en lazo cerrado se utiliza cuando se requiere precisión, estabilidad o rechazo a perturbaciones.

## Cómo funciona

### Control en lazo abierto

En un sistema en lazo abierto, la acción de control es independiente de la salida real.

El sistema envía una orden sin verificar el resultado.

Concepto básico:

- Se aplica una entrada  
- El sistema ejecuta la acción  
- No se utiliza retroalimentación  

Ejemplos de comportamiento:

- Un motor funciona durante un tiempo fijo  
- Una válvula se abre a una posición fija  
- Un calentador opera por un tiempo predefinido  

Cualquier perturbación o variación no es corregida.

### Control en lazo cerrado

En un sistema en lazo cerrado, la salida se mide y se compara con un valor deseado llamado punto de consigna (setpoint).

El controlador ajusta la entrada con base en la diferencia entre el valor medido y el setpoint.

Concepto básico:

- Medir la variable del proceso  
- Comparar con el setpoint  
- Calcular el error  
- Ajustar la salida de control  

Esta corrección continua permite mantener la condición deseada incluso ante perturbaciones.

## Aplicaciones

### Lazo abierto

- Operaciones simples basadas en tiempo  
- Sistemas de bandas transportadoras con velocidad fija  
- Secuencias básicas donde la precisión no es crítica  

### Lazo cerrado

- Sistemas de control de temperatura  
- Regulación de presión y flujo  
- Control de velocidad de motores  
- Control de posición en sistemas de automatización  

El control en lazo cerrado es estándar en la mayoría de procesos industriales donde las condiciones pueden variar.

## Consideraciones clave

Los sistemas en lazo abierto son más simples y económicos, pero dependen de condiciones estables.

Los sistemas en lazo cerrado requieren sensores, ajuste (tuning) y lógica más compleja.

Los requerimientos de precisión determinan la elección. Sistemas de alta precisión requieren retroalimentación.

La respuesta a perturbaciones solo es posible en sistemas de lazo cerrado.

La estabilidad del sistema debe considerarse en el diseño de lazo cerrado. Un mal ajuste puede provocar oscilaciones o inestabilidad.

## Notas prácticas

Un error común es usar control en lazo abierto en procesos con alta variabilidad, lo que genera resultados inconsistentes.

El control en lazo cerrado mejora el desempeño, pero añade complejidad. La confiabilidad de sensores y la calidad de señal son críticas.

No todos los sistemas requieren lazo cerrado completo. En algunos casos se utiliza un enfoque híbrido, combinando acciones en lazo abierto con correcciones por retroalimentación.

Al implementar control en lazo cerrado, un ajuste adecuado es esencial para evitar respuestas lentas u oscilaciones excesivas.
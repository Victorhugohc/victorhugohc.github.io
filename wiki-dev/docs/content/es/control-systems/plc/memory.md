# Lógica Ladder

## Descripción general

La lógica ladder es un lenguaje de programación gráfico utilizado en PLCs. Representa la lógica de control mediante símbolos similares a los circuitos eléctricos de relevadores.

Los programas se organizan en líneas horizontales llamadas peldaños (rungs), que definen cómo las entradas y condiciones controlan las salidas.

## Propósito

El propósito de la lógica ladder es proporcionar una forma simple e intuitiva de implementar lógica de control.

Permite a ingenieros y técnicos:

- Diseñar y comprender secuencias de control  
- Traducir sistemas basados en relevadores a software  
- Diagnosticar lógica utilizando un formato familiar  

Es ampliamente utilizada por su claridad y aceptación en la industria.

## Cómo funciona

La lógica ladder se basa en evaluar condiciones de izquierda a derecha en cada peldaño.

### Elementos básicos

- Los contactos representan condiciones de entrada  
- Las bobinas representan salidas o acciones  

Los contactos pueden ser:

- Normalmente abiertos, verdaderos cuando la condición está activa  
- Normalmente cerrados, verdaderos cuando la condición no está activa  

### Ejecución de la lógica

Cada peldaño se evalúa durante el ciclo de escaneo.

- Si las condiciones del lado izquierdo son verdaderas  
- Se completa el camino lógico  
- La salida del lado derecho se energiza  

Si las condiciones son falsas, la salida se desactiva.

### Operaciones lógicas

La lógica ladder soporta funciones lógicas básicas.

- Contactos en serie representan condiciones AND  
- Ramas en paralelo representan condiciones OR  

Esto permite construir lógica compleja a partir de elementos simples.

### Elementos internos

La lógica ladder también puede incluir:

- Bits internos  
- Temporizadores  
- Contadores  
- Instrucciones de comparación  

Estos elementos permiten comportamientos de control más avanzados.

## Aplicaciones

La lógica ladder se utiliza en una amplia variedad de aplicaciones de PLC.

Usos típicos incluyen:

- Secuencias de control de maquinaria  
- Interbloqueos y condiciones de seguridad  
- Circuitos de control de motores  
- Lógica de alarmas  
- Tareas básicas de automatización  

Es especialmente común en sistemas de control discreto.

## Consideraciones clave

La legibilidad es fundamental. Una estructura clara facilita el diagnóstico.

La organización del programa debe seguir una agrupación lógica de funciones.

La lógica compleja puede volverse difícil de mantener si no se estructura adecuadamente.

El orden de ejecución es importante. Los peldaños se evalúan secuencialmente.

La consistencia en nombres y estructura mejora la comprensión.

## Notas prácticas

Un error común es crear peldaños demasiado complejos. Divide la lógica en secciones más pequeñas para mayor claridad.

Evita duplicar lógica en múltiples peldaños. Usa variables internas cuando sea necesario.

Utiliza comentarios y etiquetado claro para documentar el propósito de cada peldaño.

Mantén una estructura similar al comportamiento real del sistema para facilitar el diagnóstico.
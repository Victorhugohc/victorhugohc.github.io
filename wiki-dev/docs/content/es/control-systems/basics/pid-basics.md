# Fundamentos de PID

## Descripción general

El control PID es un método ampliamente utilizado en sistemas de control en lazo cerrado. Ajusta la salida de control en función de la diferencia entre un valor deseado y el valor medido.

PID significa Proporcional, Integral y Derivativo. Estos tres términos definen cómo el controlador responde al error.

## Propósito

El propósito del control PID es mantener una variable de proceso en un valor deseado (setpoint) con estabilidad y precisión.

Se utiliza para:

- Reducir el error en estado estacionario  
- Mejorar la velocidad de respuesta  
- Minimizar oscilaciones  
- Compensar perturbaciones  

El control PID proporciona un balance entre rapidez de respuesta y estabilidad.

## Cómo funciona

Un controlador PID calcula una salida basada en el error entre el setpoint y el valor medido.

### Proporcional (P)

El término proporcional responde al error actual.

- Un error grande produce una corrección grande  
- Un error pequeño produce una corrección pequeña  

Proporciona una respuesta inmediata, pero por sí solo no elimina el error en estado estacionario.

### Integral (I)

El término integral responde a la acumulación del error en el tiempo.

- Incrementa la salida si el error persiste  
- Elimina el error en estado estacionario  

Un exceso de acción integral puede provocar respuestas lentas u oscilaciones.

### Derivativo (D)

El término derivativo responde a la velocidad de cambio del error.

- Predice el comportamiento futuro  
- Reduce el sobreimpulso (overshoot)  
- Mejora la estabilidad  

Es sensible al ruido y debe utilizarse con cuidado.

### Acción combinada

La salida del controlador es la combinación de los tres términos.

- P actúa sobre el error presente  
- I corrige el error acumulado  
- D anticipa el error futuro  

El balance entre estos términos determina el comportamiento del sistema.

## Aplicaciones

El control PID se utiliza en la mayoría de los lazos de control industrial, incluyendo:

- Control de temperatura  
- Regulación de flujo y presión  
- Control de velocidad de motores  
- Control de nivel en tanques  
- Sistemas de control de posición  

Es el enfoque estándar para el control continuo de procesos.

## Consideraciones clave

El ajuste (tuning) es crítico. Las ganancias de P, I y D deben adaptarse a cada proceso.

Un exceso de ganancia proporcional puede causar oscilaciones.

Demasiada acción integral puede generar inestabilidad o recuperación lenta.

La acción derivativa mejora la estabilidad, pero puede amplificar el ruido.

La dinámica del proceso afecta el ajuste. Sistemas rápidos y lentos requieren configuraciones distintas.

La precisión y el tiempo de respuesta de los sensores impactan directamente el desempeño.

## Notas prácticas

Un error común es usar PID sin comprender el comportamiento del proceso, lo que conduce a un mal ajuste y control inestable.

No todos los sistemas requieren los tres términos. Muchas aplicaciones utilizan solo control PI.

Comienza con un ajuste simple y aumenta la complejidad solo si es necesario.

Verifica el desempeño en condiciones reales de operación, no solo en pruebas iniciales.

Puede ser necesario aplicar filtrado de señal cuando se utiliza acción derivativa.
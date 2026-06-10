# Señales 4-20 mA

## Descripción general

4-20 mA es una señal analógica estándar utilizada en instrumentación industrial para transmitir variables de proceso.

Representa un valor medido como una corriente eléctrica, donde 4 mA corresponde al valor mínimo y 20 mA al valor máximo.

Este estándar se utiliza ampliamente debido a su confiabilidad y resistencia al ruido.

## Propósito

El propósito de las señales 4-20 mA es proporcionar una forma robusta y consistente de transmitir mediciones analógicas a distancia.

Se utiliza para:

- Enviar variables de proceso desde instrumentos de campo a los sistemas de control  
- Asegurar la integridad de la señal en entornos industriales  
- Estandarizar la comunicación entre dispositivos  

Es un elemento clave en los sistemas de instrumentación analógica.

## Cómo funciona

Un transmisor convierte una medición física en una señal de corriente dentro del rango 4-20 mA.

### Rango de señal

- 4 mA representa el valor mínimo de medición  
- 20 mA representa el valor máximo de medición  

Los valores entre 4 y 20 mA corresponden linealmente a la variable medida.

### Cero vivo

El uso de 4 mA en lugar de 0 mA permite la detección de fallas.

- 0 mA indica un cable roto o pérdida de señal  
- Valores por debajo de 4 mA pueden indicar una condición de falla  

Esto mejora la confiabilidad del sistema.

### Lazo de corriente

La señal se transmite a través de un lazo de corriente.

- La corriente permanece constante independientemente de la resistencia del cable  
- El voltaje varía según sea necesario para mantener la corriente  

Esto hace que la señal sea menos sensible al ruido y a las caídas de voltaje.

### Conversión

En el extremo receptor, la corriente se convierte en un valor utilizable.

- Los módulos de entrada analógica del PLC miden la corriente  
- La señal se escala a unidades de ingeniería  

Esto permite la integración en la lógica de control.

## Aplicaciones

Las señales 4-20 mA se utilizan en la mayoría de los procesos industriales.

Las aplicaciones típicas incluyen:

- Transmisores de temperatura  
- Transmisores de presión  
- Dispositivos de medición de flujo  
- Sensores de nivel  

Son estándar en los sistemas de control de procesos.

## Consideraciones clave

Se requiere un escalamiento adecuado para convertir la corriente en valores significativos.

La fuente de alimentación del lazo debe ser suficiente para todos los dispositivos en el lazo.

La selección y el tendido del cable afectan la calidad de la señal.

Puede requerirse seguridad intrínseca en entornos peligrosos.

Debe verificarse la compatibilidad del módulo de entrada.

## Notas prácticas

Un error común es el escalamiento incorrecto de la señal en el PLC. Siempre verifique el rango de medición.

Revise cuidadosamente el cableado del lazo. Conexiones incorrectas pueden impedir la transmisión de la señal.

Utilice una puesta a tierra y blindaje adecuados para reducir la interferencia.

Verifique la corriente del lazo durante la puesta en marcha para confirmar el funcionamiento correcto.

Etiquete los rangos de señal claramente para evitar confusiones durante el mantenimiento.

# Switches

## Descripción general

Un switch de red es un dispositivo que conecta múltiples dispositivos dentro de una red Ethernet y gestiona el tráfico de datos entre ellos.

Dirige los datos solo al destino previsto, mejorando la eficiencia y el rendimiento de la red.

Los switches son un componente fundamental de las redes de comunicación industrial.

## Propósito

El propósito de un switch es habilitar una comunicación confiable y eficiente entre dispositivos de red.

Se utiliza para:

- Conectar múltiples dispositivos en una red  
- Gestionar el tráfico de datos  
- Reducir la transmisión innecesaria de datos  
- Mejorar el rendimiento de la red  

Los switches son esenciales para construir redes estructuradas y escalables.

## Cómo funciona

Un switch opera recibiendo tramas de datos y reenviándolas según las direcciones de destino.

### Aprendizaje de direcciones MAC

Cada dispositivo tiene una dirección MAC única.

- El switch aprende qué dispositivos están conectados a cada puerto  
- Construye una tabla de direcciones y puertos asociados  

Esto permite que el switch envíe datos solo donde se necesitan.

### Reenvío de tramas

Cuando se recibe una trama:

- El switch verifica la dirección de destino  
- Reenvía la trama al puerto correcto  
- Si el destino es desconocido, envía la trama a todos los puertos  

Este proceso es rápido y automático.

### Reducción de colisiones

A diferencia de los hubs de red antiguos, los switches:

- Envían datos solo al dispositivo destino  
- Permiten comunicación en dúplex completo  

Esto elimina las colisiones y mejora el rendimiento.

### Tipos de conmutación

- Store and forward verifica la trama antes de enviarla  
- Cut through reenvía los datos inmediatamente con menor retardo  

El método afecta el rendimiento y la confiabilidad.

## Tipos de switches

### Switches no gestionados

- No requieren configuración  
- Operación plug and play  
- Control y funciones limitados  

Utilizados en redes simples.

### Switches gestionados

- Configuración ajustable  
- Soporte para VLANs, control de tráfico y diagnósticos  
- Mayor control sobre el comportamiento de la red  

Utilizados en sistemas industriales y complejos.

### Switches industriales

- Diseñados para entornos hostiles  
- Resistentes a temperatura, vibración y ruido eléctrico  
- A menudo incluyen alimentación y funciones de red redundantes  

Utilizados en automatización industrial.

## Aplicaciones

Los switches se utilizan en todas las redes basadas en Ethernet.

Las aplicaciones típicas incluyen:

- Conectar PLCs, HMIs y sistemas SCADA  
- Integrar variadores y E/S remotas  
- Construir redes de planta  
- Admitir protocolos de comunicación industrial  

Son la base de la comunicación industrial moderna.

## Consideraciones clave

El número de puertos debe coincidir con la cantidad de dispositivos conectados.

La velocidad de red debe respaldar los requisitos de la aplicación.

Las funciones gestionadas pueden ser necesarias en sistemas más grandes o críticos.

Las condiciones ambientales influyen en la selección del switch.

Puede necesitarse redundancia en redes críticas.

## Notas prácticas

Un error común es utilizar switches no gestionados en sistemas que requieren control de tráfico.

Utilice switches gestionados para priorizar la comunicación crítica.

Evite bucles de red a menos que se configuren protocolos adecuados.

Etiquete puertos y conexiones para facilitar la resolución de problemas.

Verifique el rendimiento de la red bajo carga para garantizar la confiabilidad.

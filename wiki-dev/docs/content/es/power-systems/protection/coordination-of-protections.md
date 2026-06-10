# Coordinación de protecciones

## Descripción general

La coordinación de protecciones es el proceso de organizar y configurar los dispositivos de protección para que solo opere el dispositivo más cercano a una falla.

Asegura que las fallas se aíslen localmente sin interrumpir innecesariamente la energía al resto del sistema.

La coordinación adecuada es esencial para mantener la confiabilidad del sistema y minimizar el tiempo de inactividad.

## Propósito

El propósito de la coordinación es:

- Aislar fallas con impacto mínimo en el sistema general  
- Mantener la continuidad del servicio para las cargas no afectadas  
- Reducir el estrés del equipo limitando la duración de la falla  
- Asegurar operación predecible y controlada de los dispositivos de protección  

Sin coordinación, una sola falla puede provocar que grandes porciones de una instalación pierdan energía.

## Cómo funciona

Los dispositivos de protección se seleccionan y ajustan utilizando curvas tiempo-corriente.

Cada dispositivo se configura para operar a un nivel de corriente específico y con un retardo de tiempo determinado.

El principio de coordinación se basa en la jerarquía:

- Los dispositivos aguas abajo operan primero para fallas locales  
- Los dispositivos aguas arriba actúan como respaldo si la protección aguas abajo falla  

Esto se logra mediante:

- Configurar umbrales de disparo más bajos en dispositivos aguas abajo  
- Introducir retardos de tiempo intencionales en dispositivos aguas arriba  

Gráficamente, la coordinación a menudo se verifica utilizando curvas tiempo-corriente para asegurar la separación entre dispositivos.

## Aplicaciones

La coordinación se aplica en:

- Paneles de distribución y tableros de distribución en baja tensión  
- Switchgear (celdas de media tensión) y sistemas de alimentadores  
- Circuitos de control de motores  
- Esquemas de protección de transformadores  
- Instalaciones industriales con múltiples niveles de distribución  

Es requerida donde múltiples dispositivos de protección están conectados en serie.

## Consideraciones clave

- **Selectividad**  
  Los dispositivos deben operar en la secuencia correcta sin superposición  

- **Curvas tiempo-corriente**  
  El espaciado adecuado entre curvas asegura coordinación bajo diferentes condiciones de falla  

- **Tipos de dispositivos**  
  Mezclar fusibles e interruptores automáticos requiere una comparación cuidadosa de características  

- **Configuración del sistema**  
  Los sistemas radiales y en lazo requieren enfoques de coordinación diferentes  

- **Protección de respaldo**  
  Los dispositivos aguas arriba deben operar aún si los dispositivos aguas abajo fallan  

- **Cambios en el sistema**  
  Agregar cargas o equipo puede requerir re-coordinación  

## Notas prácticas

- La coordinación perfecta puede no ser siempre posible, especialmente a altos niveles de falla  
- La sobre-coordinación puede resultar en tiempos de despeje de falla más lentos  
- La sub-coordinación provoca interrupciones innecesarias  
- La documentación de configuraciones es crítica para mantenimiento y diagnóstico  
- Los estudios de coordinación deben actualizarse cuando el sistema cambia  

# SCADA vs HMI

## Descripción general

SCADA y HMI se utilizan para monitorear e interactuar con sistemas industriales, pero operan en distintos niveles y cumplen funciones diferentes.

Una HMI se enfoca en la interacción local con una máquina o proceso. SCADA proporciona monitoreo centralizado y supervisión sobre múltiples sistemas.

## Propósito

El propósito de diferenciar SCADA y HMI es entender su rol dentro del diseño del sistema.

- La HMI se utiliza para interacción directa con el operador  
- SCADA se utiliza para control supervisado y gestión de datos  

Ambos son complementarios y frecuentemente se utilizan juntos.

## Cómo funciona

### HMI

Una HMI se conecta directamente a un controlador como un PLC.

- Muestra datos en tiempo real  
- Permite la interacción del operador  
- Controla una máquina o proceso específico  

Generalmente opera a nivel de equipo o local.

### SCADA

Un sistema SCADA se conecta a múltiples controladores y sistemas.

- Recopila datos de diversas fuentes  
- Proporciona monitoreo centralizado  
- Almacena datos históricos  
- Permite control supervisado  

Opera a nivel de sistema o planta.

### Diferencias clave

- Alcance  
  - La HMI se enfoca en una máquina o área  
  - SCADA cubre múltiples sistemas o ubicaciones  

- Manejo de datos  
  - La HMI muestra datos actuales  
  - SCADA gestiona datos en tiempo real e históricos  

- Arquitectura  
  - La HMI suele ser un solo dispositivo o estación  
  - SCADA involucra servidores, redes y múltiples clientes  

- Nivel de control  
  - La HMI proporciona control directo del operador  
  - SCADA proporciona control supervisado  

## Aplicaciones

### HMI

- Paneles de control a nivel máquina  
- Estaciones locales de operación  
- Equipos independientes  

### SCADA

- Monitoreo a nivel planta  
- Sistemas distribuidos  
- Redes de servicios e infraestructura  
- Operaciones remotas  

La mayoría de los sistemas industriales utilizan HMI y SCADA en conjunto.

## Consideraciones clave

El tamaño y la complejidad del sistema determinan si se requiere SCADA.

Una HMI es suficiente para sistemas pequeños o independientes.

SCADA es necesario para monitoreo centralizado y análisis de datos.

La integración entre HMI, SCADA y controladores debe estar bien definida.

El costo y la complejidad aumentan con la implementación de SCADA.

## Notas prácticas

Un error común es usar SCADA para tareas que pueden resolverse con una HMI, agregando complejidad innecesaria.

Evita colocar lógica de control crítica en SCADA. El control debe permanecer en el PLC.

Utiliza HMI para interacción rápida con el operador y SCADA para visibilidad a nivel sistema.

Diseña ambos sistemas con información consistente para evitar confusión.
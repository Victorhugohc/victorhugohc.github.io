# CAN bus

## Descripción general

CAN bus es un protocolo de comunicación serial diseñado para el intercambio de datos confiable y en tiempo real entre dispositivos.

Fue desarrollado originalmente para sistemas automotrices, pero se utiliza ampliamente en automatización industrial debido a su robustez y eficiencia.

CAN bus permite que múltiples dispositivos se comuniquen a través de una red compartida sin un controlador central.

## Propósito

El propósito de CAN bus es proporcionar comunicación eficiente y confiable en sistemas con múltiples dispositivos distribuidos.

Se utiliza para:

- Habilitar la comunicación entre controladores y dispositivos de campo  
- Admitir el intercambio de datos en tiempo real  
- Reducir la complejidad del cableado  
- Proporcionar comunicación tolerante a fallos  

Es adecuado para sistemas que requieren mensajería rápida y confiable.

## Cómo funciona

CAN bus opera mediante un modelo de comunicación basado en mensajes sobre un bus compartido.

### Sistema multi-maestro

Todos los dispositivos en la red pueden transmitir datos.

- Ningún maestro único controla la comunicación  
- Los dispositivos compiten por el acceso al bus  
- El arbitraje garantiza que los mensajes de mayor prioridad se transmitan primero  

Esto permite una comunicación flexible y eficiente.

### Comunicación basada en mensajes

Los datos se transmiten en mensajes identificados por un ID.

- El ID del mensaje define la prioridad  
- Los valores de ID más bajos tienen mayor prioridad  
- Los dispositivos leen mensajes según su relevancia  

No hay direcciones fijas de dispositivos de la misma forma que en otros protocolos.

### Arbitraje

Cuando múltiples dispositivos transmiten al mismo tiempo:

- El bus resuelve los conflictos automáticamente  
- El mensaje de mayor prioridad continúa  
- Los dispositivos de menor prioridad reintentan la transmisión  

Esto previene las colisiones de datos.

### Capa física

CAN bus típicamente utiliza señalización diferencial.

- Dos conductores mejoran la inmunidad al ruido  
- Se requieren resistencias de terminación en ambos extremos  

Esto lo hace adecuado para entornos ruidosos.

## Aplicaciones

CAN bus se utiliza en diversos sistemas industriales y embebidos.

Las aplicaciones típicas incluyen:

- Sistemas de control de máquinas  
- Equipos móviles y vehículos  
- Sistemas de control distribuido  
- Redes de sensores y actuadores  

A menudo se utiliza en sistemas con muchos dispositivos pequeños.

## Consideraciones clave

La longitud de red y la velocidad deben equilibrarse.

Se requiere terminación adecuada para una comunicación confiable.

El diseño de mensajes y la asignación de prioridades afectan el rendimiento.

La carga de red debe gestionarse para evitar retardos.

La compatibilidad entre dispositivos debe verificarse.

## Notas prácticas

Un error común es la terminación incorrecta del bus. Coloque siempre resistencias de terminación en ambos extremos.

Evite tráfico de red excesivo que pueda retrasar mensajes críticos.

Utilice tipos de cable adecuados y mantenga la calidad del cableado.

Planifique las prioridades de mensajes cuidadosamente para garantizar que los datos importantes se transmitan primero.

Pruebe la comunicación bajo condiciones reales para verificar el rendimiento del sistema.

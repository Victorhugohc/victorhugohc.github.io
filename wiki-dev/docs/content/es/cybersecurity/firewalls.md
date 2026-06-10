# Firewalls

## Descripción general

Los firewalls son dispositivos de seguridad de red que controlan el tráfico entre diferentes partes de una red.

Actúan como una barrera que permite o bloquea la comunicación según reglas definidas. En sistemas industriales, se utilizan para proteger redes de control y restringir el acceso a dispositivos críticos.

## Propósito

El propósito de los firewalls es:

- Controlar qué sistemas pueden comunicarse  
- Bloquear tráfico no autorizado o innecesario  
- Proteger activos críticos frente a redes externas  
- Aplicar políticas de segmentación de red  

Los firewalls son un componente clave para mantener un comportamiento de red controlado y predecible.

## Cómo funciona

Un firewall inspecciona el tráfico de red y lo compara con un conjunto de reglas.

Estas reglas definen:

- Direcciones de origen y destino  
- Puertos y protocolos de comunicación  
- Acciones permitidas o denegadas  

Cuando el tráfico coincide con una regla, el firewall permite o bloquea la comunicación.

Capacidades comunes incluyen:

- Filtrado de paquetes basado en parámetros básicos  
- Inspección con estado (stateful) que rastrea conexiones activas  
- Inspección profunda para análisis más detallado del tráfico  

En sistemas industriales, los firewalls suelen configurarse para permitir solo la comunicación necesaria y bloquear todo lo demás.

## Aplicaciones

Los firewalls se utilizan en:

- Separación entre redes empresariales y redes industriales  
- Protección de redes de PLC y sistemas de control  
- Arquitecturas de acceso remoto seguro  
- Segmentación de zonas dentro de instalaciones industriales  
- Conexiones con sistemas externos o servicios en la nube  

Son esenciales en cualquier punto donde se requiera comunicación controlada.

## Consideraciones clave

- Definir reglas con base en la comunicación requerida, no en conveniencia  
- Evitar configuraciones demasiado permisivas  
- Asegurar compatibilidad con protocolos industriales  
- Considerar latencia y requisitos de tiempo real  
- Mantener reglas claras y documentadas  

Una configuración incorrecta puede bloquear comunicación crítica o exponer el sistema a riesgos.

## Notas prácticas

- Coloca firewalls en puntos clave entre segmentos de red  
- Utiliza una política de denegación por defecto y permite explícitamente el tráfico necesario  
- Revisa y limpia periódicamente reglas no utilizadas  
- Monitorea los registros del firewall para detectar actividad anormal  
- Evita usar firewalls como única medida de seguridad  

Los firewalls son más efectivos cuando se combinan con un buen diseño de red y control de accesos.
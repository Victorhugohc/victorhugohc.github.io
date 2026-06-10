# Modelo Purdue

## Descripción general

El Modelo Purdue es una arquitectura de referencia utilizada para estructurar sistemas industriales en niveles jerárquicos.

Define cómo se organizan los sistemas desde los procesos físicos hasta los sistemas empresariales. Esta estructura ayuda a gestionar la comunicación, la seguridad y las responsabilidades del sistema.

## Propósito

El propósito del Modelo Purdue es:

- Proporcionar una estructura clara para el diseño de sistemas industriales  
- Separar funciones según su rol y criticidad  
- Controlar el flujo de datos entre diferentes niveles del sistema  
- Soportar la integración segura entre sistemas OT e IT  

Ayuda a los ingenieros a diseñar sistemas más fáciles de gestionar y proteger.

## Cómo funciona

El Modelo Purdue divide los sistemas industriales en niveles, cada uno con una función específica.

### Nivel 0 – Proceso físico

- Sensores y actuadores  
- Interacción directa con el proceso físico  

### Nivel 1 – Control básico

- PLC y controladores locales  
- Control en tiempo real de los equipos  

### Nivel 2 – Control supervisado

- Sistemas HMI y SCADA  
- Monitoreo e interacción con operadores  

### Nivel 3 – Gestión de operaciones

- Sistemas de gestión de producción  
- Agregación de datos y coordinación de operaciones  

### Nivel 4 – Sistemas empresariales

- Sistemas de negocio como ERP  
- Planeación, analítica y procesos empresariales  

La comunicación normalmente fluye entre niveles adyacentes. La comunicación directa entre niveles no contiguos se limita para reducir complejidad y riesgos.

## Aplicaciones

El Modelo Purdue se utiliza en:

- Diseño de arquitecturas de red industrial  
- Integración entre sistemas de control y sistemas empresariales  
- Planificación de ciberseguridad y segmentación  
- Estandarización de estructuras de sistemas entre instalaciones  

Es ampliamente aplicado en manufactura, energía e infraestructura.

## Consideraciones clave

- No todos los sistemas siguen estrictamente cada nivel  
- Las arquitecturas modernas pueden combinar u omitir niveles  
- Las conexiones directas entre niveles lejanos incrementan el riesgo  
- El modelo es una guía, no una regla estricta  
- La integración con tecnologías modernas debe gestionarse cuidadosamente  

El modelo debe adaptarse a las necesidades específicas de cada sistema.

## Notas prácticas

- Utilizar el modelo como punto de partida para estructurar sistemas  
- Definir claramente qué dispositivos pertenecen a cada nivel  
- Controlar la comunicación entre niveles mediante reglas definidas  
- Evitar conexiones innecesarias entre capas de control y empresariales  
- Mantener la documentación alineada con la arquitectura definida  

El Modelo Purdue proporciona un marco claro para organizar sistemas industriales y gestionar sus interacciones.
# Cómo funcionan los sistemas industriales

## Entendiendo el flujo

Los sistemas industriales funcionan procesando continuamente información y energía para lograr un resultado deseado.

A nivel básico, todo sigue un ciclo:

1. Medir  
2. Decidir  
3. Actuar  
4. Repetir  

Este ciclo es la base de todos los sistemas automatizados.

---

## El lazo de control

El núcleo de la mayoría de los sistemas industriales es el lazo de control.

Un lazo de control funciona así:

1. Un sensor mide una condición del mundo real  
2. La información se envía a un controlador  
3. El controlador la compara con un valor deseado (setpoint)  
4. Se toma una decisión  
5. Un actuador ejecuta una acción  
6. El sistema responde  
7. El sensor vuelve a medir  

Este ciclo se ejecuta de forma continua.

---

## Lazo abierto vs lazo cerrado

No todos los sistemas funcionan de la misma manera.

### Lazo abierto

- No hay retroalimentación  
- El sistema actúa sin saber el resultado  

Ejemplo:
- Un motor que funciona por un tiempo fijo sin importar el resultado  

---

### Lazo cerrado

- Utiliza retroalimentación  
- Se ajusta según las condiciones reales  

Ejemplo:
- Un sistema de control de temperatura que mantiene un valor definido  

Los sistemas de lazo cerrado son más precisos y confiables.

---

## Flujo de energía e información

En un sistema se mueven principalmente dos cosas:

### Energía

Permite que el sistema funcione y realice trabajo.

Ejemplos:
- Energía eléctrica  
- Energía mecánica  

---

### Información

Indica al sistema qué debe hacer.

Ejemplos:
- Señales de sensores  
- Lógica de control  
- Datos de comunicación  

---

## La importancia del tiempo

Los sistemas industriales no operan de forma aleatoria. El tiempo es crítico.

Los controladores (como los PLC) trabajan en ciclos:

1. Leer entradas  
2. Ejecutar lógica  
3. Actualizar salidas  

Esto se conoce como ciclo de escaneo.

Un tiempo rápido y consistente asegura un funcionamiento estable.

---

## Ejemplo: sistema de control de temperatura

Un sistema simple funciona así:

- Un sensor mide la temperatura  
- El controlador la compara con un valor deseado  
- Si la temperatura es baja, se activa un calentador  
- Si la temperatura es alta, se apaga  
- El sistema se ajusta continuamente  

Este es un ejemplo clásico de lazo cerrado.

---

## Interacción entre subsistemas

Los sistemas industriales no están aislados.

Sus partes interactúan constantemente:

- La energía permite la operación  
- El control define el comportamiento  
- Los dispositivos de campo interactúan con la realidad  
- La comunicación conecta todo  
- Las interfaces permiten la interacción humana  

Entender estas interacciones es clave para entender el sistema.

---

## Error común

Un error común es enfocarse solo en los componentes.

Por ejemplo:
- Aprender qué es un PLC  
- Aprender qué es un motor  

Sin entender cómo trabajan juntos.

El entendimiento real viene de ver el sistema completo.

---

## Idea clave

Los sistemas industriales funcionan mediante ciclos continuos de:

- Medición  
- Procesamiento  
- Acción  

Todo está conectado y todo forma parte de un ciclo.
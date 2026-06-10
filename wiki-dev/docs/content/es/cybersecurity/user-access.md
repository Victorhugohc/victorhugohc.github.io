# Acceso de usuarios

## Descripción general

El acceso de usuarios define cómo las personas interactúan con los sistemas industriales y qué acciones tienen permitido realizar.

Incluye autenticación, autorización y trazabilidad (*accountability*). Un control adecuado del acceso garantiza que solo el personal autorizado pueda operar, modificar o mantener los sistemas.

## Propósito

El propósito del control de acceso de usuarios es:

- Restringir la interacción con el sistema a usuarios autorizados  
- Limitar acciones según roles y responsabilidades  
- Proteger sistemas críticos contra uso indebido o cambios accidentales  
- Proporcionar trazabilidad de las actividades de los usuarios  

Un control de acceso efectivo reduce riesgos tanto intencionales como no intencionales.

## Cómo funciona

El acceso de usuarios se gestiona asignando identidades y permisos.

Esto generalmente implica:

- Autenticación para verificar la identidad del usuario  
- Autorización para definir las acciones permitidas  
- Registro (*logging*) para documentar la actividad del usuario  

El acceso suele estructurarse mediante roles, donde cada rol tiene permisos predefinidos. Los usuarios se asignan a roles según su función, como operador, ingeniero o administrador.

Los sistemas pueden incluir:

- Cuentas de usuario locales en dispositivos  
- Sistemas de autenticación centralizados  
- Mecanismos de control de acceso basado en roles (*RBAC*)  

El objetivo es asegurar que los usuarios puedan realizar sus tareas sin tener privilegios innecesarios.

## Aplicaciones

El control de acceso de usuarios se aplica en:

- Herramientas de programación y configuración de PLC  
- Sistemas SCADA y HMI  
- Estaciones de ingeniería  
- Dispositivos de red y servidores  
- Plataformas de acceso remoto  

Es relevante en cualquier lugar donde un usuario interactúe con un sistema.

## Consideraciones clave

- Aplicar el principio de mínimo privilegio  
- Evitar cuentas compartidas o genéricas  
- Utilizar métodos de autenticación robustos  
- Revisar y actualizar periódicamente los permisos de usuario  
- Asegurar que el control de acceso no interfiera con la operación segura  

Un mal control de acceso puede provocar cambios no autorizados o uso indebido del sistema.

## Notas prácticas

- Asignar roles basados en responsabilidades reales del puesto  
- Retirar accesos cuando el personal cambie de rol o deje la organización  
- Usar cuentas únicas por usuario para garantizar trazabilidad  
- Implementar tiempos de expiración de sesión cuando sea apropiado  
- Monitorear y revisar periódicamente los registros de acceso  

El acceso de usuarios debe ser fácil de administrar, pero lo suficientemente estricto para proteger sistemas críticos.
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Inicio',
    collapsed: false,
    items: [
      { text: 'Descripción general', link: '/es/home/overview' },
      { text: 'Road Map', link: '/es/home/road-map' },
      { text: 'Apoya', link: '/es/home/support' },
      { text: 'Cómo contribuir', link: '/es/home/contribute' }
    ]
  },

  {
    text: 'Conceptos',
    collapsed: false,
    items: [
      { text: 'Visión del sistema', link: '/es/concepts/system-overview' },
      { text: 'Cómo funcionan los sistemas industriales', link: '/es/concepts/how-industrial-systems-work' }
    ]
  },

//   {
//     text: 'Fundamentos eléctricos',
//     collapsed: true,
//     items: [
//       { text: 'Voltaje', link: '/es/electrical-fundamentals/voltage' },
//       { text: 'Corriente', link: '/es/electrical-fundamentals/current' },
//       { text: 'Resistencia', link: '/es/electrical-fundamentals/resistance' },
//       { text: 'Ley de Ohm', link: '/es/electrical-fundamentals/ohms-law' },
//       { text: 'Potencia eléctrica', link: '/es/electrical-fundamentals/electric-power' },
//       { text: 'CA vs CD', link: '/es/electrical-fundamentals/ac-vs-dc' },
//       { text: 'Monofásico', link: '/es/electrical-fundamentals/single-phase' },
//       { text: 'Trifásico', link: '/es/electrical-fundamentals/three-phase' },
//       { text: 'Factor de potencia', link: '/es/electrical-fundamentals/power-factor' },
//       { text: 'Puesta a tierra', link: '/es/electrical-fundamentals/grounding' },
//       { text: 'Ruido eléctrico', link: '/es/electrical-fundamentals/electrical-noise' }
//     ]
//   },

//     {
//     text: 'Sistemas de potencia',
//     collapsed: true,
//     items: [
//       { text: 'Descripción general', link: '/es/power-systems/overview' },

//       {
//         text: 'Distribución',
//         collapsed: true,
//         items: [
//           { text: 'Sistemas de distribución', link: '/es/power-systems/distribution/distribution-systems' },
//           { text: 'Baja tensión', link: '/es/power-systems/distribution/low-voltage' },
//           { text: 'Media tensión', link: '/es/power-systems/distribution/medium-voltage' },
//           { text: 'Transformadores', link: '/es/power-systems/distribution/transformers' }
//         ]
//       },

//       {
//         text: 'Equipos',
//         collapsed: true,
//         items: [
//           { text: 'Switchgear', link: '/es/power-systems/equipment/switchgear' },
//           { text: 'Tableros de distribución', link: '/es/power-systems/equipment/switchboards' },
//           { text: 'Barras colectoras', link: '/es/power-systems/equipment/busbars' },
//           { text: 'Paneles de distribución', link: '/es/power-systems/equipment/distribution-panels' }
//         ]
//       },

//       {
//         text: 'Protección',
//         collapsed: true,
//         items: [
//           { text: 'Fundamentos de protección', link: '/es/power-systems/protection/protection-basics' },
//           { text: 'Dispositivos de protección', link: '/es/power-systems/protection/protective-devices' },
//           { text: 'Protección contra sobrecorriente', link: '/es/power-systems/protection/overcurrent-protection' },
//           { text: 'Coordinación de protecciones', link: '/es/power-systems/protection/coordination-of-protections' },
//           { text: 'Arco eléctrico (Arc Flash)', link: '/es/power-systems/protection/arc-flash-basics' }
//         ]
//       },

//       {
//         text: 'Estudios',
//         collapsed: true,
//         items: [
//           { text: 'Análisis de cortocircuito', link: '/es/power-systems/studies/short-circuit-analysis' }
//         ]
//       },

//       { text: 'Selección de equipos', link: '/es/power-systems/equipment-selection' }
//     ]
//   },

//   {
//     text: 'Calidad de energía',
//     collapsed: true,
//     items: [
//       { text: 'Descripción general', link: '/es/power-quality/overview' },
//       { text: 'Huecos de tensión', link: '/es/power-quality/voltage-sags' },
//       { text: 'Sobretensiones', link: '/es/power-quality/voltage-swells' },
//       { text: 'Armónicos', link: '/es/power-quality/harmonics' },
//       { text: 'THD', link: '/es/power-quality/thd' },
//       { text: 'Corrección del factor de potencia', link: '/es/power-quality/power-factor-correction' },
//       { text: 'Flicker', link: '/es/power-quality/flicker' },
//       { text: 'Transientes y sobretensiones', link: '/es/power-quality/transients-surges' },
//       { text: 'Monitoreo', link: '/es/power-quality/monitoring' }
//     ]
//   },

  {
    text: 'Cables',
    collapsed: false,
    items: [
      { text: 'Descripción general', link: '/es/cables/overview' },
      { text: 'Materiales conductores', link: '/es/cables/conductor-materials' },
      { text: 'Tipos de cables', link: '/es/cables/cable-types' },
      { text: 'Cables de potencia', link: '/es/cables/power-cables' },
      { text: 'Cables de control', link: '/es/cables/control-cables' },
      { text: 'Cables de comunicación', link: '/es/cables/communication-cables' },
      { text: 'Cables apantallados', link: '/es/cables/shielded' },
      { text: 'Cables de instrumentación', link: '/es/cables/instrumentation' },
      { text: 'Cálculo de cables', link: '/es/cables/cable-sizing' },
      { text: 'Caída de tensión', link: '/es/cables/voltage-drop' },
      { text: 'Capacidad de corriente', link: '/es/cables/current-capacity' },
      { text: 'Ruteo', link: '/es/cables/routing' },
      { text: 'Charolas', link: '/es/cables/trays' },
      { text: 'Conduit', link: '/es/cables/conduit' },
      { text: 'Selección de cables', link: '/es/cables/cable-selection' }
    ]
  },

//     {
//     text: 'Equipos industriales',
//     collapsed: true,
//     items: [
//       {
//         text: 'Motores',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/industrial-equipment/motors/motors-overview' },
//           { text: 'Tipos de motores', link: '/es/industrial-equipment/motors/motor-types' },
//           { text: 'Motores de inducción', link: '/es/industrial-equipment/motors/induction-motors' },
//           { text: 'Motores síncronos', link: '/es/industrial-equipment/motors/synchronous-motors' },
//           { text: 'Motores de CD', link: '/es/industrial-equipment/motors/dc-motors' },
//           { text: 'Servomotores', link: '/es/industrial-equipment/motors/servo-motors' },
//           { text: 'Motores paso a paso', link: '/es/industrial-equipment/motors/stepper-motors' },
//           { text: 'Placas de datos', link: '/es/industrial-equipment/motors/motor-nameplates' },
//           { text: 'Eficiencia de motores', link: '/es/industrial-equipment/motors/motor-efficiency' },
//           { text: 'Enfriamiento', link: '/es/industrial-equipment/motors/motor-cooling' },
//           { text: 'Protección de motores', link: '/es/industrial-equipment/motors/motor-protection' },
//           { text: 'Selección de motores', link: '/es/industrial-equipment/motors/motor-selection' }
//         ]
//       },

//       {
//         text: 'Drives',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/industrial-equipment/drives/drives-overview' },
//           { text: 'Variadores de frecuencia (VFD)', link: '/es/industrial-equipment/drives/vfd' },
//           { text: 'Servodrives', link: '/es/industrial-equipment/drives/servo-drives' },
//           { text: 'Controladores de movimiento', link: '/es/industrial-equipment/drives/motion-controllers' },
//           { text: 'Control de velocidad', link: '/es/industrial-equipment/drives/speed-control' },
//           { text: 'Control de torque', link: '/es/industrial-equipment/drives/torque-control' },
//           { text: 'Selección de drives', link: '/es/industrial-equipment/drives/drive-selection' }
//         ]
//       },

//       {
//         text: 'Sensores',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/industrial-equipment/sensors/sensors-overview' },
//           { text: 'Tipos de sensores', link: '/es/industrial-equipment/sensors/sensor-types' },
//           { text: 'Selección de sensores', link: '/es/industrial-equipment/sensors/sensor-selection' }
//         ]
//       },

//       {
//         text: 'Actuadores',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/industrial-equipment/actuators/actuators-overview' },
//           { text: 'Actuadores eléctricos', link: '/es/industrial-equipment/actuators/electric-actuators' },
//           { text: 'Neumática', link: '/es/industrial-equipment/actuators/pneumatic' },
//           { text: 'Hidráulica', link: '/es/industrial-equipment/actuators/hydraulic' },
//           { text: 'Solenoides', link: '/es/industrial-equipment/actuators/solenoids' },
//           { text: 'Válvulas de control', link: '/es/industrial-equipment/actuators/control-valves' },
//           { text: 'Selección de actuadores', link: '/es/industrial-equipment/actuators/actuator-selection' }
//         ]
//       }
//     ]
//   },

//   {
//     text: 'Sistemas de control',
//     collapsed: true,
//     items: [
//       {
//         text: 'Fundamentos',
//         collapsed: true,
//         items: [
//           { text: 'Filosofía de control', link: '/es/control-systems/basics/control-philosophy' },
//           { text: 'Lazo abierto vs lazo cerrado', link: '/es/control-systems/basics/open-vs-closed-loop' },
//           { text: 'Fundamentos de PID', link: '/es/control-systems/basics/pid-basics' }
//         ]
//       },

//       {
//         text: 'PLC',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/control-systems/plc/plc-overview' },
//           { text: 'Arquitectura del PLC', link: '/es/control-systems/plc/plc-architecture' },
//           { text: 'Ciclo de escaneo', link: '/es/control-systems/plc/plc-scan-cycle' },
//           { text: 'CPU', link: '/es/control-systems/plc/plc-cpu' },
//           { text: 'Memoria', link: '/es/control-systems/plc/plc-memory' },
//           { text: 'Entradas y salidas (I/O)', link: '/es/control-systems/plc/plc-io' },
//           { text: 'Digital vs analógico', link: '/es/control-systems/plc/digital-vs-analog' },
//           { text: 'Comunicación', link: '/es/control-systems/plc/plc-communication' },
//           { text: 'Lógica Ladder', link: '/es/control-systems/plc/ladder-logic' },
//           { text: 'Bloques de función', link: '/es/control-systems/plc/function-block' },
//           { text: 'Texto estructurado', link: '/es/control-systems/plc/structured-text' },
//           { text: 'SFC', link: '/es/control-systems/plc/sfc' },
//           { text: 'Selección de PLC', link: '/es/control-systems/plc/plc-selection' },
//           { text: 'Diseño básico', link: '/es/control-systems/plc/plc-basic-design' }
//         ]
//       },

//       {
//         text: 'HMI',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/control-systems/hmi/hmi-overview' },
//           { text: 'Arquitectura HMI', link: '/es/control-systems/hmi/hmi-architecture' },
//           { text: 'Diseño de interfaces', link: '/es/control-systems/hmi/hmi-design' },
//           { text: 'Gestión de alarmas', link: '/es/control-systems/hmi/alarm-management' }
//         ]
//       },

//       {
//         text: 'SCADA',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/control-systems/scada/scada-overview' },
//           { text: 'Arquitectura SCADA', link: '/es/control-systems/scada/scada-architecture' },
//           { text: 'Historiador', link: '/es/control-systems/scada/historian' },
//           { text: 'SCADA vs HMI', link: '/es/control-systems/scada/scada-vs-hmi' }
//         ]
//       }
//     ]
//   },

//     {
//     text: 'Instrumentación',
//     collapsed: true,
//     items: [
//       { text: 'Fundamentos de medición', link: '/es/instrumentation/measurement-basics' },
//       { text: 'Señales 4-20 mA', link: '/es/instrumentation/4-20ma-signals' },
//       { text: 'Señales analógicas vs digitales', link: '/es/instrumentation/analog-vs-digital-signals' },
//       { text: 'Acondicionamiento de señal', link: '/es/instrumentation/signal-conditioning' },
//       { text: 'Ruido e interferencia', link: '/es/instrumentation/noise-and-interference' },
//       { text: 'Puesta a tierra y apantallamiento', link: '/es/instrumentation/grounding-and-shielding' },
//       { text: 'Calibración', link: '/es/instrumentation/calibration' },
//       { text: 'Selección de instrumentación', link: '/es/instrumentation/instrumentation-selection' }
//     ]
//   },

//   {
//     text: 'Redes industriales',
//     collapsed: true,
//     items: [
//       {
//         text: 'Protocolos',
//         collapsed: true,
//         items: [
//           { text: 'Ethernet', link: '/es/networks/protocols/ethernet' },
//           { text: 'EtherNet/IP', link: '/es/networks/protocols/ethernet-ip' },
//           { text: 'Modbus RTU', link: '/es/networks/protocols/modbus-rtu' },
//           { text: 'Modbus TCP', link: '/es/networks/protocols/modbus-tcp' },
//           { text: 'Profinet', link: '/es/networks/protocols/profinet' },
//           { text: 'Profibus', link: '/es/networks/protocols/profibus' },
//           { text: 'CAN Bus', link: '/es/networks/protocols/can-bus' },
//           { text: 'DeviceNet', link: '/es/networks/protocols/devicenet' },
//           { text: 'OPC UA', link: '/es/networks/protocols/opc-ua' }
//         ]
//       },

//       {
//         text: 'Hardware',
//         collapsed: true,
//         items: [
//           { text: 'Switches', link: '/es/networks/hardware/switches' },
//           { text: 'Routers', link: '/es/networks/hardware/routers' },
//           { text: 'Gateways', link: '/es/networks/hardware/gateways' },
//           { text: 'Firewalls', link: '/es/networks/hardware/firewalls' }
//         ]
//       },

//       {
//         text: 'Acceso remoto',
//         collapsed: true,
//         items: [
//           { text: 'Acceso remoto', link: '/es/networks/remote-access/remote-access' },
//           { text: 'VPN', link: '/es/networks/remote-access/vpn' },
//           { text: 'Acceso remoto seguro', link: '/es/networks/remote-access/secure-remote-access' }
//         ]
//       },

//       { text: 'Arquitecturas', link: '/es/networks/architectures' },
//       { text: 'Casos de uso', link: '/es/networks/use-cases' },
//       { text: 'Diseño de red', link: '/es/networks/network-design' }
//     ]
//   },

//   {
//     text: 'Tableros de control',
//     collapsed: true,
//     items: [
//       { text: 'Descripción general', link: '/es/control-panels/overview' },
//       { text: 'Layout', link: '/es/control-panels/layout' },
//       { text: 'Cableado', link: '/es/control-panels/wiring' },
//       { text: 'Gestión de cables', link: '/es/control-panels/cable-management' },
//       { text: 'Interruptores', link: '/es/control-panels/breakers' },
//       { text: 'Contactores', link: '/es/control-panels/contactors' },
//       { text: 'Relés de sobrecarga', link: '/es/control-panels/overload-relays' },
//       { text: 'Fuentes de alimentación', link: '/es/control-panels/power-supplies' },
//       { text: 'Bloques terminales', link: '/es/control-panels/terminal-blocks' },
//       { text: 'Diseño de tableros', link: '/es/control-panels/panel-design' },
//       { text: 'Selección de componentes', link: '/es/control-panels/component-selection' }
//     ]
//   },

//   {
//     text: 'Seguridad',
//     collapsed: true,
//     items: [
//       { text: 'Fundamentos', link: '/es/safety/basics' },
//       { text: 'Evaluación de riesgos', link: '/es/safety/risk-assessment' },
//       { text: 'Categorías de seguridad', link: '/es/safety/categories' },
//       { text: 'Paro de emergencia', link: '/es/safety/emergency-stop' },
//       { text: 'Relés de seguridad', link: '/es/safety/safety-relays' },
//       { text: 'PLC de seguridad', link: '/es/safety/safety-plc' },
//       { text: 'Lockout/Tagout', link: '/es/safety/lockout-tagout' }
//     ]
//   },

//   {
//     text: 'Puesta en marcha',
//     collapsed: true,
//     items: [
//       { text: 'Pre-comisionamiento', link: '/es/commissioning/pre-commissioning' },
//       { text: 'Pruebas de lazo', link: '/es/commissioning/loop-checks' },
//       { text: 'Arranque', link: '/es/commissioning/startup' },
//       { text: 'Pruebas y validación', link: '/es/commissioning/testing-and-validation' },
//       { text: 'Documentación', link: '/es/commissioning/documentation' }
//     ]
//   },

//     {
//     text: 'Prácticas industriales',
//     collapsed: true,
//     items: [
//       { text: 'Descripción general', link: '/es/industrial-practices/overview' },

//       {
//         text: 'Etiquetado',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/industrial-practices/labeling/labeling-overview' },
//           { text: 'Por qué es importante', link: '/es/industrial-practices/labeling/why-labeling-matters' },
//           { text: 'Normas de etiquetado', link: '/es/industrial-practices/labeling/labeling-standards' },
//           { text: 'Tipos de etiquetas', link: '/es/industrial-practices/labeling/label-types' },
//           { text: 'Materiales y durabilidad', link: '/es/industrial-practices/labeling/materials-and-durability' },
//           { text: 'Etiquetado de cables', link: '/es/industrial-practices/labeling/cable-and-wire-labeling' },
//           { text: 'Etiquetado de tableros', link: '/es/industrial-practices/labeling/panel-and-component-labeling' },
//           { text: 'Documentación de máquinas', link: '/es/industrial-practices/labeling/machine-documentation' },
//           { text: 'Buenas prácticas', link: '/es/industrial-practices/labeling/best-practices' }
//         ]
//       },

//       {
//         text: 'Iluminación',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/industrial-practices/lighting/lighting-overview' },
//           { text: 'Por qué es importante', link: '/es/industrial-practices/lighting/why-lighting-matters' },
//           { text: 'Tipos de iluminación', link: '/es/industrial-practices/lighting/lighting-types' },
//           { text: 'Distribución y colocación', link: '/es/industrial-practices/lighting/placement-and-distribution' },
//           { text: 'Niveles de iluminación (lux)', link: '/es/industrial-practices/lighting/illumination-levels-lux' },
//           { text: 'Potencia y eficiencia', link: '/es/industrial-practices/lighting/power-and-efficiency' },
//           { text: 'Ambientes industriales', link: '/es/industrial-practices/lighting/industrial-environments' },
//           { text: 'Iluminación de emergencia', link: '/es/industrial-practices/lighting/safety-and-emergency-lighting' },
//           { text: 'Diseño básico de iluminación', link: '/es/industrial-practices/lighting/lighting-design-basics' }
//         ]
//       },

//       {
//         text: 'Documentación',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/industrial-practices/documentation/documentation-overview' },
//           { text: 'Instrucciones de máquina', link: '/es/industrial-practices/documentation/machine-instructions' },
//           { text: 'Diagramas eléctricos', link: '/es/industrial-practices/documentation/electrical-drawings' },
//           { text: 'Guías de mantenimiento', link: '/es/industrial-practices/documentation/maintenance-guides' },
//           { text: 'Información para operadores', link: '/es/industrial-practices/documentation/operator-information' }
//         ]
//       },

//       {
//         text: 'Instalación y montaje',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/industrial-practices/installation-and-mounting/overview' },
//           { text: 'Principios generales', link: '/es/industrial-practices/installation-and-mounting/general-principles' },
//           { text: 'Alineación', link: '/es/industrial-practices/installation-and-mounting/alignment' },
//           { text: 'Vibraciones', link: '/es/industrial-practices/installation-and-mounting/vibrations' },
//           { text: 'Errores comunes', link: '/es/industrial-practices/installation-and-mounting/common-mistakes' }
//         ]
//       },

//       {
//         text: 'Condiciones ambientales',
//         collapsed: true,
//         items: [
//           { text: 'Descripción general', link: '/es/industrial-practices/environmental-conditions/overview' },
//           { text: 'Factores', link: '/es/industrial-practices/environmental-conditions/factors' },
//           { text: 'Grados de protección (IP)', link: '/es/industrial-practices/environmental-conditions/ip-ratings' },
//           { text: 'Selección general', link: '/es/industrial-practices/environmental-conditions/general-selection' }
//         ]
//       }
//     ]
//   },

//   {
//     text: 'Eficiencia energética',
//     collapsed: true,
//     items: [
//       { text: 'Descripción general', link: '/es/energy-efficiency/overview' },
//       { text: 'Dónde se usa la energía', link: '/es/energy-efficiency/where-energy-is-used' },
//       { text: 'Oportunidades de ahorro', link: '/es/energy-efficiency/energy-saving-opportunities' },
//       { text: 'Integración de renovables', link: '/es/energy-efficiency/renewable-integration' }
//     ]
//   },

//   {
//     text: 'Herramientas',
//     collapsed: true,
//     items: [
//       { text: 'Fórmulas', link: '/es/tools/formulas' },
//       { text: 'Conversión de unidades', link: '/es/tools/unit-conversions' },
//       { text: 'Valores típicos', link: '/es/tools/typical-values' },
//       { text: 'Reglas prácticas', link: '/es/tools/rules-of-thumb' }
//     ]
//   },

//   {
//     text: 'Normas',
//     collapsed: true,
//     items: [
//       { text: 'Descripción general', link: '/es/standards/overview' },
//       { text: 'UL', link: '/es/standards/ul' },
//       { text: 'UL 508A', link: '/es/standards/ul-508a' },
//       { text: 'UL 489', link: '/es/standards/ul-489' },
//       { text: 'IEC', link: '/es/standards/iec' },
//       { text: 'ISO', link: '/es/standards/iso' },
//       { text: 'NEMA', link: '/es/standards/nema' },
//       { text: 'NOM', link: '/es/standards/nom' }
//     ]
//   },

//   {
//     text: 'Ciberseguridad',
//     collapsed: true,
//     items: [
//       { text: 'Descripción general', link: '/es/cybersecurity/overview' },
//       { text: 'Amenazas', link: '/es/cybersecurity/threats' },
//       { text: 'Segmentación', link: '/es/cybersecurity/segmentation' },
//       { text: 'Firewalls', link: '/es/cybersecurity/firewalls' },
//       { text: 'Acceso remoto seguro', link: '/es/cybersecurity/secure-remote-access' },
//       { text: 'Actualizaciones (Patching)', link: '/es/cybersecurity/patching' },
//       { text: 'Control de usuarios', link: '/es/cybersecurity/user-access' },
//       { text: 'IEC 62443', link: '/es/cybersecurity/iec-62443' }
//     ]
//   },

//   {
//     text: 'Digitalización',
//     collapsed: true,
//     items: [
//       { text: 'OT vs IT', link: '/es/digitalization/ot-vs-it' },
//       { text: 'Arquitectura de red', link: '/es/digitalization/network-architecture' },
//       { text: 'Modelo Purdue', link: '/es/digitalization/purdue-model' },
//       { text: 'Edge Computing', link: '/es/digitalization/edge-computing' },
//       { text: 'Recolección de datos', link: '/es/digitalization/data-collection' },
//       { text: 'Cloud', link: '/es/digitalization/cloud' },
//       { text: 'IIoT', link: '/es/digitalization/iiot' }
//     ]
//   }
]
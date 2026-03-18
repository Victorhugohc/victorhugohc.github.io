import type { DefaultTheme } from 'vitepress'

export const sidebarES: DefaultTheme.Sidebar = [
  {
    text: 'Inicio',
    collapsed: false,
    items: [
      { text: 'Descripción general', link: '/es/home/overview' },
      { text: 'Objetivos del proyecto', link: '/es/home/project-goals' },
      { text: 'Donaciones', link: '/es/home/donations' },
      { text: 'Conviértete en socio', link: '/es/home/become-a-partner' },
      { text: 'Cómo contribuir', link: '/es/home/how-to-contribute' }
    ]
  },

  {
    text: 'Primeros pasos',
    collapsed: false,
    items: [
      { text: 'Qué es este Handbook', link: '/es/getting-started/what-is-this-handbook' },
      { text: 'Cómo usar este Handbook', link: '/es/getting-started/how-to-use-this-handbook' },
      { text: 'Para quién es', link: '/es/getting-started/who-this-is-for' },
      { text: 'Cómo navegar el Handbook', link: '/es/getting-started/how-to-navigate-the-handbook' }
    ]
  },

  {
    text: 'Fundamentos eléctricos',
    collapsed: true,
    items: [
      { text: 'Voltaje', link: '/es/electrical-fundamentals/voltage' },
      { text: 'Corriente', link: '/es/electrical-fundamentals/current' },
      { text: 'Resistencia', link: '/es/electrical-fundamentals/resistance' },
      { text: 'Ley de Ohm', link: '/es/electrical-fundamentals/ohms-law' },
      { text: 'Potencia eléctrica', link: '/es/electrical-fundamentals/electric-power' },
      { text: 'CA vs CC', link: '/es/electrical-fundamentals/ac-vs-dc' },
      { text: 'Sistemas monofásicos', link: '/es/electrical-fundamentals/single-phase-systems' },
      { text: 'Sistemas trifásicos', link: '/es/electrical-fundamentals/three-phase-systems' },
      { text: 'Factor de potencia', link: '/es/electrical-fundamentals/power-factor' },
      { text: 'Puesta a tierra', link: '/es/electrical-fundamentals/grounding' },
      { text: 'Ruido eléctrico', link: '/es/electrical-fundamentals/electrical-noise' }
    ]
  },

  {
    text: 'Calidad de energía',
    collapsed: true,
    items: [
      { text: 'Qué es la calidad de energía', link: '/es/power-quality/what-is-power-quality' },
      { text: 'Caídas de voltaje', link: '/es/power-quality/voltage-sags' },
      { text: 'Elevaciones de voltaje', link: '/es/power-quality/voltage-swells' },
      { text: 'Armónicos', link: '/es/power-quality/harmonics' },
      { text: 'Distorsión armónica total', link: '/es/power-quality/total-harmonic-distortion' },
      { text: 'Corrección del factor de potencia', link: '/es/power-quality/power-factor-correction' },
      { text: 'Flicker', link: '/es/power-quality/flicker' },
      { text: 'Transientes y sobretensiones', link: '/es/power-quality/transients-and-surges' },
      { text: 'Monitoreo de calidad de energía', link: '/es/power-quality/power-quality-monitoring' }
    ]
  },

  {
    text: 'Distribución eléctrica',
    collapsed: true,
    items: [
      { text: 'Sistemas de distribución eléctrica', link: '/es/power-distribution/electrical-distribution-systems' },
      { text: 'Distribución de baja tensión', link: '/es/power-distribution/low-voltage-distribution' },
      { text: 'Distribución de media tensión', link: '/es/power-distribution/medium-voltage-distribution' },
      { text: 'Tableros principales', link: '/es/power-distribution/main-distribution-panels' },
      { text: 'Subtableros', link: '/es/power-distribution/sub-distribution-panels' },
      { text: 'Switchgear', link: '/es/power-distribution/switchgear' },
      { text: 'Switchboards', link: '/es/power-distribution/switchboards' },
      { text: 'Barras colectoras', link: '/es/power-distribution/busbars' },
      { text: 'Transformadores', link: '/es/power-distribution/transformers' },
      { text: 'Sistemas de puesta a tierra', link: '/es/power-distribution/grounding-systems' }
    ]
  },

  {
    text: 'Motores eléctricos',
    collapsed: true,
    items: [
      { text: 'Fundamentos de motores', link: '/es/electric-motors/motor-fundamentals' },
      { text: 'Motores AC', link: '/es/electric-motors/ac-motors' },
      { text: 'Motores DC', link: '/es/electric-motors/dc-motors' },
      { text: 'Motores de inducción', link: '/es/electric-motors/induction-motors' },
      { text: 'Motores síncronos', link: '/es/electric-motors/synchronous-motors' },
      { text: 'Servomotores', link: '/es/electric-motors/servo-motors' },
      { text: 'Motores paso a paso', link: '/es/electric-motors/stepper-motors' },
      { text: 'Placas de datos', link: '/es/electric-motors/motor-nameplates' },
      { text: 'Eficiencia de motores', link: '/es/electric-motors/motor-efficiency' },
      { text: 'Enfriamiento', link: '/es/electric-motors/motor-cooling' },
      { text: 'Protección', link: '/es/electric-motors/motor-protection' }
    ]
  },

    {
    text: 'Control de motores',
    collapsed: true,
    items: [
      { text: 'Centros de control de motores', link: '/es/motor-control/motor-control-centers' },
      { text: 'Arquitectura MCC', link: '/es/motor-control/mcc-architecture' },
      { text: 'Buckets de MCC', link: '/es/motor-control/mcc-buckets' },
      { text: 'Arrancadores de motor', link: '/es/motor-control/motor-starters' },
      { text: 'Arranque directo (DOL)', link: '/es/motor-control/direct-on-line-starters' },
      { text: 'Arranque estrella-delta', link: '/es/motor-control/star-delta-starters' },
      { text: 'Soft starters', link: '/es/motor-control/soft-starters' },
      { text: 'Variadores de frecuencia', link: '/es/motor-control/variable-frequency-drives' }
    ]
  },

  {
    text: 'Cables y cableado',
    collapsed: true,
    items: [
      { text: 'Introducción a cables', link: '/es/cables-and-wiring/electrical-cables-overview' },
      { text: 'Materiales conductores', link: '/es/cables-and-wiring/conductor-materials' },
      { text: 'Tipos de cable', link: '/es/cables-and-wiring/cable-types' },
      { text: 'Cables blindados', link: '/es/cables-and-wiring/shielded-cables' },
      { text: 'Cables de instrumentación', link: '/es/cables-and-wiring/instrumentation-cables' },
      { text: 'Cables de potencia', link: '/es/cables-and-wiring/power-cables' },
      { text: 'Cables de control', link: '/es/cables-and-wiring/control-cables' },
      { text: 'Cables de comunicación', link: '/es/cables-and-wiring/communication-cables' },
      { text: 'Dimensionamiento de cables', link: '/es/cables-and-wiring/cable-sizing' },
      { text: 'Caída de voltaje', link: '/es/cables-and-wiring/voltage-drop' },
      { text: 'Capacidad de corriente', link: '/es/cables-and-wiring/current-carrying-capacity' },
      { text: 'Ruteo de cables', link: '/es/cables-and-wiring/cable-routing' },
      { text: 'Bandejas portacables', link: '/es/cables-and-wiring/cable-trays' },
      { text: 'Sistemas de conduit', link: '/es/cables-and-wiring/conduit-systems' }
    ]
  },

  {
    text: 'Control industrial',
    collapsed: true,
    items: [
      { text: 'Qué es un PLC', link: '/es/industrial-control/plc/what-is-a-plc' },
      { text: 'Arquitectura de PLC', link: '/es/industrial-control/plc/plc-architecture' },
      { text: 'Ciclo de escaneo del PLC', link: '/es/industrial-control/plc/plc-scan-cycle' },
      { text: 'CPU del PLC', link: '/es/industrial-control/plc/plc-cpu' },
      { text: 'Memoria del PLC', link: '/es/industrial-control/plc/plc-memory' },
      { text: 'Módulos I/O del PLC', link: '/es/industrial-control/plc/plc-io-modules' },
      { text: 'Entradas y salidas', link: '/es/industrial-control/plc/inputs-and-outputs' },
      { text: 'Señales digitales vs analógicas', link: '/es/industrial-control/plc/digital-vs-analog-signals' },
      { text: 'Lógica Ladder', link: '/es/industrial-control/plc/ladder-logic' },
      { text: 'Diagrama de bloques de función', link: '/es/industrial-control/plc/function-block-diagram' },
      { text: 'Texto estructurado', link: '/es/industrial-control/plc/structured-text' },
      { text: 'Sequential Function Chart', link: '/es/industrial-control/plc/sequential-function-chart' },
      { text: 'Cómo seleccionar un PLC', link: '/es/industrial-control/plc/how-to-select-a-plc' },
      { text: 'Qué es un HMI', link: '/es/industrial-control/hmi/what-is-an-hmi' },
      { text: 'Arquitectura HMI', link: '/es/industrial-control/hmi/hmi-architecture' },
      { text: 'Principios de diseño HMI', link: '/es/industrial-control/hmi/hmi-design-principles' },
      { text: 'Gestión de alarmas', link: '/es/industrial-control/hmi/alarm-management' },
      { text: 'Qué es SCADA', link: '/es/industrial-control/scada/what-is-scada' },
      { text: 'Arquitectura SCADA', link: '/es/industrial-control/scada/scada-architecture' },
      { text: 'Historiador de datos', link: '/es/industrial-control/scada/data-historian' },
      { text: 'SCADA vs HMI', link: '/es/industrial-control/scada/scada-vs-hmi' }
    ]
  },

  {
    text: 'Redes industriales',
    collapsed: true,
    items: [
      { text: 'Ethernet industrial', link: '/es/industrial-networks/industrial-ethernet' },
      { text: 'EtherNet/IP', link: '/es/industrial-networks/ethernet-ip' },
      { text: 'Modbus RTU', link: '/es/industrial-networks/modbus-rtu' },
      { text: 'Modbus TCP', link: '/es/industrial-networks/modbus-tcp' },
      { text: 'Profinet', link: '/es/industrial-networks/profinet' },
      { text: 'Profibus', link: '/es/industrial-networks/profibus' },
      { text: 'CAN Bus', link: '/es/industrial-networks/can-bus' },
      { text: 'DeviceNet', link: '/es/industrial-networks/devicenet' },
      { text: 'OPC UA', link: '/es/industrial-networks/opc-ua' },
      { text: 'Gateways industriales', link: '/es/industrial-networks/industrial-gateways' }
    ]
  },

  {
    text: 'Sensores',
    collapsed: true,
    items: [
      { text: 'Qué es un sensor', link: '/es/sensors/what-is-a-sensor' },
      { text: 'Sensores inductivos', link: '/es/sensors/inductive-sensors' },
      { text: 'Sensores capacitivos', link: '/es/sensors/capacitive-sensors' },
      { text: 'Sensores fotoeléctricos', link: '/es/sensors/photoelectric-sensors' },
      { text: 'Sensores ultrasónicos', link: '/es/sensors/ultrasonic-sensors' },
      { text: 'Sensores de temperatura', link: '/es/sensors/temperature-sensors' },
      { text: 'Sensores de presión', link: '/es/sensors/pressure-sensors' },
      { text: 'Sensores de nivel', link: '/es/sensors/level-sensors' },
      { text: 'Encoders', link: '/es/sensors/encoders' },
      { text: 'Interruptores de límite', link: '/es/sensors/limit-switches' }
    ]
  },

  {
    text: 'Actuadores',
    collapsed: true,
    items: [
      { text: 'Qué es un actuador', link: '/es/actuators/what-is-an-actuator' },
      { text: 'Actuadores eléctricos', link: '/es/actuators/electric-actuators' },
      { text: 'Cilindros neumáticos', link: '/es/actuators/pneumatic-cylinders' },
      { text: 'Cilindros hidráulicos', link: '/es/actuators/hydraulic-cylinders' },
      { text: 'Solenoides', link: '/es/actuators/solenoids' },
      { text: 'Válvulas de control', link: '/es/actuators/control-valves' }
    ]
  },

  {
    text: 'Drives y movimiento',
    collapsed: true,
    items: [
      { text: 'Variadores de frecuencia', link: '/es/drives-and-motion/variable-frequency-drives' },
      { text: 'Servo drives', link: '/es/drives-and-motion/servo-drives' },
      { text: 'Controladores de movimiento', link: '/es/drives-and-motion/motion-controllers' },
      { text: 'Control de velocidad', link: '/es/drives-and-motion/speed-control' },
      { text: 'Control de torque', link: '/es/drives-and-motion/torque-control' }
    ]
  },

  {
    text: 'Tableros eléctricos',
    collapsed: true,
    items: [
      { text: 'Tableros de control', link: '/es/electrical-panels/control-panels' },
      { text: 'Diseño de tableros', link: '/es/electrical-panels/panel-layout' },
      { text: 'Cableado de tableros', link: '/es/electrical-panels/panel-wiring' },
      { text: 'Gestión de cables', link: '/es/electrical-panels/cable-management' },
      { text: 'Interruptores automáticos', link: '/es/electrical-panels/breakers' },
      { text: 'Contactores', link: '/es/electrical-panels/contactors' },
      { text: 'Relés de sobrecarga', link: '/es/electrical-panels/overload-relays' },
      { text: 'Fuentes de alimentación', link: '/es/electrical-panels/power-supplies' },
      { text: 'Bloques terminales', link: '/es/electrical-panels/terminal-blocks' }
    ]
  },

  {
    text: 'Seguridad industrial',
    collapsed: true,
    items: [
      { text: 'Fundamentos de seguridad en maquinaria', link: '/es/industrial-safety/machine-safety-basics' },
      { text: 'Evaluación de riesgos', link: '/es/industrial-safety/risk-assessment' },
      { text: 'Categorías de seguridad', link: '/es/industrial-safety/safety-categories' },
      { text: 'Circuitos de paro de emergencia', link: '/es/industrial-safety/emergency-stop-circuits' },
      { text: 'Relés de seguridad', link: '/es/industrial-safety/safety-relays' },
      { text: 'PLC de seguridad', link: '/es/industrial-safety/safety-plc' },
      { text: 'Lockout Tagout (LOTO)', link: '/es/industrial-safety/lockout-tagout' }
    ]
  },

  {
    text: 'OT y IT',
    collapsed: true,
    items: [
      { text: 'OT vs IT', link: '/es/ot-and-it/ot-vs-it' },
      { text: 'Arquitectura de red industrial', link: '/es/ot-and-it/industrial-network-architecture' },
      { text: 'Modelo Purdue', link: '/es/ot-and-it/purdue-model' },
      { text: 'Edge computing', link: '/es/ot-and-it/edge-computing' },
      { text: 'Recolección de datos industriales', link: '/es/ot-and-it/industrial-data-collection' },
      { text: 'Integración con la nube', link: '/es/ot-and-it/cloud-integration' },
      { text: 'IoT industrial', link: '/es/ot-and-it/industrial-iot' }
    ]
  },

  {
    text: 'Ciberseguridad industrial',
    collapsed: true,
    items: [
      { text: 'Por qué importa la ciberseguridad industrial', link: '/es/industrial-cybersecurity/why-industrial-cybersecurity-matters' },
      { text: 'Amenazas comunes en OT', link: '/es/industrial-cybersecurity/common-threats-in-ot' },
      { text: 'Segmentación de red', link: '/es/industrial-cybersecurity/network-segmentation' },
      { text: 'Firewalls en redes industriales', link: '/es/industrial-cybersecurity/firewalls-in-industrial-networks' },
      { text: 'Acceso remoto seguro', link: '/es/industrial-cybersecurity/secure-remote-access' },
      { text: 'Gestión de parches', link: '/es/industrial-cybersecurity/patch-management' },
      { text: 'Control de acceso de usuarios', link: '/es/industrial-cybersecurity/user-access-control' },
      { text: 'IEC 62443', link: '/es/industrial-cybersecurity/iec-62443' }
    ]
  },

  {
    text: 'Normativas',
    collapsed: true,
    items: [
      { text: 'UL', link: '/es/standards/ul' },
      { text: 'IEC', link: '/es/standards/iec' },
      { text: 'ISO', link: '/es/standards/iso' },
      { text: 'NEMA', link: '/es/standards/nema' },
      { text: 'NOM', link: '/es/standards/nom' }
    ]
  }

]
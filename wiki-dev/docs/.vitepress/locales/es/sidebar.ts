import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Inicio',
    base: '/es/home/',
    collapsed: false,
    items: [
      { text: 'Descripción general', link: 'overview' },
      { text: 'Comentarios', link: 'feedback' },
      { text: 'Contribuye', link: 'contribute' },
      { text: 'Apoya', link: 'support' },
      { text: 'Evolución del proyecto', link: 'road-map' },
    ]
  },

  {
    text: 'Conceptos',
    base: '/es/concepts/',
    collapsed: true,
    items: [
      { text: 'Visión del sistema', link: 'system-overview' },
      { text: 'Cómo funcionan los sistemas industriales', link: 'how-industrial-systems-work' }
    ]
  },

  {
    text: 'Fundamentos eléctricos',
    base: '/es/electrical-fundamentals/',
    collapsed: true,
    items: [
      { text: 'Descripción general', link: 'overview' },
      { text: 'Voltaje', link: 'voltage' },
      { text: 'Corriente', link: 'current' },
      { text: 'Resistencia', link: 'resistance' },
      { text: 'Ley de Ohm', link: 'ohms-law' },
      { text: 'Potencia eléctrica', link: 'electric-power' },
      { text: 'CA vs CD', link: 'ac-vs-dc' },
      { text: 'Monofásico', link: 'single-phase' },
      { text: 'Trifásico', link: 'three-phase' },
      { text: 'Factor de potencia', link: 'power-factor' },
      { text: 'Puesta a tierra', link: 'grounding' },
      { text: 'Ruido eléctrico', link: 'electrical-noise' }
    ]
  },

  {
    text: 'Sistemas de potencia',
    collapsed: true,
    base: '/es/power-systems/',
    items: [
      { text: 'Descripción general', link: 'overview' },

      {
        text: 'Distribución',
        collapsed: true,
        base: '/es/power-systems/distribution/',
        items: [
          { text: 'Sistemas de distribución', link: 'distribution-systems' },
          { text: 'Baja tensión', link: 'low-voltage' },
          { text: 'Media tensión', link: 'medium-voltage' },
          { text: 'Transformadores', link: 'transformers' }
        ]
      },

      {
        text: 'Equipos',
        collapsed: true,
        base: '/es/power-systems/equipment/',
        items: [
          { text: 'Switchgear', link: 'switchgear' },
          { text: 'Tableros de distribución', link: 'switchboards' },
          { text: 'Barras colectoras', link: 'busbars' },
          { text: 'Paneles de distribución', link: 'distribution-panels' }
        ]
      },

      {
        text: 'Protección',
        collapsed: true,
        base: '/es/power-systems/protection/',
        items: [
          { text: 'Fundamentos de protección', link: 'protection-basics' },
          { text: 'Dispositivos de protección', link: 'protective-devices' },
          { text: 'Protección contra sobrecorriente', link: 'overcurrent-protection' },
          { text: 'Coordinación de protecciones', link: 'coordination-of-protections' },
          { text: 'Arco eléctrico (Arc Flash)', link: 'arc-flash-basics' }
        ]
      },

      {
        text: 'Estudios',
        collapsed: true,
        base: '/es/power-systems/studies/',
        items: [
          { text: 'Análisis de cortocircuito', link: 'short-circuit-analysis' }
        ]
      },

      { text: 'Selección de equipos', link: 'equipment-selection' }
    ]
  },

  {
    text: 'Calidad de energía',
    collapsed: true,
    base: '/es/power-quality/',
    items: [
      { text: 'Descripción general', link: 'overview' },
      { text: 'Huecos de tensión', link: 'voltage-sags' },
      { text: 'Sobretensiones', link: 'voltage-swells' },
      { text: 'Armónicos', link: 'harmonics' },
      { text: 'THD', link: 'thd' },
      { text: 'Corrección del factor de potencia', link: 'power-factor-correction' },
      { text: 'Flicker', link: 'flicker' },
      { text: 'Transientes y sobretensiones', link: 'transients-surges' },
      { text: 'Monitoreo', link: 'monitoring' }
    ]
  },

  {
    text: 'Cables',
    base: '/es/cables/',
    collapsed: true,
    items: [
      { text: 'Descripción general', link: 'overview' },

      {
        text: 'Fundamentos',
        base: '/es/cables/fundamentals/',
        collapsed: true,
        items: [
          { text: 'Materiales conductores', link: 'conductor-materials' },
          { text: 'Capacidad de corriente', link: 'current-capacity' },
          { text: 'Caída de tensión', link: 'voltage-drop' }
        ]
      },

      {
        text: 'Tipos de cables',
        base: '/es/cables/cable-types/',
        collapsed: true,
        items: [
          { text: 'Descripción de tipos de cables', link: 'cable-types' },
          { text: 'Cables de potencia', link: 'power-cables' },
          { text: 'Cables de control', link: 'control-cables' },
          { text: 'Cables de comunicación', link: 'communication-cables' },
          { text: 'Cables de instrumentación', link: 'instrumentation-cables' }
        ]
      },

      {
        text: 'Diseño',
        base: '/es/cables/design/',
        collapsed: true,
        items: [
          { text: 'Dimensionamiento de cables', link: 'cable-sizing' },
          { text: 'Cables apantallados', link: 'shielded' }
        ]
      },

      {
        text: 'Instalación',
        base: '/es/cables/installation/',
        collapsed: true,
        items: [
          { text: 'Enrutamiento', link: 'routing' },
          { text: 'Bandejas portacables', link: 'trays' },
          { text: 'Conduit (tubería)', link: 'conduit' }
        ]
      },

      {
        text: 'Selección',
        base: '/es/cables/selection/',
        collapsed: true,
        items: [
          { text: 'Selección de cables', link: 'cable-selection' }
        ]
      }
    ]
  },

  {
    text: 'Equipos industriales',
    collapsed: true,
    base: '/es/industrial-equipment/',
    items: [
      {
        text: 'Motores',
        collapsed: true,
        base: '/es/industrial-equipment/motors/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Tipos de motores', link: 'motor-types' },
          { text: 'Motores de inducción', link: 'induction-motors' },
          { text: 'Motores síncronos', link: 'synchronous-motors' },
          { text: 'Motores de CD', link: 'dc-motors' },
          { text: 'Servomotores', link: 'servo-motors' },
          { text: 'Motores paso a paso', link: 'stepper-motors' },
          { text: 'Placas de datos', link: 'motor-nameplates' },
          { text: 'Eficiencia de motores', link: 'motor-efficiency' },
          { text: 'Enfriamiento', link: 'motor-cooling' },
          { text: 'Protección de motores', link: 'motor-protection' },
          { text: 'Selección de motores', link: 'motor-selection' }
        ]
      },

      {
        text: 'Drives',
        collapsed: true,
        base: '/es/industrial-equipment/drives/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Variadores de frecuencia (VFD)', link: 'vfd' },
          { text: 'Servodrives', link: 'servo-drives' },
          { text: 'Controladores de movimiento', link: 'motion-controllers' },
          { text: 'Control de velocidad', link: 'speed-control' },
          { text: 'Control de torque', link: 'torque-control' },
          { text: 'Selección de drives', link: 'drive-selection' }
        ]
      },

      {
        text: 'Sensores',
        collapsed: true,
        base: '/es/industrial-equipment/sensors/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Tipos de sensores', link: 'sensor-types' },
          { text: 'Selección de sensores', link: 'sensor-selection' }
        ]
      },

      {
        text: 'Actuadores',
        collapsed: true,
        base: '/es/industrial-equipment/actuators/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Actuadores eléctricos', link: 'electric-actuators' },
          { text: 'Neumática', link: 'pneumatic' },
          { text: 'Hidráulica', link: 'hydraulic' },
          { text: 'Solenoides', link: 'solenoids' },
          { text: 'Válvulas de control', link: 'control-valves' },
          { text: 'Selección de actuadores', link: 'actuator-selection' }
        ]
      }
    ]
  },

  {
    text: 'Sistemas de control',
    collapsed: true,
    base: '/es/control-systems/',
    items: [
      {
        text: 'Fundamentos',
        collapsed: true,
        base: '/es/control-systems/basics/',
        items: [
          { text: 'Filosofía de control', link: 'control-philosophy' },
          { text: 'Lazo abierto vs lazo cerrado', link: 'open-vs-closed-loop' },
          { text: 'Fundamentos de PID', link: 'pid-basics' }
        ]
      },

      {
        text: 'PLC',
        collapsed: true,
        base: '/es/control-systems/plc/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Arquitectura del PLC', link: 'architecture' },
          { text: 'Ciclo de escaneo', link: 'scan-cycle' },
          { text: 'CPU', link: 'cpu' },
          { text: 'Memoria', link: 'memory' },
          { text: 'Entradas y salidas (I/O)', link: 'io' },
          { text: 'Digital vs analógico', link: 'digital-vs-analog' },
          { text: 'Comunicación', link: 'communication' },
          { text: 'Lógica Ladder', link: 'ladder-logic' },
          { text: 'Bloques de función', link: 'function-block' },
          { text: 'Texto estructurado', link: 'structured-text' },
          { text: 'SFC', link: 'sfc' },
          { text: 'Selección de PLC', link: 'selection' },
          { text: 'Diseño básico', link: 'basic-design' }
        ]
      },

      {
        text: 'HMI',
        collapsed: true,
        base: '/es/control-systems/hmi/',
        items: [
          { text: 'Descripción general', link: 'hmi-overview' },
          { text: 'Arquitectura', link: 'architecture' },
          { text: 'Diseño de interfaces', link: 'design' },
          { text: 'Gestión de alarmas', link: 'alarm-management' }
        ]
      },

      {
        text: 'SCADA',
        collapsed: true,
        base: '/es/control-systems/scada/',
        items: [
          { text: 'Descripción general', link: 'scada-overview' },
          { text: 'Arquitectura', link: 'architecture' },
          { text: 'Historiador', link: 'historian' },
          { text: 'SCADA vs HMI', link: 'scada-vs-hmi' }
        ]
      }
    ]
  },

    {
    text: 'Instrumentación',
    collapsed: true,
    base: '/es/instrumentation/',
    items: [
      { text: 'Descripción general', link: 'overview' },
      { text: 'Señales 4-20 mA', link: '4-20ma-signals' },
      { text: 'Señales analógicas vs digitales', link: 'analog-vs-digital-signals' },
      { text: 'Acondicionamiento de señal', link: 'signal-conditioning' },
      { text: 'Ruido e interferencia', link: 'noise-interference' },
      { text: 'Puesta a tierra y apantallamiento', link: 'grounding-shielding' },
      { text: 'Calibración', link: 'calibration' },
      { text: 'Selección de instrumentación', link: 'selection' }
    ]
  },

  {
    text: 'Redes industriales',
    collapsed: true,
    base: '/es/networks/',
    items: [
      {
        text: 'Protocolos',
        collapsed: true,
        base: '/es/networks/protocols/',
        items: [
          { text: 'Ethernet', link: 'ethernet' },
          { text: 'EtherNet/IP', link: 'ethernet-ip' },
          { text: 'Modbus RTU', link: 'modbus-rtu' },
          { text: 'Modbus TCP', link: 'modbus-tcp' },
          { text: 'Profinet', link: 'profinet' },
          { text: 'Profibus', link: 'profibus' },
          { text: 'CAN Bus', link: 'can-bus' },
          { text: 'DeviceNet', link: 'devicenet' },
          { text: 'OPC UA', link: 'opc-ua' }
        ]
      },

      {
        text: 'Hardware',
        collapsed: true,
        base: '/es/networks/hardware/',
        items: [
          { text: 'Switches', link: 'switches' },
          { text: 'Routers', link: 'routers' },
          { text: 'Gateways', link: 'gateways' },
          { text: 'Firewalls', link: 'firewalls' }
        ]
      },

      {
        text: 'Acceso remoto',
        collapsed: true,
        base: '/es/networks/remote-access/',
        items: [
          { text: 'Acceso remoto', link: 'remote-access' },
          { text: 'VPN', link: 'vpn' },
          { text: 'Acceso remoto seguro', link: 'secure-remote-access' }
        ]
      },

      { text: 'Arquitecturas', link: 'architectures' },
      { text: 'Casos de uso', link: 'use-cases' },
      { text: 'Diseño de red', link: 'network-design' }
    ]
  },

  {
    text: 'Tableros de control',
    collapsed: true,
    base: '/es/control-panels/',
    items: [
      { text: 'Descripción general', link: 'overview' },
      { text: 'Layout', link: 'layout' },
      { text: 'Cableado', link: 'wiring' },
      { text: 'Gestión de cables', link: 'cable-management' },
      { text: 'Interruptores', link: 'breakers' },
      { text: 'Contactores', link: 'contactors' },
      { text: 'Relés de sobrecarga', link: 'overload-relays' },
      { text: 'Fuentes de alimentación', link: 'power-supplies' },
      { text: 'Bloques terminales', link: 'terminal-blocks' },
      { text: 'Diseño de tableros', link: 'panel-design' },
      { text: 'Selección de componentes', link: 'component-selection' }
    ]
  },

  {
    text: 'Seguridad',
    collapsed: true,
    base: '/es/safety/',
    items: [
      { text: 'Fundamentos', link: 'basics' },
      { text: 'Evaluación de riesgos', link: 'risk-assessment' },
      { text: 'Categorías de seguridad', link: 'categories' },
      { text: 'Paro de emergencia', link: 'emergency-stop' },
      { text: 'Relés de seguridad', link: 'safety-relays' },
      { text: 'PLC de seguridad', link: 'safety-plc' },
      { text: 'Lockout/Tagout', link: 'lockout-tagout' }
    ]
  },

  {
    text: 'Puesta en marcha',
    collapsed: true,
    base: '/es/commissioning/',
    items: [
      { text: 'Pre-comisionamiento', link: 'pre-commissioning' },
      { text: 'Pruebas de lazo', link: 'loop-checks' },
      { text: 'Arranque', link: 'startup' },
      { text: 'Pruebas y validación', link: 'testing-validation' },
      { text: 'Documentación', link: 'documentation' }
    ]
  },

  {
    text: 'Prácticas industriales',
    collapsed: true,
    base: '/es/industrial-practices/',
    items: [
      { text: 'Descripción general', link: 'overview' },

      {
        text: 'Etiquetado',
        collapsed: true,
        base: '/es/industrial-practices/labeling/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Por qué es importante', link: 'why-labeling-matters' },
          { text: 'Normas de etiquetado', link: 'labeling-standards' },
          { text: 'Tipos de etiquetas', link: 'label-types' },
          { text: 'Materiales y durabilidad', link: 'materials-durability' },
          { text: 'Etiquetado de cables', link: 'cable-wire-labeling' },
          { text: 'Etiquetado de tableros', link: 'panel-component-labeling' },
          { text: 'Documentación de máquinas', link: 'machine-documentation' },
          { text: 'Buenas prácticas', link: 'best-practices' }
        ]
      },

      {
        text: 'Iluminación',
        collapsed: true,
        base: '/es/industrial-practices/lighting/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Por qué es importante', link: 'why-lighting-matters' },
          { text: 'Tipos de iluminación', link: 'lighting-types' },
          { text: 'Distribución y colocación', link: 'placement-distribution' },
          { text: 'Niveles de iluminación (lux)', link: 'illumination-levels-lux' },
          { text: 'Potencia y eficiencia', link: 'power-efficiency' },
          { text: 'Ambientes industriales', link: 'industrial-environments' },
          { text: 'Iluminación de emergencia', link: 'safety-emergency-lighting' },
          { text: 'Diseño básico de iluminación', link: 'lighting-design-basics' }
        ]
      },

      {
        text: 'Documentación',
        collapsed: true,
        base: '/es/industrial-practices/documentation/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Instrucciones de máquina', link: 'machine-instructions' },
          { text: 'Diagramas eléctricos', link: 'electrical-drawings' },
          { text: 'Guías de mantenimiento', link: 'maintenance-guides' },
          { text: 'Información para operadores', link: 'operator-information' }
        ]
      },

      {
        text: 'Instalación y montaje',
        collapsed: true,
        base: '/es/industrial-practices/installation-mounting/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Principios generales', link: 'general-principles' },
          { text: 'Alineación', link: 'alignment' },
          { text: 'Vibraciones', link: 'vibrations' },
          { text: 'Errores comunes', link: 'common-mistakes' }
        ]
      },

      {
        text: 'Condiciones ambientales',
        collapsed: true,
        base: '/es/industrial-practices/environmental-conditions/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Factores', link: 'factors' },
          { text: 'Grados de protección (IP)', link: 'ip-ratings' },
          { text: 'Selección general', link: 'general-selection' }
        ]
      }
    ]
  },

  {
    text: 'Eficiencia energética',
    collapsed: true,
    base: '/es/energy-efficiency/',
    items: [
      { text: 'Descripción general', link: 'overview' },
      { text: 'Dónde se usa la energía', link: 'where-energy-is-used' },
      { text: 'Oportunidades de ahorro', link: 'energy-saving-opportunities' },
      { text: 'Integración de renovables', link: 'renewable-integration' }
    ]
  },

  {
    text: 'Herramientas',
    collapsed: true,
    base: '/en/tools/',
    items: [
      {
        text: 'Medición',
        collapsed: true,
        base: '/en/tools/measurement/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Multímetros', link: 'multimeters' },
          { text: 'Multímetros de pinza', link: 'clamp-meters' },
          { text: 'Probadores de aislamiento', link: 'insulation-testers' },
          { text: 'Analizadores de calidad de energía', link: 'power-quality-analyzers' },
          { text: 'Osciloscopios', link: 'oscilloscopes' },
          { text: 'Cámaras térmicas', link: 'thermal-cameras' },
          { text: 'Termómetros infrarrojos', link: 'infrared-thermometers' },
          { text: 'Fundamentos de termografía', link: 'thermography-basics' },
          { text: 'Medición de presión', link: 'pressure-measurement' },
          { text: 'Medición de temperatura', link: 'temperature-measurement' },
          { text: 'Medición de flujo', link: 'flow-measurement' },
          { text: 'Medición de nivel', link: 'level-measurement' },
          { text: 'Análisis de vibración', link: 'vibration-analysis' },
          { text: 'Herramientas de alineación', link: 'alignment-tools' },
          { text: 'Medición de torque', link: 'torque-measurement' },
          { text: 'Adquisición de datos', link: 'data-acquisition' }
        ]
      },

      {
        text: 'Herramientas de software',
        collapsed: true,
        base: '/en/tools/software-tools/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Calculadoras', link: 'calculators' },
          { text: 'Simuladores', link: 'simulators' },
          { text: 'Simulación de PLC', link: 'plc-simulation' },
          { text: 'Análisis de datos', link: 'data-analysis' }
        ]
      },
      
      {
        text: 'Referencias',
        collapsed: true,
        base: '/en/tools/references/',
        items: [
          { text: 'Fórmulas', link: 'formulas' },
          { text: 'Conversiones de Unidades', link: 'unit-conversions' },
          { text: 'Valores Típicos', link: 'typical-values' },
          { text: 'Reglas de Pulgar', link: 'rules-of-thumb' }
        ]
      }
    ]
  },

  {
    text: 'Normas',
    base: '/es/standards/',
    collapsed: true,
    items: [
      { text: 'Descripción general', link: 'overview' },

      {
        text: 'Fundamentos',
        collapsed: true,
        base: '/es/standards/fundamentals/',
        items: [
          { text: '¿Qué es una norma?', link: 'what-is-a-standard' },
          { text: 'Certificación vs Cumplimiento', link: 'certification-vs-compliance' },
          { text: 'Diferencias regionales', link: 'regional-differences' }
        ]
      },

      {
        text: 'Eléctrico',
        collapsed: true,
        base: '/es/standards/electrical/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Protección de circuitos', link: 'circuit-protection' },
          { text: 'Tableros de control', link: 'control-panels' },
          { text: 'Métodos de cableado', link: 'wiring-methods' }
        ]
      },

      {
        text: 'Maquinaria',
        collapsed: true,
        base: '/es/standards/machinery/',
        items: [
          { text: 'Descripción general', link: 'overview' },
          { text: 'Seguridad en maquinaria', link: 'machine-safety' },
          { text: 'Evaluación de riesgos', link: 'risk-assessment' }
        ]
      },

      {
        text: 'Organizaciones',
        collapsed: true,
        base: '/es/standards/organizations/',
        items: [
          { text: 'UL', link: 'ul' },
          { text: 'IEC', link: 'iec' },
          { text: 'ISO', link: 'iso' },
          { text: 'NEMA', link: 'nema' },
          { text: 'NOM', link: 'nom' }
        ]
      }
    ]
  },

  {
    text: 'Ciberseguridad',
    collapsed: true,
    base: '/es/cybersecurity/',
    items: [
      { text: 'Descripción general', link: 'overview' },
      { text: 'Amenazas', link: 'threata' },
      { text: 'Segmentación', link: 'segmentation' },
      { text: 'Firewalls', link: 'firewalls' },
      { text: 'Acceso remoto seguro', link: 'secure-remote-access' },
      { text: 'Actualizaciones (Patching)', link: 'patching' },
      { text: 'Control de usuarios', link: 'user-access' },
      { text: 'IEC 62443', link: 'iec-62443' }
    ]
  },

  {
    text: 'Digitalización',
    collapsed: true,
    base: '/es/digitalization/',
    items: [
      { text: 'Descripción general', link: 'overview' },
      { text: 'OT vs IT', link: 'ot-vs-it' },
      { text: 'Arquitectura de red', link: 'network-architecture' },
      { text: 'Modelo Purdue', link: 'purdue-model' },
      { text: 'Edge Computing', link: 'edge-computing' },
      { text: 'Recolección de datos', link: 'data-collection' },
      { text: 'Cloud', link: 'cloud' },
      { text: 'IIoT', link: 'iiot' }
    ]
  }
]
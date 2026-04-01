import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Home',
    base: '/en/home/',
    collapsed: false,
    items: [
      { text: 'Overview', link: 'overview' },
      { text: 'Feedback', link: 'feedback' },
      { text: 'Contribute', link: 'contribute' },
      { text: 'Support', link: 'support' },
      { text: 'Project Evolution', link: 'road-map' }
    ]
  },

  {
    text: 'Concepts',
    base: '/en/concepts/',
    collapsed: true,
    items: [
      { text: 'System Overview', link: 'system-overview' },
      { text: 'How Industrial Systems Work', link: 'how-industrial-systems-work' }
    ]
  },

  {
    text: 'Electrical Fundamentals',
    base: '/en/electrical-fundamentals/',
    collapsed: true,
    items: [
      { text: 'Overview', link: 'overview' },
      { text: 'Voltage', link: 'voltage' },
      { text: 'Current', link: 'current' },
      { text: 'Resistance', link: 'resistance' },
      { text: "Ohm's Law", link: 'ohms-law' },
      { text: 'Electric Power', link: 'electric-power' },
      { text: 'AC vs DC', link: 'ac-vs-dc' },
      { text: 'Single Phase', link: 'single-phase' },
      { text: 'Three Phase', link: 'three-phase' },
      { text: 'Power Factor', link: 'power-factor' },
      { text: 'Grounding', link: 'grounding' },
      { text: 'Electrical Noise', link: 'electrical-noise' }
    ]
  },

  {
    text: 'Power Systems',
    collapsed: true,
    base: '/en/power-systems/',
    items: [
      { text: 'Overview', link: 'overview' },

      {
        text: 'Distribution',
        collapsed: true,
        base: '/en/power-systems/distribution/',
        items: [
          { text: 'Distribution Systems', link: 'distribution-systems' },
          { text: 'Low Voltage', link: 'low-voltage' },
          { text: 'Medium Voltage', link: 'medium-voltage' },
          { text: 'Transformers', link: 'transformers' }
        ]
      },

      {
        text: 'Equipment',
        collapsed: true,
        base: '/en/power-systems/equipment/',
        items: [
          { text: 'Switchgear', link: 'switchgear' },
          { text: 'Switchboards', link: 'switchboards' },
          { text: 'Busbars', link: 'busbars' },
          { text: 'Distribution Panels', link: 'distribution-panels' }
        ]
      },

      {
        text: 'Protection',
        collapsed: true,
        base: '/en/power-systems/protection/',
        items: [
          { text: 'Protection Basics', link: 'protection-basics' },
          { text: 'Protective Devices', link: 'protective-devices' },
          { text: 'Overcurrent Protection', link: 'overcurrent-protection' },
          { text: 'Coordination of Protections', link: 'coordination-of-protections' },
          { text: 'Arc Flash Basics', link: 'arc-flash-basics' }
        ]
      },

      {
        text: 'Studies',
        collapsed: true,
        base: '/en/power-systems/studies/',
        items: [
          { text: 'Short Circuit Analysis', link: 'short-circuit-analysis' }
        ]
      },

      { text: 'Equipment Selection', link: 'equipment-selection' }
    ]
  },

  {
    text: 'Power Quality',
    collapsed: true,
    base: '/en/power-quality/',
    items: [
      { text: 'Overview', link: 'overview' },
      { text: 'Voltage Sags', link: 'voltage-sags' },
      { text: 'Voltage Swells', link: 'voltage-swells' },
      { text: 'Harmonics', link: 'harmonics' },
      { text: 'THD', link: 'thd' },
      { text: 'Power Factor Correction', link: 'power-factor-correction' },
      { text: 'Flicker', link: 'flicker' },
      { text: 'Transients & Surges', link: 'transients-surges' },
      { text: 'Monitoring', link: 'monitoring' }
    ]
  },

  {
    text: 'Cables',
    base: '/en/cables/',
    collapsed: true,
    items: [
      { text: 'Overview', link: 'overview' },

      {
        text: 'Fundamentals',
        base: '/en/cables/fundamentals/',
        collapsed: true,
        items: [
          { text: 'Conductor Materials', link: 'conductor-materials' },
          { text: 'Current Capacity', link: 'current-capacity' },
          { text: 'Voltage Drop', link: 'voltage-drop' }
        ]
      },

      {
        text: 'Cable Types',
        base: '/en/cables/cable-types/',
        collapsed: true,
        items: [
          { text: 'Cable Types Overview', link: 'cable-types' },
          { text: 'Power Cables', link: 'power-cables' },
          { text: 'Control Cables', link: 'control-cables' },
          { text: 'Communication Cables', link: 'communication-cables' },
          { text: 'Instrumentation Cables', link: 'instrumentation-cables' }
        ]
      },

      {
        text: 'Design',
        base: '/en/cables/design/',
        collapsed: true,
        items: [
          { text: 'Cable Sizing', link: 'cable-sizing' },
          { text: 'Shielded Cables', link: 'shielded' }
        ]
      },

      {
        text: 'Installation',
        base: '/en/cables/installation/',
        collapsed: true,
        items: [
          { text: 'Routing', link: 'routing' },
          { text: 'Cable Trays', link: 'trays' },
          { text: 'Conduit', link: 'conduit' }
        ]
      },

      {
        text: 'Selection',
        base: '/en/cables/selection/',
        collapsed: true,
        items: [
          { text: 'Cable Selection', link: 'cable-selection' }
        ]
      }
    ]
  },

  {
    text: 'Industrial Equipment',
    collapsed: true,
    base: '/en/industrial-equipment/',
    items: [
      {
        text: 'Motors',
        collapsed: true,
        base: '/en/industrial-equipment/motors/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Motor Types', link: 'motor-types' },
          { text: 'Induction Motors', link: 'induction-motors' },
          { text: 'Synchronous Motors', link: 'synchronous-motors' },
          { text: 'DC Motors', link: 'dc-motors' },
          { text: 'Servo Motors', link: 'servo-motors' },
          { text: 'Stepper Motors', link: 'stepper-motors' },
          { text: 'Motor Nameplates', link: 'motor-nameplates' },
          { text: 'Motor Efficiency', link: 'motor-efficiency' },
          { text: 'Motor Cooling', link: 'motor-cooling' },
          { text: 'Motor Protection', link: 'motor-protection' },
          { text: 'Motor Selection', link: 'motor-selection' }
        ]
      },

      {
        text: 'Drives',
        collapsed: true,
        base: '/en/industrial-equipment/drives/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'VFD', link: 'vfd' },
          { text: 'Servo Drives', link: 'servo-drives' },
          { text: 'Motion Controllers', link: 'motion-controllers' },
          { text: 'Speed Control', link: 'speed-control' },
          { text: 'Torque Control', link: 'torque-control' },
          { text: 'Drive Selection', link: 'drive-selection' }
        ]
      },

      {
        text: 'Sensors',
        collapsed: true,
        base: '/en/industrial-equipment/sensors/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Sensor Types', link: 'sensor-types' },
          { text: 'Sensor Selection', link: 'sensor-selection' }
        ]
      },

      {
        text: 'Actuators',
        collapsed: true,
        base: '/en/industrial-equipment/actuators/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Electric Actuators', link: 'electric-actuators' },
          { text: 'Pneumatic', link: 'pneumatic' },
          { text: 'Hydraulic', link: 'hydraulic' },
          { text: 'Solenoids', link: 'solenoids' },
          { text: 'Control Valves', link: 'control-valves' },
          { text: 'Actuator Selection', link: 'actuator-selection' }
        ]
      }
    ]
  },

  {
    text: 'Control Systems',
    collapsed: true,
    base: '/en/control-systems/',
    items: [
      {
        text: 'Basics',
        collapsed: true,
        base: '/en/control-systems/basics/',
        items: [
          { text: 'Control Philosophy', link: 'control-philosophy' },
          { text: 'Open vs Closed Loop', link: 'open-vs-closed-loop' },
          { text: 'PID Basics', link: 'pid-basics' }
        ]
      },

      {
        text: 'PLC',
        collapsed: true,
        base: '/en/control-systems/plc/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Architecture', link: 'architecture' },
          { text: 'Scan Cycle', link: 'scan-cycle' },
          { text: 'CPU', link: 'cpu' },
          { text: 'Memory', link: 'memory' },
          { text: 'I/O', link: 'io' },
          { text: 'Digital vs Analog', link: 'digital-vs-analog' },
          { text: 'Communication', link: 'communication' },
          { text: 'Ladder Logic', link: 'ladder-logic' },
          { text: 'Function Block', link: 'function-block' },
          { text: 'Structured Text', link: 'structured-text' },
          { text: 'SFC', link: 'sfc' },
          { text: 'Selection', link: 'selection' },
          { text: 'Basic Design', link: 'basic-design' }
        ]
      },

      {
        text: 'HMI',
        collapsed: true,
        base: '/en/control-systems/hmi/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Architecture', link: 'architecture' },
          { text: 'Design', link: 'design' },
          { text: 'Alarm Management', link: 'alarm-management' }
        ]
      },

      {
        text: 'SCADA',
        collapsed: true,
        base: '/en/control-systems/scada/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Architecture', link: 'architecture' },
          { text: 'Historian', link: 'historian' },
          { text: 'SCADA vs HMI', link: 'scada-vs-hmi' }
        ]
      }
    ]
  },

  {
    text: 'Instrumentation',
    collapsed: true,
    base: '/en/instrumentation/',
    items: [
      { text: 'Overview', link: 'overview' },
      { text: '4-20 mA Signals', link: '4-20ma-signals' },
      { text: 'Analog vs Digital Signals', link: 'analog-vs-digital-signals' },
      { text: 'Signal Conditioning', link: 'signal-conditioning' },
      { text: 'Noise and Interference', link: 'noise-interference' },
      { text: 'Grounding and Shielding', link: 'grounding-shielding' },
      { text: 'Calibration', link: 'calibration' },
      { text: 'Instrumentation Selection', link: 'selection' }
    ]
  },

  {
    text: 'Networks',
    collapsed: true,
    base: '/en/networks/',
    items: [
      {
        text: 'Protocols',
        collapsed: true,
        base: '/en/networks/protocols/',
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
        base: '/en/networks/hardware/',
        items: [
          { text: 'Switches', link: 'switches' },
          { text: 'Routers', link: 'routers' },
          { text: 'Gateways', link: 'gateways' },
          { text: 'Firewalls', link: 'firewalls' }
        ]
      },

      {
        text: 'Remote Access',
        collapsed: true,
        base: '/en/networks/remote-access/',
        items: [
          { text: 'Remote Access', link: 'remote-access' },
          { text: 'VPN', link: 'vpn' },
          { text: 'Secure Remote Access', link: 'secure-remote-access' }
        ]
      },

      { text: 'Architectures', link: 'architectures' },
      { text: 'Use Cases', link: 'use-cases' },
      { text: 'Network Design', link: 'network-design' }
    ]
  },

  {
    text: 'Control Panels',
    collapsed: true,
    base: '/en/control-panels/',
    items: [
      { text: 'Overview', link: 'overview' },
      { text: 'Layout', link: 'layout' },
      { text: 'Wiring', link: 'wiring' },
      { text: 'Cable Management', link: 'cable-management' },
      { text: 'Breakers', link: 'breakers' },
      { text: 'Contactors', link: 'contactors' },
      { text: 'Overload Relays', link: 'overload-relays' },
      { text: 'Power Supplies', link: 'power-supplies' },
      { text: 'Terminal Blocks', link: 'terminal-blocks' },
      { text: 'Panel Design', link: 'panel-design' },
      { text: 'Component Selection', link: 'component-selection' }
    ]
  },

  {
    text: 'Safety',
    collapsed: true,
    base: '/en/safety/',
    items: [
      { text: 'Basics', link: 'basics' },
      { text: 'Risk Assessment', link: 'risk-assessment' },
      { text: 'Categories', link: 'categories' },
      { text: 'Emergency Stop', link: 'emergency-stop' },
      { text: 'Safety Relays', link: 'safety-relays' },
      { text: 'Safety PLC', link: 'safety-plc' },
      { text: 'Lockout Tagout', link: 'lockout-tagout' }
    ]
  },

  {
    text: 'Commissioning',
    collapsed: true,
    base: '/en/commissioning/',
    items: [
      { text: 'Pre-Commissioning', link: 'pre-commissioning' },
      { text: 'Loop Checks', link: 'loop-checks' },
      { text: 'Startup', link: 'startup' },
      { text: 'Testing and Validation', link: 'testing-validation' },
      { text: 'Documentation', link: 'documentation' }
    ]
  },

  {
    text: 'Industrial Practices',
    collapsed: true,
    base: '/en/industrial-practices/',
    items: [
      { text: 'Overview', link: 'overview' },

      {
        text: 'Labeling',
        collapsed: true,
        base: '/en/industrial-practices/labeling/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Why Labeling Matters', link: 'why-labeling-matters' },
          { text: 'Labeling Standards', link: 'labeling-standards' },
          { text: 'Label Types', link: 'label-types' },
          { text: 'Materials and Durability', link: 'materials-durability' },
          { text: 'Cable and Wire Labeling', link: 'cable-wire-labeling' },
          { text: 'Panel and Component Labeling', link: 'panel-component-labeling' },
          { text: 'Machine Documentation', link: 'machine-documentation' },
          { text: 'Best Practices', link: 'best-practices' }
        ]
      },

      {
        text: 'Lighting',
        collapsed: true,
        base: '/en/industrial-practices/lighting/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Why Lighting Matters', link: 'why-lighting-matters' },
          { text: 'Lighting Types', link: 'lighting-types' },
          { text: 'Placement and Distribution', link: 'placement-distribution' },
          { text: 'Illumination Levels (Lux)', link: 'illumination-levels-lux' },
          { text: 'Power and Efficiency', link: 'power-efficiency' },
          { text: 'Industrial Environments', link: 'industrial-environments' },
          { text: 'Safety and Emergency Lighting', link: 'safety-emergency-lighting' },
          { text: 'Lighting Design Basics', link: 'lighting-design-basics' }
        ]
      },

      {
        text: 'Documentation',
        collapsed: true,
        base: '/en/industrial-practices/documentation/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Machine Instructions', link: 'machine-instructions' },
          { text: 'Electrical Drawings', link: 'electrical-drawings' },
          { text: 'Maintenance Guides', link: 'maintenance-guides' },
          { text: 'Operator Information', link: 'operator-information' }
        ]
      },

      {
        text: 'Installation & Mounting',
        collapsed: true,
        base: '/en/industrial-practices/installation-mounting/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'General Principles', link: 'general-principles' },
          { text: 'Alignment', link: 'alignment' },
          { text: 'Vibrations', link: 'vibrations' },
          { text: 'Common Mistakes', link: 'common-mistakes' }
        ]
      },

      {
        text: 'Environmental Conditions',
        collapsed: true,
        base: '/en/industrial-practices/environmental-conditions/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Factors', link: 'factors' },
          { text: 'IP Ratings', link: 'ip-ratings' },
          { text: 'General Selection', link: 'general-selection' }
        ]
      }
    ]
  },

  {
    text: 'Energy Efficiency',
    collapsed: true,
    base: '/en/energy-efficiency/',
    items: [
      { text: 'Overview', link: 'overview' },
      { text: 'Where Energy is Used', link: 'where-energy-is-used' },
      { text: 'Energy Saving Opportunities', link: 'energy-saving-opportunities' },
      { text: 'Renewable Integration', link: 'renewable-integration' }
    ]
  },

  {
    text: 'Tools',
    collapsed: true,
    base: '/en/tools/',
    items: [
      {
        text: 'Measurement',
        collapsed: true,
        base: '/en/tools/measurement/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Multimeters', link: 'multimeters' },
          { text: 'Clamp Meters', link: 'clamp-meters' },
          { text: 'Insulation Testers', link: 'insulation-testers' },
          { text: 'Power Quality Analyzers', link: 'power-quality-analyzers' },
          { text: 'Oscilloscopes', link: 'oscilloscopes' },
          { text: 'Thermal Cameras', link: 'thermal-cameras' },
          { text: 'Infrared Thermometers', link: 'infrared-thermometers' },
          { text: 'Thermography Basics', link: 'thermography-basics' },
          { text: 'Pressure Measurement', link: 'pressure-measurement' },
          { text: 'Temperature Measurement', link: 'temperature-measurement' },
          { text: 'Flow Measurement', link: 'flow-measurement' },
          { text: 'Level Measurement', link: 'level-measurement' },
          { text: 'Vibration Analysis', link: 'vibration-analysis' },
          { text: 'Alignment Tools', link: 'alignment-tools' },
          { text: 'Torque Measurement', link: 'torque-measurement' },
          { text: 'Data Acquisition', link: 'data-acquisition' }
        ]
      },

      {
        text: 'Software Tools',
        collapsed: true,
        base: '/en/tools/software-tools/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Calculators', link: 'calculators' },
          { text: 'Simulators', link: 'simulators' },
          { text: 'PLC Simulation', link: 'plc-simulation' },
          { text: 'Data Analysis', link: 'data-analysis' }
        ]
      },

      {
        text: 'References',
        collapsed: true,
        base: '/en/tools/references/',
        items: [
          { text: 'Formulas', link: 'formulas' },
          { text: 'Unit Conversions', link: 'unit-conversions' },
          { text: 'Typical Values', link: 'typical-values' },
          { text: 'Rules of Thumb', link: 'rules-of-thumb' }
        ]
      }
    ]
  },

  {
    text: 'Standards',
    base: '/en/standards/',
    collapsed: true,
    items: [
      { text: 'Overview', link: 'overview' },

      {
        text: 'Fundamentals',
        collapsed: true,
        base: '/en/standards/fundamentals/',
        items: [
          { text: 'What is a Standard', link: 'what-is-a-standard' },
          { text: 'Certification vs Compliance', link: 'certification-vs-compliance' },
          { text: 'Regional Differences', link: 'regional-differences' }
        ]
      },

      {
        text: 'Electrical',
        collapsed: true,
        base: '/en/standards/electrical/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Circuit Protection', link: 'circuit-protection' },
          { text: 'Control Panels', link: 'control-panels' },
          { text: 'Wiring Methods', link: 'wiring-methods' }
        ]
      },

      {
        text: 'Machinery',
        collapsed: true,
        base: '/en/standards/machinery/',
        items: [
          { text: 'Overview', link: 'overview' },
          { text: 'Machine Safety', link: 'machine-safety' },
          { text: 'Risk Assessment', link: 'risk-assessment' }
        ]
      },

      {
        text: 'Organizations',
        collapsed: true,
        base: '/en/standards/organizations/',
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
    text: 'Cybersecurity',
    collapsed: true,
    base: '/en/cybersecurity/',
    items: [
      { text: 'Overview', link: 'overview' },
      { text: 'Threats', link: 'threats' },
      { text: 'Segmentation', link: 'segmentation' },
      { text: 'Firewalls', link: 'firewalls' },
      { text: 'Secure Remote Access', link: 'secure-remote-access' },
      { text: 'Patching', link: 'patching' },
      { text: 'User Access', link: 'user-access' },
      { text: 'IEC 62443', link: 'iec-62443' }
    ]
  },

  {
    text: 'Digitalization',
    collapsed: true,
    base: '/en/digitalization/',
    items: [
      { text: 'Overview', link: 'overview' },
      { text: 'OT vs IT', link: 'ot-vs-it' },
      { text: 'Network Architecture', link: 'network-architecture' },
      { text: 'Purdue Model', link: 'purdue-model' },
      { text: 'Edge Computing', link: 'edge-computing' },
      { text: 'Data Collection', link: 'data-collection' },
      { text: 'Cloud', link: 'cloud' },
      { text: 'IIoT', link: 'iiot' }
    ]
  }
]
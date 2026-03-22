import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Home',
    base: '/en/home/',
    collapsed: false,
    items: [
      { text: 'Overview', link: 'overview' },
      { text: 'Road Map', link: 'road-map' },
      { text: 'Support', link: 'support' },
      { text: 'Contribute', link: 'contribute' }
    ]
  },

  {
    text: 'Concepts',
    base: '/en/concepts/',
    collapsed: false,
    items: [
      { text: 'System Overview', link: 'system-overview' },
      { text: 'How Industrial Systems Work', link: 'how-industrial-systems-work' }
    ]
  },

  {
    text: 'Electrical Fundamentals',
    base: '/en/electrical-fundamentals/',
    collapsed: false,
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

//     {
//     text: 'Power Systems',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/en/power-systems/overview' },

//       {
//         text: 'Distribution',
//         collapsed: true,
//         items: [
//           { text: 'Distribution Systems', link: '/en/power-systems/distribution/distribution-systems' },
//           { text: 'Low Voltage', link: '/en/power-systems/distribution/low-voltage' },
//           { text: 'Medium Voltage', link: '/en/power-systems/distribution/medium-voltage' },
//           { text: 'Transformers', link: '/en/power-systems/distribution/transformers' }
//         ]
//       },

//       {
//         text: 'Equipment',
//         collapsed: true,
//         items: [
//           { text: 'Switchgear', link: '/en/power-systems/equipment/switchgear' },
//           { text: 'Switchboards', link: '/en/power-systems/equipment/switchboards' },
//           { text: 'Busbars', link: '/en/power-systems/equipment/busbars' },
//           { text: 'Distribution Panels', link: '/en/power-systems/equipment/distribution-panels' }
//         ]
//       },

//       {
//         text: 'Protection',
//         collapsed: true,
//         items: [
//           { text: 'Protection Basics', link: '/en/power-systems/protection/protection-basics' },
//           { text: 'Protective Devices', link: '/en/power-systems/protection/protective-devices' },
//           { text: 'Overcurrent Protection', link: '/en/power-systems/protection/overcurrent-protection' },
//           { text: 'Coordination of Protections', link: '/en/power-systems/protection/coordination-of-protections' },
//           { text: 'Arc Flash Basics', link: '/en/power-systems/protection/arc-flash-basics' }
//         ]
//       },

//       {
//         text: 'Studies',
//         collapsed: true,
//         items: [
//           { text: 'Short Circuit Analysis', link: '/en/power-systems/studies/short-circuit-analysis' }
//         ]
//       },

//       { text: 'Equipment Selection', link: '/en/power-systems/equipment-selection' }
//     ]
//   },

//   {
//     text: 'Power Quality',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/en/power-quality/overview' },
//       { text: 'Voltage Sags', link: '/en/power-quality/voltage-sags' },
//       { text: 'Voltage Swells', link: '/en/power-quality/voltage-swells' },
//       { text: 'Harmonics', link: '/en/power-quality/harmonics' },
//       { text: 'THD', link: '/en/power-quality/thd' },
//       { text: 'Power Factor Correction', link: '/en/power-quality/power-factor-correction' },
//       { text: 'Flicker', link: '/en/power-quality/flicker' },
//       { text: 'Transients & Surges', link: '/en/power-quality/transients-surges' },
//       { text: 'Monitoring', link: '/en/power-quality/monitoring' }
//     ]
//   },

  {
  text: 'Cables',
  base: '/en/cables/',
  collapsed: false,
  items: [
    { text: 'Overview', link: 'overview' },

    {
      text: 'Fundamentals',
      base: '/en/cables/fundamentals/',
      collapsed: false,
      items: [
        { text: 'Conductor Materials', link: 'conductor-materials' },
        { text: 'Current Capacity', link: 'current-capacity' },
        { text: 'Voltage Drop', link: 'voltage-drop' }
      ]
    },

    {
      text: 'Cable Types',
      base: '/en/cables/cable-types/',
      collapsed: false,
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
      collapsed: false,
      items: [
        { text: 'Cable Sizing', link: 'cable-sizing' },
        { text: 'Shielded Cables', link: 'shielded' }
      ]
    },

    {
      text: 'Installation',
      base: '/en/cables/installation/',
      collapsed: false,
      items: [
        { text: 'Routing', link: 'routing' },
        { text: 'Cable Trays', link: 'trays' },
        { text: 'Conduit', link: 'conduit' }
      ]
    },

    {
      text: 'Selection',
      base: '/en/cables/selection/',
      collapsed: false,
      items: [
        { text: 'Cable Selection', link: 'cable-selection' }
      ]
    }
  ]
},

//     {
//     text: 'Industrial Equipment',
//     collapsed: true,
//     items: [
//       {
//         text: 'Motors',
//         collapsed: true,
//         items: [
//           { text: 'Motors Overview', link: '/en/industrial-equipment/motors/motors-overview' },
//           { text: 'Motor Types', link: '/en/industrial-equipment/motors/motor-types' },
//           { text: 'Induction Motors', link: '/en/industrial-equipment/motors/induction-motors' },
//           { text: 'Synchronous Motors', link: '/en/industrial-equipment/motors/synchronous-motors' },
//           { text: 'DC Motors', link: '/en/industrial-equipment/motors/dc-motors' },
//           { text: 'Servo Motors', link: '/en/industrial-equipment/motors/servo-motors' },
//           { text: 'Stepper Motors', link: '/en/industrial-equipment/motors/stepper-motors' },
//           { text: 'Motor Nameplates', link: '/en/industrial-equipment/motors/motor-nameplates' },
//           { text: 'Motor Efficiency', link: '/en/industrial-equipment/motors/motor-efficiency' },
//           { text: 'Motor Cooling', link: '/en/industrial-equipment/motors/motor-cooling' },
//           { text: 'Motor Protection', link: '/en/industrial-equipment/motors/motor-protection' },
//           { text: 'Motor Selection', link: '/en/industrial-equipment/motors/motor-selection' }
//         ]
//       },

//       {
//         text: 'Drives',
//         collapsed: true,
//         items: [
//           { text: 'Drives Overview', link: '/en/industrial-equipment/drives/drives-overview' },
//           { text: 'VFD', link: '/en/industrial-equipment/drives/vfd' },
//           { text: 'Servo Drives', link: '/en/industrial-equipment/drives/servo-drives' },
//           { text: 'Motion Controllers', link: '/en/industrial-equipment/drives/motion-controllers' },
//           { text: 'Speed Control', link: '/en/industrial-equipment/drives/speed-control' },
//           { text: 'Torque Control', link: '/en/industrial-equipment/drives/torque-control' },
//           { text: 'Drive Selection', link: '/en/industrial-equipment/drives/drive-selection' }
//         ]
//       },

//       {
//         text: 'Sensors',
//         collapsed: true,
//         items: [
//           { text: 'Sensors Overview', link: '/en/industrial-equipment/sensors/sensors-overview' },
//           { text: 'Sensor Types', link: '/en/industrial-equipment/sensors/sensor-types' },
//           { text: 'Sensor Selection', link: '/en/industrial-equipment/sensors/sensor-selection' }
//         ]
//       },

//       {
//         text: 'Actuators',
//         collapsed: true,
//         items: [
//           { text: 'Actuators Overview', link: '/en/industrial-equipment/actuators/actuators-overview' },
//           { text: 'Electric Actuators', link: '/en/industrial-equipment/actuators/electric-actuators' },
//           { text: 'Pneumatic', link: '/en/industrial-equipment/actuators/pneumatic' },
//           { text: 'Hydraulic', link: '/en/industrial-equipment/actuators/hydraulic' },
//           { text: 'Solenoids', link: '/en/industrial-equipment/actuators/solenoids' },
//           { text: 'Control Valves', link: '/en/industrial-equipment/actuators/control-valves' },
//           { text: 'Actuator Selection', link: '/en/industrial-equipment/actuators/actuator-selection' }
//         ]
//       }
//     ]
//   },

//   {
//     text: 'Control Systems',
//     collapsed: true,
//     items: [
//       {
//         text: 'Basics',
//         collapsed: true,
//         items: [
//           { text: 'Control Philosophy', link: '/en/control-systems/basics/control-philosophy' },
//           { text: 'Open vs Closed Loop', link: '/en/control-systems/basics/open-vs-closed-loop' },
//           { text: 'PID Basics', link: '/en/control-systems/basics/pid-basics' }
//         ]
//       },

//       {
//         text: 'PLC',
//         collapsed: true,
//         items: [
//           { text: 'PLC Overview', link: '/en/control-systems/plc/plc-overview' },
//           { text: 'PLC Architecture', link: '/en/control-systems/plc/plc-architecture' },
//           { text: 'PLC Scan Cycle', link: '/en/control-systems/plc/plc-scan-cycle' },
//           { text: 'PLC CPU', link: '/en/control-systems/plc/plc-cpu' },
//           { text: 'PLC Memory', link: '/en/control-systems/plc/plc-memory' },
//           { text: 'PLC I/O', link: '/en/control-systems/plc/plc-io' },
//           { text: 'Digital vs Analog', link: '/en/control-systems/plc/digital-vs-analog' },
//           { text: 'PLC Communication', link: '/en/control-systems/plc/plc-communication' },
//           { text: 'Ladder Logic', link: '/en/control-systems/plc/ladder-logic' },
//           { text: 'Function Block', link: '/en/control-systems/plc/function-block' },
//           { text: 'Structured Text', link: '/en/control-systems/plc/structured-text' },
//           { text: 'SFC', link: '/en/control-systems/plc/sfc' },
//           { text: 'PLC Selection', link: '/en/control-systems/plc/plc-selection' },
//           { text: 'PLC Basic Design', link: '/en/control-systems/plc/plc-basic-design' }
//         ]
//       },

//       {
//         text: 'HMI',
//         collapsed: true,
//         items: [
//           { text: 'HMI Overview', link: '/en/control-systems/hmi/hmi-overview' },
//           { text: 'HMI Architecture', link: '/en/control-systems/hmi/hmi-architecture' },
//           { text: 'HMI Design', link: '/en/control-systems/hmi/hmi-design' },
//           { text: 'Alarm Management', link: '/en/control-systems/hmi/alarm-management' }
//         ]
//       },

//       {
//         text: 'SCADA',
//         collapsed: true,
//         items: [
//           { text: 'SCADA Overview', link: '/en/control-systems/scada/scada-overview' },
//           { text: 'SCADA Architecture', link: '/en/control-systems/scada/scada-architecture' },
//           { text: 'Historian', link: '/en/control-systems/scada/historian' },
//           { text: 'SCADA vs HMI', link: '/en/control-systems/scada/scada-vs-hmi' }
//         ]
//       }
//     ]
//   },

//     {
//     text: 'Instrumentation',
//     collapsed: true,
//     items: [
//       { text: 'Measurement Basics', link: '/en/instrumentation/measurement-basics' },
//       { text: '4-20 mA Signals', link: '/en/instrumentation/4-20ma-signals' },
//       { text: 'Analog vs Digital Signals', link: '/en/instrumentation/analog-vs-digital-signals' },
//       { text: 'Signal Conditioning', link: '/en/instrumentation/signal-conditioning' },
//       { text: 'Noise and Interference', link: '/en/instrumentation/noise-and-interference' },
//       { text: 'Grounding and Shielding', link: '/en/instrumentation/grounding-and-shielding' },
//       { text: 'Calibration', link: '/en/instrumentation/calibration' },
//       { text: 'Instrumentation Selection', link: '/en/instrumentation/instrumentation-selection' }
//     ]
//   },

//   {
//     text: 'Networks',
//     collapsed: true,
//     items: [
//       {
//         text: 'Protocols',
//         collapsed: true,
//         items: [
//           { text: 'Ethernet', link: '/en/networks/protocols/ethernet' },
//           { text: 'EtherNet/IP', link: '/en/networks/protocols/ethernet-ip' },
//           { text: 'Modbus RTU', link: '/en/networks/protocols/modbus-rtu' },
//           { text: 'Modbus TCP', link: '/en/networks/protocols/modbus-tcp' },
//           { text: 'Profinet', link: '/en/networks/protocols/profinet' },
//           { text: 'Profibus', link: '/en/networks/protocols/profibus' },
//           { text: 'CAN Bus', link: '/en/networks/protocols/can-bus' },
//           { text: 'DeviceNet', link: '/en/networks/protocols/devicenet' },
//           { text: 'OPC UA', link: '/en/networks/protocols/opc-ua' }
//         ]
//       },

//       {
//         text: 'Hardware',
//         collapsed: true,
//         items: [
//           { text: 'Switches', link: '/en/networks/hardware/switches' },
//           { text: 'Routers', link: '/en/networks/hardware/routers' },
//           { text: 'Gateways', link: '/en/networks/hardware/gateways' },
//           { text: 'Firewalls', link: '/en/networks/hardware/firewalls' }
//         ]
//       },

//       {
//         text: 'Remote Access',
//         collapsed: true,
//         items: [
//           { text: 'Remote Access', link: '/en/networks/remote-access/remote-access' },
//           { text: 'VPN', link: '/en/networks/remote-access/vpn' },
//           { text: 'Secure Remote Access', link: '/en/networks/remote-access/secure-remote-access' }
//         ]
//       },

//       { text: 'Architectures', link: '/en/networks/architectures' },
//       { text: 'Use Cases', link: '/en/networks/use-cases' },
//       { text: 'Network Design', link: '/en/networks/network-design' }
//     ]
//   },

//   {
//     text: 'Control Panels',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/en/control-panels/overview' },
//       { text: 'Layout', link: '/en/control-panels/layout' },
//       { text: 'Wiring', link: '/en/control-panels/wiring' },
//       { text: 'Cable Management', link: '/en/control-panels/cable-management' },
//       { text: 'Breakers', link: '/en/control-panels/breakers' },
//       { text: 'Contactors', link: '/en/control-panels/contactors' },
//       { text: 'Overload Relays', link: '/en/control-panels/overload-relays' },
//       { text: 'Power Supplies', link: '/en/control-panels/power-supplies' },
//       { text: 'Terminal Blocks', link: '/en/control-panels/terminal-blocks' },
//       { text: 'Panel Design', link: '/en/control-panels/panel-design' },
//       { text: 'Component Selection', link: '/en/control-panels/component-selection' }
//     ]
//   },

//   {
//     text: 'Safety',
//     collapsed: true,
//     items: [
//       { text: 'Basics', link: '/en/safety/basics' },
//       { text: 'Risk Assessment', link: '/en/safety/risk-assessment' },
//       { text: 'Categories', link: '/en/safety/categories' },
//       { text: 'Emergency Stop', link: '/en/safety/emergency-stop' },
//       { text: 'Safety Relays', link: '/en/safety/safety-relays' },
//       { text: 'Safety PLC', link: '/en/safety/safety-plc' },
//       { text: 'Lockout Tagout', link: '/en/safety/lockout-tagout' }
//     ]
//   },

//   {
//     text: 'Commissioning',
//     collapsed: true,
//     items: [
//       { text: 'Pre-Commissioning', link: '/en/commissioning/pre-commissioning' },
//       { text: 'Loop Checks', link: '/en/commissioning/loop-checks' },
//       { text: 'Startup', link: '/en/commissioning/startup' },
//       { text: 'Testing and Validation', link: '/en/commissioning/testing-and-validation' },
//       { text: 'Documentation', link: '/en/commissioning/documentation' }
//     ]
//   },

//     {
//     text: 'Industrial Practices',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/en/industrial-practices/overview' },

//       {
//         text: 'Labeling',
//         collapsed: true,
//         items: [
//           { text: 'Labeling Overview', link: '/en/industrial-practices/labeling/labeling-overview' },
//           { text: 'Why Labeling Matters', link: '/en/industrial-practices/labeling/why-labeling-matters' },
//           { text: 'Labeling Standards', link: '/en/industrial-practices/labeling/labeling-standards' },
//           { text: 'Label Types', link: '/en/industrial-practices/labeling/label-types' },
//           { text: 'Materials and Durability', link: '/en/industrial-practices/labeling/materials-and-durability' },
//           { text: 'Cable and Wire Labeling', link: '/en/industrial-practices/labeling/cable-and-wire-labeling' },
//           { text: 'Panel and Component Labeling', link: '/en/industrial-practices/labeling/panel-and-component-labeling' },
//           { text: 'Machine Documentation', link: '/en/industrial-practices/labeling/machine-documentation' },
//           { text: 'Best Practices', link: '/en/industrial-practices/labeling/best-practices' }
//         ]
//       },

//       {
//         text: 'Lighting',
//         collapsed: true,
//         items: [
//           { text: 'Lighting Overview', link: '/en/industrial-practices/lighting/lighting-overview' },
//           { text: 'Why Lighting Matters', link: '/en/industrial-practices/lighting/why-lighting-matters' },
//           { text: 'Lighting Types', link: '/en/industrial-practices/lighting/lighting-types' },
//           { text: 'Placement and Distribution', link: '/en/industrial-practices/lighting/placement-and-distribution' },
//           { text: 'Illumination Levels (Lux)', link: '/en/industrial-practices/lighting/illumination-levels-lux' },
//           { text: 'Power and Efficiency', link: '/en/industrial-practices/lighting/power-and-efficiency' },
//           { text: 'Industrial Environments', link: '/en/industrial-practices/lighting/industrial-environments' },
//           { text: 'Safety and Emergency Lighting', link: '/en/industrial-practices/lighting/safety-and-emergency-lighting' },
//           { text: 'Lighting Design Basics', link: '/en/industrial-practices/lighting/lighting-design-basics' }
//         ]
//       },

//       {
//         text: 'Documentation',
//         collapsed: true,
//         items: [
//           { text: 'Documentation Overview', link: '/en/industrial-practices/documentation/documentation-overview' },
//           { text: 'Machine Instructions', link: '/en/industrial-practices/documentation/machine-instructions' },
//           { text: 'Electrical Drawings', link: '/en/industrial-practices/documentation/electrical-drawings' },
//           { text: 'Maintenance Guides', link: '/en/industrial-practices/documentation/maintenance-guides' },
//           { text: 'Operator Information', link: '/en/industrial-practices/documentation/operator-information' }
//         ]
//       },

//       {
//         text: 'Installation & Mounting',
//         collapsed: true,
//         items: [
//           { text: 'Overview', link: '/en/industrial-practices/installation-and-mounting/overview' },
//           { text: 'General Principles', link: '/en/industrial-practices/installation-and-mounting/general-principles' },
//           { text: 'Alignment', link: '/en/industrial-practices/installation-and-mounting/alignment' },
//           { text: 'Vibrations', link: '/en/industrial-practices/installation-and-mounting/vibrations' },
//           { text: 'Common Mistakes', link: '/en/industrial-practices/installation-and-mounting/common-mistakes' }
//         ]
//       },

//       {
//         text: 'Environmental Conditions',
//         collapsed: true,
//         items: [
//           { text: 'Overview', link: '/en/industrial-practices/environmental-conditions/overview' },
//           { text: 'Factors', link: '/en/industrial-practices/environmental-conditions/factors' },
//           { text: 'IP Ratings', link: '/en/industrial-practices/environmental-conditions/ip-ratings' },
//           { text: 'General Selection', link: '/en/industrial-practices/environmental-conditions/general-selection' }
//         ]
//       }
//     ]
//   },

//   {
//     text: 'Energy Efficiency',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/en/energy-efficiency/overview' },
//       { text: 'Where Energy is Used', link: '/en/energy-efficiency/where-energy-is-used' },
//       { text: 'Energy Saving Opportunities', link: '/en/energy-efficiency/energy-saving-opportunities' },
//       { text: 'Renewable Integration', link: '/en/energy-efficiency/renewable-integration' }
//     ]
//   },

//   {
//     text: 'Tools',
//     collapsed: true,
//     items: [
//       { text: 'Formulas', link: '/en/tools/formulas' },
//       { text: 'Unit Conversions', link: '/en/tools/unit-conversions' },
//       { text: 'Typical Values', link: '/en/tools/typical-values' },
//       { text: 'Rules of Thumb', link: '/en/tools/rules-of-thumb' }
//     ]
//   },

{
  text: 'Standards',
  base: '/en/standards/',
  collapsed: false,
  items: [
    { text: 'Overview', link: 'overview' },

    {
      text: 'Fundamentals',
      collapsed: false,
      base: '/en/standards/fundamentals/',
      items: [
        { text: 'What is a Standard', link: 'what-is-a-standard' },
        { text: 'Certification vs Compliance', link: 'certification-vs-compliance' },
        { text: 'Regional Differences', link: 'regional-differences' }
      ]
    },

    {
      text: 'Electrical',
      collapsed: false,
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
      collapsed: false,
      base: '/en/standards/machinery/',
      items: [
        { text: 'Overview', link: 'overview' },
        { text: 'Machine Safety', link: 'machine-safety' },
        { text: 'Risk Assessment', link: 'risk-assessment' }
      ]
    },

    {
      text: 'Organizations',
      collapsed: false,
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

//   {
//     text: 'Cybersecurity',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/en/cybersecurity/overview' },
//       { text: 'Threats', link: '/en/cybersecurity/threats' },
//       { text: 'Segmentation', link: '/en/cybersecurity/segmentation' },
//       { text: 'Firewalls', link: '/en/cybersecurity/firewalls' },
//       { text: 'Secure Remote Access', link: '/en/cybersecurity/secure-remote-access' },
//       { text: 'Patching', link: '/en/cybersecurity/patching' },
//       { text: 'User Access', link: '/en/cybersecurity/user-access' },
//       { text: 'IEC 62443', link: '/en/cybersecurity/iec-62443' }
//     ]
//   },

//   {
//     text: 'Digitalization',
//     collapsed: true,
//     items: [
//       { text: 'OT vs IT', link: '/en/digitalization/ot-vs-it' },
//       { text: 'Network Architecture', link: '/en/digitalization/network-architecture' },
//       { text: 'Purdue Model', link: '/en/digitalization/purdue-model' },
//       { text: 'Edge Computing', link: '/en/digitalization/edge-computing' },
//       { text: 'Data Collection', link: '/en/digitalization/data-collection' },
//       { text: 'Cloud', link: '/en/digitalization/cloud' },
//       { text: 'IIoT', link: '/en/digitalization/iiot' }
//     ]
//   }
]
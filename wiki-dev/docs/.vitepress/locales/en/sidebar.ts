import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Home',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/home/overview' },
      { text: 'Road Map', link: '/home/road-map' },
      { text: 'Support', link: '/home/support' },
      { text: 'Contribute', link: '/home/contribute' }
    ]
  },

  {
    text: 'Concepts',
    collapsed: false,
    items: [
      { text: 'System Overview', link: '/concepts/system-overview' },
      { text: 'How Industrial Systems Work', link: '/concepts/how-industrial-systems-work' }
    ]
  },

//   {
//     text: 'Electrical Fundamentals',
//     collapsed: true,
//     items: [
//       { text: 'Voltage', link: '/electrical-fundamentals/voltage' },
//       { text: 'Current', link: '/electrical-fundamentals/current' },
//       { text: 'Resistance', link: '/electrical-fundamentals/resistance' },
//       { text: "Ohm's Law", link: '/electrical-fundamentals/ohms-law' },
//       { text: 'Electric Power', link: '/electrical-fundamentals/electric-power' },
//       { text: 'AC vs DC', link: '/electrical-fundamentals/ac-vs-dc' },
//       { text: 'Single Phase', link: '/electrical-fundamentals/single-phase' },
//       { text: 'Three Phase', link: '/electrical-fundamentals/three-phase' },
//       { text: 'Power Factor', link: '/electrical-fundamentals/power-factor' },
//       { text: 'Grounding', link: '/electrical-fundamentals/grounding' },
//       { text: 'Electrical Noise', link: '/electrical-fundamentals/electrical-noise' }
//     ]
//   },

//     {
//     text: 'Power Systems',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/power-systems/overview' },

//       {
//         text: 'Distribution',
//         collapsed: true,
//         items: [
//           { text: 'Distribution Systems', link: '/power-systems/distribution/distribution-systems' },
//           { text: 'Low Voltage', link: '/power-systems/distribution/low-voltage' },
//           { text: 'Medium Voltage', link: '/power-systems/distribution/medium-voltage' },
//           { text: 'Transformers', link: '/power-systems/distribution/transformers' }
//         ]
//       },

//       {
//         text: 'Equipment',
//         collapsed: true,
//         items: [
//           { text: 'Switchgear', link: '/power-systems/equipment/switchgear' },
//           { text: 'Switchboards', link: '/power-systems/equipment/switchboards' },
//           { text: 'Busbars', link: '/power-systems/equipment/busbars' },
//           { text: 'Distribution Panels', link: '/power-systems/equipment/distribution-panels' }
//         ]
//       },

//       {
//         text: 'Protection',
//         collapsed: true,
//         items: [
//           { text: 'Protection Basics', link: '/power-systems/protection/protection-basics' },
//           { text: 'Protective Devices', link: '/power-systems/protection/protective-devices' },
//           { text: 'Overcurrent Protection', link: '/power-systems/protection/overcurrent-protection' },
//           { text: 'Coordination of Protections', link: '/power-systems/protection/coordination-of-protections' },
//           { text: 'Arc Flash Basics', link: '/power-systems/protection/arc-flash-basics' }
//         ]
//       },

//       {
//         text: 'Studies',
//         collapsed: true,
//         items: [
//           { text: 'Short Circuit Analysis', link: '/power-systems/studies/short-circuit-analysis' }
//         ]
//       },

//       { text: 'Equipment Selection', link: '/power-systems/equipment-selection' }
//     ]
//   },

//   {
//     text: 'Power Quality',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/power-quality/overview' },
//       { text: 'Voltage Sags', link: '/power-quality/voltage-sags' },
//       { text: 'Voltage Swells', link: '/power-quality/voltage-swells' },
//       { text: 'Harmonics', link: '/power-quality/harmonics' },
//       { text: 'THD', link: '/power-quality/thd' },
//       { text: 'Power Factor Correction', link: '/power-quality/power-factor-correction' },
//       { text: 'Flicker', link: '/power-quality/flicker' },
//       { text: 'Transients & Surges', link: '/power-quality/transients-surges' },
//       { text: 'Monitoring', link: '/power-quality/monitoring' }
//     ]
//   },

  {
    text: 'Cables',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/cables/overview' },
      { text: 'Conductor Materials', link: '/cables/conductor-materials' },
      { text: 'Cable Types', link: '/cables/cable-types' },
      { text: 'Power Cables', link: '/cables/power-cables' },
      { text: 'Control Cables', link: '/cables/control-cables' },
      { text: 'Communication Cables', link: '/cables/communication-cables' },
      { text: 'Shielded Cables', link: '/cables/shielded' },
      { text: 'Instrumentation Cables', link: '/cables/instrumentation' },
      { text: 'Cable Sizing', link: '/cables/cable-sizing' },
      { text: 'Voltage Drop', link: '/cables/voltage-drop' },
      { text: 'Current Capacity', link: '/cables/current-capacity' },
      { text: 'Routing', link: '/cables/routing' },
      { text: 'Cable Trays', link: '/cables/trays' },
      { text: 'Conduit', link: '/cables/conduit' },
      { text: 'Cable Selection', link: '/cables/cable-selection' }
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
//           { text: 'Motors Overview', link: '/industrial-equipment/motors/motors-overview' },
//           { text: 'Motor Types', link: '/industrial-equipment/motors/motor-types' },
//           { text: 'Induction Motors', link: '/industrial-equipment/motors/induction-motors' },
//           { text: 'Synchronous Motors', link: '/industrial-equipment/motors/synchronous-motors' },
//           { text: 'DC Motors', link: '/industrial-equipment/motors/dc-motors' },
//           { text: 'Servo Motors', link: '/industrial-equipment/motors/servo-motors' },
//           { text: 'Stepper Motors', link: '/industrial-equipment/motors/stepper-motors' },
//           { text: 'Motor Nameplates', link: '/industrial-equipment/motors/motor-nameplates' },
//           { text: 'Motor Efficiency', link: '/industrial-equipment/motors/motor-efficiency' },
//           { text: 'Motor Cooling', link: '/industrial-equipment/motors/motor-cooling' },
//           { text: 'Motor Protection', link: '/industrial-equipment/motors/motor-protection' },
//           { text: 'Motor Selection', link: '/industrial-equipment/motors/motor-selection' }
//         ]
//       },

//       {
//         text: 'Drives',
//         collapsed: true,
//         items: [
//           { text: 'Drives Overview', link: '/industrial-equipment/drives/drives-overview' },
//           { text: 'VFD', link: '/industrial-equipment/drives/vfd' },
//           { text: 'Servo Drives', link: '/industrial-equipment/drives/servo-drives' },
//           { text: 'Motion Controllers', link: '/industrial-equipment/drives/motion-controllers' },
//           { text: 'Speed Control', link: '/industrial-equipment/drives/speed-control' },
//           { text: 'Torque Control', link: '/industrial-equipment/drives/torque-control' },
//           { text: 'Drive Selection', link: '/industrial-equipment/drives/drive-selection' }
//         ]
//       },

//       {
//         text: 'Sensors',
//         collapsed: true,
//         items: [
//           { text: 'Sensors Overview', link: '/industrial-equipment/sensors/sensors-overview' },
//           { text: 'Sensor Types', link: '/industrial-equipment/sensors/sensor-types' },
//           { text: 'Sensor Selection', link: '/industrial-equipment/sensors/sensor-selection' }
//         ]
//       },

//       {
//         text: 'Actuators',
//         collapsed: true,
//         items: [
//           { text: 'Actuators Overview', link: '/industrial-equipment/actuators/actuators-overview' },
//           { text: 'Electric Actuators', link: '/industrial-equipment/actuators/electric-actuators' },
//           { text: 'Pneumatic', link: '/industrial-equipment/actuators/pneumatic' },
//           { text: 'Hydraulic', link: '/industrial-equipment/actuators/hydraulic' },
//           { text: 'Solenoids', link: '/industrial-equipment/actuators/solenoids' },
//           { text: 'Control Valves', link: '/industrial-equipment/actuators/control-valves' },
//           { text: 'Actuator Selection', link: '/industrial-equipment/actuators/actuator-selection' }
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
//           { text: 'Control Philosophy', link: '/control-systems/basics/control-philosophy' },
//           { text: 'Open vs Closed Loop', link: '/control-systems/basics/open-vs-closed-loop' },
//           { text: 'PID Basics', link: '/control-systems/basics/pid-basics' }
//         ]
//       },

//       {
//         text: 'PLC',
//         collapsed: true,
//         items: [
//           { text: 'PLC Overview', link: '/control-systems/plc/plc-overview' },
//           { text: 'PLC Architecture', link: '/control-systems/plc/plc-architecture' },
//           { text: 'PLC Scan Cycle', link: '/control-systems/plc/plc-scan-cycle' },
//           { text: 'PLC CPU', link: '/control-systems/plc/plc-cpu' },
//           { text: 'PLC Memory', link: '/control-systems/plc/plc-memory' },
//           { text: 'PLC I/O', link: '/control-systems/plc/plc-io' },
//           { text: 'Digital vs Analog', link: '/control-systems/plc/digital-vs-analog' },
//           { text: 'PLC Communication', link: '/control-systems/plc/plc-communication' },
//           { text: 'Ladder Logic', link: '/control-systems/plc/ladder-logic' },
//           { text: 'Function Block', link: '/control-systems/plc/function-block' },
//           { text: 'Structured Text', link: '/control-systems/plc/structured-text' },
//           { text: 'SFC', link: '/control-systems/plc/sfc' },
//           { text: 'PLC Selection', link: '/control-systems/plc/plc-selection' },
//           { text: 'PLC Basic Design', link: '/control-systems/plc/plc-basic-design' }
//         ]
//       },

//       {
//         text: 'HMI',
//         collapsed: true,
//         items: [
//           { text: 'HMI Overview', link: '/control-systems/hmi/hmi-overview' },
//           { text: 'HMI Architecture', link: '/control-systems/hmi/hmi-architecture' },
//           { text: 'HMI Design', link: '/control-systems/hmi/hmi-design' },
//           { text: 'Alarm Management', link: '/control-systems/hmi/alarm-management' }
//         ]
//       },

//       {
//         text: 'SCADA',
//         collapsed: true,
//         items: [
//           { text: 'SCADA Overview', link: '/control-systems/scada/scada-overview' },
//           { text: 'SCADA Architecture', link: '/control-systems/scada/scada-architecture' },
//           { text: 'Historian', link: '/control-systems/scada/historian' },
//           { text: 'SCADA vs HMI', link: '/control-systems/scada/scada-vs-hmi' }
//         ]
//       }
//     ]
//   },

//     {
//     text: 'Instrumentation',
//     collapsed: true,
//     items: [
//       { text: 'Measurement Basics', link: '/instrumentation/measurement-basics' },
//       { text: '4-20 mA Signals', link: '/instrumentation/4-20ma-signals' },
//       { text: 'Analog vs Digital Signals', link: '/instrumentation/analog-vs-digital-signals' },
//       { text: 'Signal Conditioning', link: '/instrumentation/signal-conditioning' },
//       { text: 'Noise and Interference', link: '/instrumentation/noise-and-interference' },
//       { text: 'Grounding and Shielding', link: '/instrumentation/grounding-and-shielding' },
//       { text: 'Calibration', link: '/instrumentation/calibration' },
//       { text: 'Instrumentation Selection', link: '/instrumentation/instrumentation-selection' }
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
//           { text: 'Ethernet', link: '/networks/protocols/ethernet' },
//           { text: 'EtherNet/IP', link: '/networks/protocols/ethernet-ip' },
//           { text: 'Modbus RTU', link: '/networks/protocols/modbus-rtu' },
//           { text: 'Modbus TCP', link: '/networks/protocols/modbus-tcp' },
//           { text: 'Profinet', link: '/networks/protocols/profinet' },
//           { text: 'Profibus', link: '/networks/protocols/profibus' },
//           { text: 'CAN Bus', link: '/networks/protocols/can-bus' },
//           { text: 'DeviceNet', link: '/networks/protocols/devicenet' },
//           { text: 'OPC UA', link: '/networks/protocols/opc-ua' }
//         ]
//       },

//       {
//         text: 'Hardware',
//         collapsed: true,
//         items: [
//           { text: 'Switches', link: '/networks/hardware/switches' },
//           { text: 'Routers', link: '/networks/hardware/routers' },
//           { text: 'Gateways', link: '/networks/hardware/gateways' },
//           { text: 'Firewalls', link: '/networks/hardware/firewalls' }
//         ]
//       },

//       {
//         text: 'Remote Access',
//         collapsed: true,
//         items: [
//           { text: 'Remote Access', link: '/networks/remote-access/remote-access' },
//           { text: 'VPN', link: '/networks/remote-access/vpn' },
//           { text: 'Secure Remote Access', link: '/networks/remote-access/secure-remote-access' }
//         ]
//       },

//       { text: 'Architectures', link: '/networks/architectures' },
//       { text: 'Use Cases', link: '/networks/use-cases' },
//       { text: 'Network Design', link: '/networks/network-design' }
//     ]
//   },

//   {
//     text: 'Control Panels',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/control-panels/overview' },
//       { text: 'Layout', link: '/control-panels/layout' },
//       { text: 'Wiring', link: '/control-panels/wiring' },
//       { text: 'Cable Management', link: '/control-panels/cable-management' },
//       { text: 'Breakers', link: '/control-panels/breakers' },
//       { text: 'Contactors', link: '/control-panels/contactors' },
//       { text: 'Overload Relays', link: '/control-panels/overload-relays' },
//       { text: 'Power Supplies', link: '/control-panels/power-supplies' },
//       { text: 'Terminal Blocks', link: '/control-panels/terminal-blocks' },
//       { text: 'Panel Design', link: '/control-panels/panel-design' },
//       { text: 'Component Selection', link: '/control-panels/component-selection' }
//     ]
//   },

//   {
//     text: 'Safety',
//     collapsed: true,
//     items: [
//       { text: 'Basics', link: '/safety/basics' },
//       { text: 'Risk Assessment', link: '/safety/risk-assessment' },
//       { text: 'Categories', link: '/safety/categories' },
//       { text: 'Emergency Stop', link: '/safety/emergency-stop' },
//       { text: 'Safety Relays', link: '/safety/safety-relays' },
//       { text: 'Safety PLC', link: '/safety/safety-plc' },
//       { text: 'Lockout Tagout', link: '/safety/lockout-tagout' }
//     ]
//   },

//   {
//     text: 'Commissioning',
//     collapsed: true,
//     items: [
//       { text: 'Pre-Commissioning', link: '/commissioning/pre-commissioning' },
//       { text: 'Loop Checks', link: '/commissioning/loop-checks' },
//       { text: 'Startup', link: '/commissioning/startup' },
//       { text: 'Testing and Validation', link: '/commissioning/testing-and-validation' },
//       { text: 'Documentation', link: '/commissioning/documentation' }
//     ]
//   },

//     {
//     text: 'Industrial Practices',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/industrial-practices/overview' },

//       {
//         text: 'Labeling',
//         collapsed: true,
//         items: [
//           { text: 'Labeling Overview', link: '/industrial-practices/labeling/labeling-overview' },
//           { text: 'Why Labeling Matters', link: '/industrial-practices/labeling/why-labeling-matters' },
//           { text: 'Labeling Standards', link: '/industrial-practices/labeling/labeling-standards' },
//           { text: 'Label Types', link: '/industrial-practices/labeling/label-types' },
//           { text: 'Materials and Durability', link: '/industrial-practices/labeling/materials-and-durability' },
//           { text: 'Cable and Wire Labeling', link: '/industrial-practices/labeling/cable-and-wire-labeling' },
//           { text: 'Panel and Component Labeling', link: '/industrial-practices/labeling/panel-and-component-labeling' },
//           { text: 'Machine Documentation', link: '/industrial-practices/labeling/machine-documentation' },
//           { text: 'Best Practices', link: '/industrial-practices/labeling/best-practices' }
//         ]
//       },

//       {
//         text: 'Lighting',
//         collapsed: true,
//         items: [
//           { text: 'Lighting Overview', link: '/industrial-practices/lighting/lighting-overview' },
//           { text: 'Why Lighting Matters', link: '/industrial-practices/lighting/why-lighting-matters' },
//           { text: 'Lighting Types', link: '/industrial-practices/lighting/lighting-types' },
//           { text: 'Placement and Distribution', link: '/industrial-practices/lighting/placement-and-distribution' },
//           { text: 'Illumination Levels (Lux)', link: '/industrial-practices/lighting/illumination-levels-lux' },
//           { text: 'Power and Efficiency', link: '/industrial-practices/lighting/power-and-efficiency' },
//           { text: 'Industrial Environments', link: '/industrial-practices/lighting/industrial-environments' },
//           { text: 'Safety and Emergency Lighting', link: '/industrial-practices/lighting/safety-and-emergency-lighting' },
//           { text: 'Lighting Design Basics', link: '/industrial-practices/lighting/lighting-design-basics' }
//         ]
//       },

//       {
//         text: 'Documentation',
//         collapsed: true,
//         items: [
//           { text: 'Documentation Overview', link: '/industrial-practices/documentation/documentation-overview' },
//           { text: 'Machine Instructions', link: '/industrial-practices/documentation/machine-instructions' },
//           { text: 'Electrical Drawings', link: '/industrial-practices/documentation/electrical-drawings' },
//           { text: 'Maintenance Guides', link: '/industrial-practices/documentation/maintenance-guides' },
//           { text: 'Operator Information', link: '/industrial-practices/documentation/operator-information' }
//         ]
//       },

//       {
//         text: 'Installation & Mounting',
//         collapsed: true,
//         items: [
//           { text: 'Overview', link: '/industrial-practices/installation-and-mounting/overview' },
//           { text: 'General Principles', link: '/industrial-practices/installation-and-mounting/general-principles' },
//           { text: 'Alignment', link: '/industrial-practices/installation-and-mounting/alignment' },
//           { text: 'Vibrations', link: '/industrial-practices/installation-and-mounting/vibrations' },
//           { text: 'Common Mistakes', link: '/industrial-practices/installation-and-mounting/common-mistakes' }
//         ]
//       },

//       {
//         text: 'Environmental Conditions',
//         collapsed: true,
//         items: [
//           { text: 'Overview', link: '/industrial-practices/environmental-conditions/overview' },
//           { text: 'Factors', link: '/industrial-practices/environmental-conditions/factors' },
//           { text: 'IP Ratings', link: '/industrial-practices/environmental-conditions/ip-ratings' },
//           { text: 'General Selection', link: '/industrial-practices/environmental-conditions/general-selection' }
//         ]
//       }
//     ]
//   },

//   {
//     text: 'Energy Efficiency',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/energy-efficiency/overview' },
//       { text: 'Where Energy is Used', link: '/energy-efficiency/where-energy-is-used' },
//       { text: 'Energy Saving Opportunities', link: '/energy-efficiency/energy-saving-opportunities' },
//       { text: 'Renewable Integration', link: '/energy-efficiency/renewable-integration' }
//     ]
//   },

//   {
//     text: 'Tools',
//     collapsed: true,
//     items: [
//       { text: 'Formulas', link: '/tools/formulas' },
//       { text: 'Unit Conversions', link: '/tools/unit-conversions' },
//       { text: 'Typical Values', link: '/tools/typical-values' },
//       { text: 'Rules of Thumb', link: '/tools/rules-of-thumb' }
//     ]
//   },

//   {
//     text: 'Standards',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/standards/overview' },
//       { text: 'UL', link: '/standards/ul' },
//       { text: 'UL 508A', link: '/standards/ul-508a' },
//       { text: 'UL 489', link: '/standards/ul-489' },
//       { text: 'IEC', link: '/standards/iec' },
//       { text: 'ISO', link: '/standards/iso' },
//       { text: 'NEMA', link: '/standards/nema' },
//       { text: 'NOM', link: '/standards/nom' }
//     ]
//   },

//   {
//     text: 'Cybersecurity',
//     collapsed: true,
//     items: [
//       { text: 'Overview', link: '/cybersecurity/overview' },
//       { text: 'Threats', link: '/cybersecurity/threats' },
//       { text: 'Segmentation', link: '/cybersecurity/segmentation' },
//       { text: 'Firewalls', link: '/cybersecurity/firewalls' },
//       { text: 'Secure Remote Access', link: '/cybersecurity/secure-remote-access' },
//       { text: 'Patching', link: '/cybersecurity/patching' },
//       { text: 'User Access', link: '/cybersecurity/user-access' },
//       { text: 'IEC 62443', link: '/cybersecurity/iec-62443' }
//     ]
//   },

//   {
//     text: 'Digitalization',
//     collapsed: true,
//     items: [
//       { text: 'OT vs IT', link: '/digitalization/ot-vs-it' },
//       { text: 'Network Architecture', link: '/digitalization/network-architecture' },
//       { text: 'Purdue Model', link: '/digitalization/purdue-model' },
//       { text: 'Edge Computing', link: '/digitalization/edge-computing' },
//       { text: 'Data Collection', link: '/digitalization/data-collection' },
//       { text: 'Cloud', link: '/digitalization/cloud' },
//       { text: 'IIoT', link: '/digitalization/iiot' }
//     ]
//   }
]
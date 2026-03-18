import type { DefaultTheme } from 'vitepress'

export const sidebarEN: DefaultTheme.Sidebar = [
  {
    text: 'Home',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/home/overview' },
      { text: 'Project Goals', link: '/home/project-goals' },
      { text: 'Donations', link: '/home/donations' },
      { text: 'Become a Partner', link: '/home/become-a-partner' },
      { text: 'How to Contribute', link: '/home/how-to-contribute' }
    ]
  },
  
  {
    text: 'Getting Started',
    collapsed: false,
    items: [
      { text: 'What is the Handbook', link: '/getting-started/what-is-this-handbook' },
      { text: 'How to Use This Handbook', link: '/getting-started/how-to-use-this-handbook' },
      { text: 'Who This Is For', link: '/getting-started/who-this-is-for' },
      { text: 'How to Navigate the Handbook', link: '/getting-started/how-to-navigate-the-handbook' }
    ]
  },

  {
    text: 'Electrical Fundamentals',
    collapsed: true,
    items: [
      { text: 'Voltage', link: '/electrical-fundamentals/voltage' },
      { text: 'Current', link: '/electrical-fundamentals/current' },
      { text: 'Resistance', link: '/electrical-fundamentals/resistance' },
      { text: "Ohm's Law", link: '/electrical-fundamentals/ohms-law' },
      { text: 'Electric Power', link: '/electrical-fundamentals/electric-power' },
      { text: 'AC vs DC', link: '/electrical-fundamentals/ac-vs-dc' },
      { text: 'Single Phase Systems', link: '/electrical-fundamentals/single-phase-systems' },
      { text: 'Three Phase Systems', link: '/electrical-fundamentals/three-phase-systems' },
      { text: 'Power Factor', link: '/electrical-fundamentals/power-factor' },
      { text: 'Grounding', link: '/electrical-fundamentals/grounding' },
      { text: 'Electrical Noise', link: '/electrical-fundamentals/electrical-noise' }
    ]
  },

  {
    text: 'Power Quality',
    collapsed: true,
    items: [
      { text: 'What is Power Quality', link: '/power-quality/what-is-power-quality' },
      { text: 'Voltage Sags', link: '/power-quality/voltage-sags' },
      { text: 'Voltage Swells', link: '/power-quality/voltage-swells' },
      { text: 'Harmonics', link: '/power-quality/harmonics' },
      { text: 'Total Harmonic Distortion', link: '/power-quality/total-harmonic-distortion' },
      { text: 'Power Factor Correction', link: '/power-quality/power-factor-correction' },
      { text: 'Flicker', link: '/power-quality/flicker' },
      { text: 'Transients and Surges', link: '/power-quality/transients-and-surges' },
      { text: 'Power Quality Monitoring', link: '/power-quality/power-quality-monitoring' }
    ]
  },

  {
    text: 'Power Distribution',
    collapsed: true,
    items: [
      { text: 'Electrical Distribution Systems', link: '/power-distribution/electrical-distribution-systems' },
      { text: 'Low Voltage Distribution', link: '/power-distribution/low-voltage-distribution' },
      { text: 'Medium Voltage Distribution', link: '/power-distribution/medium-voltage-distribution' },
      { text: 'Main Distribution Panels', link: '/power-distribution/main-distribution-panels' },
      { text: 'Sub Distribution Panels', link: '/power-distribution/sub-distribution-panels' },
      { text: 'Switchgear', link: '/power-distribution/switchgear' },
      { text: 'Switchboards', link: '/power-distribution/switchboards' },
      { text: 'Busbars', link: '/power-distribution/busbars' },
      { text: 'Transformers', link: '/power-distribution/transformers' },
      { text: 'Grounding Systems', link: '/power-distribution/grounding-systems' }
    ]
  },

  {
    text: 'Electric Motors',
    collapsed: true,
    items: [
      { text: 'Motor Fundamentals', link: '/electric-motors/motor-fundamentals' },
      { text: 'AC Motors', link: '/electric-motors/ac-motors' },
      { text: 'DC Motors', link: '/electric-motors/dc-motors' },
      { text: 'Induction Motors', link: '/electric-motors/induction-motors' },
      { text: 'Synchronous Motors', link: '/electric-motors/synchronous-motors' },
      { text: 'Servo Motors', link: '/electric-motors/servo-motors' },
      { text: 'Stepper Motors', link: '/electric-motors/stepper-motors' },
      { text: 'Motor Nameplates', link: '/electric-motors/motor-nameplates' },
      { text: 'Motor Efficiency', link: '/electric-motors/motor-efficiency' },
      { text: 'Motor Cooling', link: '/electric-motors/motor-cooling' },
      { text: 'Motor Protection', link: '/electric-motors/motor-protection' }
    ]
  },

  {
  text: 'Motor Control',
  collapsed: true,
  items: [
    { text: 'Motor Control Centers', link: '/motor-control/motor-control-centers' },
    { text: 'MCC Architecture', link: '/motor-control/mcc-architecture' },
    { text: 'MCC Buckets', link: '/motor-control/mcc-buckets' },
    { text: 'Motor Starters', link: '/motor-control/motor-starters' },
    { text: 'Direct On Line Starters', link: '/motor-control/direct-on-line-starters' },
    { text: 'Star Delta Starters', link: '/motor-control/star-delta-starters' },
    { text: 'Soft Starters', link: '/motor-control/soft-starters' },
    { text: 'Variable Frequency Drives', link: '/motor-control/variable-frequency-drives' }
  ]
},

{
  text: 'Cables and Wiring',
  collapsed: true,
  items: [
    { text: 'Electrical Cables Overview', link: '/cables-and-wiring/electrical-cables-overview' },
    { text: 'Conductor Materials', link: '/cables-and-wiring/conductor-materials' },
    { text: 'Cable Types', link: '/cables-and-wiring/cable-types' },
    { text: 'Shielded Cables', link: '/cables-and-wiring/shielded-cables' },
    { text: 'Instrumentation Cables', link: '/cables-and-wiring/instrumentation-cables' },
    { text: 'Power Cables', link: '/cables-and-wiring/power-cables' },
    { text: 'Control Cables', link: '/cables-and-wiring/control-cables' },
    { text: 'Communication Cables', link: '/cables-and-wiring/communication-cables' },
    { text: 'Cable Sizing', link: '/cables-and-wiring/cable-sizing' },
    { text: 'Voltage Drop', link: '/cables-and-wiring/voltage-drop' },
    { text: 'Current Carrying Capacity', link: '/cables-and-wiring/current-carrying-capacity' },
    { text: 'Cable Routing', link: '/cables-and-wiring/cable-routing' },
    { text: 'Cable Trays', link: '/cables-and-wiring/cable-trays' },
    { text: 'Conduit Systems', link: '/cables-and-wiring/conduit-systems' }
  ]
},

{
  text: 'Industrial Control',
  collapsed: true,
  items: [
    { text: 'What is a PLC', link: '/industrial-control/plc/what-is-a-plc' },
    { text: 'PLC Architecture', link: '/industrial-control/plc/plc-architecture' },
    { text: 'PLC Scan Cycle', link: '/industrial-control/plc/plc-scan-cycle' },
    { text: 'PLC CPU', link: '/industrial-control/plc/plc-cpu' },
    { text: 'PLC Memory', link: '/industrial-control/plc/plc-memory' },
    { text: 'PLC I/O Modules', link: '/industrial-control/plc/plc-io-modules' },
    { text: 'Inputs and Outputs', link: '/industrial-control/plc/inputs-and-outputs' },
    { text: 'Digital vs Analog Signals', link: '/industrial-control/plc/digital-vs-analog-signals' },
    { text: 'Ladder Logic', link: '/industrial-control/plc/ladder-logic' },
    { text: 'Function Block Diagram', link: '/industrial-control/plc/function-block-diagram' },
    { text: 'Structured Text', link: '/industrial-control/plc/structured-text' },
    { text: 'Sequential Function Chart', link: '/industrial-control/plc/sequential-function-chart' },
    { text: 'How to Select a PLC', link: '/industrial-control/plc/how-to-select-a-plc' },
    { text: 'What is an HMI', link: '/industrial-control/hmi/what-is-an-hmi' },
    { text: 'HMI Architecture', link: '/industrial-control/hmi/hmi-architecture' },
    { text: 'HMI Design Principles', link: '/industrial-control/hmi/hmi-design-principles' },
    { text: 'Alarm Management', link: '/industrial-control/hmi/alarm-management' },
    { text: 'What is SCADA', link: '/industrial-control/scada/what-is-scada' },
    { text: 'SCADA Architecture', link: '/industrial-control/scada/scada-architecture' },
    { text: 'Data Historian', link: '/industrial-control/scada/data-historian' },
    { text: 'SCADA vs HMI', link: '/industrial-control/scada/scada-vs-hmi' }
  ]
},

{
  text: 'Industrial Networks',
  collapsed: true,
  items: [
    { text: 'Industrial Ethernet', link: '/industrial-networks/industrial-ethernet' },
    { text: 'Ethernet/IP', link: '/industrial-networks/ethernet-ip' },
    { text: 'Modbus RTU', link: '/industrial-networks/modbus-rtu' },
    { text: 'Modbus TCP', link: '/industrial-networks/modbus-tcp' },
    { text: 'Profinet', link: '/industrial-networks/profinet' },
    { text: 'Profibus', link: '/industrial-networks/profibus' },
    { text: 'CAN Bus', link: '/industrial-networks/can-bus' },
    { text: 'DeviceNet', link: '/industrial-networks/devicenet' },
    { text: 'OPC UA', link: '/industrial-networks/opc-ua' },
    { text: 'Industrial Gateways', link: '/industrial-networks/industrial-gateways' }
  ]
},

{
  text: 'Sensors',
  collapsed: true,
  items: [
    { text: 'What is a Sensor', link: '/sensors/what-is-a-sensor' },
    { text: 'Inductive Sensors', link: '/sensors/inductive-sensors' },
    { text: 'Capacitive Sensors', link: '/sensors/capacitive-sensors' },
    { text: 'Photoelectric Sensors', link: '/sensors/photoelectric-sensors' },
    { text: 'Ultrasonic Sensors', link: '/sensors/ultrasonic-sensors' },
    { text: 'Temperature Sensors', link: '/sensors/temperature-sensors' },
    { text: 'Pressure Sensors', link: '/sensors/pressure-sensors' },
    { text: 'Level Sensors', link: '/sensors/level-sensors' },
    { text: 'Encoders', link: '/sensors/encoders' },
    { text: 'Limit Switches', link: '/sensors/limit-switches' }
  ]
},

{
  text: 'Actuators',
  collapsed: true,
  items: [
    { text: 'What is an Actuator', link: '/actuators/what-is-an-actuator' },
    { text: 'Electric Actuators', link: '/actuators/electric-actuators' },
    { text: 'Pneumatic Cylinders', link: '/actuators/pneumatic-cylinders' },
    { text: 'Hydraulic Cylinders', link: '/actuators/hydraulic-cylinders' },
    { text: 'Solenoids', link: '/actuators/solenoids' },
    { text: 'Control Valves', link: '/actuators/control-valves' }
  ]
},

{
  text: 'Drives and Motion',
  collapsed: true,
  items: [
    { text: 'Variable Frequency Drives', link: '/drives-and-motion/variable-frequency-drives' },
    { text: 'Servo Drives', link: '/drives-and-motion/servo-drives' },
    { text: 'Motion Controllers', link: '/drives-and-motion/motion-controllers' },
    { text: 'Speed Control', link: '/drives-and-motion/speed-control' },
    { text: 'Torque Control', link: '/drives-and-motion/torque-control' }
  ]
},

{
  text: 'Electrical Panels',
  collapsed: true,
  items: [
    { text: 'Control Panels', link: '/electrical-panels/control-panels' },
    { text: 'Panel Layout', link: '/electrical-panels/panel-layout' },
    { text: 'Panel Wiring', link: '/electrical-panels/panel-wiring' },
    { text: 'Cable Management', link: '/electrical-panels/cable-management' },
    { text: 'Breakers', link: '/electrical-panels/breakers' },
    { text: 'Contactors', link: '/electrical-panels/contactors' },
    { text: 'Overload Relays', link: '/electrical-panels/overload-relays' },
    { text: 'Power Supplies', link: '/electrical-panels/power-supplies' },
    { text: 'Terminal Blocks', link: '/electrical-panels/terminal-blocks' }
  ]
},

{
  text: 'Industrial Safety',
  collapsed: true,
  items: [
    { text: 'Machine Safety Basics', link: '/industrial-safety/machine-safety-basics' },
    { text: 'Risk Assessment', link: '/industrial-safety/risk-assessment' },
    { text: 'Safety Categories', link: '/industrial-safety/safety-categories' },
    { text: 'Emergency Stop Circuits', link: '/industrial-safety/emergency-stop-circuits' },
    { text: 'Safety Relays', link: '/industrial-safety/safety-relays' },
    { text: 'Safety PLC', link: '/industrial-safety/safety-plc' },
    { text: 'Lockout Tagout', link: '/industrial-safety/lockout-tagout' }
  ]
},

{
  text: 'OT and IT',
  collapsed: true,
  items: [
    { text: 'OT vs IT', link: '/ot-and-it/ot-vs-it' },
    { text: 'Industrial Network Architecture', link: '/ot-and-it/industrial-network-architecture' },
    { text: 'Purdue Model', link: '/ot-and-it/purdue-model' },
    { text: 'Edge Computing', link: '/ot-and-it/edge-computing' },
    { text: 'Industrial Data Collection', link: '/ot-and-it/industrial-data-collection' },
    { text: 'Cloud Integration', link: '/ot-and-it/cloud-integration' },
    { text: 'Industrial IoT', link: '/ot-and-it/industrial-iot' }
  ]
},

{
  text: 'Industrial Cybersecurity',
  collapsed: true,
  items: [
    { text: 'Why Industrial Cybersecurity Matters', link: '/industrial-cybersecurity/why-industrial-cybersecurity-matters' },
    { text: 'Common Threats in OT', link: '/industrial-cybersecurity/common-threats-in-ot' },
    { text: 'Network Segmentation', link: '/industrial-cybersecurity/network-segmentation' },
    { text: 'Firewalls in Industrial Networks', link: '/industrial-cybersecurity/firewalls-in-industrial-networks' },
    { text: 'Secure Remote Access', link: '/industrial-cybersecurity/secure-remote-access' },
    { text: 'Patch Management', link: '/industrial-cybersecurity/patch-management' },
    { text: 'User Access Control', link: '/industrial-cybersecurity/user-access-control' },
    { text: 'IEC 62443', link: '/industrial-cybersecurity/iec-62443' }
  ]
},

{
  text: 'Standards',
  collapsed: true,
  items: [
    { text: 'UL', link: '/standards/ul' },
    { text: 'IEC', link: '/standards/iec' },
    { text: 'ISO', link: '/standards/iso' },
    { text: 'NEMA', link: '/standards/nema' },
    { text: 'NOM', link: '/standards/nom' }
  ]
}

]
# Coordination of Protections

## Overview

Coordination of protections is the process of arranging and setting protective devices so that only the device closest to a fault operates.

It ensures that faults are isolated locally without unnecessarily interrupting power to the rest of the system.

Proper coordination is essential for maintaining system reliability and minimizing downtime.

## Purpose

The purpose of coordination is to:

- Isolate faults with minimal impact on the overall system  
- Maintain continuity of service for unaffected loads  
- Reduce equipment stress by limiting fault duration  
- Ensure predictable and controlled operation of protective devices  

Without coordination, a single fault can cause large portions of a facility to lose power.

## How It Works

Protection devices are selected and adjusted using time current characteristics.

Each device is configured to operate at a specific current level and time delay.

The coordination principle is based on hierarchy:

- Downstream devices operate first for local faults  
- Upstream devices act as backup if downstream protection fails  

This is achieved by:

- Setting lower trip thresholds for downstream devices  
- Introducing intentional time delays in upstream devices  

Graphically, coordination is often verified using time current curves to ensure separation between devices.

## Applications

Coordination is applied in:

- Low voltage distribution panels and switchboards  
- Medium voltage switchgear and feeder systems  
- Motor control circuits  
- Transformer protection schemes  
- Industrial facilities with multiple distribution levels  

It is required wherever multiple protective devices are connected in series.

## Key Considerations

- **Selectivity**  
  Devices must operate in the correct sequence without overlap  

- **Time current curves**  
  Proper spacing between curves ensures coordination under different fault conditions  

- **Device types**  
  Mixing fuses and breakers requires careful matching of characteristics  

- **System configuration**  
  Radial and loop systems require different coordination approaches  

- **Backup protection**  
  Upstream devices must still operate if downstream devices fail  

- **Changes in the system**  
  Adding loads or equipment may require re coordination  

## Practical Notes

- Perfect coordination may not always be possible, especially at high fault levels  
- Over coordination can result in slower fault clearing times  
- Under coordination leads to unnecessary outages  
- Documentation of settings is critical for maintenance and troubleshooting  
- Coordination studies should be updated when the system changes  
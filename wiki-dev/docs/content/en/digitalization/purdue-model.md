# Purdue Model

## Overview

The Purdue Model is a reference architecture used to structure industrial systems into hierarchical levels.

It defines how systems are organized from physical processes up to enterprise systems. This structure helps manage communication, security, and system responsibilities.

## Purpose

The purpose of the Purdue Model is to:

- Provide a clear structure for industrial system design  
- Separate functions based on their role and criticality  
- Control data flow between different system levels  
- Support secure integration between OT and IT systems  

It helps engineers design systems that are easier to manage and protect.

## How It Works

The Purdue Model divides industrial systems into levels, each with a specific function.

### Level 0 – Physical Process

- Sensors and actuators  
- Direct interaction with the physical process  

### Level 1 – Basic Control

- PLCs and local controllers  
- Real time control of equipment  

### Level 2 – Supervisory Control

- HMI and SCADA systems  
- Monitoring and operator interaction  

### Level 3 – Operations Management

- Production management systems  
- Data aggregation and coordination of operations  

### Level 4 – Enterprise Systems

- Business systems such as ERP  
- Planning, analytics, and business processes  

Communication typically flows between adjacent levels. Direct communication across multiple levels is limited to reduce complexity and risk.

## Applications

The Purdue Model is used in:

- Design of industrial network architectures  
- Integration between control systems and enterprise systems  
- Cybersecurity planning and segmentation  
- Standardization of system structure across facilities  

It is widely applied in manufacturing, energy, and infrastructure systems.

## Key Considerations

- Not all systems strictly follow every level  
- Modern architectures may combine or bypass levels  
- Direct connections between distant levels increase risk  
- The model is a guideline, not a strict requirement  
- Integration with modern technologies must be carefully managed  

The model should be adapted to the specific needs of each system.

## Practical Notes

- Use the model as a starting point for structuring systems  
- Clearly define which devices belong to each level  
- Control communication between levels using defined rules  
- Avoid unnecessary connections between control and enterprise layers  
- Keep documentation aligned with the defined architecture  

The Purdue Model provides a clear framework for organizing industrial systems and managing their interactions.
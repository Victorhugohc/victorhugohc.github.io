# Modbus RTU

## Overview

Modbus RTU is an industrial communication protocol used for data exchange between devices over serial communication.

It is simple, widely supported, and commonly used in industrial systems to connect controllers, instruments, and field devices.

Modbus RTU operates over interfaces such as RS485 and RS232.

## Purpose

The purpose of Modbus RTU is to provide a simple and reliable method for communication between devices.

It is used to:

- Connect PLCs with field devices  
- Exchange measurement and control data  
- Integrate equipment from different manufacturers  
- Enable communication in simple and low cost systems  

It is especially useful in systems where Ethernet is not required.

## How It Works

Modbus RTU follows a master slave communication model.

### Master Slave Structure

- One master device controls communication  
- Multiple slave devices respond to requests  
- Slaves do not communicate unless requested  

The master initiates all data exchanges.

### Data Transmission

Communication occurs over serial lines.

- Data is transmitted in binary format  
- Messages include device address, function code, data, and error checking  

Each slave has a unique address.

### Function Codes

Function codes define the operation.

Examples include:

- Reading registers  
- Writing values  
- Reading input status  

This allows standardized interaction with devices.

### Communication Timing

Timing is important in Modbus RTU.

- Messages are separated by silent intervals  
- Devices must respond within defined time limits  

Proper timing ensures reliable communication.

## Applications

Modbus RTU is used in many industrial systems.

Typical applications include:

- Connecting sensors and instruments to PLCs  
- Energy meters and monitoring devices  
- Simple automation systems  
- Legacy systems and retrofits  

It is common in distributed and low bandwidth systems.

## Key Considerations

Communication speed is limited compared to Ethernet based protocols.

Cable length and quality affect performance.

Network size is limited by serial communication constraints.

Proper termination and wiring are critical for RS485 networks.

Address management must be organized to avoid conflicts.

## Practical Notes

A common mistake is incorrect wiring of RS485 networks. Follow proper polarity and termination rules.

Keep cable lengths within recommended limits.

Use shielded cables in noisy environments.

Verify communication parameters such as baud rate and parity.

Modbus RTU is simple but requires careful setup to ensure reliability.
# Modbus TCP

## Overview

Modbus TCP is an industrial communication protocol that operates over Ethernet networks.

It is an extension of Modbus that uses TCP/IP for data transmission, allowing communication between devices such as PLCs, HMIs, and instruments over standard network infrastructure.

It combines the simplicity of Modbus with the advantages of Ethernet.

## Purpose

The purpose of Modbus TCP is to provide a simple and widely compatible method for communication over Ethernet.

It is used to:

- Connect industrial devices over network infrastructure  
- Replace serial Modbus in modern systems  
- Enable faster data exchange  
- Integrate devices from different manufacturers  

It is commonly used in systems where simplicity and interoperability are important.

## How It Works

Modbus TCP follows a client server communication model over Ethernet.

### Client Server Structure

- A client initiates requests  
- A server responds with data  

Devices such as PLCs, HMIs, or computers can act as clients or servers.

### Data Transmission

Communication uses TCP/IP.

- Data is encapsulated in TCP packets  
- Each message includes addressing and function codes  

Unlike Modbus RTU, there is no need for device addressing in the same way, as IP addresses identify devices.

### Function Codes

Modbus TCP uses the same function codes as Modbus RTU.

Examples include:

- Reading holding registers  
- Writing values  
- Reading inputs  

This maintains compatibility with existing Modbus systems.

### Network Communication

Devices communicate through Ethernet networks.

- Switch based topology  
- IP addressing for device identification  

Multiple devices can communicate simultaneously.

## Applications

Modbus TCP is widely used in modern industrial systems.

Typical applications include:

- PLC to PLC communication  
- Integration of instruments and meters  
- HMI and SCADA connectivity  
- Energy monitoring systems  

It is common in systems that require simple Ethernet based communication.

## Key Considerations

Network design affects communication performance.

Latency and network load can impact response time.

IP addressing and network configuration must be managed carefully.

Security must be considered, as Modbus TCP has no built in encryption.

Compatibility with devices must be verified.

## Practical Notes

A common mistake is assuming Modbus TCP is deterministic. Network traffic can introduce delays.

Avoid mixing critical control traffic with general network traffic without proper design.

Use managed switches to improve network performance.

Document IP addresses and device roles clearly.

Test communication under real network conditions to verify reliability.
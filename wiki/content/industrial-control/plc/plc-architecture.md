# PLC Architecture

PLC architecture refers to the **internal structure and main components that make up a Programmable Logic Controller**.

Understanding PLC architecture helps explain **how the controller receives signals, processes logic, and controls industrial equipment**.

Although designs vary between manufacturers, most PLCs share the same fundamental building blocks.

---

# Main Components of a PLC

A typical PLC system consists of the following core components:

- Power Supply  
- CPU (Central Processing Unit)  
- Memory  
- Input Modules  
- Output Modules  
- Communication Interfaces  
- Backplane or Bus System  

Each component plays a specific role in the operation of the controller.

---

# Power Supply

The **power supply** provides the electrical power required for the PLC to operate.

It converts the incoming electrical source (commonly **120/240 VAC or 24 VDC**) into the regulated voltages required by the internal electronics of the controller.

The power supply typically powers:

- The CPU
- I/O modules
- Internal communication circuits

Reliable power is essential for stable PLC operation.

---

# CPU (Central Processing Unit)

The **CPU** is the main processor of the PLC.

It performs several critical functions:

- Executes the control program
- Processes input signals
- Determines output actions
- Manages communication with other devices
- Performs diagnostics and system monitoring

The CPU operates continuously, executing the control logic in a repeating sequence known as the **PLC scan cycle**.

---

# Memory

PLC memory stores the information required for the controller to operate.

Typical types of memory include:

**Program Memory**

Stores the user control program written by the programmer.

**Data Memory**

Stores variables, timers, counters, and system values used during operation.

**System Memory**

Contains the operating system of the PLC and internal diagnostic functions.

Modern PLCs may use **flash memory, RAM, or non-volatile memory** to store this information.

---

# Input Modules

Input modules allow the PLC to **receive signals from field devices**.

Typical input devices include:

- Sensors
- Push buttons
- Limit switches
- Proximity switches
- Temperature transmitters
- Pressure sensors

Input modules convert these field signals into data that the PLC CPU can process.

Inputs may be:

- **Digital inputs** (ON/OFF signals)
- **Analog inputs** (continuous signals such as 4–20 mA or 0–10 V)

---

# Output Modules

Output modules allow the PLC to **control external devices**.

Typical output devices include:

- Motors
- Relays
- Solenoids
- Valves
- Indicator lights
- Alarms

Outputs may be:

**Digital outputs**

Used for simple ON/OFF control.

**Analog outputs**

Used to control devices requiring variable signals, such as speed control or valve positioning.

---

# Communication Interfaces

Most modern PLCs include **communication ports** that allow them to exchange data with other systems.

These may include:

- HMI systems
- SCADA platforms
- Other PLCs
- Industrial sensors and drives
- Industrial networks

Common communication technologies include:

- Ethernet/IP
- Modbus
- Profinet
- OPC UA

Communication interfaces are essential for **integrated automation systems**.

---

# Backplane or Bus System

The **backplane** (or internal bus) connects the CPU with the I/O modules and other system components.

It allows data and power to flow between modules within the PLC rack.

The backplane ensures that:

- Inputs can be read by the CPU
- Outputs can be updated
- Modules can communicate with the controller

In modular PLC systems, the backplane is typically located inside the **PLC rack or chassis**.

---

# Compact vs Modular PLC Architecture

PLC systems generally follow one of two architectural designs.

## Compact PLC

In a compact PLC:

- CPU
- Power supply
- I/O

are integrated into a **single device**.

These controllers are typically used in **smaller machines or simpler automation systems**.

---

## Modular PLC

In modular PLCs, components are **separate modules installed in a rack**.

This architecture allows:

- Flexible system expansion
- Custom I/O configurations
- Higher performance control systems

Modular PLCs are commonly used in **large industrial automation systems**.

---

# Summary

PLC architecture describes the **structure and components that allow a PLC to control industrial processes**.

By combining a CPU, memory, power supply, input/output modules, and communication interfaces, a PLC can monitor field devices, execute control logic, and control industrial equipment in real time.
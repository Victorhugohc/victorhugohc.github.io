# PLC Scan Cycle

## Overview

The PLC scan cycle is the continuous sequence of operations that a PLC performs to monitor inputs, execute logic, and update outputs.

This cycle runs repeatedly and defines how fast the PLC responds to changes in the system.

## Purpose

The purpose of the scan cycle is to provide deterministic and consistent control.

It ensures that:

- Inputs are read in a defined order  
- Logic is executed consistently  
- Outputs are updated predictably  

This repeatable process allows reliable automation.

## How It Works

A typical scan cycle consists of three main steps.

### 1. Input Scan

The PLC reads the status of all input signals.

- Digital inputs are read as ON or OFF  
- Analog inputs are read as values  

These values are stored in memory and used during program execution.

### 2. Program Execution

The PLC executes the control logic using the stored input values.

- Logic operations are evaluated  
- Timers and counters are updated  
- Control functions are processed  

The program is executed from top to bottom in a defined order.

### 3. Output Update

The PLC updates the outputs based on the program results.

- Output signals are written to output modules  
- Actuators respond to the new commands  

Outputs remain in this state until the next scan cycle.

### Continuous Loop

After completing these steps, the PLC immediately starts the next scan.

This loop runs continuously as long as the PLC is powered and in run mode.

## Applications

The scan cycle is fundamental to all PLC controlled systems.

It affects:

- Machine control timing  
- Process response  
- Synchronization of operations  

It is critical in systems where timing and sequence matter.

## Key Considerations

Scan time is the total duration of one cycle.

- Faster scan times improve responsiveness  
- Slower scan times may be sufficient for slow processes  

Program size and complexity directly affect scan time.

Communication tasks and background processes can increase cycle time.

Input changes are only recognized once per scan. Fast signals may be missed if the scan time is too long.

## Practical Notes

A common mistake is ignoring scan time in high speed applications. This can lead to missed events or delayed responses.

For fast signals, use hardware interrupts or high speed inputs instead of relying only on the standard scan.

Keep logic efficient. Unnecessary complexity increases scan time.

Do not assume outputs change instantly. They are only updated once per scan.
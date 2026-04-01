# Open vs Closed Loop Control

## Overview

Control systems can be classified based on how they use feedback.

An open loop system operates without measuring the result. A closed loop system continuously measures the output and adjusts its behavior to reach a desired value.

This distinction defines how accurate and adaptive a control system can be.

## Purpose

The purpose of choosing between open and closed loop control is to balance simplicity, cost, and performance.

Open loop control is used when the relationship between input and output is predictable.

Closed loop control is used when accuracy, stability, or disturbance rejection is required.

## How It Works

### Open Loop Control

In an open loop system, the control action is independent of the actual output.

The system sends a command without verifying the result.

Basic concept:

- Input command is applied  
- System executes action  
- No feedback is used  

Example behavior:

- A motor runs for a fixed time  
- A valve opens to a fixed position  
- A heater runs for a preset duration  

Any disturbance or variation is not corrected.

### Closed Loop Control

In a closed loop system, the output is measured and compared to a desired value called the setpoint.

The controller adjusts the input based on the difference between the measured value and the setpoint.

Basic concept:

- Measure the process variable  
- Compare with setpoint  
- Calculate error  
- Adjust control output  

This continuous correction allows the system to maintain the desired condition even with disturbances.

## Applications

### Open Loop

- Simple timing based operations  
- Conveyor systems with fixed speeds  
- Basic sequencing where precision is not critical  

### Closed Loop

- Temperature control systems  
- Pressure and flow regulation  
- Motor speed control  
- Position control in automation systems  

Closed loop control is standard in most industrial processes where conditions can vary.

## Key Considerations

Open loop systems are simpler and less expensive but depend heavily on stable conditions.

Closed loop systems require sensors, tuning, and more complex logic.

Accuracy requirements drive the choice. High precision systems require feedback.

Response to disturbances is only possible in closed loop systems.

System stability must be considered in closed loop design. Poor tuning can cause oscillations or instability.

## Practical Notes

A common mistake is using open loop control in processes with high variability. This leads to inconsistent results.

Closed loop control improves performance but introduces complexity. Sensor reliability and signal quality become critical.

Not all systems need full closed loop control. In some cases, a hybrid approach is used, where open loop actions are combined with feedback correction.

When implementing closed loop control, proper tuning is essential to avoid slow response or excessive oscillation.
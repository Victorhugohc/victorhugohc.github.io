# PID Basics

## Overview

PID control is a widely used method for closed loop control. It adjusts the control output based on the difference between a desired value and the measured value.

PID stands for Proportional, Integral, and Derivative. These three terms define how the controller reacts to error.

## Purpose

The purpose of PID control is to maintain a process variable at a desired setpoint with stability and accuracy.

It is used to:

- Reduce steady state error  
- Improve response speed  
- Minimize oscillations  
- Compensate for disturbances  

PID control provides a balance between responsiveness and stability.

## How It Works

A PID controller calculates an output based on the error between the setpoint and the measured value.

### Proportional (P)

The proportional term reacts to the current error.

- Larger error produces a larger correction  
- Small error produces a small correction  

It provides immediate response but cannot eliminate steady state error on its own.

### Integral (I)

The integral term reacts to the accumulation of past error.

- It increases output over time if error persists  
- Eliminates steady state offset  

Too much integral action can cause slow response or oscillations.

### Derivative (D)

The derivative term reacts to the rate of change of the error.

- Predicts future behavior  
- Reduces overshoot  
- Improves stability  

It is sensitive to noise and is often used with care.

### Combined Action

The controller output is the combination of the three terms.

- P handles present error  
- I corrects past accumulated error  
- D anticipates future error  

The balance between these terms determines system behavior.

## Applications

PID control is used in most industrial control loops, including:

- Temperature control  
- Flow and pressure regulation  
- Motor speed control  
- Level control in tanks  
- Position control systems  

It is the standard approach for continuous process control.

## Key Considerations

Tuning is critical. The gains for P, I, and D must be adjusted for each process.

Too much proportional gain can cause oscillations.

Too much integral action can lead to slow recovery and instability.

Derivative action improves stability but can amplify measurement noise.

Process dynamics affect tuning. Slow systems and fast systems require different settings.

Sensor accuracy and response time directly impact performance.

## Practical Notes

A common mistake is using PID without understanding the process behavior. This leads to poor tuning and unstable control.

Not all systems require all three terms. Many applications use only PI control.

Start with simple tuning and increase complexity only if needed.

Always verify performance under real operating conditions, not only during initial setup.

Noise filtering may be required when using derivative action.
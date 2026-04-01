# 4-20 mA Signals

## Overview

4-20 mA is a standard analog signal used in industrial instrumentation to transmit process variables.

It represents a measured value as an electrical current, where 4 mA corresponds to the minimum value and 20 mA to the maximum value.

This standard is widely used due to its reliability and noise resistance.

## Purpose

The purpose of 4-20 mA signals is to provide a robust and consistent way to transmit analog measurements over distance.

It is used to:

- Send process variables from field instruments to control systems  
- Ensure signal integrity in industrial environments  
- Standardize communication between devices  

It is a key element in analog instrumentation systems.

## How It Works

A transmitter converts a physical measurement into a current signal within the 4-20 mA range.

### Signal Range

- 4 mA represents the minimum measurement value  
- 20 mA represents the maximum measurement value  

Values between 4 and 20 mA correspond linearly to the measured variable.

### Live Zero

The use of 4 mA instead of 0 mA allows detection of faults.

- 0 mA indicates a broken wire or loss of signal  
- Values below 4 mA may indicate a fault condition  

This improves system reliability.

### Current Loop

The signal is transmitted through a current loop.

- Current remains constant regardless of cable resistance  
- Voltage varies as needed to maintain the current  

This makes the signal less sensitive to noise and voltage drops.

### Conversion

At the receiving end, the current is converted into a usable value.

- PLC analog input modules measure the current  
- The signal is scaled to engineering units  

This allows integration into control logic.

## Applications

4-20 mA signals are used in most industrial processes.

Typical applications include:

- Temperature transmitters  
- Pressure transmitters  
- Flow measurement devices  
- Level sensors  

They are standard in process control systems.

## Key Considerations

Proper scaling is required to convert current into meaningful values.

Loop power supply must be sufficient for all devices in the loop.

Cable selection and routing affect signal quality.

Intrinsic safety may be required in hazardous environments.

Input module compatibility must be verified.

## Practical Notes

A common mistake is incorrect scaling of the signal in the PLC. Always verify the measurement range.

Check loop wiring carefully. Incorrect connections can prevent signal transmission.

Use proper grounding and shielding to reduce interference.

Verify loop current during commissioning to confirm correct operation.

Label signal ranges clearly to avoid confusion during maintenance.
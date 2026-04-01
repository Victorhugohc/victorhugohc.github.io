# Sequential Function Chart (SFC)

## Overview

Sequential Function Chart is a graphical programming language used in PLCs to represent sequential processes.

It is based on steps and transitions, showing how a system moves from one state to another in a defined order.

SFC is well suited for processes that follow clear sequences.

## Purpose

The purpose of SFC is to organize control logic into structured sequences.

It is used to:

- Define step by step operations  
- Simplify complex sequences  
- Improve clarity of process flow  
- Separate sequence logic from detailed actions  

It provides a clear view of how a system progresses over time.

## How It Works

SFC represents a process as a series of steps connected by transitions.

### Steps

A step represents a state in the process.

- Each step can activate actions  
- Only active steps execute their associated logic  

Steps define what the system is doing at a given moment.

### Transitions

Transitions define the conditions required to move from one step to the next.

- Evaluated continuously  
- When the condition is true, the transition occurs  
- The next step becomes active  

### Actions

Each step can trigger actions.

- Control outputs  
- Execute logic  
- Call functions or function blocks  

Actions run while the step is active.

### Sequence Flow

The process follows a defined path:

- Initial step is activated  
- Transition conditions are evaluated  
- System moves through steps based on conditions  

Branches and parallel paths can be used for more complex sequences.

## Applications

SFC is commonly used in:

- Batch processes  
- Machine sequences  
- Start up and shutdown procedures  
- Packaging and assembly systems  
- Processes with defined states and transitions  

It is effective when operations follow a clear order.

## Key Considerations

Sequence design must reflect real system operation.

Transitions must be clearly defined to avoid unexpected behavior.

Parallel sequences increase complexity and require careful coordination.

Step activation and deactivation must be well understood.

Integration with other programming languages is often required for detailed logic.

## Practical Notes

A common mistake is overcomplicating sequences with too many steps. Keep the flow clear and logical.

Ensure all transitions have well defined conditions. Missing conditions can stop the process.

Use SFC for sequence control, not for detailed calculations.

Test all possible paths, including abnormal conditions, to verify correct behavior.

Document step purpose clearly to simplify troubleshooting.
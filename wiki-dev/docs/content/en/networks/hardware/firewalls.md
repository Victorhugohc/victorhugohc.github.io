# Firewalls

## Overview

A firewall is a network security device that monitors and controls traffic between different network segments.

It acts as a barrier that allows or blocks communication based on defined rules, protecting industrial systems from unauthorized access and threats.

Firewalls are a critical component in industrial network security.

## Purpose

The purpose of a firewall is to protect networks and devices from unwanted or harmful communication.

It is used to:

- Control traffic between networks  
- Prevent unauthorized access  
- Protect control systems from external threats  
- Enforce security policies  

Firewalls help maintain system integrity and availability.

## How It Works

A firewall inspects network traffic and applies rules to determine whether to allow or block it.

### Traffic Filtering

The firewall evaluates packets based on criteria such as:

- Source and destination IP addresses  
- Ports and protocols  
- Direction of communication  

Only permitted traffic is allowed to pass.

### Rule Configuration

Rules define what traffic is allowed or denied.

- Allow rules permit specific communication  
- Deny rules block unwanted traffic  

Rules are applied in a defined order.

### Network Segmentation

Firewalls are used to separate networks.

- Industrial network from corporate network  
- Control systems from external access  

This limits the spread of potential threats.

### Stateful Inspection

Advanced firewalls track connection states.

- Allow return traffic for established connections  
- Block unexpected or invalid traffic  

This improves security and efficiency.

### Logging and Monitoring

Firewalls can record network activity.

- Log allowed and blocked traffic  
- Detect unusual patterns  

This supports troubleshooting and security analysis.

## Applications

Firewalls are used in all industrial networks connected to other systems.

Typical applications include:

- Protecting PLC networks  
- Securing SCADA systems  
- Controlling remote access  
- Separating network zones  

They are essential in systems with external connectivity.

## Key Considerations

Security rules must be carefully defined to avoid blocking required communication.

Network performance can be affected by inspection and filtering.

Regular updates and maintenance are required to address new threats.

Integration with overall cybersecurity strategy is important.

Proper placement in the network architecture is critical.

## Practical Notes

A common mistake is allowing too much traffic for convenience. Apply the principle of minimum required access.

Document all firewall rules clearly.

Test rules to ensure necessary communication is not blocked.

Monitor firewall logs to detect issues or suspicious activity.

Use firewalls as part of a layered security approach, not as the only protection.
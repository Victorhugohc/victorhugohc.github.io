# Firewalls

## Overview

Firewalls are network security devices that control traffic between different parts of a network.

They act as a barrier that allows or blocks communication based on defined rules. In industrial systems, firewalls are used to protect control networks and restrict access to critical devices.

## Purpose

The purpose of firewalls is to:

- Control which systems can communicate  
- Block unauthorized or unnecessary traffic  
- Protect critical assets from external networks  
- Enforce network segmentation policies  

Firewalls are a key component in maintaining controlled and predictable network behavior.

## How It Works

A firewall inspects network traffic and compares it against a set of rules.

These rules define:

- Source and destination addresses  
- Communication ports and protocols  
- Allowed or denied actions  

When traffic matches a rule, the firewall either permits or blocks it.

Common firewall capabilities include:

- Packet filtering based on basic parameters  
- Stateful inspection that tracks active connections  
- Deep inspection for more detailed traffic analysis  

In industrial systems, firewalls are typically configured to allow only required communication and block everything else.

## Applications

Firewalls are used in:

- Separation between enterprise and industrial networks  
- Protection of PLC and control system networks  
- Secure remote access architectures  
- Segmented zones within industrial facilities  
- Connections to external systems or cloud services  

They are essential wherever controlled communication is required.

## Key Considerations

- Define rules based on required communication, not convenience  
- Avoid overly permissive configurations  
- Ensure compatibility with industrial protocols  
- Consider latency and real time communication requirements  
- Maintain clear and documented rule sets  

Incorrect configuration can either block critical communication or expose the system to risk.

## Practical Notes

- Place firewalls at key boundaries between network segments  
- Use a default deny approach and explicitly allow required traffic  
- Regularly review and clean up unused rules  
- Monitor firewall logs to detect abnormal activity  
- Avoid using firewalls as the only security measure  

Firewalls are effective when combined with proper network design and access control.
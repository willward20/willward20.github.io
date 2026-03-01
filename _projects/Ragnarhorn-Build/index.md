---
layout: post
title: Project Ragnarhorn
description:  Forged from a 1/6-scale RC truck, Ragnarhorn was built to conquer off-road terrain at high-speeds.
skills: 
- Python
- ROS 2 (Jazzy)
- Jetson Thor
- Systems Integration
- Electrical Engineering
main-image: /action.png
---

---
## Summary

Ragnarhorn is a high-speed off-road research platform designed to operate where terrain variability pushes robotics systems to their limits.
Powered by a NVIDIA Jetson Thor, it uses LiDAR-inertial odometry for state estimation and an onboard depth camera for real-time terrain mapping. 
We are currently developing a terrain-aware control system that integrates perception directly into motion planning, with the goal of achieving fully autonomous navigation across aggressive, unstructured environments.

{% include image-gallery.html images="front.jpeg" width="600" %}
{% include image-gallery.html images="side.jpeg" width="600" %}


## System Components
Ragnarhorn is built from a Traxxas X-Maxx chassis, upgraded with a Castle Mamba X ESC and sensored motor for improved telemetry and controllability. A RadioMaster MT12 transmitter communicates through an ExpressLRS ER6 receiver and Castle Serial Link, enabling reliable teleoperation. The Jetson Thor can also issue drive commands directly to the ER6 via USB-to-UART, allowing seamless switching between manual and autonomous control.

The sensing suite includes a MicroStrain 3DM-GX5 IMU, an Intel RealSense RGB-D camera, and a Livox LiDAR with integrated IMU. Unified within a ROS 2 workspace, these sensors provide localization, mapping, and real-time terrain height estimation.


## Technical Contributions
* Lead software developer and systems engineer.
* Integrated motor, ESC, serial interface, and radio to support both teleoperation and onboard control from the Jetson Thor.
* Installed and configured IMU, camera, and LiDAR drivers for reliable sensor streaming.
* Designed a modular ROS 2 workspace to manage bring-up and real-time operation of all subsystems.


## Additional Details
* Code release coming soon!

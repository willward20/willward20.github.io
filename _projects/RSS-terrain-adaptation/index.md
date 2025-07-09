---
layout: post
title: Off-Road Terrain Adaptation for Mobile Robot Navigation
description:  How can we estimate a robot's dynamics on unknown terrains at runtime? We developed a learned model that helps mobile robots quickly adapt to new terrain conditions, improving navigation accuracy and collision avoidance. 
skills: 
- Python
- C++
- ROS
- PyTorch
- Unity
- Neural Networks
- Model Predictive Control
main-image: /robot-sim.png
---

---
## Motivation
Mobile robots driving in off-road environments face rapidly changing terrain conditions that affect their motion and control. Traditional models often fail when encountering new or unseen surfaces, leading to poor performance or collisions. Therefore, real-time adaptation is critical for safe and reliable navigation. 

## Overall Framework
We enable online terrain adaptation using **function encoders**. Function encoders use a small set of neural networks to quickly represent new dynamics models from limited data, allowing a robot to adapt to new terrain without retraining. We break down the process of training and deploying function encoders for terrain adaptation in two phases:

1. **Offline:** Train the function encoder to capture the robot's dynamics over a set of known terrains.
2. **Online:** Align the function encoder to a new terrain using a simple least-squares algorithm.

{% include image-gallery.html images="figure1.png" height="400" %}

## Key Result: Adaptation Enables Safer Model Predictive Control
We test our approach on a wheled robot in a Unity-based simulation. After training the function encoder on six terrains, we deploy the robot on an **unknown, slippery ice terrain**. Then, the robot uses model predictive control (MPC) to navigate through a forest environment while avoiding trees. Despite the challenging terrain, the robot reaches every waypoint with no collisions. 

{% include image-gallery.html images="function-encoder-navigation.png" height="400" %}

## Publication
**W. Ward**, S. Etter, T. Ingebrand, C. Ellis, A. J. Thorpe, U. Topcu, "[Online Adaptation of Terrain-Aware Dynamics for Planning in Unstructured Environments](https://arxiv.org/abs/2506.04484)," RSS Workshop on Resilient Off-road Autonomous Robotics (2025).

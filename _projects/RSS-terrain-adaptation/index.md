---
layout: post
title: Off-Road Terrain Adaptation for Robot Navigation
description:  How can we estimate a robot's dynamics on unknown terrains at runtime? We developed a learned model that helps mobile robots quickly adapt to new terrain conditions, improving navigation accuracy and collision avoidance. 
skills: 
- Python
- C++
- ROS (Noetic)
- PyTorch
- Unity
- Neural Networks
- Model Predictive Control
- Dynamics Modeling
main-image: /robot-sim.png
---

---
## Motivation
Mobile robots driving in off-road environments face rapidly changing terrain conditions that affect their motion and control. Traditional models often fail when encountering new or unseen surfaces, leading to poor performance or collisions. Therefore, real-time adaptation is critical for safe and reliable navigation. 

## Overall Framework
[comment]: <We enable online terrain adaptation using **function encoders**. Function encoders use a small set of neural networks to quickly represent new dynamics models from limited data, allowing a robot to adapt to new terrain without retraining. We break down the process of training and deploying function encoders for terrain adaptation in two phases:>

{% include image-gallery.html images="figure1.png" height="400" %}

1. **Offline:** Train a function encoder (set of neural networks) to capture a robot's driving dynamics on known terrains.
2. **Online:** Align the function encoder to represent the dynamcis of a **new terrain** using a simple least-squares algorithm.


## Successful Adaptation to Challenging Ice Terrain

{% include image-gallery.html images="with-adaptation.png, without-adaptation.png" height="400" %}

* We train a function encoder on driving data from a Unity simulation.
* At runtime, the function encoder successfully adapts to a **challenging, unknown icy terrain.**
* The robot uses MPPI control to navigate on the ice, reaching waypoint goals while avoiding trees.  ​
  
[comment]: <our approach on a wheled robot in a Unity-based simulation. After training the function encoder on six terrains, we deploy the robot on an **unknown, slippery ice terrain**. Then, the robot uses model predictive control (MPC) to navigate through a forest environment while avoiding trees. Despite the challenging terrain, the robot reaches every waypoint with no collisions.>


## Technical Contributions
* Trained neural network dynamics models that accurately predict a robot's control response (PyTorch).
* Integrated neural network dynamics models with an MPPI control algorthim for rapid trajectory planning (ROS).
* Collected and processed robot trajectory data (odometry and command velocities) from a Unity-based simulator (ROS).

## Publication
**W. Ward**, S. Etter, T. Ingebrand, C. Ellis, A. J. Thorpe, U. Topcu, "[Online Adaptation of Terrain-Aware Dynamics for Planning in Unstructured Environments](https://arxiv.org/abs/2506.04484)," RSS Workshop on Resilient Off-road Autonomous Robotics (2025).

## Additional Details
* Poster presented at RSS Workshop on Resilient Off-road Autonomous Robotics: [Poster](https://github.com/willward20/willward20.github.io/blob/main/_projects/RSS-terrain-adaptation/RSS-ROAR-poster.pdf)
* ROS package for calculating MPPI rollouts using the learned model: [github.com/willward20/mppi_rollouts](https://github.com/willward20/mppi_rollouts).
* Function encoder training/testing software: [github.com/ajthor/function-encoder-terrain-adaptation](https://github.com/ajthor/function-encoder-terrain-adaptation/tree/main).

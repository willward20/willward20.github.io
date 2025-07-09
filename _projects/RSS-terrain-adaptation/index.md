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
- MPC
main-image: /robot-sim.png
---

---
## Motivation
Mobile robots driving in off-road environments face rapidly changing terrain conditions that affect their motion and control. Traditional models often fail when encountering new or unseen surfaces, leading to poor performance or collisions. Therefore, real-time adaptation is critical for safe and reliable navigation. 

## Approach
{% include image-gallery.html images="figure1.png" height="400" %}
Something about function encoders here. 
Instead of training one neural network model to Our technical approach is broken down into two phases:
1. **Offline Training.** Train a neural network model that captures driving dynamics over diverse terrains
 
We enable mobile robots to adapt their dynamics model to new terrains at runtime using limited data.  by expressing dynamics as a linear combination of learned neural basis functions. This allows real-time model adaptation without retraining, and supports closed-loop trajectory planning through a model-predictive controller.

## Publication
**W. Ward**, S. Etter, T. Ingebrand, C. Ellis, A. J. Thorpe, U. Topcu, "[Online Adaptation of Terrain-Aware Dynamics for Planning in Unstructured Environments](https://arxiv.org/abs/2506.04484)," RSS Workshop on Resilient Off-road Autonomous Robotics (2025).

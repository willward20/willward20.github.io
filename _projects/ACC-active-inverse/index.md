---
layout: post
title: Planning Robot Actions That Reveal Human Objectives
description:  How can robots understand human behavior without directly asking? 
  We show that robots can act in ways that provoke humans to reveal their hidden objectives.
skills: 
- Julia
- Python
- Optimization
- ROS
- Gazebo
- LQR Control
- Game Theory
main-image: /warehouse.png 
---

---
## Motivation
Robots that interact with humans must be able to anticipate and understand their behavior. 
For example, a robot delivering medical supplies throughout a hospital must be able to 
predict the flow of human traffic to avoid collisions and deliver on time. However, in
many scenarios, **humans don't expliclty reveal their objectives**, and they may even 
intentionally hide them. **How can robots understand the behavior of humans who do
not voluntarily share their goals?**

## Overall Framework

## Results

## Technical Contributions

## Publication
**W. Ward**, Y. Yu, J. Levy, N. Mehr, D. Fridovich-Keil, U. Topcu, "[Active Inverse Learning in Stackelberg Trajectory Games](https://arxiv.org/abs/2308.08017)," American Control Conference (2025). 

## Additional Details
* ROS package for deploying optimized trajectories on turtlebots in Gazebo: [github.com/willward20/active_inverse_stackelberg_ros](https://github.com/willward20/active_inverse_stackelberg_ros).
* Optimization code (Julia) for solving robot trajectories in Stackelberg games: [github.com/u-t-autonomous/active_inverse_stackelberg](https://github.com/u-t-autonomous/active_inverse_stackelberg).

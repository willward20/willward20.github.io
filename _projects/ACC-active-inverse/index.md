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
main-image: /title-figure.png 
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

{% include image-gallery.html images="results.png" height="400" %}

* We test our method in two scenarios: a **pursuit** game and a **driving assistant** game.
* **Pursuit:** Follower (human) pursues one the leader's (robot's) three rovers.
* **Driving Assistant:** Follower drives through a warehouse, tracking a trajectory suggested by the leader (a driving assistant). 
* Across both scenarios, the leader plans control actions
that **clearly distinguish the follower's trajectories** under each of its possible objectives.

{% include youtube-video.html id="csQpXJh1SmM" autoplay= "false"%}

* The video above visualizes the follower's trajectories under each of its possible objectives in Gazebo.
* The colored distributions on the ground show where the leader expects the follower to drive, depending on its objective (red, green, or blue). 
  

## Technical Contributions
* Solved optimization problems in Julia using the convex-concave procedure and the MOSEK solver.
* Designed game-theoretic optimization problems for actively distinguishing follower objectives.
* Integrated Julia code with a Julia-to-ROS communication port for deploying trajectories on rovers.
* Created a ROS/Gazebo simulation to deploy the optimized trajectories on TurtleBots. 

## Publication
**W. Ward**, Y. Yu, J. Levy, N. Mehr, D. Fridovich-Keil, U. Topcu, "[Active Inverse Learning in Stackelberg Trajectory Games](https://arxiv.org/abs/2308.08017)," American Control Conference (2025). 

## Additional Details
* ROS package for deploying optimized trajectories on turtlebots in Gazebo: [github.com/willward20/active_inverse_stackelberg_ros](https://github.com/willward20/active_inverse_stackelberg_ros).
* Optimization code (Julia) for solving robot trajectories in Stackelberg games: [github.com/u-t-autonomous/active_inverse_stackelberg](https://github.com/u-t-autonomous/active_inverse_stackelberg).

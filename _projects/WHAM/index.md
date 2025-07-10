---
layout: post
title: Vision-Based Autonomous Driving via Machine Learning
description:  Our autonomous RC car navigates an obstacle course using
  a neural network that converts camera images into control actions. 
skills: 
- Python
- PyTorch
- Raspberry Pi
- Supervised Learning
- Convolutional Neural Networks
- Electronics Integration
main-image: /wham-car.jpg
---

---
## The Autonomous Vehicle Challenge

{% include image-gallery.html images="course.jpg" height="400" %}

We competed in an autonomous vehicle challenge where our robot had to
navigate through the obstacle course depicted above. Each team was 
free to design their robot's hardware and software however they wished, 
as long as the robot was completely autonomous. We chose to modify an
RC car, stripping out the existing electronics and installing
motor drivers, servo control boards, batteries, and a Raspberry Pi
to process camera images and control the robot. 

## Autopilot Design

{% include image-gallery.html images="autopilot-loop.png" height="400" %}

We chose a learning-based approach to designing our autonomy software. Our
training and testing process is outlined below. 
1. **Collect human driving data** (camera images labeled with the user's steering and throttle inputs).
2. **Train a Convolution Neural Network (CNN)** to correctly predict control inputs based on input images.
3. **Deploy the CNN as the robot's autopilot**, processing images and outputting control actions in real time. 


## Results

{% include youtube-video.html id="SQS1NwXQrBU" autoplay= "false"%}

We competed on this obstacle course at two competitions. At the first event,
the obstacle course was outdoors and uncovered. **The video above** illustrates
how sun exposure corrupted our robot's camera images. As a result, our robot 
failed to complete the course. 

{% include youtube-video.html id="aOQVNasl_Vw" autoplay= "false"%}

**However**, at the second event, the obstacle course was built on an outdoor,
covered tennis court. Our robot performed much better under these lighting
conditions, and **our team won first place.** The **video above** shows the winning
lap. 


## Technical Contributions
* Developed Python software that 
  * Records the robot's sensor/control data (camera images, servos & motor control)
  * Trains a neural network model to predict control actions from camera images (PyTorch)
  * Drives the robot autonomously using the trained model as the controller
* Hardware integration (configuring driver boards, connecting sensors/devices to the RPi)

## Additional Details
* Source code for training and deploying our autopilot: [github.com/willward20/WHAM](https://github.com/willward20/WHAM).
* Our team's [final presentation slides](https://github.com/willward20/WHAM/blob/main/final_presentation.pdf).

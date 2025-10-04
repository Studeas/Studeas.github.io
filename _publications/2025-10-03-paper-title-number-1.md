---
title: "UniOcc: A Unified Benchmark for Occupancy Forecasting and Prediction in Autonomous Driving"
collection: publications
category: conferences
permalink: /publication/2025-10-03-paper-title-number-1
excerpt: 'Yuping Wang, Xiangyu Huang\*, <u>Xiaokang Sun\*<\u>, Mingxuan Yan, Shuo Xing, Zhengzhong Tu, Jiachen Li'
date: 2025-07-15
venue: 'International Conference on Computer Vision (ICCV)'
paperurl: 'https://arxiv.org/pdf/2503.24381'
# citation: 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
bibtexurl: '/files/bibtex1.bib'
code: 'https://uniocc.github.io/'
---

> UniOcc is a unified framework for occupancy forecasting, single-frame occupancy prediction, and occupancy flow estimation in autonomous driving.

![ff](/images/uniocc_banner.png)

We introduce UniOcc, a comprehensive, unified benchmark and toolkit for occupancy forecasting (i.e., predicting future occupancies based on historical information) and occupancy prediction (i.e., predicting current-frame occupancy from camera images. UniOcc unifies the data from multiple real-world datasets (i.e., nuScenes, Waymo) and high-fidelity driving simulators (i.e., CARLA, OpenCOOD), providing 2D/3D occupancy labels and annotating innovative per-voxel flows. Unlike existing studies that rely on suboptimal pseudo labels for evaluation, UniOcc incorporates novel evaluation metrics that do not depend on ground-truth labels, enabling robust assessment on additional aspects of occupancy quality. Through extensive experiments on state-of-the-art models, we demonstrate that large-scale, diverse training data and explicit flow information significantly enhance occupancy prediction and forecasting performance.



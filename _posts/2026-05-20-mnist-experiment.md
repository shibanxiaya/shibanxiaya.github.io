---
layout: post
title: "MNIST手写数字识别：三层全连接网络实验"
date: 2026-05-20 10:00:00 +0800
categories: [机器学习, 实验]
tags: [MNIST, 全连接网络, PyTorch, 图像分类]
---

## 实验概述

使用 PyTorch 构建三层全连接神经网络对 MNIST 手写数字数据集进行分类。

## 网络结构

```
输入层 (784) → 隐藏层1 (512) → 隐藏层2 (256) → 输出层 (10)
```

- 激活函数：ReLU
- 优化器：SGD (lr=0.01)
- 批量大小：64
- 训练轮次：5 epochs

## 实验结果

| 指标 | 数值 |
|------|------|
| 训练集准确率 | 95.2% |
| 测试集准确率 | 93.3% |
| 训练时间 | ~2分钟 |

## 关键代码

```python
class MNISTNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(784, 512)
        self.fc2 = nn.Linear(512, 256)
        self.fc3 = nn.Linear(256, 10)
        self.relu = nn.ReLU()
    
    def forward(self, x):
        x = x.view(-1, 784)
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.fc3(x)
        return x
```

## 分析

三层全连接网络在 MNIST 上能达到 93% 以上的准确率，表现不错但还有提升空间。后续可以尝试 CNN 来进一步提高准确率。

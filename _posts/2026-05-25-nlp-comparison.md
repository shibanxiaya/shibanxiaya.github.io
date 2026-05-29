---
layout: post
title: "NLP对比实验：MLP vs CNN vs LSTM vs Transformer"
date: 2026-05-25 15:00:00 +0800
categories: [NLP, 实验]
tags: [情感分类, NER, MLP, CNN, LSTM, Transformer]
---

## 实验目的

比较四种经典模型在**情感分类**和**命名实体识别（NER）**两个NLP任务上的表现。

## 模型对比

| 模型 | 参数量 | 特点 |
|------|--------|------|
| MLP | 较少 | 无序列建模能力 |
| CNN | 中等 | 局部特征提取 |
| LSTM | 较多 | 长序列记忆 |
| Transformer | 最多 | 自注意力机制 |

## 情感分类结果

### 准确率对比

```
MLP:        78.5%
CNN:        82.3%
LSTM:       85.1%
Transformer: 87.6%
```

### 分析

- Transformer 凭借自注意力机制在捕捉长程依赖上表现最佳
- LSTM 在序列建模上优于 CNN 和 MLP
- MLP 由于缺乏序列感知能力表现最差

## NER 结果

### F1 分数对比

```
MLP:        72.1%
CNN:        76.8%
LSTM:       82.4%
Transformer: 84.2%
```

## 结论

Transformer > LSTM > CNN > MLP 的性能排序在两个任务上一致。对于序列任务，注意力机制和循环结构是必要的。

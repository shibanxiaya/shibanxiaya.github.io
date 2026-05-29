---
layout: post
title: "PyTorch 版本不兼容的那一夜"
date: 2026-05-25 22:00:00 +0800
categories: [踩坑笔记, 深度学习]
tags: [PyTorch, CUDA, 版本兼容, GPU]
---

## 深夜，一个熟悉的报错

```python
import torch
print(torch.cuda.is_available())
# False
```

GPU 明明插在电脑里，PyTorch 就是不认。那一刻的心情，懂的都懂。

## 排查路线图

### 第一步：搞清楚自己装了什么

```bash
# 查看 PyTorch 版本
python -c "import torch; print(torch.__version__)"

# 查看 CUDA 版本（PyTorch 自带的）
python -c "import torch; print(torch.version.cuda)"

# 查看系统 CUDA 版本
nvidia-smi
```

**关键：** `torch.version.cuda` 和 `nvidia-smi` 显示的 CUDA 版本必须兼容。

### 第二步：理解版本对应关系

这是最容易踩的坑——PyTorch 版本和 CUDA 版本不是随便配的：

| PyTorch 版本 | 支持的 CUDA 版本 |
|-------------|-----------------|
| 2.0.x | CUDA 11.7 / 11.8 |
| 1.13.x | CUDA 11.6 / 11.7 |
| 1.12.x | CUDA 11.3 / 11.6 |
| 1.11.0 | CUDA 11.3 / 11.5 |

**我当时的配置：** PyTorch 1.11.0 + 系统 CUDA 12.x → **不兼容！**

### 第三步：重装正确的版本

```bash
# 先卸载
pip uninstall torch torchvision torchaudio

# 去 PyTorch 官网 https://pytorch.org/get-started/locally/
# 选择对应的 CUDA 版本，复制安装命令

# 比如 CUDA 11.8：
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

### 第四步：验证

```python
import torch
print(f"PyTorch: {torch.__version__}")
print(f"CUDA available: {torch.cuda.is_available()}")
print(f"CUDA version: {torch.version.cuda}")
print(f"GPU name: {torch.cuda.get_device_name(0)}")
```

输出应该类似：

```
PyTorch: 2.0.1+cu118
CUDA available: True
CUDA version: 11.8
GPU name: NVIDIA GeForce RTX 3060
```

## 另一个隐藏坑：驱动版本

即使 PyTorch 和 CUDA 版本对上了，NVIDIA 驱动太旧也不行。

```bash
nvidia-smi  # 看 Driver Version
```

| CUDA 版本 | 最低驱动版本 |
|----------|------------|
| CUDA 11.x | ≥ 450.80 |
| CUDA 12.x | ≥ 525.60 |

## 终极检查清单

遇到 PyTorch GPU 不可用时，按顺序检查：

1. ✅ `nvidia-smi` 能正常显示 GPU 吗？→ 不行就重装驱动
2. ✅ `torch.__version__` 带 `+cu` 后缀吗？→ 不带就是装了 CPU 版
3. ✅ `torch.version.cuda` ≤ `nvidia-smi` 显示的 CUDA 吗？→ 不满足就重装 PyTorch
4. ✅ 驱动版本够新吗？→ 不够就更新驱动

## 总结

PyTorch 版本不兼容的本质是**三层版本对齐**：

```
PyTorch 版本 ←→ CUDA Toolkit 版本 ←→ NVIDIA 驱动版本
```

任何一层不匹配，GPU 就罢工。下次装环境前，先去 PyTorch 官网选好版本再复制安装命令，别自己瞎组合。

> 那晚之后，我把 `pip install torch` 直接拉入了黑名单。你呢？

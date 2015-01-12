---
title: Barrel shifter
---

A barrel shifter is a digital circuit that can shift a data word by a specified number of bits in one clock cycle.

![image](https://farm8.staticflickr.com/7578/16260221182_53a096f18c_o.png)

In the above image, x is input and y is output.

For shift 1, all the erjiguan on the green line exist, while others not.

shift register
--------------

![image](https://farm9.staticflickr.com/8671/16074934899_03921f148b_o.png)

F0、F1、F2、F3是四个边沿触发的D触发器，每个触发器的输出端Q接到右边一个触发器的输入端D。因为从时钟信号CP的上升沿加到触发器上开始到输出端新状态稳定地建立起来有一段延迟时间，所以当时钟信号同时加到四个触发器上时，每个触发器接收的都是左边一个触发器中原来的数据(F0接收的输入数据D1)。寄存器中的数据依次右移一位。

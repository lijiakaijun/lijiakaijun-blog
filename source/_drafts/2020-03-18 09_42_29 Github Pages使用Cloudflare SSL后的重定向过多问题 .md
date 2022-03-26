---
title: Github Pages使用Cloudflare SSL后的重定向过多问题
tags:
  - Github
  - Cloudflare
  - SSL
pic: https://pic.lijiakaijun.cyou/4176/8wpMRS.webp
summary: 解决Github Pages使用Cloudflare SSL后出现重定向过多的问题
abbrlink: 4176
date: 2020-03-18 09:42:29
comments: true
toc: true
lk: /posts/4176.html
top:
categories: 笔记
---
昨天无聊上一下我的博客，然后发现......不能访问了，如下图所示

![8djL7V.png](https://pic.lijiakaijun.cyou/4176/8djL7V.webp)

然后昨天去百度了一下原因，说是SSL的配置问题才导致重定向过多的问题

（别问我昨天的事为啥要拖到今天来做，因为昨天发现问题的时候我都快要去睡觉了QwQ）

## 解决方法
进入Cloudflare管理界面，点击SSL

然后我们可以看到我们是用Flexible模式，我们点击Full即可

## 问题原因

当Cloudflare使用Flexible模式时Cloudflare使用http来连接Github Pages时那边又启用了强制https连接，把连接转为https，然后Cloudflare又使用http来连接，如此循环......

附上每个模式的示例图（自行忽视截图上面那行字，懒得改了）

不用https（Off）：

![8dxLJU.png](https://pic.lijiakaijun.cyou/4176/8dxLJU.webp)

使用Flexible模式：

![8dxOWF.png](https://pic.lijiakaijun.cyou/4176/8dxOWF.webp)

使用Full模式：

![8dxXz4.png](https://pic.lijiakaijun.cyou/4176/8dxXz4.webp)

使用Full（strict）模式：

![8dxqiT.png](https://pic.lijiakaijun.cyou/4176/8dxqiT.webp)

## 另外一种解决方法（未实践/未成功）

我在想，如果我是用Flexible模式的话，Cloudflare会用http连接来访问我的Github Pages，那么如果我在Github那边取消“强制使用hhtps”的话会不会达到同样效果？

试下呗

进入Github，然后进入我的Github Pages仓库

然后点击Settings，进入设置

![8wSfDs.png](https://pic.lijiakaijun.cyou/4176/8wSfDs.webp)

找到Github Pages，在那里找到Enforce HTTPS，取消选中即可

![8wShbn.png](https://pic.lijiakaijun.cyou/4176/8wShbn.webp)

但我不知道是我的原因还是需要花些时间来完成配置，我设置完成后再次访问我的博客时依然显示重定向过多，如下图所示

![8wpMRS.png](https://pic.lijiakaijun.cyou/4176/8wpMRS.webp)

（估计是要等待一段时间才会生效吧，不管了，还是把模式改为Full后顺便把Enforce HTTPS打开就行了）

>顺便说一下，在Github Pages中使用自定义域名后Enforce HTTPS好像可以关闭，但使用自定义域名后那个选项默认是开启还是关闭我就忘记了

---

悄悄告诉你，在写这篇文章时我在上课哈哈哈
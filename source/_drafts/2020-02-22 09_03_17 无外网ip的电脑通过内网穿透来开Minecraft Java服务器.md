---
title: 无外网ip的电脑通过内网穿透来开Minecraft Java服务器
tags:
  - 内网穿透
  - Minecraft
  - Windows
abbrlink: 25103
date: 2020-02-22 09:03:17
comments: true
toc: true
top:
lk: /posts/25103.html
categories: 笔记
---
> 前言
>
> 本教程参考了[Sakura Frp官方教程](https://moe.do/archives/sakurafrp_launcher_helper.html)来进行实际操作
>
>其他内网穿透软件教程请自行查找，谢谢
>
>（手残没保存啊，结果又要从新打一次了，我太难了）
>
>如果有错的话，请尽快联系我，我会尽快修改的


## 需要准备的东西


	一个没有公网ip的电脑（自己去百度找下判定是不是外网ip的方法，这里我就不写了）
	一个Sakura Frp账号
	一个Minecraft服务器核心（我这里用1.12原版服务器核心来实践一下）


> 别问我为啥不直接在Minecraft里开局域网游戏后再内网穿透，如果你不怕麻烦的话可以试试


## 启动Minecraft服务器（这里我不写了）

这里我就不写了，自己去[mcbbs](https://www.mcbbs.net)看看别人的教程（估计我要再写个教程了）


## 新建一个隧道（我这里用的是客户端来新建一个）

在[Sakura Frp](https://www.natfrp.com) 上登陆你的账号，然后下载软件

![Snipaste_2020-02-11_20-22-00.webp](https://pic.lijiakaijun.cyou/25103/PLAVdQE7kfYKhSi.webp)

下载后会获得一个压缩包

![Snipaste_2020-02-11_20-25-59.webp](https://pic.lijiakaijun.cyou/25103/nLDzI9RJ8Sfst4x.webp)

把他解压，会得到这2个东西

![Snipaste_2020-02-11_20-26-38.webp](https://pic.lijiakaijun.cyou/25103/QJVjct4kRvml9hu.webp)

打开SakuraFrpLauncher.exe，如果弹出UAC提示，点击“是”即可

![Snipaste_2020-02-22_08-50-56.webp](https://pic.lijiakaijun.cyou/25103/qQ1wycPLVXECA3N.webp)

打开后的界面

![Snipaste_2020-02-22_08-55-17.webp](https://pic.lijiakaijun.cyou/25103/MSd61RU9t4XKTvh.webp)

我们先在“访问密钥”这输入你的访问密钥，如果不知道的话看下[这里](https://moe.do/archives/sakurafrp_findtoken.html) ,输入完后点击旁边的“登陆”来登陆

登陆成功后点击“快速新建隧道”这一栏，你会看到这个界面

![image.webp](https://pic.lijiakaijun.cyou/25103/L16qGDcTUkXfrJj.webp)

我们在左边的任务进程那里找到Java进程，并选择它

![Snipaste_2020-02-22_09-25-57.webp](https://pic.lijiakaijun.cyou/25103/mt6OdcWJ7wiY3sH.webp)

如果找不到的话刷新一下下

选择后看下右边，先选择离你最近的服务器，我这里用佛山的服务器来演示一下

![Snipaste_2020-02-22_09-26-10.webp](https://pic.lijiakaijun.cyou/25103/huScYmrNEaRZ941.webp)

选择好服务器后写上你的隧道名字，远程端口可以留空，留空的话系统会帮你选择端口

顺便说下隧道名字的限制，如下图所示：

![Snipaste_2020-02-22_09-27-10.webp](https://pic.lijiakaijun.cyou/25103/DaUGd2IQRu7hepJ.webp)

全部搞定后点击下面的“添加隧道”来添加一个隧道

!![Snipaste_2020-02-22_09-26-37.webp](https://pic.lijiakaijun.cyou/25103/MKLlEtNiwCnOfvI.webp)

看到这个窗口时，说明你的隧道添加成功了

![Snipaste_2020-02-22_09-27-38.webp](https://pic.lijiakaijun.cyou/25103/ZvdNc7TRxVaFKr9.webp)

这个窗口上有你的隧道地址，还有对应的ip地址，你可以现在记下来，等下成功启动后可以发给你的朋友来一起联机~


## 启动内网穿透吧

回到“启动现有隧道”这一栏，选择你刚刚创建成功的隧道

![Snipaste_2020-02-22_09-28-07.webp](https://pic.lijiakaijun.cyou/25103/YKym1UEvN6x9sct.webp)

然后点击下面的“启动隧道”来启动内网穿透

![Snipaste_2020-02-22_09-28-14.webp](https://pic.lijiakaijun.cyou/25103/aPqIzxhnog28KO7.webp)

然后它会弹出1个提示窗口和一个cmd界面的窗口

提示窗口信息如下：

![Snipaste_2020-02-22_09-28-37.webp](https://pic.lijiakaijun.cyou/25103/IUgw5sK1E84ZJAY.webp)

然后看下cmd窗口那里有没有下面这行字，如果有，那就成功了~

![Snipaste_2020-02-22_09-28-49.webp](https://pic.lijiakaijun.cyou/25103/jmcGYzEO6dnwUPA.webp)

如果你之前没看到隧道信息的话，看看cmd窗口，最上面那里有你的隧道的信息

![Snipaste_2020-02-22_09-29-52.webp](https://pic.lijiakaijun.cyou/25103/MkL4rbuJf1QCReB.webp)

看到后复制地址或打开你的Minecraft，点击“多人游戏”，然后点击下面的“添加服务器”或“直接连接”

然后尝试登进去看看，如果登陆成功，那么你的内网穿透就成功了~

看下服务器后台：

![Snipaste_2020-02-22_09-34-19.webp](https://pic.lijiakaijun.cyou/25103/A2CysBKENcFueGm.webp)

嗯，显示我加进来了

然后发地址给你的朋友一起联机吧

Enjoy!

---

看啥？我下周还要上网课＞﹏＜


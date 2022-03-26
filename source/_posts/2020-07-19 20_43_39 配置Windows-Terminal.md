---
title: 来配置下Windows Terminal
pic: https://gitee.com/lijiajunljj/wdbktc/raw/master/Snipaste_2020-07-19_21-26-13.webp
summary: 对没错，是Windows Terminal，你没看错
categories: 笔记
tags:
  - Windows
abbrlink: 49908
date: 2020-07-19 20:43:39
comments: true
toc: true
top:
lk: /posts/49908.html
---

今天把版本升级到1909，然后我想起了[这篇](https://lijiakaijun.me/posts/3091.html#toc-heading-5)

然后我就在应用商店下载了Windows Terminal

下载后是这个样子的↓

![如图](https://gitee.com/lijiajunljj/wdbktc/raw/master/$DC3G}]AW$2LC~7DN4F8J0E.jpg)

我突发奇想，如果这个能替换Git那个界面会怎么样

于是......

---

## 参考资料

[Windows Terminal下配置Git Bash](https://www.cnblogs.com/linchenjian/p/12573129.html)

[将Windows Terminal添加到右键菜单](https://www.cnblogs.com/huelse/p/12600686.html)

[windows terminal配置](https://blog.csdn.net/fangye945a/article/details/102472315)

---

## 添加Git bash

点击`+`旁边的按钮，点击`设置`

然后就弹出了一个新窗口

对没错，对Windows Terminal的设置是通过`seeting.json`实现的

我们在里面找到`list`字段，内容如下：

````json
        "list":
        [
            {
                // Make changes here to the powershell.exe profile.
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "name": "Windows PowerShell",
                "commandline": "powershell.exe",
                "hidden": false
			},
            {
                // Make changes here to the cmd.exe profile.
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "name": "命令提示符",
                "commandline": "cmd.exe",
                "hidden": false
            },
            {
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure"
            }
        ]
    },
````

我们在倒数第二个大括号旁边加个`,`，然后换行，输入以下内容：

````json
{
    		"closeOnExit": true, // 关闭的时候退出命令终端
    		"commandline": "C:\\Program Files\\Git\\bin\\bash.exe", // git-bash的命令行所在位置
    		"cursorColor": "#FFFFFF", // 光标颜色
    		"cursorShape": "bar", // 光标形状
    		"fontFace": "YaHei Consolas Hybrid", // 字体配置，选择你电脑上已安装的字体
    		"fontSize": 11, // 终端字体大小
    		"guid": "{1c4de342-38b7-51cf-b940-2309a097f589}", // 唯一的标识，改成和其他的已有终端不一样
    		"historySize": 100, // 终端窗口记忆大小
    		"icon": "C:\\Program Files\\Git\\mingw64\\share\\git\\git-for-windows.ico", // git的图标
    		"name": "git-bash", // 标签栏的标题显示
    		"padding": "0, 0, 0, 0", // 边距
    		"snapOnInput": true,
    		"startingDirectory": %USERDATA%, // gitbash 启动的位置（默认在C盘的用户里面的就是 ~ ）
    		"useAcrylic": false,// 是否开启透明度
    		"acrylicOpacity": 0, //透明度越低越透明
			}
````

然后保存，返回到Windows Terminal界面，点击`+`旁边的按钮，发现下面多了个git-bash的选项

然后点击git-bash，会弹出一个新选项卡，运行的是git

![还是例图](https://gitee.com/lijiajunljj/wdbktc/raw/master/202007192133.webp)

---

## 添加Windows Terminal右键菜单并设置为默认打开标签类型

既然要实现像Git一样右键打开的话，我们需要对注册表做点修改

Win+R打开运行窗口，输入`regedit`并回车

（如果提示管理员权限请允许运行）

然后我们依次找到`HKEY_CLASSES_ROOT\Directory\Background\shell`，在shell文件夹下新建一个项，名字自取

然后在名字为`(默认)`的字符串值中填写你喜欢的右键菜单名

再新建一个项，取名为`command`

在名字为`(默认)`的字符串值中填写`C:\\Users\\这里替换为你的用户名\AppData\Local\Microsoft\WindowsApps\wt.exe`

完毕后在Windows Terminal打开设置，在Git那一段的

````json
"startingDirectory": %USERDATA%,
````

改为

````json
"startingDirectory": null,
````

之后找到guid那一段，复制guid

复制后找到`defaultProfile`，将原来的修改为你刚刚复制的gid

然后现在右键打开试试吧

---

## 修改配色

在seeting.json中找到`schemes`那一段，将下面内容全部复制进去：

````json
    "schemes": 
    [
    	{
            "name" : "One Half Dark",
            "background" : "#696969",
            "black" : "#282C34",
            "blue" : "#7B68EE",
            "brightBlack" : "#5A6374",
            "brightBlue" : "#729fcf",
            "brightCyan" : "#56B6C2",
            "brightGreen" : "#98C379",
            "brightPurple" : "#C678DD",
            "brightRed" : "#E06C75",
            "brightWhite" : "#DCDFE4",
            "brightYellow" : "#E5C07B",
            "cyan" : "#56B6C2",
            "foreground" : "#DCDFE4",
            "green" : "#7FFF00",
            "purple" : "#BA55D3",
            "red" : "#E06C75",
            "white" : "#DCDFE4",
            "yellow" : "#FFD700",
		},
    ],
````

name那一段可以随意，颜色必须为十六进制颜色码

然后在git那一段添加以下内容：

````json
"colorScheme": "One Half Dark",
````

如果你改了name那段，那你需要保持colorScheme中设置的内容和name中的内容一致

搞定后去看看吧，如果没啥反应就重新打开一次应该就行了

（我懒就直接复制修改几个配色就行了）

---

![最终效果图](https://gitee.com/lijiajunljj/wdbktc/raw/master/Snipaste_2020-07-19_21-26-13.webp)
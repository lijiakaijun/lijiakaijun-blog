---
lk: /posts/8807.html
title: 暂时解决使用Kratos-Rebirth主题后Artalk评论出现问题的一些办法
toc: true
abbrlink: 8807
date: 2020-10-02 11:09:36
pic:
summary:
categories:
tags:
  - 网站
  - Hexo
comments: 笔记
top: false
---

在使用Kratos-Rebirth主题后我发现主题默认的评论只有disqus

于是我换了Valine

但......因为这个主题是用了pjax（应该）

以至于在path和加载评论框架这出现了一些问题~~（Valine出来挨打）

<!-- more -->

于是我魔改了下，使用了Artalk

但是但是我还是栽倒在path

在今天凌晨睡觉前我突发奇想我不是安装了hexo-abbrlink嘛......

那我为啥不用abbrlink生成的数来做唯一标识呢？

说改就改

<!--more-->

---

## 加载Artalk

首先我们在主题文件里的layout文件夹里的_comments文件夹里任选一个ejs来替换成下面的内容

我这替换disqusjs的ejs文件，应该是这样的：

````ejs
<div id="disqus_thread">
<div id="ArtalkComments"></div>
 <script src="https://cdn.jsdelivr.net/gh/qwqcode/Artalk/dist/Artalk.min.js"></script>
<script>
  new Artalk({
    el: '#ArtalkComments', // 元素选择
    placeholder: '提交完后记得刷新~', // 占位符
    noComment: '快来成为第一个评论的人吧~', // 无评论时显示
    defaultAvatar: 'mp', // 参考 https://cn.gravatar.com/site/implement/images/#default-image
    pageKey: 'https://lijiakaijun.me<%- page.lk %>',//我这里用绝对路径是避免出现一些奇怪的Bug
    serverUrl: '', //服务器地址
    readMore: { // 阅读更多配置
      pageSize: 15, // 每次请求获取评论数
      autoLoad: true // 滚动到底部自动加载
    }
  });
  </script>
````

你也许会发现，Artalk.css呢？为什么不加载？

笨蛋，不在head加载你想在这里加载啊？？？

仔细查看代码，你会发现pageKey这里配置的有点不同

没错，这是重点所在

---

## 修改page.md

不修改的话如果page需要评论就会出现一些奇妙的Bug

直接在`date: {{ date }}`后换一行添加`lk: /{{ title }}`就行了

---

## 设置pageKey

既然我们都安装了hexo-abbrlink了，也不怕去魔改这个插件嘛......

安装并配置hexo-abbrlink后打开node_modules文件夹里的hexo-abbrlink文件夹里的lib文件夹里的logic.js，并修改第97行为以下内容

````js
postStr = '---\n' + 'lk: /posts/' + abbrlink + '.html' + '\n' + postStr;
````

这样就行了，hexo g试试吧

---

## 小小的Bug

hexo g后发现lk这个内容跑到最上面了

而且这个办法可能还不是最好的办法......但对目前来说没有什么Bug了

---

你也可能会问了，为什么我不用disqus？

这个计划已经在路上了

只不过要实现多评论还是需要继续修改的...

就这样吧，写作业去了（雾）
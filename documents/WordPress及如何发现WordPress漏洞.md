# WordPress及如何发现WordPress漏洞

WordPress是世界上应用最广泛的开源CMS程序。WordPress是使用PHP语言开发的博客平台，用户可以在支持PHP和MySQL数据库的服务器上架设属于自己的网站，使用起来简单，免费，大大降低了建站难度，并且大大提升了建站速度。

wordpress有两种：

一种是wordpress.com，虽然采用wordpress程序，但很多功能受限，比如不能使用自己的域名。

另一种是wordpress.org，也就是本文中提到的最适合外贸网站的建站程序，它是开源程序，N多的主题和插件，扩展性无限，几乎不受任何限制。



在WordPress上构建网站的最大好处之一是，在大多数情况下，您是在经过验证的平台上构建代码的，而该平台已逐步得到加强。 不幸的是，在安全性方面，还没有完全防黑客攻击的系统。 幸运的是，在保护您和您的客户端系统方面，有一些WordPress漏洞扫描程序可以帮助您在错误失控之前发现错误。

## WordPress专用工具 **(**WordPress Specific Tools)

### WP扫描（WP Scan）

[WP Scan](http://wpscan.org/)是适用于Linux和Mac OSX的开源工具，它是攻击几乎所有WordPress安装程序的瑞士军刀。 关键功能包括能够从WordPress数据库中提取用户名，扫描指定网站正在使用的插件以及查看服务器上安装了哪些主题的功能。 WP Scan还与已知的漏洞数据库集成在一起，因此该软件可以过滤结果以仅显示容易受到攻击的代码。

### 成本（Plecost）

[Plecost](https://code.google.com/p/plecost/)是一个开源WordPress指纹识别工具，**可以分析安装在指定WordPress系统上的插件以及常见的WordPress漏洞和披露(CVE)代码(如果适用)**。 由于Plecost是Python脚本，因此安装它就像将文件添加到服务器然后按照项目网站上的说明一样简单

尽管此工具仅限于仅显示已安装插件中的漏洞，但CVE代码集成使Plecost成为著名的工具，因为它为用户提供了有关如何利用服务器上过时软件的即时反馈。

由于Plecost是Python脚本的集合，因此安装非常简单，只要安装并配置了Python，就可以在Windows，Mac OSX和Linux / Unix系统上运行该实用程序。

## 通用漏洞工具 **(**General Vulnerability Tools)

### 尼克托 (Nikto)

[Nikto](https://www.cirt.net/Nikto2)是通用漏洞扫描程序，可扫描过时的软件，配置文件，隐藏目录等。

除了收集信息之外，Nikto还可以对目标网站进行暴力认证部分，以确保您的网站用户遵循最佳安全做法。 由于该工具可以在支持Perl的任何系统上运行，因此它几乎可以与MacOSX一起在任何Linux和Unix系统上运行。 Nikto也可以配置为在Windows上运行，但是，这些系统需要安装ActiveState Perl或Strawberry Perl。

### Wikto **(**Wikto)

[Wikto](http://research.sensepost.com/tools/web/wikto)是主要用于Windows环境的工具，由于其易用性而在此列表中的大多数工具中脱颖而出。 尽管该程序是针对Windows系统的，但它仍包含强大的功能，例如：模糊逻辑错误代码检查，后端矿工，谷歌辅助目录挖掘和实时HTTP请求/响应监视。

工具的杀手级功能是集中式Google Hacking集成。 尽管从技术上讲，这仅是使用Google搜索来发现敏感信息，但Wikto允许您将已知查询的数据库导入程序，从而简化了流程。 从那里，您可以自动进行针对站点的查询并以最小的努力查看结果。



参考文章：

- wordpress 漏洞_轻松发现WordPress漏洞https://blog.csdn.net/culi4814/article/details/108380478
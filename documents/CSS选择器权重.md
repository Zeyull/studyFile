# CSS选择器权重

CSS基本选择器有类选择器、属性选择器和ID选择器。

CSS 的选择器有很多，常用的有 [元素选择器](https://blog.csdn.net/qq_42351033/article/details/103225005)、[id 选择器](https://blog.csdn.net/qq_42351033/article/details/103225736)、[class 选择器](https://blog.csdn.net/qq_42351033/article/details/103229023)、[后代选择器](https://blog.csdn.net/qq_42351033/article/details/103244891)、[子代选择器](https://blog.csdn.net/qq_42351033/article/details/103246217)、[并集选择器](https://blog.csdn.net/qq_42351033/article/details/103246871)、[交集选择器](https://blog.csdn.net/qq_42351033/article/details/103280516)、[伪类选择器](https://blog.csdn.net/qq_42351033/article/details/103281108#font_color3399EA_size4stronginput_strongfont_93)、[通配符选择器](https://blog.csdn.net/qq_42351033/article/details/103291503) 等。

CSS选择器的权重预示着CSS选择器样式渲染的先后顺序，元素样式渲染时，权重高的选择器样式会覆盖权重低的选择器样式。

通常将权重分为4个等级，可用0.0.0.0来表示这4个等级。

！important关键字优先级最高。

注意：！important井非选择器，而是针对选择器内的单一样式设置的。当然，不同选择器内应用 ！important的权重也是不一样的，例如，在id选择器内的！important关键字权重要高于类选择器内的 ！important关键字权重，即下面所说的选择器权重组合。

- 内联样式（非元素器）的优先级可看成1.0.0.0
- ID选择器的优先级为0.1.0.0
- 类属性选择器、属性选择器、伪类的优先级为0.0.1.0
- 元素选择器、伪元素选择器的优先级为0.0.0.1
- 通配符选择器对特殊性没有任何贡献值

当把选择器组合使用的时候，相应的层级权重也会递增，例如# id .class的权重为0.1.1.0



> 伪类如 :first-child, :nth-last-child(n), :hover等等
>
> 伪元素选择器如::after, ::before等等



注意：

- 当两个选择器组合权重不一样时，用权重高的选择器，不在意代码中谁上谁下
- 当两个选择器组合权重一样时，看代码汇总谁上谁下
- 类 ID 和 ID 类的组合权重是一样的
- !important的权重比内联样式还要高
- 选择器组合是没有父级优于子级这一说法的，比如

```html
  <style>
    #box .sp {
      color: green;
    }

    #qqqq .sp {
      color: red;
    }
  </style>
</head>

<body>
  <div id="box">
    <p class="ap" id="qqqq">
      <span class="sp" id="sqqq">text</span>
    </p>
  </div>
</body>
```

组合优先级一样高，red在下面，文字呈现为红色

#box .ap .sp{}的优先级比#box .sp高，大概原因是它多了一个类选择器

参考文章：

- 【前端面试题】02—59道CSS面试题(附答案)https://blog.csdn.net/snsHL9db69ccu1aIKl9r/article/details/114297605
- 【CSS】什么是 CSS 中的子代选择器https://blog.csdn.net/qq_42351033/article/details/103246217
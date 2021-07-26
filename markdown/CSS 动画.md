# CSS 动画

在 **CSS3 出现之前**，动画都是通过 JavaScript 动态的改变元素的样式属性来完成了，这种方式虽然能够实现动画，但是在性能上存在一些问题。**CSS3 的出现**，让动画变得更加容易，性能也更加好。
 **CSS3** 中有三个关于动画的样式属性`transform`、`transition`和`animation`；

## transform

transform可以用来设置元素的形状改变，主要有以下几种变形

- rotate（旋转）
- scale（缩放）
- skew（扭曲）
- translate（移动）
- matrix（矩阵变形）

```css
.transform-class {
    transform ： none | <transform-function> [ <transform-function> ]*
}
// none表示不作变换 transform-funciton表示变换函数
eg：
	transform: rotate(30deg) scale(2,3);
```



transform-origin规定变形的基点，默认是元素的中心点（50% 50% 0）



## transition

transition是用来设置样式的属性值是如何从从一种状态变平滑过渡到另外一种状态，它有四个属性：

- transition-property（变换的属性，即那种形式的变换：大小、位置、扭曲等）；
- transition-duration（变换延续的时间）；
- transition-timing-function（变换的速率）
- transition-delay（变换的延时）

```css
.transition-class {
    transition ： [<'transition-property'> || <'transition-duration'> || <'transition-timing-function'> || <'transition-delay'> [, [<'transition-property'> || <'transition-duration'> || <'transition-timing-function'> || <'transition-delay'>]]*;
}

.transition {
    transition ：<property> <duration> <timing function> <delay>;
}
```



## animation

animation比较类似于 flash 中的**逐帧动画**，逐帧动画就像电影的播放一样，表现非常细腻并且有非常大的灵活性。然而transition只是指定了开始和结束态，整个动画的过程也是由特定的函数控制。学习过 flash 的同学知道，这种逐帧动画是由**关键帧**组成，很多个关键帧连续的播放就组成了动画，在 CSS3 中是由属性`keyframes`来完成逐帧动画的。

- animationName：动画名称，开发人员自己命名；
- percentage：为百分比值，可以添加多个百分比值；
- properties：样式属性名称，例如：`color`、`left`、`width`等等。

```css
@keyframes animationName {
    from {
        properties: value;
    }
    percentage {
        properties: value;
    }
    to {
        properties: value;
    }
}
//or
@keyframes animationName {
    0% {
        properties: value;
    }
    percentage {
        properties: value;
    }
    100% {
        properties: value;
    }
}
```



- animation-name
- animation-duration(设置动画的持续时间)
- animation-timing-fucntion(与transition-timing-function类似)
- animation-delay
- animation-iteration-count (动画循环次数)
- animation-direction (设置动画播放方向)
- animation-play-state(播放状态)

```css
.animation {
    animation:[<animation-name> || <animation-duration> || <animation-timing-function> || <animation-delay> || <animation-iteration-count> || <animation-direction>] [, [<animation-name> || <animation-duration> || <animation-timing-function> || <animation-delay> || <animation-iteration-count> || <animation-direction>] ]*;
}
//可以赋多个动画效果
```



## 总结

关于 CSS3 的动画的三个属性`transform`、`transition`、`animation`都介绍完了。

`transform`我们可以理解为元素的几何变形，它是有规律可寻的，这种变形并不会产生动画效果仅仅是原有形状的改变。

`transition`和`animation`它们很像 flash 中的**补间动画**和**逐帧动画**。

`transition`是从一个状态变化到另外一种状态，当变化有了平滑的效果后就产生了动画，它是一个公式化的变化，在比较规则的动画效果中我们可以使用，例如：旋转的风车、行驶的汽车、颜色的渐变等等。

`animation`的动画效果更加灵活，可以实现像影片一样的复杂无规则的动画。



## 注意

1. transition的补间动画不会影响left、right这些变换
2. 用transform来替代top、left等可以提高页面性能，transform不会触发回流，而修改top、left会触发



链接：https://www.jianshu.com/p/15f2adfbdad0

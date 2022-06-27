# CSS: 元素高度为自身宽度的一半

简单描述一下：
 屏幕中间有个元素A，随着宽度的增加，始终满足以下条件：

- A 元素垂直居中屏幕中央
- A 元素里面的文字大小20px, 水平垂直居中
- A 元素的高度始终是自身宽度的50%

题目比较简单， 简单实现一下：

## 思路一：height与padding

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }

        .wrapper{
            display: flex;
            align-items: center;
            background-color: sandybrown;
            height: 400px;
        }

        .inner{
            flex: 1;
            font-size: 20px;
            background: red;
            display: flex;
            justify-content: center;
            align-items: center;
            /*text-align:center;*/
            padding: 25% 0;
            height: 0;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="inner"> A </div>
    </div>
</body>
<script>

</script>

</html>
```

注意：

1.padding取百分比作为参数时，百分比依据的是父元素的宽度，这里使用flex:1也是为了与25%契合，flex:1表示子盒子的宽度和父盒子的宽度同步增长，这样就形成元素高度为自身宽度的一半。

2.在子盒子中因为height为0，所以感觉使用text-align和flex使文字居中的效果看上去是一样的，现在还不知道有什么很大的区别。（text-align只改变水平方向）

3.父元素相对定位，那绝对定位下的子元素宽高若设为百分比，是相对谁而言的？

相对于父元素的(content + padding)值, 注意不含border

延伸：如果子元素不是绝对定位，那宽高设为百分比是相对于父元素的宽高，标准盒模型下是content, IE盒模型是content+padding+border。



## 一种思路：使用vw和calc

```html
<!DOCTYPE html>
<html lang="en">
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <title>Document</title>

 <style>

 * {
    padding: 0;
    margin: 0;
    }

 html,body {
    width: 100%;
    height: 100%;
    }

 .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    }

 .box {
    margin-left: 10px;
    /* vw是视口的宽度， 1vw代表1%的视口宽度 */
    width: calc(100vw - 20px);
    /* 宽度的一半 */
    height: calc(50vw - 10px);
    position: absolute;
    background: red;
    /* 下面两行让块垂直居中 */
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    }
 </style>
 </head>

 <body>
    <div class="wrapper">
        <div class="box">A</div>
    </div>
 </body>
</html>
```

注意：

1.transform:translate是参考自己的位置来平移的，如果单位为百分比，该百分比是根据自身**宽高**来计算的。(就是宽高，不是宽度)

2.这里就不能用text-align来居中，因为高度不是0，是存在的。







链接：https://www.jianshu.com/p/e2540496370a
原文链接：https://blog.csdn.net/weixin_42098339/article/details/102830381
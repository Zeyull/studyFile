### Vue2数据响应式原理

MVVM，model  view-model view，说白了是数据变换，视图会自动变换，view-model就像一个桥梁

> Vue的数据变化是非侵入式变化
>
> React和小程序数据变化是侵入式
>
> 侵入式：调用了人家提供的API进行数据改动



为什么vue只是this.a++，就可以改变视图？

因为”上帝的钥匙“——>Object.defineProperty() 进行数据劫持/数据代理



**Object.defineProperty函数**

getter和setter需要变量周转才能工作



**defineReactive函数**

给defineProperty提供一个闭包环境（也就是提供一个可供周转的变量）



**递归侦测对象全部属性**

创建一个Observer类，将一个正常object转换为每个层级属性都是响应式（可侦查的）的object，也就是每一层的属性都是defineReactive出来的，这样能给getter和setter更多操作空间

创建一个observe函数，返回传入的对象的`__ob__`属性，这个属性值是Observer类

实例化`Observer`目的就是给观察对象附加`__ob__`属性和重写setter/getter方法

> `__ob__`不能实现什么，但它的存在代表了这个对象已经是响应式的了，new Observer的目的就是把这个对象变成响应式的



**为了使数组也是可响应的，vue底层改写了7个方法**(修改原型链)

push pop shift unshift splice sort reverse

使用Object.setPrototypeOf(o,arrayMethods) 效果和 o.__proto = arrMethods一样的



**什么是依赖？用到数据的地方都是依赖**

vue2.x 用到数据的组件都是依赖，也就是观察者

在getter中收集依赖，在setter中触发依赖



**使用Dep类和Watcher类**

Dep类：被观察者的类，提供用来收集观察者（ `depend`）方法和通知观察者（ `notify` ）方法（**收集依赖，通知更新**）；

Watcher类：观察者的类，实例化时支持传入回调（ `cb` ）方法，并提供更新（ `update` ）方法；

Dep其实是扮演着对Watcher管理的一种角色。**一个目标对象管理所有相依于它的观察者对象**

> Watcher分为render watcher、user watcher和computed watcher这三种



每个属性key都有其各自的dep实例

get和set里面会进行dep操作



访问数据时，getter 执行依赖收集（即添加观察者），通过实例化 `Watcher` 创建一个观察者，并执行被观察者的 `depend` 方法添加一个观察者

修改数据时，setter 执行派发更新（即通知观察者），通过调用被观察者的 `notify()` 方法通知所有观察者，执行观察者 `update()` 方法



分三步走：**让数据变成响应式**、**依赖收集**和**派发更新**



参考：

- 解读vue数据响应式实现原理[https://shooterblog.site/blogs/%E8%A7%A3%E8%AF%BBvue%E6%95%B0%E6%8D%AE%E5%93%8D%E5%BA%94%E5%BC%8F%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html#%E5%89%8D%E8%A8%80](https://shooterblog.site/blogs/解读vue数据响应式实现原理.html#前言)

- 官方文档

  https://cn.vuejs.org/v2/guide/reactivity.html

- 尚硅谷源码解析视频

  https://www.bilibili.com/video/BV1G54y1s7xV

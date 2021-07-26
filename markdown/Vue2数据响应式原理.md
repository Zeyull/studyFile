### Vue2数据响应式原理

MVVM，model  view-model view，说白了是数据变换，视图会自动变换？，view-model就像一个桥梁

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

创建一个Observer类，将一个正常object转换为每个层级属性都是响应式（可侦查的）的object

创建一个observe函数，返回传入的对象的__ob属性，这个属性值是Observer类



**为了使数组也是可响应的，vue底层改写了7个方法**(修改原型链)

push pop shift unshift splice sort reverse

使用Object.setPrototypeOf(o,arrayMethods) 效果和 o.__proto = arrMethods一样的



**什么是依赖？用到数据的地方都是依赖**

vue2.x 用到数据的组件都是依赖

**在getter中收集依赖，在setter中触发依赖**

使用Dep类和Watcher类


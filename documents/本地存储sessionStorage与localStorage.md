# 本地存储sessionStorage与localStorage

## 本地存储的特性

1. 数据存储在用户浏览器中
2. 设置，读取方便、甚至刷新页面不丢失数据
3. 容量较大，sessionStorage约5M，localStroage约20M ，不确定，不同文章说法不同。
4. 只能存储字符串，可以将对象用JSON.stringify()编码后存储
5. 两者都是window里面的属性



## window.sessionStorage

1. 生命周期为关闭浏览器窗口
2. 在同一个窗口（页面）下数据可以共享（如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的）。打开多个相同的URL的Tabs页面，会创建各自的`sessionStorage`
3. 以键值对的形式存储使用

存储数据

sessionStorage.setItem(key, value);

获取数据

sessionStorage.getItem(key);

删除数据

sessionStorage.reomoveItem(key);

删除所有数据

sessionStorage.clear();



## window.localStorage

1. 生命周期永久生效，除非手动删除否则关闭页面也会存在
2. 可以多窗口（页面共享）（同一个浏览器可以共享，页面属于相同页面和端口）
3. 以键值对的形式存储使用

存储数据

localStorage.setItem(key, value)

获取数据

localStorage.getItem(key)

删除数据

localStorage.removeItem(key)

删除所有数据

localStorage.clear()
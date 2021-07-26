# Symbol符号对象

ES6引入了一种新的基本数据类型Symbol，**表示独一无二的值**，最大的用法是用来定义对象的唯一属性名，Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法，其静态属性会暴露几个内建的成员对象，它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法new Symbol()。每个从Symbol()返回的symbol值都是唯一的，一个symbol值能作为对象属性的标识符。

## 描述

对于每一个Symbol的值都是不相等的，所以Symbol作为对象的属性名，可以保证属性不重名。该数据类型通常被用作一个对象属性的键值，例如当想使对象属性的键为私有值时。symbol类型的键存在于各种内置的JavaScript对象中，同样自定义类也可以这样创建私有成员。symbol数据类型具有非常明确的目的，并且因为其功能性单一的优点而突出，一个symbol实例可以被赋值到一个左值变量，还可以通过标识符检查类型，这就是其全部特性。一个具有数据类型symbol的值可以被称为符号类型值，在JavaScript运行时环境中，一个符号类型值可以通过调用函数Symbol()创建，这个函数动态地生成了一个匿名，唯一的值。Symbol类型唯一合理的用法是用变量存储symbol的值，然后使用存储的值创建对象属性。


```javascript
let s = Symbol();
let s1 = Symbol("s");
let s2 = Symbol("s");
console.log(s === s1); //false
console.log(s1 === s2); //false

let obj = {};
let prop = Symbol();
obj[prop] = 1;
console.log(obj[prop]); // 1
console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol()]
console.log(Reflect.ownKeys(obj)); // [Symbol()]
```

## 属性

- Symbol.length: 长度属性，值为0。
- Symbol.prototype: symbol构造函数的原型。
- Symbol.iterator: 返回一个对象默认迭代器的方法，被for...of使用。
- Symbol.match: 用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用，被String.prototype.match()使用。
- Symbol.replace: 替换匹配字符串的子串的方法，被String.prototype.replace()使用。
- Symbol.search: 返回一个字符串中与正则表达式相匹配的索引的方法，被String.prototype.search()使用。
- Symbol.split: 在匹配正则表达式的索引处拆分一个字符串的方法，被String.prototype.split()使用。
- Symbol.hasInstance: 确定一个构造器对象识别的对象是否为它的实例的方法，被instanceof使用。
- Symbol.isConcatSpreadable: 布尔值，表明一个对象是否应该flattened为它的数组元素，被Array.prototype.concat()使用。
- Symbol.unscopables: 拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。
- Symbol.species: 一个用于创建派生对象的构造器函数。
- Symbol.toPrimitive: 一个将对象转化为基本数据类型的方法。
- Symbol.toStringTag: 用于对象的默认描述的字符串值，被Object.prototype.toString()使用。

## 方法

### Symbol.for(key)

Symbol.for(key)方法会根据给定的键key，来从运行时的symbol注册表中找到对应的symbol，如果找到了就返回它，否则就新建一个与该键关联的symbol，并放入全局symbol注册表中。和Symbol()不同的是，用Symbol.for()方法创建的的symbol会被放入一个全局symbol注册表中。当然Symbol.for()并不是每次都会创建一个新的symbol，它会首先检查给定的key是否已经在注册表中了。假如是则会直接返回上次存储的那个，否则它会再新建一个。

key: 一个字符串，作为symbol注册表中与某symbol关联的键，同时也会作为该symbol的描述。

```
var s1 = Symbol.for();
var s2 = Symbol.for("s");
var s3 = Symbol.for();
var s4 = Symbol.for("s");
console.log(s1 === s3); // true
console.log(s2 === s4); // true
```



## 更多内容

文章链接：

- Js中Symbol对象https://blog.csdn.net/qq_40413670/article/details/109275529
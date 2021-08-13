### TypeScript 和 JavaScript 区别?

| TypeScript                                 | JavaScript             |
| ------------------------------------------ | ---------------------- |
| 支持强类型和静态类型                       | 不支持强类型和静态类型 |
| 支持泛型                                   | 不支持泛型             |
| 支持模块                                   | 不支持模块             |
| 支持可选参数                               | 不支持可选参数         |
| 面向对象编程语言，如接口、继承、类、泛型等 | 脚本语言               |



### 什么是TypeScript？

TypeScript是强类型的JavaScript超集，支持ES6语法，支持面向对象编程的概念，如类、接口、继承、范式等。TS并不直接在浏览器上运行，需要编译器编译成纯JS来运行。



### 为什么需要TypeScript？

1. 使用 ECMAScript 的新功能：TypeScript支持新的ECMAScript标准
2. 静态键入：JavaScript是动态类型的，在运行时实例化变量之前，不知道变量是什么类型。 TypeScript将类型支持添加到JavaScript。
3. 类型推断：通过使用类型推断，TypeScript使键入变得更容易
4. 严格的Null检查：错误，例如无法读取未定义的属性“ x”，在JavaScript编程中很常见。您可以避免大多数此类错误，因为不能使用TypeScript编译器不知道的变量。

总的来说，TS更规范，更严谨，更适合工程化开发。



### TypeScript的特性

1. 跨平台性好：TypeScript编译器可以安装在任何操作系统上，例如Windows，MacOS和Linux。
2. 面向对象的语言：TypeScript提供了诸如类，接口和模块之类的功能。
3. 静态类型检查：TypeScript使用静态类型，并在编译时帮助进行类型检查。
4. ES6功能：TypeScript包括计划的ECMAScript 2015（ES6，7）的大多数功能，例如类，接口，箭头功能等。



### 使用TypeScript有哪些缺点

1. 需要花较长时间来编译代码
2. 不支持抽象类
3. 要使用任何第三方库，定义文件是必须的



### TypeScript的组成部分是什么？

1. 语言，它由语法，关键词和类型注释组成。
2. TypeScript编译器，编译器（tsc）将用TypeScript编写的代码转换成等效的JavaScript
3. TypeScript语言服务，语言服务在核心编译器管道（类似于编辑器的应用程序）周围暴露了一个附加层。语言服务支持一组常见的典型编辑器操作。



### 如何编译TypeScript文件？

任何 TypeScript 文件的扩展名都是.ts。而且任何JavaScript文件都是 TypeScript 文件，因为它是 JavaScript 的超集。 因此，将“ .js”的扩展名更改为“ .ts”后，您的 TypeScript 文件就准备好了。

```
$ tsc <TypeScript File Name>

tsc xxxx.ts
```

> 如何把多个ts文件合并成一个js文件？
>
> 编译时，我们需要添加–outFILE [OutputJSFileName]选项
>
> ```
> tsc --outFile common.js file1.ts file2.ts file3.ts
> ```
>
> 如果您不提供输出文件名，则将编译 file2.ts 和 file3.ts 并将输出放置在 file1.ts 中。因此，现在您的 file1.ts 包含 JavaScript 代码。
>
> 
>
> 如何实时编译TS文件？
>
> --watch
>
> ```
> tsc --watch file1.ts
> ```



### TypeScript中的类型

类型系统表示**语言支持的不同类型的值**。它在程序存储或操作所提供的值之前检查其有效性。

它可以分为两种类型，

- 内置：包括数字(number)，字符串(string)，布尔值(boolean)，无效(void)，空值(null)和未定义(undefined)。
- 用户定义的：它包括枚举(enums)，类(classes)，接口(interfaces)，数组(arrays)和元组(tuple)。



### TypeScript支持以下面向对象的术语

- 模块（Modules）
- 类（Classes）
- 接口（Interfaces）
- 继承（Inheritance）
- 数据类型（Data Types）
- 成员函数（Member functions）



### TypeScript支持访问修饰性

访问修饰符public，private 和 protected，它们决定了类成员的可访问性。

- 公共（Public），类的所有成员，其子类以及该类的实例都可以访问。
- 受保护（Projected），该类及其子类的所有成员都可以访问它们。 但是该类的实例无法访问。
- 私有（Private），只有类的成员可以访问它们。



### 解释一下TypeScript中的装饰器

装饰器是一种特殊的声明，可以应用于类，方法，访问器，属性或参数。 装饰器是@expression符号前缀的函数，其中expression必须计算为一个函数，该函数将在运行时使用有关修饰声明的信息进行调用。

TypeScript装饰器的目的是以声明的方式将注释和元数据添加到现有代码中。



### 什么是TypeScript Definition Manager？为什么需要它？

TypeScript定义管理器（TSD）是一个程序包管理器，用于直接从社区驱动的DefinitelyTyped存储库中搜索和安装TypeScript定义文件。

TSD有助于我们获得所需框架的类型定义文件。

```
tsd query jquery --action install
```



###  解释一下tsconfig.json文件

tsconfig.json文件是JSON格式的文件。 在tsconfig.json文件中，您可以指定不同的选项来告诉编译器如何编译当前项目。 目录中包含tsconfig.json文件，表明该目录是TypeScript项目的根目录。



参考：

- https://www.jianshu.com/p/076ee2751cfc  2020你必须准备的50道Typescript面试题[转]



——————————————————————



### 在TS中编译错误时

在TypeScript中使用错误的语法，TS编译时即使报错了，但还是会生成编译结果。
如果要在报错时终止js文件的生成，可以在tsconfig.json中配置noEmitOnError即可



### 空值

JS中没有空值(void)的概念，在TS中，可以用void表示没有任何返回值的函数



### Null和Undefind

在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型

与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量

而`void`类型的变量不能赋值给`number`类型的变量



### 未声明类型的变量

变量如果在声明的时候，未指定其类型，未赋值（无法进行类型推论），那么它会被识别为任意值类型

类型推论：如果没有明确的指定类型，那么TS会按照类型推论的规则推断出一个类型

```tsx
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```



### 联合类型

一个变量可以是多个类型，用`|`进行分割。当变量是多个固定值的某一个时，也可以用这个来分割，规定变量只能是其中一个。	

当TS不确定联合类型的变量是哪个类型时，我们只能访问联合类型的公共属性或方法

联合类型在被赋值时，会通过类型推论推断出一个类型

```typescript
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```



### 类型断言

可以用来手动指定一个值的类型。

类型断言不是类型转换，它不会真的影响到变量的类型。

类型断言是开发者认定的类型，是在“欺骗”TS编译器的做法，但无法避免运行错误，滥用可能会导致运行时错误。

并不是任何一个类型都可以被断言为任何另一个类型。

具体来说，若 `A` 兼容 `B`，那么 `A` 能够被断言为 `B`，`B` 也能被断言为 `A`，这是个充要条件。

- 联合类型可以被断言为其中一个类型
- 父类可以被断言为子类
- 任何类型都可以被断言为 any
- any 可以被断言为任何类型

这四种都是上面充要条件的特殊情况

> TypeScript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系。
>
> ```tsx
> interface Animal {
>     name: string;
> }
> interface Cat {
>     name: string;
>     run(): void;
> }
> 
> let tom: Cat = {
>     name: 'Tom',
>     run: () => { console.log('run') }
> };
> let animal: Animal = tom;
> ```
>
> 在上面的例子中，`Cat` 包含了 `Animal` 中的所有属性，除此之外，它还有一个额外的方法 `run`。TypeScript 并不关心 `Cat` 和 `Animal` 之间定义时是什么关系，而只会看它们最终的结构有什么关系——所以它与 `Cat extends Animal` 是等价的：

**双重断言：**

若使用双重断言，则可以打破「要使得 `A` 能够被断言为 `B`，只需要 `A` 兼容 `B` 或 `B` 兼容 `A` 即可」的限制，将任何一个类型断言为任何另一个类型。

若你使用了这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误。

**除非迫不得已，千万别用双重断言。**

**泛型**：有时也可以添加泛型来规范变量，替代类型断言，减少any的使用



### 类型别名

类型别名用来给一个类型起个新名字

用type创建类型别名（包括联合类型）

```typescript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameReslver;

type choose = string | number;
type choose1 = 'a' | 'b' | 1;
```



### 数组的类型

有多种表示方法

1. 类型+方括号，可以约束项的类型，数组的一些方法的参数也会被约束

2. 数组泛型Array\<elemType>

3. 用接口来表示，但这样定义在TS中很多调用length，push这些方法属性会报错，但我们知道在JS里可以正常使用

   ```tsx
   interface NumberArray{
       [index:number]: number;
   }
   let fibonacci: NumberArray = [1, 1, 2, 3, 5];
   ```

   虽然这样也可以定义数组，但十分复杂，不过我们常用它来表示类数组

   如arguments，不能用普通的数组方式来描述，它用自己的接口定义IArguments



### 元组

基本概念：数组合并了相同类型的对象，而元组合并了不同类型的对象

但在JS，TS中，数组也能合并不同类型的对象

```typescript
let arr1: any[];
let arr2: (number|string)[];
```

但这与TS中的元组还是有区别的

```typescript
let tom: [string,number];
```

可以直接在初始化的时候赋值，也也可以只赋值其中一项，但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。

```typescript
let tom: [string, number] = ['Tom', 25]; // 可以

let tom: [string, number];
tom[0] = 'Tom'; // 可以

let tom: [string, number];
tom = ['Tom', 25]; // 可以

let tom: [string, number];
tom = ['Tom']; // 报错
```

元组内的类型必须一一对应，而数组不用。

当添加越界的元素时，它的类型会被限制为元组的每个类型组成的联合类型，这和数组是一致的。



### 对象的类型——接口

在TS中，我们使用接口(Interfaces)来定义对象的类型

> 什么是接口
>
> 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
>
> TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

```tsx
interface Person {
    name: string,
    age: number;
}

let tom:Person = {
    name:'Tom',
    age:18
}
// 不允许多一个属性，也不允许少一个属性，严格按照接口的内容来
```

**可选属性**：在定义接口时加个问号`?`

**任意属性**：[propName:string]: string（也可以是其他的类型）

关于任意属性的几个注意点

1. 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
2. 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
3. 也可以写成[propName:number]: xxx，对象的数字索引会自动转换成字符串，但写propName:any就不行
4. 任意属性自带`?`，也就是说任意属性本身也是可选属性
5. 任意属性构造时可以构造多个

**只读属性**：在定义变量前加个`readonly`

注意：只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候。也就是第一次给对象赋值时只读属性就要赋值，后续就不能对只读属性赋值



### 函数的类型

在 JavaScript 中，有两种常见的定义函数的方式——**函数声明**（Function Declaration）和**函数表达式**（Function Expression）：

```js
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};
```

**函数声明**

一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中**函数声明的类型定义**较简单

```typescript
function sum(x: number, y: number): number {
    return x + y;
}
// 输入多余的（或者少于要求的）参数，是不被允许的，返回错误类型也不允许
```

**函数表达式**

如果要我们现在写一个对函数表达式（Function Expression）的定义，可能会写成这样：

```ts
let mySum = function (x: number, y: number): number {
    return x + y;
};
```

这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 `mySum`，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 `mySum` 添加类型，则应该是这样：

```ts
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
```

注意不要混淆了 TypeScript 中的 `=>` 和 ES6 中的 `=>`。

在 TypeScript 的类型定义中，`=>` 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

还可以用**接口定义函数**，这样定义，可以使用函数的属性，方法

```typescript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

**可选参数**：也是用`?`表示，且可选参数后面不允许再出现必须参数了，可以出现可选参数

**参数默认值**： 平时我们用'='给函数添加默认值，**TypeScript 会将添加了默认值的参数识别为可选参数，且此时就不受「可选参数必须接在必需参数后面」的限制了**

**重载**

在TS中，重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

这就是之前标准的重载的定义，只是换了个说法。

这也是TS被称为面向对象编程的原因之一

这样，我们可以重载定义多个reverse的函数类型：

```tsx
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。

> 为什么不直接用第三行的写法呢，JS都可以这样写？
>
> 不添加前两行，就是不能够精确的表达函数的不同处理，函数看上去也意义不明，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。添加了后TS内部会知道你在用overload,会有函数定义注解提示，便于开发时理解，调用。





### 类

TypeScript中类可以使用三种修饰符：public、private和protected

- `public` 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 `public` 的
- `private` 修饰的属性或方法是私有的，不能在声明它的类的外部访问
- `protected` 修饰的属性或方法是受保护的，它和 `private` 类似，区别是它在子类中也是允许被访问的

readonly 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中

修饰符和`readonly`还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁

**抽象类**

`abstract` 用于定义抽象类和其中的抽象方法。

> 抽象类不允许被实例化，且抽象类的中的方法必须被子类实现。
>
> 抽象方法也必须被实现。

**类的类型**

给类加上 TypeScript 的类型很简单，与接口类似：

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a: Animal = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
```

**类与接口**

- 类实现接口
- 接口继承接口
- 接口继承类

接口继承类实际上是继承类的实例的类型，只会继承它的实例属性和实例方法。

所以「接口继承类」和「接口继承接口」没有什么本质的区别。



### 枚举

枚举（Enum）类型用来限制取值在一定范围内的场景，如一周只有七天等

依靠关键字enum

枚举成员会被赋值为从 `0` 开始递增的数字，同时也会对枚举值到枚举名进行反向映射

```typescript
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```

实际编译成JS为

```js
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
```

> 赋值表达式的返回值是等号右边的值
>
> 而声明语句的返回值是undefined

还可以手动给枚举的项赋值（用等号`=`），有以下情况：

- 未手动赋值的枚举项会接着上一个枚举项递增 + 1。
- 未手动赋值的枚举项与手动赋值的重复了，TS是不会察觉的，是会被覆盖的
- 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查 (编译出的 js 仍然是可用的)，但TS写的时候这个断言后面就不能跟枚举项了（因为TS无法获取前一个的初始值）
- 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长 + 1

**常数项和计算所得项**

枚举项有两种类型：常数项（constant member）和计算所得项（computed member）

```typescript
enum Color {Red, Green, Blue = "blue".length};
```

`"blue".length` 就是一个计算所得项

如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错（也体现在上述情况第三点）

当满足一定条件时，枚举成员才被当作常数，否则就被当作是需要计算才能得出的值。

条件包括数字字面量，带括号的常数枚举表达式，`+`, `-`, `~` 一元运算符应用于常数枚举表达式等等。

**常数枚举**

常数枚举是使用 `const enum` 定义的枚举类型

常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

```typescript
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

编译结果

```typescript
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
```

如果包含了计算成员，TS会直接报错

**外部枚举**

外部枚举（Ambient Enums）是使用 `declare enum` 定义的枚举类型。

外部枚举与声明语句一样，常出现在声明文件中。

同时使用外部枚举和常数枚举也是可以的(declare const enum)

> 这里还有点不理解 [https://ts.xcatliu.com/advanced/enum.html#%E5%A4%96%E9%83%A8%E6%9E%9A%E4%B8%BE](https://ts.xcatliu.com/advanced/enum.html#外部枚举)



### 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

使用：\< T >

**泛型约束**

一般来说，在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法

但我们可以对泛型进行约束，只允许这个函数传入那些包含 `length` 属性的变量。这就是泛型约束

```ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

泛型可以和接口、类结合，形成泛型接口，泛型类

**泛型参数的默认类型**

在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。

```ts
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
```



### 声明合并

如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型

函数的合并：就是之前学过的重载

接口的合并：

- 接口中的属性在合并时会简单的合并到一个接口中
- 合并的属性的类型必须是一致的
- 其中方法的合并，和函数的合并一样

类的合并：与接口的合并一样



### 总结：

学到的主要围绕**类型**展开

对类型进行补充优化的机制，比如有**联合类型**，**类型断言**，**类型别名**，**声明合并**等等

还有下面的

接口

元组

类

泛型

枚举



参考文章：

TypeScript入门教程 https://ts.xcatliu.com/introduction/index.html

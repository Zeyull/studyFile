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
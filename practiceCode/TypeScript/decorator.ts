//类装饰器
function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log("Hello Semlinker!");
  };
}

@Greeter
class Greeting {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greeting();
// myGreeting.greet();  console output: 'Hello Semlinker!';

// 属性描述符
function logProperty(target:Object, key:string){
  delete target[key];
  const backingField = '_' + key;

  Object.defineProperty(target,backingField,{
      writable:true,
      enumerable: true,
      configurable:true
  });

  const getter = function (this: any){
      const currVal = this[backingField];
      console.log(`Get: ${key} => ${currVal}`);
      return currVal;
  }
  const setter = function (this: any, newVal: any){
      console.log(`Set: ${key} => ${newVal}`);
      this[backingField] = newVal;
  }

  Object.defineProperty(target,key,{
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true    
  });
}

class Person {
    @logProperty
    public name: string;

    constructor(name: string){
      this.name = name;
    }
}

const p1 = new Person("semlinker");
p1.name = "kakuqo";

//方法装饰器
function LogOutput(target: any, key:string, descriptor: PropertyDescriptor){
    let originalMethod = descriptor.value;
    let newMethod = function(...args:any[]): any{
        let result:any = originalMethod.apply(this,args);
        if(!this.loggedOutPut){
            this.loggedOutPut = new Array<any>();
        }
        this.loggedOutPut.push({
            method:key,
            parameters: args,
            output: result,
            timestamp: new Date()
        });
        return result;
    }
    descriptor.value = newMethod;
}

class Calculator {
    @LogOutput
    double (num: number): number {
      return num * 2;
    }
}

let calc = new Calculator();
calc.double(11);
// console ouput: [{method: "double", output: 22, ...}]
// console.log(calc.loggedOutput); 

//属性装饰器
function Log(target: any, propertyKey: string, parameterIndex: number){
    let functionLogged = propertyKey || target.prototype.constructor.name;
    console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has
    been decorated`);
}

class Greeter2{
    greeting:string;
    constructor(@Log phrase: string){
        this.greeting = phrase;
    }
}
// console output: The parameter in position 0 
// at Greeter has been decorated

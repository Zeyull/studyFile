function sayHello(person: string){
    console.log(`hello ${person}`);
}

let user = 'Tom';
sayHello(user);

let myFavoriteNumber:string | number;
myFavoriteNumber = '3'
console.log(myFavoriteNumber.length);
myFavoriteNumber = 7;
console.log(myFavoriteNumber);

interface Person {
    name: string,
    age?: number,
    readonly id: string,
    [propName:string]: any;
}

let tom:Person = {
    name:'Tom',
    age: 18,
    id:'001',
    study: 'hard',
    study1: 'hard',
    study2: 'hard'
}

let arr1:number[]=[1,2,3,4];
let arr2:Array<number>=[1,2,3,4];
interface NumberArray{
    [index:number]:number
}
let arr3:NumberArray = [1,2,3,4];
// (arr3 as Array<Number>).push(3);

function sum(a:number,b:number = 2,c:number):number{
    return a + b + c;
}
let fnSum: (x:number,y:number) => number = function(x:number,y:number){
    return x + y;
}
interface FnSum{
    (x:number,y:number):number
}
let fnSum1:FnSum = function(x:number,y:number){
    return x + y;
}

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

let choose1: 'a' | 'b' | 1;
choose1 = 1;
type chooseType = string | number;
let choose2: chooseType;
choose2 = '1';

let arr4: (number|string)[];
arr4 = [1,2,'4'];

let arr5:[string,number];
arr5 = ['1',2];

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
enum Days1 {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat= arr1.length};

declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

interface Alarm {
    price: number | string;
}
interface Alarm {
    price: number | string;  // 类型不一致，会报错
    weight: number;
}
function Father(uname,age){
    this.uname = uname;
    this.age = age;
}
Father.prototype.money = 3000;


function Son(uname,age,grade){
    Father.call(this,uname,age);
    this.grade = grade;
}

Son.prototype = new Father();
var arr =  Object.keys(Son.prototype)
for(let item in arr){
    //但delete太耗时了
    console.log(arr[item]);
    delete Son.prototype[arr[item]];
}	
Son.prototype.constructor = Son;
Son.prototype.exam = 999;
var father = new Father('a',40);
var son = new Son('b',18,100);
console.log(father);
console.log(father.exam);
console.log(son);
console.log(son.money);
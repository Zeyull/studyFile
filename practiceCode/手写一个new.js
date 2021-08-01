function _new(fn,...args){
    const obj = Object.create(fn.prototype);
    const res = fn.apply(obj,args);
    return res instanceof Object ? res : obj;
}
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
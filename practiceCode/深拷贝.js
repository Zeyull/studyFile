// 进阶版：考虑了其他类型和循环引用
let obj = {
    test_obj:'obj'
}
let set = new Set([11,12,obj]);
let map = new Map([[12,13],[14,obj]])
let a = [1,2,3,[4,5,6,[7,8]],{'9':9,'10':10,'15':set},set,map]
let reg = /\w/;
let oldObj = {
    oldObj:a,
    b:1,
    reg_test:reg
}

function deepClone(target,hash = new WeakMap()){
    let result;
    if(typeof target === 'object'){
      if(hash.has(target))  return hash.get(target);
      if(target instanceof RegExp || target === null || target instanceof Function){
        result = target;
        hash.set(target, result);
    }else if(target instanceof Set){
        result = new Set();
        hash.set(target, result);
        for(let item of target){
            result.add(deepClone(item,hash));
        }
      }else if(target instanceof Map){
        result = new Map();
        hash.set(target, result);
        hash.set(target, result);
        for(let item of target){
            result.set(deepClone(item[0],hash),deepClone(item[1],hash));
        }
      }else if(target instanceof Array){
        result = [];
        hash.set(target, result);
        for(let item of target){
          result.push(deepClone(item,hash));
        }
      }else{
        result = {};
        hash.set(target, result);
        for(let item in target){
          result[item] = deepClone(target[item],hash);
        }
      }
    }else{
      result = target;
    }
    return result;
}

let newObj = deepClone(oldObj);
console.log(newObj);
obj.test_obj = "??????";
console.log(oldObj);
console.log(newObj);  
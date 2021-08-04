//  https://juejin.cn/post/6844903805876699150
const arr = [1,2,[3,4],['5',[6,'7'],'8'],9];

function flat_1(arr,res = []){
    for(let i of arr){
        if(typeof i !== 'object'){
            res.push(i);
        }else if(i instanceof Array){
            flat_1(i,res);
        }
    }
    return res;
}

function flat_2(arr){
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

function flat_3(input){
    const stack = [...input]; //保证不会破坏原数组
    const result = [];
    while (stack.length) {
      const first = stack.shift();
      if (Array.isArray(first)) {
        stack.unshift(...first);
      } else {
        result.push(first);
      }
    }
    return result;
}

function flat_4(arr){
    return arr.reduce((res,next) =>{
        return res.concat(Array.isArray(next)? flat_4(next) : next);
    },[]);
}

console.log(flat_1(arr));
console.log(flat_2(arr));
console.log(flat_3(arr));
console.log(flat_4(arr));

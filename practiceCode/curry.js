function curry_1(fn){
    const len = fn.length;
    let arr = [];
    return function curryFn(...param){
        if(arr.length >= len ){
            arr = [];
        }
        arr = arr.concat(param); 
        return arr.length >= len ? fn.apply(this,arr) : curryFn;
    }
}

function curry_2(fn,args = []){
    var length = fn.length;
    return function(...rest) {
      // 用的是_args进行接收传递，而没有用args，这样初始args始终为[]，不会出现上面需要清空数组的情况
      var _args = [...args, ...rest];
      return _args.length < length
        ? curry_2.call(this, fn, _args)
      : fn.apply(this, _args);
    }
}

var fn = curry_2(function(a, b, c) {
  console.log(a + b + c);
});
fn('a', 'b', 'c'); // abc
fn('a', 'b')('c'); // abc
fn('a')('b')('c'); // abc
// 第三版 实现new调用,考虑了低版本
Function.prototype.bindFn = function (thisArg){
    if(typeof this !== 'function'){
        throw new TypeError(this + ' must be a function');
    }
    // 存储调用bind的函数本身
    var self = this;
    // 去除thisArg的其他参数 转成数组
    var args = [].slice.call(arguments, 1);
    // 这里不能使用箭头函数，否则就不能被new调用
    var bound = function(){
        // bind返回的函数 的参数转成数组
        var boundArgs = [].slice.call(arguments);
        var finalArgs = args.concat(boundArgs);

        if(new.target){
            // 如果是箭头函数，直接抛出错误
            if(!self.prototype){
                throw new TypeError(`${self.name}.bind is not constructor`);
            }
            // 这里没有删除bound的prototype
            Object.setPrototypeOf(this,self.prototype);
            const result = self.apply(this, finalArgs);
            return result instanceof Object ? result : this;
        }
        else{
            return self.apply(thisArg, finalArgs);
        }
    };
    Object.defineProperties(bound, {
        'length': {
            value: self.length,
        },
        'name': {
            value: 'bound ' + self.name,
        }
    });
    return bound;
}

var obj = {
    name: '轩辕Rowboat',
};
function original(a, b){
    console.log('this', this); // original {}
    console.log('typeof this', typeof this); // object
    this.name = b;
    console.log('name', this.name); // 2
    console.log('this', this);  // original {name: 2}
    console.log([a, b]); // 1, 2
}

var bound = original.bindFn(obj, 1);
var newBoundResult = new bound(2);
console.log(newBoundResult, 'newBoundResult'); // original {name: 2}

console.dir(original.bind(this));
console.dir(original.bindFn(this));
// 有一点小瑕疵，问题不大，之后研究
// 参考文章 https://segmentfault.com/a/1190000017091983
const shoeObj = {
    //订阅者
    listen:[],
    //添加订阅者
    addListen(fn){
        this.listen.push(fn);
    },
    //发布消息
    trigger(...args){
        for(let item of this.listen){
            item.apply(this,args);
        }
    }
}

// 小红订阅如下消息
shoeObj.addListen(function(color,size){
    console.log("颜色是："+color);
    console.log("尺码是："+size);  
});

// 小花订阅如下消息
shoeObj.addListen(function(color,size){
    console.log("再次打印颜色是："+color);
    console.log("再次打印尺码是："+size); 
});
shoeObj.trigger("红色",40);
shoeObj.trigger("黑色",42);
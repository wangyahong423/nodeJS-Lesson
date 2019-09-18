const events = require("events");
const EventEmitter = events.EventEmitter;//没有实例化，就是用这个来继承EventEmitter的方法
function Dog(dogName){
    //1、执行一遍父构造函数，并且this指向是子构造函数的
    EventEmitter.call(this);//从父构造函数上指到子构造函数
    this.dogName = dogName;
    var that = this;
    setTimeout(function(){
        that.emit("bark");//触发了绑定在Dog实例化之后的对象dog上，在控制台输出结果
    },3000)
}
//2、子构造函数继承父构造函数prototype上面的相关方法
Dog.prototype.__proto__ = EventEmitter.prototype;
var dog = new Dog("kitty");//构造函数实例化
dog.on("bark",function(){//绑定事件
    console.log(this.dogName + " can bark");
})
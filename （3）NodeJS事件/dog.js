const events = require("events");
const EventEmitter = events.EventEmitter;
function Dog(name,energy){
    EventEmitter.call(this);//转到子构造函数中
    this.name = name;
    this.energy = energy;
    var that = this;
    var s = setInterval(function(){
        that.emit("bark");
        that.energy--;
        if(that.energy<0){
            clearInterval(s);
        }
    },1000)
}
Dog.prototype.__proto__ = EventEmitter.prototype;
var dog1 = new Dog("taidi",4);
var dog2 = new Dog("zangao",8);
dog1.on("bark",function(){
    console.log(this.name + " barked! energy: " + this.energy);
})
dog2.on("bark",function(){
    console.log(this.name + " barked! energy: " + this.energy);
})
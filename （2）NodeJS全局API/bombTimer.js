//实验二——程序③
//法一
/*
function Bomb(message){
    this.message = message;
    this.explode = setTimeout(function(){
        console.log(message);
    },2000)
}
var bomb = new Bomb("bomb!!!");
bomb.explode;
*/

//法二
function Bomb(){
    this.message = "bomb!!!!!";
}
//最好将对象的方法添加到对象的prototype属性上
Bomb.prototype.explode = function(){
    console.log(this.message);
}
var bomb = new Bomb();
setTimeout(bomb.explode.bind(bomb),2000);
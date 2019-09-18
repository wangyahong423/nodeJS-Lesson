function sayHello(){
    console.log("hello world");
}
function showName(){
    console.log(userName);
}
var userName = "zhangsan";

//如何对外公布方法？----利用module.exports
module.exports = {
    sayHello:sayHello,
    showName:showName
}
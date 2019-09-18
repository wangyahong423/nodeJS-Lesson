/** 
 * 自定义模块，自定义js文件，通过require来引入
 * require(相对路径)
 * 被引入模块通过module.exports来对外公布自己的一些方法和属性。
 * 主模块可以访问被引入模块公布的方法和属性。
*/

//首先引入模块
//childModule.js中的模块
// var child = require("./childModule.js");//这里的路径是相对路径
// console.log(child);
// child.sayHello();
// child.showName();

//引入circleModule.js中的模块一
var circle1 = require("./circleModule.js");
var r = process.argv[2];
console.log(circle1.circleFun(r));
console.log(circle1.circleFun(r).circumference);
console.log(circle1.circleFun(r).area);

//引入circleModule.js中的模块二
/*
var circle2 = require("./circleModule.js");
var r = process.argv[2];
console.log(circle2.area(r));
console.log(circle2.circumference(r));
*/


/**
 * 1、原生模块：随node环境安装就存在的
 * 2、自定义模块：自己编写的程序
 * 3、第三方模块：在命令行通过npm install安装的模块，从npm服务器上下载到本地的，直接require("data-now")
 */
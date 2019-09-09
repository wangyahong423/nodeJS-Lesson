/**
 * 调试：
 * 1、检测代码是否执行到console.log的位置
 * 2、可以输出一些变量的值，判断程序的执行状态
 */

 /**
  * 占位符：%d，%s，%j
  * %s用于输出字符串；
  * %d用于输出数字；
  * %j用于输出json数组（json是对象和数组的一个组合体）
  */
 var user = {
     username:"zhangsan",
     age:20,
     qq:"2976716563"
 }
console.log("username:%s",user.username);
console.log("age:%d",user.age);
console.log("qq:%s",user.qq);
console.log("user:%j",user);
/**
 * 1.传入命令行参数，是一个算数运算式，例如1*2+3
 * 2.程序将算术运算式计算得到的结果，并且在控制台输出
 *   在控制台输出的结构是：运算式+结果，例如1*2+3=5    这里用到eval()这个函数可以直接计算出结果
 * 3.程序判断一下是否传入了命令行参数，如果没有传入，控制输出提示信息“命令行参数错误！”
 */
//第一种方法：
 var agr1 = process.argv[2];
 var agr2 = process.argv[3]; 
if(agr1 == undefined){
    console.log("命令行参数错误！");
}
else if(agr1=="-h"){
    console.log("帮助：命令参数需为算术运算式");
}
else{
    console.log(agr1,agr2,eval(agr1));
}

//第二种方法：
var arg1 = process.argv[2];
if(arg1 == undefined){
    console.log("命令行参数错误！");
}
else if(arg1=="-h"){
    console.log("帮助：命令参数需为算术运算式");
}
else{
    var result = eval(arg1);
    console.log(agr1 + "=%s",result);
}


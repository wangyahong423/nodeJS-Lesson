/**
 * 可以在命令行输出一些信息，也可以接收一些信息、
 */

//  process.stdin.on("data",function(data){
//     console.log(data);
//  })

 var obj = {};
 var message = ["Name","Email","QQ","Mobile"];
 var i = 1;
 console.log(message[0] + ":");
 process.stdin.on("data",function(data){
   obj[message[i - 1]] = data.toString("utf8");//用obj对象来存取用户输入的对象
   if(i == 4){
      console.log(obj);
      process.exit();
   }
   else{
      console.log(message[i++] + ":");
   }
 })
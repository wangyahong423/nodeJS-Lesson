//实验二——程序①
const http = require("http");//请求一个原生模块
const fs = require("fs");//文件模块
const path = require("path");
//2、创建一个服务器
var server = http.createServer(function(req,res){
    //拼接绝对路径
    var htmlPath = path.join(__dirname,"/views/view.html");//这样写就不需要先识别所在操作系统的类别，也不需要根据类别的不同而使用转义符号等。
    console.log(htmlPath);//输出view.html文件的绝对路径
    var htmlContent = fs.readFileSync(htmlPath);//读取文件内容
    htmlContent = htmlContent.toString("utf8");//将读取到的文件内容转换为字符串
    console.log(htmlContent);//输出了view.html文件的全部内容
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
})
//3、服务监听一个端口
server.listen(8080);
console.log("server is listening 8080");
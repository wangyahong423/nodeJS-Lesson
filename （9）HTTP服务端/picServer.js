/**地址栏发起http请求    get请求
 * 超链接发起http请求    get请求
 * 提交表单发起请求    get请求、post请求都可以
 * ajax发起请求      也可以是get，也可以是post
 * <link href="">    get请求
 * <script src>    get请求
 * <img src=''>    get请求
 * 
 * get请求，向服务端传递的参数都在url里边呈现
 * http://localhost:8081/detail?newId=1&newTypt=1
 * var urlObj = url.parse(req.url,true)
 * urlObj.query.newId
 * 
 * post请求，数据存储在请求体里边，提交表单
 * req.on("data",function(chunk){})
 * req.on("end",function(){})
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

http.createServer((req,res) => {
    var urlObj = url.parse(req.url);//获取资源路径
    var pathName = urlObj.pathname;
    if(pathName == '/'){
        showIndex(res);
    }
    else if(pathName == '/list'){
        showList(res);
    }
    else if(pathName.indexOf("/image.jpg") >= 0){
        showImage(res);
    }
    else if(pathName == "/upload" && req.method == 'POST' ){
        uploadFile(req,res);
    }
    else if(pathName.indexOf("upload") >= 0 && req.method == 'GET'){
        var imgSrc = path.join(__dirname,pathName);
        var imgContent = fs.readFileSync(imgSrc);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.end(imgContent);
    }
    else if(pathName == '/getlist'){
        var files = fs.readdirSync(__dirname + '/upload');
        var fileStr = JSON.stringify(files);
        res.end(fileStr);
    }
}).listen(8081);
console.log("server is listening 8081");

function showIndex(res){
    var indexPath = path.join(__dirname,'/index.html');//得到文件路径
    //得到文件路径之后读取文件：
    var fileContent = fs.readFileSync(indexPath);//读取文件
    res.writeHead(200,{"Context-Type":"text/html"});
    res.end(fileContent);//将读取到的文件响应到响应对象
}
function showImage(res){
    var imagePath = path.join(__dirname,"/image.jpg");
    var imageContent = fs.readFileSync(imagePath);
    res.writeHead(200,{"Content-Type":"image/jpg"});
    res.end(imageContent);
}
function showList(res){
    var indexPath = path.join(__dirname,"list.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"textml"});
    res.end(fileContent);
}
function uploadFile(req,res){
    var dataStr = '';
    req.setEncoding("binary");
    req.on("data",function(chunk){
        dataStr += chunk;
    })
    req.on("end",function(){
        var totalArr = dataStr.split('\r\n');
        var bufArr = totalArr.slice(4,totalArr.length-2);
        var imgData = "";
        for(var i =0 ;i<bufArr.length;i++){
            imgData += bufArr[i];
        }
        var buf = Buffer.from(imgData,"binary");
        var timer = (new Date()).getTime();
        fs.writeFileSync(__dirname + "\\upload\\"+timer+".png",buf,{"encoding":"binary"});
        res.end("submint sucess");
    })
}
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
let {chapterList,userList} = require('./home');
const queryString = require('querystring');


/**
 * 思路：1
 * 1、页面呈现：
 * 访问特定资源路径时，显示对应页面，
 * 2、博客列表：
 *      数据从服务端来获取，不能写死 ，jquery ajax从服务器端获取数据，$.get("",function(data){})
 * 3、http://localhost:8083/detail?chapterId=
 * 
 * 4、文章详情页，$.get("",function(){})
 * 
 */


http.createServer((req,res) => {
    var urlObj = url.parse(req.url);//获取资源路径
    var pathName = urlObj.pathname;
    if(pathName == '/list'){
        var listPath = path.join(__dirname,'/chapterList.html');
        var listContent = fs.readFileSync(listPath);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(listContent);
    }
    else if(pathName == '/login'){
        var loginPath = path.join(__dirname,'/login.html');
        var loginContent = fs.readFileSync(loginPath);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(loginContent);
    }
    else if(pathName == '/listmanager'){
        var managerPath = path.join(__dirname,'/list.html');
        var managerContent = fs.readFileSync(managerPath);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(managerContent);
    }
    else if(pathName == '/addChapter'){
        var addPath = path.join(__dirname,'/addChapter.html');
        var addContent = fs.readFileSync(addPath);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(addContent);
    }else if(pathName.indexOf("css") >= 0){
        var cssPath = path.join(__dirname,pathName);
        var cssContent = fs.readFileSync(cssPath);
        res.writeHead(200,{"Content-Type":"text/css"});
        res.end(cssContent);
    }else if(pathName.indexOf("js") >= 0){
        var jsPath = path.join(__dirname,pathName);
        var jsContent = fs.readFileSync(jsPath);
        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.end(jsContent);
    }else if(pathName.indexOf("jpg") >= 0 || pathName.indexOf("jpeg") >= 0){
        var imagesPath = path.join(__dirname,pathName);
        var imagesContent = fs.readFileSync(imagesPath);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        res.end(imagesContent);
    }

    else if(pathName.indexOf("png") >= 0){
        var imagesPath = path.join(__dirname,pathName);
        var imagesContent = fs.readFileSync(imagesPath);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.end(imagesContent);
    }else if(pathName == "/getdata"){ 
        var str = JSON.stringify(chapterList);//将这个数组转换为字符串
        console.log(str);
        res.end(str);
    }else if(pathName == '/detail'){
        var detailPath = path.join(__dirname, "/chapter.html");
        var detailContent = fs.readFileSync(detailPath);
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end(detailContent);
    }
    else if (pathName == '/getDetail') {
        //阅读更多
        console.log(urlObj.query)
        console.log(queryString.parse(urlObj.query).chapterId,11111);
        var chapterId = queryString.parse(urlObj.query).chapterId;
        var deList = [];
        chapterList.forEach((data, index) => {
            if (data.chapterId == chapterId) {
                deList.push(data);
            }
        })
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var str = JSON.stringify(deList);
        res.end(str);

    }else if(pathName == "/getlogin"){
        var dataStr = "";
        req.on("data", function (chunk) {
            dataStr += chunk;
        });
        req.on("end",function(){
            var d = queryString.parse(dataStr);
            // console.log(dataStr)
            var username = d.username;
            var password = d.password;
            // console.log(username);
            // console.log(password);
            for(var i=0;i<userList.length;i++){
                if(username == userList[i].username && password == userList[i].pwd){
                    data = 1;
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(data));
                    return;
                }
                else{
                    data = 0;
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(data));
                }
            }
            
        })
    }else if(pathName == '/add'){
        //添加文章
        var addData = "";//将获取到的用户添加的东西保存为字符串的形式
        req.on("data", function (chunk) {
            addData += chunk;
        });
        req.on("end", function () {
            var add = queryString.parse(addData);//将获取到的数据转换为JavaScript对象
            var title = add.title;
            var content = add.content;
            var date = new Date();
            var newData = {
                "chapterId": chapterList[chapterList.length - 1].chapterId + 1,
                "chapterName": title,
                "imgPath": "",
                "chapterDes": content,
                "chapterContent": content,
                "publishTimer": `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                "author": "admin",
                "views": 0
            }
            chapterList.push(newData);
            data = { code: 0 };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        });
    }
}).listen(8083);
console.log("server is listening 8083");
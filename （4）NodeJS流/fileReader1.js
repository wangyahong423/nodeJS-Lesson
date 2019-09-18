//实验五————任务一
const http = require("http");
const fs = require("fs");
const path = require("path");
var file1 = process.argv[2];
var pathFile = path.join(__dirname,"/" + file1);
http.createServer(function(req,res){
    if(file1 == undefined){
        /**
         * fs.readFile()是一个异步方法，执行到该句的时候不会等待文件的读取完成就直接执行后边的语句。
         * 回调函数是等到文件读取完成之后才执行的
         */
        fs.readFile(process.argv[1],function(err,data){
            if (err){
                console.log(err);
            }
            else{
                res.end(data.toString());
            }
        })
    }
    else{
        if(fs.existsSync(pathFile)){
            fs.readFile(pathFile,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            console.log("文件不存在");
        }
    }
}).listen(8081);
console.log("Server is listening 8081");
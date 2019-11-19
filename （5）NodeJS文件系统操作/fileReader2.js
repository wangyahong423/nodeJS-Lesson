//实验五————任务二
const http = require("http");
const fs = require("fs");
const path = require("path");
var file1 = process.argv[2];

http.createServer(function(req,res){
    if(process.argv[2] != undefined){
        var pathFile = path.join(__dirname,"/" + file1);
        fs.readFile(pathFile,function(err,data){
            if(err){
                console.log(err);
            }
            else{
                /*
                var fid = fs.openSync(pathFile,"r+");
                var buf = Buffer.alloc(1000);
                var len = fs.statSync(pathFile).size;
                fs.readSync(fid,buf,0,len,0);
                fs.closeSync(fid);
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(buf.toString());
                res.end();*/

                fs.open(process.argv[2],"r+",function(err,fd){
                    var statObj = fs.statSync(process.argv[1]);
                    var buf = Buffer.alloc(statObj.size);
                    fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                        if(err){
                            console.log(err);
                        }
                        else{
                            res.end(buf.toString());
                            fs.closeSync(fd);
                        }
                    });
                })
            }
        });
    }
    else{
        var pathFile = path.join(__dirname,"/fileReader2.js");
        console.log(pathFile);
        var fid = fs.openSync(pathFile,"r+");
        var buf = Buffer.alloc(10000);
        var len = fs.statSync(pathFile).size;
        fs.readSync(fid,buf,0,len,0);
        fs.closeSync(fid);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(buf.toString());
        res.end();
    }
}).listen(8082);
console.log("Server is listening 8082");
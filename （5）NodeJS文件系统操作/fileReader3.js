//实验五————任务三
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
                var content = fs.createReadStream(pathFile);
                content.pipe(res);
            }
        });
    }
    else{
        var pathFile = path.join(__dirname,"/fileReader3.js");
        var content = fs.createReadStream(pathFile);
        content.pipe(res);
    }
}).listen(8082);
console.log("Server is listening 8082");
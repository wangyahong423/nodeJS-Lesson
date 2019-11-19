const http = require("http");
const querystring = require("querystring");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    var data = "";
    req.on("data",function(chunk){
        data += chunk;
    })
    req.on("end",function(){
        //console.log(data);
        var ele = querystring.parse(data);
        //console.log(ele);
        check(ele);
    })
}).listen(8081);

function check(ele){
    var fp = path.join(__dirname,"data.json");
    var fc = fs.readFileSync(fp);
    fc = fc.toString("utf8");
    fc = JSON.parse(fc);
    for(var i=0;i<fc.length;i++){
        if(ele.username == fc[i].username && ele.pwd == fc[i].pwd){
            console.log("登陆成功");
            return;
        }else{
            continue;
        }
    }
    console.log("用户名，密码不正确");
    //console.log(fc);
}

console.log("server is listen 8081");
var http = require("http");
var fs = require("fs");
var path = require("path");
http.createServer(function(req,res){
    var pathImg = path.join(__dirname,"/1.png");
    var imgBuffer = fs.readFileSync(pathImg);
    var base64Img = imgBuffer.toString("base64");
    var imgSrc = "data:image/png;base64," + base64Img;
    var htmlStr = "</DOCTYPE html><head></head>" + "<body><img src='" + imgSrc + "' /></body>" + "</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlStr);
    res.end();
}).listen(8081);
console.log("server is listening 8081!");
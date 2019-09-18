//实验④————任务二

const http = require("http");
const fs = require("fs");
const path = require("path");
var dataPath = path.join(__dirname,"/data.txt");
http.createServer(function(req,res){
    var readData = fs.createReadStream(dataPath);
    readData.pipe(res);
}).listen(8081);
console.log("Server is listening 8081");




//1、创建server  读取index.html，响应到客户端显示。
//2、在页面发起ajax请求，获取数据。服务端接收到ajax请求，去猫眼网站上爬取页面。
//   使用cheerio解析得到需要的数据，存储到数据里面，响应到客户端。
//3、在ajax回调函数中使用响应到的数据，拼接到页面上显示。
const http = require("http");
const fs = require("fs");
const url = require("url");
const https = require("https");//用它来发起请求

const cheerio = require("cheerio");

// var apiUrl = "https://maoyan.com/films";
//发请求之前，需要把url处理一下，因为有中文

// apiUrl = encodeURI(apiUrl);

// const $ = cheerio.load("<th></th>");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;//从urlObj对象上提取pathname属性
    if(pathName == "/"){
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName == "/getlist"){
        https.get("https://maoyan.com/films",function(resObj){
            var result = "";
            resObj.on("data",function(chunk){
                result += chunk;
            })
            resObj.on("end",function(){
                // console.log(result);
                var $ = cheerio.load(result);
                var movieList = [];
                $(".movie-item-title a").each(function(){
                    var movie = {};
                    // attr() 方法设置或返回被选元素的属性值。attr() 方法设置或返回被选元素的属性值。
                    movie.movieId = $(this).attr("data-val").slice(9,-1);
                    movie.movieName = $(this).text();
                    // movie.movieRange = $(this).parent().next().text();
                    if(isNaN(parseInt($(this).parent().next().text()))){
                        movie.movieRange = "暂无评分";
                    }
                    else{
                        movie.movieRange = $(this).parent().next();
                    }
                    movie.movieRange =  "暂无评分";
                    console.log(movie);
                    movieList.push(movie);
                });
                resObj.writeHead(200,{"Content-Type":"text/html"});
                resObj.write(movieList);
                resObj.end(result);  
            })
        })
    }
}).listen(8081);
console.log("Server is listening 8081");

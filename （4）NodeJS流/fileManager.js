//实验五————任务四
const fs = require("fs");
const path = require("path");
console.log("请输入要创建的文件夹：");
process.stdin.on("data",function(data) {
    var cmd = data.toString();
    var cmdArr = cmd.split(" ");
    console.log(cmdArr);
    switch(cmdArr[0]){
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            var p = path.join(__dirname,"/"+cmdArr[1].slice(0,-2));
            if(fs.existsSync(p)){
                console.log("文件目录创建成功！");
            }
            console.log("请输入要创建的文件：");
            break;
        case "touch":
            var filePath = path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(filePath,"hello node");
            if(fs.existsSync(filePath)){
                console.log("文件创建成功！");
            }
            console.log("请输入要删除的文件：");
            break;
        case "delete":
            var filePath = path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(filePath);
            if(!fs.existsSync(filePath)){
                console.log("文件删除成功！");
            }
            break;
        default:
            console.log("something error");
            break;
    }
})

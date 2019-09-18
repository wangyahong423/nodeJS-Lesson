//实验五————任务五
const fs=require("fs");
const path=require("path");

// fs.rmdirSync("filedir");非空情况下不可以删除
var fileName=process.argv[2];
var pathName=path.join(__dirname,fileName);

//判断文件件里面是否是空的，递归
if(fs.existsSync(pathName)){
        var statObj=fs.statSync(pathName);
        if(statObj.isFile()){
            fs.unlinkSync(pathName);
        }
        else{
            delDir(pathName);
        }
}
else{
    console.log("not exist");
}

function delDir(pathName){
    var files = fs.readFileSync(pathName);
    for(var i = 0;i < files.length;i++){
        var pathName1 = path.join(pathName,files[i]);
        var statObj = fs.statSync(pathName1);
        if(statObj.isFile()){
            fs.unlinkSync(pathName1);
        }
        else if(statObj.isDirectory()){
            delDir(pathName1);
        }
    }
    fs.rmdirSync(pathName);
}
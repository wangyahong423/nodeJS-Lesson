//实验④————任务三
const stream = require("stream");
var MyReader = new stream.Readable();
for(var i=97;i<=122;i++){
    var si = String.fromCharCode(i);
    MyReader.push(si);
}
MyReader.push(null);
MyReader.pipe(process.stdout);


//实验④————任务四
/**
 * 流是处理流式数据的一种抽象接口；流是一种数据传输的方式，可以将数据从一个位置传输到另一个位置。
 * 它的工作方式：
 * 1、引入文件模型、路径模型等
 * 2、通过fs.createReadStream(sourceFile)读取sourseFile文件内容
 * 3、通过fs.createWriteStream(destFile)将之前读取到的sourceFile文件内容写入目标文件destFile
 * 4、通过pipe()方法进行管道传输，将数据从sourceFile中传输到destFile
 */
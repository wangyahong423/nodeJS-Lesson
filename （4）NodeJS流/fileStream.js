//实验④————任务一

const fs = require("fs");
const path = require("path");
var filePathFrom = path.join(__dirname,"/from.txt");
var filePathTo = path.join(__dirname,"/to.txt");
var readFile = fs.createReadStream(filePathFrom);
// readFileUpper = readFile.toUpperCase();
var writeFile = fs.createWriteStream(filePathTo);
readFile.pipe(writeFile);
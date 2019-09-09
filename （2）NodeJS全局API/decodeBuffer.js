var base64Str = 'emhhbmdzYW46MTIzNDU2';
var buf2 = Buffer.from(base64Str,"base64");//从base64转换为utf-8
console.log(buf2.toString("utf8"));//读取

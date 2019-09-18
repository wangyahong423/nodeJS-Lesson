// 模块一：

var c = {};
var a = ["circumference","area"];
function circleFun(r){
    this.r = r;
    circumference=function(){
        return 2*Math.PI*r;
    };
    area = function(){
        return Math.PI*r*r;
    }
    c[a[0]] = circumference(r);
    c[a[1]] = area(r);
    return c;
}
module.exports = {
    circleFun:circleFun
}


//模块二：
/*
function circumference(r){
    return 2*Math.PI*r;
}
function area(r){
    return Math.PI*r*r;
}
module.exports = {
    circumference:circumference,
    area:area
}
*/
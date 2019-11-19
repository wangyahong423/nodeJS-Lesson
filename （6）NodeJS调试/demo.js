const fs = require("fs");

try{
    fs.readFile(__filename,function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }

    });
}catch(error){
    console.log(error.message);
}

process.on("uncaughtException",function(err){
    if(err){
        console.log(err);
    }
})
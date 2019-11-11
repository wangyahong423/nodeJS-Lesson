var express = require('express');
var {users,chapterList} = require('../data.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',(req,res,next) => {
  var username = req.body.username;
  var pwd = req.body.pwd;
  for(var i = 0;i<users.length;i++){
    if(username == users[i].username && pwd == users[i].password){
      res.render('list',{chapterList:chapterList})
    }

    else{
      res.end("用户名或密码错误！");
    }
  }
})

module.exports = router;

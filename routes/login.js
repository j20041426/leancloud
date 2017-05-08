var express = require('express');
var router = express.Router();
var AV = require('leancloud-storage');

router.post('/', function(req, res, next) {
  AV.User.logIn(req.body.username, req.body.password).then(function (loginedUser) {
    res.json({res:0, msg:'login successful'});
  }, function (error) {
    console.log(error.code);
    res.json({res:1, msg:error.code});
  });
});

module.exports = router;

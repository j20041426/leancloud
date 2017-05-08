var express = require('express');
var router = express.Router();
var AV = require('leancloud-storage');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var APP_ID = 'O1omJYatYKWfIOV3hQl4EtQR-gzGzoHsz';
  var APP_KEY = 'ohRiLEwSumhibTPCP8gnH66V';
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
  var user = new AV.User();
  user.setUsername(req.body.username);
  user.setPassword(req.body.password);
  user.signUp().then(function (loginedUser) {
    res.json({
      res: 0,
      msg: '成功'
    });
  }, (function (error) {
    res.json({
      res: 1,
      msg: '失败'
    });
  }));
});

module.exports = router;

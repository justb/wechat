var express = require('express');
var router = express.Router();

/* GET home page. */
var OAuth = require('wechat-oauth');
var client = new OAuth('wx0d215ec078c80bc0', 'a6ee3f5b61b3ee85307840f5853d2785');
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  
  
  var url = client.getAuthorizeURL('http://wechat.kim1.kim/home', 'state', 'snsapi_userinfo');
  console.log(url)
  res.redirect(url)



});

router.get('/home', function (req, res, next) {
  client.getAccessToken(req.query.code, function (err, result) {
    console.log(result)
    var accessToken = result.data.access_token;
    var openid = result.data.openid;
    client.getUser(openid, function (err, result) {
      var userInfo = result;
      
      res.send(result);
    });
  });

})

module.exports = router;
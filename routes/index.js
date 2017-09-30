var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var OAuth = require('wechat-oauth');
  var client = new OAuth('wx0d215ec078c80bc0', 'a6ee3f5b61b3ee85307840f5853d2785');
  var url = client.getAuthorizeURL('redirectUrl', 'state', 'scope');
  res.redirect(url)
  client.getAccessToken('code', function (err, result) {
    var accessToken = result.data.access_token;
    var openid = result.data.openid;
  });
  client.getUser(openid, function (err, result) {
    var userInfo = result;
    console.log(result)
  });
});

module.exports = router;

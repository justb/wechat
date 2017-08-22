var express = require('express');
var router = express.Router();
var wx = require('../config/wechat');

// var OAuth = require('wechat-oauth');
// var api = new OAuth(wx['appid'], wx['secret']);

// var url = api.getAuthorizeURL('http://101.132.38.190/wechat', 'state', 'snsapi_userinfo');
// var options = {
//   maxAge: 1000 * 60 * 30,
//   httpOnly: false
// }
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("index");
  // api.getAccessToken(req.query.code, function (err, result) {
  //   if (err != null) {
  //     res.redirect('/wechat');
  //   } else {

  //     var ak = result.data.access_token;
  //     var openid = result.data.openid;
  //     res.cookie('kt_openid', openid, options)

  //     api.getUser(openid, function (err, result) {
  //       res.render('index', {
  //         title: 'KT足球'
  //       });
  //       // axios.post(config["bucky"]["host"] + '/api/v1/users/signup/oauth?app_key=' + config["bucky"]["app_key"],
  //       //   querystring.stringify({
  //       //     openid: result.openid,
  //       //     source: 'wechat',
  //       //     unionid: result.unionid,
  //       //     source_name: result.nickname,
  //       //     source_avatar: result.headimgurl
  //       //   }))
  //       //   .then(function (response) {
  //       //     res.cookie('kt_wx_info', JSON.stringify(result), options)
  //       //     res.cookie('kt_user_info', JSON.stringify(response.data), options)

  //       //     res.render('index.html', {
  //       //       title: 'KT足球'
  //       //     });
  //       //   })
  //       //   .catch(function (error) {
  //       //     console.log(error);
  //       //   });

  //     });
  //   }
  // })
});

module.exports = router;

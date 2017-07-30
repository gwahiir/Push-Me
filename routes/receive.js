var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var sendMessage = require('../public/javascripts/sendmessage');


var sendRequest = function(req, res, next) {
  sendMessage.connectGCM();
  next();
}

router.use(sendRequest);

/* GET receive listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with receipt');
});

router.post('/', function(req, res, next) {
    res.send(req.body);
    console.log(req.body);
});





module.exports = router;

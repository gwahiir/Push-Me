var express = require('express');
var router = express.Router();

/* GET send listing. */
router.get('/', function(req, res, next) {
  res.send('respond with receipt');
});

module.exports = router;

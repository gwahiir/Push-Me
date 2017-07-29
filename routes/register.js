var express = require('express');
var router = express.Router();

/* GET register listing. */
router.get('/', function(req, res, next) {
  res.send("200");
  console.log("test");
});

module.exports = router;

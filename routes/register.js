var express = require('express');
var router = express.Router();

/* GET register listing. */
router.get('/', function(req, res, next) {
  res.send("response - ");
});

router.post('/', function(req, res, next) {
  res.send(req.body);
  console.log(req.body);
});

module.exports = router;

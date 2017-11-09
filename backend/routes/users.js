let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

let user = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
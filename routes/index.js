var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/dashboard', function (req, res, next) {
  res.render('error', {
    message: 'Ini Error',
    error: {
      status: 404,
      stack: 'Ini Stack',
    },
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test', function(req, res, next){
	let testData = {"gsm": [{"mcc": 262,"mnc": 1,"lac": 5126,"cid": 21857}]}

});

module.exports = router;

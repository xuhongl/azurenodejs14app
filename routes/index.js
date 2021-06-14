var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

console.log('routeMessage1'); 
console.log('routeMessage2'); 
console.log('routeMessage3'); 
console.log('routeMessage4'); 
console.log('routeMessage5'); 
module.exports = router;

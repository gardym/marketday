var moment = require('moment');

/*
 * GET home page.
 */

var isItThursday = function() {
  return (parseInt(moment().format('d')) === 4);
};

exports.index = function(req, res){
  var isItMarketDay = isItThursday();
  res.render('index', { title: 'Express', isItMarketDay: isItMarketDay });
};

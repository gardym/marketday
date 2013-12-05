var moment = require('moment');

function isItThursday() {
  return moment().day() === 4;
}

function isItAWeekDay() {
  var dayOfWeek = moment().day();
  return dayOfWeek > 0 && dayOfWeek < 6;
}

function isItDecember() {
  return moment().month() === 11;
}

function isItAWeekDayInDecember() {
  return isItAWeekDay() && isItDecember();
}

function getRandomArrayElement(ary) {
  return ary[parseInt(Math.random() * ary.length)];
}

var encouragement = [
  "Heck yes!",
  "You know it",
  "Ohhhhh it's market day, alright",
  "*YOU'RE* market day",
  "Get off my lawn",
  "Now with 400% more market days!"
];

function getRandomEncouragement() {
  return getRandomArrayElement(encouragement);
}

var diss = [
  "Sucks to be you"
];

function getRandomDiss() {
  return getRandomArrayElement(diss);
}

function isItMarketDay() {
  return isItAWeekDayInDecember() || isItThursday();
};

exports.index = function(req, res) {
  var message = isItMarketDay() ? getRandomEncouragement() : getRandomDiss();

  res.render('index', {
    title: 'Express',
    isItMarketDay: isItMarketDay(),
    message: message
  });
};

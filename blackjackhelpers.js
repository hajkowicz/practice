"use strict";
var getCard = function () {
    return getRandomInt(1, 12);
};
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
var getSum = function (cards) {
    var sum = 0;
    for (var i = 0; i < cards.length; i++) {
        sum = sum + cards[i];
    }
    return sum;
};
module.exports.getCard = getCard;
module.exports.getSum = getSum;

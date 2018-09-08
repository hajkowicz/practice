_.last = function(array, n) {
  var result = [];
  if (n === undefined) {
    return array[array.length - 1];
  }
  var m;
  if (array.length < n) {
    m = array.length;
  } else {
    m = n;
  }
  var last = array.slice(-m);
  result.push(last);

  return result;
};
var sampleArray = [0, 1, 2, 3, 4, 5]
var lastThree = _.last(sampleArray, 3);
console.log(lastThree);

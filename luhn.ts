// 1. reverse the order of the digits
// 2. s1 = sum of all the odd digits (space 1 + space 3 + ...)
// 3. Take the even digits, multiply each digit by 2, sum the 2 digits if answer is >9
// 4. s2 = sum of all the even digits
// 5. If s1 + s2 ENDS in 0, then the number passes the Luhn Test

//Step 1

var convertString = function(param1: number): string {
  return param1.toString();
};

var convertNumber = function(param2: string): number {
  return Number(param2);
};

var reverseOrder = function(param: number): string {
  var createString = convertString(param);
  var stringLength = createString.length;
  var result = "";
  var result2 = "";
  var finalResult = "";
  for (var i = 0; i < createString.length; i++) {
    result = createString[i];
    result2 = createString[stringLength - 1];
    result = result2;
    finalResult += result;
    stringLength--;
  }
  return finalResult;
};

var isEven = function(num: number): boolean {
  return num % 2 === 0;
};
var isOdd = function(num: number): boolean {
  return num % 2 !== 0;
};

var pickEven = function(param: string): string {
  var result = "";
  var finalResult = "";
  for (var i = 1; i < param.length; i += 2) {
    if (convertNumber(param[i])) {
      result = param[i];
      finalResult += result;
    }
  }
  return finalResult;
};

var pickOdd = function(param: string): string {
  var result = "";
  var finalResult = "";
  for (var i = 0; i < param.length; i += 2) {
    if (convertNumber(param[i])) {
      result = param[i];
      finalResult += result;
    }
  }
  return finalResult;
};

var sumOdd = function(word: string): number {
  var result = 0;
  var finalResult = 0;
  for (var i = 0; i < word.length; i++) {
    result = convertNumber(word[i]);
    finalResult += result;
  }
  return finalResult;
};

var sumEven = function(word: string): number {
  var result = 0;
  var finalResult = 0;
  for (var i = 0; i < word.length; i++) {
    result = convertNumber(word[i]) * 2;
    if (result > 9) {
      var changeString = convertString(result);
      var final = 0;
      for (var j = 0; j < changeString.length; j++) {
        result = convertNumber(changeString[j]);
        final += result;
        result = 0;
      }
      finalResult += final;
    }
    finalResult += result;
  }
  return finalResult;
};



var example = 1234567812345670;
var s1 = sumOdd(pickOdd(reverseOrder(example)));
var s2 = sumEven(pickEven(reverseOrder(example)));
var totalSum = s2 + s1;

var stringForm = convertString(totalSum);
var lastNumber = convertNumber(stringForm[stringForm.length - 1]);
  if (lastNumber === 0){
    console.log("You have a VALID Credit Card!")
  } else {
    console.log("Go away you fraud.")
  }

//console.log(s1);
//console.log(s2);
console.log(totalSum);

//var solution = (reverseOrder(123456789));
//if (typeof solution === 'number') {
//  console.log("You are amazing")
//} else {
//  console.log("Nope.")
//}

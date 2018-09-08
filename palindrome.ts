var isPalindrome = function(param: string): boolean {
var stringLength = param.length;

  for (var i = 0; i < stringLength; i++) {
    if (param[i] === param[stringLength - 1]) {
      stringLength--;
    }
    else {
      return false
    }
  }
  return true;
}

console.log(isPalindrome('mrowlatemymetalworm'));

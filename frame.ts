
var getMax = function(param: Array<string>): number {
var length = 0;
var initialValue = 0;
  for (var i = 0; i < param.length; i++) {
    length = param[i].length;
    if (length > initialValue) {
      initialValue = length;
    }
  }
  return initialValue;
}
//(max length + 2) - (length of array element) = number of spaces before 2nd asterisk
var createPicture = function(array: Array<string>): void {
  var maxLength = getMax(array);
  var result = "";
  for (var i = 0; i < maxLength + 2; i++) {
    result += "*";
  }
  console.log(result);
  for (var i = 0; i < array.length; i++) {
    var numberSpaces = maxLength - array[i].length;
    var spaces = ''
    for (var j = 0; j < numberSpaces; j++) {
      spaces += ' ';
    }
    console.log('*' + array[i] + spaces + '*'); // print elements of array in their own lines, adds asterisks
  }
  console.log(result);
};
createPicture(["Hello", "World", "in", "a", "frame"]);
createPicture(["Bienvenidos", "A", "La", "Mundo", "del", "Tyler"]);
createPicture(["I", "see", "what", "you", "are", "saying."])
createPicture(["I", "ran", "totally", "bananahammocks", "on", "your", "ass."])

var reverseString = function(d: string): string {
  var result = "";
  for (var i = 0; i < d.length; i++) {
    var initial = d[i];
    initial = d[d.length - (i + 1)];
    result += initial;
  }
  return result;
};

console.log(reverseString("Tyler"));

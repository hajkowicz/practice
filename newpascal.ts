//Create a generateTriangle function that generates a triangle with ones in all positions such as
//> input: `generateTriangle(3)`
//> output: `[[1], [1, 1], [1, 1, 1]]`

var generateTriangle = function(numRows: number): Array<Array<number>> {
  var final = [];
  //loop through creating rows
  for (var i = 0; i < numRows; i++) {
    var result = [];
    result.push(1);
    final.push(result);
    //loop through to create triangle 
    for (var j = 0; j < i; j++) {
      if (i === 0){
        result.push(1);
      }
      if (i === 1){
        result.push(1);
      }
      if (i === j){
        result.push(1);
      } else if (i > 1 && j > 0){
        var inner = final[i-1][j-1] + final[i-1][j];
        console.log(inner);
        result.push(inner);
      }
    };
  };
  return final;
};
console.log(generateTriangle(4));

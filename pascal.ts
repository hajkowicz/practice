//Pascals Triangle
// 1. input # of rows
// 2. output a pascal triangle

var numberRows = 3;
var inner = [];
var totalArray = [];
var parentSum = 0;
// loops through printing each row
for (var i = 0; i < numberRows; i++) {
  inner.push(1);
  //console.log(inner);

    for (var j = 0; j < numberRows - 1; j++) {
      if(j = 0){
        break;
      }
      if(j = numberRows - 1){
        break; 
      }
      parentSum = inner[i+1] + inner[j];
      console.log(parentSum);
    }
    inner.push(parentSum);
    totalArray.push(inner);
}

//console.log(totalArray);

// if numberRows = 1, expect [1]
// if numberRows = 3, expect [1]
//                         [1][1]
//                       [1][2][1]
//    [[1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1] ]

// if i = 2, j = 1;  parent1: i=1, j=0, parent2 = i=1, j=1;
// if i = 3, j = 1;  parent1: i=2, j=0, parent2 = i=2, j=1;
// if i = 4, j = 2;  parent1: i=3, j=1, parent2 = i=3, j=2;

// triangle[3][2]

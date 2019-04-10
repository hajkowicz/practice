/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.

 1.
 *
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Gotcha ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *
 */

var characterFrequency = function(string: string): Array<Array<string>> {
  var result = [];
  for (var i = 0; i < string.length; i++) {
   var array = [];
   array.push(string[i]);
    for (var j = 0; j < array.length; j++) {
        
    }
      if (result[i] !== string[i]){
        result.push(string[i]);
      }

    result.push(string[i]);
  }
  return result;
};

console.log(characterFrequency('mississippi'));




var transform = function(arr: Array<number>): number {
    var result = 0;
    for (var element of arr) {
      result += element; 
    }
    return result;
}

console.log(transform([1, 2, 3, 4, 5]));

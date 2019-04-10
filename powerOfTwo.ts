/**
 * Write a function that accepts a number `n` as its input and returns a boolean
 * value representing whether or not `n` is a power of 2.
 *
 * If your answer is iterative, try solving it using recursion (and vice versa).
 * Once you've solved the problem both ways, see if you can devise a clever way
 * of solving the problem using bitwise operators.
 */

 var isPowerOfTwo = function(n: number): boolean {
     if (n === 2){
       return true;
     } else if (n < 2){
       return false;
     } else {
       return isPowerOfTwo(n / 2);
     }
 };

 console.log(isPowerOfTwo(32));

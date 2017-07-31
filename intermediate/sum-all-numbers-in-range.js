/*
https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/


/*
REFACTOR WITHOUT USING FOR LOOP!
*/

function sumAll(arr) {
  let sum = 0;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum = sum+i
  }
  return sum;
}

/*
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/

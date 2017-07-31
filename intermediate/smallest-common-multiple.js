/*
https://www.freecodecamp.org/challenges/smallest-common-multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/


/*
ARGH! THIS NEEDS REFACTORING!
TRY NOT TO USE FOR LOOP OR WHILE LOOP
*/

function smallestCommons(arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let smallestCommonFound = false;
  let sum = 0;

  while (!smallestCommonFound) {
    sum += max;
    for (let i = min; i < max; i++) {
      if (sum % i == 0) {
        if (i == max - 1) {
          smallestCommonFound = true;
        }
      } else {
        break
      }
    }
  }
  return sum
}

/*
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

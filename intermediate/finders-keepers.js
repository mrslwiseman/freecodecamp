/*
https://www.freecodecamp.org/challenges/finders-keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
*/

function findElement(arr, func) {
  return arr
    .filter((x) => {
      return func(x)
    })[0]
}

/*
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

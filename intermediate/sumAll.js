function sumAll(arr) {
  "use strict"

  let sum = 0;

  for(let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum = sum+i
  }

  return sum;
}

console.log(sumAll([1,4]));



// work out the biggest number
// start i from smallest number
// increment++
// check if number is < biggest number?
// if <, increment++
// if not, ie is equal,
// return count

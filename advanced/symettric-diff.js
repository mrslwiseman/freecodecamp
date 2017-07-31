/*
https://www.freecodecamp.org/challenges/symmetric-difference
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/

/*
REFACTOR THIS!
*/

function sym(...args) {
  let removeDups = (x) => {
    return x.filter((v, i, a) => {
        if(a.lastIndexOf(v) == i) {
          return v
        }
      })
  }

  let flat = args
    .map(z => {return removeDups(z)})
    .reduce(function(a, b) {return a.concat(b);}, []);

  let array = []
  return flat.map(z => {
  let count = flat.filter((x, i, a) => { return x == z }).length
    if(count % 2 != 0){
      if(array.indexOf(z) == -1){

        array.push(z)
        return z
      }
    }
  }).filter(x => {
    return x != undefined
  }).sort()
}

/*
sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.
*/
/*

// MUCH MORE ELEGANT SOLUTION USING SETS:

function sym() {
  // http://2ality.com/2015/01/es6-set-operations.html
let difference = (a, b) => {
    return new Set(
    [...a].filter(x => !b.has(x)))
  }

return [...[...arguments]
  .map(x => new Set(x))
  .reduce((acc, set) => {
    return new Set([...difference(acc, set), ...difference(set, acc)])})]
  .sort()

}
*/

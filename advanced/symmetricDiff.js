function sym(...args) {
  // remove dups in each argument array
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

// MUCH MORE ELEGANT SOLUTION USING SETS:

// function sym() {
//   // http://2ality.com/2015/01/es6-set-operations.html
// let difference = (a, b) => {
//     return new Set(
//     [...a].filter(x => !b.has(x)))
//   }

// return [...[...arguments]
//   .map(x => new Set(x))
//   .reduce((acc, set) => {
//     return new Set([...difference(acc, set), ...difference(set, acc)])})]
//   .sort()

// }

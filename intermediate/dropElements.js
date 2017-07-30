function dropElements(arr, func) {
  let y = [];
    arr.forEach((x, i) => {
      if(func(x)) y = arr.splice(i, arr.length)
    })
  return y
}


console.log(dropElements([1, 2, 3, 4, 5, 7 ], function(n) {
  return n >= 2;
}))


module.exports = dropElements;

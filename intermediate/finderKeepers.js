
function findElement(arr, func) {

return arr.filter((x) => {
  return func(x)
})[0]

}

// 
// module.exports = findElement;
//
//
// const func = require('./script');
//
// function testFunction(x, y){
//   return func(x, y)
// }
//
// test('func([5, 1])).toBe(60)', () => {
//   let x = [1, 2, 3, 4];
//   let y = function(num){ return num % 2 === 0; }
//   let expected = 2
//   expect( testFunction(x, y) ).toBe(expected);
// });
//
// test('func([5, 1])).toBe(60)', () => {
//   let x = [1, 3, 5, 8, 9, 10];
//   let y = function(num) { return num % 2 === 0; }
//   let expected = 8
//   expect( testFunction(x, y) ).toBe(expected);
// });

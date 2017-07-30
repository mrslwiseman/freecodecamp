function sumAll(arr) {
let min = Math.min(arr[0], arr[1]);
let max = Math.max(arr[0], arr[1]);

let array = [];

// build up array
// cant get max-min to work in for loop conditional
for(var i = 0;i <= Math.max(arr[0], arr[1])-Math.min(arr[0], arr[1]); i++){
array.push(min+i)
}
return array.reduce(function(a,b){return a+b});

};
console.log(
sumAll([1, 10]));


// ------------------------------------------------------------


// function sumRange(start, end) {
// let sum = start;
// 	for(let i = start; i <end; i++) {

// 		sum += (i+1)

// 	}
// return sum;
// }

// console.log(sumRange(1, 10))


// ------------------------------------------------------------------------

// // this answer @matthras


// function sumAll(arr) {
// 	// build up array starting with min number
//   var rangeArray = [Math.min(arr[0],arr[1])];


//   for(i=1; i <= Math.max(arr[0],arr[1])-Math.min(arr[0],arr[1]); i++) 
// {
// 	// push each number into array
//     rangeArray.push(Math.min(arr[0],arr[1])+i);
   
//   }





// // reduce array to total
//   return rangeArray.reduce(function(a, b) { return a + b; });
// }

// sumAll([5, 10]);



// /* ---------------------------------
// MY ANSWER:
// ---------------------------------------*/

// // wasnt sure how to use reduce, 
// function sumAll(arr) {
// let min = Math.min(arr[0], arr[1]);
// let max = Math.max(arr[0], arr[1]);


// var total = min;
// var loops = max-min;


// for(var i = 0;i < loops; i++){
// min++;
// total += min;

// }
// return total;

// };
// sumAll([5, 10]);
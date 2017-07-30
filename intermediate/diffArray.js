function diffArray(arr1, arr2) {

let newArr = [...arr1, ...arr2].filter(item => {
	if (arr1.includes(item) && arr2.includes(item)){} else {return item};
// then both arrays have the number

})

//arr.filter(item => {return item  != 1})



  return newArr;
}

console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]))















// function diffArray(arr1, arr2) {

// let newArr = arr1.concat(arr2).filter(item => {
// 	if(  arr1.includes(item) && arr2.includes(item)  ){
// 	}
// 		else {
// 			return item;
// 		}
// // then both arrays have the number

// })

// //arr.filter(item => {return item  != 1})



//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]))
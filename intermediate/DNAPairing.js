function pairElement(str) {
  //define a map object with all pair possibilities 



var pairOf = {T:'A', A:'T', G:'C', C:'G'};

strArr = str.split('');
let paired = [];


strArr.reduce((prev, currentElement, i, array) => {
 paired.push([currentElement, pairOf[currentElement]])
  }, 0)


 return paired;
}

// test here
console.log
(pairElement("GCG"));








// function pairElement(str) {

// let array = [];
// for(char in str){
// 	array.push([str[char]])
// 	str[char] === "A" ? array[char].push("T") : null;
// 	str[char] === "T" ? array[char].push("A") : null;
// 	str[char] === "G" ? array[char].push("C") : null;
// 	str[char] === "C" ? array[char].push("G") : null;
	
// }

// return array;
// }


// pairElement("TTGAG");

// //go through str, 



// great solution: 
function solution(number){
  // convert the number to a roman numeral
let values = 	["1000","900","500","400","100","90","50","40","10","9","5","4","1" ]
let roman = 	["M","CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

let ans = '';
while(number>0){
    for(a in values){ 
        if(values[a]<=number){ ans += roman[a]; number-=values[a]; break;}
            
    }
}
return ans;
}

console.log(
solution(1362)
	)



// function solution(num) {
//   "use strict";
// const ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
// const tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
// const hund = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
// let convertedString = "";

// num = Array.from(`${num}`).reverse();

// 	function convertThousands(thousands){
// 		thousands = thousands.join('');
// 		let str = "";
// 		for(let i = 0; i < thousands; i++){
// 			str += "M";
// 		}


// 		return str;
// 	}


// let M = num.slice(3,num.length);
// let C = hund[num[2]-1];
// let X = tens[num[1]-1];
// let I = ones[num[0]-1];




// if(M){
// 	convertedString += convertThousands(num.slice(3,num.length))
// }

// if(C){
// 	convertedString += C;
// }


// if(X){
// 	convertedString += X;
// }

// if(I){
// 	convertedString += I;
// }


// return convertedString;

// }


function binaryAgent(str){

  // function parseIntBinary(str, i = str.length - 1, binarySum = 1, sum = 0) {
  //   if ( i < 0) return sum
  //   if(str[i] == "1"){
  //     sum += binarySum
  //   }
  //   return parseIntBinary(str, i - 1, binarySum*2, sum )
  // }
  //
  // return str
  //   .split(' ')
  //   .map(x => { return parseIntBinary(x) })
  //   .map(x => { return String.fromCharCode(x) })
  //   .join('')


  return String
   .fromCharCode(...str.split(" ")
   .map(char => {
     return parseInt(char, 2)
   } ))


}

// LOL:

// function binaryAgent(str) {
//   return String
//    .fromCharCode(...str.split(" ")
//    .map(function(char){
//      return parseInt(char, 2);
//   }));
// }


// 01000001 == 65


console.log(
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
)

console.log(
  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
)

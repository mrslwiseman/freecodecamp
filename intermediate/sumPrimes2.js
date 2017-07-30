function sumPrimes(num) {
  let sum = 0;
  for( let x = 1; x <= num; x++ ) {
    for( let i = 2; i <= num; i++ ) {
      if( x % i == 0) {
        if( x == i ) {
          sum += i
          break
        }
        break
      }
    }
  }
  return sum
}

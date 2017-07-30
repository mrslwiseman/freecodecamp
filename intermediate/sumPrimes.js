/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/


// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes


function sumPrimes(num) {

	let start = [2,3,5,7];
	let nums = [];

	for(let i = 2; i<=num; i++){
		nums.push(i)
	}
console.log(`nums = ${nums}`)


for(let j = 0; j<=nums.length; j++){
let current;
 nums = nums.filter((a) => {
 		current = a;
 		return a%nums[j] !== 0;
	})
 nums.push(current)
 console.log(nums)
}
	return nums.sort((a,b) => {
		return a >b;
	})

}

console.log(
sumPrimes(20)
);


// sumPrimes(977) should return 73156.



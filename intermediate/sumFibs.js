
function sumFibs(num) {
	let array = [0,1];

	for(let i = 0; i<=num; i++){
		let fibNum = array[i] + array[i+1];
		fibNum<=num ? array.push(fibNum) : null
	}

return array
.filter((a) => {
	return a%2 !=0 })
.reduce((x,y) => {
	return x+y;
}, 0)

}







console.log(
sumFibs(1000)
);

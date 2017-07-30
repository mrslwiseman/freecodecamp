function destroyer(arr, ...theArgs) {

	theArgs.map(arg => {
		arr = arr.filter(item => {
			return item !== arg
		});


	})


	return arr;

}






console.log(destroyer(["tree", "hamburger", 53], "tree", 53))	//should return ["hamburger"].



// destroyer([1, 2, 3, 1, 2, 3], 2, 3) //should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) //should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) //should return [1].
// destroyer([2, 3, 2, 3], 2, 3) //should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) 
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], 
// "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") 
// //should return [12,92,65].)
// ;
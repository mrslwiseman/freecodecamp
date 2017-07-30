
function whatIsInAName(collection, source) {
  let arr = [];
let searchKeys = Object.keys(source); // array of all the keys in search source

for( let obj in collection ){ // for each object in collection
let flag;
	
	for( let key in searchKeys ){
		if(collection[obj].hasOwnProperty(searchKeys[key]) && source[searchKeys[key]] === collection[obj][searchKeys[key]]){
			flag = true;
		} else {
			flag = false;
			break;
		}
		
		
	}
	if(flag){
		arr.push(collection[obj])
	}
}





return arr;
}


	//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
	whatIsInAName([{ "a": 1, "b": 2 },		 { "a": 1 }, 		{ "a": 1, "b": 2, "c": 2 }], 						{ "a": 1, "b": 2 }) 




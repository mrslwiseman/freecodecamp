





function spinalCase(str) {
let regexp = /(?:\s)([a-z A-z])|(\B[A-Z])|(_)/g;
  return str
  .replace(regexp, (match, p1,p2,p3,p4, index) => {
  	let replacement = ""
  	if(p1){
  		replacement = "-" + p1
  		//replacement += "-" + p2
  	} 
  	if(p2){
  		replacement =  "-" + p2
  	} 
  	return replacement
  })
  .toLowerCase()

}

console.log(spinalCase('The_Andy_Griffith_Show'))
;

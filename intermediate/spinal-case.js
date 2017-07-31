/*
https://www.freecodecamp.org/challenges/spinal-tap-case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
let regexp = /(?:\s)([a-z A-z])|(\B[A-Z])|(_)/g;
  return str
    .replace(regexp, (match, p1, p2, index) => {
	    let replacement = ""
  	  if(p1){ replacement = "-" + p1 }
  	  if(p2){ replacement =  "-" + p2 }
  	  return replacement
  })
  .toLowerCase()
}

/*
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".

*/

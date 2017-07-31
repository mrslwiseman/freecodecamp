/*
https://www.freecodecamp.org/challenges/convert-html-entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
	const regex = /[&<>"']/g;
	const html = {
		"34"	: "&quot;",
		"38" 	: "&amp;",
		"39"	: "&apos;",
		"60"	: "&lt;",
		"62"	: "&gt;"
	}
	return str.replace(regex, (match) => {
		return html[match.charCodeAt(0)];
	})
}

/*
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.

*/


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

console.log(convertHTML('Stuff in "quotation marks"')
	)
;





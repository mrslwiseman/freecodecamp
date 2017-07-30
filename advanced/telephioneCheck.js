
function telephoneCheck(str) {
let regex = /^1(\s)\d{3}(\s)\d{3}(\s|-)\d{4}$|^1(\()\d{3}(\))\d{3}(\s|-)\d{4}$|(^\d{3}-\d{3}-\d{4})|(^\(\d{3}\)\d{3}-\d{4})|(^\d{10}$)|^1(\s|\s\()\d{3}(\)\s|-)\d{3}(\s|-)\d{4}/g
   return regex.test(str)
}


module.exports = telephoneCheck

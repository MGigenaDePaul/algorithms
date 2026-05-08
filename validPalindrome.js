/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = ""

    for (c = 0; c < s.length; c++) {
        if (/[a-zA-Z0-9]/.test(s[c])) {
            newStr += s[c].toLowerCase()
        }
    }
    return newStr === newStr.split("").reverse().join('')
};
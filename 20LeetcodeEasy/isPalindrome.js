/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // compare the first number with the last number, the second number with the second last number, till we get to a point where both numbers are the same in the middle, if this happens is a palindrome

    if (x < 0) return false;

    let str = x.toString()

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
           return false
        }
    }

    return true
};

let result = isPalindrome(121)
console.log(result)
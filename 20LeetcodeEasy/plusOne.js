/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let carry = 0;

    for (let i = digits.length - 1; i >= 0; i--) {
        const digit = digits[i]
        if (digit !== 9) {
            digits[i]++
            return digits
        } else {
            digits[i] = 0
            carry = 1
        }
    }

    if (carry) {
        digits.unshift(1)
    }

    return digits
};
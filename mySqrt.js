/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let res = 0;

    while (left <= right) {
        let m = Math.floor(left + (right - left) / 2)
        if (m * m > x) {
            right = m - 1
        } else if (m * m < x) {
            left = m + 1
            res = m
        } else {
            return m
        }
    }

    return res
};
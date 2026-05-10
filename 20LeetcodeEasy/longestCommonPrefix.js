/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function(strs) {
    let checkMin = Math.min(...strs.map(str => str.length))

    let prefix = ""

    for (let i = 0; i < checkMin; i++) {
        const current = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== current) {
                return prefix;
            }
        }
        prefix += current
    }

    return prefix
};


let result = longestCommonPrefix(['flower', 'flow', 'flight'])
console.log(result)

/**
 * @param {string[]} strs
 * @return {string}
 */

var minLengthStrs = function(strs) {
    var min = 100
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < min) {
            min = strs[i].length
        }
    }

    return min
}

var longestCommonPrefix = function(strs) {
    // compare the first letter of each string, if it's not the same, there's no common prefix
    // seguir este proceso con las siguientes letras hasta que no coincidan y devolver el longestCommonPrefix

    var commonPrefix = ''
    for (let j = 0; j < minLengthStrs(strs); j++) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][j] !== strs[0][j]) return commonPrefix;
        }
        commonPrefix = commonPrefix + strs[0][j]
    }

    return commonPrefix;
};


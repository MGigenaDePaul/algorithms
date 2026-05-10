/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // split all words into an array
    // select the last one and return length
    const array = s.trim().split(" ")

    for (let i = 0; i < array.length; i++) {
        let lastWord = array[array.length - 1]
        if ((array[i] === lastWord)) { // if we are on the lastWord, return the length
            return lastWord.length
        } 
    }
};

let result = lengthOfLastWord('fly me to the moon     ')
console.log(result) // 4
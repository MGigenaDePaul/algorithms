/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // ()
    // ()[]{}
    // loop through the string, 
    // if opens, add to stack
    // if closes, we do a pop, and the one before has to open

    const stack = []

    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        if ("{([".includes(current)) {
            stack.push(current)
        } else if (current === ')') {
            if (stack.pop() !== '(') { return false }
        } else if (current === ']') {
            if (stack.pop() !== '[') { return false }
        } else if (current === '}') {
            if (stack.pop() !== '{') { return false }
        }
    }

    return stack.length === 0;
}
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' 
            && 
            !(s[i] === 'I' && s[i+1] === 'V') // IV
            &&
            !(s[i] === 'I' && s[i+1] === 'X')   // IX
        ){
            result = result + 1;
        }
        if (s[i] === 'V' && !(s[i] === 'V' && s[i-1] === 'I')) {
            result = result + 5
        }
        if (s[i] === 'X' 
            &&
            !(s[i] === 'X' && s[i+1] === 'L') // XL
            &&
            !(s[i] === 'X' && s[i+1] === "C") // XC
            &&
            !(s[i] === 'X' && s[i - 1] === 'I') // IX
        ) 
        {
            result = result + 10
        }
        if (s[i] === 'L' && !(s[i] === 'L' && s[i-1] === 'X')) {
            result = result + 50
        }
        if (s[i] === 'C'
            &&
            !(s[i] === 'C' && s[i+1] === 'D') 
            && 
            !(s[i] === 'C' && s[i+1] === 'M')
            &&
            !(s[i] === 'C' && s[i-1] === 'X')
        ) {
            result = result + 100
        }
        if (s[i] === 'D' && !(s[i] === 'D' && s[i-1] === 'C')) {
            result = result + 500
        }
        if (s[i] === 'M' && !(s[i] === 'M' && s[i-1] === 'C')) {
            result = result + 1000
        }
        if (s[i] === 'I' && s[i+1] === 'V') { result = result + 4 }
        if (s[i] === 'I' && s[i+1] === 'X') { result = result + 9}
        if (s[i] === 'X' && s[i+1] === 'L') { result = result + 40 }
        if (s[i] === 'X' && s[i+1] === 'C') { result = result + 90 }
        if (s[i] === 'C' && s[i+1] === 'D') { result = result + 400}
        if (s[i] === 'C' && s[i+1] === 'M') { result = result + 900 }
    }
    return result
};


let result = romanToInt('MXM')
console.log(result)


// Version 2 (mas simplificada)


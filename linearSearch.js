// LINEAR SEARCH 

// array persons height
let array = [180, 140, 170, 160, 190, 130, 150]


function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}


let result = linearSearch(array, 150)
console.log(result)

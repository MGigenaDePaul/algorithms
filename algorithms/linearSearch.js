// LINEAR SEARCH 
/*
Step 1. Take Input of the array and x.
Step 2. Start from the leftmost element of list/array and one by one compare x with each element of array/list.
Step 3. If x matches with an element, return the index.
Step 4. If x doesn’t match with any of elements, return -1.
*/
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

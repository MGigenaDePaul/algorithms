// BINARY SEARCH 
// prerequisite -> must be sorted


function binarySearch(array, target) {
    let p = 0
    let q = array.length - 1

    while (p <= q) {
        let mid = Math.floor((p + q) / 2)

        if (array[mid] === target) {
            return mid; // posicion encontrada
        }
        else if (target > array[mid]) {
            p = mid + 1 // ir a la derecha
        }
        else if (target < array[mid]) {
            q = mid - 1; // ir a la izquierda
        }
    }

    return -1;
}

// array persons height
let array = [130, 140, 150, 160, 170, 180, 190]

let result = binarySearch(array, 180)
console.log(result)
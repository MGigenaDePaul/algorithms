// BINARY SEARCH 
// prerequisite -> must be sorted

/*
Step 1. Let the element we are searching for, in the given array/list is X.
Step 2. Compare X with the middle element in the array.
Step 3. If X matches with the middle element, we return the middle index.
Step 4. If X is greater than the middle element, then X can only lie in the right (greater)half subarray after the middle element, then we apply the algorithm again for the right half.
Step 5. If X is smaller than the middle element, then X must lie in the left (lower) half , this is because the array is sorted. So we apply the algorithm for the left half.
*/


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
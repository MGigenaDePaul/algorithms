/*
Step 1: Iterate through the array from arr[1] to arr[n].
Step 2: Compare the current element (key) to the one that came before it.
Step 3: Compare the essential element to the elements that came before it if it is smaller , To make room for the switched element, move the larger elements up one position.
*/

// complejidad (n^2)


function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1
        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j] // mover a la derecha
            j--;
        }

        array[j + 1] = key; // insertar
    }

    return array;
}

let result = insertionSort([5, 4, 3, 50, 1])
console.log(result)


// BUBBLE SORT
/*complejidad O(n^2), el mejor caso seria O(n), pero hay que agregar un swapped booleano que muestre que si no hubo swap, es porque ya el array
esta ordenado */

/*
Step 1. 
In first cycle, Start by comparing 1st and 2nd element and swap if 1st element is greater. 
After that do the same for 2nd and 3rd element. 
At the end of cycle you will get max element at the end of list.

Step 2. Now do the same in all subsequent cycles.
Step 3. Perform this for (number of elements – 1) times.
Step 4. You will get sorted list.
*/

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array) {

    for (let i = 0; i < array.length - 1; i++) {

        let swapped = false;

        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return array;
}

let result = bubbleSort([1, 3, 5, 2, 4])
console.log(result)
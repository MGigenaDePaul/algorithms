// SELECTION SORT

// ordena una lista, toma el elemento mas pequeño en cada iteracion y lo posiciona al princpio de la lista

// modo entrevista: Recorre la lista y en cada iteración busca el elemento más pequeño del subarray no ordenado y lo intercambia con la posición actual.
// complejidad: O(n^2)

/*
Step 1 − Set MIN to location 0
Step 2 − Search the minimum element in the list
Step 3 − Swap with value at location MIN
Step 4 − Increment MIN to point to next element
Step 5 − Repeat until list is sorted.
 */

function selectionSort(array) {
    for (let MIN = 0; MIN < array.length; MIN++) {
        let minIndex = MIN;

        // busco elemento mas chico en la lista
        for (let j = MIN + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }

        // swap (siempre se hace con el primer elemento de la sublista no ordenada)
        let temp = array[MIN]
        array[MIN] = array[minIndex]
        array[minIndex] = temp;
    }

    return array;
}

let result = selectionSort([1, 3, 2, 0, 4, 100])
console.log(result)
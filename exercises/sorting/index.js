// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min_idx = i;
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        if (min_idx !== i) {
            let temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }
    }

    return arr;
}

function insertionSort(arr) {
    let sorted = [arr[0]];

    // for (let i = 1; i , arr.length; i++) {
    //     if (arr[i])
    // }

}

function mergeSort(arr) {

}

function merge(left, right) {

}

// selectionSort([100, -40, 500, -124, 0, 21, 7]);

module.exports = { bubbleSort, selectionSort, mergeSort, insertionSort };

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

// TODO: Fix insertion sort
function insertionSort(arr) {
    let sorted = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < sorted.length; j++) {
            if (arr[i] < arr[j]) {
                sorted[j+1] = sorted[j];
                sorted[j] = arr[i];
                break;
            }
        }
    }

    return sorted;
}

function mergeSort(arr) {

}

function merge(left, right) {
    let merged = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }

    merged = [...merged, ...left, ...right];
    return merged;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge, insertionSort };

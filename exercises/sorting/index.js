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
    if (arr.length === 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
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

    return [...merged, ...left, ...right];
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {

        let pivot = partition(arr, start, end);

        quickSort(arr, start, pivot - 1);
        quickSort(arr, pivot + 1, end);
    }

    return arr;
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let p_idx = start;

    for (let i = start; i < end; i++) {
        if (arr[i] <= pivot) {
            // swap a[i] and a[p_idx]
            let temp = arr[i];
            arr[i] = arr[p_idx];
            arr[p_idx] = temp;

            p_idx++;
        }
    }

    // swap a[p_idx] and pivot
    let temp = arr[p_idx];
    arr[p_idx] = arr[end];
    arr[end] = temp;

    return p_idx;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge, quickSort };

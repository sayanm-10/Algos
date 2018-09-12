// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution using slice helper
function chunk(array, size) {
    let chunkArr = [];
    let start = 0;

    while (start < array.length) {
        chunkArr.push(array.slice(start, start + size));
        start += size;
    }

    return chunkArr;
}

// solution w/o using slice() helper
// function chunk(array, size) {
//     let chunkArr = [];
//     let subArr = [];

//     for (element of array) {
//         subArr.push(element);

//         // if sub array meets size requirement or we have encountered last element of the parest array
//         if (subArr.length === size || element == array[array.length - 1]) {
//             chunkArr.push(subArr);
//             subArr = [];
//         }
//     }

//     return chunkArr;
// }

module.exports = chunk;

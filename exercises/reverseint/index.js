// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Without using reverse helper
function reverseInt(n) {
    let arrNum = n.toString().split('');
    let reverse = '';

    for (num of arrNum) {
        reverse = num + reverse;
    }

    return parseInt(reverse) * Math.sign(n);
}

// Using reverse() helper
// function reverseInt(n) {
//     let reverse = n.toString().split('').reverse().join('');

//     return Math.sign(n) * parseInt(reverse);
// }

module.exports = reverseInt;

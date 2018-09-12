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
    if (n === 0) {
        return 0;
    }

    let arrNum = n.toString().split('');
    let trailing_zero = true;
    let reverse = '';

    for (let i = arrNum.length - 1; i >= 0; --i) {
        if (trailing_zero && arrNum[i] === '0') {
            // do nothing
            continue;
        } else {
            reverse += arrNum[i];
            trailing_zero = false;
        }
    }

    return parseInt(reverse) * Math.sign(n);
}

// Using reverse() helper
// function reverseInt(n) {
//     let reverse = n.toString().split('').reverse().join('');

//     return Math.sign(n) * parseInt(reverse);
// }

module.exports = reverseInt;

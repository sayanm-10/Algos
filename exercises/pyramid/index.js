// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let mid = Math.floor((2*n - 1) / 2);

    for (let i = 0; i < n; i++) {
        let print = '';
        for (let j = 0; j < 2*n - 1; j++) {
            if (j <= mid + i && j >= mid - i) {
                print += '#';
            } else {
                print += ' ';
            }
        }

        console.log(print);
    }
}

module.exports = pyramid;

// Recursive solution

// function pyramid(n, row = 0, print = '') {
//     if (row === n) {
//         return;
//     }

//     if (print.length === 2*n - 1) {
//         console.log(print);
//         return pyramid(n, row + 1);
//     }

//     let mid = Math.floor((2*n - 1) / 2);

//     if (print.length >= mid - row && print.length <= mid + row) {
//         print += '#';
//     } else {
//         print += ' ';
//     }

//     pyramid(n, row, print);
// }
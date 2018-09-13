// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         let print = '';
//         for (let j = 1; j <= n; j++) {
//             if (j <= i) {
//                 print += '#';
//             } else {
//                 print += ' ';
//             }
//         }

//         console.log(print);
//     }
// }

module.exports = steps;

// recursive solution
function steps(n, row = 0, print = '') {
    if (row === n) {
        return;
    }
    
    if (print.length === n) {
        console.log(print);
        // move on to next row
        return steps(n, row + 1);
    }

    if (print.length <= row) {
        print += '#';
    } else {
        print += ' ';
    }

    // stay in same row, work on print
    steps(n, row, print);
}

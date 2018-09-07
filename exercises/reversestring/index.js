// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Alternate elegant solution
function reverse(str) {
    let strArr = str.split('');

    return strArr.reverse().join('');
}

module.exports = reverse;

// Solution w/o using reverse helper
// function reverse(str) {
//     let strArr = str.split('');


//     let reverse = "";
//     while (strArr.length > 0) {
//         reverse += strArr.pop();
//     }

//     return reverse;
// }
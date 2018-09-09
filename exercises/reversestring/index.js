// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Elegant solution using Reduce
function reverse(str) {
    return str.split('').reduce((reverse, char) =>  char + reverse,'');
}    

// Alternate elegant solution using Array reverse
// function reverse(str) {
//     let strArr = str.split('');

//     return strArr.reverse().join('');
// }


// Solution 1: w/o using reverse helper
// function reverse(str) {
    //     let strArr = str.split('');
    //     let reverse = "";

    //     while (strArr.length > 0) {
        //         reverse += strArr.pop();
//     }

//     return reverse;
// }


// Solution 2: using for-of loop
// function reverse(str) {
//     let reverse = '';
    
//     for (let character of str) {
//         reverse = character + reverse;
//     }
    
//     return reverse;
// }

module.exports = reverse;
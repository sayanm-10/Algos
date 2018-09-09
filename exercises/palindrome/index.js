// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Elegant solution using Array forEach comparing each element
function palindrome(str) {
    // return str.split('').every((elem, i) => elem === str[str.length - i -1]);

    // or,
    return str.split('').every((elem, i) => {
        return elem === str[str.length - i -1];
    });
}

module.exports = palindrome;

// Solution 1: By actually reversing the string and checking
// function palindrome(str) {
//     let reverse = str.split('').reduce((rev, char) => char + rev, '');

//     // or,
//     // let reverse = str.split('').reverse().join('');

//     return str === reverse;
// }

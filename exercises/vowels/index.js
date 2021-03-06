// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution using includes()

// function vowels(str) {
//     let counter = 0;
//     let vowels = ['a', 'e', 'i', 'o', 'u']; // can also string "aeiou"

//     for (char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             counter++;
//         }
//     }

//     return counter;
// }


// Solution using indexOf()

// function vowels(str) {
//     let counter = 0;

//     for (char of str.toLowerCase()) {
//         if (['a', 'e', 'i', 'o', 'u'].indexOf(char) > -1) {
//             counter++;
//         }
//     }

//     return counter;
// }

module.exports = vowels;

// RegEx based solution

function vowels(str) {
    let matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Solution using slice()

function capitalize(str) {
    let result = [];

    for (word of str.split(" ")) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }

    return result.join(" ");
}

module.exports = capitalize;

// Solution using for loop

// function capitalize(str) {
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         if (i === 0 || str[i - 1] === ' ') {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }

//     return result;
// }

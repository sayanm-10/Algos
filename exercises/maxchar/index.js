// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution using object
function maxChar(str) {
    let map = {};

    for (char of str) {
        if (map[char]) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }

    let maxChar =  str[0];
    let maxVal = map[maxChar];
    for (key in map) {
        if (map[key] > maxVal) {
            maxChar = key;
        }
    }

    return maxChar;
}

// Solution using Map()
// function maxChar(str) {
//     let map = new Map();

//     for (char of str) {
//         map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
//     }

//     let maxVal = map.get(str[0]);
//     let maxChar =  str[0];
//     map.forEach(function(val, key){
//         if (val > maxVal) {
//             maxChar = key;
//         }
//     });

//     return maxChar;
// }

module.exports = maxChar;

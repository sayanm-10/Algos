// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Clever solution by sorting
function anagrams(stringA, stringB) {
    let cleanStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    let cleanStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    cleanStringA = cleanStringA.split('').sort().join('');
    cleanStringB = cleanStringB.split('').sort().join('');

    return cleanStringA === cleanStringB;

}

// Solution using Objects

// function anagrams(stringA, stringB) {
//     let objA = createHash(stringA.replace(/[^\w]/g, "").toLowerCase());
//     let objB = createHash(stringB.replace(/[^\w]/g, "").toLowerCase());

//     /**
//      * NOTE: Pay Attention to Object.keys()
//      */
//     if (Object.keys(objA).length !== Object.keys(objB).length) {
//         return false;
//     }

//     for (key in objA) {
//         if (objA[key] !== objB[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// function createHash(string) {
//     let hash = {};

//     for (char of string) {
//         hash[char] = hash[char] + 1 || 1;
//     }

//     return hash;
// }

module.exports = anagrams;

// solution using Map
// function anagrams(stringA, stringB) {
//     let mapA = createMap(stringA.replace(/[^\w]/g, "").toLowerCase());
//     let mapB = createMap(stringB.replace(/[^\w]/g, "").toLowerCase());

//     // if both strings are of different size
//     if (mapA.size !== mapB.size) {
//         return false;
//     }

//     for (let [key, val] of mapA) {
//         if (!mapB.has(key) || mapB.get(key) !== mapA.get(key)) {
//             return false;
//         }
//     }

//     return true;
// }

// function createMap(string) {
//     let map = new Map();

//     for (char of string) {
//         if (map.has(char)) {
//             map.set(char, map.get(char) + 1);
//         } else {
//             map.set(char, 1);
//         }
//     }

//     return map;
// }

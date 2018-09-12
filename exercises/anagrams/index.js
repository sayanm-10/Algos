// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let mapA = createMap(stringA.replace(/[^\w]/g, "").toLowerCase());
    let mapB = createMap(stringB.replace(/[^\w]/g, "").toLowerCase());

    // if both strings are of different size
    if (mapA.size !== mapB.size) {
        return false;
    }

    for (let [key, val] of mapA) {
        if (!mapB.has(key) || mapB.get(key) !== mapA.get(key)) {
            return false;
        }
    }

    return true;
}

function createMap(string) {
    let map = new Map();

    for (char of string) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    return map;
}

module.exports = anagrams;

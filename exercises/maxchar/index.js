// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let arr = str.split('');
    let map = new Map();

    for (char of arr) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    let maxVal = map.get(arr[0]);
    let maxChar =  arr[0];
    map.forEach(function(val, key){
        if (val > maxVal) {
            maxChar = key;
        }
    });

    return maxChar;
}

module.exports = maxChar;

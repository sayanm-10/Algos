// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/**
 * * Iterative Approach
 */
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     let first = 0;
//     let second = 1;
//     let result;

//     for (let i = 0; i < n - 1; i++) {
//         result = first + second;
//         first = second;
//         second = result;
//     }

//     return result;
// }


/**
 * * Recursive Approach
 */
function fib(n) {
    if (n < 2) {
        return n;
    }
    
    return fib(n-1) + fib(n-2);
}

/**
 * * Build a memoize method
 * @param {*} func 
 */
function memoize(func) {
    let cache = {};
    
    return function(...args) {
        // if func was called with these arguements, return value from cache
        if(cache[args]) {
            return cache[args];
        }
        
        const result = func.apply(this, args);
        // store result of func call with these arguments in caches
        cache[args] = result;
        return result
    };
}

fib = memoize(fib);

module.exports = fib;

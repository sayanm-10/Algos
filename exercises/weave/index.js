// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alternating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
//  ! *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example

const Queue = require('./queue');

//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'


function weave(sourceOne, sourceTwo) {
    let weaved = new Queue();
    let a1, a2;

    while(sourceOne.peek() || sourceTwo.peek()) {
        a1 = sourceOne.remove();
        if (a1) {
            weaved.add(a1);
        }

        a2 = sourceTwo.remove();
        if (a2) {
            weaved.add(a2);
        }
    }

    return weaved;
}

module.exports = weave;

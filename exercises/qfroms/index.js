// --- Directions
// Implement a Queue datastructure using two stacks.
// ! *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// import Stack from "../stack/index";


// class Queue {
//     constructor() {
//         this.stack_in = new Stack();
//         this.stack_out = new Stack();
//     }

//     add (element) {
//         this.stack_in.push(element);
//     }

//     remove () {
//         while (this.stack_in.peek()) {
//             this.stack_out.push(this.stack_in.pop());
//         }
        
//         let last = this.stack_out.pop();

//         while (this.stack_out.peek()) {
//             this.stack_in.push(this.stack_out.pop());
//         }

//         return last;
//     }

//     peek () {
//         while (this.stack_in.peek()) {
//             this.stack_out.push(this.stack_in.pop());
//         }
        
//         let last = this.stack_out.peek();

//         while (this.stack_out.peek()) {
//             this.stack_in.push(this.stack_out.pop());
//         }

//         return last;
//     }
// }


/*
* Alternate efficient solution
*/
class Queue {
    constructor() {
        this.stack_in = new Stack();
        this.stack_out = new Stack();
    }
    add (element) {
        while (this.stack_in.peek()) {
            this.stack_out.push(this.stack_in.pop());
        }
        
        this.stack_in.push(element);

        while (this.stack_out.peek()) {
            this.stack_in.push(this.stack_out.pop());
        }
    }

    remove () {
        return this.stack_in.pop();
    }

    peek () {
        return this.stack_in.peek();
    }
}

module.exports = Queue;

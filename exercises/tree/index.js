// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {

    constructor (data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {

    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        let process_arr = [this.root];

        while (process_arr.length) {
            let first = process_arr.shift();

            
            fn(first);
            // fn.call(null, first);
            
            process_arr.push(...first.children);

            // * Alternate to spread
            // for (let child of first.children) {
            //     process_arr.push(child);
            // }
        }

    }

    traverseDF(fn) {
        let arr = [this.root];

        while (arr.length) {
            let node = arr.shift();

            fn(node);

            arr.unshift(...node.children);  
        }

    }
}

module.exports = { Tree, Node };

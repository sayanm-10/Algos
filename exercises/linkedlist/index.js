// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor (data, node = null) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const prev_head = this.head;
        this.head = new Node(data, prev_head);
    }

    size() {
        let size = 0;
        let node = this.head;
        
        while(node) {
            size++;
            node = node.next;
        }

        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        while (node.next) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        let prev = this.head;
        if (!prev.next) {
            this.head = null;
            return;
        }

        let node = prev.next;

        while (node.next) {
            prev = prev.next;
            node = node.next;
        }

        prev.next = null;
    }

    insertLast(newData) {
        const newNode = new Node(newData);

        // LL is empty
        if (!this.head) {
            this.head = newNode;
        } else {
            this.getLast().next = newNode;
        }
    }

    getAt(seek) {
        // ! Check for size makes us go through the LL twice
        // if (seek > this.size() - 1) {
        //     return null;
        // }

        let cur_i = 0;
        let node = this.head;

        while (node) {
            if (cur_i === seek) {
                return node;
            }

            cur_i++;
            node = node.next;
        }

        return null;
    }

    removeAt(idx) {
        if (!this.head) {
            return;
        }

        if (idx === 0) {
            this.head = this.head.next;
        }

        const prev_node = this.getAt(idx - 1);

        if (!prev_node || !prev_node.next) {
            return;
        }

        prev_node.next = prev_node.next.next;

        // ! Less efficient solution
        // const next_node = this.getAt(idx + 1);
        
        // if (prev_node && next_node) {
        //     prev_node.next = next_node;
        // } else if (prev_node) {
        //     prev_node.next = null;
        // } else if (next_node) {
        //     this.head = next_node;
        // } else {
        //     this.head = null;
        // }


    }

    insertAt(data, index) {
        
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        
        const prev_node = this.getAt(index - 1) || this.getLast();
        const new_node = new Node(data, prev_node.next);
        prev_node.next = new_node;


        // if (!prev_node) {
        //     this.insertLast(data);
        // } else if (!prev_node.next) {
        //     prev_node.next = new_node;
        // } else {
        //     new_node.next = prev_node.next;
        //     prev_node.next = new_node;
        // }
    }
}

module.exports = { Node, LinkedList };

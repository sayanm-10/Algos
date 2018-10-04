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
}

module.exports = { Node, LinkedList };

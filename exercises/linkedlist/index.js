// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data
        this.next = next || null
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        const node = new Node(data, this.head)
        this.head = node
    }

    size() {
        let list = []
        let node = this.head
        while (node !== null) {
            list.push(node.data)
            node = node.next
        }
        return list.length
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head;
        let lastNode = null

        while (node) {
            lastNode = node
            node = node.next
        }
        return lastNode
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        let node = this.head;
        if (node) {
            this.head = node.next
        }
        return
    }

    removeLast() {
        if (!this.head) {
            return
        }
        if (!this.head.next) {
            this.head = null
            return
        }

        let prevNode = this.head
        let node = this.head.next;

        while (node.next) {
            prevNode = node
            node = node.next
        }
        return prevNode.next = null
    }

    insertLast(data) {
        const last = this.getLast()
        if (last) {
            last.next = new Node (data)
        } else {
            this.head = new Node (data)
        }
    }

    getAt(index) {
        if (!this.head) {
            return null
        }

        let node = this.head;
        let counter = 0

        while (node) {
            if (counter === index) {
                return node
            }
            counter++
            node = node.next;
        }
    }

    removeAt(index){
        if (!this.head) {
            return 
        }
        if (index === 0) {
            this.head = this.head.next
            return
        } 

        let previous = this.getAt(index-1)
        if (!previous || !previous.next){
            return null
        } else {
            previous.next = previous.next.next
        }
    }

    insertAt(data, index) {
        if (index === 0 || !this.head) {
            return this.insertFirst(data)
        }

        const previous = this.getAt(index - 1) || this.getLast()
        if (previous) {
           const  node = new Node (data, previous.next)
            previous.next = node
        }
        
    }
}

const l = new LinkedList();
// console.log(l.getAt(10))

l.insertFirst(1);
l.insertFirst(2);
l.insertFirst(3);
l.insertFirst(4);

// console.log(l)
console.log(l.getAt(0))

module.exports = { Node, LinkedList };

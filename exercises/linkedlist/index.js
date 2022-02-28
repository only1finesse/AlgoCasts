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

        while (node){
            lastNode = node
            node = node.next
        }
        return lastNode
    }

    clear() {
        this.head = null
    }

    removeFirst(){
        let node = this.head; 
        this.head = node.next
    }
    
    removeLast(){
        
    }
}

module.exports = { Node, LinkedList };

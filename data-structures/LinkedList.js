// class LinkedList {
//     constructor(value) {
//         // creates new node
//     }
//     push(value) {
//         // creates new Node
//         // add Node to the end of list
//     }
//     unshift(value) {
//         // creates new Node
//         // add Node to the beginning of list
//     }
//     insert(index, value) {
//         // creates new Node
//         // add Node to the specified index in the list
//     }
// }

/**
 *  A typical LinkedList contains some methods to change its shape. A similar trait across the methods is that they all create a new node
 *  It would then make sense to create a class for this particular trait to avoid repeating code.
 * */

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// const newNode = new Node(4) // Node { value: 4, next: null }

class LinkedList {
    constructor(value) {
        const newNode = new Node(value) // Node { value: 4, next: null }
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
}

let myLinkedList = new LinkedList(4);

console.log('list: ', myLinkedList);

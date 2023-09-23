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

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            // In this instance, the LinkedList doesn't have any nodes
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined
        }
        let pre = this.head
        let temp = this.head

        while (temp.next) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return temp;
    }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
myLinkedList.pop();

console.log('list: ', myLinkedList);

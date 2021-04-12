const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    // this.lenghth = 0;
    this.head = null;
    this.tail = null;
  }

  // size() {
  //   return this.lenghth;
  // }

  enqueue(element) {
    // this.lenghth += 1;
    const newNode = new ListNode(element);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  dequeue() {
    if (!this.tail) {
      return null;
    }
    // this.lenghth -= 1;
    const deleteTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deleteTail.value;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        this.tail = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    return deleteTail.value;
  }
}

module.exports = Queue;

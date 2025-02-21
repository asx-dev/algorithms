// *********** Data Structures ***********

// Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Insert at the beginning
  insertAtBeginning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    if (this.size === 1) this.tail = newNode;
  }

  // Insert at the end
  insertAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Delete
  delete(value) {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      if (!this.head) this.tail = null;
      return true;
    }

    let current = this.head;
    let previous = null;

    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (!current) return;

    previous.next = current.next;
    if (this.tail === current) {
      this.tail = previous;
      this.tail.next = null;
    }

    this.size--;
    return true;
  }

  // Search
  search(value) {
    if (!this.head) return;
    if (this.head.value === value) return this.head;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Print linked list
  printList() {
    let list = [];
    let current = this.head;
    while (current !== null) {
      list.push(current.value);
      current = current.next;
    }
    console.log(list.join(" => "));
  }
}

// Stack
class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }
}

// Queue
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Hash Tables
// Binary Tree

// *********** Algorithms ***********

// Sorting
// Binary Search
// Recursion

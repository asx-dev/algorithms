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
class HashTable {
  constructor(size = 53) {
    this.keymap = new Array(size);
  }

  hashCode(key) {
    if (typeof key !== "string") throw new Error("Keys must be strings");

    let total = 0;
    let PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i].toLowerCase();
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUMBER + value) % this.keymap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this.hashCode(key);

    if (!this.keymap[index]) {
      this.keymap[index] = [];
    }

    let pair = this.keymap[index]?.find((pair) => pair[0] === key);

    if (pair) {
      pair[1] = value;
    } else {
      this.keymap[index].push([key, value]);
    }
  }

  get(key) {
    let index = this.hashCode(key);
    let pair = this.keymap[index]?.find((pair) => pair[0] === key);
    return pair ? pair[1] : null;
  }

  delete(key) {
    let index = this.hashCode(key);
    if (!this.keymap[index]) return null;

    let pairIndex = this.keymap[index].findIndex((pair) => pair[0] === key);
    if (pairIndex === -1) return null;

    return this.keymap[index].splice(pairIndex, 1)[0][1];
  }
}

// Binary Tree
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    !this.root ? (this.root = newNode) : this._insertNode(this.root, newNode);
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      !node.left ? (node.left = newNode) : this._insertNode(node.left, newNode);
    } else {
      !node.right
        ? (node.right = newNode)
        : this._insertNode(node.right, newNode);
    }
  }

  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// *********** Algorithms ***********

// Sorting
// Binary Search
// Recursion

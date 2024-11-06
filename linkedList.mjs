export default class LinkedList {
  constructor(node = new Node()) {
    this._head = node;
  }
  append(value) {
    if (!this._head.value) {
      this._head.value = value;
      return this._head;
    }

    let pointer = this._head;
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = new Node(value);
    return pointer.nextNode;
  }
  prepend(value) {
    if (!this._head.value) {
      this._head.value = value;
      return this._head;
    }
    let temp = this._head;
    this._head = new Node(value, temp);
    return this._head;
  }
  size() {
    if (!this._head.value) {
      return 0;
    }
    let counter = 1;
    let pointer = this._head;
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
      counter++;
    }
    return counter;
  }
  head() {
    return this._head;
  }
  tail() {
    let pointer = this._head;
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }
  at(index) {
    let pointer = this._head;
    for (let i = 0; i < index; i++) {
      if (!pointer.nextNode) {
        console.error(
          `Out of range, the list max index is ${i}. returning last node`
        );
        return pointer;
      }
      pointer = pointer.nextNode;
    }
    return pointer;
  }
  pop() {
    if (!this._head.nextNode) {
      let temp = this._head;
      this._head.nextNode = null;
      this._head.value = null;
      return temp;
    }
    let pointer = this._head;
    while (pointer.nextNode.nextNode) {
      pointer = pointer.nextNode;
    }
    let temp = pointer.nextNode.nextNode;
    pointer.nextNode = null;
    return temp;
  }
  find(value) {
    let pointer = this._head;
    let index = 0;
    do {
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.nextNode;
      index++;
    } while (pointer);
    return null;
  }
  contains(value) {
    let pointer = this._head;
    let index = 0;
    do {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
      index++;
    } while (pointer);
    return false;
  }
  toString() {
    if (!this._head.value && !this._head.nextNode) {
      return `null`;
    }
    let string = "";
    let pointer = this._head;
    do {
      string += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    } while (pointer);
    return string + String(pointer);
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList();

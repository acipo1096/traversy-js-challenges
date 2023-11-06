class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = [];
    this.top = -1; // empty stack = -1 index. 1 element = 0 index
  }

  push(value) {
    if (this.isFull) {
      return false;
    }

    this.top++;
    this.stack[this.top] = value;
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    // const valueToReturn = this.stack[this.top];

    this.top--;
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.stack[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.maxSize - 1;
  }
}

module.exports = Stack;

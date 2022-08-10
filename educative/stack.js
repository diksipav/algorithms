class Stack {
  stack = [];

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }
}

const stack = [];

stack.push(100);
stack.push("bravo");
stack.pop();
stack.pop();

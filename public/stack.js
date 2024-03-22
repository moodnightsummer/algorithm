class Stack {
  constructor() {
    this.storage = new Object();
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    const result = this.storage[this.size];
    delete this.storage[this.size--];
    console.log(this.size);
    return result;
  }
}

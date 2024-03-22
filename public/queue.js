class Queue {
  constructor() {
    this.storage = new Object();
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.storage[this.rear++] = element;
  }

  dequeue() {
    const result = this.storage[this.front];
    delete this.storage[this.front++];

    return result;
  }
}

const queue = new Queue();

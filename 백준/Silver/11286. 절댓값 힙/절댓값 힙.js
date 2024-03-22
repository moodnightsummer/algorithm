class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  size() {
    return this.rear - this.front;
  }

  peek() {
    return this.queue[this.front];
  }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(11);
console.log(q);
console.log(q.peek());
console.log(q);

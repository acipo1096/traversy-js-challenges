const Queue = require('./queue');

// Code that Brad inserted not in the video

/*
const queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.isFull());
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.getLength());
*/

const queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

queue.dequeue();
queue.dequeue();

console.log(queue.peek());

console.log(queue)

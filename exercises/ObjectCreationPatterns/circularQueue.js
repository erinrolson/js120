// first in first out 
class CircularQueue {
  constructor(bufferSize) {
    this.buffer = Array(bufferSize).fill(null);
    this.head = 0; 
    this.tail = 0; 
  }
  
  enqueue(value) {
    if (this.buffer[this.tail] !== null) {
      // remove and return the value??
      //this.dequeue(); // this seems problematic bc it returns a useful value...
      this.head = this.increment(this.tail);
    }
    // if the tail position is open add the value

    this.buffer.splice(this.tail, 1, value); // add value to open tail position

    this.tail = this.increment(this.tail); // shift the tail

  }
  
  dequeue() {
    // return null if queue is empty
    if ( this.buffer.every(val => val === null) ) {
      return null;
    }
    // remove and return the value at the head position
    let removedValue = this.buffer.splice(this.head, 1, null);
    
    // shift head --> no shift to tail. any situation where we would?
    this.head = this.increment(this.head);
    
    return removedValue.pop();
  }
  
  increment(position) {
    return (position + 1) % this.buffer.length; // when you reach index 2 this will evaluate to 0 providing the 'wrap around' functionality.
  }
}

// let testQueue = new CircularQueue(3);
// testQueue.enqueue(1);
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.enqueue(2);
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.dequeue();
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.enqueue(3);
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.enqueue(4);
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.dequeue();
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.enqueue(5);
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.enqueue(6);
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.enqueue(7);
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.dequeue();
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.dequeue();
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.dequeue();
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

// testQueue.dequeue();
// console.log(testQueue.buffer);
// console.log(`Head: ${testQueue.head}`);
// console.log(`Tail: ${testQueue.tail}`);

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);

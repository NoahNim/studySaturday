//The Queue is a line, it is first in first out
class Queue {
    constructor() {
        this.store = new Array(); // creates new array for queue class
    }
    enqueue(val) {
        this.store.push(val) // adds element to the back of the array
        return true // adds functionality to the function, prints a true for success!
    }
    dequeue() {
        if (!this.store.length) return false; // adds functionality, returns false if the dequeue can't happen
        this.store.shift(); // this removes the first element from the array in accordance with the FIFO method
        return true; // adds functionality
    }
    peek() {
        return this.store[0]; // this prints the first element in the array
    }
    size() {
        return this.store.length; // prints the size of the array
    }
}

let myQQ = new Queue();
myQQ.enqueue(1);
myQQ.enqueue(2);
console.log(myQQ);
myQQ.dequeue();
console.log(myQQ);
console.log(myQQ.size());
console.log(myQQ.peek())

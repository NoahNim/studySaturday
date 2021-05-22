//The Queue is a line, it is first in first out
class Queue {
    constructor() {
        this.store = new Array();
    }
    enqueue(val) {
        this.store.push(val)
        return true
    }
    dequeue() {
        if (!this.store.length) return false;
        this.store.shift();
        return true;
    }
    peek() {
        return this.store[0];
    }
    size() {
        return this.store.length;
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
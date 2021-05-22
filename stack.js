class Stack {
    constructor() {
        this.store = new Array(); // constructs the new array for the stack
    }
    push(ele) {
        this.store.push(ele) // adds element to the last index of the array(top of the stack)
        return true; // adds functionality, returns if push was successful
    }
    pop() {
        return this.store.pop(); // removes element from the last index of the array(top of the stack)
    }
    size() {
        return this.store.length; // returns the total length of the stack
    }
    peek() {
        return this.store[this.store.length - 1] // prints the top index of the array to "peek" at it
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.pop()
console.log(stack);
console.log(stack.size())
console.log(stack.peek())

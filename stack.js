class Stack {
    constructor() {
        this.store = new Array();
    }
    push(ele) {
        this.store.push(ele)
        return true;
    }
    pop() {
        return this.store.pop();
    }
    size() {
        return this.store.length;
    }
    peek() {
        return this.store[this.store.length - 1]
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.pop()
console.log(stack);
console.log(stack.size())
console.log(stack.peek())

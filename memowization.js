/*********************************************************************
Write a function, lucasNumberMemo(n), that takes in a number.
The function should return the n-th number of the Lucas Sequence.
The 0-th number of the Lucas Sequence is 2.
The 1-st number of the Lucas Sequence is 1
To generate the next number of the sequence, we add up the previous two
numbers.

For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...

Solve this recursively with memoization.

Examples:

lucasNumberMemo(0)   // => 2
lucasNumberMemo(1)   // => 1
lucasNumberMemo(40)  // => 228826127
lucasNumberMemo(41)  // => 370248451
lucasNumberMemo(42)  // => 599074578
*********************************************************************/

function lucasNumberMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0) return 2;
    if (n === 1) return 1;

    memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
    return memo[n];
}

console.log(lucasNumberMemo(0))   // => 2
console.log(lucasNumberMemo(1))  // => 1
console.log(lucasNumberMemo(40))  // => 228826127
console.log(lucasNumberMemo(41))  // => 370248451
console.log(lucasNumberMemo(42))  // => 599074578

/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fastFib(1); // 1
fastFib(2); // 1
fastFib(3); // 2
fastFib(4); // 3
fastFib(10); // 55
***********************************************************************/

function fastFib(n, memo = {}) {

}

console.log(fastFib(1)); // 1
console.log(fastFib(2)); // 1
console.log(fastFib(3)); // 2
console.log(fastFib(4)); // 3
console.log(fastFib(10)); // 55
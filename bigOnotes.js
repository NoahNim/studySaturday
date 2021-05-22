//Big O
    //worst case
    // QuickSort:: O(n^2) polynomual
    // MergeSort: (O n log(n)) //loglinear
    // BubbleSort: O(n^2) //polynomial
    // SelectionSort: O(n^2) //polynomial
    // InsertionSort: O(n^2) //polynomial
    // BinarySearch O(log(n)) //logarithmic 
    // O(1) constant
    //example
    function constant(n) {
        return n + 1;
        }
    // O(log(n) logarithmic
    //example
    //array has n elements
    function logarithmic(arr) {
        let mid = Math.floor(arr.length / 2);
        let firstHalf = arr.slice(0, mid);
        return firstHalf;
        }
    // O(n) linear
    //example
    function linear(arr) {
        for (let i = 0; i < 0; i++){
            console.log(arr[i]);
        }
        }
    // O(n*log(n)) loglinear, linearithmic
    //example of one
    function loglinear(arr) {
        let i = 0;
        let mid = Math.floor(arr.length / 2);
        while (i < arr.length) {
            return arr.slice(0, mid);
        }
    }
    // O(n^2) Polynomial
    function polynomial(arr) {
         for (let index = 0; index < array.length; index++) {
            for (let j = 0; j < array.length; j++) {
                console.log(index, j)
          }
       }
    }
    // O(2^n) Exponential
    function expo(n) {
        let total = Math.pow(5, n)
        return total
    }
    // O(n!) Factoriall:
    //n! = n - 1 * n - 2 * n- 3......
    function factorial(n) {
        if (n === 1) return 1;
        return n * factorial(n - 1);
    }
   
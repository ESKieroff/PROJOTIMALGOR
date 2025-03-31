/*
Tail recursion is defined as a recursive function in which the recursive call is the last statement that is executed by the function. So basically nothing is left to execute after the recursion call.
For example the following function print() is tail recursive.
*/

class tail {

function prints(n) {
    if (n < 0) {
        return;
    }
   
    // The last executed statement
    // is recursive call
    prints(n - 1);
}

}



function fact(n) {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
}

// Driver program to test
// above function
console.log(fact(5));
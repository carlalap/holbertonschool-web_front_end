/* task 4. Complex Closure 
@description: Code that performs mathematical operations. 
test the code: node 4-math.js */

/* Create a divideBy function */

function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    }
}

/* Create a function addBy*/

function addBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber + firstNumber;
    }
}

/* Creating four closures */

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);


/* Executing the following code */

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));  
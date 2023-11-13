 /* 9. Prime numbers & timing execution  */

// Function that return the number of prime numbers from 2 to 100
function countPrimeNumbers() {
    let notPrime = 0;
    //for loop iterate over the numbers(n) from 2 to 200
    for (let n = 2; n <= 200; n++){
        //for loop to iterate over the numbers(i) from 2 to number (n-1)
        for (let i = 2; i < n; i++) {
        // check if n is divisible by i using the modulo operator(%)
            if ( n % i == 0) {
                notPrime++;
                break;
            }
        }
    } 
    // Return the difference between 198 and notPrimes, which is the 
    //number of prime numbers from 2 to 200
    return 198 - notPrime;
}

// Declare a variable named start and assign it the current 
// time in milliseconds using the performance.now() method
let start = performance.now();


function count() {
    for (let counterP = 0; counterP < 100; counterP++) {
        countPrimeNumbers();
        }
}

// Declare a variable named end and assign it the current time in milliseconds 
// using the performance.now() method
let end = performance.now();

// print a message to the console that shows the execution time of the countPrimeNumbers
// Changing stack order using setTimeout
setTimeout(() => {
    console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
  }, 0);
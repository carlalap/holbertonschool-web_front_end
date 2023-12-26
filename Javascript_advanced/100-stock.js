/*task. 15. Multiple callbacks  **/

let stock = {macbook: 2, iphone:4};

/* Function named processPayment; It change the stock, 
by removing one item of the stock for the item passed in argument */
function processPayment(itemName) {
    stock[itemName.toLowerCase()] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
}

/* Function named processError, It logs to the console differents messages */
function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log("Payment is not being processed");
}

/* Function to processOrder, It logs to the console the text 
Verifying the stock of <itemName>  */
function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    if (stock[itemName.toLowerCase()] > 0) {
        callbackPayment(itemName);
    }
    else {
        callbackError(itemName);
    }   
}
/* Prompt the user for the item and process the order */
let userInput = prompt("Please enter the item you would like to purchase (Macbook, iPhone):");

/* Convert user input to lowercase for case-insensitive comparison */
let lowerCaseInput = userInput.toLowerCase();

/* Pass the right callbacks to the processOrder function */
processOrder(lowerCaseInput, processPayment, processError);

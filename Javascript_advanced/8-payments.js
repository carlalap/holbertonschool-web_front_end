/*task 8. Stack order in functions */

function processPayment(amount) {
    console.log(`Collecting payment of ${amount}`);
}

// function named processOrder takes 2 arguments OrderId & amount
function processOrder(orderId, amount) {
    console.log(`${orderId} is being processed`);
    return (
        processPayment(amount), console.log(`${orderId} has been fully processed`)
    );
}

/* main part of the code: */
function main() {
    console.log("Processing orders");
    processOrder(12321, 10.99);
    processOrder(12322, 12.99);
    processOrder(12323, 15.0);
    console.log("All the orders have been processed");
}

main();
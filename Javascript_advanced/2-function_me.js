/* Task. 2. Closure  
How to test:
In your web console, cop/paste your file
Executing the following in the console: 
guillaume();
alex();
fred();*/

/* function creation*/
function welcomeMessage(fullName) {
    alert("Welcome " + fullName);
}

/* variables creation */

/* calling back function with argument1 */
guillaume = function() {
    welcomeMessage("Guillaume")
};

/* calling back function with argument2 */
alex = function() {
    welcomeMessage('Alex')
};

/* calling back function with argument3 */
fred = function() {
    welcomeMessage('Fred')
};
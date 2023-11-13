/* Task 1. Closure Scope Chain  
@description: Running the script should display three popups 
one by one with the text:  
Welcome, Welcome Holberton, and Welcome Holberton!  */

/* Global Variable */

let globalVariable = "Welcome";

/* outer function */
function outer () {
    alert(globalVariable);

    let course = "Holberton"

    /* inner function */
    function inner () {
        alert(globalVariable + ' ' + course);

        let exclamation = "!";

        /* function that show an alert with three concatenate valiables */
        function inception() {
            alert(globalVariable + ' ' + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();
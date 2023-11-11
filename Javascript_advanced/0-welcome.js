/* Task 0 - Lexical scoping and welcome message

How to test this code:
Open your web inspector in the tab “Console”
Copy paste your code
Run welcome('Holberton', 'School'); should prompt an alert with this content: Welcome Holberton School!
alert(fullName), should return a reference error fullName is not defined */


function welcome(firstName, lastName) {
    //Obtener el numero
    let fullName = firstName + "  " + lastName;
    
    function displayFullName() {
        alert("Welcome "  +  fullName + "!");
    }
    displayFullName();
}
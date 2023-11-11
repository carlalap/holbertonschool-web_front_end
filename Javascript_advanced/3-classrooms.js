/* Task.3 Closure and loops 
Requirements:
Executing the following code:
console.log(classRoom[0]()); console.log(classRoom[3]()); console.log(classRoom[9]());

Should return
1
4
10*/

function createClassRoom(numbersOfStudents) {
    
    /* inner function that return number of seats*/
    function studentSeat(seat) {
        return function() {
            return seat;
        }
    } 


    let students = [];

    for (let count = 0; count < numbersOfStudents; count++) {
        students.push(studentSeat(count+1))
    }
    return students;
}
let classRoom = createClassRoom(10);

/* task 6. Private methods with closure
Executing the code should display in the console 
Harry: 4
Draco: -2 */

function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore = privateScore + points;
    }

    // Returns an object    
    return {
        //setName, it takes into argument newName, 
        //and set the private variable name
        setName(newName) {
            name = newName;
        },

        //rewardStudent, it calls the method changeScoreBy with 1
        rewardStudent() {
            changeScoreBy(1);
        },

        //penalizeStudent, it calls the method changeScoreBy with -1
        penalizeStudent() {
            changeScoreBy(-1);
        },

        //getScore, it returns name: score (ex: Harry: 14)
        getScore() {
            return name + ": " + privateScore;
        },
    }
}

let harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
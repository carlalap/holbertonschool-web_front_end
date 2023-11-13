/*Task 12. Binding 
@Description - Create an object named roomDimensions with 
the following three attributes: width, length and getArea */

let roomDimensions = (function() {
    let width = 50;
    let length = 100;

    function getArea() {
        return width * length;
    }

    return {
        getArea,
    };
})();

const boundGetArea = roomDimensions.getArea();
// Printing result
console.log(roomDimensions.getArea());
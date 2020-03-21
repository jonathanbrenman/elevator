// Programa principal
const { Elevator } = require('./classes/elevator');
const { Person }   = require('./classes/person');

var personFloor = 5; // La persona se encuentra en el piso 5
var person      = new Person("pepe");
var elevator    = new Elevator(10, 0, "ok");

console.log("Program Started.");
person.openDoor();
person.closeDoor();
person.walkToElevator();
let isElevatorArrived = elevator.requestElevator(personFloor);
if (isElevatorArrived) {
    person.takeElevator();
    elevator.downToPB();
    person.goOut();
} else {
    // no se puede usar el ascensor voy por escalera
    person.downStairs();
    person.goOut();
}
console.log("Program Finished.");
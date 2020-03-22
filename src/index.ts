// Programa principal
const { Elevator } = require('./classes/elevator');
const { Person }   = require('./classes/person');


var init = (personFloor: number, person: any, elevator: any) => {
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
};

console.log("----------------------- Inicio caso 1 -----------------------");
var personFloor = 5; // La persona se encuentra en el piso 5
var person      = new Person("pepe");
var elevator    = new Elevator(10, 0, "ok");
init(personFloor, person, elevator);
console.log("----------------------- Finalizo caso 1 -----------------------");

console.log("----------------------- Inicio caso 2 -----------------------");
var personFloor = 3; // La persona se encuentra en el piso 3
var person      = new Person("juaquin");
var elevator    = new Elevator(10, 0, "fuera de servicio");
init(personFloor, person, elevator);
console.log("----------------------- Finalizo caso 2 -----------------------");
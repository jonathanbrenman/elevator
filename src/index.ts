// Programa principal
require('./classes/ascensor');
require('./classes/person');

const init = () => {
    var personFloor = 5; // La persona se encuentra en el piso 5
    var person   = new Person();
    var elevator = new Elevator(10, 0, "ok");
    
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

console.log("Program Started.");
init();
console.log("Program Finished.");
const sleep = require('sleep');
class Elevator {
    constructor(quantityFloors, initFloor = 0, status = "ok") {
        this.quantityFloors = quantityFloors;
        this.currentFloor = initFloor;
        this.status = status;
        this.elevatorSpeed = 10000; // Velocidad de movimiento entre pisos
    }
    /* Status management */
    getStatus() {
        return this.status;
    }
    setStatus(newStatus) {
        return this.status = newStatus;
    }
    /* Floor management */
    getCurrentFloor() {
        return this.currentFloor;
    }
    setCurrentFloor(floor) {
        return this.currentFloor = floor;
    }
    /* Some basic elevator methods */
    /* Devuelvo si el ascensor llego al piso solicitado */
    hasElevatorArrived(requestedFloor) {
        return this.getCurrentFloor() === requestedFloor;
    }
    moveElevatorOneFloor(elevetorNewPosition) {
        console.log("moveElevatorOneFloor to position", elevetorNewPosition);
        // Muevo el ascensor con la velocidad seteada (10seg x piso)
        sleep(this.elevatorSpeed);
        this.setCurrentFloor(elevetorNewPosition);
    }
    /* Metodo para pedir el ascensor */
    requestElevator(requestedFloor) {
        console.log("requestElevator");
        /*
          Antes de arrancar el ascensor verifico que este ok
          - el piso solicitado no puede ser mayor a la cantidad de pisos que tiene el edificio.
        */
        if (this.getStatus() !== "ok" || this.quantityFloors > this.getCurrentFloor()) {
            return false;
        }
        // Subo o bajo ascensor a piso solicitado, verificando que no cambie el estado
        while (this.getCurrentFloor() !== requestedFloor && this.getStatus() === "ok") {
            // si llego el ascensor retorno true
            if (this.hasElevatorArrived(requestedFloor)) {
                console.log("elevator has arrived");
                return true;
            }
            else {
                console.log("moving elevator...");
                // si no se encuentra en el piso solicitado me fijo de subir o bajar de a un piso
                let currentFloor = this.getCurrentFloor();
                if (requestedFloor > this.getCurrentFloor()) {
                    // si el piso que pidio el ascensor es mayor al que se encuentra subo un piso
                    this.moveElevatorOneFloor(currentFloor++);
                }
                else {
                    // si el piso que pidio el ascensor es mayor al que se encuentra bajo un piso
                    this.moveElevatorOneFloor(currentFloor--);
                }
            }
        }
        /*
          Si llego aca significa que el ascensor cambio de estado y no esta ok,
          puede que este ocupado o este fuera de servicio, puerta abierta, etc.
        */
        return false;
    }
    downToPB() {
        console.log("getting down elevator");
        let pb = 0;
        if (this.getStatus() !== "ok" || this.quantityFloors > this.getCurrentFloor()) {
            return false;
        }
        while (this.getCurrentFloor() !== pb && this.getStatus() === "ok") {
            // si llego el ascensor retorno true
            if (this.hasElevatorArrived(pb)) {
                console.log("elevator has arrived to pb");
                return true;
            }
            else {
                console.log("moving elevator... to pb");
                // si no se encuentra en el piso solicitado me fijo de subir o bajar de a un piso
                let currentFloor = this.getCurrentFloor();
                if (pb > this.getCurrentFloor()) {
                    // si el piso que pidio el ascensor es mayor al que se encuentra subo un piso
                    this.moveElevatorOneFloor(currentFloor++);
                }
                else {
                    // si el piso que pidio el ascensor es mayor al que se encuentra bajo un piso
                    this.moveElevatorOneFloor(currentFloor--);
                }
            }
        }
        return false;
    }
}
module.exports.Elevator = Elevator;
//# sourceMappingURL=ascensor.js.map
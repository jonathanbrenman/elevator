const { sleep } = require('sleep');

export class Elevator {

    private quantityFloors: number;
    private currentFloor: number;
    private status: string;
    private elevatorSpeed: number;

    constructor (quantityFloors: number, initFloor: number = 0, status: string = "ok") {
      this.quantityFloors = quantityFloors;
      this.currentFloor   = initFloor;
      this.status         = status;
      this.elevatorSpeed  = 5; // Velocidad de movimiento entre pisos
    }

    /* Status management */

    public getStatus () {
      return this.status;
    }

    public setStatus (newStatus: string) {
      return this.status = newStatus;
    }

    /* Floor management */

    public getCurrentFloor () {
      return this.currentFloor;
    }

    public setCurrentFloor (floor: number) {
      return this.currentFloor = floor;
    }

    /* Some basic elevator methods */

    /* Devuelvo si el ascensor llego al piso solicitado */
    public hasElevatorArrived (requestedFloor: number) {
      return this.getCurrentFloor() === requestedFloor;
    }

    public moveElevatorOneFloor (elevetorNewPosition: number) {
      console.log("moveElevatorOneFloor to position", elevetorNewPosition);
      // Muevo el ascensor con la velocidad seteada (5seg x piso)
      sleep(this.elevatorSpeed);
      this.setCurrentFloor(elevetorNewPosition);
    }

    /* Metodo para pedir el ascensor */
    public requestElevator (requestedFloor: number) {
      console.log("requestElevator to floor", requestedFloor);
      /* 
        Antes de arrancar el ascensor verifico que este ok 
        - el piso solicitado no puede ser mayor a la cantidad de pisos que tiene el edificio.
      */
     if (this.getStatus() !== "ok" || requestedFloor > this.quantityFloors) { 
       return false 
      }
      // Subo o bajo ascensor a piso solicitado, verificando que no cambie el estado
      while (this.getCurrentFloor() !== requestedFloor && this.getStatus() === "ok") {
        // si llego el ascensor retorno true
        if (this.hasElevatorArrived(requestedFloor)) {
          console.log("elevator has arrived");
          return true;
        } else {
          let currentFloor = this.getCurrentFloor();
          // si no se encuentra en el piso solicitado me fijo de subir o bajar de a un piso
          if (requestedFloor > this.getCurrentFloor()){
            // si el piso que pidio el ascensor es mayor al que se encuentra subo un piso
            currentFloor += 1;
            this.moveElevatorOneFloor(currentFloor);
          } else {
            // si el piso que pidio el ascensor es mayor al que se encuentra bajo un piso
            currentFloor -= 1;
            this.moveElevatorOneFloor(currentFloor);
          }
        }
      }

      if (this.hasElevatorArrived(requestedFloor)) {
        return true;
      }

      /* 
        Si llego aca significa que el ascensor cambio de estado y no esta ok,
        puede que este ocupado o este fuera de servicio, puerta abierta, etc.
      */
      return false;
    }

    public downToPB () {
      console.log("getting down elevator");
      let pb: number = 0;
      while (this.getCurrentFloor() !== pb && this.getStatus() === "ok") {
        // si llego el ascensor retorno true
        if (this.hasElevatorArrived(pb)) {
          console.log("elevator has arrived to pb");
          return true;
        } else {
          console.log("moving elevator... to pb");
          // si no se encuentra en el piso solicitado me fijo de subir o bajar de a un piso
          let currentFloor = this.getCurrentFloor();
          if (pb > this.getCurrentFloor()){
            // si el piso que pidio el ascensor es mayor al que se encuentra subo un piso
            currentFloor += 1;
            this.moveElevatorOneFloor(currentFloor);
          } else {
            // si el piso que pidio el ascensor es mayor al que se encuentra bajo un piso
            currentFloor -= 1;
            this.moveElevatorOneFloor(currentFloor);
          }
        }
      }
      return false 
    }

}
class Elevator {

    private quantityFloors: number;
    private currentFloor: number;
    private status: string;
    private elevatorSpeed: number;

    constructor (quantityFloors: number, initFloor: number = 0, status: string = "ok") {
      this.quantityFloors = quantityFloors;
      this.currentFloor   = initFloor;
      this.status         = status;
      this.elevatorSpeed  = 10000;
    }

    /* Status management */

    private getStatus () {
      return this.status;
    }

    private setStatus (newStatus: string) {
      return this.status = newStatus;
    }

    /* Floor management */

    private getCurrentFloor () {
      return this.currentFloor;
    }

    private setCurrentFloor (floor: number) {
      return this.currentFloor = floor;
    }

    /* Some basic elevator methods */

    /* Devuelvo si el ascensor llego al piso solicitado */
    private hasElevatorArrived (requestedFloor: number) {
      return this.getCurrentFloor() === requestedFloor;
    }

    private moveElevatorOneFloor (elevetorNewPosition: number) {
      this.setCurrentFloor(elevetorNewPosition);
    }

    /* Metodo para pedir el ascensor */
    private requestElevator (requestedFloor: number) {
      /* 
        Antes de arrancar el ascensor verifico que este ok 
        - el piso solicitado no puede ser mayor a la cantidad de pisos que tiene el edificio.
      */
      if (this.getStatus() !== "ok" || this.quantityFloors <= this.getCurrentFloor()) { return false }
      // Subo o bajo ascensor a piso solicitado, verificando que no cambie el estado
      while (this.getCurrentFloor() !== requestedFloor && this.getStatus() === "ok") {
        // si llego el ascensor retorno true
        if (this.hasElevatorArrived(requestedFloor)) {
          return true;
        } else {
          // si no se encuentra en el piso solicitado me fijo de subir o bajar de a un piso
          let currentFloor = this.getCurrentFloor();
          if (requestedFloor > this.getCurrentFloor()){
            // si el piso que pidio el ascensor es mayor al que se encuentra subo un piso
            this.moveElevatorOneFloor(currentFloor++);
          } else {
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

}

module.exports.Elevator = Elevator
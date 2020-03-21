class Person {

    private name: string;

    constructor (name: string) {
       this.name = name;
       console.log("Created person >", name);
    }

    public openDoor() {
        console.log("Opening door");
    }

    public closeDoor() {
        console.log("Closing door");
    }

    public walkToElevator() {
        console.log("Walk to elevator");
    }

    public downStairs() {
        console.log("Down by stairs");
    }

    public takeElevator() {
        console.log("getting in elevator");
    }

    public goOut() {
        console.log("Go out");
    }
}

module.exports = Person
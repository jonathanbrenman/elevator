class Person {
    constructor(name) {
        this.name = name;
        console.log("Created person >", name);
    }
    openDoor() {
        console.log("Opening door");
    }
    closeDoor() {
        console.log("Closing door");
    }
    walkToElevator() {
        console.log("Walk to elevator");
    }
    downStairs() {
        console.log("Down by stairs");
    }
    takeElevator() {
        console.log("getting in elevator");
    }
    goOut() {
        console.log("Go out");
    }
}
module.exports.Person = Person;
//# sourceMappingURL=person.js.map